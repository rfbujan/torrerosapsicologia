import { MetadataRoute } from 'next';

export const dynamic = 'force-static';

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = 'https://www.torrerosapsicologia.com';
    const lastModified = new Date();

    return [
        {
            url: baseUrl, // Default locale (es) will be redirected or handled by middleware, but root is canonical
            lastModified,
            changeFrequency: 'weekly',
            priority: 1,
        },
        {
            url: `${baseUrl}/es`,
            lastModified,
            changeFrequency: 'weekly',
            priority: 1,
        },
        {
            url: `${baseUrl}/en`,
            lastModified,
            changeFrequency: 'weekly',
            priority: 0.8,
        },
        {
            url: `${baseUrl}/es/legal/aviso-legal`,
            lastModified,
            changeFrequency: 'yearly',
            priority: 0.5,
        },
        {
            url: `${baseUrl}/es/legal/privacidad`,
            lastModified,
            changeFrequency: 'yearly',
            priority: 0.5,
        },
        {
            url: `${baseUrl}/es/legal/cookies`,
            lastModified,
            changeFrequency: 'yearly',
            priority: 0.5,
        }
    ];
}
