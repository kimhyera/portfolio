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
                    scrub: 1,
                    //toggleClass: { targets: motion, className: 'active' },
                    onEnter: () => motion.classList.add('active') // 올라갈 때(active 유지)
                    // onLeaveBack: () => motion.classList.remove('active'), ← 제거 안함!
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
                    duration: 0.4
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
                                <i className="icon_check"></i>10년 차 웹 퍼블리셔 · UI/UX 프로젝트 실무 중심 경험
                            </span>
                        </div>
                        <div className="motion_txt h_st">
                            <span>
                                <i className="icon_check"></i>200+ 프로젝트 수행 · 아임웹·영카트 커스터마이징 가능
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
                                    <i className="icon_check"></i>에이전시 실무 경험을 바탕으로 다양한 유형의 웹 사이트 구축 가능
                                </span>
                            </li>
                            <li className="motion_txt">
                                <span>
                                    <i className="icon_check"></i>UI 퍼포먼스와 사용성을 고려한 시맨틱 마크업 및 인터랙션 구현
                                </span>
                            </li>
                            <li className="motion_txt">
                                <span>
                                    <i className="icon_check"></i>반응형 환경에 최적화된 가볍고 빠른 UI 퍼블리싱
                                </span>
                            </li>
                            <li className="motion_txt">
                                <span>
                                    <i className="icon_check"></i>클라이언트 요구에 맞춘 인터랙션 설계 및 구현 경험
                                </span>
                            </li>
                            <li className="motion_txt">
                                <span>
                                    <i className="icon_check"></i>Vue/Nuxt 프론트엔드 경험 및 React 기반 퍼블리싱 협업
                                </span>
                            </li>
                            <li className="motion_txt">
                                <span>
                                    <i className="icon_check"></i>아임웹·영카트 기반 사이트 구축 및 커스터마이징 경험
                                </span>
                            </li>
                        </ul>
                    </div>
                    <div className="about__txt">
                        <p className="motion_txt h en">Skills</p>

                        <ul className="list">
                            <li className="motion_txt">
                                <i className="icon_check"></i>HTML5, SCSS / CSS
                            </li>
                            <li className="motion_txt">
                                <i className="icon_check"></i>JavaScript, TypeScript, jQuery
                            </li>
                            <li className="motion_txt">
                                <i className="icon_check"></i>Vue, Nuxt, React
                            </li>
                            <li className="motion_txt">
                                <i className="icon_check"></i>Vuetify, Tailwind CSS, Bootstrap
                            </li>
                            <li className="motion_txt">
                                <i className="icon_check"></i>아임웹 · 영카트 커스터마이징 퍼블리싱
                            </li>
                            <li className="motion_txt">
                                <i className="icon_check"></i>웹 접근성 기준 준수 및 접근성 인증마크 획득 경험
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
