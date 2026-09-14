import type { Dictionary } from "@/lib/i18n";

type StackProps = {
  dict: Dictionary;
};

export function Stack({ dict }: StackProps) {
  return (
    <section id="stack" className="mx-auto max-w-5xl px-6 py-16 sm:py-20">
      <h2 className="font-display text-title font-semibold">
        {dict.stack.title}
      </h2>
      <p className="measure mt-4 text-muted">{dict.stack.legend}</p>

      <div className="mt-10 grid gap-10 sm:grid-cols-2">
        <StackGroup
          label={dict.stack.productionLabel}
          items={dict.stack.production}
          tone="brass"
        />
        <StackGroup
          label={dict.stack.buildingLabel}
          items={dict.stack.building}
          tone="patina"
        />
      </div>
    </section>
  );
}

type StackGroupProps = {
  label: string;
  items: string[];
  tone: "brass" | "patina";
};

function StackGroup({ label, items, tone }: StackGroupProps) {
  const dotClass = tone === "brass" ? "bg-brass" : "bg-patina";
  const itemClass =
    tone === "brass"
      ? "rounded-full border border-brass/40 px-3 py-1 text-sm"
      : "rounded-full border border-patina/50 px-3 py-1 text-sm";

  return (
    <div>
      <h3 className="flex items-center gap-2 text-sm font-medium">
        <span aria-hidden className={`size-2 rounded-full ${dotClass}`} />
        {label}
      </h3>
      <ul className="mt-4 flex flex-wrap gap-2">
        {items.map((item) => (
          <li key={item} className={itemClass}>
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}
