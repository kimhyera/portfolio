import React, { useState, useEffect, useRef } from 'react';
import SplitType from 'split-type';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

import 'swiper/css';
import 'swiper/css/navigation';
/*css*/
import '../../assets/scss/page/main.scss';
//component
import PortfolioItem from '../../component/contents/PortfolioItem';

import VideoUrl from '../../assets/video/video_coffee.mov';


gsap.registerPlugin(ScrollTrigger);
function Main() {
	//탭
	const [tabIdx, setTabIdx] = useState(0);
	const tab = [
		{ text: '전체', link: '' },
		{ text: '홈페이지', link: '' },
		{ text: '반응형', link: '' },
		{ text: '모바일', link: '' },
		{ text: 'B2B', link: '' },
		{ text: 'React · Vue', link: '' }
		//{text: '리디자인', link: ''}
	];

	const selectedTabText = tab[tabIdx].text;
	const items = [
		{
			title: '코크플레이 반응형 / 앱',
			thumb: 'pt_2024_cgplay.jpg',
			desc: '뇌 트레이닝 플랫폼',
			date: '2024',
			role: '퍼블리싱',
			stack: ['react', 'scss'],
			type: ['홈페이지', '반응형', '앱', 'react'],
			url: 'https://play.google.com/store/apps/details?id=com.cogplay2&hl=ko&pli=1'
		},
		{
			title: 'Vetbless PC 관리',
			thumb: 'pt_2025_nalazoo.jpg',
			desc: '상품,고객,예약 관리 플랫폼',
			date: '2025',
			role: '퍼블리싱',
			stack: ['php', 'scss'],
			type: ['홈페이지', 'b2b', '관리자'],
			url: 'https://nalazoo.awsome-app.kr/front/Chart'
		},
		{
			title: '배달플랫폼 모바일',
			thumb: 'manashop.jpg',
			desc: '고객 배달 플랫폼 (배달음식)',
			date: '2023 ~ 2024 ',
			role: '모바일 퍼블리싱, Vue 프론트엔드 제작 ',
			stack: ['vue', 'scss'],
			type: ['b2c', 'vue', '모바일', '플랫폼'],
			url: 'https://634fa63d3236be6714353078--willowy-parfait-db4af9.netlify.app/path',
			url2: 'https://smartshop.mannashop.co.kr/shop/mns/'
		},
		{
			title: '주문테이블 Qr 모바일',
			thumb: 'pt_qr.png',
			desc: '  주문 테이블 플랫폼',
			date: '2024',
			role: '모바일 퍼블리싱, Nuxt3 프론트엔드 제작 ',
			stack: ['vue', 'scss'],
			type: ['b2c', 'vue', '모바일', '플랫폼'],
			url: 'https://web-nuxt-qr-netlify.netlify.app/pb/path'
		},
		{
			title: '마트 모바일',
			thumb: 'pt_mart.png',
			desc: '  주문 테이블 플랫폼',
			date: '2023',
			role: '모바일 퍼블리싱, Vue 프론트엔드 제작 (일부참여) ',
			stack: ['vue', 'scss'],
			type: ['b2c', 'vue', '모바일', '플랫폼'],
			url: 'https://vue-mart-2.netlify.app/publish',
			url2: 'https://tsmartshop.mannashop.co.kr/shop/mts/'
		},
		{
			title: '스마트 골프 모바일',
			thumb: 'pt_golf.png',
			desc: '예약 플랫폼',
			date: '2024',
			role: 'Vue 모바일 퍼블리싱',
			stack: ['vue', 'scss'],
			type: ['b2c', 'vue', '모바일', '플랫폼'],
			url: 'https://63233a86330f840008be9b72--extraordinary-snickerdoodle-799c22.netlify.app/path'
		},
		{
			title: '수바툴 모바일',
			thumb: 'pt_2024_suva.jpg',
			desc: '자영업 플랫폼',
			date: '2024',
			role: '퍼블리싱',
			stack: ['php', 'scss'],
			type: ['모바일'],
			url: 'https://suva.awsome-app.kr/'
		},
		{
			title: '에코하이 반응형',
			thumb: 'pt_2024_ecohi.jpg',
			desc: '이벤트 플랫폼',
			date: '2024',
			role: '퍼블리싱',
			stack: ['php', 'scss'],
			type: ['반응형'],
			url: 'https://ecohigh.kr/front/Member/Login'
		},
		{
			title: '이지수능 교육 관리',
			thumb: 'pt_2024_easy_study.jpg',
			desc: '교사 학생 교육 관리 플랫폼',
			date: '2024',
			role: '퍼블리싱',
			stack: ['react', 'scss'],
			type: ['반응형', 'react', 'b2b'],
			url: 'http://easy-study.awsome-app.kr/'
		},
		{
			title: '파랑새 반응형',
			thumb: 'pt_2025_bluebird.jpg',
			desc: '축제 이벤트 플랫폼',
			date: '2024',
			role: '퍼블리싱',
			stack: ['php', 'scss'],
			type: ['홈페이지', '반응형'],
			url: 'https://bluebird.awsome-app.kr/'
		},
		{
			title: '온플 반응형',
			thumb: 'pt_2024_onply.jpg',
			desc: '크리에이터 영상 컨텐츠 플랫폼',
			date: '2024',
			role: '퍼블리싱',
			stack: ['php', 'scss'],
			type: ['홈페이지', '반응형'],
			url: 'https://onply.awsome-app.kr/'
		},
		{
			title: '특허유사도gadget 반응형',
			thumb: 'pt_2024_gadget.jpg',
			desc: '고객 검사 플랫폼',
			date: '2025',
			role: '퍼블리싱',
			stack: ['php', 'scss'],
			type: ['홈페이지', '반응형'],
			url: 'https://gadget.awsome-app.kr/'
		},
		{
			title: '가구의장인 모바일',
			thumb: 'pt_2025_gagu.jpg',
			desc: '인테리어 견적 플랫폼',
			date: '2025',
			role: '퍼블리싱',
			stack: ['php', 'scss'],
			type: ['모바일', '반응형'],
			url: 'https://gagu.awsome-app.kr/'
		},

		{
			title: 'WINos 반응형',
			thumb: 'pt_2025_winos.jpg',
			desc: '회사소개',
			date: '2025',
			role: '퍼블리싱',
			stack: ['php', 'scss'],
			type: ['홈페이지', '반응형'],
			url: 'https://winos.awsome-app.kr/'
		},

		{
			title: '큐딩 모바일',
			thumb: 'pt_2025_qding.jpg',
			desc: '쇼핑몰',
			date: '2025',
			role: '퍼블리싱',
			stack: ['php', 'scss'],
			type: ['모바일'],
			url: 'https://qding2.awsome-app.kr/front/Mall/Online'
		},

		{
			title: '퍼스트안과 반응형',
			thumb: 'pt_firsteye.jpg',
			desc: '병원 플랫폼',
			date: '2024',
			role: '반응형 퍼블리싱, 인터렉션',
			stack: ['php', 'scss'],
			type: ['홈페이지', '반응형'],
			url: 'https://www.firsteyeclinic.co.kr/'
		},

		{
			title: '예일안과 반응형',
			thumb: 'pt_lasik.jpg',
			desc: '병원 플랫폼',
			date: '2024',
			role: '반응형 퍼블리싱, 인터렉션',
			stack: ['php', 'scss'],
			type: ['홈페이지', '반응형'],
			url: 'https://lasikmasan.mycafe24.com/'
		},
		{
			title: '가맹점 POS 상품 설정',
			thumb: 'pt_pos-web.png',
			desc: '가맹점 플랫폼',
			date: '2022',
			role: 'pc 퍼블리싱, php 프론트엔드 제작',
			stack: ['php', 'scss'],
			type: ['b2b'],
			url: 'https://tmng.mannashop.co.kr/linkage/pos_v2/contents/setGoods/goods/list.php',
			url2: 'https://tmng.mannashop.co.kr/linkage/pos_v2/contents/setGoods/goods/list.php'
		},
		{
			title: '맛집 모바일',
			thumb: 'pt_manna.png',
			desc: '맛집 플랫폼 asdassd',
			date: '2022',
			role: '모바일 퍼블리싱',
			stack: ['php', 'scss'],
			type: ['모바일'],
			url: 'https://smartshop.mannashop.co.kr/shop/mns/'
		},
		{
			title: '신한벽지 Pc/모바일',
			thumb: 'pt_shin.jpg',
			desc: '회사 소개',
			date: '2021',
			role: 'pc,mobile 퍼블리싱',
			stack: ['php', 'scss'],
			type: ['홈페이지', '반응형'],
			url: 'https://www.shinhanwall.co.kr'
		},
		{
			title: '쿠폰센든 반응형',
			thumb: 'pt_coupon_send.jpg',
			desc: '쿠폰 플랫폼',
			date: '2020',
			role: '반응형 퍼블리싱',
			stack: ['php', 'scss'],
			type: ['홈페이지', '반응형'],
			url: 'https://hyera1828.cafe24.com/coupon_send/ch.html'
		},

		{
			title: '한제플래닛 반응형 ',
			thumb: 'pt_jangsa.jpg',
			desc: '회사소개',
			date: '2020',
			role: '반응형 퍼블리싱',
			stack: ['php', 'scss'],
			type: ['홈페이지', '반응형'],
			url: 'http://hanjae.freewebclub.com/main/main.html'
		},

		{
			title: '아일랜드캐슬 반응형 ',
			thumb: 'pt_05.jpg',
			desc: '회사소개',
			date: '2020',
			role: '반응형 퍼블리싱',
			stack: ['php', 'scss'],
			type: ['홈페이지', '반응형'],
			url: 'http://www.island-castle.co.kr/'
		},

		{
			title: ' 더케이 커뮤니케이션 반응형 ',
			thumb: 'pt_thek.jpg',
			desc: '커뮤니티 플랫폼',
			date: '2020',
			role: '반응형 퍼블리싱',
			stack: ['php', 'scss'],
			type: ['홈페이지', '반응형'],
			url: 'http://mc3099.freewebclub.com/main/main.html'
		},

		{
			title: '미스터 키친 반응형 ',
			thumb: 'pt_mrbossam.jpg',
			desc: '프렌차이즈 플랫폼',
			date: '2020',
			role: '반응형 퍼블리싱',
			stack: ['php', 'scss'],
			type: ['홈페이지', '반응형'],
			url: 'http://mrbossam.co.kr/main/main.html'
		},

		{
			title: '스쿨푸드 반응형 ',
			thumb: 'pt_schoolfood.jpg',
			desc: '프렌차이즈 플랫폼',
			date: '2020',
			role: '반응형 퍼블리싱',
			stack: ['php', 'scss'],
			type: ['홈페이지', '반응형'],
			url: 'http://schoolfood.freewebclub.com/main/main.html'
		},

		{
			title: '차앤박피부과 pc/m ',
			thumb: 'pt_03.jpg',
			desc: '병원 플랫폼 (ICT K어워드 코리아 e-비지니스 은상 수상)',
			date: '2018',
			role: '회사/지점/고객 관리 시스템, 퍼블리싱',
			stack: ['php', 'scss'],
			type: ['홈페이지', '모바일', 'b2c', 'b2b'],
			url: 'https://www.cnpskin.com/pc/cnp/main/main.html',
			url2: 'https://www.cnpskin.com/pc/branch/main/main.html?jijummid=cnpskin18'
		},

		{
			title: '일본 유랑기 pc/m',
			thumb: 'pt_01.jpg',
			desc: '여행 예약 플랫폼',
			date: '2019',
			role: '반응형 퍼블리싱',
			stack: ['php', 'scss'],
			type: ['홈페이지', '모바일'],
			url: 'https://www.japanuranggi.com/main/main.html'
		},
		{
			title: '유로자전거나라 pc/m',
			thumb: 'pt_02.jpg',
			desc: '여행 예약 플랫폼 (ICT K어워드코리아 UI/UX디자인 부문 금상)',
			date: '2020',
			role: '반응형 퍼블리싱',
			stack: ['php', 'scss'],
			type: ['홈페이지', '모바일'],
			url: 'http://www.jangsadalin.com'
		},
		{
			title: '타이탄 인베스트 P2P ',
			thumb: 'pt_06.jpg',
			desc: '금융 플랫폼',
			date: '2019',
			role: '반응형 퍼블리싱',
			stack: ['php', 'scss'],
			type: ['홈페이지', '반응형'],
			url: 'https://www.titaninvest.co.kr'
		},

		{
			title: '굿레이트 반응형',
			thumb: 'pt_07.jpg',
			desc: 'P2P 금융 플랫폼 (ICT K어워드코리아 디지털컨텐츠솔루션 은상)',
			date: '2016',
			role: '반응형 퍼블리싱',
			stack: ['php', 'scss'],
			type: ['홈페이지', '반응형'],
			url: 'https://www.grate.kr'
		},

		{
			title: '세이브존 반응형',
			thumb: 'pt_08.jpg',
			desc: '문화센터 플랫폼',
			date: '2018',
			role: '반응형 퍼블리싱',
			stack: ['php', 'scss'],
			type: ['홈페이지', '반응형'],
			url: 'https://saveculture.savezone.co.kr/'
		},

		{
			title: '장사의달인 반응형, 앱',
			thumb: 'pt_jangsa.jpg',
			desc: '창업 플랫폼',
			date: '2018',
			role: '반응형 퍼블리싱',
			stack: ['php', 'scss'],
			type: ['홈페이지', '반응형'],
			url: 'http://www.jangsadalin.com'
		},

		{
			title: '국민 청소년 디딤센터 반응형',
			thumb: 'pt_07.jpg',
			desc: '커뮤니티 플랫폼',
			date: '2016',
			role: '반응형 퍼블리싱',
			stack: ['php', 'scss'],
			type: ['홈페이지', '반응형'],
			url: 'https://www.grate.kr'
		},

		{
			title: ' SBI저축은행',
			thumb: 'pt_sb.jpg',
			desc: '금융 플랫폼',
			date: '2017',
			role: '반응형 퍼블리싱',
			stack: ['php', 'scss'],
			type: ['홈페이지', '반응형'],
			url: 'https://www.sbisb.co.kr/'
		},

		{
			title: '(주)나이스신용정보',
			thumb: 'pt_nice_1.jpg',
			desc: '금융 플랫폼',
			date: '2016',
			role: 'pc/m 퍼블리싱',
			stack: ['php', 'scss'],
			type: ['홈페이지', '반응형'],
			url: 'https://www.niceamc.co.kr/kr/index.do'
		},

		{
			title: '동양북스 pc/m',
			thumb: 'pt_dongyangbooks.jpg',
			desc: '서적 플랫폼',
			date: '2016',
			role: '반응형 퍼블리싱',
			stack: ['php', 'scss'],
			type: ['홈페이지', '반응형'],
			url: 'https://www.dongyangbooks.com'
		},

		{
			title: '경기도청소년 수련원 프로젝트',
			thumb: 'pt_ggyc.jpg',
			desc: '커뮤니티 플랫폼 (웹접근성마크 획득)',
			date: '2015',
			role: '반응형 퍼블리싱',
			stack: ['php', 'scss'],
			type: ['홈페이지', '반응형'],
			url: 'https://www.ggyc.kr/'
		},
		{
			title: '이오플로우',
			thumb: 'pt_eoflow.jpg',
			desc: '제품 소개 플랫폼',
			date: '2017',
			role: '반응형 퍼블리싱',
			stack: ['php', 'scss'],
			type: ['홈페이지', '반응형'],
			url: 'http://eoflow.freewebclub.com/'
		},

		{
			title: '브래드 가든 반응형',
			thumb: 'pt_10.jpg',
			desc: '쇼핑몰 플랫폼',
			date: '2017',
			role: '반응형 퍼블리싱',
			stack: ['php', 'scss'],
			type: ['홈페이지', '반응형'],
			url: 'https://www.breadgarden.co.kr/'
		},

		{
			title: '마이리틀 프랜드 반응형',
			thumb: 'pt_09.jpg',
			desc: '애완용품 플랫폼',
			date: '2017',
			role: '반응형 퍼블리싱',
			stack: ['php', 'scss'],
			type: ['홈페이지', '반응형'],
			url: 'https://www.mylittlefriend.kr/'
		},

		{
			title: '영풀 pc/m',
			thumb: 'pt_17.jpg',
			desc: '교육 플랫폼',
			date: '2017',
			role: '반응형 퍼블리싱',
			stack: ['php', 'scss'],
			type: ['홈페이지', '모바일'],
			url: 'http://www.youngpull.com/'
		},
		{
			title: 'Nice 지니데이터 ',
			thumb: 'pt_nice.jpg',
			desc: '회사/내부 ERP',
			date: '2015',
			role: '반응형 퍼블리싱',
			stack: ['php', 'scss'],
			type: ['b2b', '홈페이지'],
			url: 'https://hivesystem.net/'
		},
		{
			title: '법률 사무소 고은 ',
			thumb: 'pt_gounlaw.jpg',
			desc: '법률 사무소',
			date: '2015',
			role: '반응형 퍼블리싱',
			stack: ['php', 'scss'],
			type: ['홈페이지', '반응형'],
			url: 'https://gounlaw.com/'
		},

		{
			title: '부산마루 음악제',
			thumb: 'pt_bmimf.jpg',
			desc: '커뮤니티 플랫폼',
			date: '2016',
			role: '반응형 퍼블리싱',
			stack: ['php', 'scss'],
			type: ['홈페이지', '반응형'],
			url: 'https://www.bmimf.co.kr/'
		},

		{
			title: '하이브 시스템',
			thumb: 'pt_hivesystem.jpg',
			desc: '회사소개',
			date: '2015',
			role: '반응형 퍼블리싱',
			stack: ['php', 'scss'],
			type: ['홈페이지', '반응형'],
			url: 'https://hivesystem.net/'
		}
	];
	const videoRef = useRef(null);

	function handleTabClick(idx) {
		setTabIdx(idx);
		// 기존 애니메이션 중지
		gsap.killTweensOf('.portfolio__item');

		// 새로운 애니메이션 실행
		gsap.fromTo('.portfolio__item', { opacity: 0, y: 50 }, { opacity: 1, y: 0, stagger: 0.1, ease: 'Power.easeInOut' });
	}

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

	useEffect(() => {
		if (videoRef.current) {
			videoRef.current.muted = true; // 명시적 설정
			videoRef.current.play().catch((err) => {
				console.warn('Autoplay failed', err);
			});
		}
		//ani

		gsap.timeline({
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



		//section3

		new SplitType('.section3 .motion_txt span', {
			types: 'chars'
			// optional: line/word도 원하면 추가
		});
		gsap.timeline({
			scrollTrigger: {
				trigger: '.section3',
				start: '0% 100%',
				end: '10% 100%',
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
			//.fromTo('.section3',
			//	{
			//		backgroundColor: '#fff'
			//	},
			//	{
			//		backgroundColor: '#030712', ease: 'none', duration: 5
			//	}
			//)
			.fromTo('.portfolio__item',
				{ y: '100%', opacity: 0 },
				{
					y: '0%',
					opacity: 1,
					stagger: 1.5,
					duration: 8,

				}, '<5'
			);


			
			





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
						<li><spsan className="point">디자인 시스템</spsan> 기반 UI 설계</li>
					</ul>
				</section>

				{/*  포트폴리오 */}

				<section className="section3 section_work">
					<div className="pf_center_wrap">
						<section className="tit_wrap">
							<h2 className="tit motion_txt"><span>WORK</span></h2>
							<div className="filter_list ">
								{tab.map((v, idx) => (
									<button key={idx} className={`filter ${tabIdx === idx ? 'active' : ''}`} onClick={() => handleTabClick(idx)}>
										<span>{v.text}</span>
									</button>
								))}
							</div>
						</section>
						<div className="portfolio__list">
							{items
								.filter((item) => {
									if (selectedTabText === '전체') return true;
									// 예: item.type가 ['홈페이지', '쇼핑몰', ...]인 경우
									return item.type?.some((keyword) =>
										selectedTabText
											.toLowerCase()
											.split(' ')
											.some((filterWord) => keyword.toLowerCase().includes(filterWord))
									);
								})
								.map((item, index) => (
									<PortfolioItem key={index} index={index} item={item} />
								))}
						</div>
					</div>
				</section>
			</main >
		</>
	);
}

export default Main;
