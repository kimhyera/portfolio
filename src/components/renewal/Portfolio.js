import AnimatedTitle from './AnimatedTitle';
import React, { useEffect, useRef, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ArrowRight, ArrowUpRight, ArrowUp, ArrowDown, X, Mail, Plus } from 'lucide-react';
import HeroObjects from './HeroObjects';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import projects from '../../data/projects';
import SiteHeader from './SiteHeader';
import './styles.scss';
import ServiceSection from './ServiceSection';
import ProcessSection from './ProcessSection';
import MobileMenu from './MobileMenu';

gsap.registerPlugin(ScrollTrigger);
const asset = (name) => require(`../../views/html/assets/img/${name}`);
const workCategories = ['전체', '쇼핑몰', '관리자·서비스', '교육·이러닝', '웹사이트'];
function projectCategory(item) {
    const text = `${item.title} ${(item.type || []).join(' ')}`;
    if (/관리자|어드민|B2B|판매자/.test(text)) return '관리자·서비스';
    if (/교육|이러닝|교과서|학습/.test(text)) return '교육·이러닝';
    if (/쇼핑몰|커머스|산지마켓/.test(text)) return '쇼핑몰';
    if (/플랫폼|서비스|웹\/앱/.test(text)) return '관리자·서비스';
    return '웹사이트';
}

const buildTypes = [
    {
        title: '쇼핑몰 · 커머스',
        en: 'Commerce',
        description: '상품 탐색부터 주문까지, 실제 운영되는 커머스 서비스 구현',
        image: 'pt_0korea.jpg',
        tags: ['상품 목록', '장바구니', '주문'],
        tone: 'mint'
    },
    {
        title: '관리자 · 백오피스',
        en: 'Dashboard',
        description: '운영 효율을 고려한 데이터 관리 화면과 기능 구현',
        image: 'pt_0korea_partner.png',
        tags: ['대시보드', '검색', '테이블'],
        tone: 'lilac'
    },
    {
        title: '브랜드 · 기업',
        en: 'Brand',
        description: '브랜드 아이덴티티를 반영한 기업·서비스 웹사이트 구현',
        image: 'pt_sf_jang.png',
        tags: ['랜딩', '소개', '모션'],
        tone: 'peach'
    },
    {
        title: '교육 · 이러닝',
        en: 'Education',
        description: '학습 흐름을 고려한 교육 콘텐츠와 인터랙션 구현',
        image: 'pt_lernity.png',
        tags: ['퀴즈', 'WebView', '인터랙션'],
        tone: 'blue'
    }
];

function Arrow() {
    return <span aria-hidden="true"><ArrowUpRight size={20} /></span>;
}

function Dialog({ title, onClose, children, wide = false }) {
    const ref = useRef(null);
    useEffect(() => {
        const dialog = ref.current;
        const previous = document.activeElement;
        const scrollY = window.scrollY;
        const oldOverflow = document.body.style.overflow;
        document.body.style.overflow = 'hidden';
        dialog.showModal();
        return () => {
            dialog.close();
            document.body.style.overflow = oldOverflow;
            previous?.focus({ preventScroll: true });
            window.scrollTo({ top: scrollY, behavior: 'instant' });
        };
    }, []);
    return (
        <dialog
            ref={ref}
            className={`rp-dialog ${wide ? 'rp-dialog-wide' : ''}`}
            aria-labelledby="rp-dialog-title"
            onCancel={(event) => {
                event.preventDefault();
                onClose();
            }}
            onClick={(event) => {
                if (event.target === event.currentTarget) onClose();
            }}
        >
            <div className="rp-dialog-inner">
                    <button className="rp-close" onClick={onClose} aria-label="닫기" autoFocus>
                        <X size={22} aria-hidden="true" />
                    </button>
                <div className="rp-dialog-heading">
                    <p className="rp-eyebrow">LET'S CONNECT THE DOTS</p>
                </div>
                <h2 id="rp-dialog-title">{title}</h2>
                {children}
            </div>
        </dialog>
    );
}

