import type { DriverProfile } from "@/data/drivers";
import type { Language, Translation } from "@/data/translations";
import { buildDriverInquiryLink } from "@/lib/whatsapp";

type DriverCardProps = {
  driver: DriverProfile;
  language: Language;
  copy: Translation;
};

export function DriverCard({ driver, language, copy }: DriverCardProps) {
  const details = driver.content[language];

  return (
    <article className="rounded-[1.75rem] border border-slate-900/8 bg-white p-6 shadow-[0_16px_45px_rgba(15,23,42,0.06)] transition duration-200 hover:-translate-y-1 hover:shadow-[0_24px_60px_rgba(15,23,42,0.1)]">
      <div className="flex items-start justify-between gap-4">
        <div>
          <p className="text-lg font-extrabold text-slate-900">{driver.name}</p>
          <p className="mt-1 font-semibold text-emerald-950">{details.role}</p>
        </div>
        <span className="rounded-full bg-lime-100 px-3 py-1 text-xs font-bold text-emerald-950">
          {details.availability}
        </span>
      </div>

      <p className="mt-4 text-sm leading-7 text-slate-600">{details.description}</p>

      <dl className="mt-5 grid gap-3 text-sm">
        <div>
          <dt className="font-bold text-slate-900">{copy.driverExperienceLabel}</dt>
          <dd className="mt-1 text-slate-600">{details.experience}</dd>
        </div>
        <div>
          <dt className="font-bold text-slate-900">{copy.driverLocationLabel}</dt>
          <dd className="mt-1 text-slate-600">{details.location}</dd>
        </div>
        <div>
          <dt className="font-bold text-slate-900">{copy.driverLanguagesLabel}</dt>
          <dd className="mt-1 text-slate-600">{details.languages.join(" / ")}</dd>
        </div>
      </dl>

      <div className="mt-5 flex flex-wrap gap-2">
        {details.equipment.map((item) => (
          <span
            key={item}
            className="rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-700"
          >
            {item}
          </span>
        ))}
      </div>

      <a
        href={buildDriverInquiryLink({
          language,
          driverName: driver.name,
          role: details.role,
          location: details.location,
          experience: details.experience,
        })}
        target="_blank"
        rel="noreferrer"
        className="mt-6 inline-flex w-full items-center justify-center rounded-full bg-emerald-950 px-5 py-3 text-center font-extrabold text-white transition hover:bg-emerald-900"
      >
        {copy.requestDriver}
      </a>
    </article>
  );
}
