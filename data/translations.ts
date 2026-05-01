export type Language = "en" | "zh" | "sw";

export const defaultLanguage: Language = "en";

export const languageLabels: Record<Language, string> = {
  en: "EN",
  zh: "中文",
  sw: "Swahili",
};

export const isLanguage = (value: string | null): value is Language =>
  value === "en" || value === "zh" || value === "sw";

export type Translation = {
  navCategories: string;
  navDrivers: string;
  navHowItWorks: string;
  navContact: string;
  headerCta: string;
  heroBadge: string;
  heroTitle: string;
  heroSubtitle: string;
  whatsapp: string;
  wechat: string;
  trustFast: string;
  trustPrivate: string;
  trustBilingual: string;
  panelEyebrow: string;
  panelTitle: string;
  panelText: string;
  resourceFlow: string[];
  platformContactLabel: string;
  categoriesEyebrow: string;
  categoriesTitle: string;
  categoriesSubtitle: string;
  categories: string[];
  driversEyebrow: string;
  driversTitle: string;
  driversSubtitle: string;
  privacyNote: string;
  driverExperienceLabel: string;
  driverLocationLabel: string;
  driverLanguagesLabel: string;
  requestDriver: string;
  howEyebrow: string;
  howTitle: string;
  steps: { title: string; text: string }[];
  contactEyebrow: string;
  contactTitle: string;
  contactText: string;
  contactSupportNote: string;
  registerEyebrow: string;
  registerTitle: string;
  registerText: string;
  registerButton: string;
  whatsappLeadMessage: string;
  driverLeadMessage: string;
  wechatModalEyebrow: string;
  wechatModalTitle: string;
  wechatModalText: string;
  wechatIdLabel: string;
  wechatQrAlt: string;
  close: string;
  footer: string;
};

