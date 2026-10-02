"use client";

import { usePathname } from "next/navigation";
import { locales, type Locale } from "@/lib/i18n/config";

type LanguageSwitchProps = {
  current: Locale;
  label: string;
  names: Record<Locale, string>;
};

export function LanguageSwitch({ current, label, names }: LanguageSwitchProps) {
  const pathname = usePathname();

  return (
    <nav aria-label={label} className="flex items-center gap-1 text-sm">
      {locales.map((locale) => {
        const isCurrent = locale === current;
        const href = pathname.replace(`/${current}`, `/${locale}`);

        return (
          <a
            key={locale}
            href={href}
            hrefLang={locale}
            aria-current={isCurrent ? "true" : undefined}
            className={
              isCurrent
                ? "rounded px-2 py-1 text-brass"
                : "rounded px-2 py-1 text-muted transition-colors hover:text-fg"
            }
          >
            {names[locale]}
          </a>
        );
      })}
    </nav>
  );
}