export function Inquiry({ onClose }) {
    const [prepared, setPrepared] = useState(false);
    const [privacy, setPrivacy] = useState(false);
    const [draft, setDraft] = useState('');
    const [copied, setCopied] = useState(false);
    function submit(event) {
        event.preventDefault();
        const form = new FormData(event.currentTarget);
        if (form.get('website')) return;
        const body = `이름 / 회사명: ${form.get('name')}\n이메일: ${form.get('email')}\n프로젝트 종류: ${form.get('type') || '미정'}\n예산 범위: ${form.get('budget') || '협의'}\n\n${form.get('message')}`;
        setDraft(body);
        setPrepared(true);
        window.location.href = `mailto:khr1828@gmail.com?subject=${encodeURIComponent(`[포트폴리오 문의] ${form.get('name')}`)}&body=${encodeURIComponent(body)}`;
    }
    return (
        <Dialog title="좋은 아이디어를 함께 완성해요." onClose={onClose}>
            <p className="rp-dialog-intro">
                협업하고 싶은 내용을 남겨주세요.
                <br />
                작성한 내용은 이메일 앱에서 직접 보내실 수 있어요.
            </p>
            <form className="rp-inquiry" onSubmit={submit}>
                <label>
                    이름 / 회사명 <span>*</span>
                    <input name="name" autoComplete="organization" required maxLength={100} placeholder="성함 또는 회사명을 알려주세요" />
                </label>
                <label>
                    이메일 <span>*</span>
                    <input name="email" type="email" autoComplete="email" required maxLength={254} placeholder="hello@company.com" />
                </label>
                <div className="rp-form-row">
                    <label>
                        프로젝트 종류
                        <select name="type" defaultValue="">
                            <option value="">선택해주세요</option>
                            {['쇼핑몰 · 커머스', '브랜드 · 기업', '관리자 · 백오피스', '교육 · 이러닝', '기타 협업'].map((v) => (
                                <option key={v}>{v}</option>
                            ))}
                        </select>
                    </label>
                    <label>
                        예산 범위
                        <select name="budget" defaultValue="">
                            <option value="">협의 후 결정</option>
                            <option>300만원 미만</option>
                            <option>300–500만원</option>
                            <option>500–1,000만원</option>
                            <option>1,000만원 이상</option>
                        </select>
                    </label>
                </div>
                <label>
                    문의 내용 <span>*</span>
                    <textarea name="message" required maxLength={2000} rows={4} placeholder="프로젝트 소개, 필요한 작업 범위, 예상 일정 등을 알려주세요." />
                </label>
                <div className="rp-honeypot" aria-hidden="true">
                    <label>
                        Website
                        <input name="website" tabIndex={-1} autoComplete="off" />
                    </label>
                </div>
                <label className="rp-consent">
                    <input type="checkbox" required /> <span>문의 내용의 이메일 전달에 동의합니다. (필수)</span>
                </label>
                <button className="rp-privacy-toggle" type="button" aria-expanded={privacy} onClick={() => setPrivacy(!privacy)}>
                    개인정보 처리 안내 {privacy ? '−' : '+'}
                </button>
                {privacy && <p className="rp-privacy">이 페이지는 입력 내용을 서버에 저장하지 않습니다. 이메일 앱에서 전송하면 이름, 이메일, 문의 내용 및 선택 항목이 문의 응대 목적으로 수신자에게 전달됩니다. 전송 여부는 이메일 앱에서 확인해주세요.</p>}
                <button className="rp-button rp-primary" type="submit">
                    이메일 앱에서 보내기 <Arrow />
                </button>
                {prepared && (
                    <div className="rp-form-status" role="status">
                        이메일 앱 열기를 요청했어요. 아직 전송된 상태는 아닙니다. 앱이 열리지 않으면 내용을 복사해 <a href="mailto:khr1828@gmail.com">khr1828@gmail.com</a>으로 보내주세요.
                        <button
                            type="button"
                            onClick={async () => {
                                try {
                                    await navigator.clipboard.writeText(draft);
                                    setCopied(true);
                                } catch {
                                    setCopied(false);
                                }
                            }}
                        >
                            {copied ? '복사했어요' : '문의 내용 복사'}
                        </button>
                        <textarea aria-label="작성한 문의 내용" readOnly value={draft} rows={5} />
                    </div>
                )}
            </form>
        </Dialog>
    );
}

