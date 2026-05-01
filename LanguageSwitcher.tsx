"use client";

import { Lang, languageLabels } from "@/data/translations";

export function LanguageSwitcher({ lang, setLang }: { lang: Lang; setLang: (lang: Lang) => void }) {
  const langs: Lang[] = ["en", "zh", "sw"];
  return (
    <div className="flex rounded-full bg-white/80 p-1 shadow-sm ring-1 ring-black/5 backdrop-blur">
      {langs.map((item) => (
        <button
          key={item}
          onClick={() => setLang(item)}
          className={`rounded-full px-4 py-2 text-sm font-semibold transition ${
            lang === item ? "bg-deep text-white" : "text-gray-700 hover:bg-gray-100"
          }`}
        >
          {languageLabels[item]}
        </button>
      ))}
    </div>
  );
}
