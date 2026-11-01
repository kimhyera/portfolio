// 메타 정보와 정적 HTML 생성에서 공통으로 사용하는 사이트 설정.
const site = {
    url: 'https://kimhyera.github.io/portfolio/',
    name: 'HYERA Portfolio',
    title: 'HYERA | UX/UI 디자인 · 웹퍼블리싱 · 프론트엔드 포트폴리오',
    description: '10년 이상의 웹 실무 경험을 바탕으로 기획, UX/UI 디자인, 반응형 웹 퍼블리싱, Vue·Nuxt 프론트엔드 개발까지. 다양한 프로젝트의 기획부터 구현, 운영 경험을 소개합니다.',
    keywords: '웹 기획, UX/UI 디자인, 웹퍼블리싱, 프론트엔드 개발, 반응형 웹, Vue, Nuxt, 포트폴리오',
    image: 'https://kimhyera.github.io/portfolio/img/og_img.png',
    author: '김혜라',
    pages: {
        '/': { title: 'HYERA | UX/UI 디자인 · 웹퍼블리싱 · 프론트엔드 포트폴리오', heading: '디자인을 이해하고, 코드로 완성합니다.', description: '10년 이상의 웹 실무 경험을 바탕으로 기획, UX/UI 디자인, 반응형 웹 퍼블리싱, Vue·Nuxt 프론트엔드 개발까지. 다양한 프로젝트의 기획부터 구현, 운영 경험을 소개합니다.' },
        '/About': { title: '소개 · 역량 | 김혜라 포트폴리오', heading: '김혜라 소개와 실무 역량', description: '10년 이상의 웹 퍼블리싱 실무 경험을 바탕으로 UX/UI 디자인, 반응형 웹, 접근성, Vue·Nuxt·React 협업과 아임웹·영카트 구축 역량을 소개합니다.' },
        '/Work': { title: '프로젝트 | 김혜라 웹 퍼블리싱·프론트엔드 포트폴리오', heading: '직접 참여한 웹 프로젝트', description: '김혜라가 직접 참여한 커머스, 관리자·서비스, 기업·브랜드, 교육·이러닝 프로젝트의 구현 화면, 담당 역할과 사용 기술을 확인하세요.' },
        '/History': { title: '프로젝트 이력 | 김혜라 포트폴리오', heading: '프로젝트와 실무 이력', description: '김혜라의 연도별 프로젝트 이력. 기업·브랜드 사이트, 공공기관 웹 접근성, 커머스와 다양한 웹 서비스의 실무 경험을 소개합니다.' },
    },
};

function pageFor(pathname) {
    const normalized = pathname.replace(/\/+$/, '') || '/';
    if (normalized.toLowerCase() === '/main') return { ...site.pages['/'], path: '/', indexable: true };
    const key = Object.keys(site.pages).find(path => path.toLowerCase() === normalized.toLowerCase());
    if (key) return { ...site.pages[key], path: key, indexable: true };
    return { title: `페이지 | ${site.name}`, description: site.description, path: normalized, indexable: false };
}

function canonicalFor(page) { return page.path === '/' ? site.url : `${site.url}${page.path.slice(1)}/`; }

function structuredData(page) {
    const person = { '@type': 'Person', '@id': `${site.url}#person`, name: site.author, alternateName: 'Hyera Kim', url: site.url, jobTitle: '웹 퍼블리셔 · 프론트엔드 개발자', sameAs: ['https://github.com/kimhyera'] };
    return { '@context': 'https://schema.org', '@graph': [
        person,
        { '@type': 'WebSite', '@id': `${site.url}#website`, url: site.url, name: site.name, inLanguage: 'ko-KR', author: { '@id': person['@id'] } },
        { '@type': page.path === '/' || page.path === '/About' ? 'ProfilePage' : 'CollectionPage', '@id': `${canonicalFor(page)}#webpage`, url: canonicalFor(page), name: page.title, description: page.description, inLanguage: 'ko-KR', isPartOf: { '@id': `${site.url}#website` }, mainEntity: { '@id': person['@id'] } },
    ] };
}

export { site, pageFor, canonicalFor, structuredData };

