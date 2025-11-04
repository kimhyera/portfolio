import React, { useState, useEffect } from 'react';
import { useLocation, NavLink } from 'react-router-dom';
//import { useLenis } from '../../../../context/LenisContext';

import gsap from 'gsap';
//img
import logoUrl from '../../assets/img/logo.svg';
//component
import ContactLinks from '../../component/inc/ContactLinks';
function Header() {
  //const lenis = useLenis();
  const location = useLocation(); // 현재 경로 가져오기
  const [barMenu, setBarMenu] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 1279); // 모바일 여부 체크

  useEffect(() => {
    const headEl = document.querySelector('.head');
    const onScroll = () => {
      const y = window.scrollY || document.documentElement.scrollTop;
      if (!headEl) return;
      if (y > 10) headEl.classList.add('scrolled');
      else headEl.classList.remove('scrolled');
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  //Nav 메뉴
  const toggleBarMenu = () => {
    setBarMenu((current) => {
      const next = !current;

      if (next) {
        gsap.to('.nav__bg', { scale: 38, duration: 0.4 });
        gsap.to('.nav', { opacity: 1, 'pointer-events': 'auto' });
        gsap.to('.nav .FadeUp', { opacity: 1, y: -30, stagger: 0.1, ease: 'Power3.easeOut' }, '<0.5');
      } else {
        resetNav();
      }

      return next;
    });
  };
  function resetNav() {
    gsap.to('.nav', { opacity: 0, y: 0, 'pointer-events': 'none' }, '<');
    gsap.to('.nav__bg', { scale: 0, duration: 0.4 });
    gsap.fromTo('.nav .FadeUp', { opacity: 1, y: 0 }, { opacity: 0, y: 30, stagger: 0.1, ease: 'Power3.easeOut' });
  }
  // 창 크기 변경 시 모바일 여부 업데이트
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 1279);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    setBarMenu(false);

    const tl = gsap.timeline();
    gsap.killTweensOf('.portfolio__item');

    // 메뉴 애니메이션 닫기
    gsap.to('.nav', { opacity: 0, 'pointer-events': 'none' }, '<');
    gsap.to('.nav__bg', { scale: 0, duration: 0.4 });
    document.querySelector('.nav__open').classList.remove('active');

    // 새 페이지 콘텐츠 애니메이션
    tl.to('.start_bg', { top: '-100vh', ease: 'expo.inOut', duration: 1 }).fromTo('.nav__open', { opacity: 0, x: 30 }, { opacity: 1, x: 0, stagger: 0.1, ease: 'Power.easeInOut' }, '<0.5');
  }, [location.pathname]);

  //최상단 이동
const handleScrollTop = () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth' // 부드럽게 스크롤
  });
};

  return (
    <>
      <header className="head">
        <div className="com_center_wrap">
          <NavLink to="/" className="logo">
            <img src={logoUrl} alt="" />
          </NavLink>
          <span className="nav__bg"></span>
          <nav className={`nav  ${barMenu ? 'active' : ''}`}>
            <div className="nav_item__wrap">
              {/*<a className={`nav_item FadeUp  ${location.pathname === '/portfolio/Main' ? 'active' : ''}`} href="/Main">
                MAIN
              </a>
              <a  className={`nav_item FadeUp  ${location.pathname === '/portfolio/About' ? 'active' : ''}`}  href="/About">
                ABOUT
              </a>
              <a className={`nav_item FadeUp  ${location.pathname === '/portfolio/Work' ? 'active' : ''}`} href="/Work">
                WORK
              </a>*/}

              <NavLink
                className={`nav_item FadeUp  ${location.pathname === '/Main' ? 'active' : ''}`}
                activeclassname="active"
                to="/Main"
                onClick={() => {
                  resetNav();
                  setBarMenu(false);
                }}
              >
                MAIN
              </NavLink>
              <NavLink
                className="nav_item FadeUp"
                activeclassname="active"
                to="/About"
                onClick={() => {
                  resetNav();
                  setBarMenu(false);
                }}
              >
                ABOUT
              </NavLink>
              <NavLink
                className="nav_item FadeUp"
                activeclassname="active"
                to="/History"
                onClick={() => {
                  resetNav();
                  setBarMenu(false);
                }}
              >
                HISTORY
              </NavLink>
              <NavLink
                className="nav_item FadeUp"
                activeclassname="active"
                to="/Work"
                onClick={() => {
                  resetNav();
                  setBarMenu(false);
                }}
              >
                WORK
              </NavLink>
              {/*<NavLink className="nav_item FadeUp" activeclassname="active" to="/About/#contact">
								CONTACT
							</NavLink>*/}

              <ContactLinks />
            </div>
          </nav>
          <button className={`nav__open ${barMenu ? 'active' : ''}`} onClick={toggleBarMenu}>
            <span className="item"></span>
            <span className="item"></span>
            <span className="item"></span>
          </button>
        </div>
      </header>
      <div className="start_bg"></div>
      {/*<span className="cusor_bg" style={{
          transform: `translate(${position.x}px, ${position.y}px)`,
        }} ></span>*/}

      <div className="star_area">
        <span className="star blue"></span>
      </div>
      <button className="btn_scroll_top" onClick={handleScrollTop}>
        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="10" viewBox="0 0 18 10" fill="none">
          <path d="M17 9L9 1L1 9" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
        </svg>
      </button>
    </>
  );
}
export default Header;
