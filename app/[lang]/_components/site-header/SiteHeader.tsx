import Link from "next/link";
import { ThemeToggle } from "../theme-toggle/ThemeToggle";
import { LanguageSwitch } from "../language-switch/LanguageSwitch";
import type { Dictionary } from "@/lib/i18n";
import type { Locale } from "@/lib/i18n/config";

type SiteHeaderProps = {
  lang: Locale;
  dict: Dictionary;
};

export function SiteHeader({ lang, dict }: SiteHeaderProps) {
  const sections = [
    { id: "work", label: dict.nav.work },
    { id: "experience", label: dict.nav.experience },
    { id: "stack", label: dict.nav.stack },
    { id: "contact", label: dict.nav.contact },
  ];

  return (
    <header className="sticky top-0 z-50 border-b border-line bg-canvas/85 backdrop-blur">
      <div className="mx-auto flex max-w-5xl items-center gap-6 px-6 py-4">
        <Link
          href={`/${lang}`}
          className="font-display text-base font-semibold tracking-tight"
        >
          João Victor
        </Link>

        <nav className="ml-auto hidden items-center gap-6 text-sm sm:flex">
          {sections.map((section) => (
            <a
              key={section.id}
              href={`/${lang}#${section.id}`}
              className="text-muted transition-colors hover:text-fg"
            >
              {section.label}
            </a>
          ))}
        </nav>

        <div className="ml-auto flex items-center gap-2 sm:ml-0">
          <LanguageSwitch
            current={lang}
            label={dict.language.label}
            names={{ en: dict.language.en, pt: dict.language.pt }}
          />
          <ThemeToggle
            toLightLabel={dict.theme.toLight}
            toDarkLabel={dict.theme.toDark}
          />
        </div>
      </div>
    </header>
  );
}
