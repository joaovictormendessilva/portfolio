import type { Dictionary } from "./en";

export const pt: Dictionary = {
  nav: {
    work: "Projetos",
    experience: "Experiência",
    stack: "Stack",
    contact: "Contato",
    skipToContent: "Pular para o conteúdo",
  },

  meta: {
    title: "João Victor Mendes Silva — Desenvolvedor Frontend",
    description:
      "Desenvolvedor frontend com sete anos construindo para a web, os últimos três no ecossistema React, hoje expandindo para o desenvolvimento full stack.",
  },

  theme: {
    toLight: "Mudar para o tema claro",
    toDark: "Mudar para o tema escuro",
  },

  language: {
    label: "Idioma",
    en: "English",
    pt: "Português",
  },

  hero: {
    name: "João Victor Mendes Silva",
    role: "Desenvolvedor Frontend",
    headline: "Reconstruindo sistemas que não podem quebrar.",
    lede: "Sete anos construindo para a web, os últimos três no ecossistema React. Sou responsável pela arquitetura front-end de novos sistemas em produção numa fabricante americana do setor de energia, atuei na migração de plataformas de consórcio do Magazine Luiza, Porto Seguro e Banco do Brasil para fora do .NET, e hoje estou expandindo para o back-end com NestJS e PostgreSQL.",
    location: "Linhares, Brasil (UTC−3)",
    english: "Inglês B2 (EF SET)",
    primaryAction: "Ver os projetos",
    secondaryAction: "Me enviar e-mail",
  },

  work: {
    title: "Projetos selecionados",
    intro:
      "Dois projetos, ambos no ar. Cada um diz o que realmente faz e o que ainda não faz.",
    viewLive: "Abrir site",
    viewCode: "Ver o código",
    viewCase: "Ler o case study",
    stackLabel: "Construído com",
    limitationLabel: "Escopo",

    projects: {
      "fantasmo-shop": {
        summary: "Um projeto de estudo: uma loja com autenticação no servidor, carrinho e e-mail de pedido.",
        detail:
          "Eu queria entender como o Next.js pode fazer uma autenticação real, validando o token da sessão no servidor sem expor esse token ao navegador. Rotas protegidas mandam quem não tem uma sessão válida de volta para o login. Os e-mails de pedido são feitos como um componente React e enviados pela minha própria configuração de SMTP, sem um serviço externo de e-mail.",
        limitation:
          "Ainda não há banco de dados: a lista de produtos é estática, e qualquer e-mail e senha não vazios fazem login.",
      },
      "pulse-ai": {
        summary: "Uma landing page feita a partir de um design pronto, para praticar Tailwind e responsividade.",
        detail:
          "Fiz esta página para ganhar mais prática com Tailwind e layouts responsivos. Segui um design feito no Visily o mais fielmente possível, como se uma equipe de design tivesse me entregado. O dashboard do topo é feito com classes do Tailwind, não com uma imagem.",
        limitation:
          "Só front-end: não há back-end, e o conteúdo e os números são fictícios.",
      },
    },
  },

  caseStudy: {
    backLabel: "Voltar aos projetos",
    contextLabel: "Contexto",
    challengeLabel: "O problema",
    decisionsLabel: "Decisões",
    resultLabel: "Onde está hoje",
    nextLabel: "O que eu mudaria",
    studies: {
      "fantasmo-shop": {
        context:
          "Um projeto de estudo. Eu queria construir um fluxo de compra completo: login, lista de produtos com filtros, carrinho e e-mail de pedido.",
        challenge:
          "O objetivo principal era a autenticação. Eu queria que o token da sessão fosse validado no servidor, sem que o navegador tivesse acesso a ele, e que usuários sem uma sessão válida voltassem para a tela de login.",
        decisions: [
          {
            title: "O token fica num cookie httpOnly",
            body: "O JavaScript do navegador não consegue ler esse cookie. O token é assinado com jose e verificado no proxy.ts antes das páginas protegidas carregarem. Se ele for inválido, o cookie é removido e o usuário volta para o login.",
          },
          {
            title: "E-mails de pedido sem serviço externo",
            body: "O template do e-mail é um componente React, feito como uma página do site. Ele é renderizado em HTML e enviado pela minha própria configuração de SMTP com Nodemailer, então o projeto não depende de um serviço externo de e-mail.",
          },
        ],
        result:
          "Login, dashboard protegido, lista de produtos com filtros, carrinho e e-mail de confirmação do pedido.",
        next: [
          "Verificar os usuários e carregar os produtos a partir de um banco PostgreSQL.",
        ],
      },
      "pulse-ai": {
        context:
          "Uma landing page para um produto de IA fictício, com hero, funcionalidades, métricas, depoimentos, preços, perguntas frequentes e uma chamada final.",
        challenge:
          "Dois objetivos: ganhar prática com o Tailwind e fazer cada seção funcionar bem do celular ao desktop, mantendo a fidelidade ao design.",
        decisions: [
          {
            title: "Seguir o design como se viesse de uma equipe de design",
            body: "Usei o design do Visily como referência e tentei reproduzir espaçamentos, cores e layout em vez de improvisar.",
          },
          {
            title: "Componentes pequenos e reutilizáveis",
            body: "Botões, cards, chips, títulos de seção e o container da página são componentes compartilhados, então todas as seções são montadas com as mesmas peças.",
          },
          {
            title: "O dashboard do topo é feito com Tailwind",
            body: "Em vez de um print, a ilustração do topo é construída com HTML e classes do Tailwind, então continua nítida e se adapta a telas menores.",
          },
        ],
        result:
          "Uma landing page completa que funciona do celular ao desktop, com menu lateral (drawer) em telas pequenas.",
        next: [
          "O conteúdo e os números são fictícios. Estão ali para preencher o layout.",
          "Não há back-end: formulários e botões não enviam nada.",
        ],
      },
    },
  },

  experience: {
    title: "Experiência",
    present: "Atual",

    roles: [
      {
        company: "WTEC Energy",
        role: "Desenvolvedor de Software (Frontend)",
        period: "Mai 2024 — Atual",
        summary:
          "Sou responsável pela arquitetura front-end de duas novas aplicações web em monorepo, usadas por equipes nos EUA e na Índia, e pelo front-end da plataforma de identidade e acessos da empresa. Conduzi a implementação técnica da migração do app de operações de .NET MAUI para React Native e hoje reviso os pull requests do time de sustentação. Desenvolvi e mantenho o site institucional em Next.js com suporte multilíngue.",
      },
      {
        company: "Sinqia",
        role: "Desenvolvedor Frontend",
        period: "Jun 2023 — Mai 2024",
        summary:
          "Atuei na migração de plataformas de consórcio do Magazine Luiza, Porto Seguro e Banco do Brasil do .NET para React, React Native e Next.js. Iniciei o front-end do Magazine Luiza como único desenvolvedor e defini sua estrutura e decisões técnicas. Contrato PJ, 100% remoto.",
      },
      {
        company: "INNET Soluções",
        role: "Desenvolvedor Web e Suporte de Sistemas",
        period: "Out 2018 — Fev 2023",
        summary:
          "Desenvolvi e mantive sites e lojas virtuais com WordPress e WooCommerce, configurei a integração entre o WooCommerce e o ERP e adicionei PIX, PicPay e Mercado Pago ao checkout. Desenvolvi, junto com outro dev, um sistema interno de lista da vez em React e TypeScript, e depois atuei como referência sênior da equipe de suporte.",
      },
    ],
  },

  stack: {
    title: "Stack",
    legend:
      "Dividido por honestidade, não por categoria: o que eu uso para construir hoje e o que estou aprendendo agora.",
    productionLabel: "O que uso para construir",
    buildingLabel: "Aprendendo agora",
    production: [
      "React",
      "React Native",
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Material UI",
      "Zustand",
      "React Query",
      "React Hook Form",
      "Node.js",
      "APIs REST",
      "JWT",
      "Git",
      "NX monorepo",
    ],
    building: ["Nest.js", "TypeORM", "Prisma", "PostgreSQL", "Jest", "Testing Library"],
  },

  contact: {
    title: "Vamos conversar",
    body: "E-mail é o jeito mais rápido de me encontrar.",
    emailLabel: "E-mail",
    linkedinLabel: "LinkedIn",
    githubLabel: "GitHub",
  },

  footer: {
    builtWith: "Construído com Next.js e Tailwind CSS.",
    sourceCode: "Código-fonte",
  },
};
