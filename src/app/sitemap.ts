import { MetadataRoute } from 'next';
import { categories } from '@/lib/data';

/**
 * Auto-generated sitemap for Grid Foods LLC — improves SEO indexing.
 */
export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://gridfoods.ae';
  const now = new Date();

  const staticRoutes = [
    { url: baseUrl, priority: 1.0 },
    { url: `${baseUrl}/about`, priority: 0.8 },
    { url: `${baseUrl}/products`, priority: 0.9 },
    { url: `${baseUrl}/contact`, priority: 0.7 },
  ].map(({ url, priority }) => ({
    url,
    lastModified: now,
    changeFrequency: 'monthly' as const,
    priority,
  }));

  const categoryRoutes = categories.map((cat) => ({
    url: `${baseUrl}/products/${cat.slug}`,
    lastModified: now,
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }));

  return [...staticRoutes, ...categoryRoutes];
}
