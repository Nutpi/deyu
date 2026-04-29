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
  },
  {
    id: "cult-06",
    category: "culture",
    titleZh: "德国饮食文化",
    titleDe: "Deutsche Esskultur",
    titleEn: "German Food Culture",
    description: "了解德国特色美食、饮食习惯和餐桌礼仪",
    level: "A1",
    order: 6,
    estimatedMinutes: 8,
    sections: [
      {
        type: "text",
        heading: "德国特色美食",
        content: "德国不仅有啤酒和香肠！各地都有独特的特色菜：\n\n巴伐利亚：白香肠（Weißwurst）+ 甜芥末 + 啤酒\n巴登-符腾堡：Maultaschen（面食口袋，类似馄饨）\n黑森州：Grüne Soße（绿色酱汁，配煮鸡蛋和土豆）\n汉堡： Labskaus（肉泥配甜菜根和腌鲱鱼）\n全国：Currywurst（咖喱香肠）+ Pommes（薯条）"
      },
      {
        type: "table",
        heading: "一日三餐",
        content: "",
        tableHeaders: ["餐次", "德语", "时间", "内容"],
        tableRows: [
          ["早餐", "das Frühstück", "7:00-9:00", "面包、黄油、果酱、奶酪、肉制品、咖啡"],
          ["午餐", "das Mittagessen", "12:00-13:00", "热餐为主（主餐）"],
          ["下午茶", "die Kaffeepause", "15:00-16:00", "咖啡 + 蛋糕（Kaffee und Kuchen）"],
          ["晚餐", "das Abendbrot", "18:00-19:00", "冷餐为主（面包配各种冷盘）"],
        ]
      },
      {
        type: "text",
        heading: "餐桌礼仪",
        content: "进餐前说 \"Guten Appetit!\"（祝好胃口）或 \"Mahlzeit!\"（午餐时间）\n碰杯时看着对方眼睛说 \"Prost!\"（干杯）\n用餐时双手放在桌上（不用餐时手腕搭在桌边）\n吃完后将刀叉并排放在盘子上表示\"我吃完了\""
      },
      {
        type: "tip",
        heading: "面包文化",
        content: "德国有超过 3000 种面包！面包店（Bäckerei）是德国人每天必去的地方。最受欢迎的包括：Brötchen（小面包）、Vollkornbrot（全麦面包）、Schwarzbrot（黑面包）、Brezel（碱水结）。面包店周日关门，但周六下午会排长队囤面包。"
      }
    ],
    exercises: [
      {
        id: "cult-06-e1",
        type: "multiple-choice",
        questionZh: "德国晚餐（das Abendbrot）通常是什么类型的？",
        options: ["热餐为主", "冷餐为主（面包配冷盘）", "快餐", "汤和沙拉"],
        correctAnswer: "冷餐为主（面包配冷盘）",
        explanation: "das Abendbrot（晚餐，字面意思是\"晚上的面包\"）通常以冷餐为主：面包配各种奶酪、肉制品和蔬菜。"
      },
      {
        id: "cult-06-e2",
        type: "multiple-choice",
        questionZh: "进餐前德国人通常说什么？",
        options: ["Prost!", "Guten Appetit!", "Danke!", "Mahlzeit!"],
        correctAnswer: "Guten Appetit!",
        explanation: "Guten Appetit! = Enjoy your meal!（祝好胃口）。Prost 是干杯时说的，Mahlzeit 是午间问候。"
      },
      {
        id: "cult-06-e3",
        type: "multiple-choice",
        questionZh: "德国大约有多少种面包？",
        options: ["约100种", "约500种", "超过3000种", "约50种"],
        correctAnswer: "超过3000种",
        explanation: "德国有超过 3000 种面包和 1200 种小面包卷，面包文化是联合国教科文组织非物质文化遗产。"
      }
    ]
  },
  {
    id: "cult-07",
    category: "culture",
    titleZh: "住房与租房",
    titleDe: "Wohnen in Deutschland",
    titleEn: "Housing and Renting in Germany",
    description: "了解德国租房文化、流程和注意事项",
    level: "A1",
    order: 7,
    estimatedMinutes: 8,
    sections: [
      {
        type: "text",
        heading: "德国人喜欢租房",
        content: "与许多国家不同，德国有很高的租房比例——超过一半的德国家庭住在租来的房子里。租房不是\"临时方案\"，而是一种长期的生活方式。德国法律对租户保护非常完善。"
      },
      {
        type: "table",
        heading: "租房类型",
        content: "",
        tableHeaders: ["德语", "类型", "说明"],
        tableRows: [
          ["die Wohnung", "公寓", "最常见的租房类型"],
          ["das Einfamilienhaus", "独栋别墅", "带花园，通常郊区"],
          ["die Dachwohnung", "顶楼公寓", "在顶层，可能有斜屋顶"],
          ["die Altbauwohnung", "老建筑公寓", "高天花板、木地板，有魅力"],
          ["das möbliertes Zimmer", "带家具的房间", "通常学生合租"],
          ["die WG (Wohngemeinschaft)", "合租公寓", "年轻人/学生常见"],
        ]
      },
      {
        type: "text",
        heading: "租房流程",
        content: "在德国租房通常需要：\n1. 在 ImmobilienScout24 或 WG-Gesucht 等网站找房源\n2. 联系房东或中介（der Makler），预约看房（die Besichtigung）\n3. 提供收入证明（Einkommensnachweis）和 SCHUFA 信用记录\n4. 签合同（der Mietvertrag）\n5. 交押金（die Kaution），通常为2-3个月冷租\n6. 入住交接（die Wohnungsübergabe），记录房屋状况"
      },
      {
        type: "text",
        heading: "暖租 vs 冷租",
        content: "德国租金分两种：\n\n冷租（die Kaltmiete）：纯房租，不含水电暖\n暖租（die Warmmiete）：冷租 + 附加费用（Nebenkosten，如水、暖、垃圾处理等）\n\n找房子时要注意看是冷租还是暖租！暖租通常比冷租高 150-300€/月。"
      },
      {
        type: "tip",
        heading: "实用德语",
        content: "Ich suche eine Wohnung. (我在找公寓。)\nWas kostet die Miete pro Monat? (每月租金多少？)\nIst die Wohnung möbliert? (公寓带家具吗？)\nWann kann ich einziehen? (我什么时候可以搬进来？)\nDer Makler ist teuer. (中介费很贵。)"
      }
    ],
    exercises: [
      {
        id: "cult-07-e1",
        type: "multiple-choice",
        questionZh: "德国租房比例大约是多少？",
        options: ["不到20%", "约30%", "超过50%", "不到10%"],
        correctAnswer: "超过50%",
        explanation: "超过一半的德国家庭住在租来的房子里。租房在德国是一种长期生活方式，不是临时方案。"
      },
      {
        id: "cult-07-e2",
        type: "multiple-choice",
        questionZh: "暖租（die Warmmiete）包含什么？",
        options: ["只有纯房租", "冷租 + 水电暖等附加费", "冷租 + 家具费", "冷租 + 中介费"],
        correctAnswer: "冷租 + 水电暖等附加费",
        explanation: "die Warmmiete = die Kaltmiete + Nebenkosten（附加费，包含水、暖、垃圾处理等）。"
      },
      {
        id: "cult-07-e3",
        type: "multiple-choice",
        questionZh: "\"die WG\" 是什么意思？",
        options: ["独栋别墅", "酒店", "合租公寓", "度假房"],
        correctAnswer: "合租公寓",
        explanation: "WG = Wohngemeinschaft（合租公寓），是年轻人和大学生最常见的居住形式。每人有自己的房间，共用厨房和浴室。"
      }
    ]
  },
  {
    id: "cult-08",
    category: "culture",
    titleZh: "环保与回收",
    titleDe: "Umwelt und Recycling",
    titleEn: "Environment and Recycling",
    description: "了解德国严格的垃圾分类和环保文化",
    level: "A1",
    order: 8,
    estimatedMinutes: 8,
    sections: [
      {
        type: "text",
        heading: "德国是环保先驱",
        content: "德国是全球环保和回收利用的领先国家。垃圾分类（Mülltrennung）是每个德国人的日常习惯，不遵守会面临罚款。理解这套系统是在德国生活的基础。"
      },
      {
        type: "table",
        heading: "垃圾分类系统",
        content: "",
        tableHeaders: ["桶色", "德语", "中文", "投放内容"],
        tableRows: [
          ["蓝色", "die Papiertonne", "纸类垃圾桶", "纸、纸板、报纸、杂志"],
          ["黄色", "der Gelbe Sack", "塑料/包装桶", "塑料瓶、包装袋、铝箔、罐头"],
          ["棕色", "die Biotonne", "有机垃圾桶", "厨余、果皮、茶叶渣、蛋壳"],
          ["黑色/灰色", "die Restmülltonne", "残余垃圾桶", "无法分类的其他垃圾"],
          ["—", "der Glascontainer", "玻璃回收箱", "按颜色分：白/绿/棕玻璃"],
          ["—", "der Sondermüll", "有害垃圾", "电池、灯泡、化学品"],
        ]
      },
      {
        type: "text",
        heading: "周日安静时间（Ruhezeit）",
        content: "德国有严格的安静时间规定：\n\n- 每周日和公共假期全天安静（Sonntagsruhe）\n- 工作日晚上 22:00 — 次日 7:00 为夜间安静时间\n\n安静时间内禁止：大声放音乐、使用割草机、钻孔装修、在公寓楼内大声活动。\n违反规定邻居可以报警！"
      },
      {
        type: "text",
        heading: "环保购物",
        content: "- 购物袋自带（购物袋需付费）\n- Pfand 押金制度鼓励回收瓶子\n- 许多超市设有有机食品区（Bio-Abteilung）\n- 周日所有商店关门，减少消费和碳排放\n- 越来越多城市设立环保区（Umweltzone），限制高排放车辆进入"
      },
      {
        type: "tip",
        heading: "新到德国的提醒",
        content: "搬到德国的第一件事就是学会垃圾分类！你的房东或物业会提供分类指南。如果不确定某样东西该扔哪里，问邻居或查看当地政府网站。德国人非常在意垃圾分类的正确性。"
      }
    ],
    exercises: [
      {
        id: "cult-08-e1",
        type: "multiple-choice",
        questionZh: "废旧报纸应该扔进哪个颜色的垃圾桶？",
        options: ["黄色桶", "蓝色桶", "棕色桶", "黑色桶"],
        correctAnswer: "蓝色桶",
        explanation: "蓝色桶（die Papiertonne）专门收集纸类：报纸、杂志、纸板、信件等。"
      },
      {
        id: "cult-08-e2",
        type: "multiple-choice",
        questionZh: "德国的周日安静时间（Sonntagsruhe）意味着什么？",
        options: ["不能出门", "不能大声活动和装修", "必须去教堂", "所有商店开门"],
        correctAnswer: "不能大声活动和装修",
        explanation: "周日全天禁止大声活动：不放音乐、不装修、不使用电动工具。违反规定邻居可以报警。"
      },
      {
        id: "cult-08-e3",
        type: "multiple-choice",
        questionZh: "果皮和茶叶渣应该扔进？",
        options: ["黄色桶", "蓝色桶", "棕色桶（有机垃圾）", "黑色桶"],
        correctAnswer: "棕色桶（有机垃圾）",
        explanation: "棕色桶（die Biotonne）收集有机/可堆肥垃圾：果皮、蔬菜残余、茶叶渣、蛋壳等。"
      }
    ]
  }
];
