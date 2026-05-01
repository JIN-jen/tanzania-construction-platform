"use client";

import Image from "next/image";
import { useEffect } from "react";
import { siteConfig } from "@/data/config";
import type { Translation } from "@/data/translations";

type WeChatModalProps = {
  isOpen: boolean;
  onClose: () => void;
  copy: Translation;
};

export function WeChatModal({ isOpen, onClose, copy }: WeChatModalProps) {
  useEffect(() => {
    if (!isOpen) {
      return;
    }

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) {
    return null;
  }

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/55 p-4 backdrop-blur-sm"
      role="presentation"
      onClick={onClose}
    >
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="wechat-modal-title"
        className="w-full max-w-md rounded-[2rem] bg-white p-6 shadow-[0_28px_80px_rgba(15,23,42,0.18)]"
        onClick={(event) => event.stopPropagation()}
      >
        <div className="flex items-start justify-between gap-4">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-emerald-900/65">
              {copy.wechatModalEyebrow}
            </p>
            <h3
              id="wechat-modal-title"
              className="mt-2 text-2xl font-extrabold tracking-tight text-slate-950"
            >
              {copy.wechatModalTitle}
            </h3>
            <p className="mt-3 text-slate-600">{copy.wechatModalText}</p>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="rounded-full bg-slate-100 px-3 py-2 text-slate-600 transition hover:bg-slate-200"
            aria-label={copy.close}
          >
            ×
          </button>
        </div>

        <div className="mt-6 rounded-[1.75rem] bg-slate-50 p-4 text-center">
          <Image
            src={siteConfig.wechatQr}
            alt={copy.wechatQrAlt}
            width={360}
            height={360}
            className="mx-auto rounded-2xl"
            priority
          />
          <p className="mt-4 text-sm font-semibold uppercase tracking-[0.18em] text-slate-500">
            {copy.wechatIdLabel}
          </p>
          <p className="mt-2 text-xl font-extrabold text-slate-950">
            {siteConfig.wechatId}
          </p>
        </div>

        <button
          type="button"
          onClick={onClose}
          className="mt-5 w-full rounded-full bg-emerald-950 px-5 py-3 font-extrabold text-white transition hover:bg-emerald-900"
        >
          {copy.close}
        </button>
      </div>
    </div>
  );
}
