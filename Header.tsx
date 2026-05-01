"use client";

import { Lang } from "@/data/translations";
import { LanguageSwitcher } from "./LanguageSwitcher";
import { siteConfig } from "@/data/config";

export function Header({ lang, setLang, tr }: { lang: Lang; setLang: (lang: Lang) => void; tr: any }) {
  return (
    <header className="sticky top-0 z-40 border-b border-black/5 bg-cream/85 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4">
        <div className="flex items-center gap-3">
          <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-deep text-lg font-black text-mint">T</div>
          <div>
            <p className="text-sm font-black text-ink">{siteConfig.shortName}</p>
            <p className="text-xs text-gray-500">{siteConfig.location}</p>
          </div>
        </div>
        <nav className="hidden items-center gap-6 text-sm font-semibold text-gray-700 md:flex">
          <a href="#drivers" className="hover:text-deep">{tr.navDrivers}</a>
          <a href="#how" className="hover:text-deep">{tr.navHow}</a>
          <a href="#contact" className="hover:text-deep">{tr.navContact}</a>
        </nav>
        <LanguageSwitcher lang={lang} setLang={setLang} />
      </div>
    </header>
  );
}
