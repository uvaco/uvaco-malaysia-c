import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://www.uvacomy.info';
  const lastModified = new Date('2026-04-24');

  return [
    {
      url: baseUrl,
      lastModified,
      changeFrequency: 'weekly',
      priority: 1.0,
    },
    {
      url: `${baseUrl}/system`,
      lastModified,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
  ];
}
