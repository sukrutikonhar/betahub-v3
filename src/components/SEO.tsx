import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

interface SEOProps {
    title: string;
    description: string;
    keywords?: string;
    ogImage?: string;
    canonical?: string;
}

export default function SEO({ title, description, keywords, ogImage, canonical }: SEOProps) {
    const location = useLocation();
    const baseUrl = 'https://betahub.ai';
    const defaultImage = `${baseUrl}/logos/logo-dark.webp`;
    const fullUrl = `${baseUrl}${location.pathname}`;

    useEffect(() => {
        // Update title
        document.title = title;

        // Update or create meta tags
        const updateMetaTag = (property: string, content: string, isProperty = false) => {
            const attribute = isProperty ? 'property' : 'name';
            let element = document.querySelector(`meta[${attribute}="${property}"]`);

            if (!element) {
                element = document.createElement('meta');
                element.setAttribute(attribute, property);
                document.head.appendChild(element);
            }

            element.setAttribute('content', content);
        };

        // Primary Meta Tags
        updateMetaTag('title', title);
        updateMetaTag('description', description);
        if (keywords) {
            updateMetaTag('keywords', keywords);
        }

        // Open Graph Tags
        updateMetaTag('og:title', title, true);
        updateMetaTag('og:description', description, true);
        updateMetaTag('og:url', fullUrl, true);
        updateMetaTag('og:image', ogImage || defaultImage, true);

        // Twitter Tags
        updateMetaTag('twitter:title', title, true);
        updateMetaTag('twitter:description', description, true);
        updateMetaTag('twitter:url', fullUrl, true);
        updateMetaTag('twitter:image', ogImage || defaultImage, true);

        // Update canonical URL
        let canonicalLink = document.querySelector('link[rel="canonical"]');
        if (!canonicalLink) {
            canonicalLink = document.createElement('link');
            canonicalLink.setAttribute('rel', 'canonical');
            document.head.appendChild(canonicalLink);
        }
        canonicalLink.setAttribute('href', canonical || fullUrl);

    }, [title, description, keywords, ogImage, canonical, location.pathname, fullUrl, defaultImage]);

    return null;
}

