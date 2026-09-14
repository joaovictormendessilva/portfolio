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
    title: "João Victor Mendes Silva — Desenvolvedor Full Stack",
    description:
      "Desenvolvedor full stack com sete anos construindo para a web, os últimos três em React e React Native. Disponível para trabalho remoto.",
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
    role: "Desenvolvedor Full Stack",
    headline: "Reconstruindo sistemas que não podem quebrar.",
    lede: "Sete anos construindo para a web, os últimos três inteiramente em React e React Native. Tirei plataformas de consórcio do Banco do Brasil, Porto Seguro e Magazine Luiza de dentro do .NET, conduzi a arquitetura de front-end em todos os times por onde passei, e hoje também construo o back-end.",
    location: "Linhares, Brasil — trabalho remoto",
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
        summary: "Uma loja com sessão autenticada, carrinho e e-mail de pedido.",
        detail:
          "A sessão foi construída do zero, não puxada de uma biblioteca: o token é assinado com jose, guardado em cookie httpOnly e verificado em toda rota protegida pelo proxy do Next 16, que limpa o cookie quando o token falha. O pedido concluído é renderizado como template do React Email e enviado por SMTP via Nodemailer.",
        limitation:
          "Construído sem banco de dados, então o catálogo é estático e a verificação de credencial é um stub para a demonstração. Postgres com uma tabela de usuários real e comparação de senha com hash é o próximo passo.",
      },
      "pulse-ai": {
        summary: "Uma landing page de produto para um workspace de IA fictício.",
        detail:
          "O dashboard do topo não é uma imagem. Cada barra, linha, notificação e avatar é marcação estilizada com Tailwind, então ele continua nítido em qualquer resolução e se reorganiza em telas pequenas em vez de encolher como um print achatado.",
        limitation:
          "Só front-end: não há back-end por trás, e os números exibidos são ilustrativos.",
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
          "Uma loja construída para exercitar um fluxo de compra completo de ponta a ponta: catálogo, filtro, carrinho, sessão autenticada e um pedido que realmente sai do sistema em vez de parar num console.log.",
        challenge:
          "O catálogo nunca foi a parte interessante. A sessão era. Eu queria proteção de rota acontecendo no servidor antes da página renderizar, um token que o próprio JavaScript da página não consegue ler, e um pedido concluído que produzisse algo que um cliente receberia.",
        decisions: [
          {
            title: "Sessão escrita na mão",
            body: "Assinei e verifiquei o token eu mesmo com jose em vez de instalar uma biblioteca de autenticação pronta, porque o objetivo era entender cada peça: o que vai no payload, como a expiração é definida, quais flags de cookie importam e o que deve acontecer quando a verificação falha. jose é baseada em promises e construída sobre Web Crypto, então se comporta igual em qualquer runtime.",
          },
          {
            title: "O token mora num cookie httpOnly",
            body: "Não no localStorage. Script rodando na página não consegue ler um cookie httpOnly, o que fecha o caminho mais comum para roubar sessão via XSS. Ele também é marcado como secure em produção, escopado com sameSite lax, e expira em sete dias.",
          },
          {
            title: "Um único lugar decide quem entra",
            body: "A proteção de rota fica no proxy.ts, então as rotas casadas são checadas antes de qualquer coisa renderizar. Um token que falha na verificação não é só rejeitado: o cookie é apagado na saída, então o navegador para de apresentar uma credencial que nunca mais vai funcionar.",
          },
          {
            title: "O e-mail do pedido é um componente, não uma string",
            body: "Os e-mails de confirmação são renderizados como templates do React Email em vez de HTML concatenado dentro de um serviço. O e-mail é tipado, revisável num pull request e versionado junto com o resto da interface, que é o que o torna sustentável.",
          },
        ],
        result:
          "Login, dashboard protegido, catálogo com filtro, carrinho, e um pedido que chega como e-mail formatado por SMTP.",
        next: [
          "Adicionar Postgres e uma tabela de usuários real, para que as credenciais sejam comparadas contra senhas com hash em vez de ficarem como stub para a demonstração. O bcryptjs já é dependência do projeto; ele ainda não está ligado.",
          "Falhar alto quando JWT_SECRET estiver ausente. Hoje ele cai para string vazia e apenas emite um aviso, o que significa que um deploy mal configurado assinaria tokens que qualquer pessoa poderia forjar. Deveria lançar erro no boot.",
          "Verificar a sessão dentro de cada route handler, não só no proxy. A própria documentação do Next avisa que uma mudança de matcher pode remover a cobertura do proxy silenciosamente, e um único ponto de controle é um único ponto de falha.",
        ],
      },
      "pulse-ai": {
        context:
          "Uma landing page para um workspace de IA fictício, construída para praticar o gênero direito: hero, capacidades, métricas, prova social, preços, FAQ e chamada final.",
        challenge:
          "O hero precisava de uma imagem do produto e não havia produto. Exportar uma imagem achatada teria sido a resposta rápida, e teria ficado errada em metade das telas que abrissem a página.",
        decisions: [
          {
            title: "O dashboard é marcação, não figura",
            body: "Cada barra, linha de atividade, cartão de notificação e avatar do hero é um elemento real estilizado com Tailwind. Continua nítido em qualquer tela, não adiciona nada para baixar, e se reorganiza numa tela estreita em vez de encolher até virar algo ilegível.",
          },
          {
            title: "A ilustração é composta, não um bloco só",
            body: "Cada pedaço dela é um componente próprio, então o hero se lê como uma pequena árvore de partes nomeadas em vez de um trecho gigante e ingovernável de JSX. Mudar uma barra do gráfico não exige rolar a página inteira.",
          },
        ],
        result:
          "Uma landing page completa que se sustenta do mobile ao desktop, sem nenhum arquivo de imagem no hero.",
        next: [
          "O texto e as métricas são inventados. Estão ali para tornar o layout legível, não para afirmar nada.",
          "Não há back-end por trás: os formulários e chamadas para ação não enviam para lugar nenhum.",
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
        role: "Desenvolvedor Front-end",
        period: "Mai 2024 — Atual",
        summary:
          "Migrei o sistema corporativo para React Native e TypeScript e entreguei novas funcionalidades sobre ele. Construí os dashboards internos e o site institucional em Next.js com suporte multilíngue. Escrevi o serviço de e-mail em Node.js por trás do fluxo de contato.",
      },
      {
        company: "Sinqia",
        role: "Desenvolvedor Frontend",
        period: "Jun 2023 — Mai 2024",
        summary:
          "Levei plataformas de consórcio do Banco do Brasil, Porto Seguro e Magazine Luiza do .NET para React e React Native. Defini os padrões de código que o restante do time seguiu na migração.",
      },
      {
        company: "INNET Soluções",
        role: "Desenvolvedor Front-end",
        period: "Out 2018 — Fev 2023",
        summary:
          "Construí e mantive sistemas web e e-commerces, incluindo um sistema interno de gerenciamento de vendas em React e TypeScript. Integrei o WooCommerce ao ERP do cliente pela API e adicionei PIX, PicPay e Mercado Pago ao checkout. Conduzi o suporte técnico e o trabalho de SEO e performance.",
      },
    ],
  },

  stack: {
    title: "Stack",
    legend:
      "Dividido por honestidade, não por categoria: o primeiro grupo é o que eu entrego em produção, o segundo é o que ainda estou aprendendo.",
    productionLabel: "Entrego em produção",
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
      "Jest",
      "Testing Library",
      "Node.js",
      "APIs REST",
      "JWT",
      "Git",
      "NX monorepo",
    ],
    building: ["Nest.js", "TypeORM", "Prisma", "PostgreSQL"],
  },

  contact: {
    title: "Vamos conversar",
    body: "Estou aberto a vagas remotas em times de produto. E-mail é o jeito mais rápido de me encontrar.",
    emailLabel: "E-mail",
    linkedinLabel: "LinkedIn",
    githubLabel: "GitHub",
  },

  footer: {
    builtWith: "Construído com Next.js e Tailwind CSS.",
    sourceCode: "Código-fonte",
  },
};
