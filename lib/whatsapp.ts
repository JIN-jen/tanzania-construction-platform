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
工种：
工作经验：
所在城市：
证件情况：
可开始工作时间：

请帮我加入 TCR Hub 司机/操作手资源库。`);
  }

  if (language === "sw") {
    return buildWhatsAppLink(`Halo, nataka kujisajili kama dereva/opereta:

Jina:
Aina ya kazi:
Uzoefu:
Mahali:
Leseni/Cheti:
Ninaweza kuanza lini:

Tafadhali niongeze kwenye database ya TCR Hub.`);
  }

  return buildWhatsAppLink(`Hi, I want to register as a driver/operator:

Name:
Work type:
Experience:
Location:
License/Certificate:
Available start date:

Please add me to the TCR Hub driver/operator database.`);
}