function ProjectDetail({ item, onClose }) {
    const images = Array.isArray(item.thumbDetail) ? item.thumbDetail : [item.thumbDetail || item.thumb];
    return (
        <Dialog title={item.title} onClose={onClose} wide>
            <div className="rp-detail-meta">
                <span>{item.date}</span>
                <span>{item.디바이스}</span>
            </div>
            <div className="rp-detail-sections">
                <div>
                    <p className="rp-eyebrow">01 / OVERVIEW</p>
                    <h3>프로젝트 소개</h3>
                    <p>{item.desc}</p>
                </div>
                <div>
                    <p className="rp-eyebrow">02 / MY ROLE</p>
                    <h3>직접 담당한 작업</h3>
                    <p>{item.role}</p>
                    <div className="rp-tags">
                        {item.stack.map((tag) => (
                            <span key={tag}>{tag}</span>
                        ))}
                    </div>
                </div>
                <div>
                    <p className="rp-eyebrow">03 / CHALLENGE</p>
                    <h3>구현의 초점</h3>
                    <p>{item.descDetail?.[0] || item.desc}</p>
                </div>
                <div>
                    <p className="rp-eyebrow">04 / SOLUTION & RESULT</p>
                    <h3>구현 내용과 화면</h3>
                    {item.descDetail?.slice(1).map((line) => (
                        <p key={line}>{line}</p>
                    ))}
                </div>
            </div>
            {item.url && item.url !== '#' ? (
                <a className="rp-button rp-primary" href={item.url} target="_blank" rel="noopener noreferrer">
                    사이트 방문하기 <Arrow />
                </a>
            ) : (
                <p className="rp-private-note">관리자 전용 화면으로, 공개 사이트 링크는 제공하지 않습니다.</p>
            )}
            <div className="rp-detail-images">
                {images.map((name, index) => (
                    <img key={name} src={asset(name)} alt={`${item.title} 구현 화면 ${index + 1}`} loading={new URLSearchParams(window.location.search).has('capture') ? 'eager' : 'lazy'} />
                ))}
            </div>
        </Dialog>
    );
}

function BuildMockup({ index, title }) {
    // Use the supplied design's device artwork instead of project screenshots.
    const crops = [
        { x: 562, y: 388, width: 365, height: 205 },
        { x: 100, y: 678, width: 320, height: 195 },
        { x: 556, y: 950, width: 365, height: 195 },
        { x: 100, y: 1220, width: 320, height: 190 }
    ];
    const crop = crops[index];
    return (
        <div className="rp-what-i-build-devices rp-what-i-build-reference-devices">
            <div className="rp-what-i-build-reference-art" style={{ aspectRatio: `${crop.width} / ${crop.height}` }}>
                <img src={asset('build-design-reference.jpg')} alt={`${title} PC·모바일 UI 목업 디자인 예시`} loading={new URLSearchParams(window.location.search).has('capture') ? 'eager' : 'lazy'} style={{ width: `${(1024 / crop.width) * 100}%`, left: `${(-crop.x / crop.width) * 100}%`, top: `${(-crop.y / crop.height) * 100}%` }} />
            </div>
        </div>
    );
}

function HeroVisual() {
    return (
        <div className="rp-home-visual" aria-hidden="true">
            <img className="rp-home-artwork" src={asset('hero-design-development.png')} alt="" fetchPriority="high" />
        </div>
    );
}

