import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Bricolage_Grotesque, IBM_Plex_Sans } from "next/font/google";
import { getDictionary } from "@/lib/i18n";
import { isLocale, locales } from "@/lib/i18n/config";
import { getSiteUrl } from "@/lib/site-url";
import "../globals.css";

const bricolage = Bricolage_Grotesque({
  variable: "--font-bricolage",
  subsets: ["latin"],
  display: "swap",
});

const plex = IBM_Plex_Sans({
  variable: "--font-plex",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  display: "swap",
});

const themeScript = `(function(){try{var t=localStorage.getItem("theme");if(t==="light"||t==="dark"){document.documentElement.dataset.theme=t}}catch(e){}})()`;

export function generateStaticParams() {
  return locales.map((lang) => ({ lang }));
}

export async function generateMetadata({
  params,
}: LayoutProps<"/[lang]">): Promise<Metadata> {
  const { lang } = await params;
  if (!isLocale(lang)) return {};

  const dict = getDictionary(lang);

  return {
    title: dict.meta.title,
    description: dict.meta.description,
    metadataBase: getSiteUrl(),
    alternates: {
      canonical: `/${lang}`,
      languages: Object.fromEntries(
        locales.map((locale) => [locale, `/${locale}`]),
      ),
    },
    openGraph: {
      title: dict.meta.title,
      description: dict.meta.description,
      locale: lang === "pt" ? "pt_BR" : "en_US",
      type: "profile",
    },
  };
}

export default async function RootLayout({
  children,
  params,
}: LayoutProps<"/[lang]">) {
  const { lang } = await params;
  if (!isLocale(lang)) notFound();

  return (
    <html
      lang={lang}
      className={`${bricolage.variable} ${plex.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body className="flex min-h-full flex-col">{children}</body>
    </html>
  );
}
