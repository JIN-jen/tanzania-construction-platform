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
  topBarText: string;
  topBarButton: string;
  navCategories: string;
  navDrivers: string;
  navEquipment: string;
  navHowItWorks: string;
  navContact: string;
  headerCta: string;
  heroBadge: string;
  heroEyebrow: string;
  heroTitle: string;
  heroTitleEnglish: string;
  heroSubtitle: string;
  heroMicrocopy: string;
  whatsapp: string;
  wechat: string;
  ctaPhoneLabel: string;
  responsePromise: string;
  trustItems: string[];
  trustSectionTitle: string;
  panelEyebrow: string;
  panelTitle: string;
  panelText: string;
  resourceFlow: string[];
  platformContactLabel: string;
  recruitmentEyebrow: string;
  recruitmentTitle: string;
  recruitmentSubtitle: string;
  recruitmentRoles: string[];
  recruitmentButton: string;
  recruitmentTrust: string;
  categoriesEyebrow: string;
  categoriesTitle: string;
  categoriesSubtitle: string;
  askService: string;
  serviceCards: { title: string; text: string; service: string }[];
  categories: { title: string; text: string; service: string }[];
  driversEyebrow: string;
  driversTitle: string;
  driversSubtitle: string;
  privacyNote: string;
  driverExperienceLabel: string;
  driverLocationLabel: string;
  driverLanguagesLabel: string;
  requestDriver: string;
  equipmentEyebrow: string;
  equipmentTitle: string;
  equipmentSubtitle: string;
  equipmentCards: { title: string; text: string }[];
  marketEyebrow: string;
  marketTitle: string;
  marketText: string;
  marketPoints: string[];
  marketCtaTitle: string;
  marketCtaText: string;
  marketCtaButton: string;
  marketCtaMicrocopy: string;
  howEyebrow: string;
  howTitle: string;
  steps: { title: string; text: string }[];
  contactEyebrow: string;
  contactUrgentTag: string;
  contactTitle: string;
  contactText: string;
  contactSupportNote: string;
  registerEyebrow: string;
  registerTitle: string;
  registerText: string;
  registerButton: string;
  registerTrustLine: string;
  registerSocialProof: string;
  whatsappLeadMessage: string;
  driverLeadMessage: string;
  wechatModalEyebrow: string;
  wechatModalTitle: string;
  wechatModalText: string;
  wechatIdLabel: string;
  wechatQrAlt: string;
  close: string;
  footerTagline: string;
  footerDescription: string;
  footerNavTitle: string;
  footerContactTitle: string;
  footerContactHeadline: string;
  footerWhatsappButton: string;
  footerResponseText: string;
  footerCopyright: string;
  footerMarketText: string;
  footer: string;
};

