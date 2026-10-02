import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { getDictionary } from "@/lib/i18n";
import { isLocale, locales } from "@/lib/i18n/config";
import { projects } from "@/lib/content/projects";
import { SiteHeader } from "../../_components/site-header/SiteHeader";
import { SiteFooter } from "../../_components/site-footer/SiteFooter";
import type { Dictionary } from "@/lib/i18n";

type StudyKey = keyof Dictionary["caseStudy"]["studies"];

export function generateStaticParams() {
  return locales.flatMap((lang) =>
    projects.map((project) => ({ lang, slug: project.slug })),
  );
}

export async function generateMetadata({
  params,
}: PageProps<"/[lang]/work/[slug]">) {
  const { lang, slug } = await params;
  if (!isLocale(lang)) return {};

  const project = projects.find((item) => item.slug === slug);
  if (!project) return {};

  const dict = getDictionary(lang);

  return {
    title: `${project.name} — ${dict.hero.name}`,
    description: dict.work.projects[slug as StudyKey].summary,
  };
}

export default async function CaseStudyPage({
  params,
}: PageProps<"/[lang]/work/[slug]">) {
  const { lang, slug } = await params;
  if (!isLocale(lang)) notFound();

  const project = projects.find((item) => item.slug === slug);
  if (!project) notFound();

  const dict = getDictionary(lang);
  const study = dict.caseStudy.studies[slug as StudyKey];
  const copy = dict.work.projects[slug as StudyKey];

  return (
    <>
      <SiteHeader lang={lang} dict={dict} />

      <main className="mx-auto w-full max-w-3xl flex-1 px-6 py-12 sm:py-16">
        <BackLink lang={lang} label={dict.caseStudy.backLabel} />

        <article className="mt-10">
          <header>
            <div className="flex items-baseline gap-3">
              <h1 className="font-display text-title font-semibold">
                {project.name}
              </h1>
              <span className="text-sm text-muted">{project.year}</span>
            </div>
            <p className="mt-3 text-lg leading-relaxed">{copy.summary}</p>

            <div className="mt-5 flex flex-wrap items-center gap-x-6 gap-y-3 text-sm">
              {project.liveUrl ? (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1 font-medium text-brass underline decoration-transparent underline-offset-4 transition hover:decoration-brass"
                >
                  {dict.work.viewLive}
                  <ArrowUpRight size={14} aria-hidden />
                </a>
              ) : null}
              <a
                href={project.repoUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1 text-muted underline decoration-line underline-offset-4 transition-colors hover:text-fg"
              >
                {dict.work.viewCode}
                <ArrowUpRight size={14} aria-hidden />
              </a>
              {project.backendRepoUrl ? (
                <a
                  href={project.backendRepoUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1 text-muted underline decoration-line underline-offset-4 transition-colors hover:text-fg"
                >
                  {dict.work.viewBackendCode}
                  <ArrowUpRight size={14} aria-hidden />
                </a>
              ) : null}
              {project.demoUrl ? (
                <a
                  href={project.demoUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1 text-muted underline decoration-line underline-offset-4 transition-colors hover:text-fg"
                >
                  {dict.work.viewDemo}
                  <ArrowUpRight size={14} aria-hidden />
                </a>
              ) : null}
            </div>
          </header>

          {project.image ? (
            <Image
              src={project.image}
              alt={project.name}
              width={1900}
              height={950}
              priority
              className="mt-10 aspect-[2/1] rounded-lg border border-line object-cover object-top"
            />
          ) : null}

          <Section title={dict.caseStudy.contextLabel}>
            <p className="leading-relaxed">{study.context}</p>
          </Section>

          <Section title={dict.caseStudy.challengeLabel}>
            <p className="leading-relaxed">{study.challenge}</p>
          </Section>

          <Section title={dict.caseStudy.decisionsLabel}>
            <div className="flex flex-col divide-y divide-line">
              {study.decisions.map((decision) => (
                <div key={decision.title} className="py-6 first:pt-0 last:pb-0">
                  <h3 className="font-display text-lg font-semibold">
                    {decision.title}
                  </h3>
                  <p className="mt-2 leading-relaxed text-muted">
                    {decision.body}
                  </p>
                </div>
              ))}
            </div>
          </Section>

          <Section title={dict.caseStudy.resultLabel}>
            <p className="leading-relaxed">{study.result}</p>
          </Section>

          <Section title={dict.caseStudy.nextLabel}>
            <ul className="flex flex-col gap-4">
              {study.next.map((item) => (
                <li key={item} className="flex gap-3">
                  <span
                    aria-hidden
                    className="mt-2 size-2 shrink-0 rounded-full bg-patina"
                  />
                  <span className="leading-relaxed text-muted">{item}</span>
                </li>
              ))}
            </ul>
          </Section>

          <div className="mt-16 border-t border-line pt-6">
            <BackLink lang={lang} label={dict.caseStudy.backLabel} />
          </div>
        </article>
      </main>

      <SiteFooter dict={dict} />
    </>
  );
}

function BackLink({ lang, label }: { lang: string; label: string }) {
  return (
    <Link
      href={`/${lang}#work`}
      className="inline-flex items-center gap-2 text-sm text-muted transition-colors hover:text-fg"
    >
      <ArrowLeft size={14} aria-hidden />
      {label}
    </Link>
  );
}

function Section({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section className="mt-12">
      <h2 className="font-display text-sm font-semibold text-brass">{title}</h2>
      <div className="mt-4">{children}</div>
    </section>
  );
}
