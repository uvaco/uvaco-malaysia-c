import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: '創業制度詳解 | System Details',
  description:
    '葡眾（UVACO / Pro-Partner）馬來西亞創業制度詳解：積分終身累積不歸零、職級只升不降、事業可世襲傳承。低門檻零囤貨壓力，多元收入與圓夢獎金。',
  openGraph: {
    title: '葡眾馬來西亞創業制度詳解 | UVACO Pro-Partner Malaysia System',
    description:
      '積分終身累積、職級不降、事業可傳承。每年僅需 160 SV 維護資格，無年費月費，合法穩定。',
    url: 'https://www.uvacomy.info/system',
  },
  alternates: {
    canonical: 'https://www.uvacomy.info/system',
  },
};

export default function SystemLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
