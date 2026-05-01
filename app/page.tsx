"use client";

import { useEffect, useState } from "react";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Categories, Contact, Drivers, HowItWorks } from "@/components/Sections";
import { WeChatModal } from "@/components/WeChatModal";
import { defaultLanguage, isLanguage, translations, type Language } from "@/data/translations";

const languageStorageKey = "tcr-hub-language";

function getPreferredLanguage(): Language {
  if (typeof window === "undefined") {
    return defaultLanguage;
  }

  const saved = window.localStorage.getItem(languageStorageKey);
  if (isLanguage(saved)) {
    return saved;
  }

  const browserLanguage = window.navigator.language.toLowerCase();
  if (browserLanguage.startsWith("zh")) {
    return "zh";
  }

  if (browserLanguage.startsWith("sw")) {
    return "sw";
  }

  return defaultLanguage;
}

export default function Home() {
  const [language, setLanguage] = useState<Language>(defaultLanguage);
  const [wechatOpen, setWechatOpen] = useState(false);

  useEffect(() => {
    setLanguage(getPreferredLanguage());
  }, []);

  useEffect(() => {
    document.documentElement.lang = language;
    window.localStorage.setItem(languageStorageKey, language);
  }, [language]);

  const copy = translations[language];

  return (
    <>
      <main className="pb-10">
        <Header language={language} onLanguageChange={setLanguage} copy={copy} />
        <Hero copy={copy} onOpenWeChat={() => setWechatOpen(true)} />
        <Categories copy={copy} />
        <Drivers language={language} copy={copy} />
        <HowItWorks copy={copy} />
        <Contact copy={copy} onOpenWeChat={() => setWechatOpen(true)} />
      </main>
      <footer className="border-t border-slate-900/8 px-5 py-8 text-center text-sm text-slate-500">
        {copy.footer}
      </footer>
      <WeChatModal
        isOpen={wechatOpen}
        onClose={() => setWechatOpen(false)}
        copy={copy}
      />
    </>
  );
}
