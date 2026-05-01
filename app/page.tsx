"use client";

import { useEffect, useState } from "react";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Categories, Contact, Drivers, Equipment, HowItWorks, RecruitmentSection, TrustSection } from "@/components/Sections";
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
        <RecruitmentSection language={language} copy={copy} />
        <TrustSection copy={copy} />
        <Categories copy={copy} />
        <Drivers language={language} copy={copy} />
        <Equipment copy={copy} />
        <HowItWorks copy={copy} />
        <Contact language={language} copy={copy} onOpenWeChat={() => setWechatOpen(true)} />
      </main>
      <Footer copy={copy} />
      <WeChatModal
        isOpen={wechatOpen}
        onClose={() => setWechatOpen(false)}
        copy={copy}
      />
    </>
  );
}
