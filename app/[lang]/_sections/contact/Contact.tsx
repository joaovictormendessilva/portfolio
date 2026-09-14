import { ArrowUpRight } from "lucide-react";
import { profile } from "@/lib/content/profile";
import type { Dictionary } from "@/lib/i18n";

type ContactProps = {
  dict: Dictionary;
};

export function Contact({ dict }: ContactProps) {
  const links = [
    { label: dict.contact.emailLabel, href: `mailto:${profile.email}`, value: profile.email },
    { label: dict.contact.linkedinLabel, href: profile.linkedin, value: "/in/joaovictormendessilva" },
    { label: dict.contact.githubLabel, href: profile.github, value: "@joaovictormendessilva" },
  ];

  return (
    <section id="contact" className="mx-auto max-w-5xl px-6 py-16 sm:py-20">
      <h2 className="font-display text-title font-semibold">
        {dict.contact.title}
      </h2>
      <p className="measure mt-4 text-muted">{dict.contact.body}</p>

      <ul className="mt-10 divide-y divide-line border-y border-line">
        {links.map((link) => (
          <li key={link.label}>
            <a
              href={link.href}
              target={link.href.startsWith("mailto:") ? undefined : "_blank"}
              rel="noreferrer"
              className="group flex flex-wrap items-baseline gap-x-4 gap-y-1 py-4 transition-colors hover:text-brass"
            >
              <span className="w-24 shrink-0 text-sm text-muted">
                {link.label}
              </span>
              <span className="text-sm">{link.value}</span>
              <ArrowUpRight
                size={14}
                aria-hidden
                className="self-center text-muted transition-colors group-hover:text-brass"
              />
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
}
