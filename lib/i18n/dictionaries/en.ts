export const en = {
  nav: {
    work: "Work",
    experience: "Experience",
    stack: "Stack",
    contact: "Contact",
    skipToContent: "Skip to content",
  },

  meta: {
    title: "João Victor Mendes Silva — Full Stack Developer",
    description:
      "Full stack developer with seven years building for the web, the last three in React and React Native. Available for remote work.",
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
    role: "Full Stack Developer",
    headline: "Rebuilding systems that can't afford to break.",
    lede: "Seven years building for the web, the last three entirely in React and React Native. I moved consórcio platforms for Banco do Brasil, Porto Seguro and Magazine Luiza off .NET, I've led the front-end architecture on every team I've worked with, and I now build the back end as well.",
    location: "Linhares, Brazil — working remotely",
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
        summary: "A storefront with session auth, a cart, and order emails.",
        detail:
          "Sessions are built from scratch rather than pulled from a library: tokens are signed with jose, kept in an httpOnly cookie, and verified on every protected route by Next 16's proxy, which clears the cookie when a token fails. Completed orders render as React Email templates and go out over SMTP through Nodemailer.",
        limitation:
          "Built without a database, so the catalogue is static and credential verification is stubbed for the demo. Postgres with a real user table and hashed password comparison is the next step.",
      },
      "pulse-ai": {
        summary: "A product landing page for a fictional AI workspace.",
        detail:
          "The dashboard in the hero is not a screenshot. Every bar, row, notification and avatar is markup styled with Tailwind, so it stays sharp at any resolution and rearranges itself on small screens instead of shrinking as a flat image.",
        limitation:
          "Front end only: there is no back end behind it, and the figures shown are illustrative.",
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
          "A storefront built to exercise one complete purchase flow end to end: catalogue, filtering, cart, an authenticated session, and an order that actually leaves the system instead of stopping at a console log.",
        challenge:
          "The catalogue was never the interesting part. The session was. I wanted route protection that happens on the server before a page renders, a token the page's own JavaScript cannot read, and a completed order that produces something a customer would receive.",
        decisions: [
          {
            title: "Session handling written by hand",
            body: "I signed and verified the token myself with jose instead of installing a drop-in auth library, because the point was to understand each moving part: what goes in the payload, how expiry is set, which cookie flags matter, and what should happen when verification fails. jose is promise-based and built on Web Crypto, so it behaves the same in any runtime.",
          },
          {
            title: "The token lives in an httpOnly cookie",
            body: "Not localStorage. Script running on the page cannot read an httpOnly cookie, which closes the most common path for stealing a session through XSS. It is also marked secure in production, scoped with sameSite lax, and expires in seven days.",
          },
          {
            title: "One place decides who gets in",
            body: "Route protection sits in proxy.ts, so matched routes are checked before anything renders. A token that fails verification does not just get rejected: the cookie is deleted on the way out, so the browser stops presenting a credential that will never work again.",
          },
          {
            title: "The order email is a component, not a string",
            body: "Confirmation emails render as React Email templates rather than HTML concatenated inside a service. The email is typed, reviewable in a pull request and versioned with the rest of the interface, which is what makes it maintainable.",
          },
        ],
        result:
          "Login, a protected dashboard, a filterable catalogue, a cart, and an order that arrives as a formatted email over SMTP.",
        next: [
          "Add Postgres and a real user table, so credentials are compared against hashed passwords instead of being stubbed for the demo. bcryptjs is already a dependency; it is not wired up yet.",
          "Fail fast when JWT_SECRET is missing. Today it falls back to an empty string and only logs a warning, which means a misconfigured deploy would sign tokens that anyone could forge. It should throw at boot instead.",
          "Verify the session inside each route handler, not only in proxy. Next's own documentation warns that a matcher change can silently remove proxy coverage, and a single point of enforcement is a single point of failure.",
        ],
      },
      "pulse-ai": {
        context:
          "A landing page for a fictional AI workspace, built to practise the genre properly: hero, capabilities, metrics, social proof, pricing, FAQ and closing call to action.",
        challenge:
          "The hero needed a product shot and there was no product. Exporting a flat image would have been the quick answer, and it would have looked wrong on half the screens that loaded it.",
        decisions: [
          {
            title: "The dashboard is markup, not a picture",
            body: "Every bar, activity row, notification card and avatar in the hero is a real element styled with Tailwind. It stays sharp on any display, adds nothing to download, and rearranges itself on a narrow screen rather than shrinking into something unreadable.",
          },
          {
            title: "The illustration is composed, not one block",
            body: "Each piece of it is its own component, so the hero reads as a small tree of named parts instead of a single unmanageable stretch of JSX. Changing one bar in the chart does not mean scrolling through the whole page.",
          },
        ],
        result:
          "A complete landing page that holds together from mobile to desktop, with no image asset in the hero at all.",
        next: [
          "The copy and the metrics are invented. They are there to make the layout legible, not to claim anything.",
          "There is no back end behind it: the forms and calls to action do not submit anywhere.",
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
        role: "Front-end Developer",
        period: "May 2024 — Present",
        summary:
          "Migrated the corporate system to React Native and TypeScript and shipped new features on top of it. Built the internal dashboards, and the company site in Next.js with multilingual support. Wrote the Node.js mail service behind its contact flow.",
      },
      {
        company: "Sinqia",
        role: "Frontend Developer",
        period: "Jun 2023 — May 2024",
        summary:
          "Moved consórcio platforms for Banco do Brasil, Porto Seguro and Magazine Luiza off .NET and onto React and React Native. Set the code standards the rest of the team migrated against.",
      },
      {
        company: "INNET Soluções",
        role: "Front-end Developer",
        period: "Oct 2018 — Feb 2023",
        summary:
          "Built and maintained web systems and e-commerce sites, including an internal sales management system in React and TypeScript. Integrated WooCommerce with the client's ERP over its API and added PIX, PicPay and Mercado Pago to checkout. Led technical support, SEO and performance work.",
      },
    ],
  },

  stack: {
    title: "Stack",
    legend:
      "Split by honesty, not by category: the first group is what I ship in production, the second is what I'm still learning.",
    productionLabel: "Shipping in production",
    buildingLabel: "Learning right now",
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
      "REST APIs",
      "JWT",
      "Git",
      "NX monorepo",
    ],
    building: ["Nest.js", "TypeORM", "Prisma", "PostgreSQL"],
  },

  contact: {
    title: "Get in touch",
    body: "I'm open to remote roles with product teams. Email is the fastest way to reach me.",
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
