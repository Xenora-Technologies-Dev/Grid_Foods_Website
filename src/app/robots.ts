import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/api/', '/.netlify/'],
    },
    sitemap: 'https://gridfoods.ae/sitemap.xml',
  };
}
