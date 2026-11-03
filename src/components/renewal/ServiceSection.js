import { ArrowLeft, ArrowRight } from 'lucide-react';
import React, { useEffect, useRef, useState } from 'react';

const services = [
  ['10년 이상의\n실무 경험', '다양한 산업과 서비스에서 쌓은\n경험으로 프로젝트에 적합한\n구현 방법을 고민합니다.'],
  ['기획부터 구현까지,\n하나의 흐름으로', '기획과 디자인의 의도를 이해하고,\n화면 설계부터 실제 구현까지\n유연하게 연결합니다.'],
  ['디자인의 디테일까지,\n정교한 웹 퍼블리싱', '디자인을 섬세하게 구현하고,\n다양한 화면에서도 완성도 높은\nUI를 만듭니다.'],
  ['화면을 넘어,\n실제 기능까지 개발', 'Vue·Nuxt와 API 연동을 통해\n실제 서비스에서 동작하는\n기능을 개발합니다.'],
  ['SEO는 탄탄하게,\nAI는 스마트하게', '검색 친화적인 웹 구조를 설계하고,\nAI를 활용해 작업의 효율과\n완성도를 높입니다.'],
  ['꼼꼼한 검수,\n안정적인 유지보수', '다양한 기기와 브라우저에서\n확인하고, 오픈 이후의 개선과\n유지보수까지 고려합니다.'],
];
const clamp = (value, max = 1) => Math.max(0, Math.min(max, value));

