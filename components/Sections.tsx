import { DriverCard } from "@/components/DriverCard";
import { drivers } from "@/data/drivers";
import type { Language, Translation } from "@/data/translations";
import { buildDriverRegistrationLink, buildResourceInquiryLink } from "@/lib/whatsapp";

type SectionProps = {
  copy: Translation;
};

type DriversProps = {
  language: Language;
  copy: Translation;
};

type ContactProps = {
  language: Language;
  copy: Translation;
  onOpenWeChat: () => void;
};

export function Categories({ copy }: SectionProps) {
  return (
    <section id="categories" className="px-5 py-12 md:py-16">
      <div className="mx-auto max-w-7xl">
        <div className="max-w-3xl">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-emerald-900/70">
            {copy.categoriesEyebrow}
          </p>
          <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-slate-950 md:text-5xl">
            {copy.categoriesTitle}
          </h2>
          <p className="mt-4 max-w-2xl text-lg leading-8 text-slate-600">
            {copy.categoriesSubtitle}
          </p>
        </div>

        <div className="mt-8 grid gap-4 lg:grid-cols-3">
          {copy.serviceCards.map((card) => (
            <a
              key={card.title}
              href={buildResourceInquiryLink()}
              target="_blank"
              rel="noreferrer"
              className="group rounded-[1.75rem] border border-white/70 bg-white/92 p-6 shadow-[0_14px_36px_rgba(15,23,42,0.05)] transition hover:-translate-y-1 hover:shadow-[0_24px_60px_rgba(15,23,42,0.09)]"
            >
              <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-lime-100 text-sm font-extrabold text-emerald-950">
                WA
              </div>
              <h3 className="mt-5 text-2xl font-extrabold tracking-tight text-slate-950">
                {card.title}
              </h3>
              <p className="mt-3 max-w-xs text-base leading-7 text-slate-600">
                {card.text}
              </p>
              <p className="mt-6 text-sm font-bold text-[#25D366] group-hover:translate-x-1 transition">
                {copy.whatsapp}
              </p>
            </a>
          ))}
        </div>

        <div className="mt-8 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
          {copy.categories.map((item) => (
            <div
              key={item.title}
              className="rounded-[1.5rem] border border-white/70 bg-white/85 p-5 shadow-[0_14px_36px_rgba(15,23,42,0.05)]"
            >
              <p className="text-base font-extrabold text-slate-900">{item.title}</p>
              <p className="mt-3 text-sm leading-6 text-slate-600">{item.text}</p>
              <a
                href={buildResourceInquiryLink()}
                target="_blank"
                rel="noreferrer"
                className="mt-5 inline-flex rounded-full bg-lime-100 px-4 py-2 text-sm font-bold text-emerald-950 transition hover:bg-lime-200"
              >
                {copy.askService}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function TrustSection({ copy }: SectionProps) {
  return (
    <section className="px-5 py-6 md:py-8">
      <div className="mx-auto max-w-7xl rounded-[2rem] border border-white/70 bg-white/88 p-6 shadow-[0_18px_50px_rgba(15,23,42,0.05)] md:p-8">
        <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
          <p className="text-lg font-extrabold tracking-tight text-slate-950 lg:shrink-0">
            {copy.trustSectionTitle}
          </p>
          <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-4 lg:flex-1">
            {copy.trustItems.map((item) => (
              <div key={item} className="rounded-full bg-slate-50 px-4 py-3 text-sm font-bold text-slate-700 text-center">
                {item}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export function Drivers({ language, copy }: DriversProps) {
  return (
    <section id="drivers" className="px-5 py-12 md:py-16">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div className="max-w-3xl">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-emerald-900/70">
              {copy.driversEyebrow}
            </p>
            <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-slate-950 md:text-5xl">
              {copy.driversTitle}
            </h2>
            <p className="mt-4 max-w-2xl text-lg leading-8 text-slate-600">
              {copy.driversSubtitle}
            </p>
          </div>
          <div className="rounded-full bg-white px-4 py-2 text-sm font-semibold text-slate-500 shadow-[0_10px_25px_rgba(15,23,42,0.06)]">
            {copy.privacyNote}
          </div>
        </div>

        <div className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {drivers.map((driver) => (
            <DriverCard
              key={driver.id}
              driver={driver}
              language={language}
              copy={copy}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export function Equipment({ copy }: SectionProps) {
  return (
    <section id="equipment" className="px-5 py-12 md:py-16">
      <div className="mx-auto grid max-w-7xl gap-5 lg:grid-cols-[0.9fr_1.1fr]">
        <div className="rounded-[2rem] border border-white/70 bg-white/88 p-8 shadow-[0_20px_60px_rgba(15,23,42,0.06)] md:p-10">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-emerald-900/70">
            {copy.equipmentEyebrow}
          </p>
          <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-slate-950 md:text-5xl">
            {copy.equipmentTitle}
          </h2>
          <p className="mt-4 text-lg leading-8 text-slate-600">
            {copy.equipmentSubtitle}
          </p>
          <div className="mt-8 grid gap-3 sm:grid-cols-2">
            {copy.equipmentCards.map((item) => (
              <div
                key={item.title}
                className="rounded-[1.5rem] bg-slate-50 p-5"
              >
                <p className="text-base font-extrabold text-slate-900">{item.title}</p>
                <p className="mt-2 text-sm leading-7 text-slate-600">{item.text}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="flex h-full flex-col gap-8 rounded-[2rem] bg-emerald-950 p-8 text-white shadow-[0_28px_80px_rgba(14,50,25,0.24)] md:gap-10 md:p-10">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-lime-300/80">
            {copy.marketEyebrow}
            </p>
            <h3 className="mt-3 text-3xl font-extrabold tracking-tight md:text-4xl">
              {copy.marketTitle}
            </h3>
            <p className="mt-4 text-lg leading-8 text-white/75">
              {copy.marketText}
            </p>
          </div>
          <div className="grid gap-4 sm:grid-cols-3">
            {copy.marketPoints.map((item) => (
              <div key={item} className="rounded-[1.5rem] border border-white/10 bg-white/8 p-5 text-sm font-semibold leading-6 text-white">
                {item}
              </div>
            ))}
          </div>

          <div className="rounded-[1.75rem] border border-white/10 bg-white/7 p-6 md:p-7">
            <p className="text-2xl font-extrabold tracking-tight text-white">
              {copy.marketCtaTitle}
            </p>
            <p className="mt-3 max-w-xl text-sm leading-7 text-white/75 md:text-base">
              {copy.marketCtaText}
            </p>
            <a
              href={buildResourceInquiryLink()}
              target="_blank"
              rel="noreferrer"
              className="mt-6 inline-flex w-full items-center justify-center rounded-full bg-[#25D366] px-6 py-4 text-base font-extrabold text-white shadow-[0_20px_50px_rgba(37,211,102,0.28)] transition hover:brightness-110 sm:w-auto sm:min-w-[240px]"
            >
              {copy.marketCtaButton}
            </a>
            <p className="mt-3 text-sm font-semibold text-lime-200">
              {copy.marketCtaMicrocopy}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export function HowItWorks({ copy }: SectionProps) {
  return (
    <section id="how-it-works" className="px-5 py-12 md:py-16">
      <div className="mx-auto max-w-7xl rounded-[2rem] border border-white/70 bg-white/88 p-6 shadow-[0_20px_70px_rgba(15,23,42,0.07)] md:p-10">
        <p className="text-sm font-bold uppercase tracking-[0.2em] text-emerald-900/70">
          {copy.howEyebrow}
        </p>
        <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-slate-950 md:text-5xl">
          {copy.howTitle}
        </h2>
        <div className="mt-10 grid gap-5 lg:grid-cols-3">
          {copy.steps.map((step, index) => (
            <article key={step.title} className="rounded-[1.75rem] bg-slate-50 p-7">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-lime-100 text-lg font-extrabold text-emerald-950">
                {index + 1}
              </div>
              <h3 className="mt-5 text-xl font-extrabold text-slate-900">
                {step.title}
              </h3>
              <p className="mt-3 leading-7 text-slate-600">{step.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Contact({ language, copy, onOpenWeChat }: ContactProps) {
  return (
    <section id="contact" className="px-5 py-12 pb-28 md:py-16 md:pb-16">
      <div className="mx-auto grid max-w-7xl gap-5 lg:grid-cols-[1.15fr_0.85fr]">
        <div className="rounded-[2rem] bg-emerald-950 p-8 text-white shadow-[0_28px_80px_rgba(14,50,25,0.24)] md:p-10">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-lime-300/80">
            {copy.contactEyebrow}
          </p>
          <div className="mt-4 inline-flex rounded-full bg-[#FF5A54] px-4 py-2 text-sm font-extrabold text-white shadow-[0_16px_36px_rgba(255,90,84,0.25)]">
            {copy.contactUrgentTag}
          </div>
          <h2 className="mt-3 text-3xl font-extrabold tracking-tight md:text-5xl">
            {copy.contactTitle}
          </h2>
          <p className="mt-4 max-w-xl text-lg leading-8 text-white/75">
            {copy.contactText}
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              href={buildResourceInquiryLink()}
              target="_blank"
              rel="noreferrer"
              className="inline-flex w-full items-center justify-center rounded-full bg-[#25D366] px-7 py-5 text-lg font-extrabold text-white shadow-[0_24px_60px_rgba(37,211,102,0.3)] transition hover:brightness-95 sm:w-auto sm:min-w-[320px]"
            >
              {copy.whatsapp}
            </a>
            <button
              type="button"
              onClick={onOpenWeChat}
              className="inline-flex w-full items-center justify-center rounded-full bg-white px-6 py-4 text-base font-extrabold text-slate-900 transition hover:bg-slate-100 sm:w-auto"
            >
              {copy.wechat}
            </button>
          </div>

          <p className="mt-4 text-sm font-semibold text-white/85">{copy.heroMicrocopy}</p>
          <p className="mt-2 text-sm font-semibold text-lime-200">{copy.responsePromise}</p>
          <p className="mt-2 text-sm text-white/70">{copy.contactSupportNote}</p>
        </div>

        <div className="rounded-[2rem] border border-white/70 bg-white/88 p-8 shadow-[0_20px_60px_rgba(15,23,42,0.06)] md:p-10">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-emerald-900/70">
            {copy.registerEyebrow}
          </p>
          <h3 className="mt-3 text-3xl font-extrabold tracking-tight text-slate-950">
            {copy.registerTitle}
          </h3>
          <p className="mt-4 leading-8 text-slate-600">{copy.registerText}</p>
          <a
            href={buildDriverRegistrationLink(language)}
            target="_blank"
            rel="noreferrer"
            className="mt-8 inline-flex rounded-full bg-emerald-950 px-6 py-4 font-extrabold text-white transition hover:bg-emerald-900"
          >
            {copy.registerButton}
          </a>
          <p className="mt-3 text-sm font-semibold text-slate-500">{copy.registerTrustLine}</p>
          <p className="mt-2 text-sm font-semibold text-emerald-900">{copy.registerSocialProof}</p>
          <p className="mt-6 text-sm font-bold text-slate-900">{copy.registerReferralLine}</p>
          <p className="mt-2 text-xs leading-6 text-slate-500">{copy.registerReferralDisclaimer}</p>
        </div>
      </div>
    </section>
  );
}
