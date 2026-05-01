"use client";

import { languageLabels, type Language } from "@/data/translations";

type LanguageSwitcherProps = {
  language: Language;
  onLanguageChange: (language: Language) => void;
};

export function LanguageSwitcher({
  language,
  onLanguageChange,
}: LanguageSwitcherProps) {
  const languages: Language[] = ["en", "zh", "sw"];

  return (
    <div
      className="flex rounded-full border border-slate-900/8 bg-white p-1 shadow-[0_10px_25px_rgba(15,23,42,0.06)]"
      aria-label="Language switcher"
    >
      {languages.map((item) => {
        const isActive = item === language;

        return (
          <button
            key={item}
            type="button"
            onClick={() => onLanguageChange(item)}
            className={`rounded-full px-3 py-2 text-sm font-semibold transition md:px-4 ${
              isActive
                ? "bg-emerald-950 text-white"
                : "text-slate-600 hover:bg-slate-100"
            }`}
            aria-pressed={isActive}
          >
            {languageLabels[item]}
          </button>
        );
      })}
    </div>
  );
}