export default function ServiceSection({ onInquiry }) {
  const scene = useRef(null);
  const controller = useRef(null);
  const [current, setCurrent] = useState(0);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const element = scene.current;
    const stage = element.querySelector('.rp-service-sticky');
    const viewport = element.querySelector('.rp-service-window');
    const track = element.querySelector('.rp-service-track');
    const cards = [...track.children];
    const portfolioRoot = element.closest('.rp');
    const workTitle = portfolioRoot.querySelector('.rp-portfolio-title');
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)');
    let distance = 0;
    let travel = 0;
    let header = 84;
    let frame = 0;
    let measureFrame = 0;
    let measuring = false;
    let native = false;
    let disposed = false;
    const hold = 280;

    function update() {
      frame = 0;
      if (disposed) return;
      const rect = element.getBoundingClientRect();
      if (rect.top < window.innerHeight * 0.8) element.classList.add('is-visible');
      const expansion = reduced.matches ? 1 : clamp((window.innerHeight * 0.9 - rect.top) / (window.innerHeight * 0.7));
      stage.style.setProperty('--service-inset', `${(1 - expansion) * 5}%`);
      stage.style.setProperty('--service-radius', `${(1 - expansion) * 38}px`);
      const p = native ? clamp(viewport.scrollLeft / Math.max(1, distance)) : clamp((header - rect.top - hold) / Math.max(1, distance));
      track.style.transform = native ? '' : `translate3d(${-distance * p}px, 0, 0)`;
      stage.style.setProperty('--service-progress', p);
      if (workTitle) {
        const titleRect = workTitle.getBoundingClientRect();
        const exit = clamp(
          (window.innerHeight / 5 - titleRect.top - titleRect.height / 2) /
          Math.max(1, window.innerHeight * 0.15)
        );
        portfolioRoot.style.setProperty('--portfolio-inversion', exit);
      }
      setProgress(p);
      setCurrent(Math.round(p * (services.length - 1)));
    }
    function queue() { if (!frame && !disposed) frame = requestAnimationFrame(update); }
    function queueMeasure() {
      if (measureFrame || disposed) return;
      measureFrame = requestAnimationFrame(() => {
        measureFrame = 0;
        measure();
      });
    }
    function measure() {
      if (disposed || measuring) return;
      measuring = true;
      header = document.querySelector('.rp-header')?.offsetHeight || 84;
      const headerValue = `${header}px`;
      if (element.style.getPropertyValue('--service-top') !== headerValue) element.style.setProperty('--service-top', headerValue);
      native = portfolioRoot.classList.contains('is-capture') || reduced.matches || window.innerHeight - header < 600;
      if (element.classList.contains('is-native') !== native) element.classList.toggle('is-native', native);
      distance = Math.max(0, track.scrollWidth - viewport.clientWidth);
      travel = distance + hold + Math.max(420, window.innerHeight * 0.65);
      const sceneHeight = native ? '' : `${Math.round(stage.offsetHeight + travel)}px`;
      if (element.style.height !== sceneHeight) element.style.height = sceneHeight;
      measuring = false;
      queue();
    }
    function advance(direction, targetIndex) {
      const offset = targetIndex === undefined
        ? clamp(clamp(native ? viewport.scrollLeft : header - element.getBoundingClientRect().top - hold, distance) + direction * (cards[1].offsetLeft - cards[0].offsetLeft), distance)
        : clamp(cards[targetIndex].offsetLeft - cards[0].offsetLeft, distance);
      const behavior = reduced.matches ? 'instant' : 'smooth';
      if (native) viewport.scrollTo({ left: offset, behavior });
      else window.scrollTo({ top: window.scrollY + element.getBoundingClientRect().top - header + hold + offset, behavior });
    }
    controller.current = advance;
    function onFocus(event) {
      const card = event.target.closest('.rp-service-card');
      if (card) advance(0, cards.indexOf(card));
    }
    // ResizeObserver must not write layout during its own notification cycle.
    const resizeObserver = new ResizeObserver(queueMeasure);
    resizeObserver.observe(stage);
    resizeObserver.observe(viewport);
    resizeObserver.observe(track);
    track.addEventListener('focusin', onFocus);
    viewport.addEventListener('scroll', queue, { passive: true });
    window.addEventListener('scroll', queue, { passive: true });
    window.addEventListener('resize', queueMeasure, { passive: true });
    reduced.addEventListener('change', queueMeasure);
    document.fonts?.ready.then(queueMeasure);
    queueMeasure();
    return () => {
      disposed = true;
      cancelAnimationFrame(frame);
      cancelAnimationFrame(measureFrame);
      resizeObserver.disconnect();
      track.removeEventListener('focusin', onFocus);
      viewport.removeEventListener('scroll', queue);
      window.removeEventListener('scroll', queue);
      window.removeEventListener('resize', queueMeasure);
      reduced.removeEventListener('change', queueMeasure);
      controller.current = null;
      portfolioRoot.style.removeProperty('--portfolio-inversion');
    };
  }, []);

  return <section id="what-i-do" className="rp-what-i-do" aria-labelledby="rp-service-intro-title">
    <div className="rp-section-heading rp-centered rp-service-intro rp-heading-standard"><p className="rp-eyebrow">WHAT I DO</p><h2 id="rp-service-intro-title">생각을 화면으로,<br /><em>화면을 경험으로 완성합니다.</em></h2><p>기획, 디자인, 퍼블리싱, 프론트엔드 개발, 웹빌더 작업까지<br />하나의 실무 워크플로우로 연결해, 아이디어를 실제 서비스로 구현합니다.</p></div>
    <div className="rp-service-scene" ref={scene}>
      <div className="rp-service-sticky">
        <div className="rp-service-heading"><div></div><div className="rp-service-controls"><span>스크롤하며 살펴보세요</span><button type="button" onClick={() => controller.current?.(-1)} disabled={progress <= 0} aria-label="이전 서비스"><ArrowLeft size={19} aria-hidden="true" /></button><button type="button" onClick={() => controller.current?.(1)} disabled={progress >= 1} aria-label="다음 서비스"><ArrowRight size={19} aria-hidden="true" /></button></div></div>
        <div className="rp-service-window" role="region" aria-label="제작 가능한 서비스 6개" tabIndex={0} onKeyDown={(event) => { if (event.key === 'ArrowRight' || event.key === 'ArrowLeft') { event.preventDefault(); controller.current?.(event.key === 'ArrowRight' ? 1 : -1); } }}>
          <div className="rp-service-track">{services.map(([title, description], index) => <article className="rp-service-card" key={title} style={{ '--card-index': index }}><span className="rp-service-number">0{index + 1}</span><h4>{title}</h4><p>{description}</p><div className={`rp-service-art rp-service-art-${index}`} aria-hidden="true" /><button type="button" className="rp-service-inquiry" onClick={onInquiry} aria-label={`${title} 문의하기`}><ArrowRight size={19} aria-hidden="true" /></button></article>)}</div>
        </div>
        <div className="rp-service-bottom"><span><b>{String(current + 1).padStart(2, '0')}</b> / 06</span><div className="rp-service-meter"><span /></div><span>DESIGN TO DEVELOPMENT</span></div>
      </div>
    </div>
  </section>;
}

