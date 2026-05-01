"use client";

import { siteConfig } from "@/data/config";
import type { Translation } from "@/data/translations";
import { buildResourceInquiryLink } from "@/lib/whatsapp";

type FooterProps = {
  copy: Translation;
};

export function Footer({ copy }: FooterProps) {
  return (
    <footer className="border-t border-white/10 bg-[#06281d] px-5 py-16 text-white md:py-20">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-10 lg:grid-cols-[1.15fr_0.7fr_1fr]">
          <div>
            <div className="flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-white/10 text-sm font-extrabold text-lime-300">
                TCR
              </div>
              <div>
                <p className="text-xl font-extrabold tracking-tight">{siteConfig.shortName}</p>
                <p className="text-sm text-white/70">{copy.footerTagline}</p>
              </div>
            </div>
            <p className="mt-5 max-w-md text-sm leading-7 text-white/70 md:text-base">
              {copy.footerDescription}
            </p>
          </div>

          <div>
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-white/45">
              {copy.footerNavTitle}
            </p>
            <nav className="mt-5 flex flex-col gap-3 text-sm font-semibold text-white/80">
              <a href="#drivers" className="transition hover:text-white">
                {copy.navDrivers}
              </a>
              <a href="#equipment" className="transition hover:text-white">
                {copy.navEquipment}
              </a>
              <a href="#how-it-works" className="transition hover:text-white">
                {copy.navHowItWorks}
              </a>
              <a href="#contact" className="transition hover:text-white">
                {copy.navContact}
              </a>
            </nav>
          </div>

          <div>
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-white/45">
              {copy.footerContactTitle}
            </p>
            <h3 className="mt-5 text-2xl font-extrabold tracking-tight text-white">
              {copy.footerContactHeadline}
            </h3>
            <p className="mt-3 text-lg font-semibold text-white/80">
              {siteConfig.whatsappDisplayNumber}
            </p>
            <a
              href={buildResourceInquiryLink()}
              target="_blank"
              rel="noreferrer"
              className="mt-6 inline-flex w-full items-center justify-center rounded-full bg-[#25D366] px-6 py-4 text-base font-extrabold text-white shadow-[0_20px_50px_rgba(37,211,102,0.28)] transition hover:brightness-110 sm:w-auto sm:min-w-[220px]"
            >
              {copy.footerWhatsappButton}
            </a>
            <p className="mt-3 text-sm font-semibold text-lime-200">
              {copy.footerResponseText}
            </p>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-3 border-t border-white/10 pt-6 text-sm text-white/55 md:flex-row md:items-center md:justify-between">
          <p>{copy.footerCopyright}</p>
          <p>{copy.footerMarketText}</p>
        </div>
      </div>
    </footer>
  );
}
