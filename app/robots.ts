import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
      },
    ],
    sitemap: 'https://www.uvacomy.info/sitemap.xml',
    host: 'https://www.uvacomy.info',
  };
}
