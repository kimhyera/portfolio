import React, { useState, useEffect, useRef } from 'react';
import SplitType from 'split-type';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';


//css
import '../../assets/scss/page/main.scss';
//component
import PortfolioList from '../../component/contents/PortfolioList';
//video
import VideoUrl from '../../assets/video/video_coffee.mov';
gsap.registerPlugin(ScrollTrigger);

function Main() {

	const videoRef = useRef(null);

	//section1
	useEffect(() => {
		new SplitType('.section1 .txt_area span', {
			types: 'chars'
			// optional: line/word도 원하면 추가
		});

		gsap.fromTo(
			'.section1 .txt_area .char',
			{ y: '100%', opacity: 0 },
			{
				y: '0%',
				opacity: 1,
				stagger: 0.01,
				duration: 0.5,
				ease: 'expo.inOut'
			}
		);

		const paths = document.querySelectorAll('.svgAniLine path');
		paths.forEach((path, i) => {
			const length = path.getTotalLength();

			path.style.strokeDasharray = length;
			path.style.strokeDashoffset = length;

			// 강제 렌더링 (reflow)
			void path.getBoundingClientRect();

			setTimeout(() => {
				path.style.transition = 'stroke-dashoffset 3s ease';
				path.style.strokeDashoffset = 0;
			}, 1000 + i * 50);
		})


	}, []);

	//section2
	useEffect(() => {
		if (videoRef.current) {
			videoRef.current.muted = true; // 명시적 설정
			videoRef.current.play().catch((err) => {
				console.warn('Autoplay failed', err);
			});
		}
		//ani
		const tl2 = gsap.timeline({
			scrollTrigger: {
				trigger: '.section2',
				start: '0% 80%',
				end: '100% 100%',
				scrub: 1, //스크롤이 사용될때만 재생
				//markers: true
			}
		})
			.fromTo('.section1',
				{
					backgroundColor: '#030712'
				},
				{
					backgroundColor: '#fff', ease: 'none', duration: 5
				}
			)
			.to('.section1 .char', {
				color: '#000', ease: 'none', duration: 5
			}, 0)
			.to('.section1 .svgAniLine path', {
				stroke: '#000', ease: 'none', duration: 5
			}, 0)
			.fromTo('.video_wrap',
				{
					clipPath: 'inset(60% 60% 60% 60% round 30%)'
				},
				{
					clipPath: 'inset(0% 0% 0% 0% round 0%)',
					ease: 'none',
					duration: 10
				}
			)
			// video clip-path 애니 끝나고 txt_area 등장
			.fromTo('.txt_area li',
				{ y: '100%', opacity: 0 },
				{
					y: '0%',
					opacity: 1,
					stagger: 1.5,
					duration: 8,

				}, '<5'
			);


		return () => {
			tl2.kill();      // GSAP 타임라인 제거
		};
	}, []);

	//section3
	useEffect(() => {
		const tl3 = gsap.timeline({
			scrollTrigger: {
				trigger: '.section3',
				start: '0% 100%',
				end: '100% 100%',
				scrub: 1, //스크롤이 사용될때만 재생
				//markers: true,
				onEnter: () => {
					gsap.fromTo(
						'.section3 .motion_txt .char',
						{ y: '100%', opacity: 0 },
						{
							y: '0%',
							opacity: 1,
							stagger: 0.02,
							duration: 1,
							ease: 'expo.inOut'
						}, '<0.1'
					)


					gsap.fromTo('.section3 .filter',
						{ y: '100%', opacity: 0 },
						{
							y: '0%',
							opacity: 1,
							stagger: 0.05,
							duration: 0.5,

						}, '<0.6'
					)

				},
			},
		})
			.fromTo('.section3',
				{
					backgroundColor: '#fff'
				},
				{
					backgroundColor: '#030712', ease: 'none', duration: 2
				}
			)
			.fromTo('.portfolio__item',
				{ y: '100%', opacity: 0 },
				{
					y: '0%',
					opacity: 1,
					stagger: 1.5,
					duration: 8,

				}, '<4'
			);
		return () => {
			tl3.kill();      // GSAP 타임라인 제거
		};

	}, []);

	return (
		<>
			<main className="main">
				{/* section1 */}
				<section className="section1">
					<div className="pf_center_wrap">
						<div className="txt_area main_txt">
							<p>
								<span>Web Publisher</span>
							</p>
							<p className="en2">
								<span>Kim Hyera</span>
							</p>
							<p>
								<span>Portfolio</span>
							</p>
						</div>
						<div className="txt_area sub_txt">
							<span>UI/UX 디자인부터 퍼블리싱</span>
							<span> 10년 이상, 200+ 프로젝트 경험으로</span>
							<span>웹접근성과 사용성을 고려한 퍼블리싱과</span>
							<span>디자인 시스템 기반의 체계적 UI 설계를 모두 수행합니다.</span>
						</div>
						<svg className="svgAniLine" width="800" height="600" viewBox="0 0 800 600" fill="none" xmlns="http://www.w3.org/2000/svg">
							<path d="M428.233 458.734H348.991L360.311 511.561C360.311 519.897 353.553 526.655 345.218 526.655H216.922C208.587 526.655 201.829 519.897 201.829 511.561L213.149 458.734H24.479C16.143 458.734 9.38501 451.975 9.38501 443.639V88.94C9.38501 80.605 16.142 73.846 24.479 73.846H537.662C545.998 73.846 552.757 80.604 552.757 88.94V209.689" stroke="white" strokeWidth="2" strokeMiterlimit="10" />
							<path d="M428.233 379.492H32.025V96.487H530.115V209.689" stroke="white" strokeWidth="2" strokeMiterlimit="10" />
							<path d="M281.07 424.773C287.322 424.773 292.39 419.705 292.39 413.453C292.39 407.201 287.322 402.133 281.07 402.133C274.818 402.133 269.75 407.201 269.75 413.453C269.75 419.705 274.818 424.773 281.07 424.773Z" stroke="white" strokeWidth="2" strokeMiterlimit="10" />
							<path d="M179.188 119.127H54.666V153.087H179.188V119.127Z" stroke="white" strokeWidth="2" strokeMiterlimit="10" />
							<path d="M496.154 119.127H462.193V153.087H496.154V119.127Z" stroke="white" strokeWidth="2" strokeMiterlimit="10" />
							<path d="M405.592 209.689H54.666V243.649H405.592V209.689Z" stroke="white" strokeWidth="2" strokeMiterlimit="10" />
							<path d="M405.592 266.29H54.666V300.25H405.592V266.29Z" stroke="white" strokeWidth="2" strokeMiterlimit="10" />
							<path d="M281.07 322.892H179.188V354.023H281.07V322.892Z" stroke="white" strokeWidth="2" strokeMiterlimit="10" />
							<path d="M156.548 322.892H54.666V354.023H156.548V322.892Z" stroke="white" strokeWidth="2" strokeMiterlimit="10" />
							<path d="M405.592 322.892H303.711V354.023H405.592V322.892Z" stroke="white" strokeWidth="2" strokeMiterlimit="10" />
							<path d="M665.958 511.562C665.958 519.898 659.2 526.656 650.864 526.656H443.327C434.991 526.656 428.233 519.898 428.233 511.562V224.783C428.233 216.448 434.991 209.689 443.327 209.689H650.864C659.2 209.689 665.958 216.447 665.958 224.783V511.562Z" stroke="white" strokeWidth="2" strokeMiterlimit="10" />
							<path d="M790.48 509.676C790.48 519.052 782.876 526.655 773.5 526.655H705.578C696.202 526.655 688.599 519.051 688.599 509.676V378.077C688.599 368.701 696.203 361.097 705.578 361.097H773.5C782.876 361.097 790.48 368.701 790.48 378.077V509.676Z" stroke="white" strokeWidth="2" strokeMiterlimit="10" />
							<path d="M643.317 232.33H450.874V481.375H643.317V232.33Z" stroke="white" strokeWidth="2" strokeMiterlimit="10" />
							<path d="M777.745 373.832H701.333V488.449H777.745V373.832Z" stroke="white" strokeWidth="2" strokeMiterlimit="10" />
							<path d="M547.096 504.014C550.222 504.014 552.756 501.48 552.756 498.354C552.756 495.228 550.222 492.694 547.096 492.694C543.97 492.694 541.436 495.228 541.436 498.354C541.436 501.48 543.97 504.014 547.096 504.014Z" stroke="white" strokeWidth="2" strokeMiterlimit="10" />
							<path d="M739.539 508.26C742.665 508.26 745.199 505.726 745.199 502.6C745.199 499.474 742.665 496.94 739.539 496.94C736.413 496.94 733.879 499.474 733.879 502.6C733.879 505.726 736.413 508.26 739.539 508.26Z" stroke="white" strokeWidth="2" strokeMiterlimit="10" />
							<path d="M522.446 246.479H462.193V278.802H522.446V246.479Z" stroke="white" strokeWidth="2" strokeMiterlimit="10" />
							<path d="M629.417 246.479H606.824V278.802H629.417V246.479Z" stroke="white" strokeWidth="2" strokeMiterlimit="10" />
							<path d="M631.997 332.678H462.193V365H631.997V332.678Z" stroke="white" strokeWidth="2" strokeMiterlimit="10" />
							<path d="M631.997 386.551H462.193V418.874H631.997V386.551Z" stroke="white" strokeWidth="2" strokeMiterlimit="10" />
							<path d="M571.744 440.425H522.446V470.054H571.744V440.425Z" stroke="white" strokeWidth="2" strokeMiterlimit="10" />
							<path d="M511.491 440.425H462.193V470.054H511.491V440.425Z" stroke="white" strokeWidth="2" strokeMiterlimit="10" />
							<path d="M631.997 440.425H582.7V470.054H631.997V440.425Z" stroke="white" strokeWidth="2" strokeMiterlimit="10" />
							<path d="M739.539 386.567H714.069V399.302H739.539V386.567Z" stroke="white" strokeWidth="2" strokeMiterlimit="10" />
							<path d="M765.01 386.567H752.274V399.302H765.01V386.567Z" stroke="white" strokeWidth="2" strokeMiterlimit="10" />
							<path d="M765.01 412.038H714.069V424.773H765.01V412.038Z" stroke="white" strokeWidth="2" strokeMiterlimit="10" />
							<path d="M765.01 437.508H714.069V450.244H765.01V437.508Z" stroke="white" strokeWidth="2" strokeMiterlimit="10" />
							<path d="M765.01 462.979H714.069V475.713H765.01V462.979Z" stroke="white" strokeWidth="2" strokeMiterlimit="10" />
						</svg>
					</div>
				</section>
				<section className="section2">
					<div className="video_wrap">
						<video ref={videoRef} loop autoPlay muted playsInline style={{ width: '100%' }}>
							<source src={VideoUrl} type="video/mp4" />
						</video>
					</div>
					<ul className="txt_area en">
						<li><span className="point">웹 접근성</span> 중심 UI 마크업</li>
						<li>사용자 중심 <span className="point">인터랙션</span> 구현</li>
						<li><span className="point">React / Vue</span> 프론트 퍼블리싱</li>
						<li><span className="point">Git 협업</span> 기반 팀 프로젝트 경험</li>
						<li><span className="point">디자인 시스템</span> 기반 UI 설계</li>
					</ul>
				</section>

				{/*  포트폴리오 */}

				<section className="section3 section_work">
					<div className="pf_center_wrap">

						{/* 포트폴리오 리스트 */}
						<PortfolioList />
					</div>
				</section>
			</main >
		</>
	);
}

export default Main;
