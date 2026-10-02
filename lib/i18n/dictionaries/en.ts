export const en = {
  nav: {
    work: "Work",
    experience: "Experience",
    stack: "Stack",
    contact: "Contact",
    skipToContent: "Skip to content",
  },

  meta: {
    title: "João Victor Mendes Silva — Frontend Engineer",
    description:
      "Frontend engineer with seven years building for the web, the last three in the React ecosystem, now expanding into full stack development.",
  },

  theme: {
    toLight: "Switch to light theme",
    toDark: "Switch to dark theme",
  },

  language: {
    label: "Language",
    en: "English",
    pt: "Português",
  },

  hero: {
    name: "João Victor Mendes Silva",
    role: "Frontend Engineer",
    headline: "Rebuilding systems that can't afford to break.",
    lede: "Seven years building for the web, the last three in the React ecosystem. I own the front-end architecture of new production systems at a U.S. energy manufacturer, worked on moving consortium platforms for Magazine Luiza, Porto Seguro and Banco do Brasil off .NET, and I'm now expanding into the back end with NestJS and PostgreSQL.",
    location: "Linhares, Brazil (UTC−3)",
    english: "English B2 (EF SET)",
    primaryAction: "Read the work",
    secondaryAction: "Email me",
  },

  work: {
    title: "Selected work",
    intro:
      "Two projects, both live. Each one lists what it actually does and what it doesn't.",
    viewLive: "Open live site",
    viewCode: "Read the code",
    viewCase: "Read the case study",
    stackLabel: "Built with",
    limitationLabel: "Scope",

    projects: {
      "fantasmo-shop": {
        summary: "A study project: a storefront with server-side authentication, a cart, and order emails.",
        detail:
          "I wanted to understand how Next.js can handle real authentication, validating the session token on the server without exposing it to the browser. Protected routes send users without a valid session back to the login page. Order emails are built as a React component and sent through my own SMTP setup, without an external email service.",
        limitation:
          "There is no database yet: the product list is static, and any non-empty email and password will log you in.",
      },
      "pulse-ai": {
        summary: "A landing page built from a ready-made design, to practice Tailwind and responsive layouts.",
        detail:
          "I built this page to get more practice with Tailwind and responsive layouts. I followed a design made in Visily as closely as I could, as if a design team had handed it to me. The dashboard in the hero is built with Tailwind classes, not an image.",
        limitation:
          "Front end only: there is no back end, and the content and numbers are fictional.",
      },
    },
  },

  caseStudy: {
    backLabel: "Back to work",
    contextLabel: "Context",
    challengeLabel: "The problem",
    decisionsLabel: "Decisions",
    resultLabel: "Where it stands",
    nextLabel: "What I would change",
    studies: {
      "fantasmo-shop": {
        context:
          "A study project. I wanted to build one complete purchase flow: login, a product list with filters, a cart, and an order email.",
        challenge:
          "The main goal was authentication. I wanted the session token to be validated on the server, without the browser having access to it, and users without a valid session to be sent back to the login page.",
        decisions: [
          {
            title: "The token stays in an httpOnly cookie",
            body: "The browser's JavaScript can't read it. The token is signed with jose and checked in proxy.ts before protected pages load. If it is invalid, the cookie is removed and the user goes back to the login page.",
          },
          {
            title: "Order emails without an external service",
            body: "The email template is a React component, built like a page of the site. It is rendered to HTML and sent through my own SMTP setup with Nodemailer, so the project doesn't depend on an external email service.",
          },
        ],
        result:
          "Login, a protected dashboard, a product list with filters, a cart, and an order confirmation email.",
        next: [
          "Check users and load products from a PostgreSQL database.",
        ],
      },
      "pulse-ai": {
        context:
          "A landing page for a fictional AI product, with a hero, features, metrics, testimonials, pricing, FAQ and a call to action.",
        challenge:
          "Two goals: get comfortable with Tailwind, and make every section work well from mobile to desktop while staying faithful to the design.",
        decisions: [
          {
            title: "Follow the design as if it came from a design team",
            body: "I treated the Visily design as the reference and tried to match spacing, colors and layout instead of improvising.",
          },
          {
            title: "Small reusable components",
            body: "Buttons, cards, chips, section titles and the page container are shared components, so every section is built from the same pieces.",
          },
          {
            title: "The hero dashboard is made with Tailwind",
            body: "Instead of a screenshot, the illustration in the hero is built with HTML and Tailwind classes, so it stays sharp and adapts to smaller screens.",
          },
        ],
        result:
          "A complete landing page that works from mobile to desktop, with a drawer menu on small screens.",
        next: [
          "The content and numbers are fictional. They are there to fill the layout.",
          "There is no back end: forms and buttons don't send anything.",
        ],
      },
    },
  },

  experience: {
    title: "Experience",
    present: "Present",

    roles: [
      {
        company: "WTEC Energy",
        role: "Software Developer (Frontend)",
        period: "May 2024 — Present",
        summary:
          "Own the front-end architecture of two new web applications in a monorepo, used by teams in the U.S. and India, and the front end of the company's identity and access platform. Drove the technical implementation of the operations app migration from .NET MAUI to React Native, and now review the sustaining team's pull requests. Built and maintain the company site in Next.js with multilingual support.",
      },
      {
        company: "Sinqia",
        role: "Frontend Developer",
        period: "Jun 2023 — May 2024",
        summary:
          "Worked on moving consortium platforms for Magazine Luiza, Porto Seguro and Banco do Brasil off .NET and onto React, React Native and Next.js. Started the Magazine Luiza front end as the sole developer and defined its structure and technical decisions. Fully remote, contract role.",
      },
      {
        company: "INNET Soluções",
        role: "Web Developer & Systems Support",
        period: "Oct 2018 — Feb 2023",
        summary:
          "Built and maintained websites and e-commerce stores with WordPress and WooCommerce, configured the WooCommerce–ERP integration, and added PIX, PicPay and Mercado Pago to checkout. Co-developed an internal sales queue app in React and TypeScript, and later acted as the senior reference on the support team.",
      },
    ],
  },

  stack: {
    title: "Stack",
    legend:
      "Split by honesty, not by category: what I build with today, and what I'm learning right now.",
    productionLabel: "What I build with",
    buildingLabel: "Currently learning",
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
      "REST APIs",
      "JWT",
      "Git",
      "NX monorepo",
    ],
    building: ["Nest.js", "TypeORM", "Prisma", "PostgreSQL", "Jest", "Testing Library"],
  },

  contact: {
    title: "Get in touch",
    body: "Email is the fastest way to reach me.",
    emailLabel: "Email",
    linkedinLabel: "LinkedIn",
    githubLabel: "GitHub",
  },

  footer: {
    builtWith: "Built with Next.js and Tailwind CSS.",
    sourceCode: "Source code",
  },
};

export type Dictionary = typeof en;
