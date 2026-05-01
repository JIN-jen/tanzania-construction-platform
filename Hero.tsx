"use client";

import { siteConfig } from "@/data/config";

export function Hero({ tr, onWechat }: { tr: any; onWechat: () => void }) {
  return (
    <section className="relative overflow-hidden px-5 py-16 md:py-24">
      <div className="absolute left-1/2 top-0 -z-10 h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-mint/35 blur-3xl" />
      <div className="mx-auto grid max-w-7xl items-center gap-10 md:grid-cols-[1.1fr_0.9fr]">
        <div>
          <span className="inline-flex rounded-full bg-white px-4 py-2 text-sm font-bold text-deep shadow-sm ring-1 ring-black/5">{tr.heroBadge}</span>
          <h1 className="mt-6 max-w-4xl text-5xl font-black tracking-tight text-ink md:text-7xl">{tr.heroTitle}</h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-gray-700 md:text-xl">{tr.heroSubtitle}</p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a href={siteConfig.whatsappUrl} target="_blank" className="rounded-full bg-mint px-7 py-4 text-center text-base font-black text-deep shadow-sm transition hover:scale-[1.01]">{tr.whatsapp}</a>
            <button onClick={onWechat} className="rounded-full bg-deep px-7 py-4 text-base font-black text-white shadow-sm transition hover:scale-[1.01]">{tr.wechat}</button>
          </div>
          <div className="mt-8 flex flex-wrap gap-3 text-sm font-semibold text-gray-700">
            {[tr.trust1, tr.trust2, tr.trust3].map((item) => (
              <span key={item} className="rounded-full bg-white px-4 py-2 shadow-sm ring-1 ring-black/5">✓ {item}</span>
            ))}
          </div>
        </div>
        <div className="rounded-[2.5rem] bg-deep p-5 shadow-soft">
          <div className="rounded-[2rem] bg-[#204800] p-6 text-white">
            <p className="text-sm font-bold text-mint">Resource flow</p>
            <div className="mt-6 space-y-4">
              {["Drivers", "Boss contacts", "Equipment rental", "Construction teams", "Trade supply"].map((item, index) => (
                <div key={item} className="flex items-center gap-4 rounded-2xl bg-white/10 p-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-mint font-black text-deep">{index + 1}</div>
                  <span className="font-bold">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
