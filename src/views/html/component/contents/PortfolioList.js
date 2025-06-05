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

	function handleTabClick(idx) {
		setTabIdx(idx);
		// 기존 애니메이션 중지
		gsap.killTweensOf('.portfolio__item');

		// 새로운 애니메이션 실행
		gsap.fromTo('.portfolio__item', { opacity: 0, scale:0}, { opacity: 1, scale: 1, duration:0.5,ease:'Power.easeInOut'});
	}

	useEffect(() => {

		if(page === 'main') return
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
		{page === 'work'? 
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
		</>
	);
}

export default PortfolioList;