export const translations: Record<Language, Translation> = {
  en: {
    topBarText: "🔥 Urgent requests first · Driver matching within 1 hour",
    topBarButton: "Contact on WhatsApp",
    navCategories: "Categories",
    navDrivers: "Drivers",
    navEquipment: "Equipment",
    navHowItWorks: "How it works",
    navContact: "Contact",
    headerCta: "Start on WhatsApp",
    heroBadge: "Tanzania construction resource platform",
    heroEyebrow: "Dar es Salaam based. Local network.",
    heroTitle: "Need drivers or operators in Tanzania — today?",
    heroTitleEnglish: "Reliable operators for Tanzania projects",
    heroSubtitle:
      "Fast local matching for construction projects. Drivers, machine operators, and equipment support — all in one place.",
    heroMicrocopy: "Chat on WhatsApp now for fast local matching.",
    whatsapp: "Contact on WhatsApp",
    wechat: "Add WeChat",
    ctaPhoneLabel: "WhatsApp hotline",
    responsePromise: "Response within 1 hour · Dar es Salaam local network",
    trustItems: [
      "100+ Drivers Available",
      "Local Tanzania Network",
      "Chinese & English Support",
      "Fast Matching within 1 hour",
    ],
    trustSectionTitle: "Trusted local construction sourcing",
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
    recruitmentEyebrow: "For drivers and operators",
    recruitmentTitle: "Looking for driver or operator jobs?",
    recruitmentSubtitle:
      "Join TCR Hub and get matched with real construction work opportunities in Tanzania.",
    recruitmentRoles: [
      "Excavator operators",
      "Truck drivers",
      "Bulldozer operators",
      "Wheel loader operators",
      "Lowbed / trailer drivers",
    ],
    recruitmentButton: "Apply as Driver / Operator",
    recruitmentTrust: "Free registration · No agent fees · Jobs matched through WhatsApp",
    categoriesEyebrow: "Coverage",
    categoriesTitle: "Key operator and driver categories",
    categoriesSubtitle:
      "The first version focuses on the categories most often requested by contractors and Chinese project teams in Tanzania.",
    askService: "Ask for this service",
    serviceCards: [
      {
        title: "Hire Drivers",
        text: "Find experienced construction drivers in Tanzania",
        service: "Driver",
      },
      {
        title: "Hire Machine Operators",
        text: "Excavator / Loader / Bulldozer operators",
        service: "Operator",
      },
      {
        title: "Equipment Support",
        text: "Match machines and site needs",
        service: "Equipment",
      },
    ],
    categories: [
      {
        title: "Excavator operators",
        text: "Operators for digging, loading, and site preparation work.",
        service: "Excavator operator",
      },
      {
        title: "Bulldozer operators",
        text: "Support for clearing, grading, and heavy earthmoving tasks.",
        service: "Bulldozer operator",
      },
      {
        title: "Motor grader operators",
        text: "Road shaping and leveling support for civil projects.",
        service: "Motor grader operator",
      },
      {
        title: "Wheel loader operators",
        text: "Reliable loading support for aggregates and site materials.",
        service: "Wheel loader operator",
      },
      {
        title: "Road roller operators",
        text: "Compaction support for road bases and site finishing.",
        service: "Road roller operator",
      },
      {
        title: "Dump truck drivers",
        text: "Material hauling for construction and mining projects.",
        service: "Dump truck driver",
      },
      {
        title: "Lowbed and trailer drivers",
        text: "Heavy transport support for machines and site equipment.",
        service: "Lowbed / trailer driver",
      },
      {
        title: "Water truck drivers",
        text: "Dust control and site water delivery support.",
        service: "Water truck driver",
      },
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
    equipmentEyebrow: "Expansion path",
    equipmentTitle: "Structured to support equipment and site resource requests",
    equipmentSubtitle:
      "The homepage is designed for driver matching first, while making space for equipment rental, transport, and contractor support as the platform grows.",
    equipmentCards: [
      {
        title: "Equipment sourcing",
        text: "Support inquiries for excavators, bulldozers, rollers, graders, and other construction machinery.",
      },
      {
        title: "Lowbed logistics",
        text: "Coordinate lowbed and trailer movement for heavy machines between depots and project sites.",
      },
      {
        title: "Operator packages",
        text: "Bundle skilled operators with machine type, site location, and project start timing.",
      },
      {
        title: "Site support network",
        text: "Expand later into construction teams, material supply, and project coordination services.",
      },
    ],
    marketEyebrow: "Commercial positioning",
    marketTitle: "A simple front door for Tanzanian construction demand",
    marketText:
      "Instead of listing uncontrolled phone numbers, the platform presents a clean, credible contact channel for contractors, Chinese companies, and site managers who need fast help.",
    marketPoints: [
      "Professional first impression for inbound leads",
      "Clear path from inquiry to matching",
      "Easy to extend into new resource categories",
    ],
    marketCtaTitle: "Ready to handle construction requests?",
    marketCtaText:
      "Send the requirement through WhatsApp and we will help match drivers, operators, equipment or lowbed support.",
    marketCtaButton: "Start on WhatsApp",
    marketCtaMicrocopy: "Response within 1 hour · Dar es Salaam network",
    howEyebrow: "Process",
    howTitle: "How it works",
    steps: [
      {
        title: "Tell us your need",
        text: "Share the machine type, location, and start timing.",
      },
      {
        title: "We match drivers and operators",
        text: "We check the local network and identify suitable people for the job.",
      },
      {
        title: "Connect via WhatsApp",
        text: "You confirm the best option and continue directly through WhatsApp.",
      },
    ],
    contactEyebrow: "Urgent request",
    contactUrgentTag: "Urgent requests handled within 1 hour",
    contactTitle: "Need a driver today?",
    contactText:
      "Send the requirement through WhatsApp or WeChat and include the machine type, site location, and start timing.",
    contactSupportNote:
      "Most contractors contact us via WhatsApp for fastest response",
    registerEyebrow: "Supply side",
    registerTitle: "Looking for driver or operator jobs?",
    registerText:
      "Join TCR Hub and get matched with real construction work opportunities in Tanzania.",
    registerButton: "Apply on WhatsApp",
    registerTrustLine: "Free registration · No agent fees",
    registerSocialProof: "Drivers are already getting job opportunities through the platform",
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
    footerTagline: "Tanzania construction resource platform",
    footerDescription:
      "Connecting contractors with reliable drivers, operators, and equipment across Dar es Salaam.",
    footerNavTitle: "Navigation",
    footerContactTitle: "Contact",
    footerContactHeadline: "Get drivers fast",
    footerWhatsappButton: "Chat on WhatsApp",
    footerResponseText: "Response within 1 hour",
    footerCopyright: "© 2026 TCR Hub",
    footerMarketText: "Built for Tanzania construction market",
    footer:
      "Built for driver matching first and structured to grow into a broader Tanzania construction resource platform.",
  },
  zh: {
    topBarText: "🔥 急单优先 · 正在处理多个工程需求",
    topBarButton: "立即WhatsApp联系",
    navCategories: "分类",
    navDrivers: "司机资源",
    navEquipment: "设备需求",
    navHowItWorks: "服务流程",
    navContact: "联系",
    headerCta: "立即获取司机",
    heroBadge: "坦桑工程资源平台",
    heroEyebrow: "达累斯萨拉姆本地协同网络",
    heroTitle: "快速找到靠谱司机",
    heroTitleEnglish: "Reliable operators for Tanzania projects",
    heroSubtitle:
      "面向承包商和项目团队的专业入口，帮助你快速对接司机、操作手和低板车资源，同时避免到处找私人电话。",
    heroMicrocopy: "1小时内响应 · WhatsApp直连",
    whatsapp: "立即获取司机",
    wechat: "添加微信",
    ctaPhoneLabel: "WhatsApp 热线",
    responsePromise: "1小时内回复",
    trustItems: [
      "100+ 司机资源",
      "坦桑本地网络",
      "支持中文与英文",
      "1小时内快速匹配",
    ],
    trustSectionTitle: "本地工程资源快速对接",
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
    recruitmentEyebrow: "司机 / 操作手入口",
    recruitmentTitle: "正在找司机或操作手工作？",
    recruitmentSubtitle:
      "加入 TCR Hub 资源库，获取坦桑尼亚真实工程项目匹配机会。",
    recruitmentRoles: [
      "挖机操作手",
      "卡车司机",
      "推土机操作手",
      "装载机操作手",
      "低板 / 拖车司机",
    ],
    recruitmentButton: "司机/操作手报名",
    recruitmentTrust: "免费登记 · 无中介费 · 通过 WhatsApp 匹配工作",
    categoriesEyebrow: "覆盖范围",
    categoriesTitle: "重点司机与操作手分类",
    categoriesSubtitle:
      "首版优先覆盖坦桑项目中最常见、最有需求的工程司机和机械操作手类型。",
    askService: "马上匹配司机",
    serviceCards: [
      {
        title: "招聘司机",
        text: "快速找到坦桑本地有经验的工程司机",
        service: "Driver",
      },
      {
        title: "招聘机械操作手",
        text: "挖机 / 装载机 / 推土机操作手",
        service: "Operator",
      },
      {
        title: "设备支持",
        text: "根据工地需求匹配设备与资源",
        service: "Equipment",
      },
    ],
    categories: [
      { title: "挖机操作手", text: "适合开挖、装车和场地准备作业。", service: "挖机操作手" },
      { title: "推土机操作手", text: "适合清表、平整和重型土方施工。", service: "推土机操作手" },
      { title: "平地机操作手", text: "适合道路整形和土方找平项目。", service: "平地机操作手" },
      { title: "装载机操作手", text: "适合砂石装载和工地物料转运。", service: "装载机操作手" },
      { title: "压路机操作手", text: "适合道路基层和场地压实施工。", service: "压路机操作手" },
      { title: "自卸车司机", text: "适合土方、石料和工地运输任务。", service: "自卸车司机" },
      { title: "板车 / 拖车司机", text: "适合设备和重型机械低板运输。", service: "板车 / 拖车司机" },
      { title: "洒水车司机", text: "适合扬尘控制和工地供水支持。", service: "洒水车司机" },
    ],
    driversEyebrow: "司机样例",
    driversTitle: "可匹配司机示例",
    driversSubtitle:
      "页面展示可提供的人才类型，个人电话不公开，所有需求统一通过平台联系。",
    privacyNote: "真实联系方式仅通过平台沟通。",
    driverExperienceLabel: "经验",
    driverLocationLabel: "地点",
    driverLanguagesLabel: "语言",
    requestDriver: "马上匹配司机",
    equipmentEyebrow: "扩展方向",
    equipmentTitle: "为设备和工地资源需求预留了清晰结构",
    equipmentSubtitle:
      "页面目前以司机撮合为核心，同时已经为设备租赁、运输协调和项目资源扩展留好了位置。",
    equipmentCards: [
      {
        title: "设备需求对接",
        text: "支持挖机、推土机、压路机、平地机等工程机械需求咨询。",
      },
      {
        title: "板车运输协调",
        text: "可承接重型设备在仓库、停车场与项目工地之间的低板运输需求。",
      },
      {
        title: "司机配套方案",
        text: "根据设备类型、工地位置和开工时间组合匹配司机与操作手。",
      },
      {
        title: "项目资源网络",
        text: "后续可继续扩展施工队、材料供应和项目协同服务。",
      },
    ],
    marketEyebrow: "商业表达",
    marketTitle: "为坦桑工程需求提供一个更专业的线上入口",
    marketText:
      "平台不直接公开大量私人电话，而是先建立一个干净、可信的联系入口，适合承包商、中国公司和项目经理使用。",
    marketPoints: [
      "更专业的客户第一印象",
      "从咨询到匹配的清晰路径",
      "后续更容易扩展更多资源分类",
    ],
    marketCtaTitle: "准备开始处理工程需求？",
    marketCtaText:
      "通过 WhatsApp 发送需求，我们会协助匹配司机、操作手、设备或低板车支持。",
    marketCtaButton: "Start on WhatsApp",
    marketCtaMicrocopy: "1小时内响应 · 达市本地网络",
    howEyebrow: "流程",
    howTitle: "服务流程",
    steps: [
      {
        title: "告诉我们你的需求",
        text: "说明设备类型、工作地点和开始时间。",
      },
      {
        title: "我们匹配司机和操作手",
        text: "根据本地资源网络，为你筛选合适人员。",
      },
      {
        title: "通过 WhatsApp 对接",
        text: "确认方向后，继续通过 WhatsApp 快速沟通。",
      },
    ],
    contactEyebrow: "紧急需求",
    contactUrgentTag: "🔥 急单优先 · 1小时内匹配司机 · 点击立即联系",
    contactTitle: "今天就需要司机？",
    contactText:
      "通过 WhatsApp 或微信发送需求，说明设备类型、工地位置和开工时间，我们会尽快回复。",
    contactSupportNote:
      "大多数客户通过 WhatsApp 在 10–30分钟内得到回复",
    registerEyebrow: "司机入驻",
    registerTitle: "在找司机或操作手工作？",
    registerText:
      "加入 TCR Hub 资源库，获取坦桑尼亚真实工程项目匹配机会。",
    registerButton: "司机/操作手报名",
    registerTrustLine: "免费登记 · 无中介费",
    registerSocialProof: "已有司机正在通过平台获取工作机会",
    whatsappLeadMessage: "你好，我需要在坦桑尼亚找工程司机或机械操作手。",
    driverLeadMessage: "你好，我想报名加入坦桑工程资源平台，成为司机或操作手资源。",
    wechatModalEyebrow: "微信联系",
    wechatModalTitle: "添加微信",
    wechatModalText: "扫描二维码，或搜索下方微信号，直接联系平台。",
    wechatIdLabel: "微信号",
    wechatQrAlt: "坦桑工程资源平台微信二维码",
    close: "关闭",
    footerTagline: "Tanzania construction resource platform",
    footerDescription:
      "Connecting contractors with reliable drivers, operators, and equipment across Dar es Salaam.",
    footerNavTitle: "导航",
    footerContactTitle: "联系",
    footerContactHeadline: "快速获取司机",
    footerWhatsappButton: "Chat on WhatsApp",
    footerResponseText: "1小时内响应",
    footerCopyright: "© 2026 TCR Hub",
    footerMarketText: "Built for Tanzania construction market",
    footer: "从司机撮合切入，并为后续发展成更完整的坦桑工程资源平台做好结构准备。",
  },
  sw: {
    topBarText: "🔥 Maombi ya haraka kwanza · Matching ya dereva ndani ya saa 1",
    topBarButton: "Wasiliana kwa WhatsApp",
    navCategories: "Makundi",
    navDrivers: "Madereva",
    navEquipment: "Vifaa",
    navHowItWorks: "Jinsi inavyofanya kazi",
    navContact: "Mawasiliano",
    headerCta: "Anza kwa WhatsApp",
    heroBadge: "Jukwaa la rasilimali za ujenzi Tanzania",
    heroEyebrow: "Mtandao wa ndani wa Dar es Salaam",
    heroTitle: "Pata madereva wanaoaminika haraka",
    heroTitleEnglish: "Reliable operators for Tanzania projects",
    heroSubtitle:
      "Mlango wa kitaalamu kwa wakandarasi na timu za miradi wanaohitaji madereva, waendeshaji, na msaada wa lowbed bila kutegemea namba za watu zilizotawanyika.",
    heroMicrocopy: "Anza kuzungumza nasi sasa kupitia WhatsApp.",
    whatsapp: "Wasiliana kwa WhatsApp",
    wechat: "Ongeza WeChat",
    ctaPhoneLabel: "Namba ya WhatsApp",
    responsePromise: "Majibu ndani ya saa 1",
    trustItems: [
      "Madereva 100+",
      "Mtandao wa ndani Tanzania",
      "Msaada kwa Kichina na Kiingereza",
      "Matching ndani ya saa 1",
    ],
    trustSectionTitle: "Mtandao wa kuaminika wa rasilimali za ujenzi",
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
    recruitmentEyebrow: "Kwa madereva na waendeshaji",
    recruitmentTitle: "Unatafuta kazi ya udereva au opereta?",
    recruitmentSubtitle:
      "Jiunge na TCR Hub upate nafasi za kazi kwenye miradi ya ujenzi Tanzania.",
    recruitmentRoles: [
      "Waendeshaji wa excavator",
      "Madereva wa truck",
      "Waendeshaji wa bulldozer",
      "Waendeshaji wa wheel loader",
      "Madereva wa lowbed / trailer",
    ],
    recruitmentButton: "Jisajili kama Dereva / Opereta",
    recruitmentTrust: "Usajili bure · Hakuna ada ya wakala · Mawasiliano kupitia WhatsApp",
    categoriesEyebrow: "Huduma zinazofunikwa",
    categoriesTitle: "Makundi muhimu ya madereva na waendeshaji",
    categoriesSubtitle:
      "Toleo la kwanza linaangazia makundi yanayohitajika zaidi na wakandarasi pamoja na timu za miradi ya Kichina Tanzania.",
    askService: "Ulizia huduma hii",
    serviceCards: [
      {
        title: "Pata Madereva",
        text: "Pata madereva wa ujenzi wenye uzoefu Tanzania",
        service: "Driver",
      },
      {
        title: "Pata Machine Operators",
        text: "Waendeshaji wa Excavator / Loader / Bulldozer",
        service: "Operator",
      },
      {
        title: "Msaada wa Vifaa",
        text: "Linganisha mashine na mahitaji ya site",
        service: "Equipment",
      },
    ],
    categories: [
      { title: "Waendeshaji wa excavator", text: "Kwa kazi za uchimbaji, upakiaji, na maandalizi ya site.", service: "Excavator operator" },
      { title: "Waendeshaji wa bulldozer", text: "Kwa kusafisha eneo, kusawazisha, na earthmoving nzito.", service: "Bulldozer operator" },
      { title: "Waendeshaji wa motor grader", text: "Kwa miradi ya roads na kusawazisha maeneo.", service: "Motor grader operator" },
      { title: "Waendeshaji wa wheel loader", text: "Kwa upakiaji wa aggregates na vifaa vya site.", service: "Wheel loader operator" },
      { title: "Waendeshaji wa road roller", text: "Kwa compaction ya roads na finishing ya site.", service: "Road roller operator" },
      { title: "Madereva wa dump truck", text: "Kwa hauling ya vifaa vya ujenzi na earthworks.", service: "Dump truck driver" },
      { title: "Madereva wa lowbed na trailer", text: "Kwa kusafirisha mashine nzito na vifaa vya site.", service: "Lowbed / trailer driver" },
      { title: "Madereva wa water truck", text: "Kwa dust control na usambazaji wa maji site.", service: "Water truck driver" },
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
    equipmentEyebrow: "Mwelekeo wa upanuzi",
    equipmentTitle: "Muundo wake uko tayari kusaidia maombi ya vifaa na rasilimali za site",
    equipmentSubtitle:
      "Ukurasa huu unaanza na matching ya madereva, lakini tayari una nafasi ya kukua kwenye vifaa, usafiri, na huduma nyingine za miradi.",
    equipmentCards: [
      {
        title: "Kupata vifaa",
        text: "Pokea maombi ya excavator, bulldozer, roller, grader na mashine nyingine za ujenzi.",
      },
      {
        title: "Logistics za lowbed",
        text: "Ratibu usafiri wa lowbed na trailer kwa mitambo mizito kati ya yard na eneo la mradi.",
      },
      {
        title: "Operator packages",
        text: "Unganisha muendeshaji sahihi na aina ya mashine, eneo la kazi, na muda wa kuanza.",
      },
      {
        title: "Mtandao wa usaidizi wa site",
        text: "Baadaye jukwaa linaweza kupanuka kwenye timu za ujenzi, vifaa, na uratibu wa mradi.",
      },
    ],
    marketEyebrow: "Msimamo wa biashara",
    marketTitle: "Mlango rahisi na wa kitaalamu kwa mahitaji ya ujenzi Tanzania",
    marketText:
      "Badala ya kuonyesha namba nyingi zisizodhibitiwa, jukwaa linaweka njia safi na ya kuaminika kwa wakandarasi, makampuni ya Kichina, na wasimamizi wa site.",
    marketPoints: [
      "Muonekano wa kitaalamu kwa lead za mwanzo",
      "Njia iliyo wazi kutoka inquiry hadi matching",
      "Rahisi kupanuka kwenye rasilimali nyingine",
    ],
    marketCtaTitle: "Ready to handle construction requests?",
    marketCtaText:
      "Send the requirement through WhatsApp and we will help match drivers, operators, equipment or lowbed support.",
    marketCtaButton: "Start on WhatsApp",
    marketCtaMicrocopy: "Response within 1 hour · Dar es Salaam network",
    howEyebrow: "Utaratibu",
    howTitle: "Jinsi inavyofanya kazi",
    steps: [
      {
        title: "Tuambie hitaji lako",
        text: "Eleza aina ya mashine, eneo la kazi, na muda wa kuanza.",
      },
      {
        title: "Tunatafuta dereva au operator",
        text: "Tunatumia mtandao wa ndani kupata watu wanaofaa.",
      },
      {
        title: "Unganishwa kupitia WhatsApp",
        text: "Baada ya kuthibitisha mwelekeo, mawasiliano yanaendelea kwa WhatsApp.",
      },
    ],
    contactEyebrow: "Mahitaji ya haraka",
    contactUrgentTag: "Maombi ya haraka hushughulikiwa ndani ya saa 1",
    contactTitle: "Unahitaji dereva leo?",
    contactText:
      "Tuma hitaji lako kupitia WhatsApp au WeChat na uandike aina ya mashine, eneo la site, na muda wa kuanza kazi.",
    contactSupportNote:
      "Wakandarasi wengi hutuwasiliana kwanza kwa WhatsApp kwa majibu ya haraka zaidi",
    registerEyebrow: "Kwa madereva",
    registerTitle: "Unatafuta kazi ya udereva au operator?",
    registerText:
      "Jiunge na TCR Hub upate nafasi za kazi kwenye miradi ya ujenzi Tanzania.",
    registerButton: "Jisajili kama Dereva / Opereta",
    registerTrustLine: "Usajili bure · Hakuna ada ya wakala · Mawasiliano kupitia WhatsApp",
    registerSocialProof: "Madereva tayari wanapata nafasi za kazi kupitia jukwaa",
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
    footerTagline: "Tanzania construction resource platform",
    footerDescription:
      "Connecting contractors with reliable drivers, operators, and equipment across Dar es Salaam.",
    footerNavTitle: "Urambazaji",
    footerContactTitle: "Mawasiliano",
    footerContactHeadline: "Pata madereva haraka",
    footerWhatsappButton: "Chat on WhatsApp",
    footerResponseText: "Majibu ndani ya saa 1",
    footerCopyright: "© 2026 TCR Hub",
    footerMarketText: "Built for Tanzania construction market",
    footer: "Limejengwa kuanza na matching ya madereva na lina muundo wa kupanuka kuwa jukwaa pana la rasilimali za ujenzi Tanzania.",
  },
};
