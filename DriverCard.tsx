"use client";

import { Driver } from "@/data/drivers";
import { siteConfig } from "@/data/config";

export function DriverCard({ driver, requestLabel }: { driver: Driver; requestLabel: string }) {
  const msg = encodeURIComponent(`Hello, I want to request this driver: ${driver.role}, ${driver.location}, ${driver.experience} experience.`);
  return (
    <div className="rounded-[2rem] bg-white p-6 shadow-sm ring-1 ring-black/5 transition hover:-translate-y-1 hover:shadow-soft">
      <div className="flex items-start justify-between gap-4">
        <div>
          <p className="text-lg font-black text-ink">{driver.name}</p>
          <p className="mt-1 font-bold text-deep">{driver.role}</p>
        </div>
        <span className="rounded-full bg-mint/30 px-3 py-1 text-xs font-black text-deep">{driver.availability}</span>
      </div>
      <p className="mt-4 text-sm leading-6 text-gray-600">{driver.description}</p>
      <div className="mt-5 grid gap-3 text-sm">
        <div><span className="font-bold text-gray-900">Experience: </span>{driver.experience}</div>
        <div><span className="font-bold text-gray-900">Location: </span>{driver.location}</div>
        <div><span className="font-bold text-gray-900">Languages: </span>{driver.languages.join(" / ")}</div>
      </div>
      <div className="mt-5 flex flex-wrap gap-2">
        {driver.equipment.map((item) => <span key={item} className="rounded-full bg-cream px-3 py-1 text-xs font-bold text-gray-700">{item}</span>)}
      </div>
      <a href={`https://wa.me/255620147771?text=${msg}`} target="_blank" className="mt-6 block rounded-full bg-deep px-5 py-3 text-center font-black text-white hover:opacity-90">
        {requestLabel}
      </a>
    </div>
  );
}
