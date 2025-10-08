import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import gsap from 'gsap';
import SplitType from 'split-type';
import ScrollTrigger from 'gsap/ScrollTrigger';

import '../../assets/scss/page/about.scss';
//component
import ContactLinks from '../../component/inc/ContactLinks';

function About() {
  //about
  useEffect(() => {
    // SplitType 적용 (chars 단위)
    new SplitType('.char_text', { types: 'chars' });

    // char_text 모션
    gsap.timeline().to('.char_text .char', {
      opacity: 1,
      y: '0%',
      duration: 0.3,
      ease: 'power1.out',
      delay: 0.5,
      stagger: 0.03
    });
    // about 텍스트 클래스 순차적 추가
    const triggers = [];

    // 스크롤 트리거 애니메이션
    const items = gsap.utils.toArray('.about .motion_txt');

    items.forEach((motion) => {
      const trigger = gsap.timeline({
        scrollTrigger: {
          trigger: motion,
          start: 'top 100%',
          toggleClass: { targets: motion, className: 'active' },
          scrub: 1,
        // markers: true,
        }
      });
      triggers.push(trigger);
    });

    new SplitType('.char_text', {
      types: 'chars'
    });
    const tl2 = gsap
      .timeline()
      .to(
        '.char_text .char',
        {
          opacity: 1,
          y: '0%',
          duration: 0.3,
          ease: 'power1.out',
          delay: 0.5,
          stagger: 0.03
        },
        0
      )
      .fromTo(
        '.motion_txt  span',
        { y: '100%', opacity: 0, rotate: 8 },
        {
          y: '0%',
          opacity: 1,
          rotate: 0,
          stagger: 0.1,
          duration: 0.3
        },
        '-=0.1'
      );

    return () => {
      triggers.forEach((t) => t.kill());
      tl2.kill();
    };
  }, []);

  return (
    <>
      <main className="about">
        <div className="com_center_wrap">
          <div className="about__txt">
            <p className="h en">
              <span className="char_text">Hello, I'm Coder</span>
            </p>

            <div className="motion_txt h_st">
              <span>
               
                <i className="icon_check"></i>10년 차 웹 퍼블리셔, 다양한 UI/UX 프로젝트 경험
              </span>
            </div>
            <div className="motion_txt h_st">
              <span>
               
                <i className="icon_check"></i>200여 건의 프로젝트 경험있는 디자인 가능한 퍼블리셔
              </span>
            </div>
            <div className="motion_txt">
              <span>
                <a href="#contact" className=" com_btn point l line">
                  Contact me
                </a>
              </span>
            </div>
          </div>
          <div className="about__txt">
            <p className="motion_txt h en">
              <span>About me</span>
            </p>
            <ul className="list">
              <li className="motion_txt">
                <span>
                  <i className="icon_check"></i>에이전시에서 작업한 경험으로 웹에서 보여지는 모든사이트 완벽하게 작업가능합니다.
                </span>
              </li>
              <li className="motion_txt">
								<span>
                <i className="icon_check"></i>UI 퍼포먼스를 극대화하는 개발자</span>
              </li>
              <li className="motion_txt">
								<span>
                <i className="icon_check"></i>반응형에 최적화된 코드로로 최대한 가볍고 빠르게 제작가능합니다.</span>
              </li>
              <li className="motion_txt">
								<span>
                <i className="icon_check"></i>클라이언트가 원하는 인터렉션 기법을 사용하여 작업합니다.</span>
              </li>
              <li className="motion_txt">
								<span>
                <i className="icon_check"></i>Vue/Nuxt 프론트엔드 경험 및 React 기반 퍼블리싱 작업 합니다.</span>
              </li>
            </ul>
          </div>
          <div className="about__txt">
            <p className="motion_txt h en">Skills</p>

            <ul className="list">
              <li className="motion_txt">
                <i className="icon_check"></i>HTML5, SCSS/CSS
              </li>
              <li className="motion_txt">
                <i className="icon_check"></i>TypeScript/Javascript, jQuery
              </li>
              <li className="motion_txt">
                <i className="icon_check"></i> Vue/Nuxt, React,
              </li>
              <li className="motion_txt">
                <i className="icon_check"></i>Scss, Vuetify, Tailwind, Bootstrap
              </li>
              <li className="motion_txt">
                <i className="icon_check"></i>웹접근성 준수 및 인증마크 획득한 경험 유
              </li>
            </ul>
          </div>
          <div className="about__txt" id="contact">
            <p className="motion_txt h en">Contact</p>

            <ul className="list center">
              <li className="motion_txt">
                <Link to="tel:01065791828" className=" head__about-tel">
                  Tel: 010-6579-1828
                </Link>
              </li>
              <li className="motion_txt">
                <Link to="mailto:khr1828@gmail.com">
                  <i>🔗</i> email
                </Link>
              </li>

              <li className="motion_txt">
                <Link to="https://github.com/kimhyera" target="_blank">
                  <i>🔗</i>Github
                </Link>
              </li>

              <li className="motion_txt">
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
