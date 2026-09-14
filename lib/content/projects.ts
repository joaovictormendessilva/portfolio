export type ProjectStatus = "production" | "building";

export type Project = {
  slug: string;
  name: string;
  year: string;
  liveUrl: string;
  repoUrl: string;
  stack: string[];
  status: ProjectStatus;
  image?: string;
};

export const projects: Project[] = [
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
