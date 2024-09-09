const express = require('express');
const app = express();

const questionsStorage = [
    { id: "0", Question: "遊んじょ", answer: "あそんじよ", answer2: "asonjiyo",},
    { id: "1", Question: "前向きに", answer: "まえむきに", answer2: "maemukini",},
    { id: "2", Question: "一生懸命",  answer: "いっしょうけんめい", answer2: "isshoukenmei",},
    { id: "3", Question: "昼夜", answer: "ちゅうや" , answer2: "chuuya" ,},
    { id: "4", Question: "豆乳", answer: "とうにゅう", answer2: "touniyuu", },
    { id: "5", Question: "雰囲気", answer: "ふんいき" , answer2: "funiki",},
    { id: "6", Question: "目指して", answer: "めざして" , answer2: "mezashite",},
    { id: "7", Question: "出会った", answer: "であった" , answer2: "deatsuta",},
    { id: "8", Question: "落とし物", answer: "おとしもの" , answer2: "otoshimono",},
    { id: "9", Question: "寄り添って", answer: "よりそって" , answer2: "yorisotsute",},
    { id: "10", Question: "胃がん", answer: "いがん" , answer2: "igan",},
    { id: "11", Question: "頭痛", answer: "ずつう", answer2: "zutsuu",},
    { id: "12", Question: "輝き",  answer: "かがやき", answer2: "kagayaki" ,},
    { id: "13", Question: "呼ばる",  answer: "よばる", answer2: "yobaru" ,},
    { id: "14", Question: "女神", answer: "めがみ" , answer2: "megami" ,},
    { id: "15", Question: "今度", answer: "こんど", answer2: "kondo" ,},
    { id: "16", Question: "有名", answer: "ゆうめい" , answer2: "yuumei",},
    { id: "17", Question: "孤高", answer: "ここう" , answer2: "kokou",},
    { id: "18", Question: "薔薇", answer: "ばら" , answer2: "bara",},
    { id: "19", Question: "踊る", answer: "おどる" , answer2: "odoru",},
    { id: "20", Question: "乙女", answer: "おとめ" , answer2: "otome",},
    { id: "21", Question: "東南", answer: "とうなん" , answer2: "tounan",},
    { id: "22", Question: "行く先", answer: "ゆくさき", answer2: "yukusaki",},
    { id: "23", Question: "灼眼", answer: "しゃくがん", answer2: "shakugan",},
    { id: "24", Question: "眼差し",  answer: "まなざし", answer2: "manazashi",},
    { id: "25", Question: "土産", answer: "みやげ" , answer2: "miyage" ,},
    { id: "26", Question: "自転車", answer: "じてんしゃ", answer2: "jitensha", },
    { id: "27", Question: "坂道", answer: "さかみち" , answer2: "sakamachi",},
    { id: "28", Question: "果実", answer: "かじつ" , answer2: "kajitsu",},
    { id: "29", Question: "自動的", answer: "じどてき" , answer2: "jidoteki",},
    { id: "30", Question: "香水", answer: "こすい" , answer2: "kosui",},
    { id: "31", Question: "無邪気", answer: "むじゃき" , answer2: "mujaki",},
    { id: "32", Question: "深め", answer: "ふかめ" , answer2: "fukame",},
    { id: "33", Question: "残る", answer: "のこる", answer2: "nokoru",},
    { id: "34", Question: "周り",  answer: "まわり", answer2: "mawari" ,}, 
    { id: "35", Question: "可愛い",  answer: "かわいい", answer2: "kawaii" ,},
    { id: "36", Question: "速度", answer: "そくど" , answer2: "sokudo" ,},
    { id: "37", Question: "煌めいて", answer: "きらめいて", answer2: "kirameite" ,},
    { id: "38", Question: "予感", answer: "よかん" , answer2: "yokan",},
    { id: "39", Question: "開く", answer: "ひらく" , answer2: "hiraku",},
    { id: "40", Question: "見守って", answer: "みまもって" , answer2: "mimamotsute",},
    { id: "41", Question: "得意", answer: "とくい" , answer2: "tokui",},
    { id: "42", Question: "用事", answer: "ようじ" , answer2: "youji",},
    { id: "43", Question: "掃除", answer: "そうじ" , answer2: "souji",},
    { id: "44", Question: "吸わる", answer: "すわる" , answer2: "suwaru",},
    { id: "45", Question: "怪しい", answer: "あやし" , answer2: "ayashi",},
    { id: "46", Question: "女子", answer: "じょし" , answer2: "joshi",},
    { id: "47", Question: "付き合う", answer: "つきあう", answer2: "zutsuu",},
    { id: "48", Question: "彼氏",  answer: "かがやき", answer2: "kagayaki" ,},
    { id: "49", Question: "寿司",  answer: "すし", answer2: "sushi" ,},
    { id: "50", Question: "習い", answer: "めがみ" , answer2: "megami" ,},
    { id: "51", Question: "集まり", answer: "あつまり", answer2: "atsumari" ,},
    { id: "52", Question: "意外", answer: "いがい" , answer2: "igai",},
    { id: "53", Question: "売ってる", answer: "うってる" , answer2: "utsuteru",},
    { id: "54", Question: "部活", answer: "ぶかつ" , answer2: "bukatsu",},
    { id: "55", Question: "月兎", answer: "つきと" , answer2: "tsukito",},
    { id: "56", Question: "牛乳", answer: "ぎゅうにゅう" , answer2: "gyunyuu",},
    { id: "57", Question: "巨乳", answer: "きよんにゅう" , answer2: "kyonyuu",},
    { id: "58", Question: "店内", answer: "てんない", answer2: "tennai",},
    { id: "59", Question: "青空",  answer: "あおぞら", answer2: "aozora" ,},
    { id: "60", Question: "店長",  answer: "てんちょう", answer2: "tenchou" ,},
    { id: "61", Question: "ご利用", answer: "ごりよう" , answer2: "goriyou" ,},
    { id: "62", Question: "捨てる", answer: "すてる", answer2: "suteru" ,},
    { id: "63", Question: "空気", answer: "くうき" , answer2: "kuuki",},
    { id: "64", Question: "太もも", answer: "ふともも" , answer2: "kokou",},
    { id: "65", Question: "足音", answer: "あしおと" , answer2: "ashioto",},
    { id: "66", Question: "走る", answer: "はしる" , answer2: "hashiru",},
    { id: "67", Question: "先輩", answer: "せんぱい" , answer2: "senpai",},
    { id: "68", Question: "正しい", answer: "ただしい" , answer2: "tadashi",},
    { id: "69", Question: "中指", answer: "なかゆび", answer2: "nakayubi",},
    { id: "70", Question: "近い", answer: "ちかい", answer2: "ちかい",},
    { id: "71", Question: "字",  answer: "じ", answer2: "ji",},
    { id: "72", Question: "実は", answer: "じつは" , answer2: "jitsuha" ,},
    { id: "73", Question: "槍", answer: "やり", answer2: "yari", },
    { id: "74", Question: "科学", answer: "かがく" , answer2: "kagaku",},
    { id: "75", Question: "扉", answer: "とびら" , answer2: "tobira",},
    { id: "76", Question: "身体", answer: "しんたい" , answer2: "shintai",},
    { id: "77", Question: "挫ける", answer: "くじける" , answer2: "kujikeru",},
    { id: "78", Question: "愛しい", answer: "いとしい" , answer2: "itoshi",},
    { id: "79", Question: "強がる", answer: "つよがる" , answer2: "tsuyogaru",},
    { id: "80", Question: "心地", answer: "ここち", answer2: "kokochi",},
    { id: "81", Question: "自信",  answer: "じしん", answer2: "jishin" ,},
    { id: "82", Question: "会えず",  answer: "あえず", answer2: "aezu" ,},
    { id: "83", Question: "信じる", answer: "しんじる" , answer2: "shinjiru" ,},
    { id: "84", Question: "邪魔", answer: "じゃま", answer2: "jama" ,},
    { id: "85", Question: "生意気", answer: "なまいき" , answer2: "namaiki",},
    { id: "86", Question: "清浄", answer: "せいじょう" , answer2: "seijyou",},
    { id: "87", Question: "見逃さないで", answer: "みのがさないで" , answer2: "minogasanaide",},
    { id: "88", Question: "暖かい", answer: "あたたかい" , answer2: "atsutakai",},
    { id: "89", Question: "温め", answer: "あたため" , answer2: "atatame",},
    { id: "90", Question: "現実", answer: "げんじつ" , answer2: "genjitsu",},
    { id: "91", Question: "妄想", answer: "もうそう" , answer2: "mousou",},
    { id: "92", Question: "流れた", answer: "ながれた" , answer2: "nagareta",},
    { id: "93", Question: "初見", answer: "しょけん" , answer2: "shiyoken",},
    { id: "94", Question: "疲れた", answer: "つかれた", answer2: "tsukareta",},
    { id: "95", Question: "像う",  answer: "ぞう", answer2: "zou" ,},
    { id: "96", Question: "癒し",  answer: "いやし", answer2: "iyashi" ,},
    { id: "97", Question: "趣味", answer: "しゅみ" , answer2: "shiyumi" ,},
    { id: "98", Question: "時計",  answer: "とけい", answer2: "tokei" ,},
    { id: "99", Question: "運命", answer: "うんめい" , answer2: "unmei" ,},
    { id: "100", Question: "漫画家", answer: "まんがっか", answer2: "mangatsuka",},
    { id: "101", Question: "電気者", answer: "でんきしゃ", answer2: "denkisha",},
    { id: "102", Question: "社会",  answer: "うんめい", answer2: "unmei",},
    { id: "103", Question: "農林", answer: "のうりん" , answer2: "nourin" ,},
    { id: "104", Question: "恐い", answer: "こわい", answer2: "kowai", },
    { id: "105", Question: "困る", answer: "こまる" , answer2: "komaru",},
    { id: "106", Question: "乗る", answer: "のる" , answer2: "noru",},
    { id: "107", Question: "舐め", answer: "舐め" , answer2: "name",},
    { id: "108", Question: "屋上", answer: "おくじょ" , answer2: "okujyo",},
    { id: "109", Question: "好み", answer: "このみ" , answer2: "konomi",},
    { id: "110", Question: "離れる", answer: "はなれる" , answer2: "hanareru",},
    { id: "111", Question: "地獄", answer: "じごく", answer2: "jigoku",},
    { id: "112", Question: "砂糖",  answer: "さとう", answer2: "satou" ,},
    { id: "113", Question: "橋",  answer: "はし", answer2: "hashi" ,},
    { id: "114", Question: "目玉焼き", answer: "めだまやき" , answer2: "medamayaki" ,},
    { id: "115", Question: "洗濯機", answer: "せんたくき", answer2: "sentakuki" ,},
    { id: "116", Question: "激しい", answer: "はげしい" , answer2: "hageshii",},
    { id: "117", Question: "雑穀", answer: "ざっこく" , answer2: "zakkoku",},
    { id: "118", Question: "性格", answer: "せいかく" , answer2: "seikaku",},
    { id: "119", Question: "性", answer: "せい" , answer2: "sei",},
    { id: "120", Question: "この漢字の音読みは何ですか：米", answer: "まい" , answer2: "mai",},
    { id: "121", Question: "予定", answer: "よてい" , answer2: "yotei",},
    { id: "122", Question: "嫌", answer: "いや", answer2: "いや",},
    { id: "123", Question: "返信", answer: "へんしん", answer2: "henshin",},
    { id: "124", Question: "閑静",  answer: "かんせい", answer2: "kansei",},
    { id: "125", Question: "今年", answer: "ことし" , answer2: "kotoshi" ,},
    { id: "126", Question: "都会", answer: "とかい", answer2: "tokai", },
    { id: "127", Question: "陰口", answer: "かげぐち" , answer2: "kageguchi",},
    { id: "128", Question: "迷子", answer: "まいご" , answer2: "maigo",},
    { id: "129", Question: "貰う", answer: "もらう" , answer2: "morau",},
    { id: "130", Question: "命", answer: "いのち" , answer2: "inochi",},
    { id: "131", Question: "包め", answer: "つつめ" , answer2: "tsutsume",},
    { id: "132", Question: "感慨", answer: "かんがい" , answer2: "kangai",},
    { id: "133", Question: "相棒", answer: "あいぼ", answer2: "aibo",},
    { id: "134", Question: "宿敵",  answer: "しゅくてき", answer2: "shukuteki" ,},
    { id: "135", Question: "商品",  answer: "しょうひん", answer2: "shyouhin" ,},
    { id: "136", Question: "平民", answer: "へいみん" , answer2: "heimin" ,},
    { id: "137", Question: "旅", answer: "たび", answer2: "tabi" ,},
    { id: "138", Question: "旅人", answer: "たびびと" , answer2: "tabibito",},
    { id: "139", Question: "涙", answer: "なみだ" , answer2: "namida",},
    { id: "140", Question: "都", answer: "みやこ" , answer2: "miyako",},
    { id: "141", Question: "遊女", answer: "ゆうじょ" , answer2: "yuujyo",},
    { id: "142", Question: "聴解", answer: "ちょうかい" , answer2: "choukai",},
    { id: "143", Question: "霞める", answer: "かすめる" , answer2: "kasumeru",},
    { id: "144", Question: "輪姦", answer: "りんかん" , answer2: "rinkan",},
    { id: "145", Question: "汚い", answer: "きたない" , answer2: "kitanai",},
    { id: "146", Question: "秒", answer: "びょう" , answer2: "biyou",},
    { id: "147", Question: "頭痛", answer: "ずつう", answer2: "zutsuu",},
    { id: "148", Question: "学院",  answer: "がくいん", answer2: "gakuin" ,},
    { id: "149", Question: "満足",  answer: "まんぞく", answer2: "manzoku" ,},
    { id: "150", Question: "人参", answer: "にんじん" , answer2: "ninjin" ,},
    { id: "151", Question: "真青", answer: "まっさお", answer2: "matsusao" ,},
    { id: "152", Question: "足音", answer: "あしおと" , answer2: "ashioto",},
    { id: "153", Question: "この漢字の音読みは何ですか： 常", answer: "じょう" , answer2: "jiyou",},
    { id: "154", Question: "成功", answer: "せいこ" , answer2: "seiko",},
    { id: "155", Question: "親", answer: "おや" , answer2: "oya",},
    { id: "156", Question: "母親", answer: "ははおや" , answer2: "hahaoya",},
    { id: "157", Question: "現金", answer: "げんきん" , answer2: "genkin",},
    { id: "158", Question: "要る", answer: "いる", answer2: "iru",},
    { id: "159", Question: "言葉遣い",  answer: "ことばづかい", answer2: "kotobadzukai" ,},
    { id: "160", Question: "滝",  answer: "たき", answer2: "taki" ,}, 
    { id: "161", Question: "虎", answer: "とら" , answer2: "tora" ,},
    { id: "162", Question: "貯金", answer: "ちょうきん", answer2: "choukin" ,},
    { id: "163", Question: "給料", answer: "きゅうりょう" , answer2: "kiyuriyou",},
    { id: "164", Question: "この漢字の音読みは何ですか： 町", answer: "ちょう" , answer2: "chou",},
    { id: "165", Question: "出発", answer: "しゅっぱつ" , answer2: "shiyutsupatsu",}, 
    { id: "166", Question: "連絡", answer: "れんらく" , answer2: "renraku",},
    { id: "167", Question: "舞踏会", answer: "ぶどうかい" , answer2: "budoukai",},
    { id: "168", Question: "重量", answer: "じゅうりょう" , answer2: "jiyuuriyou",},
    { id: "169", Question: "分ける", answer: "わける", answer2: "wakeru",},
    { id: "170", Question: "暇", answer: "ひま", answer2: "hima",},
    { id: "171", Question: "年",  answer: "とし", answer2: "toshi",},
    { id: "172", Question: "囲ま", answer: "かこま" , answer2: "kakoma" ,},
    { id: "173", Question: "目覚", answer: "めざめ", answer2: "mezame", },
    { id: "174", Question: "尽くし", answer: "つくし" , answer2: "tsukushi",},
    { id: "175", Question: "繋い", answer: "つない" , answer2: "tsunai",},
    { id: "176", Question: "向け", answer: "むけ" , answer2: "muke",},
    { id: "177", Question: "響く", answer: "ひびく" , answer2: "hibiku",},　
    { id: "178", Question: "真暗", answer: "まっくら" , answer2: "matsukura",}, 
    { id: "179", Question: "米", answer: "こめ" , answer2: "kome",},
    { id: "180", Question: "上機嫌", answer: "じょうきげん", answer2: "jiyoukigen",}, //
    { id: "181", Question: "祈り",  answer: "いのり", answer2: "inori" ,},
    { id: "182", Question: "抱き締める",  answer: "だきしめる", answer2: "dakishimeru" ,},
    { id: "183", Question: "週末", answer: "しゅうまつ" , answer2: "shiyuumatsu" ,},
    { id: "184", Question: "豆乳", answer: "とうにゅう", answer2: "tounyuu" ,},
    { id: "185", Question: "拝む", answer: "おがむ" , answer2: "ogamu",},
    { id: "186", Question: "孤高", answer: "ここう" , answer2: "kokou",},
    { id: "187", Question: "薔薇", answer: "ばら" , answer2: "bara",},
    { id: "188", Question: "踊る", answer: "おどる" , answer2: "odoru",},
    { id: "189", Question: "乙女", answer: "おとめ" , answer2: "otome",},
    { id: "190", Question: "場所", answer: "ばしょ" , answer2: "bashiyo",},
    { id: "191", Question: "ご機嫌", answer: "ごきげん" , answer2: "gokigen",},
    { id: "192", Question: "計画", answer: "けいかく" , answer2: "keikaku",},
    { id: "193", Question: "降りる", answer: "おりる" , answer2: "oriru",},
    { id: "194", Question: "頭痛", answer: "ずつう", answer2: "zutsuu",},
    { id: "195", Question: "微笑み",  answer: "ほほえみ", answer2: "hohoemi" ,},
    { id: "196", Question: "笑顔",  answer: "えがお", answer2: "egao" ,},
    { id: "197", Question: "お尻", answer: "おしり" , answer2: "oshiri" ,},
    { id: "198", Question: "最も",  answer: "もっとも", answer2: "motsutomo" ,},
    { id: "199", Question: "届", answer: "とどけ" , answer2: "todoke" ,},
    { id: "200", Question: "無職", answer: "むしょく" , answer2: "mushiyoku",},
    { id: "201", Question: "転生", answer: "てんせい" , answer2: "tensei",},
    { id: "202", Question: "種", answer: "たね" , answer2: "tane",},
    { id: "203", Question: "悦楽", answer: "えつらく" , answer2: "etsuraku",},
    { id: "204", Question: "娯楽", answer: "ごらく" , answer2: "goraku",},
    { id: "205", Question: "正解", answer: "せいかい" , answer2: "seikai",},
    { id: "206", Question: "解", answer: "かい" , answer2: "kai",},
    { id: "207", Question: "鍵", answer: "かぎ" , answer2: "kagi",},
    { id: "208", Question: "溜まる", answer: "たまる" , answer2: "tamaru",},
    { id: "209", Question: "動画", answer: "どうが", answer2: "douga",},
    { id: "210", Question: "写真",  answer: "しゃしん", answer2: "shashin" ,},
    { id: "211", Question: "正直",  answer: "しょうじき", answer2: "shiyoujiki" ,},
    { id: "212", Question: "玩具", answer: "おもちゃ" , answer2: "omocha" ,},
    { id: "213", Question: "満足",  answer: "まんぞく", answer2: "manzoku" ,},
    { id: "214", Question: "面倒", answer: "めんどう" , answer2: "mendou" ,},
    { id: "215", Question: "人柄", answer: "ひとがら" , answer2: "hitogara",},
    { id: "216", Question: "優秀", answer: "ゆうしゅう" , answer2: "yuushiyuu",},
    { id: "217", Question: "食材", answer: "しょくざい" , answer2: "shiyokuzai",},
    { id: "218", Question: "食料", answer: "しょくりょう" , answer2: "shiyokuriyou",},
    { id: "219", Question: "爽やか", answer: "さわやか" , answer2: "sawayaka",},
    { id: "220", Question: "洗い", answer: "あらい" , answer2: "arai",},
    { id: "221", Question: "意気込む", answer: "いきごむ" , answer2: "ikigomu",},
    { id: "222", Question: "偶然", answer: "ぐうぜん" , answer2: "guuzen",},
    { id: "223", Question: "文法", answer: "ぶんぽう" , answer2: "bunpou",}, //
    { id: "224", Question: "炎症", answer: "えんしょう", answer2: "enshiyou",},
    { id: "225", Question: "勇気",  answer: "ゆうき", answer2: "yuuki" ,},
    { id: "226", Question: "雷",  answer: "かみなり", answer2: "kaminari" ,},
    { id: "227", Question: "相手", answer: "あいて" , answer2: "aite" ,},
    { id: "228", Question: "通り",  answer: "とおり", answer2: "toori" ,},
    { id: "229", Question: "数学", answer: "すうがく" , answer2: "suugaku" ,},
    { id: "230", Question: "麒麟", answer: "きりん" , answer2: "kirin" ,},
    { id: "231", Question: "無職", answer: "むし" , answer2: "mushi",},
    { id: "232", Question: "不器", answer: "ぶき" , answer2: "buki",},
    { id: "233", Question: "朝食", answer: "ちょうそく" , answer2: "chiyousoku",},
    { id: "234", Question: "闘員", answer: "とういん" , answer2: "touin",}, //
    { id: "235", Question: "存在", answer: "そんざい", answer2: "sonzai",},
    { id: "236", Question: "午後",  answer: "ごご", answer2: "gogo" ,},
    { id: "237", Question: "誇張",  answer: "こちょう", answer2: "kochiyou" ,},
    { id: "238", Question: "自己紹介", answer: "じこしょうかい" , answer2: "jikoshiyoukai" ,},
    { id: "239", Question: "挨拶",  answer: "あいさつ", answer2: "aisatsu" ,},
    { id: "240", Question: "と申します", answer: "ともうします" , answer2: "tomoushimasu" ,},
    { id: "241", Question: "腹痛", answer: "ふくつ" , answer2: "fukutsu" ,},
    { id: "242", Question: "庭", answer: "にわ" , answer2: "niwa" ,},
    { id: "243", Question: "盛り", answer: "もり" , answer2: "mori" ,},
    { id: "244", Question: "戦車", answer: "せんしゃ" , answer2: "senshiya" ,},
    { id: "245", Question: "この漢字の音読みなんですか：古", answer: "こ" , answer2: "ko" ,},
    { id: "246", Question: "Type english definition for this word, otherwise use hiragana: 台風", answer: "たいふう" , answer2: "typhoon" ,},
    { id: "247", Question: "風邪", answer: "かぜ" , answer2: "kaze" ,},
    { id: "248", Question: "戸惑い", answer: "とまどい" , answer2: "tomadoi" ,},
    { id: "249", Question: "南極", answer: "なんきょく" , answer2: "nankiyoku" ,},
    { id: "250", Question: "西", answer: "にし" , answer2: "nishi" ,},
    { id: "251", Question: "対象", answer: "たいしょう" , answer2: "taishiyou" ,},
    { id: "252", Question: "初夏", answer: "しょか" , answer2: "shiyoka" ,},
    { id: "253", Question: "俊吾", answer: "しゅんご" , answer2: "shungo" ,},
    { id: "254", Question: "恵", answer: "めぐみ" , answer2: "megumi" ,},
    { id: "255", Question: "祝福", answer: "しゅくふく" , answer2: "shukufuku" ,},
    { id: "256", Question: "孤独", answer: "こどく" , answer2: "kodoku" ,},
    { id: "257", Question: "夕景", answer: "ゆうけい" , answer2: "yuukei" ,},
    { id: "258", Question: "宿命", answer: "しゅくめい" , answer2: "shukumei" ,},
    { id: "259", Question: "果て", answer: "はて" , answer2: "hate" ,},
    { id: "260", Question: "気高き", answer: "けだかき" , answer2: "kedakaki" ,},
    { id: "261", Question: "高貴なる", answer: "こうきなる" , answer2: "koukinaru" ,},
    { id: "262", Question: "臆病者", answer: "おくびょうしゃ" , answer2: "okubiyoushiya" ,},
    { id: "263", Question: "幻想", answer: "げんそう" , answer2: "gensou" ,},
    { id: "264", Question: "紅", answer: "べに" , answer2: "beni" ,},
    { id: "265", Question: "水晶", answer: "すいしょう" , answer2: "suishiyou" ,},
    { id: "266", Question: "荷物", answer: "にもつ" , answer2: "nimotsu" ,},
    { id: "267", Question: "嫁", answer: "よめ" , answer2: "yome" ,},
    { id: "268", Question: "妻", answer: "つま" , answer2: "tsuma" ,},
    { id: "269", Question: "宮殿", answer: "きゅでん" , answer2: "kiyuden" ,},
    { id: "270", Question: "晴れ", answer: "はれ" , answer2: "hare" ,},
    { id: "271", Question: "獣", answer: "けもの" , answer2: "kemono" ,},
    { id: "272", Question: "闇", answer: "やみ" , answer2: "yami" ,},
    { id: "273", Question: "手首", answer: "てくび" , answer2: "tekubi" ,},
    { id: "274", Question: "歌手", answer: "かしゅ" , answer2: "kashiyu" ,},
    { id: "275", Question: "日常", answer: "にちじょう" , answer2: "nichijiyou" ,},
    { id: "276", Question: "真紅", answer: "しんく" , answer2: "shinku" ,},
    { id: "277", Question: "研究", answer: "けんきゅう" , answer2: "kenkiyuu" ,},
    { id: "278", Question: "喉", answer: "のど" , answer2: "nodo" ,},
    { id: "279", Question: "背中", answer: "せなか" , answer2: "senaka" ,},
    { id: "280", Question: "見舞い", answer: "みまい" , answer2: "mimai" ,},
    { id: "281", Question: "恥じらい", answer: "はじらい" , answer2: "hajirai" ,},
    { id: "282", Question: "切ない", answer: "せつない" , answer2: "setsunai" ,},
    { id: "283", Question: "神経", answer: "しんけい" , answer2: "shinkei" ,},
    { id: "284", Question: "大統領", answer: "だいとうりょう" , answer2: "daitouriyou" ,},
    { id: "285", Question: "馬", answer: "うま" , answer2: "uma" ,},
    { id: "286", Question: "島", answer: "しま" , answer2: "shima" ,},
    { id: "287", Question: "鳥", answer: "とり" , answer2: "tori" ,},
    { id: "288", Question: "泳ぐ", answer: "およぐ" , answer2: "oyogu" ,},
    { id: "289", Question: "宿題", answer: "しゅくだい" , answer2: "shiyukudai" ,},
    { id: "290", Question: "鋼", answer: "はがね" , answer2: "hagane" ,},
    { id: "291", Question: "人魚", answer: "にんぎょ" , answer2: "ningiyo" ,},
    { id: "292", Question: "ご褒美", answer: "ごほうび" , answer2: "gohoubi" ,},
    { id: "293", Question: "上司", answer: "じょうし" , answer2: "jiyoushi" ,},
    { id: "294", Question: "強化", answer: "きようか" , answer2: "kiyouka" ,},
    { id: "295", Question: "毒", answer: "どく" , answer2: "doku" ,},
    { id: "296", Question: "騎士", answer: "きし" , answer2: "kishi" ,},
    { id: "297", Question: "電話", answer: "でんわ" , answer2: "denwa" ,},
    { id: "298", Question: "性能", answer: "せいの" , answer2: "seino" ,},
    { id: "299", Question: "狂乱", answer: "きょうらん" , answer2: "kiyouran" ,},
    { id: "300", Question: "Plain causitive form of 言う", answer: "いわせる" , answer2: "iwaseru",},
    { id: "301", Question: "Plain negative causitive form of 言う", answer: "いわせない" , answer2: "iwasenai",},
    { id: "302", Question: "Past negative form of 言う", answer: "言わなかった" , answer2: "iwanakatsuta",},
    { id: "303", Question: "Te form of 言う", answer: "言って" , answer2: "itsute",},
    { id: "304", Question: "Past polite form of 描く", answer: "描きました" , answer2: "egakimashita",},
    { id: "305", Question: "Past tense of 描く", answer: "描いた" , answer2: "egaita",},
    { id: "306", Question: "Te form of 描く", answer: "描いて" , answer2: "egaite",},
    { id: "307", Question: "Present negative polite form of 描く", answer: "描きません" , answer2: "egakimasen",},
    { id: "308", Question: "Present negative form of 買う", answer: "買わない" , answer2: "kawanai",},
    { id: "309", Question: "Te form of 買う", answer: "買って", answer2: "katsute",},
    { id: "310", Question: "Past plain form of 買う",  answer: "買った", answer2: "katsuta" ,},
    { id: "311", Question: "Potential negative form of 買う",  answer: "買えない", answer2: "kaenai" ,},
    { id: "312", Question: "Conditional form of 借りる", answer: "かりたら" , answer2: "karitara" ,},
    { id: "313", Question: "Present form of 借りる",  answer: "かります", answer2: "kariru" ,},
    { id: "314", Question: "Negative causitive form of 借りる", answer: "借りさせない" , answer2: "karisasenai" ,},
    { id: "315", Question: "Negative potential form of 借りる", answer: "借りられない" , answer2: "karirarenai",},
    { id: "316", Question: "Negative conditional from of 着る", answer: "きなかったら" , answer2: "kinakatsutara",},
    { id: "317", Question: "Negative provisional form of 着る", answer: "きなければ" , answer2: "kinakereba",},
    { id: "318", Question: "Past polite form of 着る", answer: "きました" , answer2: "kimashita",},
    { id: "319", Question: "Past plain form of 着る", answer: "きた" , answer2: "kita",},
    { id: "320", Question: "Present negative polite form of 聞く", answer: "ききません" , answer2: "kikimasen",},
    { id: "321", Question: "Past plain tense of 聞く", answer: "きいた" , answer2: "kiita",},
    { id: "322", Question: "Provisional condition form of 聞く", answer: "きけば" , answer2: "kikeba",},
    { id: "323", Question: "Conditional form of 聞く", answer: "きいたら" , answer2: "kiitara",}, //
    { id: "324", Question: "Polite form of する", answer: "します", answer2: "shimasu",},
    { id: "325", Question: "Past polite form of する",  answer: "しました", answer2: "shimashita" ,},
    { id: "326", Question: "potential form of する",  answer: "できる", answer2: "dekiru" ,},
    { id: "327", Question: "passive form of する", answer: "される" , answer2: "sareru" ,},
    { id: "328", Question: "present negative form of 思う",  answer: "おもいわない", answer2: "omoiwanai" ,},
    { id: "329", Question: "present negative polite form of 思う", answer: "おもいません" , answer2: "omoimasen" ,},
    { id: "330", Question: "past plain form of 思う", answer: "おもった" , answer2: "omotsuta" ,},
    { id: "331", Question: "conditional form of 思う", answer: "おもったら" , answer2: "omotsutara",},
    { id: "332", Question: "present progressive form of 思う", answer: "おもっている" , answer2: "omotsuteiru",},
    { id: "333", Question: "Te form plus the command form(authority) of 座る", answer: "すわてなさい" , answer2: "suwatenasai",},
    { id: "334", Question: "Te form of 消す", answer: "けして" , answer2: "keshite",}, //
    { id: "335", Question: "Present polite form of 見る", answer: "みます", answer2: "mimasu",},
    { id: "336", Question: "Imperative form of 見る",  answer: "みろ", answer2: "miro" ,},
    { id: "337", Question: "Past plain form of 見る",  answer: "みた", answer2: "みた" ,},
    { id: "338", Question: "Present progressive form of 見る", answer: "みている" , answer2: "miteiru" ,},
    { id: "339", Question: "Present negative form of 会う",  answer: "あうわない", answer2: "auwanai" ,},
    { id: "340", Question: "Present polite form of 会う", answer: "あいます" , answer2: "aimasu" ,},
    { id: "341", Question: "Past plain form of 会う", answer: "あうった" , answer2: "autsuta" ,},
    { id: "342", Question: "Past negative form of 会う", answer: "あうわなかった" , answer2: "auwanakatsuta" ,},
    { id: "343", Question: "Plain presumpative form of 行く", answer: "いこう" , answer2: "ikou" ,},
    { id: "344", Question: "Plain imperative form of 行く", answer: "いけ" , answer2: "ike" ,},
    { id: "345", Question: "Potential negative form of 行く", answer: "いけない" , answer2: "ikenai" ,},
    { id: "346", Question: "Presumpative polite(to do)suru form of 行く", answer: "いきましょう" , answer2: "ikimashiyou" ,},
    { id: "347", Question: "Present polite form of 泳ぐ", answer: "およぎます" , answer2: "oyogimasu" ,},
    { id: "348", Question: "Present negative form of 泳ぐ", answer: "おおよがない" , answer2: "oyoganai" ,},
    { id: "349", Question: "Present progressive form of 泳ぐ", answer: "およいでいる" , answer2: "oyoideiru" ,},
    { id: "350", Question: "Imperative form of 泳ぐ", answer: "およげ" , answer2: "oyoge" ,},
    { id: "351", Question: "Negative polite form of 歌う", answer: "うたいません" , answer2: "utaimasen" ,},
    { id: "352", Question: "Present polite form of 歌う", answer: "うたいます" , answer2: "utaimasu" ,},
    { id: "353", Question: "Imperative plain form of 歌う", answer: "うたえ" , answer2: "utae" ,},
    { id: "354", Question: "Presumptive polite suru (To do) form of 歌う", answer: "うたいましょう" , answer2: "utaimashiyou" ,},
    { id: "355", Question: "Past indicative form of 遊ぶ", answer: "あそんだ" , answer2: "あそんだ" ,},
    { id: "356", Question: "Present polite form of 遊ぶ", answer: "あそびます" , answer2: "asobimasu" ,},
    { id: "357", Question: "Present negative of 遊ぶ", answer: "あそばない" , answer2: "asobanai" ,},
    { id: "358", Question: "Presumptive form of 遊ぶ", answer: "あそびましょう" , answer2: "asobimashiyou" ,},
    { id: "359", Question: "Present plain progressive form of 遊ぶ", answer: "あそんでいる" , answer2: "asondeiru" ,},
    { id: "360", Question: "Present progressive polite form of 遊ぶ", answer: "ああそんでいます" , answer2: "asondeimasu" ,},
    { id: "361", Question: "Present polite form of 書く", answer: "かきます" , answer2: "kakimasu" ,},
    { id: "362", Question: "Present negative (suru) form of 書く", answer: "かきできない" , answer2: "kakidekinai" ,},
    { id: "363", Question: "Present negative polite form of 書く", answer: "かきません" , answer2: "kakimasen" ,},
    { id: "364", Question: "Past indicative of 書く", answer: "かいた" , answer2: "kaita" ,},
    { id: "365", Question: "Present polite(to do) form 抱く", answer: "だきします" , answer2: "dakishimasu" ,},
    { id: "366", Question: "Present polite form of 抱く", answer: "だきます" , answer2: "dakimasu" ,},
    { id: "367", Question: "Imperative plus command form of 抱く", answer: "だきなさい" , answer2: "dakinasai" ,},
    { id: "368", Question: "Imperative form of 抱く", answer: "だいている" , answer2: "daiteiru" ,},
    { id: "369", Question: "Present polite form of 答える", answer: "こたえます" , answer2: "kotaemasu" ,},
    { id: "370", Question: "Present negative form of 答える", answer: "こたえない" , answer2: "kotaenai" ,},
    { id: "371", Question: "Imperative form of 答える", answer: "こたえろ" , answer2: "kotaero" ,},
    { id: "372", Question: "Past negative form of 答える", answer: "こえなかった" , answer2: "kotaenakatsuta" ,},
    { id: "373", Question: "Present progressive form of 待つ", answer: "まっている" , answer2: "matsuteiru" ,},
    { id: "374", Question: "Imperative form of 待つ", answer: "まって" , answer2: "matsute" ,},
    { id: "375", Question: "Te form plus command form of 待つ", answer: "まってなさい" , answer2: "matsutenasai" ,},
    { id: "376", Question: "Plain command form of 待つ", answer: "まちなさい" , answer2: "machinasai" ,},
    { id: "377", Question: "Present progressive form of 待つ", answer: "まっている" , answer2: "matsuteiru" ,},
    { id: "378", Question: "Present polite from of　洗う", answer: "あらいます" , answer2: "araimasu" ,},
    { id: "379", Question: "Present negative form of 洗う", answer: "あらわない" , answer2: "arawanai" ,},
    { id: "380", Question: "Past informal tense of 洗う", answer: "洗った" , answer2: "aratsuta" ,},
    { id: "381", Question: "Imperative tense of 洗う", answer: "洗え" , answer2: "arae" ,},
    { id: "382", Question: "Present plain tense of あげ", answer: "あげる" , answer2: "ageru" ,},
    { id: "383", Question: "Potential plain form of あげ", answer: "あげられる" , answer2: "agerareru" ,},
    { id: "384", Question: "Potential negative form of あげ", answer: "あげられない" , answer2: "agerarenai" ,},
    { id: "385", Question: "Imperative tense of あげ", answer: "あげて" , answer2: "agete" ,},
    { id: "386", Question: "Present progressive form of あげ", answer: "あげている" , answer2: "ageteiru" ,},
    { id: "387", Question: "Potential plain form of 聞く", answer: "きける" , answer2: "kikeru" ,},
    { id: "388", Question: "Causitive form of 聞く", answer: "きかせる" , answer2: "kikaseru" ,},
    { id: "389", Question: "Present polite negative form of 聞く", answer: "ききません" , answer2: "kikimasen" ,},
    { id: "390", Question: "Present progressive form of 聞く", answer: "きいている" , answer2: "kiiteiru" ,},
    { id: "391", Question: "Present negative form of 貰う", answer: "もらわない" , answer2: "morawanai" ,},
    { id: "392", Question: "Present polite form of 貰う", answer: "もらいます" , answer2: "moraimasu" ,},
    { id: "393", Question: "Present progressive polite form of 貰う", answer: "もらっています" , answer2: "moratsuteimasu" ,},
    { id: "394", Question: "Potential form of 貰う", answer: "もらえば" , answer2: "moraeba" ,},
    { id: "395", Question: "Present progressive form of　貰う", answer: "もらっている" , answer2: "moratsuteiru" ,},
    { id: "396", Question: "Present progressive form of 食べる", answer: "たべている" , answer2: "たべている" ,},
    { id: "397", Question: "Provisional forn 食べる", answer: "たべれば" , answer2: "tabereba" ,},
    { id: "398", Question: "Provisional negative form of 食べる", answer: "たべなければ" , answer2: "tabenakereba" ,},
    { id: "399", Question: "Conditional form of 食べる", answer: "たべたら" , answer2: "tabetara" ,},
    { id: "400", Question: "訛り", answer: "なまり" , answer2: "namari" ,},
    { id: "401", Question: "援助", answer: "えんじょ" , answer2: "enjiyo" ,},
    { id: "402", Question: "食事", answer: "しょくじ" , answer2: "shokuji" ,},
    { id: "403", Question: "痴漢", answer: "ちかん", answer2: "chikan",},
    { id: "404", Question: "ストレス", answer: "すとれす", answer2: "stress",},
    { id: "405", Question: "成人", answer: "せいじん", answer2: "seijin",},
    { id: "406", Question: "ご利用", answer: "ごりよう", answer2: "goriyou",}
    { id: "407", Question: "暴言", answer: "ぼうげん", answer2: "bougen",}
];

// Welcome message at the root route
app.get('/', (req, res) => {
  res.send('Welcome to japanese language API! Use /api/questions to get all questions or /api/questions/:id to return a specific question.');
});

// Endpoint to get all questions
app.get('/api/questions', (req, res) => {
  res.json(questionsStorage);
});

// Endpoint to get a question by ID
app.get('/api/questions/:id', (req, res) => {
  const question = questionsStorage.find(q => q.id === req.params.id);
  if (question) {
    res.json(question);
  } else {
    res.status(404).send('Question not found');
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
