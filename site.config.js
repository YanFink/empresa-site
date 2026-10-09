/**
 * CONFIGURAÇÃO CENTRAL DA MARCA
 * -----------------------------
 * Tudo que muda quando a empresa tiver nome definitivo está aqui:
 * nome, cores, fontes, contatos, domínio e flags de exibição.
 * Os textos de marca (slogans, descrições) ficam em content/pt.js e content/en.js
 * e usam o marcador {brand}, que é trocado pelo nome abaixo.
 *
 * Depois de mexer aqui, rode:  npm run build
 */
module.exports = {
  brand: {
    name: "Lynx",              // nome provisório (troque quando definir)
    legalName: "Lynx",         // razão social / nome jurídico (aparece no rodapé e na privacidade)
    // Logo provisória 100% tipográfica: o nome em caixa alta com um ponto de destaque.
    // Para usar um logo em imagem no futuro, coloque o arquivo em assets/ e preencha logoFile.
    logoFile: null,
  },

  // URL final do site, sem barra no fim. Se for GitHub Pages sem domínio próprio,
  // use https://SEU-USUARIO.github.io/empresa-site
  siteUrl: "https://example.com",

  languages: ["pt", "en"],
  defaultLang: "pt",

  contact: {
    // WhatsApp só com números, com DDI+DDD. TROQUE pelo número real.
    whatsapp: "5511900000000",
    // TROQUE pelo e-mail real.
    email: "contato@example.com",
  },

  // Nomes de clientes reais NÃO aparecem no site por padrão.
  // Só mude para true depois que o cliente autorizar, e preencha os nomes.
  showClientNames: false,
  clientNames: {
    auto: "Megatrom",
    pharmacy: "Privilégio Fórmulas",
  },

  // Paleta provisória: grafite profundo + acento teal.
  colors: {
    bg: "#090d12",
    bgAlt: "#0d131a",
    surface: "#121a23",
    surface2: "#18222d",
    border: "#243240",
    text: "#e9eff5",
    muted: "#9aabbb",
    accent: "#22c7d6",
    accentStrong: "#4fe3f0",
    accentDeep: "#0f8b9a",
    warm: "#f2b36b", // toque quente usado em mockups
  },

  // Fontes self-hosted (pacotes @fontsource). Se trocar, ajuste também build.js.
  fonts: {
    display: "Space Grotesk",
    body: "Inter",
  },

  year: 2026,
};
