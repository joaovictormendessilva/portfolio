import { en } from "./dictionaries/en";
import { pt } from "./dictionaries/pt";
import type { Dictionary } from "./dictionaries/en";
import type { Locale } from "./config";

const dictionaries: Record<Locale, Dictionary> = { en, pt };

export function getDictionary(locale: Locale): Dictionary {
  return dictionaries[locale];
}

export type { Dictionary };
