import { CourseLesson } from "@/lib/types";

export const expressionsLessons: CourseLesson[] = [
  {
    id: "expr-01",
    category: "expressions",
    titleZh: "问候与告别",
    titleDe: "Begrüßung und Abschied",
    titleEn: "Greetings and Farewells",
    description: "学习德语中正式与非正式的问候和告别方式",
    level: "A1",
    order: 1,
    estimatedMinutes: 8,
    sections: [
      {
        type: "text",
        heading: "德语问候分正式和非正式",
        content: "德语有明确的正式（Sie）和非正式（du）区分。不同的场合使用不同的问候方式。"
      },
      {
        type: "table",
        heading: "常用问候语",
        content: "",
        tableHeaders: ["德语", "发音提示", "中文", "使用场合"],
        tableRows: [
          ["Guten Morgen!", "\"goo-ten mor-gen\"", "早上好！", "上午10点前，正式/非正式均可"],
          ["Guten Tag!", "\"goo-ten tahk\"", "您好！", "白天通用，偏正式"],
          ["Guten Abend!", "\"goo-ten ah-bent\"", "晚上好！", "傍晚之后"],
          ["Hallo!", "\"ha-lo\"", "你好！", "非正式，朋友之间"],
          ["Grüß Gott!", "\"gruess got\"", "您好！", "巴伐利亚/奥地利地区"],
          ["Moin!", "\"moyn\"", "你好！", "德国北部地区"],
        ]
      },
      {
        type: "table",
        heading: "常用告别语",
        content: "",
        tableHeaders: ["德语", "中文", "使用场合"],
        tableRows: [
          ["Auf Wiedersehen!", "再见！", "正式"],
          ["Tschüss!", "再见！", "非正式"],
          ["Bis später!", "回头见！", "当天还会见面"],
          ["Bis morgen!", "明天见！", "明天还会见面"],
          ["Bis bald!", "再见！（不久后见）", "不确定时间"],
          ["Gute Nacht!", "晚安！", "睡前"],
        ]
      },
      {
        type: "tip",
        heading: "文化提示",
        content: "在德国，与陌生人、店员、同事打招呼是基本礼貌。走进小店时要说 Guten Tag，离开时说 Auf Wiedersehen 或 Tschüss。不打招呼会被认为不礼貌。"
      }
    ],
    exercises: [
      {
        id: "expr-01-e1",
        type: "multiple-choice",
        questionZh: "在正式场合（如银行、医院），应该用哪种问候语？",
        options: ["Hallo!", "Tschüss!", "Guten Tag!", "Moin!"],
        correctAnswer: "Guten Tag!",
        explanation: "Guten Tag 是白天通用的正式问候语。Hallo 和 Moin 是非正式的。"
      },
      {
        id: "expr-01-e2",
        type: "multiple-choice",
        questionZh: "\"回头见\"用德语怎么说？",
        options: ["Bis morgen!", "Bis später!", "Gute Nacht!", "Auf Wiedersehen!"],
        correctAnswer: "Bis später!",
        explanation: "Bis später = 回头见（当天还会见面）。Bis morgen = 明明见。"
      },
      {
        id: "expr-01-e3",
        type: "multiple-choice",
        questionZh: "\"Moin!\" 是德国哪个地区常用的问候语？",
        options: ["巴伐利亚", "柏林", "北部地区", "奥地利"],
        correctAnswer: "北部地区",
        explanation: "Moin 是德国北部（如汉堡、不来梅）地区常用的非正式问候语，可在一天中任何时间使用。"
      }
    ]
  },
  {
    id: "expr-02",
    category: "expressions",
    titleZh: "自我介绍",
    titleDe: "Sich vorstellen",
    titleEn: "Introducing Yourself",
    description: "学习如何用德语介绍自己的姓名、来历、职业和语言",
    level: "A1",
    order: 2,
    estimatedMinutes: 8,
    sections: [
      {
        type: "text",
        heading: "自我介绍的基本句型",
        content: "以下是你需要掌握的最基本的自我介绍用语，按照自然的交流顺序排列。"
      },
      {
        type: "table",
        heading: "自我介绍句型",
        content: "",
        tableHeaders: ["德语", "中文", "英语"],
        tableRows: [
          ["Ich heiße...", "我叫...", "My name is..."],
          ["Mein Name ist...", "我的名字是...", "My name is..."],
          ["Ich komme aus China.", "我来自中国。", "I come from China."],
          ["Ich wohne in Berlin.", "我住在柏林。", "I live in Berlin."],
          ["Ich bin Student/Studentin.", "我是学生。", "I am a student."],
          ["Ich bin von Beruf Ingenieur.", "我的职业是工程师。", "I am an engineer by profession."],
          ["Ich spreche Chinesisch und Englisch.", "我说中文和英语。", "I speak Chinese and English."],
          ["Ich lerne Deutsch.", "我在学德语。", "I am learning German."],
        ]
      },
      {
        type: "text",
        heading: "询问对方信息",
        content: "Wie heißen Sie? / Wie heißt du? — 您叫什么？/ 你叫什么？\nWoher kommen Sie? / Woher kommst du? — 您从哪里来？/ 你从哪里来？\nWas sind Sie von Beruf? — 您的职业是什么？\nSprechen Sie Englisch? — 您说英语吗？"
      },
      {
        type: "tip",
        heading: "Sie 还是 du？",
        content: "对陌生人、年长者、上司用 Sie（您）。对朋友、同学、同龄人用 du（你）。如果你不确定，先用 Sie，对方会说 \"Sie können du zu mir sagen\"（你可以跟我用 du）。"
      }
    ],
    exercises: [
      {
        id: "expr-02-e1",
        type: "multiple-choice",
        questionZh: "\"我来自中国\" 用德语怎么说？",
        options: ["Ich wohne aus China.", "Ich komme aus China.", "Ich bin aus China.", "Ich heiße China."],
        correctAnswer: "Ich komme aus China.",
        explanation: "用 kommen aus 表示\"来自\"。Ich komme aus China. (I come from China.)"
      },
      {
        id: "expr-02-e2",
        type: "multiple-choice",
        questionZh: "正式地问\"您叫什么名字？\" 应该说？",
        options: ["Wie heißt du?", "Wie heißen Sie?", "Was ist dein Name?", "Wie ist Ihr Name?"],
        correctAnswer: "Wie heißen Sie?",
        explanation: "正式场合用 Sie：Wie heißen Sie? 非正式用 du：Wie heißt du?"
      },
      {
        id: "expr-02-e3",
        type: "multiple-choice",
        questionZh: "女性说\"我是学生\"应该用？",
        options: ["Ich bin Student.", "Ich bin Studentin.", "Ich bin ein Student.", "Ich bin eine Studentin."],
        correctAnswer: "Ich bin Studentin.",
        explanation: "德语职业名词分性别：Student（男学生），Studentin（女学生）。注意：表示职业时不加冠词。"
      }
    ]
  },
  {
    id: "expr-03",
    category: "expressions",
    titleZh: "数字与计数",
    titleDe: "Zahlen und Zählen",
    titleEn: "Numbers and Counting",
    description: "学习德语数字系统，从0到百万",
    level: "A1",
    order: 3,
    estimatedMinutes: 10,
    sections: [
      {
        type: "table",
        heading: "基础数字 0-20",
        content: "",
        tableHeaders: ["数字", "德语", "发音提示"],
        tableRows: [
          ["0", "null", "如英语 null"],
          ["1", "eins", "\"eyens\""],
          ["2", "zwei", "\"tsvy\""],
          ["3", "drei", "\"dry\""],
          ["4", "vier", "\"feer\""],
          ["5", "fünf", "\"foonf\""],
          ["6", "sechs", "\"zex\""],
          ["7", "sieben", "\"zee-ben\""],
          ["8", "acht", "\"ahkht\""],
          ["9", "neun", "\"noyn\""],
          ["10", "zehn", "\"tsayn\""],
          ["11", "elf", "同英语 elf"],
          ["12", "zwölf", "\"tsvuelf\""],
          ["13", "dreizehn", "drei+zehn"],
          ["14", "vierzehn", "vier+zehn"],
          ["15", "fünfzehn", "fünf+zehn"],
          ["16-19", "sechzehn...neunzehn", "数字+zehn"],
          ["20", "zwanzig", "\"tsvan-tsikh\""],
        ]
      },
      {
        type: "text",
        heading: "21-99 的构成规则",
        content: "德语21以上的数字是\"个位 + und + 十位\"，与英语顺序相反！\n\n21 = einundzwanzig (ein + und + zwanzig)\n32 = zweiunddreißig (zwei + und + dreißig)\n47 = siebenundvierzig (sieben + und + vierzig)\n99 = neunundneunzig (neun + und + neunzig)\n\n这个规则是\"个位和十位\"——先说个位，再说und，再说十位。"
      },
      {
        type: "comparison",
        heading: "德语 vs 英语数字对比",
        content: "英语：twenty-one (十位 + 个位)\n德语：einundzwanzig (个位 + und + 十位)\n\n这是英语学习者最不习惯的地方。英语先说十位，德语先说个位。\n\n不过，100以上的数字，德语和英语顺序一致：\n365 = dreihundertfünfundsechzig (drei-hundert-fünf-und-sechzig)"
      },
      {
        type: "tip",
        heading: "实际应用",
        content: "德语中数字常用于：价格（Das kostet fünf Euro）、时间（Es ist halb acht = 7:30）、电话号码（逐个数字念）、日期（der dritte Mai = 5月3日）。"
      }
    ],
    exercises: [
      {
        id: "expr-03-e1",
        type: "multiple-choice",
        questionZh: "德语 21 (einundzwanzig) 的字面构成是？",
        options: ["twenty + one", "one + and + twenty", "twenty + and + one", "one + twenty"],
        correctAnswer: "one + and + twenty",
        explanation: "德语数字先说个位：ein (one) + und (and) + zwanzig (twenty) = einundzwanzig。"
      },
      {
        id: "expr-03-e2",
        type: "multiple-choice",
        questionZh: "德语数字 7 是？",
        options: ["sechs", "sieben", "acht", "sechzig"],
        correctAnswer: "sieben",
        explanation: "7 = sieben。不要和 sechs (6) 或 sechzig (60) 混淆。"
      },
      {
        id: "expr-03-e3",
        type: "multiple-choice",
        questionZh: "\"Es ist halb acht\" 表示几点？",
        options: ["8:30", "7:30", "7:00", "8:00"],
        correctAnswer: "7:30",
        explanation: "德语的 halb acht 意思是\"八点差一半\"= 7:30。这与英语 half past seven 相同，但德语说的是\"到八点过半了\"。"
      }
    ]
  },
  {
    id: "expr-04",
    category: "expressions",
    titleZh: "在餐厅点餐",
    titleDe: "Im Restaurant bestellen",
    titleEn: "Ordering at a Restaurant",
    description: "学习在德国餐厅和咖啡馆实用的德语点餐表达",
    level: "A1",
    order: 4,
    estimatedMinutes: 8,
    sections: [
      {
        type: "text",
        heading: "餐厅常用语",
        content: "在德国餐厅，服务员通常会问你是否有预约、想要什么。以下是最实用的句子。"
      },
      {
        type: "table",
        heading: "点餐用语",
        content: "",
        tableHeaders: ["德语", "中文", "英语"],
        tableRows: [
          ["Einen Tisch für zwei, bitte.", "请给我两人桌。", "A table for two, please."],
          ["Ich hätte gern...", "我想要...(礼貌)", "I would like..."],
          ["Ich möchte...", "我想要...", "I would like..."],
          ["Ich nehme...", "我要...", "I'll have..."],
          ["Die Speisekarte, bitte.", "请给我菜单。", "The menu, please."],
          ["Ich hätte gern das Menü.", "我要套餐。", "I'd like the set menu."],
          ["Noch ein Bier, bitte.", "请再来一杯啤酒。", "Another beer, please."],
          ["Die Rechnung, bitte.", "请买单。", "The bill, please."],
          ["Stimmt so.", "不用找了。（小费包含）", "Keep the change."],
        ]
      },
      {
        type: "text",
        heading: "结账与给小费",
        content: "在德国，小费通常是账单的 5%-10%。说 \"Stimmt so\"（不用找零）就表示差额是小费。不是把小费留在桌上，而是在付钱时直接告诉服务员总额。\n\n例如：账单 18 欧元，你给 20 欧元说 \"Stimmt so\"，服务员知道 2 欧元是小费。"
      },
      {
        type: "tip",
        heading: "文化提示",
        content: "德国餐厅不像美国那样服务员会频繁过来问候。你需要主动招呼服务员（举手或说 \"Entschuldigung!\"）来点餐或结账。水不是免费提供的——你需要单独购买矿泉水（通常带气的 Wasser mit Kohlensäure 更常见）。"
      }
    ],
    exercises: [
      {
        id: "expr-04-e1",
        type: "multiple-choice",
        questionZh: "礼貌地表达\"我想要一杯咖啡\"应该说？",
        options: ["Ich will einen Kaffee.", "Ich hätte gern einen Kaffee.", "Gib mir einen Kaffee.", "Ich muss einen Kaffee haben."],
        correctAnswer: "Ich hätte gern einen Kaffee.",
        explanation: "\"Ich hätte gern...\" 是最礼貌的说法（虚拟式），相当于英语 \"I would like...\"。\"Ich will\" 太直接。"
      },
      {
        id: "expr-04-e2",
        type: "multiple-choice",
        questionZh: "\"Die Rechnung, bitte.\" 是什么意思？",
        options: ["请给我菜单。", "请买单。", "请再来一杯。", "请给我一张桌子。"],
        correctAnswer: "请买单。",
        explanation: "die Rechnung = 账单。Die Rechnung, bitte = 请买单。"
      },
      {
        id: "expr-04-e3",
        type: "multiple-choice",
        questionZh: "德国餐厅的小费通常是多少？",
        options: ["15-20%", "不需要给小费", "5-10%", "必须给固定金额"],
        correctAnswer: "5-10%",
        explanation: "德国小费通常是账单的 5-10%。不是留在桌上，而是付钱时直接告诉服务员总额（说 Stimmt so）。"
      }
    ]
  },
  {
    id: "expr-05",
    category: "expressions",
    titleZh: "问路与方向",
    titleDe: "Nach dem Weg fragen",
    titleEn: "Asking for Directions",
    description: "学习如何问路和理解方向指示",
    level: "A1",
    order: 5,
    estimatedMinutes: 8,
    sections: [
      {
        type: "text",
        heading: "问路的基本句型",
        content: "在德国问路时，先说 Entschuldigung（打扰了），然后问方向。"
      },
      {
        type: "table",
        heading: "问路与方向",
        content: "",
        tableHeaders: ["德语", "中文", "英语"],
        tableRows: [
          ["Entschuldigung, wo ist der Bahnhof?", "请问火车站在哪里？", "Excuse me, where is the train station?"],
          ["Wie komme ich zum...?", "我怎么去...？", "How do I get to...?"],
          ["Gehen Sie geradeaus.", "请直走。", "Go straight ahead."],
          ["Biegen Sie links/rechts ab.", "请左转/右转。", "Turn left/right."],
          ["Die erste Straße links.", "第一条街左转。", "The first street on the left."],
          ["Es ist gegenüber dem Bahnhof.", "在火车站对面。", "It's across from the train station."],
          ["Es ist neben dem Supermarkt.", "在超市旁边。", "It's next to the supermarket."],
          ["Es ist etwa 5 Minuten zu Fuß.", "步行大约5分钟。", "It's about a 5-minute walk."],
        ]
      },
      {
        type: "tip",
        heading: "实用建议",
        content: "德国人通常很乐意帮忙指路。如果对方说英语，不用担心——这是很常见的。你可以说\"Sprechen Sie Englisch?\"（您说英语吗？）来确认。"
      }
    ],
    exercises: [
      {
        id: "expr-05-e1",
        type: "multiple-choice",
        questionZh: "\"请直走\"用德语怎么说？",
        options: ["Gehen Sie links.", "Gehen Sie geradeaus.", "Gehen Sie zurück.", "Gehen Sie rechts."],
        correctAnswer: "Gehen Sie geradeaus.",
        explanation: "geradeaus = straight ahead。Gehen Sie geradeaus. = Go straight ahead."
      },
      {
        id: "expr-05-e2",
        type: "multiple-choice",
        questionZh: "\"Wie komme ich zum Bahnhof?\" 的意思是？",
        options: ["火车站在哪里？", "我怎么去火车站？", "我要去火车站。", "火车站远吗？"],
        correctAnswer: "我怎么去火车站？",
        explanation: "Wie komme ich zum...? = How do I get to...? zum = zu + dem（到...去）。"
      },
      {
        id: "expr-05-e3",
        type: "multiple-choice",
        questionZh: "\"gegenüber\" 是什么意思？",
        options: ["旁边", "对面", "后面", "前面"],
        correctAnswer: "对面",
        explanation: "gegenüber = opposite/across from。Die Apotheke ist gegenüber dem Bahnhof. (药房在火车站对面。)"
      }
    ]
  },
  {
    id: "expr-06",
    category: "expressions",
    titleZh: "购物与价格",
    titleDe: "Einkaufen und Preise",
    titleEn: "Shopping and Prices",
    description: "学习在商店购物时常用的德语表达",
    level: "A1",
    order: 6,
    estimatedMinutes: 8,
    sections: [
      {
        type: "table",
        heading: "购物常用语",
        content: "",
        tableHeaders: ["德语", "中文", "英语"],
        tableRows: [
          ["Was kostet das?", "这个多少钱？", "How much does this cost?"],
          ["Ich suche...", "我在找...", "I am looking for..."],
          ["Haben Sie...?", "您有...吗？", "Do you have...?"],
          ["Ich nehme das.", "我要这个。", "I'll take this."],
          ["Kann ich mit Karte zahlen?", "我可以刷卡吗？", "Can I pay by card?"],
          ["Ich zahle bar.", "我付现金。", "I'll pay cash."],
          ["Das ist zu teuer.", "这太贵了。", "That is too expensive."],
          ["Haben Sie das auch in...?", "这个有...的吗？(尺码/颜色)", "Do you have this in...?"],
        ]
      },
      {
        type: "text",
        heading: "服装尺码",
        content: "德国使用欧洲尺码系统，与亚洲和美国的尺码不同。购物时可以说：\n\nHaben Sie das in Größe...? (这个有...码的吗？)\nDas ist mir zu groß/klein. (这对我来说太大/小了。)\nKann ich das anprobieren? (我可以试穿吗？)"
      },
      {
        type: "tip",
        heading: "文化提示",
        content: "德国所有商品价格已含税（Mehrwertsteuer 增值税 19%），标价就是最终价格。不像美国需要在标价上加税。超市需要自带购物袋或付费购买（Pfandsystem 押金系统）。"
      }
    ],
    exercises: [
      {
        id: "expr-06-e1",
        type: "multiple-choice",
        questionZh: "\"这个多少钱？\" 用德语怎么说？",
        options: ["Wie viel ist das?", "Was kostet das?", "Was ist der Preis?", "Wie teuer ist es?"],
        correctAnswer: "Was kostet das?",
        explanation: "Was kostet das? = What does this cost? 这是最常用的问价方式。"
      },
      {
        id: "expr-06-e2",
        type: "multiple-choice",
        questionZh: "\"Kann ich mit Karte zahlen?\" 的意思是？",
        options: ["我可以退货吗？", "我可以刷卡吗？", "有折扣吗？", "可以讲价吗？"],
        correctAnswer: "我可以刷卡吗？",
        explanation: "mit Karte zahlen = pay by card。德国很多小店只收现金，所以这句很实用。"
      },
      {
        id: "expr-06-e3",
        type: "multiple-choice",
        questionZh: "德国商品标价中是否已含税？",
        options: ["否，结账时另加", "是，标价即最终价格", "只有食品含税", "取决于商店"],
        correctAnswer: "是，标价即最终价格",
        explanation: "德国标价已含增值税（Mehrwertsteuer）。你看到的价格就是最终要付的价格。"
      }
    ]
  },
  {
    id: "expr-07",
    category: "expressions",
    titleZh: "时间与约会",
    titleDe: "Uhrzeit und Verabredungen",
    titleEn: "Time and Appointments",
    description: "学习如何用德语表达时间和安排约会",
    level: "A1",
    order: 7,
    estimatedMinutes: 8,
    sections: [
      {
        type: "table",
        heading: "表达时间",
        content: "",
        tableHeaders: ["德语", "时间", "英语"],
        tableRows: [
          ["Es ist acht Uhr.", "8:00", "It is eight o'clock."],
          ["Es ist halb acht.", "7:30", "It is half past seven."],
          ["Es ist Viertel nach acht.", "8:15", "It is quarter past eight."],
          ["Es ist Viertel vor acht.", "7:45", "It is quarter to eight."],
          ["Es ist zehn nach acht.", "8:10", "It is ten past eight."],
          ["Es ist zehn vor acht.", "7:50", "It is ten to eight."],
        ]
      },
      {
        type: "text",
        heading: "约定时间",
        content: "Wann treffen wir uns? — 我们什么时候见面？\nLass uns um 19 Uhr treffen. — 我们7点见吧。\nPasst dir um 15 Uhr? — 下午3点你可以吗？\nGeht es am Montag? — 周一可以吗？\nIch habe um 10 Uhr einen Termin. — 我10点有个预约。"
      },
      {
        type: "comparison",
        heading: "德语 vs 英语时间表达",
        content: "英语说 \"half past seven\" (7:30)\n德语说 \"halb acht\" (半八 = 7:30)\n\n注意！德语的 halb acht 是\"到八点过半了\"= 7:30，不是 8:30！这是英语学习者最常犯的错误。"
      }
    ],
    exercises: [
      {
        id: "expr-07-e1",
        type: "multiple-choice",
        questionZh: "\"Es ist halb acht\" 表示几点？",
        options: ["8:30", "7:30", "7:00", "8:00"],
        correctAnswer: "7:30",
        explanation: "halb acht = 到八点过半 = 7:30。不要误以为是 8:30！"
      },
      {
        id: "expr-07-e2",
        type: "multiple-choice",
        questionZh: "\"Es ist Viertel vor acht\" 表示几点？",
        options: ["8:15", "8:45", "7:45", "7:15"],
        correctAnswer: "7:45",
        explanation: "Viertel vor acht = 八点前一刻 = 7:45。vor = before/before。"
      },
      {
        id: "expr-07-e3",
        type: "multiple-choice",
        questionZh: "约朋友见面应该说？",
        options: ["Wann gehen wir uns?", "Wann treffen wir uns?", "Wann kommen wir uns?", "Wann sehen wir uns?"],
        correctAnswer: "Wann treffen wir uns?",
        explanation: "sich treffen = to meet。Wann treffen wir uns? = When shall we meet?"
      }
    ]
  },
  {
    id: "expr-08",
    category: "expressions",
    titleZh: "看医生",
    titleDe: "Beim Arzt",
    titleEn: "At the Doctor",
    description: "学习在德国就医时常用的德语表达",
    level: "A1",
    order: 8,
    estimatedMinutes: 8,
    sections: [
      {
        type: "table",
        heading: "就医常用语",
        content: "",
        tableHeaders: ["德语", "中文", "英语"],
        tableRows: [
          ["Ich brauche einen Arzt.", "我需要看医生。", "I need a doctor."],
          ["Ich habe Kopfschmerzen.", "我头疼。", "I have a headache."],
          ["Ich habe Fieber.", "我发烧了。", "I have a fever."],
          ["Ich fühle mich nicht gut.", "我感觉不舒服。", "I don't feel well."],
          ["Mir ist übel.", "我恶心。", "I feel nauseous."],
          ["Ich habe mich erkältet.", "我感冒了。", "I have a cold."],
          ["Haben Sie einen Termin?", "您有预约吗？", "Do you have an appointment?"],
          ["Ich habe eine Versichertenkarte.", "我有医保卡。", "I have an insurance card."],
        ]
      },
      {
        type: "text",
        heading: "常见症状表达",
        content: "身体部位 + tut weh（疼）：\nMein Kopf tut weh. (我头疼。)\nMein Bauch tut weh. (我肚子疼。)\nMein Rücken tut weh. (我背疼。)\n\nIch habe Schmerzen in + 与格：\nIch habe Schmerzen in der Brust. (我胸口疼。)"
      },
      {
        type: "tip",
        heading: "德国医疗体系提示",
        content: "德国有公共医疗保险（gesetzliche Krankenversicherung）。看医生时需要带医保卡（Versichertenkarte）。非紧急情况先去全科医生（Hausarzt），如有需要会转诊到专科医生（Facharzt）。急救电话：112。"
      }
    ],
    exercises: [
      {
        id: "expr-08-e1",
        type: "multiple-choice",
        questionZh: "\"我头疼\" 用德语怎么说？",
        options: ["Mein Kopf ist weh.", "Ich habe Kopfschmerzen.", "Mein Kopf tut krank.", "Ich bin Kopf weh."],
        correctAnswer: "Ich habe Kopfschmerzen.",
        explanation: "Ich habe Kopfschmerzen. = I have a headache. 也可以说 Mein Kopf tut weh."
      },
      {
        id: "expr-08-e2",
        type: "multiple-choice",
        questionZh: "德国的急救电话是？",
        options: ["911", "110", "112", "119"],
        correctAnswer: "112",
        explanation: "112 是欧洲统一的急救电话（医疗急救）。110 是德国警察电话。"
      },
      {
        id: "expr-08-e3",
        type: "multiple-choice",
        questionZh: "\"Ich habe mich erkältet\" 的意思是？",
        options: ["我过敏了", "我感冒了", "我受伤了", "我发烧了"],
        correctAnswer: "我感冒了",
        explanation: "sich erkälten = to catch a cold。Ich habe mich erkältet = I have caught a cold."
      }
    ]
  }
];
