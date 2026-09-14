# Portfolio

Personal site of João Victor Mendes Silva — frontend engineer.

Built with Next.js 16 (App Router), TypeScript and Tailwind CSS v4.

## Notes on how it is built

**Internationalisation without a library.** English and Portuguese are served
from `app/[lang]`, with plain typed dictionaries in `lib/i18n`. The English
dictionary is the source of truth and every other locale is typed against it,
so a missing translation fails the build instead of rendering a blank space.
For two locales of static copy, `next-intl` would have been weight without
benefit.

**Theme without a flash.** Dark is the default; light is opt-in and stored in
`localStorage`. An inline script in the document head applies the stored
preference while the browser is still parsing HTML, so the page never paints
the wrong theme and React never reports a hydration mismatch.

**Colour carries meaning.** Brass marks work running in production, patina
marks work still in progress. The distinction appears in the stack list and in
the case studies, and it is always paired with a text label rather than relying
on colour alone.

**Everything is prerendered.** Both locales, all four case studies, the Open
Graph images and the favicon are generated at build time. `proxy.ts` — the
Next 16 replacement for `middleware.ts` — only redirects unprefixed paths to
the default locale.

## Running locally

```bash
npm install
npm run dev
```

Open http://localhost:3000. No environment variables are required; metadata
URLs fall back to Vercel's own variables and then to localhost.

| Variable               | Purpose                                          |
| ---------------------- | ------------------------------------------------ |
| `NEXT_PUBLIC_SITE_URL` | Canonical origin for metadata and Open Graph URLs |

## Structure

```
app/[lang]/            localised routes
  _components/         shared across sections
  _sections/           one folder per section of the home page
  work/[slug]/         case studies
lib/i18n/              locale config and dictionaries
lib/content/           structural data that is not translated
```
