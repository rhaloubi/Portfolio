import { type MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: '/not-found',
      },
    ],
    sitemap: 'https://haloubi-reda.clarodigi.com/sitemap.xml',
  };
}