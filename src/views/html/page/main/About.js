import React, { useEffect, useRef, useState } from 'react';
import SiteHeader from '../../../../components/renewal/SiteHeader';
import MobileMenu from '../../../../components/renewal/MobileMenu';
import { Inquiry } from '../../../../components/renewal/Portfolio';
import logo from '../../assets/img/hyera-logo.png';
import '../../../../components/renewal/styles.scss';
import '../../../../components/renewal/about.css';
import AboutStorySlider from '../../../../components/renewal/AboutStorySlider';
import designIcon from '../../assets/img/about-design.png';
import codeIcon from '../../assets/img/about-code.png';
import developmentIcon from '../../assets/img/about-development.png';
import aiIcon from '../../assets/img/about-ai.png';
const storyIcons = [designIcon, codeIcon, developmentIcon, aiIcon];
const stories = [
    { title: ["브랜드에 맞는","디자인과 기획"], meta: 'UX/UI PLANNING · DESIGN', description: '브랜드의 방향과 프로젝트 목적을 이해하고 정보 구조부터 화면 디자인까지 설계합니다. 보기 좋은 화면뿐 아니라 사용자가 편리하게 이용할 수 있는 경험을 고민합니다.' },
    { title: ["견고하고 유연한","웹 퍼블리싱"], meta: 'HTML · SCSS · JAVASCRIPT', description: '웹표준과 접근성을 고려한 반응형 UI를 구현합니다. 공통 컴포넌트와 일관된 구조를 설계해 새로운 기능을 추가하거나 유지보수할 때도 효율적으로 작업합니다.' },
    { title: ["서비스를 완성하는","개발 경험"], meta: 'VUE · NUXT · REACT · PHP', description: 'Vue/Nuxt, React 기반 서비스 UI부터 PHP/MySQL을 활용한 문의 접수 및 관리자 기능까지, 디자인 의도를 이해한 구현으로 실제 운영 가능한 웹사이트를 만듭니다.' },
    { title: ["AI와 함께하는","효율적인 제작"], meta: 'AI-ASSISTED WORKFLOW', description: 'AI 기술을 디자인 시안 구체화와 콘텐츠 구성, 코드 작성 및 검토에 활용합니다. 반복 작업을 줄이고 브랜드에 필요한 문제 해결과 결과물의 완성도에 집중합니다.' }
  ];
