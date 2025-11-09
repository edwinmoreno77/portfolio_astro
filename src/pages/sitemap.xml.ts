import type { APIRoute } from 'astro';

export const GET: APIRoute = async ({ site }) => {
  if (!site) {
    throw new Error('site is not defined in astro.config.mjs');
  }

  const baseUrl = site.toString().replace(/\/$/, '');
  const lastmod = new Date().toISOString();

  const pages = [
    {
      url: baseUrl,
      lastmod: lastmod,
      changefreq: 'weekly',
      priority: 1.0,
    },
    {
      url: `${baseUrl}/person.json`,
      lastmod: lastmod,
      changefreq: 'monthly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/#experiencia`,
      lastmod: lastmod,
      changefreq: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/#proyectos`,
      lastmod: lastmod,
      changefreq: 'weekly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/#sobre-mi`,
      lastmod: lastmod,
      changefreq: 'monthly',
      priority: 0.7,
    },
  ];

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  ${pages
    .map(
      (page) => `
  <url>
    <loc>${page.url}</loc>
    <lastmod>${page.lastmod}</lastmod>
    <changefreq>${page.changefreq}</changefreq>
    <priority>${page.priority}</priority>
  </url>
`
    )
    .join('')}
</urlset>`;

  return new Response(sitemap, {
    headers: {
      'Content-Type': 'application/xml',
      'Cache-Control': 'public, max-age=3600',
    },
  });
}; 