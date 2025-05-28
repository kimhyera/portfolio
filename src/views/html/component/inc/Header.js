import React, { useState, useEffect } from 'react';
import { useLocation, NavLink } from 'react-router-dom';

import gsap from 'gsap';
//img
import logoUrl from '../../assets/img/logo.svg';
//component
import ContactLinks from '../../component/inc/ContactLinks';
function Header() {
	const location = useLocation(); // 현재 경로 가져오기
	const [barMenu, setBarMenu] = useState(false);
	const [isMobile, setIsMobile] = useState(window.innerWidth <= 1279); // 모바일 여부 체크
	console.log(isMobile);


	//Nav 메뉴
	const toggleBarMenu = () => {
		setBarMenu((current) => {
			const next = !current;

			if (next) {
				gsap.to('.nav__bg', { scale: 35,  duration:0.4, });
				gsap.to('.nav', { opacity: 1, 'pointer-events': 'auto' });
				gsap.to('.nav .FadeUp', { opacity: 1, y: -30, stagger: 0.1, ease: 'Power3.easeOut' }, '<0.5');
			} else {
				resetNav();
			}

			return next;
		});
	};
	function resetNav() {
		gsap.to('.nav', { opacity: 0, y: 0 ,'pointer-events': 'none' }, '<');
		gsap.to('.nav__bg', { scale: 0,  duration: 0.4});
		gsap.fromTo('.nav .FadeUp', { opacity: 1, y: 0 }, { opacity: 0, y: 30, stagger: 0.1, ease: 'Power3.easeOut' });
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
		tl.to('.start_bg', { top: '-100vh', ease: 'expo.inOut', duration: 1 })
			.fromTo('.nav__open', { opacity: 0, x: 30 }, { opacity: 1, x: 0, stagger: 0.1, ease: 'Power.easeInOut' }, '<0.5')

	}, [location.pathname]);

	return (
		<>
			<header className="head">
				<div className="pf_center_wrap">
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

							<NavLink  className={`nav_item FadeUp  ${location.pathname === '/Main' ? 'active' : ''}`} activeclassname="active" to="/Main" onClick={() => {
								resetNav();
								setBarMenu(false);
							}}>
								MAIN
							</NavLink>
							<NavLink className="nav_item FadeUp" activeclassname="active" to="/About" onClick={() => {
								resetNav();
								setBarMenu(false);
							}}>
								ABOUT
							</NavLink>
							<NavLink className="nav_item FadeUp" activeclassname="active" to="/Work" onClick={() => {
								resetNav();
								setBarMenu(false);
							}}>
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
				{/*<span className="star yellow"></span>*/}
			</div>

			<section className="top_section">
				{/*<div className="pf_center_wrap">
          <div className="about_row">
            <div className="box_l">
              UI/UX 디자인부터 퍼블리싱
              <br />
              <span className="line"> 10년 이상, 200+ 프로젝트</span> 경험으로 <br />
              웹접근성과 사용성을 고려한 퍼블리싱과 <br />
              디자인 시스템 기반의 체계적 UI 설계를 모두 수행합니다.
            </div>
            <ul className="list">
              <li>
                <span className="icon_html"></span> 웹 접근성 중심 UI 마크업
              </li>
              <li>
                <span className="icon_js"></span> 사용자 중심 인터랙션 구현
              </li>
              <li>
                <span className="icon_react"></span>
                <span className="icon_vue"></span> React / Vue 프론트 퍼블리싱
              </li>
              <li>
                <span className="icon_git"></span> Git 협업 기반 팀 프로젝트 경험
              </li>
              <li>
                <span className="icon_pigma"></span>디자인 시스템 기반 UI 설계
              </li>
            </ul>
          </div>
        </div>*/}
			</section>
		</>
	);
}
export default Header;
