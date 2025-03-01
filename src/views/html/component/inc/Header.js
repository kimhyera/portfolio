import React, {useState, useEffect} from 'react';
import {Link, NavLink, useLocation} from 'react-router-dom';

import gsap from 'gsap';

function Header({animation}) {
  const location = useLocation(); // 현재 경로 가져오기
  const [barMenu, setBarMenu] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 1024); // 모바일 여부 체크

  //Nav 메뉴
  const toggleBarMenu = () => {
    setBarMenu((current) => !current);
    if (!barMenu) {
      gsap.to('.nav__bg', {display: 'flex', scale: 50, duration: 1});
      gsap.fromTo('.nav .item', {opacity: 0, y: 30}, {opacity: 1, y: 0, stagger: 0.1, ease: 'Power3.easeOut'}, '-=0.5');
      gsap.to('.nav', {opacity: 1, 'pointer-events': 'auto'});
    } else {
      resetNav();
    }
  };

  function resetNav() {
    gsap.fromTo('.nav .item', {opacity: 1, y: 0}, {opacity: 0, y: 30, stagger: 0.1, ease: 'Power3.easeOut'});
    gsap.to('.nav', {opacity: 0, 'pointer-events': 'none'}, '<');
    gsap.to('.nav__bg', {display: 'none', scale: 0, duration: 0.5, delay: 0.3});
  }

  //const [position, setPosition] = useState({x: 0, y: 0});

  //useEffect(() => {
  //  const handleMouseMove = (event) => {
  //    setPosition({x: event.clientX, y: event.clientY});
  //  };

  //  window.addEventListener('mousemove', handleMouseMove);
  //  return () => {
  //    window.removeEventListener('mousemove', handleMouseMove);
  //  };
  //}, []);
  // 창 크기 변경 시 모바일 여부 업데이트
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 1024);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    setBarMenu(false);

    const tl = gsap.timeline();
    tl.fromTo('.start_bg', {top: '0'}, {top: '-100vh', ease: 'expo.inOut', duration: 1}) // 배경 애니메이션
      .fromTo('.portfolio__item ,.about__txt', {opacity: 0, y: 30}, {opacity: 1, y: 0, stagger: 0.1, ease: 'Power3.easeOut'}, '<0.7') //콘텐츠 애니메이션
      .fromTo('.pf_tab .tab', {opacity: 0, x: 30}, {opacity: 1, x: 0, stagger: 0.1, ease: 'Power3.easeOut'}, '<0.1')
      .fromTo('.head__about', {opacity: 0, x: -30}, {opacity: 1, x: 0, stagger: 0.1, ease: 'Power3.easeOut'}, '<0.1');
    if (isMobile) {
      document.querySelector('.nav__open ').classList.remove('active');
     
    gsap.fromTo('.nav .item', {opacity: 1, y: 0}, {opacity: 0, y: 30, stagger: 0.1, ease: 'Power3.easeOut'});
    gsap.to('.nav', {opacity: 0, 'pointer-events': 'none'}, '<');
    gsap.to('.nav__bg', {display: 'none', scale: 50, duration: 0.1});
    } else {
      gsap.to('.nav', {opacity: 1, 'pointer-events': 'auto'});
      tl.fromTo('.nav .item', {opacity: 0, x: -40}, {opacity: 1, x: 0, stagger: 0.1, ease: 'Power3.easeOut'}, '<0.1');
    }
  }, [location.pathname, isMobile]);

	

  return (
    <>
      <header className="head">
        <div className="head__about">
          <p className="head__about-txt" onClick={animation}>
            <i>🏆</i>퍼블리셔 10년차 <strong className="name">김혜라 입니다!</strong> <br />
          </p>
          <p className="head__about-desc"> 200여건의 프로젝트 경험과 노하우</p>
          <div className="head__about-links">
            <Link to="mailto:khr1828@gmail.com"> 🔗email </Link>
            <Link to="https://github.com/kimhyera" target="_blank">
              🔗Github
            </Link>
            <Link to="https://www.notion.so/c37bdd09de3043909972c701a71be573" target="_blank">
              🔗Notion
            </Link>
            <Link to="tel:01065791828" className="head__about-tel">
               Tel: 010-6579-1828
            </Link>
          </div>
        </div>

        <span className="nav__bg"></span>
        <nav className={`nav  ${barMenu ? 'active' : ''}`}>
          <NavLink className="item" activeclassname="active" to="/About">
            About
          </NavLink>
          <NavLink className="item" activeclassname="active" to="/">
            Portfolio
          </NavLink>
        </nav>

        <button className={`nav__open ${barMenu ? 'active' : ''}`} onClick={toggleBarMenu}>
          <span className="item"></span>
          <span className="item"></span>
          <span className="item"></span>
        </button>
      </header>
      <div className="start_bg"></div>
      {/*<span className="cusor_bg" style={{
          transform: `translate(${position.x}px, ${position.y}px)`,
        }} ></span>*/}

      <div className="star_area">
        <span className="star blue"></span>
        {/*<span className="star yellow"></span>*/}
      </div>
    </>
  );
}
export default Header;
