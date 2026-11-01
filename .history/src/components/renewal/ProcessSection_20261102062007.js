import React, { useEffect, useRef } from 'react';

const steps = [
    { label: 'CONSULTING', title: '상담 및 요구사항 정리', description: '프로젝트의 목적과 요구사항을 확인하고, 방향성과 범위를 구체화합니다.', tags: ['요구사항 파악', '목표 설정', '범위 협의'] },
    { label: 'PLANNING', title: '기획 및 구조 설계', description: '필요한 콘텐츠와 기능을 정의하고, 사용자 흐름을 설계합니다.', tags: ['정보 구조', '콘텐츠 정리', '화면 기획'] },
    { label: 'DESIGN', title: '디자인 및 UI 구성', description: '브랜드에 맞는 시각 디자인을 진행하고, 사용 경험을 고려한 UI를 설계합니다.', tags: ['UI 디자인', '컴포넌트 구성', '디자인 시스템'] },
    { label: 'DEVELOPMENT', title: '구현 및 제작', description: '디자인을 기반으로 실제 동작하는 화면을 구현합니다.', tags: ['HTML/CSS', 'JavaScript', '기능 구현'] },
    { label: 'LAUNCH', title: '오픈 및 운영', description: '최종 점검을 거쳐 사이트를 오픈하고, 안정적인 운영과 개선을 진행합니다.', tags: ['최종 점검', '사이트 오픈', '운영 및 개선'] }
];
const clamp = (value) => Math.max(0, Math.min(1, value));

export default function ProcessSection() {
    const ref = useRef(null);
    useEffect(() => {
        const section = ref.current;
        const stage = section.querySelector('.fw-process-sticky');
        const viewport = section.querySelector('.fw-process-window');
        const list = viewport.querySelector('ol');
        const items = [...list.children];
        const reduced = window.matchMedia('(prefers-reduced-motion: reduce)');
        const desktop = window.matchMedia('(min-width: 1000px) and (min-height: 700px)');
        let frame = 0;
        let measureFrame = 0;
        let disposed = false;
        let distance = 0;
        let travel = 1400;
        let isStatic = false;
        function update() {
            frame = 0;
            if (disposed) return;
            const p = isStatic ? 0 : clamp((50 - section.getBoundingClientRect().top) / Math.max(1, travel));
            section.style.setProperty('--fw-process-progress', p);
            section.style.setProperty('--fw-process-list-y', `${-distance * p}px`);
            const active = isStatic ? -1 : Math.round(p * (items.length - 1));
            items.forEach((item, index) => {
                item.classList.toggle('fw-step-active', index === active);
                item.classList.toggle('fw-step-complete', index < active);
                if (index === active) item.setAttribute('aria-current', 'step');
                else item.removeAttribute('aria-current');
            });
        }
        function queue() {
            if (!frame && !disposed) frame = requestAnimationFrame(update);
        }
        function measure() {
            measureFrame = 0;
            if (disposed) return;
            isStatic = reduced.matches || !desktop.matches;
            section.classList.toggle('is-static', isStatic);
            distance = Math.max(0, list.scrollHeight - viewport.clientHeight);
            travel = Math.max(1400, distance + window.innerHeight * 1.2);
            const height = isStatic ? 'auto' : `${Math.round(stage.offsetHeight + travel)}px`;
            if (section.style.getPropertyValue('--fw-process-height') !== height) section.style.setProperty('--fw-process-height', height);
            queue();
        }
        function queueMeasure() {
            if (!measureFrame && !disposed) measureFrame = requestAnimationFrame(measure);
        }
        const observer = new ResizeObserver(queueMeasure);
        [stage, viewport, list].forEach((element) => observer.observe(element));
        window.addEventListener('scroll', queue, { passive: true });
        window.addEventListener('resize', queueMeasure, { passive: true });
        window.addEventListener('portfolio:render', queueMeasure);
        reduced.addEventListener('change', queueMeasure);
        desktop.addEventListener('change', queueMeasure);
        document.fonts?.ready.then(queueMeasure);
        queueMeasure();
        return () => {
            disposed = true;
            cancelAnimationFrame(frame);
            cancelAnimationFrame(measureFrame);
            observer.disconnect();
            window.removeEventListener('scroll', queue);
            window.removeEventListener('resize', queueMeasure);
            window.removeEventListener('portfolio:render', queueMeasure);
            reduced.removeEventListener('change', queueMeasure);
            desktop.removeEventListener('change', queueMeasure);
        };
    }, []);

    return (
        <section id="process" className="fw-process" aria-label="제작 과정" ref={ref}>
            <div className="fw-process-sticky">
                <div className="fw-process-grid">
                    <div className="section-head fw-process-heading">
                        <div>
                            <p className="section-label">PROCESS</p>
                            <h2 className="section-title">
                               
                               
                      생각을 설계하고, <br />
  화면으로 구현합니다.
                            </h2>
                        </div>
                        <p className="text-body">
                    기획부터 디자인, 개발과 검증까지 <br />
사용자 경험을 완성하는 저만의 작업 과정입니다.
                        </p>
                    </div>
                    <div className="fw-process-window">
                        <span className="fw-process-rail" aria-hidden="true">
                            <i />
                            <b />
                        </span>
                        <ol>
                            {steps.map((step, index) => (
                                <li key={step.label}>
                                    <small>
                                        0{index + 1} / {step.label}
                                    </small>
                                    <h3 className="card-title">{step.title}</h3>
                                    <p className="text-body">{step.description}</p>
                                    <div className="rp-tags">
                                        {step.tags.map((tag) => (
                                            <span key={tag}>{tag}</span>
                                        ))}
                                    </div>
                                </li>
                            ))}
                        </ol>
                    </div>
                </div>
            </div>
        </section>
    );
}
