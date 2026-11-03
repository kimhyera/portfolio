import React, { useEffect, useRef } from 'react';
import { X, ChevronRight, Phone, Mail, ArrowUpRight, CodeXml } from 'lucide-react';
import navigation from './navigation';
import { Link, useLocation } from 'react-router-dom';


export default function MobileMenu({ logo, onClose, onInquiry }) {
  const { pathname } = useLocation();
  const home = pathname === '/' || pathname.toLowerCase() === '/main';
  const targetFor = id => id === 'about' ? '/About' : `${home ? '' : '/'}#${id}`;
  const ref = useRef(null);
  const closeRef = useRef(onClose);
  closeRef.current = onClose;
  function navigate(event, id) {
    if (id === 'about' || !home) { onClose(); return; }
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
    <div className="rp-mobile-menu-content"><div className="rp-mobile-menu-top"><Link to="/#home" onClick={(event) => navigate(event, 'home')} aria-label="김혜라 포트폴리오 처음으로"><img src={logo} alt="hyera" /></Link>
	<button type="button" className="rp-mobile-menu-close" onClick={onClose} aria-label="메뉴 닫기" autoFocus><X size={23} aria-hidden="true" /></button></div>
      <nav aria-label="모바일 주요 메뉴">{navigation.map(([id, label]) => <Link key={id} to={targetFor(id)} onClick={(event) => navigate(event, id)} className={id === 'contact' ? 'is-contact' : ''}>{label}<ChevronRight size={20} aria-hidden="true" /></Link>)}</nav>
      <div className="rp-mobile-menu-channels"><a href="tel:01065791828"><Phone size={16} aria-hidden="true" /> 전화 문의</a><a href="mailto:khr1828@gmail.com"><Mail size={16} aria-hidden="true" /> 이메일</a><a href="https://github.com/kimhyera" target="_blank" rel="noopener noreferrer"><CodeXml size={16} aria-hidden="true" /> GitHub</a></div>
      <button type="button" className="rp-mobile-menu-inquiry" onClick={onInquiry}>프로젝트 문의하기 <ArrowUpRight size={20} aria-hidden="true" /></button>
    </div><div className="rp-mobile-menu-orbit" aria-hidden="true" />
  </dialog>;
}

