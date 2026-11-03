import React, { useEffect, useRef, useState } from 'react';
import './about-story-slider.css';

export default function AboutStorySlider({ stories, icons }) {
  const scene = useRef(null);
  const stage = useRef(null);
  const track = useRef(null);
  const control = useRef(null);
  const [active, setActive] = useState(0);
  const activeRef = useRef(0);
  useEffect(() => {
    const element = scene.current;
    const panel = stage.current;
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)');
    let frame = 0;
    let start = 0;
    let step = 0;
    let hold = 0;
    let pinned = false;
    const last = stories.length - 1;
    const clamp = value => Math.max(0, Math.min(last, value));
    function render(position) {
      const index = Math.round(position);
      track.current.style.transform = 'translate3d(' + (-100 * position) + '%, 0, 0)';
      if (index !== activeRef.current) { activeRef.current = index; setActive(index); }
    }
    function update() {
      frame = 0;
      if (pinned) render(clamp((window.scrollY - start - hold) / step));
    }
    function schedule() { if (!frame) frame = requestAnimationFrame(update); }
    function measure() {
      const header = document.querySelector('.rp-header')?.getBoundingClientRect().height || 84;
      const top = header + 16;
      element.style.setProperty('--story-top', top + 'px');
      pinned = panel.offsetHeight + top + 16 <= window.innerHeight;
      step = Math.max(480, window.innerHeight * .8);
      hold = step * .22;
      element.classList.toggle('is-pinned', pinned);
      element.style.height = pinned ? (panel.offsetHeight + step * last + hold * 2) + 'px' : 'auto';
      start = element.getBoundingClientRect().top + window.scrollY - top;
      if (pinned) update();
    }
    function goTo(index) {
      const target = clamp(index);
      if (pinned) window.scrollTo({ top: start + hold + target * step, behavior: reduced.matches ? 'instant' : 'smooth' });
      else render(target);
    }
    control.current = goTo;
    const observer = new ResizeObserver(measure);
    observer.observe(panel);
    window.addEventListener('resize', measure);
    window.addEventListener('scroll', schedule, { passive: true });
    measure();
    return () => { observer.disconnect(); cancelAnimationFrame(frame); window.removeEventListener('resize', measure); window.removeEventListener('scroll', schedule); control.current = null; };
  }, [stories.length]);
  const go = index => control.current?.(index);
  function onKeyDown(event, index) {
    if (!['ArrowRight','ArrowLeft','Home','End'].includes(event.key)) return;
    event.preventDefault();
    const next = event.key === 'Home' ? 0 : event.key === 'End' ? stories.length - 1 : Math.max(0, Math.min(stories.length - 1, index + (event.key === 'ArrowRight' ? 1 : -1)));
    go(next);
    stage.current.querySelector('#about-story-tab-' + next)?.focus({ preventScroll: true });
  }
  return <div ref={scene} className="about-slider-scene">
    <div ref={stage} className="about-slider-stage">
      <div className="about-slider-window">
        <div ref={track} className="about-slider-track">
          {stories.map((story, index) => <article key={story.meta} className="about-slide" id={'about-story-panel-' + index} role="tabpanel" aria-labelledby={'about-story-tab-' + index} aria-hidden={active !== index} inert={active !== index}>
            <div className="about-slide-heading"><p className="about-slide-number">{String(index + 1).padStart(2, '0')} / {String(stories.length).padStart(2, '0')}</p>
              <h3>{story.title.map((line, i) => <React.Fragment key={line}>{i > 0 && <br />}{line}</React.Fragment>)}</h3>
              <p className="about-slide-meta">{story.meta}</p>
            </div>
            <img className="about-slide-art" src={icons[index]} alt="" width="240" height="240" />
            <div className="about-slide-description"><p>{story.description}</p></div>
          </article>)}
        </div>
      </div>
      <div className="about-slider-tabs" role="tablist" aria-label="주요 업무 영역">
        {stories.map((story, index) => <button type="button" key={story.meta} id={'about-story-tab-' + index} role="tab" aria-selected={active === index} aria-controls={'about-story-panel-' + index} tabIndex={active === index ? 0 : -1} className={active === index ? 'is-active' : ''} onClick={() => go(index)} onKeyDown={event => onKeyDown(event, index)}>
          <span>{story.title.map((line, i) => <React.Fragment key={line}>{i > 0 && <br />}{line}</React.Fragment>)}</span><img src={icons[index]} alt="" width="100" height="100" />
        </button>)}
      </div>
      <div className="about-slider-controls"><span aria-live="polite">{String(active + 1).padStart(2,'0')} — {String(stories.length).padStart(2,'0')}</span><button type="button" aria-label="이전 소개" disabled={active === 0} onClick={() => go(active - 1)}>←</button><button type="button" aria-label="다음 소개" disabled={active === stories.length - 1} onClick={() => go(active + 1)}>→</button></div>
    </div>
  </div>;
}
