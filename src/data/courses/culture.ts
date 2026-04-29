import { CourseLesson } from "@/lib/types";

export const cultureLessons: CourseLesson[] = [
  {
    id: "cult-01",
    category: "culture",
    titleZh: "德国日常生活",
    titleDe: "Der deutsche Alltag",
    titleEn: "Daily Life in Germany",
    description: "了解德国人的日常习惯、超市购物、Pfand押金制度等",
    level: "A1",
    order: 1,
    estimatedMinutes: 8,
    sections: [
      {
        type: "text",
        heading: "德国人的日常生活",
        content: "了解德国的日常文化和生活习惯，能帮助你更快融入当地生活。这些知识是课本上学不到的，但在德国生活时非常实用。"
      },
      {
        type: "text",
        heading: "Pfand 押金制度",
        content: "德国有严格的瓶子押金制度（Pfandsystem）：\n\n- 塑料瓶和易拉罐：0.25€ 押金\n- 啤酒瓶：0.08€ 押金\n- 玻璃瓶（部分）：0.15€ 押金\n\n购买饮料时，价格不含押金。喝完后将瓶子退还超市的自动回收机（Pfandautomat），取回收据去收银台换钱。"
      },
      {
        type: "text",
        heading: "周日休息",
        content: "德国法律规定周日所有商店必须关门（Ladenschlussgesetz）。只有餐馆、加油站、火车站内的商店可以营业。\n\n这意味着周六下午是德国人集中购物的时间，超市会非常拥挤。周日适合休息、散步、拜访朋友。"
      },
      {
        type: "text",
        heading: "早餐文化",
        content: "德国人非常重视早餐（Frühstück）。传统德式早餐包括：\n- 各种面包和面包卷（Brötchen）\n- 黄油、果酱、蜂蜜\n- 奶酪、香肠切片（Aufschnitt）\n- 煮鸡蛋（das Frühstücksei）\n- 咖啡或茶\n\n周末的早餐尤为丰盛，可以持续1-2个小时。"
      },
      {
        type: "tip",
        heading: "实用建议",
        content: "在超市购物时：自己带购物袋（或者花0.5-1€购买）；自助扫码装袋；排队结账时速度很快，要提前准备好。在面包店（Bäckerei）买面包时要先拿号或直接告诉店员你要什么。"
      }
    ],
    exercises: [
      {
        id: "cult-01-e1",
        type: "multiple-choice",
        questionZh: "德国的 Pfand 制度是什么？",
        options: ["消费税", "瓶子押金制度", "会员制度", "优惠券系统"],
        correctAnswer: "瓶子押金制度",
        explanation: "Pfand 是押金制度。购买饮料时付押金，退瓶时返还。这鼓励回收利用。"
      },
      {
        id: "cult-01-e2",
        type: "multiple-choice",
        questionZh: "德国周日大多数商店的状态是？",
        options: ["正常营业", "限时营业", "关门休息", "只有上午营业"],
        correctAnswer: "关门休息",
        explanation: "德国法律要求周日商店关门（除了餐馆、加油站和火车站内的商店）。"
      },
      {
        id: "cult-01-e3",
        type: "multiple-choice",
        questionZh: "传统德式早餐的主食是？",
        options: ["麦片和牛奶", "面包和面包卷", "煎蛋和培根", "米饭和汤"],
        correctAnswer: "面包和面包卷",
        explanation: "德式早餐以各种面包（Brot）和面包卷（Brötchen）为主，搭配黄油、果酱、奶酪和肉制品。"
      }
    ]
  },
  {
    id: "cult-02",
    category: "culture",
    titleZh: "德国职场文化",
    titleDe: "Die deutsche Arbeitskultur",
    titleEn: "German Work Culture",
    description: "了解德国职场的 Sie/Du 文化、守时观念和沟通风格",
    level: "A1",
    order: 2,
    estimatedMinutes: 8,
    sections: [
      {
        type: "text",
        heading: "Sie 和 du：职场中的称呼",
        content: "德国职场有严格的正式与非正式区分：\n\nSie（您）：用于上司、客户、不熟悉的同事。搭配姓氏使用：\"Herr Schmidt\"、\"Frau Müller\"。\ndu（你）：用于关系亲密的同事，通常由年长/职位高的一方主动提议：\"Wir können uns duzen.\"（我们可以用 du 称呼）。\n\n在不知道该用哪个时，始终先用 Sie。"
      },
      {
        type: "text",
        heading: "守时（Pünktlichkeit）",
        content: "守时在德国文化中极为重要：\n\n- 开会迟到被视为不尊重他人时间\n- 约定时间前 5-10 分钟到达是标准做法\n- 如果确实要迟到，务必提前通知并说明原因\n- 甚至连火车晚点几分钟都会有广播道歉\n\n在英语文化中迟到5分钟可能不算什么，但在德国这是不礼貌的。"
      },
      {
        type: "text",
        heading: "直接沟通风格",
        content: "德国人的沟通风格比许多文化更直接：\n\n- 直接表达不同意见不是不礼貌，而是诚实\n- \"Das geht nicht\"（这不行）是正常反馈，不是冒犯\n- 反馈通常具体且建设性\n- 不喜欢\"客套话\"——如果他们说\"很好\"，就是真的很好\n\n这种直接可能会让来自含蓄文化的人觉得粗鲁，但理解文化背景后就知道这只是沟通风格的差异。"
      },
      {
        type: "tip",
        heading: "职场德语小贴士",
        content: "\"Mahlzeit!\" 是午间打招呼的特殊用语（原意是\"用餐时间\"），在11:30-14:00之间同事之间说 Mahlzeit! 相当于\"午安\"。\n\n邮件以 \"Sehr geehrte(r)...\"（尊敬的...）开头是正式的，\"Liebe(r)...\"（亲爱的...）是非正式的。"
      }
    ],
    exercises: [
      {
        id: "cult-02-e1",
        type: "multiple-choice",
        questionZh: "在德国职场，不确定该用 Sie 还是 du 时应该？",
        options: ["先用 du", "先用 Sie", "问对方", "避免称呼"],
        correctAnswer: "先用 Sie",
        explanation: "不确定时先用 Sie（正式），等对方主动提议可以用 du 时再切换。"
      },
      {
        id: "cult-02-e2",
        type: "multiple-choice",
        questionZh: "\"Mahlzeit!\" 在职场中通常在什么时间说？",
        options: ["早上", "午间（11:30-14:00）", "下午", "下班时"],
        correctAnswer: "午间（11:30-14:00）",
        explanation: "Mahlzeit 是德国职场特有的午间问候语，在11:30-14:00之间使用，相当于\"午安\"。"
      },
      {
        id: "cult-02-e3",
        type: "multiple-choice",
        questionZh: "德国人直接表达不同意见的文化背景是？",
        options: ["他们不礼貌", "他们不喜欢你", "诚实和直接是他们的沟通风格", "他们在测试你"],
        correctAnswer: "诚实和直接是他们的沟通风格",
        explanation: "德语文化中，直接表达意见被视为诚实而非无礼。理解这一点有助于避免文化误解。"
      }
    ]
  },
  {
    id: "cult-03",
    category: "culture",
    titleZh: "德国节日与传统",
    titleDe: "Deutsche Feste und Traditionen",
    titleEn: "German Holidays and Traditions",
    description: "了解德国最重要的节日和庆祝传统",
    level: "A1",
    order: 3,
    estimatedMinutes: 8,
    sections: [
      {
        type: "text",
        heading: "德国主要节日",
        content: "德国有许多独特的节日传统，了解这些文化有助于更好地理解德语和德国社会。"
      },
      {
        type: "table",
        heading: "主要节日一览",
        content: "",
        tableHeaders: ["节日", "时间", "德语名", "特点"],
        tableRows: [
          ["新年", "1月1日", "Neujahr", "烟花、香槟庆祝"],
          ["狂欢节", "2-3月", "Karneval/Fasching", "化妆游行，莱茵兰地区最盛大"],
          ["复活节", "3-4月", "Ostern", "彩蛋、兔子、春游"],
          ["劳动节", "5月1日", "Tag der Arbeit", "法定假日，政治集会"],
          ["慕尼黑啤酒节", "9-10月", "Oktoberfest", "全球最大的民俗节庆"],
          ["德国统一日", "10月3日", "Tag der Deutschen Einheit", "国庆节"],
          ["圣诞市场", "12月", "Weihnachtsmarkt", "热红酒、姜饼、手工艺品"],
          ["圣诞节", "12月24-26日", "Weihnachten", "家庭团聚、礼物交换"],
          ["除夕", "12月31日", "Silvester", "烟花、Bleigießen（铅占卜）"],
        ]
      },
      {
        type: "text",
        heading: "圣诞市场文化",
        content: "德国圣诞市场（Weihnachtsmarkt）是冬季最独特的体验：\n\n- 每个城市都有，通常从11月底持续到12月24日\n- Glühwein（热红酒）是必喝的\n- Lebkuchen（姜饼）和 Stollen（圣诞蛋糕）是传统糕点\n- 手工艺品摊位出售木雕、蜡烛、装饰品\n- 最著名的圣诞市场在纽伦堡（Nürnberg）和德累斯顿（Dresden）"
      },
      {
        type: "tip",
        heading: "语言提示",
        content: "节日常用表达：\nFrohe Weihnachten! = 圣诞快乐！\nFrohes neues Jahr! = 新年快乐！\nFrohe Ostern! = 复活节快乐！\nProst! / Prost Neujahr! = 干杯！/ 新年干杯！"
      }
    ],
    exercises: [
      {
        id: "cult-03-e1",
        type: "multiple-choice",
        questionZh: "Oktoberfest（慕尼黑啤酒节）通常在什么时候举行？",
        options: ["10月整月", "9-10月", "8月", "7月"],
        correctAnswer: "9-10月",
        explanation: "虽然叫 Oktoberfest（十月节），但它实际上从9月中旬开始，持续到10月第一个周日。"
      },
      {
        id: "cult-03-e2",
        type: "multiple-choice",
        questionZh: "德国圣诞市场上必喝的热饮是？",
        options: ["热巧克力", "热红酒（Glühwein）", "热啤酒", "热苹果汁"],
        correctAnswer: "热红酒（Glühwein）",
        explanation: "Glühwein（热红酒）是德国圣诞市场的标志饮品，由红酒加热加入肉桂、丁香、橙皮等香料制成。"
      },
      {
        id: "cult-03-e3",
        type: "multiple-choice",
        questionZh: "德国国庆节是哪天？",
        options: ["7月4日", "10月3日", "11月9日", "5月1日"],
        correctAnswer: "10月3日",
        explanation: "Tag der Deutschen Einheit（德国统一日）在10月3日，纪念1990年东西德统一。"
      }
    ]
  },
  {
    id: "cult-04",
    category: "culture",
    titleZh: "德国公共交通",
    titleDe: "Öffentliche Verkehrsmittel",
    titleEn: "Public Transport in Germany",
    description: "了解德国公交系统、购票方式和乘车礼仪",
    level: "A1",
    order: 4,
    estimatedMinutes: 8,
    sections: [
      {
        type: "text",
        heading: "德国公共交通概览",
        content: "德国拥有欧洲最好的公共交通系统之一，包括：\n\n- U-Bahn（地铁）：大城市地下交通\n- S-Bahn（城市快铁）：连接市区和郊区\n- Straßenbahn（有轨电车）：城市地面交通\n- Bus（公交车）：覆盖所有区域\n- ICE（城际特快）：高速铁路\n\n德国铁路公司 Deutsche Bahn (DB) 运营大部分长途和短途线路。"
      },
      {
        type: "text",
        heading: "购票方式",
        content: "德国公共交通通常需要提前购票：\n\n- 自动售票机（Fahrkartenautomat）买票\n- DB Navigator App 买长途火车票\n- 检票是抽查制（不是每站都检票），但被抓到逃票罚款60€\n- Deutschlandticket（49€月票）可无限乘坐德国境内区域公共交通\n\n重要：上公交/电车前需要\"打票\"（entwerten）——在站台机器上盖上日期时间戳。"
      },
      {
        type: "text",
        heading: "乘车礼仪",
        content: "- 在站台等车时站在安全线后\n- 先下后上（先让下车的人出来）\n- 保持安静：不用手机大声通话\n- 老弱病残孕专座（优先让座）\n- 自行车可以带上部分公共交通\n- 地铁和火车站台没有闸机，但需要自觉买票"
      },
      {
        type: "tip",
        heading: "实用表达",
        content: "Ein Einzelticket nach Berlin, bitte. — 请给我一张去柏林的单程票。\nWann fährt der nächste Zug? — 下一班火车什么时候开？\nVon welchem Gleis? — 从哪个站台？\nIst dieser Platz frei? — 这个座位空着吗？\nIch möchte aussteigen. — 我要下车。"
      }
    ],
    exercises: [
      {
        id: "cult-04-e1",
        type: "multiple-choice",
        questionZh: "德国公共交通检票方式是？",
        options: ["每站检票", "进站刷闸机", "随机抽查", "完全没人管"],
        correctAnswer: "随机抽查",
        explanation: "德国公共交通大多是抽查制。没有闸机，但需要自觉买票。被查到无票乘车罚款60€。"
      },
      {
        id: "cult-04-e2",
        type: "multiple-choice",
        questionZh: "Deutschlandticket 的价格是？",
        options: ["29€/月", "49€/月", "69€/月", "99€/月"],
        correctAnswer: "49€/月",
        explanation: "Deutschlandticket（德国票）月费49€，可无限乘坐全德国的区域公共交通（不包括ICE等长途快车）。"
      },
      {
        id: "cult-04-e3",
        type: "multiple-choice",
        questionZh: "\"Ein Einzelticket\" 是什么意思？",
        options: ["月票", "往返票", "单程票", "团体票"],
        correctAnswer: "单程票",
        explanation: "Ein Einzelticket = a single ticket（单程票）。Hin- und Rückfahrt = round trip（往返票）。"
      }
    ]
  },
  {
    id: "cult-05",
    category: "culture",
    titleZh: "德国教育体系",
    titleDe: "Das deutsche Bildungssystem",
    titleEn: "The German Education System",
    description: "了解德国独特的教育体系，特别是大学和职业培训双轨制",
    level: "A1",
    order: 5,
    estimatedMinutes: 8,
    sections: [
      {
        type: "text",
        heading: "德国教育体系概览",
        content: "德国教育体系有几个独特之处：免费大学教育、双轨制职业培训、严谨的学位制度。了解这些有助于理解德国社会。"
      },
      {
        type: "text",
        heading: "大学教育",
        content: "德国大部分公立大学免学费（除了巴登-符腾堡州对外国学生收1500€/学期）：\n\n- 只需支付每学期约150-350€的管理费（Semesterbeitrag），通常包含学期交通票\n- 学位体系：Bachelor（学士，3年）+ Master（硕士，2年）\n- 传统学位：Diplom（理工科）和 Magister（文科）\n- 许多大学有悠久历史，如海德堡大学（1386年建立）\n- Technische Universität (TU) 以理工科见长"
      },
      {
        type: "text",
        heading: "双轨制职业培训（Duale Ausbildung）",
        content: "德国独特的职业培训制度：\n\n- 约一半德国年轻人选择职业教育而非大学\n- 3年时间，30%在职业学校（Berufsschule）学习理论，70%在企业实践\n- 学徒期间有工资（约600-1200€/月）\n- 涵盖300多个职业，从面包师到机械师到IT专员\n- 毕业后获得全国认可的资格证书\n\n这个制度被认为是德国制造业强大的重要原因。"
      },
      {
        type: "tip",
        heading: "语言学习者注意",
        content: "去德国留学需要通过 DSH 或 TestDaF 德语考试（通常需达到 B2-C1 水平）。但如果选择英语授课的项目（International Programs），只需提供英语成绩（雅思/托福）。德国有许多英文授课的硕士项目。"
      }
    ],
    exercises: [
      {
        id: "cult-05-e1",
        type: "multiple-choice",
        questionZh: "德国大部分公立大学的学费情况是？",
        options: ["每年5000-10000€", "免费（只收管理费）", "每年1000-2000€", "按成绩收费"],
        correctAnswer: "免费（只收管理费）",
        explanation: "德国大部分公立大学免学费，只需支付每学期约150-350€的 Semesterbeitrag（管理费，含交通票）。"
      },
      {
        id: "cult-05-e2",
        type: "multiple-choice",
        questionZh: "Duale Ausbildung（双轨制职业培训）的特点是？",
        options: ["只在教室学习", "30%学校理论+70%企业实践", "全日制实习", "只在企业工作"],
        correctAnswer: "30%学校理论+70%企业实践",
        explanation: "双轨制 = 职业学校理论 + 企业实践结合。学徒期间获得工资，毕业后获得资格证书。"
      },
      {
        id: "cult-05-e3",
        type: "multiple-choice",
        questionZh: "去德国留学（德语授课）通常需要什么德语水平？",
        options: ["A1-A2", "B1", "B2-C1", "C2"],
        correctAnswer: "B2-C1",
        explanation: "德语授课项目通常要求 B2 或 C1 水平（通过 DSH 或 TestDaF 考试）。但德国也有许多英文授课的硕士项目。"
      }
    ]
  }
];
