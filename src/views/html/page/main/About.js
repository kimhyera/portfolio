import React from 'react';
import {Link} from 'react-router-dom';

import '../../assets/scss/page/about.scss';
//component
import ContactLinks from '../../component/inc/ContactLinks';
function About() {
  return (
    <>
      <main className="about">
        <div className="pf_center_wrap">
          <div className="about__txt">
            <p className="h">Hello, I'm Coder</p>

            <div className="h_st">
              <i>✅</i>10년 차 웹 퍼블리셔, 다양한 UI/UX 프로젝트 경험
            </div>
            <div className="h_st">
              <i>✅</i>200여 건의 프로젝트 경험있는 디자인 가능한 퍼블리셔
            </div>
            <a href="#contact" className="pf_btn point  s">
              Contact me
            </a>
          </div>
          <div className="about__txt">
            <p className="h">About me</p>
            <ul className="list">
              <li>
                <i>✅</i>에이전시에서 작업한 경험으로 웹에서 보여지는 모든사이트 완벽하게 작업가능합니다.
              </li>
              <li>
                <i>✅</i>UI 퍼포먼스를 극대화하는 개발자
              </li>
              <li>
                <i>✅</i>반응형에 최적화된 코드로로 최대한 가볍고 빠르게 제작가능합니다.
              </li>
              <li>
                <i>✅</i>클라이언트가 원하는 인터렉션 기법을 사용하여 작업합니다.
              </li>
              <li>
                <i>✅</i>Vue/Nuxt 프론트엔드 경험 및 React 기반 퍼블리싱 작업 합니다.
              </li>
            </ul>
          </div>
          <div className="about__txt">
            <p className="h">Skills</p>

            <ul className="list">
              <li>
                <i>✅</i>HTML5, SCSS/CSS
              </li>
              <li>
                <i>✅</i>TypeScript/Javascript, jQuery
              </li>
              <li>
                <i>✅</i> Vue/Nuxt, React,
              </li>
              <li>
                <i>✅</i>Scss, Vuetify, Tailwind, Bootstrap
              </li>
              <li>
                <i>✅</i>웹접근성 준수 및 인증마크 획득한 경험 유
              </li>
            </ul>
          </div>
          <div className="about__txt" id="contact">
            <p className="h">Contact</p>

            <ul className="list">
              <li>
                <Link to="tel:01065791828" className="head__about-tel">
                  Tel: 010-6579-1828
                </Link>
              </li>
              <li>
                <Link to="mailto:khr1828@gmail.com">
                  <i>🔗</i> email
                </Link>
              </li>

              <li>
                <Link to="https://github.com/kimhyera" target="_blank">
                  <i>🔗</i>Github
                </Link>
              </li>

              <li>
                <Link to="https://enshrined-cone-70b.notion.site/c37bdd09de3043909972c701a71be573" target="_blank">
                  <i>🔗</i>Notion
                </Link>
              </li>
            </ul>
          </div>
            <ContactLinks />
        </div>
      </main>
    </>
  );
}

export default About;
