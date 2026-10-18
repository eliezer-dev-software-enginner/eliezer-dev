import type { MetadataRoute } from 'next';
import { collection, getDocs } from 'firebase/firestore';
import { getBaseUrl } from './solucoes/plics-sw/lib/common';
import { FIREBASE_COLLECTIONS } from '@/lib/blog/collections';

export const dynamic = 'force-dynamic';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const base = getBaseUrl();
  const pages: MetadataRoute.Sitemap = [
    '/', '/blog', '/solucoes/plics-sw',
    '/solucoes/impulsionar-instagram',
    '/solucoes/plics-sw/atualizacao',
    '/solucoes/plics-sw/politica-de-privacidade',
  ].map(path => ({ url: `${base}${path}`, lastModified: new Date() }));

  if (process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID) {
    const { serverDb } = await import('@/lib/blog/firebase-server');
    const posts = await getDocs(collection(serverDb, FIREBASE_COLLECTIONS.POSTS));
    pages.push(...posts.docs.map(post => ({
      url: `${base}/blog/post/${post.data().slug || post.id}`,
      lastModified: post.data().createdAt?.toDate?.() || new Date(),
    })));
  }

  return pages;
}
