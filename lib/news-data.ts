export interface NewsItem {
  src: string;
  hant: string;
  hans: string;
  en: string;
  ms: string;
  link: string;
}

export const newsData: NewsItem[] = [
  {
    src: 'MoneyDJ 理財網',
    hant: '葡萄王旗下葡眾海外佈局迎全新階段，搶攻大馬商機',
    hans: '葡萄王旗下葡众海外布局迎全新阶段，抢攻大马商机',
    en: "Grape King's Pro-Partner Enters New Overseas Phase, Targets Malaysia",
    ms: 'Pro-Partner Grape King Masuki Fasa Baharu Luar Negara, Sasar Malaysia',
    link: 'https://www.moneydj.com/KMDJ/News/NewsViewer.aspx?a=fdbbd6b5-50fa-4df4-ba1b-3c6aaee8186d',
  },
  {
    src: '工商時報',
    hant: '葡萄王拓海外版圖　進軍馬國',
    hans: '葡萄王拓海外版图　进军马国',
    en: 'Grape King Expands Overseas Territory, Enters Malaysian Market',
    ms: 'Grape King Kembangkan Wilayah Luar Negara, Masuki Pasaran Malaysia',
    link: 'https://www.ctee.com.tw/news/20260522700270-439901',
  },
  {
    src: '中央社 CNA',
    hant: 'UVACO葡眾馬來西亞啟動營運　葡萄王國際佈局拚重返高峰',
    hans: 'UVACO葡众马来西亚启动营运　葡萄王国际布局拚重返高峰',
    en: 'UVACO Pro-Partner Launches in Malaysia, Grape King Aims for New Peak',
    ms: 'UVACO Pro-Partner Mula Beroperasi di Malaysia, Grape King Sasar Kemuncak Baharu',
    link: 'https://www.cna.com.tw/business/chinese/434179',
  },
  {
    src: 'Business Weekly',
    hant: '解析葡眾：如何成為台灣直銷界的科技標竿？',
    hans: '解析葡众：如何成为台湾直销界的科技标杆？',
    en: 'Pro-Partner: A Tech Benchmark in Taiwan Direct Sales',
    ms: 'Pro-Partner: Penanda Aras Teknologi Jualan Langsung',
    link: 'https://www.businessweekly.com.tw/business/indep/1005806',
  },
  {
    src: 'LTN NEWS 自由財經',
    hant: '葡眾獲利亮眼：每股賺6.58元',
    hans: '葡众获利亮眼：每股赚6.58元',
    en: 'Pro-Partner Earnings Shine: EPS NT$6.58',
    ms: 'Keuntungan Pro-Partner Cemerlang: EPS NT$6.58',
    link: 'https://ec.ltn.com.tw/article/breakingnews/5117185',
  },
  {
    src: 'Pingtung Times',
    hant: '葡眾深耕在地、邁向國際：創新模式引領轉型',
    hans: '葡众深耕在地、迈向国际：创新模式引领转型',
    en: 'Pro-Partner Goes Global: Innovative Model Leads Transformation',
    ms: 'Pro-Partner Ke Peringkat Global: Model Inovatif',
    link: 'https://pingtungtimes.com.tw/?p=348385',
  },
];

export type NewsLangKey = 'hant' | 'hans' | 'en' | 'ms';

export function getLangKey(lang: string): NewsLangKey {
  if (lang === 'zh-Hant') return 'hant';
  if (lang === 'zh-Hans') return 'hans';
  if (lang === 'en') return 'en';
  return 'ms';
}
