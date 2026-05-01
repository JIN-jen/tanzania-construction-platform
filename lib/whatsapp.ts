import { siteConfigDerived } from "@/data/config";
import type { Language } from "@/data/translations";

export function buildWhatsAppLink(message: string) {
  return `${siteConfigDerived.whatsappUrl}?text=${encodeURIComponent(message)}`;
}

export function buildDriverInquiryLink({
  language,
  driverName,
  role,
  location,
  experience,
}: {
  language: Language;
  driverName: string;
  role: string;
  location: string;
  experience: string;
}) {
  const templates: Record<Language, string> = {
    en: `Hello, I want to request this driver: ${driverName}, ${role}, ${location}, ${experience}.`,
    zh: `你好，我想咨询这位司机：${driverName}，岗位：${role}，地点：${location}，经验：${experience}。`,
    sw: `Habari, nataka kumuomba dereva huyu: ${driverName}, kazi ${role}, eneo ${location}, uzoefu ${experience}.`,
  };

  return buildWhatsAppLink(templates[language]);
}
