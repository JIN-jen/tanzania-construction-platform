"use client";

import { categories } from "@/data/translations";
import { drivers } from "@/data/drivers";
import { DriverCard } from "./DriverCard";
import { siteConfig } from "@/data/config";

export function Categories({ tr }: { tr: any }) {
  return (
    <section className="px-5 py-12">
      <div className="mx-auto max-w-7xl">
        <div className="max-w-3xl">
          <h2 className="text-4xl font-black text-ink md:text-5xl">{tr.categoriesTitle}</h2>
          <p className="mt-4 text-lg leading-8 text-gray-600">{tr.categoriesSubtitle}</p>
        </div>
        <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {categories.map((item) => (
            <div key={item} className="rounded-3xl bg-white p-5 font-bold text-gray-800 shadow-sm ring-1 ring-black/5">{item}</div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Drivers({ tr }: { tr: any }) {
  return (
    <section id="drivers" className="px-5 py-12">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col justify-between gap-4 md:flex-row md:items-end">
          <div>
            <h2 className="text-4xl font-black text-ink md:text-5xl">{tr.driversTitle}</h2>
            <p className="mt-4 text-lg text-gray-600">{tr.driversSubtitle}</p>
          </div>
        </div>
        <div className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {drivers.map((driver) => <DriverCard key={driver.id} driver={driver} requestLabel={tr.requestDriver} />)}
        </div>
      </div>
    </section>
  );
}

export function HowItWorks({ tr }: { tr: any }) {
  const steps = [
    [tr.step1Title, tr.step1Text],
    [tr.step2Title, tr.step2Text],
    [tr.step3Title, tr.step3Text],
  ];
  return (
    <section id="how" className="px-5 py-12">
      <div className="mx-auto max-w-7xl rounded-[2.5rem] bg-white p-6 shadow-sm ring-1 ring-black/5 md:p-10">
        <h2 className="text-4xl font-black text-ink md:text-5xl">{tr.howTitle}</h2>
        <div className="mt-8 grid gap-5 md:grid-cols-3">
          {steps.map(([title, text], index) => (
            <div key={title} className="rounded-[2rem] bg-cream p-6">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-mint text-xl font-black text-deep">{index + 1}</div>
              <h3 className="mt-5 text-xl font-black text-ink">{title}</h3>
              <p className="mt-3 leading-7 text-gray-600">{text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Contact({ tr, onWechat }: { tr: any; onWechat: () => void }) {
  return (
    <section id="contact" className="px-5 py-12 pb-20">
      <div className="mx-auto grid max-w-7xl gap-5 md:grid-cols-2">
        <div className="rounded-[2.5rem] bg-deep p-8 text-white shadow-soft md:p-10">
          <h2 className="text-4xl font-black md:text-5xl">{tr.contactTitle}</h2>
          <p className="mt-4 text-lg leading-8 text-white/75">{tr.contactText}</p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a href={siteConfig.whatsappUrl} target="_blank" className="rounded-full bg-mint px-7 py-4 text-center font-black text-deep">{tr.whatsapp}</a>
            <button onClick={onWechat} className="rounded-full bg-white px-7 py-4 font-black text-deep">{tr.wechat}</button>
          </div>
          <p className="mt-6 text-sm text-white/60">WhatsApp: {siteConfig.whatsappNumber} · WeChat: {siteConfig.wechatId}</p>
        </div>
        <div className="rounded-[2.5rem] bg-white p-8 shadow-sm ring-1 ring-black/5 md:p-10">
          <h3 className="text-3xl font-black text-ink">{tr.registerTitle}</h3>
          <p className="mt-4 leading-8 text-gray-600">{tr.registerText}</p>
          <a href={siteConfig.whatsappUrl} target="_blank" className="mt-8 inline-flex rounded-full bg-mint px-7 py-4 font-black text-deep">{tr.registerButton}</a>
        </div>
      </div>
    </section>
  );
}