export const translations: Record<Language, Translation> = {
  en: {
    navCategories: "Categories",
    navDrivers: "Drivers",
    navHowItWorks: "How it works",
    navContact: "Contact",
    headerCta: "Start on WhatsApp",
    heroBadge: "Tanzania construction resource platform",
    heroTitle: "Find reliable machine operators and drivers across Tanzania",
    heroSubtitle:
      "A focused, professional front door for contractors and project teams who need trusted operators, lowbed drivers, and construction support without exposing driver phone numbers publicly.",
    whatsapp: "Contact on WhatsApp",
    wechat: "Add WeChat",
    trustFast: "Fast matching for active projects",
    trustPrivate: "Private driver details until a serious inquiry",
    trustBilingual: "Support for English, Chinese, and Swahili communication",
    panelEyebrow: "Platform scope",
    panelTitle: "Built for driver matching first, designed to expand cleanly",
    panelText:
      "The current landing page focuses on high-intent driver and operator leads, with a structure that can later grow into equipment rental, construction teams, and trade supply.",
    resourceFlow: [
      "Driver and operator sourcing",
      "Direct contractor inquiries",
      "Equipment and lowbed requests",
      "Construction team referrals",
      "Trade and material support",
    ],
    platformContactLabel: "Primary WhatsApp line",
    categoriesEyebrow: "Coverage",
    categoriesTitle: "Key operator and driver categories",
    categoriesSubtitle:
      "The first version focuses on the categories most often requested by contractors and Chinese project teams in Tanzania.",
    categories: [
      "Excavator operators",
      "Bulldozer operators",
      "Motor grader operators",
      "Wheel loader operators",
      "Road roller operators",
      "Dump truck drivers",
      "Lowbed and trailer drivers",
      "Water truck drivers",
    ],
    driversEyebrow: "Sample profiles",
    driversTitle: "Available driver samples",
    driversSubtitle:
      "Profiles show the kind of talent available through the platform while keeping personal numbers private.",
    privacyNote: "Real phone numbers stay private until inquiry.",
    driverExperienceLabel: "Experience",
    driverLocationLabel: "Location",
    driverLanguagesLabel: "Languages",
    requestDriver: "Request this driver",
    howEyebrow: "Process",
    howTitle: "A simple way to match the right operator",
    steps: [
      {
        title: "Send your requirement",
        text: "Share the machine type, site location, preferred start date, and any language or shift requirements.",
      },
      {
        title: "Receive suitable matches",
        text: "The platform checks availability and recommends relevant drivers or operators for the job.",
      },
      {
        title: "Confirm and mobilize",
        text: "Once approved, the selected operator can be coordinated for site arrival and onboarding.",
      },
    ],
    contactEyebrow: "Urgent request",
    contactTitle: "Need a driver today?",
    contactText:
      "Send the requirement through WhatsApp or WeChat and include the machine type, site location, and start timing.",
    contactSupportNote:
      "WhatsApp and WeChat both route through the platform so contact details stay controlled and professional.",
    registerEyebrow: "Supply side",
    registerTitle: "Register as a driver or operator",
    registerText:
      "Drivers, operators, and lowbed teams can apply to be included in the platform resource list for future matching.",
    registerButton: "Apply by WhatsApp",
    whatsappLeadMessage:
      "Hello, I need a construction driver or machine operator in Tanzania.",
    driverLeadMessage:
      "Hello, I want to register as a driver or machine operator on the Tanzania Construction Resource Platform.",
    wechatModalEyebrow: "WeChat contact",
    wechatModalTitle: "Add WeChat",
    wechatModalText: "Scan the QR code or search the WeChat ID below to contact the platform directly.",
    wechatIdLabel: "WeChat ID",
    wechatQrAlt: "WeChat QR code for Tanzania Construction Resource Platform",
    close: "Close",
    footer:
      "Built for driver matching first and structured to grow into a broader Tanzania construction resource platform.",
  },
  zh: {
    navCategories: "分类",
    navDrivers: "司机资源",
    navHowItWorks: "服务流程",
    navContact: "联系",
    headerCta: "WhatsApp 咨询",
    heroBadge: "坦桑工程资源平台",
    heroTitle: "在坦桑尼亚快速找到靠谱工程机械操作手和司机",
    heroSubtitle:
      "面向工程承包商和项目团队的专业入口，帮助你高效对接司机、操作手和低板车资源，同时不公开司机个人电话。",
    whatsapp: "WhatsApp 联系",
    wechat: "添加微信",
    trustFast: "面向在建项目的快速匹配",
    trustPrivate: "真实司机联系方式仅在有效需求后提供",
    trustBilingual: "支持英文、中文和斯瓦希里语沟通",
    panelEyebrow: "平台定位",
    panelTitle: "先聚焦司机撮合，再平滑扩展更多工程资源",
    panelText:
      "当前页面聚焦高意向司机和操作手需求，后续可自然扩展到设备租赁、施工队和贸易供应。",
    resourceFlow: [
      "司机与操作手撮合",
      "承包商直接询盘",
      "设备与板车需求",
      "施工队资源推荐",
      "建材与贸易支持",
    ],
    platformContactLabel: "平台 WhatsApp",
    categoriesEyebrow: "覆盖范围",
    categoriesTitle: "重点司机与操作手分类",
    categoriesSubtitle:
      "首版优先覆盖坦桑项目中最常见、最有需求的工程司机和机械操作手类型。",
    categories: [
      "挖机操作手",
      "推土机操作手",
      "平地机操作手",
      "装载机操作手",
      "压路机操作手",
      "自卸车司机",
      "板车 / 拖车司机",
      "洒水车司机",
    ],
    driversEyebrow: "司机样例",
    driversTitle: "可匹配司机示例",
    driversSubtitle:
      "页面展示可提供的人才类型，个人电话不公开，所有需求统一通过平台联系。",
    privacyNote: "真实联系方式仅通过平台沟通。",
    driverExperienceLabel: "经验",
    driverLocationLabel: "地点",
    driverLanguagesLabel: "语言",
    requestDriver: "咨询这个司机",
    howEyebrow: "流程",
    howTitle: "更简单地匹配合适司机",
    steps: [
      {
        title: "发送需求",
        text: "告诉我们设备类型、项目地点、预计开工时间，以及是否需要中英或斯语沟通。",
      },
      {
        title: "收到匹配建议",
        text: "平台筛选可用资源，并推荐合适的司机或操作手供你确认。",
      },
      {
        title: "确认并进场",
        text: "确认合适人选后，即可安排到项目现场报到并开始协调上岗。",
      },
    ],
    contactEyebrow: "紧急需求",
    contactTitle: "今天就需要司机？",
    contactText:
      "通过 WhatsApp 或微信发送需求，说明设备类型、工地位置和开工时间，我们会尽快回复。",
    contactSupportNote:
      "WhatsApp 和微信都统一进入平台，方便集中管理沟通，也更专业。",
    registerEyebrow: "司机入驻",
    registerTitle: "司机和操作手报名",
    registerText:
      "司机、机械操作手和低板车团队都可以报名加入平台资源库，便于后续项目匹配。",
    registerButton: "通过 WhatsApp 报名",
    whatsappLeadMessage: "你好，我需要在坦桑尼亚找工程司机或机械操作手。",
    driverLeadMessage: "你好，我想报名加入坦桑工程资源平台，成为司机或操作手资源。",
    wechatModalEyebrow: "微信联系",
    wechatModalTitle: "添加微信",
    wechatModalText: "扫描二维码，或搜索下方微信号，直接联系平台。",
    wechatIdLabel: "微信号",
    wechatQrAlt: "坦桑工程资源平台微信二维码",
    close: "关闭",
    footer: "从司机撮合切入，并为后续发展成更完整的坦桑工程资源平台做好结构准备。",
  },
  sw: {
    navCategories: "Makundi",
    navDrivers: "Madereva",
    navHowItWorks: "Jinsi inavyofanya kazi",
    navContact: "Mawasiliano",
    headerCta: "Anza kwa WhatsApp",
    heroBadge: "Jukwaa la rasilimali za ujenzi Tanzania",
    heroTitle: "Pata madereva na waendeshaji wa mitambo wanaoaminika kote Tanzania",
    heroSubtitle:
      "Mlango wa kitaalamu kwa wakandarasi na timu za miradi wanaohitaji waendeshaji, madereva wa lowbed, na msaada wa ujenzi bila kuweka namba za madereva wazi hadharani.",
    whatsapp: "Wasiliana kwa WhatsApp",
    wechat: "Ongeza WeChat",
    trustFast: "Upatanishaji wa haraka kwa miradi inayoendelea",
    trustPrivate: "Taarifa za dereva hubaki binafsi hadi ombi la kweli",
    trustBilingual: "Mawasiliano kwa Kiingereza, Kichina, na Kiswahili",
    panelEyebrow: "Mwelekeo wa jukwaa",
    panelTitle: "Limejengwa kuanza na madereva, lakini kupanuka kwa urahisi",
    panelText:
      "Ukurasa huu unaanza na mahitaji ya madereva na waendeshaji, na baadaye unaweza kupanuka hadi vifaa, timu za ujenzi, na usaidizi wa biashara.",
    resourceFlow: [
      "Kupata madereva na waendeshaji",
      "Maombi ya moja kwa moja ya wakandarasi",
      "Mahitaji ya vifaa na lowbed",
      "Mapendekezo ya timu za ujenzi",
      "Msaada wa vifaa na biashara",
    ],
    platformContactLabel: "Namba kuu ya WhatsApp",
    categoriesEyebrow: "Huduma zinazofunikwa",
    categoriesTitle: "Makundi muhimu ya madereva na waendeshaji",
    categoriesSubtitle:
      "Toleo la kwanza linaangazia makundi yanayohitajika zaidi na wakandarasi pamoja na timu za miradi ya Kichina Tanzania.",
    categories: [
      "Waendeshaji wa excavator",
      "Waendeshaji wa bulldozer",
      "Waendeshaji wa motor grader",
      "Waendeshaji wa wheel loader",
      "Waendeshaji wa road roller",
      "Madereva wa dump truck",
      "Madereva wa lowbed na trailer",
      "Madereva wa water truck",
    ],
    driversEyebrow: "Wasifu wa sampuli",
    driversTitle: "Sampuli za madereva waliopo",
    driversSubtitle:
      "Wasifu unaonyesha aina ya watu wanaopatikana kupitia jukwaa huku namba zao binafsi zikibaki siri.",
    privacyNote: "Namba binafsi hubaki siri hadi ombi lifanywe.",
    driverExperienceLabel: "Uzoefu",
    driverLocationLabel: "Eneo",
    driverLanguagesLabel: "Lugha",
    requestDriver: "Omba dereva huyu",
    howEyebrow: "Utaratibu",
    howTitle: "Njia rahisi ya kupata muendeshaji anayefaa",
    steps: [
      {
        title: "Tuma hitaji lako",
        text: "Eleza aina ya mashine, eneo la kazi, tarehe ya kuanza, na kama unahitaji mawasiliano ya Kiswahili, Kiingereza, au Kichina.",
      },
      {
        title: "Pokea mapendekezo sahihi",
        text: "Jukwaa linakagua upatikanaji na kupendekeza madereva au waendeshaji wanaofaa kwa kazi hiyo.",
      },
      {
        title: "Thibitisha na waandae kuanza",
        text: "Baada ya kuthibitisha, muendeshaji anaweza kuratibiwa kufika site na kuanza kazi.",
      },
    ],
    contactEyebrow: "Mahitaji ya haraka",
    contactTitle: "Unahitaji dereva leo?",
    contactText:
      "Tuma hitaji lako kupitia WhatsApp au WeChat na uandike aina ya mashine, eneo la site, na muda wa kuanza kazi.",
    contactSupportNote:
      "WhatsApp na WeChat zote zinaingia kwa jukwaa ili mawasiliano yabaki salama, nadhifu, na ya kitaalamu.",
    registerEyebrow: "Kwa madereva",
    registerTitle: "Jisajili kama dereva au muendeshaji",
    registerText:
      "Madereva, waendeshaji, na timu za lowbed wanaweza kuomba kuingizwa kwenye orodha ya jukwaa kwa matching ya miradi ijayo.",
    registerButton: "Omba kupitia WhatsApp",
    whatsappLeadMessage:
      "Habari, ninahitaji dereva wa ujenzi au muendeshaji wa mashine Tanzania.",
    driverLeadMessage:
      "Habari, nataka kujisajili kwenye Tanzania Construction Resource Platform kama dereva au muendeshaji wa mashine.",
    wechatModalEyebrow: "Mawasiliano ya WeChat",
    wechatModalTitle: "Ongeza WeChat",
    wechatModalText: "Scan QR code au tafuta WeChat ID hapa chini ili uwasiliane moja kwa moja na jukwaa.",
    wechatIdLabel: "WeChat ID",
    wechatQrAlt: "QR code ya WeChat ya Tanzania Construction Resource Platform",
    close: "Funga",
    footer: "Limejengwa kuanza na matching ya madereva na lina muundo wa kupanuka kuwa jukwaa pana la rasilimali za ujenzi Tanzania.",
  },
};
