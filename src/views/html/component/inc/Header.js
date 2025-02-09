import React, {useState, useEffect} from 'react';
import {NavLink,useLocation} from 'react-router-dom';

import gsap from 'gsap';

function Header() {
  const location = useLocation(); // 현재 경로 가져오기
  //햄버거 메뉴
  const [barMenu, setBarMenu] = useState(false);
  //햄버거 메뉴
  const toggleBarMenu = () => {
    setBarMenu((current) => !current);

    if (!barMenu) {
      gsap.to('.nav__bg', {display: 'flex', scale: 50, duration: 1});
      gsap.fromTo('.nav .item', {opacity: 0, y: 30}, {opacity: 1, y: 0, stagger: 0.1, ease: 'Power3.easeOut'}, '-=0.5');

      gsap.to('.nav', {opacity: 1, 'pointer-events': 'auto'});
    } else {
      gsap.fromTo('.nav .item', {opacity: 1, y: 0}, {opacity: 0, y: 30, stagger: 0.1, ease: 'Power3.easeOut'});

      gsap.to('.nav', {opacity: 0, 'pointer-events': 'none'}, '<');
      gsap.to('.nav__bg', {opacity: 'none', scale: 0, duration: 0.5, delay: 0.3});
    }
  };
  useEffect(() => {
    const tl = gsap.timeline();
    // 배경 애니메이션
    tl.fromTo(
      '.start_bg',
      {
        top: '0',
        ease: 'expo.inOut'
      },
      {
        top: '-100%',
        ease: 'expo.inOut',
        duration: 1
      }
    )

      // 로고 애니메이션
      .fromTo(
        '.head__about',
        {
          opacity: 0,
          x: -200,
          ease: 'expo.out'
        },
        {
          opacity: 1,
          x: 0,
          ease: 'expo.out',
          duration: 1
        }
      )

      // 필터 리스트 애니메이션 (스태거)
      .fromTo(
        '.nav .item',
        {
          opacity: 0,
          x: -200
        },
        {
          opacity: 1,
          x: 0,
          stagger: 0.2 // 각 요소가 0.2초씩 간격을 두고 애니메이션
        },
        '<'
      )

      // 텝 애니메이션
      .fromTo(
        '.pf_tab ',
        {
          opacity: 0,
          x: 100
        },
        {
          opacity: 1,
          x: 0,
          duration: 1
        },
        '<0.2'
      )
      // 오른쪽 콘텐츠 애니메이션
      .fromTo(
        '.main_cont_sec',
        {
          opacity: 0,
          y: 30
        },
        {
          opacity: 1,
          y: 0,
          duration: 1
        },
        '<0.3'
      );
  }, [location.pathname]);
  return (
    <>
      <header className="head">
        <div className="head__about">
          <p className="head__about-txt">
            🏆 퍼블리셔 10년 차 김혜라 입니다! <br />
            300여건의 프로젝트 경험과 노하우
          </p>
          <div className="head__about-links"> 🔗email 🔗Github 🔗Notion</div>
          <a href="tel:01065791828" className="head__about-tel">
             Tel: 010-6579-1828
          </a>
        </div>

        <span className="nav__bg"></span>
        <nav className={`nav  ${barMenu ? 'active' : ''}`}>
          <NavLink className="item" activeclassname="active" to="/About">
            About
          </NavLink>
          <NavLink className="item" activeclassname="active" to="/Main">
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
    </>
  );
}
export default Header;
