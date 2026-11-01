import React, { useEffect, useRef } from 'react';
import navigation from './navigation';


export default function MobileMenu({ logo, onClose, onInquiry }) {
  const ref = useRef(null);
  const closeRef = useRef(onClose);
  closeRef.current = onClose;
  function navigate(event, id) {
    event.preventDefault();
    onClose();
    // Wait until the dialog releases the page scroll lock before moving.
    requestAnimationFrame(() => {
      const target = document.getElementById(id);
      if (!target) return;
      target.scrollIntoView({ behavior: 'instant', block: 'start' });
      window.history.replaceState(null, '', `#${id}`);
    });
  }
  useEffect(() => {
    const dialog = ref.current;
    const previous = document.activeElement;
    const overflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    dialog.showModal();
    const desktop = window.matchMedia('(min-width: 1025px)');
    const resize = () => { if (desktop.matches) closeRef.current(); };
    desktop.addEventListener('change', resize);
    return () => {
      desktop.removeEventListener('change', resize);
      dialog.close();
      document.body.style.overflow = overflow;
      previous?.focus({ preventScroll: true });
    };
  }, []);
  return <dialog ref={ref} id="rp-mobile-menu" className="rp-mobile-menu" aria-label="모바일 전체 메뉴" onCancel={(event) => { event.preventDefault(); onClose(); }}>
    <div className="rp-mobile-menu-content"><div className="rp-mobile-menu-top"><a href="#home" onClick={(event) => navigate(event, 'home')} aria-label="김혜라 포트폴리오 처음으로"><img src={logo} alt="hyera" /></a><button type="button" className="rp-mobile-menu-close" onClick={onClose} aria-label="메뉴 닫기" autoFocus>×</button></div>
      <nav aria-label="모바일 주요 메뉴">{navigation.map(([id, label]) => <a key={id} href={`#${id}`} onClick={(event) => navigate(event, id)} className={id === 'contact' ? 'is-contact' : ''}>{label}<span aria-hidden="true">›</span></a>)}</nav>
      <div className="rp-mobile-menu-channels"><a href="tel:01065791828"><span aria-hidden="true">☎</span> 전화 문의</a><a href="mailto:khr1828@gmail.com"><span aria-hidden="true">✉</span> 이메일</a><a href="https://github.com/kimhyera" target="_blank" rel="noopener noreferrer"><svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor" aria-hidden="true"><path d="M12 2a10 10 0 0 0-3.16 19.49c.5.09.68-.22.68-.48v-1.86c-2.78.6-3.37-1.18-3.37-1.18-.45-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.61.07-.61 1 .07 1.53 1.03 1.53 1.03.89 1.53 2.34 1.09 2.91.83.09-.65.35-1.09.64-1.34-2.22-.25-4.55-1.11-4.55-4.94 0-1.09.39-1.99 1.03-2.69-.1-.25-.45-1.27.1-2.65 0 0 .84-.27 2.75 1.03A9.6 9.6 0 0 1 12 6.82c.85 0 1.71.11 2.51.34 1.91-1.3 2.75-1.03 2.75-1.03.55 1.38.2 2.4.1 2.65.64.7 1.03 1.6 1.03 2.69 0 3.84-2.34 4.69-4.57 4.94.36.31.68.92.68 1.85v2.75c0 .27.18.58.69.48A10 10 0 0 0 12 2Z" /></svg> GitHub</a></div>
      <button type="button" className="rp-mobile-menu-inquiry" onClick={onInquiry}>프로젝트 문의하기 <span aria-hidden="true">↗</span></button>
    </div><div className="rp-mobile-menu-orbit" aria-hidden="true" />
  </dialog>;
}