export default function Portfolio() {
    const { hash } = useLocation();
    useEffect(() => {
        if (!hash) return;
        const frame = requestAnimationFrame(() => document.getElementById(hash.slice(1))?.scrollIntoView({ block: 'start' }));
        return () => cancelAnimationFrame(frame);
    }, [hash]);
    const root = useRef(null);
    const build = useRef(null);

    const [menuOpen, setMenuOpen] = useState(false);
    const [isFixed, setIsFixed] = useState(false);
    const [modal, setModal] = useState(null);

    const [activeSection, setActiveSection] = useState('home');
    const [workCategory, setWorkCategory] = useState('전체');
    const [workLimit, setWorkLimit] = useState(6);
    const filteredProjects = projects.filter((item) => workCategory === '전체' || projectCategory(item) === workCategory);
    const visibleProjects = filteredProjects.slice(0, workLimit);

    useEffect(() => {
        const targets = root.current.querySelectorAll('#portfolio .rp-scroll-reveal:not(.is-scroll-visible)');
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (!entry.isIntersecting) return;
                entry.target.classList.add('is-scroll-visible');
                observer.unobserve(entry.target);
            });
        }, { rootMargin: '0px 0px -6% 0px', threshold: 0 });
        targets.forEach(target => observer.observe(target));
        return () => observer.disconnect();
    }, [workCategory, workLimit]);

    useEffect(() => {
        const updateHeader = () => setIsFixed(window.scrollY > 10);
        updateHeader();
        window.addEventListener('scroll', updateHeader, { passive: true });
        return () => window.removeEventListener('scroll', updateHeader);
    }, []);

    useEffect(() => {
        const rootElement = root.current;
        if (rootElement.classList.contains('is-capture'))
            rootElement.querySelectorAll('img').forEach((img) => {
                img.loading = 'eager';
            });
        document.body.classList.add('renewal-page');
        const sections = rootElement.querySelectorAll('section[id]');
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) setActiveSection(entry.target.id);
                });
            },
            { rootMargin: '-15% 0px -55% 0px' }
        );
        sections.forEach((section) => observer.observe(section));
        const titleGroups = [...rootElement.querySelectorAll('.rp-home-copy, .rp-section-heading, .rp-portfolio-heading, .rp-contact-content, .rp-service-heading > div:first-child, .rp-process-heading, .rp-process-heading > div')];
        const titleObserver = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (!entry.isIntersecting) return;
                    entry.target.classList.add('is-title-visible');
                    titleObserver.unobserve(entry.target);
                });
            },
            { rootMargin: '0px 0px -12% 0px', threshold: 0 }
        );
        titleGroups.forEach((group) => {
            group.classList.add('rp-title-reveal', 'rp-section-title-group');
            [...group.children]
                .filter((child) => /^H[1-3]$|^P$/.test(child.tagName))
                .forEach((child, index) => {
                    child.classList.add('rp-title-item');
                    child.style.setProperty('--title-order', index);
                });
            titleObserver.observe(group);
        });
        function paintTitleGradients() {
            rootElement.querySelectorAll('.rp-letter-title, .rp-letter-title em, .rp-letter-title span').forEach(source => {
                const style = window.getComputedStyle(source);
                if (style.backgroundImage === 'none' || style.webkitTextFillColor !== 'rgba(0, 0, 0, 0)') return;
                const bounds = source.getBoundingClientRect();
                source.querySelectorAll('.rp-title-letter').forEach(letter => {
                    letter.classList.add('rp-title-gradient-letter');
                    letter.style.backgroundImage = style.backgroundImage;
                    letter.style.backgroundSize = bounds.width + 'px 100%';
                    letter.style.backgroundPosition = -(letter.getBoundingClientRect().left - bounds.left) + 'px 0';
                });
            });
        }
        paintTitleGradients();
        window.addEventListener('resize', paintTitleGradients);
        const media = gsap.matchMedia();
        media.add(
            '(prefers-reduced-motion: no-preference)',
            () => {
                gsap.fromTo(
                    '#what-i-build',
                    { '--build-dark': 0 },
                    {
                        '--build-dark': 1,
                        ease: 'none',
                        scrollTrigger: {
                            trigger: '.rp-what-i-build-stack-card:last-child',
                            start: 'top 30%',
                            end: () => `+=${window.innerHeight * 0.65}`,
                            scrub: 0.7,
                            invalidateOnRefresh: true
                        }
                    }
                );
                gsap.from('.rp-home-artwork', { opacity: 0, duration: 1.1, ease: 'power2.out', clearProps: 'opacity' });
                gsap.utils.toArray('.rp-reveal:not(.rp-title-reveal)').forEach((element) => {
                    gsap.from(element, { y: 35, opacity: 0, duration: 0.75, ease: 'power2.out', scrollTrigger: { trigger: element, start: 'top 92%', once: true }, clearProps: 'all' });
                });
                gsap.timeline({ scrollTrigger: { trigger: '#contact', start: 'top 70%', once: true } }).from('.rp-contact-content > button, .rp-contact-channels > a', { y: 20, opacity: 0, stagger: 0.12, duration: 0.6, delay: 0.5 });
            },
            root
        );
        media.add(
            '(min-width: 1000px) and (prefers-reduced-motion: no-preference)',
            () => {
                gsap.utils.toArray('.rp-project-image img').forEach((image) => gsap.fromTo(image, { yPercent: -3 }, { yPercent: 3, ease: 'none', scrollTrigger: { trigger: image.closest('.rp-project'), start: 'top bottom', end: 'bottom top', scrub: true } }));
                gsap.utils.toArray('.rp-what-i-build-stack-card').forEach((card, index) => {
                    gsap.from(card.querySelector('.rp-what-i-build-card-surface'), { y: 65, opacity: 0, duration: 0.8, scrollTrigger: { trigger: card, start: 'top 93%', once: true }, clearProps: 'y,opacity' });
                    if (index < 3) gsap.to(card.querySelector('.rp-what-i-build-card-surface'), { scale: 0.94, transformOrigin: 'center top', ease: 'none', scrollTrigger: { trigger: card.nextElementSibling, start: 'top 75%', end: 'top 20%', scrub: true } });
                });
            },
            root
        );
        const refresh = () => ScrollTrigger.refresh();
        rootElement.querySelectorAll('img').forEach((img) => img.addEventListener('load', refresh, { once: true }));
        return () => {
            observer.disconnect();
            titleObserver.disconnect();
            window.removeEventListener('resize', paintTitleGradients);
            media.revert();
            titleGroups.forEach((group) => {
                group.classList.remove('rp-title-reveal', 'rp-section-title-group', 'is-title-visible');
                group.querySelectorAll('.rp-title-item').forEach((child) => {
                    child.classList.remove('rp-title-item');
                    child.style.removeProperty('--title-order');
                });
            });
            rootElement.querySelectorAll('img').forEach((img) => img.removeEventListener('load', refresh));
            document.body.classList.remove('renewal-page');
        };
    }, []);

    useEffect(() => {
        if (!menuOpen) return;
        const onEscape = (event) => {
            if (event.key === 'Escape') {
                setMenuOpen(false);
                document.getElementById('rp-menu-toggle')?.focus();
            }
        };
        window.addEventListener('keydown', onEscape);
        return () => window.removeEventListener('keydown', onEscape);
    }, [menuOpen]);

    useEffect(() => {
        const refreshFrame = requestAnimationFrame(() => ScrollTrigger.refresh());
        return () => cancelAnimationFrame(refreshFrame);
    }, [workCategory, workLimit]);

    return (
        <div className={`rp${new URLSearchParams(window.location.search).has('capture') ? ' is-capture' : ''}`} ref={root} data-active-section={activeSection}>
            <a className="rp-skip" href="#main-content">
                본문 바로가기
            </a>
            <SiteHeader home isFixed={isFixed} activeSection={activeSection} menuOpen={menuOpen} setMenuOpen={setMenuOpen} onInquiry={() => setModal('inquiry')} />
            <main id="main-content" className="rp-main">
                <section id="home" className="rp-home rp-home--art">
                    <div className="rp-container rp-home-layout">
                        <div className="rp-home-copy">
                            <p className="rp-eyebrow">
                                <span className="rp-status-dot" /> KIM HYERA · PORTFOLIO
                            </p>
                            <AnimatedTitle as="h1">
                                Design meets
                                <br />
                                <span>Development.</span>
                            </AnimatedTitle>
                            <p className="rp-home-description">
                                디자인의 의도를 이해하고, 실제 사용자 경험으로 완성하는
                                <br className="rp-desktop-break" /> 웹 퍼블리셔 / 프론트엔드 개발자입니다.
                            </p>
                            <div className="rp-home-actions">
                                <a className="rp-button rp-primary" href="#portfolio">
                                    View Projects <span aria-hidden="true"><ArrowRight size={22} /></span>
                                </a>
                                <Link className="rp-text-link" to="/About">About Me</Link>
                            </div>
                            <div className="rp-home-keywords">
                                <span>UX/UI DESIGN</span>
                                <span>WEB PUBLISHING</span>
                                <span>FRONT-END</span>
                            </div>
                        </div>
                        <HeroVisual />
                        <HeroObjects />
                        <aside className="rp-home-aside">
                            <AnimatedTitle>
                                웹을 설계하고, 구현하고,
                                <br />더 나은 경험으로 완성합니다.
                            </AnimatedTitle>
                            <p>
                                기획부터 퍼블리싱, 성능 최적화까지
                                <br />
                                사용자 중심의 웹 경험을 만듭니다.
                            </p>
                        </aside>
                    </div>
                    <div className="rp-container rp-home-bottom">
                        <span>THOUGHTFUL DESIGN. MEANINGFUL CODE.</span>
                        <a href="#what-i-do">
                            SCROLL TO EXPLORE <span aria-hidden="true"><ArrowDown size={14} /></span>
                        </a>
                        <span>SEOUL, SOUTH KOREA</span>
                    </div>
                </section>

                <ServiceSection onInquiry={() => setModal('inquiry')} />

                <section id="portfolio" className="rp-portfolio">
                    <div className="rp-portfolio-orb" aria-hidden="true" />
                    <div className="rp-container">
                        <div className="rp-portfolio-heading">
                            <p className="rp-eyebrow">
                                브랜드의 가치를 담은
                                <br />
                                다양한 웹사이트를 제작했습니다.
                            </p>
                            <AnimatedTitle className="rp-portfolio-title">Portfolio</AnimatedTitle>
                        </div>
                        <div className="rp-portfolio-filters" role="group" aria-label="프로젝트 카테고리">
                            {workCategories.map((category, index) => (
                                <button
                                    type="button"
                                    key={category}
                                    className="rp-scroll-reveal"
                                    style={{ '--reveal-delay': `${index * 80}ms` }}
                                    aria-pressed={workCategory === category}
                                    onClick={() => {
                                        setWorkCategory(category);
                                        setWorkLimit(6);
                                    }}
                                >
                                    {category}
                                    {category === '전체' ? ` ${projects.length}` : ''}
                                </button>
                            ))}
                        </div>
                        <div className="rp-project-grid">
                            {visibleProjects.map((item, index) => (
                                <article className={`rp-project rp-project-tone-${index % 3} rp-scroll-reveal`} key={item.title} style={{ '--reveal-delay': `${(index % 3) * 90}ms` }}>
                                    <button className="rp-project-image" onClick={() => setModal(item)} aria-label={`${item.title} 프로젝트 상세 보기`}>
                                        <img src={asset(item.thumb)} alt={`${item.title} 웹사이트 화면`} loading={new URLSearchParams(window.location.search).has('capture') ? 'eager' : 'lazy'} width="720" height="480" />
                                    </button>
                                    <div className="rp-project-info">
                                        <div className="rp-project-meta">
                                            <span>{item.type.slice(0, 2).join(' / ')}</span>
                                            <span>{item.date}</span>
                                        </div>
                                        <button className="rp-project-title" onClick={() => setModal(item)}>
                                            {item.title}
                                            <Arrow />
                                        </button>
                                        <p className="rp-project-role">{item.role}</p>
                                        <div className="rp-tags">
                                            {item.stack.map((tag) => (
                                                <span key={tag}>{tag}</span>
                                            ))}
                                        </div>
                                    </div>
                                </article>
                            ))}
                        </div>
                        <div className="rp-portfolio-footer">
                            {workLimit < filteredProjects.length && (
                                <button type="button" className="rp-button rp-outline-light" onClick={() => setWorkLimit((limit) => limit + 6)}>
                                    작업 더 보기 <span aria-hidden="true"><Plus size={20} /></span>
                                </button>
                            )}
                            <span role="status">
                                {visibleProjects.length} / {filteredProjects.length} PROJECTS
                            </span>
                        </div>
                    </div>
                </section>

                <section id="what-i-build" className="rp-what-i-build" ref={build}>
                    <div className="rp-container">
                        <div className="rp-section-heading rp-centered rp-reveal rp-heading-standard">
                            <p className="rp-eyebrow">WHAT I BUILD</p>
                            <AnimatedTitle>
                                다양한 서비스에서
                                <br />
                                <span className="rp-gradient-text">경험을 쌓았습니다.</span>
                            </AnimatedTitle>
                            <p>
                                쇼핑몰부터 관리자 시스템, 기업 웹사이트, 교육 콘텐츠까지. <br />
                                다양한 환경에서 쌓은 프로젝트 경험을 소개합니다.
                            </p>
                        </div>
                        <div className="rp-what-i-build-stack">
                            {buildTypes.map((item, index) => (
                                <article className={`rp-what-i-build-stack-card rp-what-i-build-stack-${index}`} key={item.en} style={{ '--stack-index': index }}>
                                    <div className="rp-what-i-build-card-surface">
                                        <div className={`rp-what-i-build-card-icon rp-what-i-build-reference-icon-${index}`} aria-hidden="true" />
                                        <div className="rp-what-i-build-copy">
                                            <p className="rp-eyebrow">
                                                0{index + 1} / {item.en.toUpperCase()}
                                            </p>
                                            <h3>{item.title}</h3>
                                            <p>{item.description}</p>
                                            <div className="rp-tags">
                                                {item.tags.map((tag) => (
                                                    <span key={tag}>{tag}</span>
                                                ))}
                                            </div>
                                        </div>
                                        <BuildMockup index={index} title={item.title} />
                                    </div>
                                </article>
                            ))}
                        </div>
                    </div>
                </section>

                <ProcessSection />

                <section id="contact" className="rp-contact">
                    <div className="rp-contact-glow" />
                    <div className="rp-container rp-contact-content">
                        <p className="rp-eyebrow">SECTION 06 / CONTACT</p>
                        <AnimatedTitle>
                           함께 <span>좋은 경험</span>을 만들어가요.
                        </AnimatedTitle>
                        <p>좋은 아이디어를 함께 완성해요.</p>
                        <button className="rp-button rp-primary" onClick={() => setModal('inquiry')}>
                            프로젝트 문의하기 <Arrow />
                        </button>
                        <div className="rp-contact-channels">
                            <a href="mailto:khr1828@gmail.com">
                                <span aria-hidden="true"><Mail size={18} /></span> khr1828@gmail.com
                            </a>
                            <a href="https://github.com/kimhyera" target="_blank" rel="noopener noreferrer">
                                GitHub <Arrow />
                            </a>
                            <a href="https://enshrined-cone-70b.notion.site/c37bdd09de3043909972c701a71be573" target="_blank" rel="noopener noreferrer">
                                Notion <Arrow />
                            </a>
                        </div>
                    </div>
                    <footer className="rp-container rp-footer">
                        <a className="rp-logo" href="#home" aria-label="김혜라 포트폴리오 처음으로">
                            <img src={asset('hyera-logo.png')} alt="hyera" className="rp-brand-logo" width="694" height="202" />
                        </a>
                        <p>© {new Date().getFullYear()} KIM HYERA</p>
                        <div>
                            <a href="https://github.com/kimhyera" target="_blank" rel="noopener noreferrer">
                                GitHub <Arrow />
                            </a>
                            <a href="https://enshrined-cone-70b.notion.site/c37bdd09de3043909972c701a71be573" target="_blank" rel="noopener noreferrer">
                                Notion <Arrow />
                            </a>
                            <a href="#home" aria-label="페이지 맨 위로">
                                Back to top <ArrowUp size={16} aria-hidden="true" />
                            </a>
                        </div>
                    </footer>
                </section>
            </main>
            <button type="button" className={`rp-back-to-top${isFixed ? ' is-visible' : ''}`} aria-label="맨 위로 이동" tabIndex={isFixed ? 0 : -1} onClick={() => window.scrollTo({ top: 0, behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'instant' : 'smooth' })}>
                <ArrowUp size={23} aria-hidden="true" />
            </button>
            {menuOpen && (
                <MobileMenu
                    logo={asset('hyera-logo.png')}
                    onClose={() => setMenuOpen(false)}
                    onInquiry={() => {
                        setMenuOpen(false);
                        setModal('inquiry');
                    }}
                />
            )}
            {modal === 'inquiry' ? <Inquiry onClose={() => setModal(null)} /> : modal && <ProjectDetail item={modal} onClose={() => setModal(null)} />}
        </div>
    );
}
