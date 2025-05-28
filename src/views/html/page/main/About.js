import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

import '../../assets/scss/page/about.scss';
//component
import ContactLinks from '../../component/inc/ContactLinks';
function About() {

	//about
	useEffect(() => {
		const tl3 = gsap.timeline({
			scrollTrigger: {
				trigger: '.about',
				start: '-15% 0%',
				end: '100% 100%',
				scrub: 1, //스크롤이 사용될때만 재생
			//markers: true,
			},
		})
			.fromTo('.about__txt .motion_txt',
				{ y: '100%', opacity: 0,scale:0.9 },
				{
					opacity: 1, y:'0%', stagger: 0.1, scale:1,ease: 'Power3.easeOut'

				}, 0
			);
		return () => {
			tl3.kill(); // GSAP 타임라인 제거
		};

	}, []);

	return (
		<>
			<main className="about">
				<div className="pf_center_wrap">
					<div className="about__txt">
						<p className="motion_txt h en">Hello, I'm Coder</p>

						<div className="motion_txt h_st">
							<i className='icon_check'></i>10년 차 웹 퍼블리셔, 다양한 UI/UX 프로젝트 경험
						</div>
						<div className="motion_txt h_st">
							<i className='icon_check'></i>200여 건의 프로젝트 경험있는 디자인 가능한 퍼블리셔
						</div>
						<a href="#contact" className="motion_txt pf_btn point l line">
							Contact me
						</a>
					</div>
					<div className="about__txt">
						<p className="motion_txt h en">About me</p>
						<ul className="list">
							<li className='motion_txt'>
								<i className='icon_check'></i>에이전시에서 작업한 경험으로 웹에서 보여지는 모든사이트 완벽하게 작업가능합니다.
							</li>
							<li className='motion_txt'>
								<i className='icon_check'></i>UI 퍼포먼스를 극대화하는 개발자
							</li>
							<li className='motion_txt'>
								<i className='icon_check'></i>반응형에 최적화된 코드로로 최대한 가볍고 빠르게 제작가능합니다.
							</li>
							<li className='motion_txt'>
								<i className='icon_check'></i>클라이언트가 원하는 인터렉션 기법을 사용하여 작업합니다.
							</li>
							<li className='motion_txt'>
								<i className='icon_check'></i>Vue/Nuxt 프론트엔드 경험 및 React 기반 퍼블리싱 작업 합니다.
							</li>
						</ul>
					</div>
					<div className="about__txt">
						<p className="motion_txt h en">Skills</p>

						<ul className="list">
							<li className='motion_txt'>
								<i className='icon_check'></i>HTML5, SCSS/CSS
							</li>
							<li className='motion_txt'>
								<i className='icon_check'></i>TypeScript/Javascript, jQuery
							</li>
							<li className='motion_txt'>
								<i className='icon_check'></i> Vue/Nuxt, React,
							</li>
							<li className='motion_txt'>
								<i className='icon_check'></i>Scss, Vuetify, Tailwind, Bootstrap
							</li>
							<li className='motion_txt'>
								<i className='icon_check'></i>웹접근성 준수 및 인증마크 획득한 경험 유
							</li>
						</ul>
					</div>
					<div className="about__txt" id="contact">
						<p className="motion_txt h en">Contact</p>

						<ul className="list center">
							<li className='motion_txt'>
								<Link to="tel:01065791828" className="motion_txt head__about-tel">
									Tel: 010-6579-1828
								</Link>
							</li>
							<li className='motion_txt'>
								<Link to="mailto:khr1828@gmail.com">
									<i>🔗</i> email
								</Link>
							</li>

							<li className='motion_txt'>
								<Link to="https://github.com/kimhyera" target="_blank">
									<i>🔗</i>Github
								</Link>
							</li>

							<li className='motion_txt'>
								<Link to="https://enshrined-cone-70b.notion.site/c37bdd09de3043909972c701a71be573" target="_blank">
									<i>🔗</i>Notion
								</Link>
							</li>
						</ul>
						<ContactLinks />
					</div>
				</div>
			</main>
		</>
	);
}

export default About;
