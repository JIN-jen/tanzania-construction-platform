import type { Language } from "@/data/translations";

type DriverContent = {
  role: string;
  experience: string;
  location: string;
  languages: string[];
  availability: string;
  description: string;
  equipment: string[];
};

export type DriverProfile = {
  id: string;
  name: string;
  content: Record<Language, DriverContent>;
};

export const drivers: DriverProfile[] = [
  {
    id: "driver-001",
    name: "Mr. John M.",
    content: {
      en: {
        role: "Excavator Operator",
        experience: "8 years",
        location: "Dar es Salaam",
        languages: ["Swahili", "Basic English"],
        availability: "Available now",
        description:
          "Experienced in road construction, earthmoving, loading, and site foundation work.",
        equipment: ["CAT 320", "CAT 323", "SANY", "XCMG"],
      },
      zh: {
        role: "挖机操作手",
        experience: "8年经验",
        location: "达累斯萨拉姆",
        languages: ["斯瓦希里语", "基础英语"],
        availability: "可立即上岗",
        description:
          "熟悉道路施工、土方作业、装车以及工地基础施工。",
        equipment: ["CAT 320", "CAT 323", "SANY", "XCMG"],
      },
      sw: {
        role: "Muendeshaji wa Excavator",
        experience: "Miaka 8",
        location: "Dar es Salaam",
        languages: ["Kiswahili", "Kiingereza cha msingi"],
        availability: "Anapatikana sasa",
        description:
          "Ana uzoefu kwenye ujenzi wa barabara, earthmoving, upakiaji na kazi za msingi wa mradi.",
        equipment: ["CAT 320", "CAT 323", "SANY", "XCMG"],
      },
    },
  },
  {
    id: "driver-002",
    name: "Mr. Hassan K.",
    content: {
      en: {
        role: "Lowbed / Trailer Driver",
        experience: "10 years",
        location: "Dar es Salaam / Morogoro",
        languages: ["Swahili", "English"],
        availability: "Available on request",
        description:
          "Strong experience transporting excavators, rollers, bulldozers, and heavy machinery between sites.",
        equipment: ["Lowbed", "Flatbed", "Heavy haulage"],
      },
      zh: {
        role: "板车 / 拖车司机",
        experience: "10年经验",
        location: "达累斯萨拉姆 / 莫罗戈罗",
        languages: ["斯瓦希里语", "英语"],
        availability: "可预约安排",
        description:
          "有丰富经验运输挖机、压路机、推土机及其他重型设备。",
        equipment: ["板车", "平板车", "重型运输"],
      },
      sw: {
        role: "Dereva wa Lowbed / Trailer",
        experience: "Miaka 10",
        location: "Dar es Salaam / Morogoro",
        languages: ["Kiswahili", "Kiingereza"],
        availability: "Anapatikana kwa mpangilio",
        description:
          "Mzoefu wa kusafirisha excavator, roller, bulldozer na mitambo mizito kati ya maeneo ya kazi.",
        equipment: ["Lowbed", "Flatbed", "Heavy haulage"],
      },
    },
  },
  {
    id: "driver-003",
    name: "Mr. Peter S.",
    content: {
      en: {
        role: "Bulldozer Operator",
        experience: "7 years",
        location: "Dodoma / Dar es Salaam",
        languages: ["Swahili"],
        availability: "Available now",
        description:
          "Good fit for land clearing, road works, mining access roads, and early site preparation.",
        equipment: ["Shantui SD16", "CAT D6", "Komatsu"],
      },
      zh: {
        role: "推土机操作手",
        experience: "7年经验",
        location: "多多马 / 达累斯萨拉姆",
        languages: ["斯瓦希里语"],
        availability: "可立即上岗",
        description:
          "适合清表、道路施工、矿区便道和项目场地准备。",
        equipment: ["Shantui SD16", "CAT D6", "Komatsu"],
      },
      sw: {
        role: "Muendeshaji wa Bulldozer",
        experience: "Miaka 7",
        location: "Dodoma / Dar es Salaam",
        languages: ["Kiswahili"],
        availability: "Anapatikana sasa",
        description:
          "Anafaa kwa land clearing, kazi za barabara, njia za migodini na maandalizi ya eneo la mradi.",
        equipment: ["Shantui SD16", "CAT D6", "Komatsu"],
      },
    },
  },
  {
    id: "driver-004",
    name: "Mr. Michael B.",
    content: {
      en: {
        role: "Dump Truck Driver",
        experience: "6 years",
        location: "Dar es Salaam",
        languages: ["Swahili", "Basic English"],
        availability: "Available now",
        description:
          "Suitable for earthwork hauling, aggregate delivery, and mining or construction material transport.",
        equipment: ["Hongyan 6x4", "Sinotruk", "Howo"],
      },
      zh: {
        role: "自卸车司机",
        experience: "6年经验",
        location: "达累斯萨拉姆",
        languages: ["斯瓦希里语", "基础英语"],
        availability: "可立即上岗",
        description:
          "适合土方运输、砂石材料配送以及矿区和工地运输。",
        equipment: ["Hongyan 6x4", "Sinotruk", "Howo"],
      },
      sw: {
        role: "Dereva wa Dump Truck",
        experience: "Miaka 6",
        location: "Dar es Salaam",
        languages: ["Kiswahili", "Kiingereza cha msingi"],
        availability: "Anapatikana sasa",
        description:
          "Anafaa kwa usafiri wa kifusi, vifaa vya ujenzi, na hauling ya maeneo ya migodi au mradi.",
        equipment: ["Hongyan 6x4", "Sinotruk", "Howo"],
      },
    },
  },
];
