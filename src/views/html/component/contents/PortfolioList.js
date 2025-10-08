import React, { useState, useEffect } from 'react';
import gsap from 'gsap';
import SplitType from 'split-type';
//css
import '../../assets/scss/component/portfolio.scss';
//component
import PortfolioItem from '../../component/contents/PortfolioItem';



function PortfolioList({ page = 'work' }) {

	const items = [
		{
			title: '접근성 한국인터넷 진흥원',
			thumb: 'pt_kisa.jpg',
			desc: '보안 사이트 전근성',
			date: '2025',
			role: 'vue퍼블리싱, 접근성 ',
			stack: ['vue', 'scss'],
			type: ['vue', '바응형'],
			url: 'https://kisa.awsome-app.kr/main',
			titleDetail: [
				'접근성 한국인터넷 진흥원',
				''
			],

			descDetail: [
				'접근성 퍼블리싱',
				'디자이너와 협업'
			],
			thumbDetail: 'pt_kisa.jpg',

			디바이스: 'PC',
		},
		{
			title: '디지털교과서 현대사회와 윤리',
			thumb: 'pt_2025_jhmse.jpg',
			desc: '웹뷰 퍼블리싱',
			date: '2025.08 ~ 2025.09',
			role: '퍼블리싱',
			stack: ['교과서','퀴즈 js'],
			type: ['교과서', '이러닝 컨텐츠'],
			url: 'https://www.usuaia.me/ebook/jhmse_/',
			titleDetail: [
				'현대사회와 윤리 교과서',
				'디지털 교과서 앱 웹뷰'
			],

			descDetail: [
				'웹뷰 퍼블리싱',
				'개발자 협업'
			],
			thumbDetail: 'pt_2025_jhmse.jpg',

			디바이스: 'PC',
		},
		{
			title: '디지털교과서 역사 2',
			thumb: 'pt_2025_jmhs2.jpg',
			desc: '웹뷰 퍼블리싱',
			date: '2025.08 ~ 2025.09',
			role: '퍼블리싱',
			stack: ['교과서','퀴즈 js'],
			type: ['교과서', '이러닝 컨텐츠'],
			url: 'https://www.usuaia.me/ebook/jmhs2/contents/html/ebook/ebook.html',
			titleDetail: [
				'역사 2 교과서',
				'디지털 교과서 앱 웹뷰'
			],

			descDetail: [
				'웹뷰 퍼블리싱',
				'개발자 협업'
			],
			thumbDetail: 'pt_2025_jmhs2.jpg',

			디바이스: 'PC',
		},
		{
			title: '디지털교과서 한국사 2',
			thumb: 'pt_2025_jmkh2.jpg',
			desc: '웹뷰 퍼블리싱',
			date: '2025.07 ~ 2025.09',
			role: '퍼블리싱',
			stack: ['교과서','퀴즈 js'],
			type: ['교과서', '이러닝 컨텐츠'],
			url: 'https://www.usuaia.me/ebook/jmkh2/',
			titleDetail: [
				'한국사 2 교과서',
				'디지털 교과서 앱 웹뷰'
			],

			descDetail: [
				'웹뷰 퍼블리싱',
				'개발자 협업'
			],
			thumbDetail: 'pt_2025_jmkh2.jpg',

			디바이스: 'PC',
		},
		{
			title: '코크플레이 반응형 / 앱',
			thumb: 'pt_2024_cgplay.jpg',
			desc: '뇌 트레이닝 플랫폼',
			date: '2024.11 ~ 2024.12',
			role: 'React 퍼블리싱',
			stack: ['react', ' scss'],
			type: ['홈페이지', '반응형', '앱', 'react'],
			url: 'https://play.google.com/store/apps/details?id=com.cogplay2&hl=ko&pli=1',
			titleDetail: [
				'코크플레이 웹/앱',
				'반응형 리뉴얼 구축'
			],

			descDetail: [
				'코크 플레이 앱용 퍼블리싱',
				'React 기반의 컴포넌트 퍼블리싱',
				'디자이너 및 프론트엔드 개발자와 협업'
			],
			thumbDetail: 'pt_2024_cgplay.png',

			디바이스: 'PC/Tablet/Mobile',
		},
		{
			title: 'Vetbless PC 관리',
			thumb: 'pt_2025_nalazoo.jpg',
			desc: '상품,고객,예약 관리 플랫폼',
			date: '2025',
			role: '퍼블리싱',
			stack: ['php', 'scss'],
			type: ['홈페이지', 'b2b', '관리자'],
			url: 'https://nalazoo.awsome-app.kr/front/Chart',

			디바이스: 'PC',
		},
		{
			title: '배달플랫폼 모바일',
			thumb: 'manashop.jpg',
			desc: '고객 배달 플랫폼 (배달음식)',
			date: '2023 ~ 2024 ',
			role: '퍼블리싱, Vue 프론트엔드 개발 ',
			stack: ['vue', 'scss'],
			type: ['b2c', 'vue', '모바일', '플랫폼'],
			url: 'https://634fa63d3236be6714353078--willowy-parfait-db4af9.netlify.app/path',
			url2: 'https://smartshop.mannashop.co.kr/shop/mns/',

			디바이스: 'Mobile',
		},
		{
			title: '주문테이블 Qr 모바일',
			thumb: 'pt_qr.png',
			desc: '  주문 테이블 플랫폼',
			date: '2024',
			role: '퍼블리싱, Nuxt3 프론트엔드 개발 ',
			stack: ['vue', 'scss'],
			type: ['b2c', 'vue', '모바일', '플랫폼'],
			url: 'https://web-nuxt-qr-netlify.netlify.app/pb/path',

			디바이스: 'Mobile',
		},
		{
			title: '마트 모바일',
			thumb: 'pt_mart.png',
			desc: '  주문 테이블 플랫폼',
			date: '2023',
			role: '퍼블리싱, Vue 프론트엔드 개발 ',
			stack: ['vue', 'scss'],
			type: ['b2c', 'vue', '모바일', '플랫폼'],
			url: 'https://vue-mart-2.netlify.app/publish',
			url2: 'https://tsmartshop.mannashop.co.kr/shop/mts/',

			디바이스: 'Mobile',
		},
		{
			title: '스마트 골프 모바일',
			thumb: 'pt_golf.png',
			desc: '예약 플랫폼',
			date: '2024',
			role: 'Vue 퍼블리싱',
			stack: ['vue', 'scss'],
			type: ['b2c', 'vue', '모바일', '플랫폼'],
			url: 'https://63233a86330f840008be9b72--extraordinary-snickerdoodle-799c22.netlify.app/path',

			디바이스: 'Mobile',
		},
		{
			title: '수바툴 모바일',
			thumb: 'pt_2024_suva.jpg',
			desc: '자영업 플랫폼',
			date: '2024',
			role: '퍼블리싱',
			stack: ['php', 'scss'],
			type: ['모바일'],
			url: 'https://suva.awsome-app.kr/',
			디바이스: 'Mobile',
		},
		{
			title: '에코하이 반응형',
			thumb: 'pt_2024_ecohi.jpg',
			desc: '이벤트 플랫폼',
			date: '2024',
			role: '퍼블리싱',
			stack: ['php', 'scss'],
			type: ['반응형'],
			url: 'https://ecohigh.kr/front/Member/Login',
			디바이스: 'PC/Tablet/Mobile',
		},
		{
			title: '이지수능 교육 관리',
			thumb: 'pt_2024_easy_study.jpg',
			desc: '교사 학생 교육 관리 플랫폼',
			date: '2024',
			role: 'React 퍼블리싱',
			stack: ['react', 'scss'],
			type: ['반응형', 'react', 'b2b'],
			url: 'http://easy-study.awsome-app.kr/',
			디바이스: 'PC',
		},
		{
			title: '파랑새 반응형',
			thumb: 'pt_2025_bluebird.jpg',
			desc: '축제 이벤트 플랫폼',
			date: '2024',
			role: '퍼블리싱',
			stack: ['php', 'scss'],
			type: ['홈페이지', '반응형'],
			url: 'https://bluebird.awsome-app.kr/',
			디바이스: 'PC/Tablet/Mobile',
		},
		{
			title: '온플 반응형',
			thumb: 'pt_2024_onply.jpg',
			desc: '크리에이터 영상 컨텐츠 플랫폼',
			date: '2024',
			role: '퍼블리싱',
			stack: ['php', 'scss'],
			type: ['홈페이지', '반응형'],
			url: 'https://onply.awsome-app.kr/',
			디바이스: 'PC/Tablet/Mobile',
		},
		{
			title: '특허유사도gadget 반응형',
			thumb: 'pt_2024_gadget.jpg',
			desc: '고객 검사 플랫폼',
			date: '2025',
			role: '퍼블리싱',
			stack: ['php', 'scss'],
			type: ['홈페이지', '반응형'],
			url: 'https://gadget.awsome-app.kr/', 디바이스: 'PC/Tablet/Mobile',
		},
		{
			title: '가구의장인 모바일',
			thumb: 'pt_2025_gagu.jpg',
			desc: '인테리어 견적 플랫폼',
			date: '2025',
			role: '퍼블리싱',
			stack: ['php', 'scss'],
			type: ['모바일', '반응형'],
			url: 'https://gagu.awsome-app.kr/', 디바이스: 'Mobile',
		},

		{
			title: 'WINos 반응형',
			thumb: 'pt_2025_winos.jpg',
			desc: '회사소개',
			date: '2025',
			role: '퍼블리싱',
			stack: ['php', 'scss'],
			type: ['홈페이지', '반응형'],
			url: 'https://winos.awsome-app.kr/', 디바이스: 'PC/Tablet/Mobile',
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
			role: '퍼블리싱',
			stack: ['php', 'scss'],
			type: ['홈페이지', '반응형'],
			url: 'https://www.firsteyeclinic.co.kr/', 디바이스: 'PC/Tablet/Mobile',
		},

		{
			title: '예일안과 반응형',
			thumb: 'pt_lasik.jpg',
			desc: '병원 플랫폼',
			date: '2024',
			role: '퍼블리싱',
			stack: ['php', 'scss'],
			type: ['홈페이지', '반응형'],
			url: 'https://lasikmasan.mycafe24.com/', 디바이스: 'PC/Tablet/Mobile',
		},
		{
			title: '가맹점 POS 상품 설정',
			thumb: 'pt_pos-web.png',
			desc: '가맹점 플랫폼',
			date: '2022',
			role: 'pc 퍼블리싱, php 프론트엔드 개발',
			stack: ['php', 'scss'],
			type: ['b2b'],
			url: 'https://tmng.mannashop.co.kr/linkage/pos_v2/contents/setGoods/goods/list.php',
			url2: 'https://tmng.mannashop.co.kr/linkage/pos_v2/contents/setGoods/goods/list.php'
		},
		{
			title: '맛집 모바일',
			thumb: 'pt_manna.png',
			desc: '맛집 플랫폼',
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
			role: '퍼블리싱',
			stack: ['php', 'scss'],
			type: ['홈페이지', '반응형'],
			url: 'https://www.shinhanwall.co.kr'
		},
		{
			title: '쿠폰센든 반응형',
			thumb: 'pt_coupon_send.jpg',
			desc: '쿠폰 플랫폼',
			date: '2020',
			role: '퍼블리싱',
			stack: ['php', 'scss'],
			type: ['홈페이지', '반응형'],
			url: 'https://hyera1828.cafe24.com/coupon_send/ch.html', 디바이스: 'PC/Tablet/Mobile',
		},

		{
			title: '한제플래닛 반응형 ',
			thumb: 'pt_jangsa.jpg',
			desc: '회사소개',
			date: '2020',
			role: '퍼블리싱',
			stack: ['php', 'scss'],
			type: ['홈페이지', '반응형'],
			url: 'http://hanjae.freewebclub.com/main/main.html', 디바이스: 'PC/Tablet/Mobile',
		},

		{
			title: '아일랜드캐슬 반응형 ',
			thumb: 'pt_05.jpg',
			desc: '회사소개',
			date: '2020',
			role: '퍼블리싱',
			stack: ['php', 'scss'],
			type: ['홈페이지', '반응형'],
			url: 'http://www.island-castle.co.kr/', 디바이스: 'PC/Tablet/Mobile',
		},

		{
			title: ' 더케이 커뮤니케이션 반응형 ',
			thumb: 'pt_thek.jpg',
			desc: '커뮤니티 플랫폼',
			date: '2020',
			role: '퍼블리싱',
			stack: ['php', 'scss'],
			type: ['홈페이지', '반응형'],
			url: 'http://mc3099.freewebclub.com/main/main.html', 디바이스: 'PC/Tablet/Mobile',
		},

		{
			title: '미스터 키친 반응형 ',
			thumb: 'pt_mrbossam.jpg',
			desc: '프렌차이즈 플랫폼',
			date: '2020',
			role: '퍼블리싱',
			stack: ['php', 'scss'],
			type: ['홈페이지', '반응형'],
			url: 'http://mrbossam.co.kr/main/main.html', 디바이스: 'PC/Tablet/Mobile',
		},

		{
			title: '스쿨푸드 반응형 ',
			thumb: 'pt_schoolfood.jpg',
			desc: '프렌차이즈 플랫폼',
			date: '2020',
			role: '퍼블리싱',
			stack: ['php', 'scss'],
			type: ['홈페이지', '반응형'],
			url: 'http://schoolfood.freewebclub.com/main/main.html', 디바이스: 'PC/Tablet/Mobile',
		},

		{
			title: '차앤박피부과 pc/m ',
			thumb: 'pt_03.jpg',
			desc: '병원 플랫폼 (ICT K어워드 코리아 e-비지니스 은상 수상) 회사/지점/고객 관리 시스템,',
			date: '2018',
			role: ' 퍼블리싱',
			stack: ['php', 'scss'],
			type: ['홈페이지', '모바일', 'b2c', 'b2b'],
			url: 'https://www.cnpskin.com/pc/cnp/main/main.html',
			url2: 'https://www.cnpskin.com/pc/branch/main/main.html?jijummid=cnpskin18', 디바이스: 'PC/Mobile',
		},

		{
			title: '일본 유랑기 pc/m',
			thumb: 'pt_01.jpg',
			desc: '여행 예약 플랫폼',
			date: '2019',
			role: '퍼블리싱',
			stack: ['php', 'scss'],
			type: ['홈페이지', '모바일'],
			url: 'https://www.japanuranggi.com/main/main.html', 디바이스: 'PC/Mobile',
		},
		{
			title: '유로자전거나라 pc/m',
			thumb: 'pt_02.jpg',
			desc: '여행 예약 플랫폼 (ICT K어워드코리아 UI/UX디자인 부문 금상)',
			date: '2020',
			role: '퍼블리싱',
			stack: ['php', 'scss'],
			type: ['홈페이지', '모바일'],
			url: 'http://www.jangsadalin.com', 디바이스: 'PC/Mobile',
		},
		{
			title: '타이탄 인베스트 P2P ',
			thumb: 'pt_06.jpg',
			desc: '금융 플랫폼',
			date: '2019',
			role: '퍼블리싱',
			stack: ['php', 'scss'],
			type: ['홈페이지', '반응형'],
			url: 'https://www.titaninvest.co.kr', 디바이스: 'PC/Tablet/Mobile',
		},

		{
			title: '굿레이트 반응형',
			thumb: 'pt_07.jpg',
			desc: 'P2P 금융 플랫폼 (ICT K어워드코리아 디지털컨텐츠솔루션 은상)',
			date: '2016',
			role: '퍼블리싱',
			stack: ['php', 'scss'],
			type: ['홈페이지', '반응형'],
			url: 'https://www.grate.kr', 디바이스: 'PC/Tablet/Mobile',
		},

		{
			title: '세이브존 반응형',
			thumb: 'pt_08.jpg',
			desc: '문화센터 플랫폼',
			date: '2018',
			role: '퍼블리싱',
			stack: ['php', 'scss'],
			type: ['홈페이지', '반응형'],
			url: 'https://saveculture.savezone.co.kr/', 디바이스: 'PC/Tablet/Mobile',
		},

		{
			title: '장사의달인 반응형, 앱',
			thumb: 'pt_jangsa.jpg',
			desc: '창업 플랫폼',
			date: '2018',
			role: '퍼블리싱',
			stack: ['php', 'scss'],
			type: ['홈페이지', '반응형'],
			url: 'http://www.jangsadalin.com', 디바이스: 'PC/Tablet/Mobile',
		},

		{
			title: '국민 청소년 디딤센터 반응형',
			thumb: 'pt_07.jpg',
			desc: '커뮤니티 플랫폼',
			date: '2016',
			role: '퍼블리싱',
			stack: ['php', 'scss'],
			type: ['홈페이지', '반응형'],
			url: 'https://www.grate.kr', 디바이스: 'PC/Tablet/Mobile',
		},

		{
			title: ' SBI저축은행',
			thumb: 'pt_sb.jpg',
			desc: '금융 플랫폼',
			date: '2017',
			role: '퍼블리싱',
			stack: ['php', 'scss'],
			type: ['홈페이지', '반응형'],
			url: 'https://www.sbisb.co.kr/', 디바이스: 'PC/Tablet/Mobile',
		},

		{
			title: '(주)나이스신용정보',
			thumb: 'pt_nice_1.jpg',
			desc: '금융 플랫폼',
			date: '2016',
			role: 'pc/m 퍼블리싱',
			stack: ['php', 'scss'],
			type: ['홈페이지', '반응형'],
			url: 'https://www.niceamc.co.kr/kr/index.do', 디바이스: 'PC',
		},

		{
			title: '동양북스 pc/m',
			thumb: 'pt_dongyangbooks.jpg',
			desc: '서적 플랫폼',
			date: '2016',
			role: '퍼블리싱',
			stack: ['php', 'scss'],
			type: ['홈페이지', '반응형'],
			url: 'https://www.dongyangbooks.com', 디바이스: 'PC/Mobile',
		},

		{
			title: '경기도청소년 수련원 프로젝트',
			thumb: 'pt_ggyc.jpg',
			desc: '커뮤니티 플랫폼 (웹접근성마크 획득)',
			date: '2015',
			role: '퍼블리싱, 접근성 마크 획득',
			stack: ['php', 'scss'],
			type: ['홈페이지'],
			url: 'https://www.ggyc.kr/', 디바이스: 'PC/Mobile',
		},
		{
			title: '이오플로우',
			thumb: 'pt_eoflow.jpg',
			desc: '제품 소개 플랫폼',
			date: '2017',
			role: '퍼블리싱',
			stack: ['php', 'scss'],
			type: ['홈페이지', '반응형'],
			url: 'http://eoflow.freewebclub.com/', 디바이스: 'PC/Tablet/Mobile',
		},

		{
			title: '브래드 가든 반응형',
			thumb: 'pt_10.jpg',
			desc: '쇼핑몰 플랫폼',
			date: '2017',
			role: '퍼블리싱',
			stack: ['php', 'scss'],
			type: ['홈페이지', '반응형'],
			url: 'https://www.breadgarden.co.kr/', 디바이스: 'PC/Tablet/Mobile',
		},

		{
			title: '마이리틀 프랜드 반응형',
			thumb: 'pt_09.jpg',
			desc: '애완용품 플랫폼',
			date: '2017',
			role: '퍼블리싱',
			stack: ['php', 'scss'],
			type: ['홈페이지', '반응형'],
			url: 'https://www.mylittlefriend.kr/', 디바이스: 'PC/Tablet/Mobile',
		},

		{
			title: '영풀 pc/m',
			thumb: 'pt_17.jpg',
			desc: '교육 플랫폼',
			date: '2017',
			role: '퍼블리싱',
			stack: ['php', 'scss'],
			type: ['홈페이지', '모바일'],
			url: 'http://www.youngpull.com/', 디바이스: 'PC/Mobile',
		},
		{
			title: 'Nice 지니데이터 ',
			thumb: 'pt_nice.jpg',
			desc: '회사/내부 ERP',
			date: '2015',
			role: '퍼블리싱',
			stack: ['php', 'scss'],
			type: ['b2b', '홈페이지'],
			url: 'https://hivesystem.net/', 디바이스: 'PC/Tablet/Mobile',
		},
		{
			title: '법률 사무소 고은 ',
			thumb: 'pt_gounlaw.jpg',
			desc: '법률 사무소',
			date: '2015',
			role: '퍼블리싱',
			stack: ['php', 'scss'],
			type: ['홈페이지', '반응형'],
			url: 'https://gounlaw.com/', 디바이스: 'PC/Tablet/Mobile',
		},

		{
			title: '부산마루 음악제',
			thumb: 'pt_bmimf.jpg',
			desc: '커뮤니티 플랫폼',
			date: '2016',
			role: '퍼블리싱',
			stack: ['php', 'scss'],
			type: ['홈페이지', '반응형'],
			url: 'https://www.bmimf.co.kr/', 디바이스: 'PC/Tablet/Mobile',
		},

		{
			title: '하이브 시스템',
			thumb: 'pt_hivesystem.jpg',
			desc: '회사소개',
			date: '2015',
			role: '퍼블리싱',
			stack: ['php', 'scss'],
			type: ['홈페이지', '반응형'],
			url: 'https://hivesystem.net/', 디바이스: 'PC/Tablet/Mobile',
		}
	];

	//탭
	const [tabIdx, setTabIdx] = useState(0);
	const tab = [
		{ text: '전체', link: '' },
		{ text: '이러닝', link: '' },
		{ text: '홈페이지', link: '' },
		{ text: '반응형', link: '' },
		{ text: '모바일', link: '' },
		{ text: 'B2B', link: '' },
		{ text: 'React · Vue', link: '' }
		//{text: '리디자인', link: ''}
	];

	const selectedTabText = tab[tabIdx].text;

	function handleTabClick(idx) {
		setTabIdx(idx);
		// 기존 애니메이션 중지
		gsap.killTweensOf('.portfolio__item');

		// 새로운 애니메이션 실행
		gsap.fromTo('.portfolio__item', { opacity: 0, scale: 0 }, { opacity: 1, scale: 1, duration: 0.5, ease: 'Power.easeInOut' });
	}

	useEffect(() => {

		if (page === 'main') return
		new SplitType('.section_work .motion_txt span', {
			types: 'chars'
			// optional: line/word도 원하면 추가
		});

		const tl = gsap.timeline();

		tl.fromTo(
			'.motion_txt .char',
			{ y: '100%', opacity: 0 },
			{
				y: '0%',
				opacity: 1,
				stagger: 0.05,
				duration: 1.2,
				ease: 'expo.inOut'
			},
			0
		)
			.fromTo(
				'.filter',
				{ y: '100%', opacity: 0 },
				{
					y: '0%',
					opacity: 1,
					stagger: 0.05,
					duration: 0.6,
					ease: 'expo.inOut'
				},
				'<0.'
			);

		//tl.fromTo('.portfolio__item', { opacity: 0, y: 30 }, { opacity: 1, y: 0, stagger: 0.1, ease: 'Power.easeInOut' }, '<0.4');

		return () => {
			//split.revert(); // SplitType이 만든 span 구조 제거
			tl.kill();      // GSAP 타임라인 제거
		};
	}, []);





	return (
		<>
			{page === 'work' ?
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
				: null}



			<div className={`portfolio__list type_${page}`}>
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
						<>
							<PortfolioItem key={index} index={index} item={item} /></>
					))}
			</div>

		</>
	);
}

export default PortfolioList;
