"use client";

import { siteConfig } from "@/data/config";
import type { Translation, Language } from "@/data/translations";
import { buildResourceInquiryLink } from "@/lib/whatsapp";
import { LanguageSwitcher } from "./LanguageSwitcher";

type HeaderProps = {
  language: Language;
  onLanguageChange: (language: Language) => void;
  copy: Translation;
};

export function Header({ language, onLanguageChange, copy }: HeaderProps) {
  return (
    <>
      <a
        href={buildResourceInquiryLink() || "#contact"}
        target="_blank"
        rel="noreferrer"
        className="fixed inset-x-0 top-0 z-[70] block h-11 bg-emerald-950 text-white shadow-[0_16px_36px_rgba(14,50,25,0.18)] transition hover:brightness-105"
      >
        <div className="mx-auto flex h-full max-w-7xl items-center justify-between gap-3 px-4 md:px-6">
          <p className="min-w-0 truncate text-xs font-bold tracking-tight text-white md:text-sm">
            {copy.topBarText}
          </p>
          <span className="shrink-0 rounded-full bg-[#25D366] px-3 py-1.5 text-xs font-extrabold text-white shadow-[0_10px_24px_rgba(37,211,102,0.32)] transition md:px-4 md:text-sm">
            {copy.topBarButton}
          </span>
        </div>
      </a>

      <header className="sticky top-11 z-40 border-b border-slate-900/8 bg-white/80 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-6 px-5 py-4">
          <a href="#top" className="flex min-w-0 items-center gap-3">
            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-emerald-950 text-sm font-extrabold text-lime-300">
              TCR
            </div>
            <div className="min-w-0">
              <p className="truncate text-sm font-extrabold tracking-tight text-slate-900">
                {siteConfig.shortName}
              </p>
              <p className="truncate text-xs text-slate-500">{siteConfig.location}</p>
            </div>
          </a>

          <nav className="hidden items-center gap-6 text-sm font-semibold text-slate-600 md:flex">
            <a href="#categories" className="transition hover:text-emerald-950">
              {copy.navCategories}
            </a>
            <a href="#drivers" className="transition hover:text-emerald-950">
              {copy.navDrivers}
            </a>
            <a href="#equipment" className="transition hover:text-emerald-950">
              {copy.navEquipment}
            </a>
            <a href="#how-it-works" className="transition hover:text-emerald-950">
              {copy.navHowItWorks}
            </a>
            <a href="#contact" className="transition hover:text-emerald-950">
              {copy.navContact}
            </a>
          </nav>

          <div className="flex items-center gap-3">
            <a
              href={buildResourceInquiryLink()}
              target="_blank"
              rel="noreferrer"
              className="hidden rounded-full bg-emerald-950 px-4 py-2 text-sm font-bold text-white transition hover:bg-emerald-900 md:inline-flex"
            >
              {copy.headerCta}
            </a>
            <LanguageSwitcher language={language} onLanguageChange={onLanguageChange} />
          </div>
        </div>
      </header>
    </>
  );
}
