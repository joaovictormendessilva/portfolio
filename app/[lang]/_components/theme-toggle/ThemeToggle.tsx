"use client";

import { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";

type Theme = "dark" | "light";

type ThemeToggleProps = {
  toLightLabel: string;
  toDarkLabel: string;
};

export function ThemeToggle({ toLightLabel, toDarkLabel }: ThemeToggleProps) {
  const [theme, setTheme] = useState<Theme>("dark");

  useEffect(() => {
    const current = document.documentElement.dataset.theme;
    if (current === "light") setTheme("light");
  }, []);

  function toggle() {
    const next: Theme = theme === "dark" ? "light" : "dark";
    setTheme(next);
    document.documentElement.dataset.theme = next;

    try {
      localStorage.setItem("theme", next);
    } catch {}
  }

  const label = theme === "dark" ? toLightLabel : toDarkLabel;

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label={label}
      title={label}
      className="grid size-9 place-items-center rounded-full border border-line text-muted transition-colors hover:border-brass hover:text-brass"
    >
      {theme === "dark" ? (
        <Sun size={16} aria-hidden />
      ) : (
        <Moon size={16} aria-hidden />
      )}
    </button>
  );
}