function HeroLetters({ text, delay = 0, interval = 0.035 }) {
  let index = 0;
  return <span aria-hidden="true">{text.split(' ').map((word, wordIndex) => <React.Fragment key={wordIndex}>{wordIndex > 0 && ' '}<span className="about-hero-word">{Array.from(word).map(letter => <span className="about-hero-letter" key={index} style={{ animationDelay: (delay + index++ * interval) + 's' }}>{letter}</span>)}</span></React.Fragment>)}</span>;
}
export default function About() {
  const root = useRef(null);
  const [menuOpen, setMenuOpen] = useState(false);
  const [inquiry, setInquiry] = useState(false);
  const [isFixed, setIsFixed] = useState(false);
  useEffect(() => {
    document.body.classList.add('renewal-page');
    window.scrollTo(0, 0);
    const onScroll = () => setIsFixed(window.scrollY > 10);
    window.addEventListener('scroll', onScroll, { passive: true });
    // Each section enters once; its children keep their own stagger order.
    root.current.querySelectorAll('.section-heading, .expertise-stat, .expertise-skills, .history-item, .history-footer').forEach(group => {
      group.classList.add('about-motion-group');
      const targets = group.matches('.history-item')
        ? group.querySelectorAll('.history-item__year, .history-item__category, h3, .history-item__body p, .history-item__index')
        : group.matches('.expertise-skills')
          ? group.querySelectorAll('h3, .skill-pills span')
          : group.children;
      Array.from(targets).forEach((target, index) => {
        target.classList.add('about-motion-item');
        target.style.setProperty('--about-motion-delay', (index * .09) + 's');
      });
    });
    root.current.querySelectorAll('.expertise-grid > .reveal').forEach((card, index) => {
      card.style.transitionDelay = (index * .12) + 's';
      card.querySelectorAll('.about-motion-item').forEach(item => {
        item.style.setProperty('--about-motion-delay', (parseFloat(item.style.getPropertyValue('--about-motion-delay')) + index * .12) + 's');
      });
    });
    const elements = root.current.querySelectorAll('.reveal, .about-slider-stage');
    const observer = new IntersectionObserver(entries => entries.forEach(entry => {
      if (entry.isIntersecting) { entry.target.classList.add('is-visible'); observer.unobserve(entry.target); }
    }), { threshold: .12 });
    elements.forEach(element => observer.observe(element));
    return () => { observer.disconnect(); window.removeEventListener('scroll', onScroll); document.body.classList.remove('renewal-page'); };
  }, []);
  const openInquiry = () => { setMenuOpen(false); setInquiry(true); };
  return <div className="rp" ref={root}>
    <a className="rp-skip" href="#main-content">본문 바로가기</a>
    <SiteHeader isFixed={isFixed} activeSection="about" menuOpen={menuOpen} setMenuOpen={setMenuOpen} onInquiry={openInquiry} />
    <main id="main-content" className="hyera-about">
    <section className="hero" id="top" aria-labelledby="hero-title">
      <div className="hero__glow hero__glow--one"></div><div className="hero__glow hero__glow--two"></div>
      <div className="hero__content container">
        <p className="hero__eyebrow" aria-label="DESIGN · DEVELOPMENT · EXPERIENCE"><HeroLetters text="DESIGN · DEVELOPMENT · EXPERIENCE" interval={0.018} /></p>
        <h1 id="hero-title" className="hero__title" aria-label="about hyera."><HeroLetters text="about hyera." delay={0.22} interval={0.055} /></h1>
        <p className="hero__subtitle" aria-label="경험을 바탕으로, 디자인과 기술을 연결합니다."><HeroLetters text="경험을 바탕으로, 디자인과 기술을 연결합니다." delay={0.65} interval={0.025} /></p>
      </div>
      <a className="scroll-down" href="#intro" aria-label="자기소개로 이동"><svg width="30" height="20" viewBox="0 0 30 20" fill="none" aria-hidden="true"><path d="m2 3 13 11L28 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/></svg></a>
    </section>

    <section className="experience section" aria-labelledby="experience-heading">
      <div className="container">
        <div className="section-heading reveal">
          <span className="eyebrow">EXPERIENCE & EXPERTISE</span>
          <h2 id="experience-heading" aria-label="다양한 분야에서 쌓아 온 실전 프로젝트 경험"><HeroLetters text="다양한 분야에서 쌓아 온" delay={0.1} interval={0.025} /><br /><strong><HeroLetters text="실전 프로젝트 경험" delay={0.350} interval={0.025} /></strong></h2>
          <p>웹에이전시, 플랫폼 기업, 프리랜서를 거치며<br />다양한 도메인과 개발 환경을 경험했습니다.</p>
        </div>
        <div className="expertise-grid">
          <div className="expertise-stat reveal"><span>10<span className="plus">+</span></span><p>YEARS EXPERIENCE</p><small>웹 실무 경력</small></div>
          <div className="expertise-stat reveal"><span>200<span className="plus">+</span></span><p>PROJECT EXPERIENCE</p><small>프로젝트 수행 경험</small></div>
          <div className="expertise-skills reveal"><h3>MY TOOLKIT</h3><div className="skill-pills"><span>UX/UI 기획</span><span>Figma · 웹디자인</span><span>HTML · SCSS</span><span>JavaScript</span><span>Vue · Nuxt</span><span>React</span><span>PHP · MySQL</span><span>아임웹</span><span>AI 활용</span></div></div>
        </div>
      </div>
    </section>


    <section className="intro section" id="intro" aria-labelledby="intro-heading">
      <div className="container intro__wrap">
        <div className="section-heading reveal">
          <span className="eyebrow">ABOUT ME</span>
          <h2 id="intro-heading" aria-label="기획부터 디자인, 개발까지 하나의 흐름으로 완성합니다."><HeroLetters text="기획부터 디자인, 개발까지" delay={0.1} interval={0.025} /><br /><strong><HeroLetters text="하나의 흐름으로 완성합니다." delay={0.400} interval={0.025} /></strong></h2>
          <p>10년 이상의 실무 경험과 200여 건의 프로젝트를 바탕으로<br className="desktop-only" /> 브랜드에 맞는 웹 경험을 직접 설계하고 구현합니다.</p>
        </div>
        <AboutStorySlider stories={stories} icons={storyIcons} />
      </div>
    </section>

    

    <section className="history section" id="history" aria-labelledby="history-heading">
      <div className="container">
        <div className="section-heading reveal">
          <span className="eyebrow">MY HISTORY</span>
          <h2 id="history-heading" aria-label="쌓아 온 경험이 지금의 저를 만듭니다."><HeroLetters text="쌓아 온 경험이" delay={0.1} interval={0.025} /><br /><strong><HeroLetters text="지금의 저를 만듭니다." delay={0.250} interval={0.025} /></strong></h2>
          <p>퍼블리싱에서 프론트엔드를 거쳐<br />기획과 브랜드 디자인까지 업무 영역을 넓혀 왔습니다.</p>
        </div>
        <div className="history-list">
          <article className="history-item reveal"><div className="history-item__year">2024.06 — NOW</div><div className="history-item__body"><span className="history-item__category">FREELANCE</span><h3>UX/UI 기획 · 디자인 · 웹사이트 제작</h3><p>브랜드 맞춤형 웹디자인, 아임웹·PHP 기반 홈페이지 제작, React·Vue 기반 UI 구현 및 AI 기술 활용</p></div><span className="history-item__index">03</span></article>
          <article className="history-item reveal"><div className="history-item__year">2021 — 2024</div><div className="history-item__body"><span className="history-item__category">IN-HOUSE</span><h3>플랫폼 기업 · 퍼블리싱 / 프론트엔드</h3><p>배달 플랫폼 서비스 운영, Vue·Nuxt 기반 프론트엔드, 디자인 시스템 및 공통 UI 구축</p></div><span className="history-item__index">02</span></article>
          <article className="history-item reveal"><div className="history-item__year">2015 — 2021</div><div className="history-item__body"><span className="history-item__category">WEB AGENCY</span><h3>웹에이전시 · 웹퍼블리셔</h3><p>공공기관·쇼핑몰·기업 웹사이트 구축, 웹표준과 접근성, 퍼블리싱 컨벤션 및 공통 코드 정립</p></div><span className="history-item__index">01</span></article>
        </div>
        <div className="history-footer reveal"><p>기획부터 완성까지,<br /><strong>브랜드의 가치를 웹으로 구현합니다.</strong></p><a href="#top" className="back-top">BACK TO TOP <span aria-hidden="true">↗</span></a></div>
      </div>
    </section>
  </main>
    {menuOpen && <MobileMenu logo={logo} onClose={() => setMenuOpen(false)} onInquiry={openInquiry} />}
    {inquiry && <Inquiry onClose={() => setInquiry(false)} />}
  </div>;
}
