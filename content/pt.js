module.exports = {
  lang: "pt",
  htmlLang: "pt-BR",
  ogLocale: "pt_BR",
  paths: { privacy: "privacidade" },
  meta: {
    title: "{brand} — Sistemas de gestão sob medida e sites",
    description:
      "Desenvolvemos sistemas de gestão sob medida para qualquer ramo de negócio, além de sites. Licença mensal, hospedagem dedicada e preço justo. Peça um orçamento.",
    privacyTitle: "Política de privacidade — {brand}",
    privacyDescription: "Como o site da {brand} trata dados pessoais, em conformidade com a LGPD.",
  },
  ui: {
    skip: "Pular para o conteúdo",
    menu: "Abrir menu",
    menuClose: "Fechar menu",
    switchTo: "English",
    switchLabel: "Mudar para o inglês",
    switchCode: "EN",
    home: "Página inicial",
    mockNote: "Tela de demonstração com dados fictícios",
    backHome: "Voltar ao site",
  },
  nav: [
    { id: "o-que-fazemos", label: "O que fazemos" },
    { id: "sistemas", label: "Sistemas" },
    { id: "entregamos", label: "O que entregamos" },
    { id: "como-trabalhamos", label: "Como trabalhamos" },
    { id: "jogos", label: "Jogos" },
  ],
  cta: "Peça um orçamento",
  hero: {
    eyebrow: "Software sob medida",
    title: ["Sistemas que se encaixam no seu negócio,", "não o contrário."],
    sub: "Criamos sistemas de gestão e sites sob medida para qualquer ramo. Mais completos que um sistema genérico, sem o preço de uma grande agência.",
    secondary: "Ver o que construímos",
    chips: ["Sob medida", "Hospedagem dedicada", "Pensado para a LGPD"],
    floatA: "Agenda do dia",
    floatB: "Módulos ativos",
    floatC: "Dados protegidos",
  },
  what: {
    eyebrow: "O que fazemos",
    id: "o-que-fazemos",
    title: "Se a sua empresa precisa de um sistema, a gente constrói.",
    intro:
      "Não trabalhamos com um nicho só. Entendemos como o seu negócio funciona e desenhamos o sistema em cima do seu jeito de trabalhar, sem forçar você a se adaptar a um programa de prateleira.",
    cards: [
      {
        icon: "system",
        title: "Sistemas de gestão sob medida",
        text: "Agenda, vendas, estoque, financeiro, clientes, relatórios: o que o seu negócio precisar, no formato que fizer sentido. Acesso pelo navegador, no computador ou no celular.",
      },
      {
        icon: "site",
        title: "Sites",
        text: "Sites institucionais e páginas de apresentação rápidas, bonitas e fáceis de encontrar, feitos com o mesmo cuidado dos nossos sistemas.",
      },
      {
        icon: "game",
        title: "Jogos para Steam",
        text: "Um projeto que está nos planos para o futuro.",
        badge: "Em breve",
        href: "#jogos",
      },
    ],
    nichesTitle: "Alguns ramos, só como exemplo",
    nichesNote: "São apenas ilustrações. Se o seu ramo não está na lista, a gente atende também.",
    niches: [
      "Beleza e estética",
      "Oficinas e centros automotivos",
      "Farmácias e saúde",
      "Varejo",
      "Serviços",
      "Educação",
      "Alimentação",
      "Logística",
    ],
  },
  projects: {
    eyebrow: "Sistemas que construímos",
    id: "sistemas",
    title: "Exemplos do nosso trabalho, não o limite dele.",
    intro:
      "Estes são alguns sistemas que desenvolvemos. Servem para você ver como pensamos produto, e qualquer um deles pode ser adaptado ou virar algo completamente diferente.",
    disclaimer:
      "Projetos de demonstração. As telas mostram dados fictícios e não representam clientes em produção.",
    modulesTitle: "Módulos",
    items: [
      {
        key: "salon",
        tag: "Beleza e estética",
        title: "Sistema para salão de beleza",
        text: "Do primeiro agendamento ao pós-atendimento, tudo no mesmo lugar. Cada recurso é um módulo que pode ser ligado ou desligado conforme a necessidade do salão.",
        features: [
          "Agenda com arrastar e soltar",
          "Comandas e pagamentos",
          "Comissões",
          "Estoque",
          "Pacotes de sessões",
          "Fidelidade",
          "Ficha técnica com fotos",
          "Agendamento online",
          "Lembrete por WhatsApp",
          "Pesquisa de satisfação",
          "Verificação em duas etapas",
          "LGPD",
        ],
      },
      {
        key: "auto",
        tag: "Oficinas e centros automotivos",
        title: "Sistema para centro automotivo",
        text: "Organiza o fluxo da oficina, da entrada do veículo à entrega, com ordens de serviço, clientes, veículos e peças em um só lugar.",
        features: ["Ordens de serviço", "Clientes e veículos", "Orçamentos", "Estoque de peças", "Financeiro"],
      },
      {
        key: "pharmacy",
        tag: "Farmácias e saúde",
        title: "Sistema para farmácia de manipulação",
        text: "Cadastro de fórmulas, insumos e lotes, receitas, pedidos e pagamentos, com atenção especial à segurança e à rastreabilidade dos dados.",
        features: ["Fórmulas e produtos", "Estoque com lotes", "Clientes e receitas", "Pedidos e pagamentos", "Controle de acesso"],
      },
      {
        key: "crm",
        tag: "Qualquer ramo",
        title: "CRM genérico",
        text: "Um ponto de partida para acompanhar contatos, oportunidades e conversas comerciais, que pode ser moldado ao processo de venda de cada empresa.",
        features: ["Contatos e empresas", "Funil de oportunidades", "Histórico de atendimento", "Tarefas e lembretes"],
      },
    ],
    mock: {
      salon: {
        week: ["Seg", "Ter", "Qua", "Qui", "Sex"],
        title: "Agenda",
        clients: ["Cliente A", "Cliente B", "Cliente C", "Cliente D", "Cliente E", "Cliente F"],
        services: ["Corte", "Coloração", "Escova", "Manicure", "Hidratação", "Barba"],
      },
      auto: {
        title: "Ordens de serviço",
        cols: ["Aguardando", "Em serviço", "Pronto"],
        vehicle: "Veículo",
        services: ["Revisão", "Freios", "Alinhamento", "Troca de óleo", "Suspensão"],
      },
      pharmacy: {
        title: "Estoque e lotes",
        head: ["Item", "Lote", "Saldo", "Status"],
        rows: ["Insumo 01", "Insumo 02", "Insumo 03", "Insumo 04"],
        status: ["Ok", "Baixo", "Ok", "Ok"],
      },
      crm: {
        title: "Funil de oportunidades",
        stages: ["Novo", "Contato", "Proposta", "Fechado"],
      },
    },
  },
  deliver: {
    eyebrow: "O que entregamos",
    id: "entregamos",
    title: "Um sistema completo, com cuidado nos detalhes.",
    items: [
      {
        icon: "tailor",
        title: "Sob medida",
        text: "Funções e telas desenhadas para o seu processo, sem excesso de recursos que você não usa e sem faltar o que você precisa.",
      },
      {
        icon: "shield",
        title: "Segurança",
        text: "Controle de acesso por perfil e verificação em duas etapas, de acordo com o que cada projeto pede.",
      },
      {
        icon: "lock",
        title: "LGPD",
        text: "Sistemas pensados para tratar dados pessoais com responsabilidade, com recursos de apoio às obrigações da lei.",
      },
      {
        icon: "chat",
        title: "WhatsApp",
        text: "Lembretes e comunicação com seus clientes pelo canal que eles já usam, nos projetos em que isso faz sentido.",
      },
      {
        icon: "toggle",
        title: "Módulos que se ligam e desligam",
        text: "Ative só o que você precisa agora e acrescente o resto quando o negócio crescer.",
      },
      {
        icon: "server",
        title: "Hospedagem dedicada",
        text: "Cada cliente tem o seu próprio servidor. O seu sistema não é compartilhado com outras empresas.",
      },
    ],
    model: {
      title: "Como funciona a contratação",
      text: "Você paga uma licença de uso mensal, que inclui a hospedagem dedicada do seu sistema. Sem surpresas: o orçamento é feito depois de entendermos o que o seu negócio precisa.",
    },
    positioning: {
      left: "Sistema genérico",
      leftNote: "Preço baixo, mas poucas funções e pouca adaptação.",
      mid: "Sob medida, com preço justo",
      midNote: "Completo e feito para o seu processo.",
      right: "Grande agência",
      rightNote: "Muito personalizado, mas com preço de grande porte.",
    },
  },
  process: {
    eyebrow: "Como trabalhamos",
    id: "como-trabalhamos",
    title: "Do primeiro contato ao suporte, em cinco passos.",
    steps: [
      { title: "Conversa", text: "Ouvimos como o seu negócio funciona hoje e o que está travando." },
      { title: "Proposta", text: "Apresentamos o que será feito e as condições, de forma clara." },
      { title: "Protótipo", text: "Você vê e valida as telas antes de o sistema ganhar forma final." },
      { title: "Entrega", text: "Colocamos o sistema no ar, no seu servidor dedicado." },
      { title: "Suporte", text: "Seguimos ao seu lado, ajustando e evoluindo o sistema." },
    ],
  },
  games: {
    eyebrow: "Jogos",
    id: "jogos",
    badge: "Em breve",
    title: "Também vamos fazer jogos.",
    text: "Estamos nos preparando para criar jogos para PC e lançá-los na Steam. Ainda é cedo: não há título, nem data, e preferimos contar mais quando houver algo de verdade para mostrar.",
    teaser: "Carregando…",
    teaserAlt: "Ilustração abstrata de uma tela de jogo em preparação, com blocos animados",
  },
  contact: {
    eyebrow: "Contato",
    id: "contato",
    title: "Vamos conversar sobre o seu sistema?",
    text: "Conte o que o seu negócio precisa. Respondemos com uma proposta feita sob medida.",
    whatsapp: "Chamar no WhatsApp",
    email: "Enviar e-mail",
    waMessage: "Olá! Gostaria de pedir um orçamento.",
    emailSubject: "Pedido de orçamento",
    note: "Os valores são definidos caso a caso, depois de entendermos o seu projeto.",
  },
  footer: {
    privacy: "Privacidade (LGPD)",
    rights: "Todos os direitos reservados.",
    demoNote: "Os projetos exibidos são demonstrações com dados fictícios.",
  },
  privacy: {
    title: "Política de privacidade",
    updated: "Última atualização: outubro de 2026",
    draftNote:
      "Texto-base provisório. Revise com um advogado e complete os dados do controlador antes de publicar em definitivo.",
    sections: [
      {
        h: "Quem somos",
        p: [
          "Este site é mantido por {legalName} (o “controlador”). Para falar sobre dados pessoais, escreva para {email}.",
        ],
      },
      {
        h: "Quais dados tratamos",
        p: [
          "O site não possui formulários, não exige cadastro e não usa ferramentas de análise ou publicidade. Não coletamos dados pessoais pela navegação.",
          "Guardamos no seu navegador, localmente, apenas a sua preferência de idioma, para abrir o site na língua que você escolheu. Essa informação não é enviada para nós.",
        ],
      },
      {
        h: "Quando você entra em contato",
        p: [
          "Se você nos escrever por WhatsApp ou e-mail, trataremos as informações que você enviar (como nome, telefone e a descrição do que precisa) somente para responder ao seu pedido e elaborar uma proposta. Essas mensagens também passam pelas plataformas que você escolheu usar, que têm as próprias políticas de privacidade.",
        ],
      },
      {
        h: "Base legal e prazo",
        p: [
          "Tratamos esses dados para atender a uma solicitação sua e para tomar providências preliminares a um possível contrato (LGPD, art. 7º, V), e os mantemos pelo tempo necessário para esse fim ou para cumprir obrigações legais.",
        ],
      },
      {
        h: "Compartilhamento",
        p: ["Não vendemos dados pessoais. Podemos compartilhá-los apenas com prestadores que nos ajudam a atender você, sob dever de confidencialidade, ou quando a lei exigir."],
      },
      {
        h: "Seus direitos",
        p: [
          "Nos termos da LGPD, você pode pedir confirmação do tratamento, acesso, correção, anonimização, portabilidade, eliminação dos dados e informações sobre compartilhamento, além de revogar o consentimento, quando aplicável. Basta escrever para {email}.",
        ],
      },
      {
        h: "Alterações",
        p: ["Podemos atualizar esta política. A data da última atualização fica sempre indicada no topo da página."],
      },
    ],
  },
};
