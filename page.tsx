"use client";

import { useState } from "react";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { WeChatModal } from "@/components/WeChatModal";
import { Categories, Drivers, HowItWorks, Contact } from "@/components/Sections";
import { Lang, t } from "@/data/translations";

export default function Home() {
  const [lang, setLang] = useState<Lang>("en");
  const [wechatOpen, setWechatOpen] = useState(false);
  const tr = t[lang];

  return (
    <main>
      <Header lang={lang} setLang={setLang} tr={tr} />
      <Hero tr={tr} onWechat={() => setWechatOpen(true)} />
      <Categories tr={tr} />
      <Drivers tr={tr} />
      <HowItWorks tr={tr} />
      <Contact tr={tr} onWechat={() => setWechatOpen(true)} />
      <footer className="border-t border-black/5 px-5 py-8 text-center text-sm text-gray-500">{tr.footer}</footer>
      <WeChatModal open={wechatOpen} onClose={() => setWechatOpen(false)} title={tr.wechatModalTitle} text={tr.wechatModalText} closeLabel={tr.close} />
    </main>
  );
}
