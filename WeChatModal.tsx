"use client";

import Image from "next/image";
import { siteConfig } from "@/data/config";

export function WeChatModal({ open, onClose, title, text, closeLabel }: { open: boolean; onClose: () => void; title: string; text: string; closeLabel: string }) {
  if (!open) return null;
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4 backdrop-blur-sm">
      <div className="w-full max-w-md rounded-[2rem] bg-white p-6 shadow-soft">
        <div className="flex items-start justify-between gap-4">
          <div>
            <h3 className="text-2xl font-bold text-ink">{title}</h3>
            <p className="mt-2 text-gray-600">{text}</p>
          </div>
          <button onClick={onClose} className="rounded-full bg-gray-100 px-3 py-2 text-gray-700 hover:bg-gray-200">×</button>
        </div>
        <div className="mt-6 rounded-3xl bg-cream p-4 text-center">
          <Image src={siteConfig.wechatQr} alt="WeChat QR code" width={360} height={360} className="mx-auto rounded-2xl" />
          <p className="mt-4 text-sm text-gray-500">WeChat ID</p>
          <p className="text-xl font-bold text-deep">{siteConfig.wechatId}</p>
        </div>
        <button onClick={onClose} className="mt-5 w-full rounded-full bg-deep px-5 py-3 font-bold text-white hover:opacity-90">{closeLabel}</button>
      </div>
    </div>
  );
}
