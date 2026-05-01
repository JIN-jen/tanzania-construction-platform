"use client";

import { siteConfig, siteConfigDerived } from "@/data/config";
import type { Translation } from "@/data/translations";

type HeroProps = {
  copy: Translation;
  onOpenWeChat: () => void;
};

export function Hero({ copy, onOpenWeChat }: HeroProps) {
  return (
    <section id="top" className="px-5 pb-10 pt-10 md:pb-16 md:pt-14">
      <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[1.08fr_0.92fr]">
        <div className="rounded-[2rem] border border-white/70 bg-white/88 p-8 shadow-[0_28px_80px_rgba(15,23,42,0.08)] backdrop-blur md:p-12">
          <span className="inline-flex rounded-full bg-lime-100 px-4 py-2 text-sm font-extrabold text-emerald-950">
            {copy.heroBadge}
          </span>
          <h1 className="mt-6 max-w-4xl text-4xl font-extrabold tracking-tight text-slate-950 md:text-6xl">
            {copy.heroTitle}
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600 md:text-xl">
            {copy.heroSubtitle}
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              href={siteConfigDerived.whatsappUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center rounded-full bg-emerald-950 px-6 py-4 text-base font-extrabold text-white transition hover:bg-emerald-900"
            >
              {copy.whatsapp}
            </a>
            <button
              type="button"
              onClick={onOpenWeChat}
              className="inline-flex items-center justify-center rounded-full border border-slate-900/10 bg-white px-6 py-4 text-base font-extrabold text-slate-900 transition hover:border-emerald-950 hover:text-emerald-950"
            >
              {copy.wechat}
            </button>
          </div>

          <div className="mt-8 grid gap-3 sm:grid-cols-3">
            {[copy.trustFast, copy.trustPrivate, copy.trustBilingual].map((item) => (
              <div
                key={item}
                className="rounded-2xl border border-slate-900/8 bg-slate-50 px-4 py-4 text-sm font-semibold text-slate-700"
              >
                {item}
              </div>
            ))}
          </div>
        </div>

        <aside className="rounded-[2rem] bg-emerald-950 p-6 text-white shadow-[0_28px_80px_rgba(14,50,25,0.24)] md:p-8">
          <div className="rounded-[1.75rem] border border-white/10 bg-white/6 p-6">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-lime-300/85">
              {copy.panelEyebrow}
            </p>
            <h2 className="mt-3 text-3xl font-extrabold tracking-tight">
              {copy.panelTitle}
            </h2>
            <p className="mt-3 text-sm leading-7 text-white/72">
              {copy.panelText}
            </p>

            <div className="mt-8 space-y-3">
              {copy.resourceFlow.map((item, index) => (
                <div
                  key={item}
                  className="flex items-center gap-4 rounded-2xl bg-white/8 px-4 py-4"
                >
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-lime-300 text-sm font-extrabold text-emerald-950">
                    {index + 1}
                  </div>
                  <p className="font-semibold text-white">{item}</p>
                </div>
              ))}
            </div>

            <div className="mt-8 rounded-2xl bg-lime-300 px-5 py-4 text-emerald-950">
              <p className="text-xs font-bold uppercase tracking-[0.2em]">
                {copy.platformContactLabel}
              </p>
              <p className="mt-2 text-lg font-extrabold">{siteConfig.whatsappDisplayNumber}</p>
            </div>
          </div>
        </aside>
      </div>
    </section>
  );
}
