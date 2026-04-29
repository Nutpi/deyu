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
  },
  {
    id: "expr-09",
    category: "expressions",
    titleZh: "酒店入住",
    titleDe: "Im Hotel",
    titleEn: "At the Hotel",
    description: "学习在德国酒店入住、退房时常用的德语表达",
    level: "A1",
    order: 9,
    estimatedMinutes: 8,
    sections: [
      {
        type: "table",
        heading: "酒店常用语",
        content: "",
        tableHeaders: ["德语", "中文", "英语"],
        tableRows: [
          ["Ich habe eine Reservierung.", "我有预订。", "I have a reservation."],
          ["Ich hätte gern ein Einzelzimmer/Doppelzimmer.", "我想要单人间/双人间。", "I'd like a single/double room."],
          ["Für wie viele Nächte?", "住几晚？", "For how many nights?"],
          ["Was kostet das Zimmer pro Nacht?", "每晚多少钱？", "How much is the room per night?"],
          ["Gibt es Frühstück?", "有早餐吗？", "Is breakfast included?"],
          ["Kann ich mit Karte zahlen?", "可以刷卡吗？", "Can I pay by card?"],
          ["Ich möchte auschecken.", "我想退房。", "I'd like to check out."],
          ["Können Sie mich um 7 Uhr wecken?", "您能7点叫醒我吗？", "Could you wake me at 7?"],
        ]
      },
      {
        type: "text",
        heading: "酒店相关词汇",
        content: "das Hotel — 酒店\ndas Einzelzimmer — 单人间\ndas Doppelzimmer — 双人间\nder Schlüssel — 钥匙\ndie Rezeption — 前台\ndas Frühstück — 早餐\nder Aufzug — 电梯\ndie Nacht — 夜晚（几晚）"
      },
      {
        type: "tip",
        heading: "文化提示",
        content: "德国酒店通常包含早餐（Frühstück）。早餐时间一般是 6:30-10:00。退房时间通常是中午12点前（11:00或12:00）。德国酒店不像美国那样需要额外给小费。"
      }
    ],
    exercises: [
      {
        id: "expr-09-e1",
        type: "multiple-choice",
        questionZh: "\"Ich hätte gern ein Doppelzimmer.\" 的意思是？",
        options: ["我想要单人间", "我想要双人间", "我想要退房", "我有预订"],
        correctAnswer: "我想要双人间",
        explanation: "das Doppelzimmer = double room（双人间）。das Einzelzimmer = single room（单人间）。"
      },
      {
        id: "expr-09-e2",
        type: "multiple-choice",
        questionZh: "问\"每晚多少钱\"应该说？",
        options: ["Was kostet das Hotel?", "Was kostet das Zimmer pro Nacht?", "Wie teuer ist das Frühstück?", "Was kostet der Schlüssel?"],
        correctAnswer: "Was kostet das Zimmer pro Nacht?",
        explanation: "pro Nacht = per night（每晚）。Was kostet das Zimmer pro Nacht? = How much is the room per night?"
      },
      {
        id: "expr-09-e3",
        type: "multiple-choice",
        questionZh: "\"die Rezeption\" 是指酒店的哪个部分？",
        options: ["餐厅", "前台", "电梯", "房间"],
        correctAnswer: "前台",
        explanation: "die Rezeption = reception/front desk（前台）。入住和退房都在前台办理。"
      }
    ]
  },
  {
    id: "expr-10",
    category: "expressions",
    titleZh: "天气与季节",
    titleDe: "Wetter und Jahreszeiten",
    titleEn: "Weather and Seasons",
    description: "学习如何用德语描述天气和讨论季节",
    level: "A1",
    order: 10,
    estimatedMinutes: 8,
    sections: [
      {
        type: "table",
        heading: "天气表达",
        content: "",
        tableHeaders: ["德语", "中文", "英语"],
        tableRows: [
          ["Wie ist das Wetter?", "天气怎么样？", "How is the weather?"],
          ["Es ist warm/kalt/heiß.", "天气暖/冷/热。", "It is warm/cold/hot."],
          ["Die Sonne scheint.", "出太阳了。", "The sun is shining."],
          ["Es regnet.", "下雨了。", "It is raining."],
          ["Es schneit.", "下雪了。", "It is snowing."],
          ["Der Wind weht.", "刮风了。", "The wind is blowing."],
          ["Es ist bewölkt.", "多云。", "It is cloudy."],
          ["Es gibt ein Gewitter.", "有雷暴。", "There is a thunderstorm."],
          ["Es ist neblig.", "有雾。", "It is foggy."],
        ]
      },
      {
        type: "table",
        heading: "四季",
        content: "",
        tableHeaders: ["德语", "中文", "英语", "月份"],
        tableRows: [
          ["der Frühling", "春天", "spring", "März—Mai"],
          ["der Sommer", "夏天", "summer", "Juni—August"],
          ["der Herbst", "秋天", "autumn", "September—November"],
          ["der Winter", "冬天", "winter", "Dezember—Februar"],
        ]
      },
      {
        type: "text",
        heading: "温度表达",
        content: "德国使用摄氏度（Celsius）：\n\nEs sind 25 Grad. (气温25度。)\nEs sind minus 5 Grad. (零下5度。)\nWie viel Grad sind es? (多少度？)\n\n参考：0°C = 32°F, 20°C = 68°F, 30°C = 86°F"
      },
      {
        type: "tip",
        heading: "实用提示",
        content: "谈论天气是德国人最常用的小话题（Smalltalk），和英语文化一样。可以说：\"Schönes Wetter heute, oder?\" (今天天气不错，对吧？) 来开启对话。"
      }
    ],
    exercises: [
      {
        id: "expr-10-e1",
        type: "multiple-choice",
        questionZh: "\"Es regnet.\" 的意思是？",
        options: ["下雪了", "出太阳了", "下雨了", "刮风了"],
        correctAnswer: "下雨了",
        explanation: "regnen = to rain。Es regnet. = It is raining."
      },
      {
        id: "expr-10-e2",
        type: "multiple-choice",
        questionZh: "德国的冬天（der Winter）包括哪几个月？",
        options: ["September—November", "Dezember—Februar", "März—Mai", "Juni—August"],
        correctAnswer: "Dezember—Februar",
        explanation: "der Winter (冬天) = Dezember, Januar, Februar。注意：冬天跨年！"
      },
      {
        id: "expr-10-e3",
        type: "multiple-choice",
        questionZh: "德国使用什么温度单位？",
        options: ["华氏度 (Fahrenheit)", "摄氏度 (Celsius)", "开尔文 (Kelvin)", "两种都用"],
        correctAnswer: "摄氏度 (Celsius)",
        explanation: "德国（和全世界除美国以外）使用摄氏度。Es sind 25 Grad. = 25°C = 77°F。"
      }
    ]
  },
  {
    id: "expr-11",
    category: "expressions",
    titleZh: "业余爱好与休闲",
    titleDe: "Hobbys und Freizeit",
    titleEn: "Hobbies and Free Time",
    description: "学习如何用德语谈论自己的兴趣爱好和休闲活动",
    level: "A1",
    order: 11,
    estimatedMinutes: 8,
    sections: [
      {
        type: "table",
        heading: "谈论爱好",
        content: "",
        tableHeaders: ["德语", "中文", "英语"],
        tableRows: [
          ["Was sind deine Hobbys?", "你的爱好是什么？", "What are your hobbies?"],
          ["Was machst du gern in deiner Freizeit?", "你空闲时喜欢做什么？", "What do you like to do in your free time?"],
          ["Ich spiele gern Fußball.", "我喜欢踢足球。", "I like playing soccer."],
          ["Ich lese gern Bücher.", "我喜欢读书。", "I like reading books."],
          ["Ich höre gern Musik.", "我喜欢听音乐。", "I like listening to music."],
          ["Ich koche gern.", "我喜欢做饭。", "I like cooking."],
          ["Ich reise gern.", "我喜欢旅行。", "I like traveling."],
          ["Ich fotografiere gern.", "我喜欢拍照。", "I like taking photos."],
        ]
      },
      {
        type: "table",
        heading: "常见爱好词汇",
        content: "",
        tableHeaders: ["德语", "中文", "英语"],
        tableRows: [
          ["der Sport", "运动", "sports"],
          ["das Spielen", "玩游戏", "playing (games)"],
          ["das Schwimmen", "游泳", "swimming"],
          ["das Radfahren", "骑自行车", "cycling"],
          ["das Wandern", "徒步", "hiking"],
          ["das Tanzen", "跳舞", "dancing"],
          ["das Malen", "画画", "painting"],
          ["das Singen", "唱歌", "singing"],
        ]
      },
      {
        type: "text",
        heading: "gern 的用法",
        content: "gern 是副词，表示\"乐意地、喜欢\"，放在动词后面：\n\nIch trinke gern Kaffee. (我喜欢喝咖啡。)\nIch spiele gern Tennis. (我喜欢打网球。)\n\n比较级：lieber（更喜欢）\nIch trinke lieber Tee. (我更喜欢喝茶。)\n\n最高级：am liebsten（最喜欢）\nIch trinke am liebsten Wasser. (我最喜欢喝水。)"
      },
      {
        type: "tip",
        heading: "文化提示",
        content: "德国人非常重视工作与生活的平衡（Work-Life-Balance）。周日和假期不工作，用于休闲、运动、与家人朋友相处。户外活动在德国很受欢迎，尤其是徒步（Wandern）和骑自行车（Radfahren）。"
      }
    ],
    exercises: [
      {
        id: "expr-11-e1",
        type: "multiple-choice",
        questionZh: "表达\"我喜欢踢足球\"应该说？",
        options: ["Ich mag Fußball spielen.", "Ich spiele gern Fußball.", "Ich will Fußball.", "Ich habe Fußball gern."],
        correctAnswer: "Ich spiele gern Fußball.",
        explanation: "用 动词 + gern 表达喜欢做某事：Ich spiele gern Fußball. (I like playing soccer.)"
      },
      {
        id: "expr-11-e2",
        type: "multiple-choice",
        questionZh: "\"lieber\" 是 \"gern\" 的什么级？",
        options: ["原级", "比较级（更喜欢）", "最高级（最喜欢）", "否定形式"],
        correctAnswer: "比较级（更喜欢）",
        explanation: "gern → lieber → am liebsten。lieben = 喜欢，lieber = 更喜欢，am liebsten = 最喜欢。"
      },
      {
        id: "expr-11-e3",
        type: "multiple-choice",
        questionZh: "\"Was machst du gern in deiner Freizeit?\" 的意思是？",
        options: ["你周末做什么？", "你的工作是什么？", "你空闲时喜欢做什么？", "你有空吗？"],
        correctAnswer: "你空闲时喜欢做什么？",
        explanation: "die Freizeit = free time（空闲时间）。Was machst du gern in deiner Freizeit? = What do you like to do in your free time?"
      }
    ]
  },
  {
    id: "expr-12",
    category: "expressions",
    titleZh: "打电话",
    titleDe: "Telefonieren",
    titleEn: "Making Phone Calls",
    description: "学习用德语打电话时的常用表达和礼仪",
    level: "A2",
    order: 12,
    estimatedMinutes: 8,
    sections: [
      {
        type: "table",
        heading: "打电话常用语",
        content: "",
        tableHeaders: ["德语", "中文", "英语"],
        tableRows: [
          ["Hier spricht...", "我是...", "This is... speaking"],
          ["Kann ich bitte mit... sprechen?", "请找...接电话好吗？", "Can I speak to... please?"],
          ["Einen Moment, bitte.", "请稍等。", "One moment, please."],
          ["Er/Sie ist nicht da.", "他/她不在。", "He/She is not here."],
          ["Möchten Sie eine Nachricht hinterlassen?", "您要留个口信吗？", "Would you like to leave a message?"],
          ["Ich rufe später noch mal an.", "我稍后再打来。", "I'll call back later."],
          ["Könnten Sie das bitte wiederholen?", "您能再说一遍吗？", "Could you repeat that please?"],
          ["Danke, auf Wiederhören!", "谢谢，再见！(电话)", "Thank you, goodbye!"],
        ]
      },
      {
        type: "text",
        heading: "德国电话礼仪",
        content: "德国人接电话时习惯先报自己的姓名：\n\n\"Schmidt, guten Tag!\" (施密特，您好！)\n而不是像英语说 \"Hello?\"\n\n打电话结束时说 \"Auf Wiederhören\"（再见，电话用语），而不是 \"Auf Wiedersehen\"（再见，面对面用语）。\n\nHören = 听，Wiederhören = 再次听到\nSehen = 看，Wiedersehen = 再次看到"
      },
      {
        type: "tip",
        heading: "实用提示",
        content: "在德国打电话给公司或机构，通常用 Sie（正式）。如果是打给朋友的手机，可以用 du。记住：电话里看不到肢体语言和表情，所以说话要更清晰、更慢一些。"
      }
    ],
    exercises: [
      {
        id: "expr-12-e1",
        type: "multiple-choice",
        questionZh: "德国人接电话时通常先做什么？",
        options: ["说 Hallo", "报自己的姓名", "问对方是谁", "说 Guten Tag"],
        correctAnswer: "报自己的姓名",
        explanation: "德国人接电话习惯先报姓名：\"Müller, guten Tag!\" 而不是简单说 \"Hallo?\""
      },
      {
        id: "expr-12-e2",
        type: "multiple-choice",
        questionZh: "电话中说\"再见\"应该说？",
        options: ["Auf Wiedersehen!", "Tschüss!", "Auf Wiederhören!", "Bis später!"],
        correctAnswer: "Auf Wiederhören!",
        explanation: "电话中说 Auf Wiederhören!（再听到=再见）。面对面说 Auf Wiedersehen!（再看到=再见）。"
      },
      {
        id: "expr-12-e3",
        type: "multiple-choice",
        questionZh: "\"Kann ich bitte mit Herrn Schmidt sprechen?\" 的意思是？",
        options: ["请问施密特先生在吗？", "请问您是施密特先生吗？", "我可以给施密特先生打电话吗？", "施密特先生的电话号码是多少？"],
        correctAnswer: "请问施密特先生在吗？",
        explanation: "mit jemandem sprechen = to speak with someone。Kann ich bitte mit Herrn Schmidt sprechen? = Can I speak with Mr. Schmidt please?"
      }
    ]
  }
];
