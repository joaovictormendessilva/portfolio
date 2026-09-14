import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { projects, type Project } from "@/lib/content/projects";
import type { Dictionary } from "@/lib/i18n";

type WorkProps = {
  dict: Dictionary;
  lang: string;
};

type ProjectCopy = Dictionary["work"]["projects"][keyof Dictionary["work"]["projects"]];

export function Work({ dict, lang }: WorkProps) {
  return (
    <section id="work" className="mx-auto max-w-5xl px-6 py-16 sm:py-20">
      <h2 className="font-display text-title font-semibold">
        {dict.work.title}
      </h2>
      <p className="measure mt-4 text-muted">{dict.work.intro}</p>

      <div className="mt-12 flex flex-col gap-20">
        {projects.map((project, index) => (
          <WorkBand
            key={project.slug}
            project={project}
            copy={
              dict.work.projects[
                project.slug as keyof Dictionary["work"]["projects"]
              ]
            }
            dict={dict}
            lang={lang}
            reversed={index % 2 === 1}
          />
        ))}
      </div>
    </section>
  );
}

type WorkBandProps = {
  project: Project;
  copy: ProjectCopy;
  dict: Dictionary;
  lang: string;
  reversed: boolean;
};

function WorkBand({ project, copy, dict, lang, reversed }: WorkBandProps) {
  return (
    <article className="grid items-start gap-8 lg:grid-cols-12 lg:gap-12">
      <div
        className={
          reversed ? "lg:order-2 lg:col-span-7" : "lg:col-span-7"
        }
      >
        <Preview project={project} />
      </div>

      <div
        className={
          reversed ? "lg:order-1 lg:col-span-5" : "lg:col-span-5"
        }
      >
        <div className="flex items-baseline gap-3">
          <h3 className="font-display text-2xl font-semibold">
            {project.name}
          </h3>
          <span className="text-sm text-muted">{project.year}</span>
        </div>

        <p className="mt-3 text-lg leading-relaxed">{copy.summary}</p>
        <p className="mt-4 text-sm leading-relaxed text-muted">{copy.detail}</p>

        <ul className="mt-6 flex flex-wrap gap-2">
          {project.stack.map((item) => (
            <li
              key={item}
              className="rounded-full border border-line px-2.5 py-1 text-xs text-muted"
            >
              {item}
            </li>
          ))}
        </ul>

        <div className="mt-6 border-l-2 border-line pl-4">
          <p className="text-xs font-medium text-muted">
            {dict.work.limitationLabel}
          </p>
          <p className="mt-1 text-sm leading-relaxed text-muted">
            {copy.limitation}
          </p>
        </div>

        <div className="mt-6 flex flex-wrap items-center gap-x-6 gap-y-3 text-sm">
          <Link
            href={"/" + lang + "/work/" + project.slug}
            className="inline-flex items-center gap-1 font-medium text-brass underline decoration-transparent underline-offset-4 transition hover:decoration-brass"
          >
            {dict.work.viewCase}
          </Link>
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1 text-muted underline decoration-line underline-offset-4 transition-colors hover:text-fg"
          >
            {dict.work.viewLive}
            <ArrowUpRight size={14} aria-hidden />
          </a>
          <a
            href={project.repoUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1 text-muted underline decoration-line underline-offset-4 transition-colors hover:text-fg"
          >
            {dict.work.viewCode}
            <ArrowUpRight size={14} aria-hidden />
          </a>
        </div>
      </div>
    </article>
  );
}

function Preview({ project }: { project: Project }) {
  if (!project.image) {
    return (
      <div className="flex aspect-[2/1] flex-col justify-end rounded-lg border border-line bg-surface p-6">
        <div className="h-px w-12 bg-brass" />
        <p className="mt-4 font-display text-xl font-semibold">
          {project.name}
        </p>
      </div>
    );
  }

  return (
    <Image
      src={project.image}
      alt={project.name}
      width={1900}
      height={950}
      className="aspect-[2/1] rounded-lg border border-line object-cover object-top"
    />
  );
}
