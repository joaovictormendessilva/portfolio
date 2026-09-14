import { profile } from "@/lib/content/profile";
import type { Dictionary } from "@/lib/i18n";

type HeroProps = {
  dict: Dictionary;
};

export function Hero({ dict }: HeroProps) {
  return (
    <section className="mx-auto max-w-5xl px-6 pt-16 pb-16 sm:pt-28 sm:pb-20">
      <h1
        className="rise font-display text-display font-semibold text-pretty"
        style={{ animationDelay: "0ms" }}
      >
        {dict.hero.headline}
      </h1>

      <p
        className="rise measure mt-8 text-lg leading-relaxed text-muted"
        style={{ animationDelay: "90ms" }}
      >
        {dict.hero.lede}
      </p>

      <div
        className="rise mt-10 flex flex-wrap items-center gap-x-6 gap-y-3"
        style={{ animationDelay: "180ms" }}
      >
        <a
          href="#work"
          className="rounded-full bg-brass px-5 py-2.5 text-sm font-medium text-canvas transition-opacity hover:opacity-90"
        >
          {dict.hero.primaryAction}
        </a>
        <a
          href={`mailto:${profile.email}`}
          className="text-sm font-medium text-fg underline decoration-line underline-offset-4 transition-colors hover:decoration-brass"
        >
          {dict.hero.secondaryAction}
        </a>
      </div>

      <div
        className="rise mt-16 flex flex-wrap gap-x-10 gap-y-2 border-t border-line pt-6 text-sm text-muted"
        style={{ animationDelay: "260ms" }}
      >
        <span>{dict.hero.role}</span>
        <span>{dict.hero.location}</span>
        <a
          href={profile.englishCertUrl}
          target="_blank"
          rel="noreferrer"
          className="underline decoration-line underline-offset-4 transition-colors hover:text-fg hover:decoration-brass"
        >
          {dict.hero.english}
        </a>
      </div>
    </section>
  );
}
