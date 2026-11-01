const fs = require('fs');
const path = require('path');
const seoExports = {};
const seoCode = require('@babel/core').transformFileSync(path.resolve(__dirname, '../src/seo/site.js'), { babelrc: false, configFile: false, plugins: ['@babel/plugin-transform-modules-commonjs'] }).code;
require('vm').runInNewContext(seoCode, { exports: seoExports });
const { site, pageFor, canonicalFor, structuredData } = seoExports;
const root = path.resolve(__dirname, '..');
const escape = value => String(value).replace(/[&<>"']/g, char => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[char]));

function metadata(html, page) {
    html = html.replace(/<title>[^<]*<\/title>/i, `<title>${escape(page.title)}</title>`)
        .replace(/<meta\b[^>]*(?:name=["'](?:title|description|robots|keywords|author|copyright|content-language|build|twitter:[^"']+)["']|property=["']og:[^"']+["']|http-equiv=["'](?:Cache-Control|Pragma|Content-Type)["'])[^>]*>\s*/gi, '')
        .replace(/<link\b[^>]*rel=["']canonical["'][^>]*>\s*/gi, '')
        .replace(/<script\b[^>]*id=["']portfolio-schema["'][^>]*>[\s\S]*?<\/script>\s*/gi, '');
    const tags = [
        ['name', 'description', page.description], ['name', 'keywords', site.keywords], ['name', 'author', site.author],
        ['name', 'robots', 'index, follow, max-image-preview:large'],
        ['property', 'og:site_name', site.name], ['property', 'og:title', page.title], ['property', 'og:description', page.description],
        ['property', 'og:type', 'website'], ['property', 'og:url', canonicalFor(page)], ['property', 'og:locale', 'ko_KR'],
        ['property', 'og:image', site.image], ['property', 'og:image:secure_url', site.image], ['property', 'og:image:type', 'image/png'],
        ['property', 'og:image:width', '1672'], ['property', 'og:image:height', '941'], ['property', 'og:image:alt', 'HYERA Portfolio — 디자인을 이해하고 코드로 구현하는 웹 퍼블리셔·프론트엔드 개발자'],
        ['name', 'twitter:card', 'summary_large_image'], ['name', 'twitter:title', page.title], ['name', 'twitter:description', page.description],
        ['name', 'twitter:image', site.image], ['name', 'twitter:image:alt', 'HYERA Portfolio'],
    ].map(([attribute, name, value]) => `    <meta ${attribute}="${name}" content="${escape(value)}" />`).join('\n');
    const schema = JSON.stringify(structuredData(page)).replace(/</g, '\\u003c');
    return html.replace('</head>', `${tags}\n    <link rel="canonical" href="${canonicalFor(page)}" />\n    <script id="portfolio-schema" type="application/ld+json">${schema}</script>\n  </head>`);
}

const pages = Object.keys(site.pages).map(pageFor);
const sitemap = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${pages.map(page => `  <url><loc>${canonicalFor(page)}</loc></url>`).join('\n')}\n</urlset>\n`;
const robots = `User-agent: *\nAllow: /\n\nSitemap: ${site.url}sitemap.xml\n`;

if (process.argv.includes('--public')) {
    const template = path.join(root, 'public/index.html');
    fs.writeFileSync(template, metadata(fs.readFileSync(template, 'utf8'), pageFor('/')));
    fs.writeFileSync(path.join(root, 'public/sitemap.xml'), sitemap);
    fs.writeFileSync(path.join(root, 'public/robots.txt'), robots);
    console.log('Public metadata, structured data, robots.txt and sitemap synchronized.');
} else {
    // Build a readable HTML fallback for every public route. React replaces it on mount.
    const babel = require('@babel/core');
    const vm = require('vm');
    const exports = {};
    const compiled = babel.transformFileSync(path.join(root, 'src/data/projects.js'), { babelrc: false, configFile: false, plugins: ['@babel/plugin-transform-modules-commonjs'] }).code;
    vm.runInNewContext(compiled, { exports });
    const projects = exports.default;
    const summary = items => `<ul>${items.map(item => `<li><h3>${escape(item.title)}</h3><p>${escape(item.desc || '')}</p><p>담당 역할: ${escape(item.role || '')}</p><p>사용 기술: ${escape((item.stack || []).join(', '))}</p>${item.url && /^https:\/\//.test(item.url) ? `<a href="${escape(item.url)}" rel="noopener noreferrer">프로젝트 사이트</a>` : ''}</li>`).join('')}</ul>`;
    function content(page) {
        const navigation = pages.map(p => `<a href="${canonicalFor(p)}">${escape(p.heading)}</a>`).join(' · ');
        let body = `<h1>${escape(page.heading)}</h1><p>${escape(page.description)}</p>`;
        if (page.path === '/' || page.path === '/Work') body += `<section><h2>프로젝트와 담당 역할</h2>${summary(page.path === '/Work' ? projects : projects.slice(0, 6))}</section>`;
        if (page.path === '/About') body += '<section><h2>전문 분야</h2><ul><li>웹 기획과 UX/UI 디자인</li><li>반응형 웹 퍼블리싱과 웹 접근성</li><li>Vue·Nuxt 프론트엔드 개발, React 퍼블리싱 협업</li><li>아임웹·영카트 기반 사이트 제작 및 커스터마이징</li></ul></section>';
        if (page.path === '/History') body += '<section><h2>실무 경험</h2><p>기업·브랜드, 공공기관, 커머스와 웹 서비스 프로젝트의 연도별 작업 이력을 소개합니다.</p></section>';
        return `<div style="background:#fff;color:#10131b;min-height:100vh;font:16px/1.8 sans-serif;padding:32px"><nav aria-label="주요 페이지">${navigation}</nav><main style="max-width:1100px;margin:32px auto">${body}<section><h2>협업 문의</h2><a href="mailto:khr1828@gmail.com">khr1828@gmail.com</a> · <a href="https://github.com/kimhyera">GitHub</a></section></main></div>`;
    }
    const template = fs.readFileSync(path.join(root, 'build/index.html'), 'utf8');
    for (const page of pages) {
        const folder = page.path === '/' ? path.join(root, 'build') : path.join(root, 'build', page.path.slice(1));
        fs.mkdirSync(folder, { recursive: true });
        const html = metadata(template, page).replace(/<div id="root"><\/div>/, `<div id="root">${content(page)}</div>`);
        fs.writeFileSync(path.join(folder, 'index.html'), html);
    }
    // Keep existing /Main links working with a real static response and the home canonical.
    fs.mkdirSync(path.join(root, 'build/Main'), { recursive: true });
    fs.copyFileSync(path.join(root, 'build/index.html'), path.join(root, 'build/Main/index.html'));
    fs.writeFileSync(path.join(root, 'build/sitemap.xml'), sitemap);
    fs.writeFileSync(path.join(root, 'build/robots.txt'), robots);
    fs.writeFileSync(path.join(root, 'build/.nojekyll'), '');
    console.log(`Generated ${pages.length + 1} static route documents; OG metadata and ${projects.length} project records verified.`);
}


