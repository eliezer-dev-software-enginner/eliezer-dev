import type { MetadataRoute } from 'next';
import { getBaseUrl } from './solucoes/plics-sw/lib/common';

export default function robots(): MetadataRoute.Robots {
  const base = getBaseUrl();
  return { rules: [{ userAgent: '*', allow: '/', disallow: ['/blog/login', '/blog/create', '/blog/api/', '/solucoes/plics-sw/api/'] }], sitemap: `${base}/sitemap.xml`, host: base };
}
