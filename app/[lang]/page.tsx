import { notFound } from "next/navigation";
import { getDictionary } from "@/lib/i18n";
import { isLocale } from "@/lib/i18n/config";
import { SiteHeader } from "./_components/site-header/SiteHeader";
import { Hero } from "./_sections/hero/Hero";
import { Work } from "./_sections/work/Work";
import { Experience } from "./_sections/experience/Experience";
import { Stack } from "./_sections/stack/Stack";
import { Contact } from "./_sections/contact/Contact";
import { SiteFooter } from "./_components/site-footer/SiteFooter";

export default async function HomePage({ params }: PageProps<"/[lang]">) {
  const { lang } = await params;
  if (!isLocale(lang)) notFound();

  const dict = getDictionary(lang);

  return (
    <>
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:rounded focus:bg-brass focus:px-4 focus:py-2 focus:text-canvas"
      >
        {dict.nav.skipToContent}
      </a>

      <SiteHeader lang={lang} dict={dict} />

      <main id="main" className="flex-1">
        <Hero dict={dict} />
        <Work dict={dict} lang={lang} />
        <Experience dict={dict} />
        <Stack dict={dict} />
        <Contact dict={dict} />
      </main>

      <SiteFooter dict={dict} />
    </>
  );
}
