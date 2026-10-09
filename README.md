# Site institucional (nome provisório: Lynx)

Site em duas versões completas, português do Brasil (`/pt/`) e inglês (`/en/`), gerado de forma estática. Sem framework: HTML, CSS e um pouco de JavaScript.

## Como trocar nome, cores e contatos

Tudo está em **`site.config.js`**: nome da marca, cores, fontes, WhatsApp, e-mail e domínio.
Os textos ficam em `content/pt.js` e `content/en.js` (o marcador `{brand}` vira o nome da marca).

Antes de publicar, troque no `site.config.js`:

- `contact.whatsapp` e `contact.email` (hoje são valores de exemplo);
- `siteUrl` (usado em canonical, hreflang e sitemap);
- `brand.name` e `brand.legalName`.

Nomes de clientes reais **não** aparecem no site. Só ative `showClientNames` depois que o cliente autorizar.

## Comandos

```bash
npm install
npm run build        # gera a pasta dist/
npm start            # gera e serve em http://localhost:4173
node tools/screenshots.js   # capturas em desktop/tablet/celular, PT e EN
```

## Publicação

A pasta `dist/` é o site pronto (pode ir para GitHub Pages, Netlify, Cloudflare Pages ou qualquer hospedagem estática). Os caminhos são relativos, então funciona também em subpasta, como `usuario.github.io/empresa-site`.

## Observações

- A página de privacidade é um texto-base provisório: revise com um advogado antes de publicar em definitivo.
- Idioma: a raiz (`/`) escolhe pelo idioma do navegador na primeira visita e lembra a escolha feita no botão de idioma.
- Animações respeitam `prefers-reduced-motion`.
