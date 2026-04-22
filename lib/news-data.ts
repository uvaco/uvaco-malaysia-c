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
  {
    src: '直銷世紀',
    hant: 'UVACO葡眾品牌全新升級，2026正式啟動大馬市場',
    hans: 'UVACO葡众品牌全新升级，2026正式启动大马市场',
    en: 'UVACO Pro-Partner Brand Upgrade, Malaysia 2026 Launch',
    ms: 'UVACO Pro-Partner Naik Taraf, Pelancaran Malaysia 2026',
    link: '#',
  },
];

export type NewsLangKey = 'hant' | 'hans' | 'en' | 'ms';

export function getLangKey(lang: string): NewsLangKey {
  if (lang === 'zh-Hant') return 'hant';
  if (lang === 'zh-Hans') return 'hans';
  if (lang === 'en') return 'en';
  return 'ms';
}
