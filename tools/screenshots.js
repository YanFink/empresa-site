// Gera capturas de tela do site em desktop, tablet e celular, nos dois idiomas.
// Uso: node tools/screenshots.js
const http = require("http");
const fs = require("fs");
const path = require("path");
let chromium;
const puppeteer = require("puppeteer-core");

const DIST = path.join(__dirname, "..", "docs");
const OUT = path.join(__dirname, "..", "screenshots");
const MIME = { ".html": "text/html", ".css": "text/css", ".js": "text/javascript", ".svg": "image/svg+xml", ".woff2": "font/woff2", ".xml": "application/xml", ".txt": "text/plain" };

const server = http.createServer((req, res) => {
  let p = decodeURIComponent(req.url.split("?")[0]);
  let f = path.join(DIST, p);
  if (!f.startsWith(DIST)) { res.writeHead(403); return res.end(); }
  if (fs.existsSync(f) && fs.statSync(f).isDirectory()) f = path.join(f, "index.html");
  if (!fs.existsSync(f)) { res.writeHead(404); return res.end("404"); }
  res.writeHead(200, { "Content-Type": MIME[path.extname(f)] || "application/octet-stream" });
  fs.createReadStream(f).pipe(res);
});

const VIEWPORTS = [
  { name: "desktop", width: 1440, height: 900 },
  { name: "tablet", width: 820, height: 1180 },
  { name: "mobile", width: 390, height: 844, mobile: true },
];
const PAGES = [
  { name: "pt", url: "/pt/" },
  { name: "en", url: "/en/" },
  { name: "pt-privacidade", url: "/pt/privacidade/", only: "desktop" },
];

(async () => {
  const mod = await import("@sparticuz/chromium"); chromium = mod.default || mod;
  fs.mkdirSync(OUT, { recursive: true });
  await new Promise((r) => server.listen(4173, r));
  const browser = await puppeteer.launch({
    args: chromium.args,
    executablePath: await chromium.executablePath(),
    headless: "shell",
  });
  const report = [];
  for (const vp of VIEWPORTS) {
    for (const pg of PAGES) {
      if (pg.only && pg.only !== vp.name) continue;
      const page = await browser.newPage();
      const errors = [];
      page.on("pageerror", (e) => errors.push("pageerror: " + e.message));
      page.on("console", (m) => { if (m.type() === "error") errors.push("console: " + m.text()); });
      page.on("requestfailed", (r) => errors.push("requestfailed: " + r.url()));
      await page.setViewport({ width: vp.width, height: vp.height, deviceScaleFactor: 1, isMobile: !!vp.mobile, hasTouch: !!vp.mobile });
      await page.goto(`http://localhost:4173${pg.url}`, { waitUntil: "networkidle0" });
      // rola a página para disparar as animações de entrada
      await page.evaluate(async () => {
        const step = Math.round(innerHeight * 0.7);
        for (let y = 0; y < document.body.scrollHeight; y += step) { scrollTo(0, y); await new Promise((r) => setTimeout(r, 220)); }
        scrollTo(0, 0);
        await new Promise((r) => setTimeout(r, 2500));
      });
      const overflow = await page.evaluate(() => document.documentElement.scrollWidth - document.documentElement.clientWidth);
      const file = path.join(OUT, `${vp.name}-${pg.name}.png`);
      await page.screenshot({ path: file, fullPage: true });
      // primeira dobra
      await page.screenshot({ path: path.join(OUT, `${vp.name}-${pg.name}-topo.png`) });
      report.push({ vp: vp.name, page: pg.name, horizontalOverflowPx: overflow, errors });
      await page.close();
    }
  }
  await browser.close();
  server.close();
  console.log(JSON.stringify(report, null, 2));
})().catch((e) => { console.error(e); server.close(); process.exit(1); });
