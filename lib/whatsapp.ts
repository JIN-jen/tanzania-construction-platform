import type { Language } from "@/data/translations";
import { siteConfigDerived } from "@/data/config";

export function buildWhatsAppLink(message: string) {
  return `${siteConfigDerived.whatsappUrl}?text=${encodeURIComponent(message)}`;
}

export function buildResourceInquiryLink() {
  return buildWhatsAppLink(`你好，我需要工程资源支持：

需求类型：司机 / 操作手 / 设备
项目地点：
开始时间：
工期：

请帮我尽快匹配合适人员，谢谢`);
}

export function buildDriverRegistrationLink(language: Language) {
  if (language === "zh") {
    return buildWhatsAppLink(`你好，我想登记成为司机/操作手：

姓名：
工种（挖机/卡车/压路机等）：
工作经验：
所在城市：
是否有证件：

请帮我加入资源库，谢谢`);
  }

  return buildWhatsAppLink(`Hi, I want to register as a driver/operator:

Name:
Type (excavator/truck/roller etc):
Experience:
Location:
License status:

Please add me to the database, thanks`);
}
