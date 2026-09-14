import type { Dictionary } from "@/lib/i18n";

type ExperienceProps = {
  dict: Dictionary;
};

export function Experience({ dict }: ExperienceProps) {
  return (
    <section id="experience" className="mx-auto max-w-5xl px-6 py-16 sm:py-20">
      <h2 className="font-display text-title font-semibold">
        {dict.experience.title}
      </h2>

      <ol className="mt-12 border-l border-line">
        {dict.experience.roles.map((role, index) => {
          const isCurrent = index === 0;

          return (
            <li key={role.company} className="relative pl-8 pb-12 last:pb-0">
              <span
                aria-hidden
                className={
                  isCurrent
                    ? "absolute top-2 left-0 size-2.5 -translate-x-1/2 rounded-full bg-brass"
                    : "absolute top-2 left-0 size-2.5 -translate-x-1/2 rounded-full border border-line bg-canvas"
                }
              />
              <p className="text-sm text-muted">{role.period}</p>
              <h3 className="mt-1 font-display text-xl font-semibold">
                {role.company}
              </h3>
              <p className="text-sm text-muted">{role.role}</p>
              <p className="measure mt-3 text-sm leading-relaxed">
                {role.summary}
              </p>
            </li>
          );
        })}
      </ol>
    </section>
  );
}
