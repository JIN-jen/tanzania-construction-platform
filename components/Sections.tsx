import { DriverCard } from "@/components/DriverCard";
import { drivers } from "@/data/drivers";
import type { Language, Translation } from "@/data/translations";
import { buildWhatsAppLink } from "@/lib/whatsapp";

type SectionProps = {
  copy: Translation;
};

type DriversProps = {
  language: Language;
  copy: Translation;
};

type ContactProps = {
  copy: Translation;
  onOpenWeChat: () => void;
};

export function Categories({ copy }: SectionProps) {
  return (
    <section id="categories" className="px-5 py-10 md:py-14">
      <div className="mx-auto max-w-7xl">
        <div className="max-w-3xl">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-emerald-900/70">
            {copy.categoriesEyebrow}
          </p>
          <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-slate-950 md:text-5xl">
            {copy.categoriesTitle}
          </h2>
          <p className="mt-4 text-lg leading-8 text-slate-600">
            {copy.categoriesSubtitle}
          </p>
        </div>

        <div className="mt-8 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
          {copy.categories.map((item) => (
            <div
              key={item}
              className="rounded-[1.5rem] border border-white/70 bg-white/85 p-5 text-base font-bold text-slate-800 shadow-[0_14px_36px_rgba(15,23,42,0.05)]"
            >
              {item}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Drivers({ language, copy }: DriversProps) {
  return (
    <section id="drivers" className="px-5 py-10 md:py-14">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div className="max-w-3xl">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-emerald-900/70">
              {copy.driversEyebrow}
            </p>
            <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-slate-950 md:text-5xl">
              {copy.driversTitle}
            </h2>
            <p className="mt-4 text-lg leading-8 text-slate-600">
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

export function HowItWorks({ copy }: SectionProps) {
  return (
    <section id="how-it-works" className="px-5 py-10 md:py-14">
      <div className="mx-auto max-w-7xl rounded-[2rem] border border-white/70 bg-white/88 p-6 shadow-[0_20px_70px_rgba(15,23,42,0.07)] md:p-10">
        <p className="text-sm font-bold uppercase tracking-[0.2em] text-emerald-900/70">
          {copy.howEyebrow}
        </p>
        <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-slate-950 md:text-5xl">
          {copy.howTitle}
        </h2>
        <div className="mt-8 grid gap-5 lg:grid-cols-3">
          {copy.steps.map((step, index) => (
            <article key={step.title} className="rounded-[1.75rem] bg-slate-50 p-6">
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

export function Contact({ copy, onOpenWeChat }: ContactProps) {
  return (
    <section id="contact" className="px-5 py-10 md:py-14">
      <div className="mx-auto grid max-w-7xl gap-5 lg:grid-cols-[1.15fr_0.85fr]">
        <div className="rounded-[2rem] bg-emerald-950 p-8 text-white shadow-[0_28px_80px_rgba(14,50,25,0.24)] md:p-10">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-lime-300/80">
            {copy.contactEyebrow}
          </p>
          <h2 className="mt-3 text-3xl font-extrabold tracking-tight md:text-5xl">
            {copy.contactTitle}
          </h2>
          <p className="mt-4 max-w-2xl text-lg leading-8 text-white/75">
            {copy.contactText}
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              href={buildWhatsAppLink(copy.whatsappLeadMessage)}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center rounded-full bg-lime-300 px-6 py-4 text-base font-extrabold text-emerald-950 transition hover:bg-lime-200"
            >
              {copy.whatsapp}
            </a>
            <button
              type="button"
              onClick={onOpenWeChat}
              className="inline-flex items-center justify-center rounded-full bg-white px-6 py-4 text-base font-extrabold text-slate-900 transition hover:bg-slate-100"
            >
              {copy.wechat}
            </button>
          </div>

          <p className="mt-6 text-sm text-white/65">{copy.contactSupportNote}</p>
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
            href={buildWhatsAppLink(copy.driverLeadMessage)}
            target="_blank"
            rel="noreferrer"
            className="mt-8 inline-flex rounded-full bg-emerald-950 px-6 py-4 font-extrabold text-white transition hover:bg-emerald-900"
          >
            {copy.registerButton}
          </a>
        </div>
      </div>
    </section>
  );
}
