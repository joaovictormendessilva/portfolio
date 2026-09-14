import type { MetadataRoute } from "next";
import { locales } from "@/lib/i18n/config";
import { projects } from "@/lib/content/projects";
import { getSiteUrl } from "@/lib/site-url";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = getSiteUrl().origin;

  const homes = locales.map((lang) => ({
    url: `${base}/${lang}`,
    changeFrequency: "monthly" as const,
    priority: 1,
  }));

  const studies = locales.flatMap((lang) =>
    projects.map((project) => ({
      url: `${base}/${lang}/work/${project.slug}`,
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
  );

  return [...homes, ...studies];
}
