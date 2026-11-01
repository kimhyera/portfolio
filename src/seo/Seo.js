import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import * as config from './site';

export default function Seo() {
    const { pathname, search } = useLocation();
    useEffect(() => {
        const page = config.pageFor(pathname);
        const capture = new URLSearchParams(search).has('capture');
        document.title = page.title;
        function meta(attribute, name, content) {
            let element = document.head.querySelector(`meta[${attribute}="${name}"]`);
            if (!element) { element = document.createElement('meta'); element.setAttribute(attribute, name); document.head.appendChild(element); }
            element.content = content;
        }
        meta('name', 'description', page.description);
        meta('name', 'robots', page.indexable && !capture ? 'index, follow, max-image-preview:large' : 'noindex, follow');
        meta('property', 'og:title', page.title);
        meta('property', 'og:description', page.description);
        meta('property', 'og:url', config.canonicalFor(page));
        meta('property', 'og:site_name', config.site.name);
        meta('property', 'og:image', config.site.image);
        meta('property', 'og:locale', 'ko_KR');
        meta('name', 'keywords', config.site.keywords);
        meta('name', 'twitter:card', 'summary_large_image');
        meta('name', 'twitter:image', config.site.image);
        meta('name', 'twitter:title', page.title);
        meta('name', 'twitter:description', page.description);
        let canonical = document.head.querySelector('link[rel="canonical"]');
        if (!canonical) { canonical = document.createElement('link'); canonical.rel = 'canonical'; document.head.appendChild(canonical); }
        canonical.href = config.canonicalFor(page);
        let schema = document.getElementById('portfolio-schema');
        if (!schema) { schema = document.createElement('script'); schema.id = 'portfolio-schema'; schema.type = 'application/ld+json'; document.head.appendChild(schema); }
        schema.textContent = JSON.stringify(config.structuredData(page));
    }, [pathname, search]);
    return null;
}


