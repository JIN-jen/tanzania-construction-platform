"use client";

import { siteConfig, siteConfigDerived } from "@/data/config";
import type { Translation } from "@/data/translations";
import { buildResourceInquiryLink } from "@/lib/whatsapp";

type HeroProps = {
  copy: Translation;
  onOpenWeChat: () => void;
};

export function Hero({ copy, onOpenWeChat }: HeroProps) {
  return (
    <section id="top" className="px-5 pb-12 pt-10 md:pb-20 md:pt-16">
      <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[1.04fr_0.96fr]">
        <div className="rounded-[2rem] border border-white/70 bg-white/88 p-8 shadow-[0_28px_80px_rgba(15,23,42,0.08)] backdrop-blur md:p-14">
          <span className="inline-flex rounded-full bg-lime-100 px-4 py-2 text-sm font-extrabold text-emerald-950">
            {copy.heroBadge}
          </span>
          <p className="mt-6 text-sm font-bold uppercase tracking-[0.2em] text-emerald-900/70">
            {copy.heroEyebrow}
          </p>
          <h1 className="mt-4 max-w-4xl text-4xl font-extrabold tracking-tight text-slate-950 md:text-6xl">
            {copy.heroTitle}
          </h1>
          <p className="mt-3 text-lg font-semibold text-slate-500 md:text-2xl">
            {copy.heroTitleEnglish}
          </p>
          <p className="mt-5 max-w-xl text-lg leading-8 text-slate-600">
            {copy.heroSubtitle}
          </p>

          <div className="mt-8 flex flex-col gap-3">
            <a
              href={buildResourceInquiryLink()}
              target="_blank"
              rel="noreferrer"
              className="inline-flex w-full items-center justify-center rounded-full bg-[#25D366] px-6 py-5 text-lg font-extrabold text-white shadow-[0_20px_50px_rgba(37,211,102,0.28)] transition hover:brightness-95 sm:w-auto sm:min-w-[280px]"
            >
              {copy.whatsapp}
            </a>
            <button
              type="button"
              onClick={onOpenWeChat}
              className="inline-flex w-full items-center justify-center rounded-full border border-slate-900/10 bg-white px-6 py-4 text-base font-extrabold text-slate-900 transition hover:border-emerald-950 hover:text-emerald-950 sm:w-auto"
            >
              {copy.wechat}
            </button>
          </div>
          <div className="mt-4 space-y-1">
            <p className="text-sm font-semibold text-slate-600">{copy.heroMicrocopy}</p>
            <p className="text-sm text-slate-500">
              {copy.ctaPhoneLabel}: <span className="font-semibold text-slate-900">{siteConfig.whatsappDisplayNumber}</span>
            </p>
            <p className="text-sm font-semibold text-emerald-900">{copy.responsePromise}</p>
          </div>

          <div className="mt-10 border-t border-slate-900/8 pt-8" />
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
      <div className="pointer-events-none fixed inset-x-0 bottom-4 z-30 px-5 md:hidden">
        <a
          href={buildResourceInquiryLink()}
          target="_blank"
          rel="noreferrer"
          className="pointer-events-auto flex w-full items-center justify-between rounded-full bg-[#25D366] px-5 py-4 text-white shadow-[0_24px_60px_rgba(37,211,102,0.3)]"
        >
          <span className="text-left">
            <span className="block text-base font-extrabold">{copy.whatsapp}</span>
            <span className="block text-xs font-semibold text-white/85">{copy.heroMicrocopy}</span>
          </span>
          <span className="text-sm font-bold">{siteConfig.whatsappDisplayNumber}</span>
        </a>
      </div>
      <a
        href={buildResourceInquiryLink()}
        target="_blank"
        rel="noreferrer"
        aria-label={copy.whatsapp}
        className="fixed bottom-6 right-6 z-30 hidden h-16 w-16 items-center justify-center rounded-full bg-[#25D366] text-2xl font-black text-white shadow-[0_24px_60px_rgba(37,211,102,0.35)] transition hover:scale-105 md:flex"
      >
        W
      </a>
    </section>
  );
}
