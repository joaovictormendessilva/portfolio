export type ProjectStatus = "production" | "building" | "local";

export type Project = {
  slug: string;
  name: string;
  year: string;
  liveUrl?: string;
  repoUrl: string;
  backendRepoUrl?: string;
  demoUrl?: string;
  stack: string[];
  status: ProjectStatus;
  image?: string;
};

export const projects: Project[] = [
  {
    slug: "login-flow",
    name: "Login Flow",
    year: "2025",
    repoUrl:
      "https://github.com/joaovictormendessilva/login-page-drax-design-frontend",
    backendRepoUrl:
      "https://github.com/joaovictormendessilva/login-page-drax-design-backend",
    demoUrl:
      "https://github.com/joaovictormendessilva/login-page-drax-design-frontend#demo",
    stack: [
      "React 19",
      "TypeScript",
      "Vite",
      "Tailwind CSS",
      "TanStack Query",
      "React Hook Form",
      "Yup",
      "Vitest",
      "Testing Library",
      "NestJS",
      "TypeORM",
      "PostgreSQL",
      "JWT",
      "bcrypt",
    ],
    status: "local",
    image: "/work/login-flow.png",
  },
  {
    slug: "fantasmo-shop",
    name: "Fantasmo Shop",
    year: "2026",
    liveUrl: "https://fantasmo-shop.vercel.app/",
    repoUrl: "https://github.com/joaovictormendessilva/fantasmo-shop",
    stack: [
      "Next.js 16",
      "TypeScript",
      "jose (JWT)",
      "proxy.ts",
      "Nodemailer",
      "React Email",
      "MUI",
    ],
    status: "production",
    image: "/work/fantasmo-shop.png",
  },
  {
    slug: "pulse-ai",
    name: "Pulse AI",
    year: "2026",
    liveUrl: "https://pulse-ai-pink.vercel.app/",
    repoUrl: "https://github.com/joaovictormendessilva/pulse-ai",
    stack: ["Next.js 16", "TypeScript", "Tailwind CSS v4"],
    status: "production",
    image: "/work/pulse-ai.png",
  },
];
