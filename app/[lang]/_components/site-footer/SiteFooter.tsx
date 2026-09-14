import { profile } from "@/lib/content/profile";
import type { Dictionary } from "@/lib/i18n";

type SiteFooterProps = {
  dict: Dictionary;
};

export function SiteFooter({ dict }: SiteFooterProps) {
  return (
    <footer className="border-t border-line">
      <div className="mx-auto flex max-w-5xl flex-wrap items-center justify-between gap-4 px-6 py-8 text-sm text-muted">
        <p>{dict.footer.builtWith}</p>
        <a
          href={profile.repoUrl}
          target="_blank"
          rel="noreferrer"
          className="underline decoration-line underline-offset-4 transition-colors hover:text-fg hover:decoration-brass"
        >
          {dict.footer.sourceCode}
        </a>
      </div>
    </footer>
  );
}
