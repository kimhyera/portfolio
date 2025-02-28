import React, {useState} from 'react';
import 'swiper/css';
import 'swiper/css/navigation';
/*css*/
import '../../assets/scss/page/main.scss';
//component
import PortfolioItem from '../../component/contents/PortfolioItem';
//img
function Main() {
  //탭
  const [tabIdx, setTabIdx] = useState(0);
  const tab = [
    {text: '2024~', link: ''},
    {text: '2015~2023', link: ''}
  ];
	const items = [
		{
			title: '코크플레이 반응형',
			thumb: 'pt_2024_cgplay.jpg',
			desc:'뇌 트레이닝 플랫폼',
			date: '2024',
			role: '퍼블리싱',
			stack: ['react','scss'],
			url: 'https://cgplay2.awsome-app.kr/html/Main',
		},
		{
			title: 'Vetbless PC 관리',
			thumb: 'pt_2025_nalazoo.jpg',
			desc:'상품,고객,예약 관리 플랫폼',
			date: '2025',
			role: '퍼블리싱',
			stack: ['php','scss'],
			url: 'https://nalazoo.awsome-app.kr/front/Chart',
		},
		{
			title: '수바툴 모바일',
			thumb: 'pt_2024_suva.jpg',
			desc:'자영업 플랫폼',
			date: '2024',
			role: '퍼블리싱',
			stack: ['php','scss'],
			url: 'https://suva.awsome-app.kr/',
		},
		{
			title: '에코하이 반응형',
			thumb: 'pt_2024_ecohi.jpg',
			desc:'이벤트 플랫폼',
			date: '2024',
			role: '퍼블리싱',
			stack: ['php','scss'],
			url: 'https://ecohigh.kr/front/Member/Login',
		},
		{
			title: '이지수능 교육 관리',
			thumb: 'pt_2024_easy_study.jpg',
			desc:'교사 학생 교육 관리 플랫폼',
			date: '2024',
			role: '퍼블리싱',
			stack: ['react','scss'],
			url: 'http://easy-study.awsome-app.kr/',
		},
		{
			title: '파랑새 반응형',
			thumb: 'pt_2025_bluebird.jpg',
			desc:'축제 이벤트 플랫폼',
			date: '2024',
			role: '퍼블리싱',
			stack: ['php','scss'],
			url: 'https://bluebird.awsome-app.kr/',
		},
		{
			title: '온플 반응형',
			thumb: 'pt_2024_onply.jpg',
			desc:'크리에이터 영상 컨텐츠 플랫폼',
			date: '2024',
			role: '퍼블리싱',
			stack: ['php','scss'],
			url: 'https://onply.awsome-app.kr/',
		},
		{
			title: '특허유사도gadget 반응형',
			thumb: 'pt_2024_gadget.jpg',
			desc:'고객 검사 플랫폼',
			date: '2025',
			role: '퍼블리싱',
			stack: ['php','scss'],
			url: 'https://gadget.awsome-app.kr/',
		},
		{
			title: '가구의장인 모바일',
			thumb: 'pt_2025_gagu.jpg',
			desc:'인테리어 견적 플랫폼',
			date: '2025',
			role: '퍼블리싱',
			stack: ['php','scss'],
			url: 'https://gagu.awsome-app.kr/',
		},

		{
			title: 'WINos 반응형',
			thumb: 'pt_2025_winos.jpg',
			desc:'회사소개',
			date: '2025',
			role: '퍼블리싱',
			stack: ['php','scss'],
			url: 'https://winos.awsome-app.kr/',
		},

		{
			title: '큐딩 모바일',
			thumb: 'pt_2025_qding.jpg',
			desc:'쇼핑몰',
			date: '2025',
			role: '퍼블리싱',
			stack: ['php','scss'],
			url: 'https://qding2.awsome-app.kr/front/Mall/Online',
		},

		
		{
			title: '퍼스트안과 반응형',
			thumb: 'pt_firsteye.jpg',
			desc:'병원 플랫폼',
			date: '2024',
			role: '반응형 퍼블리싱, 인터렉션',
			stack: ['php','scss'],
			url: 'https://www.firsteyeclinic.co.kr/',
		},

		{
			title: '예일안과 반응형',
			thumb: 'pt_lasik.jpg',
			desc:'병원 플랫폼',
			date: '2024',
			role: '반응형 퍼블리싱, 인터렉션',
			stack: ['php','scss'],
			url: 'https://lasikmasan.mycafe24.com/',
		},
		{
			title: '배달플랫폼 모바일',
			thumb: 'manashop.jpg',
			desc:'고객 배달 플랫폼 (배달음식)',
			date: '2023.10 ~ 2024.01 ',
			role: '모바일 퍼블리싱, Vue 프론트엔드 제작 ',
			stack: ['vue','scss'],
			url: 'https://634fa63d3236be6714353078--willowy-parfait-db4af9.netlify.app/path',
			url2: 'https://smartshop.mannashop.co.kr/shop/mns/',
		},
		{
			title: '주문테이블 Qr 모바일',
			thumb: 'pt_qr.png',
			desc:'  주문 테이블 플랫폼',
			date: '2024.02 ~ 2024.04',
			role: '모바일 퍼블리싱, Nuxt3 프론트엔드 제작 ',
			stack: ['vue','scss'],
			url: 'https://web-nuxt-qr-netlify.netlify.app/pb/path',
		},
		{
			title: '마트 모바일',
			thumb: 'pt_mart.png',
			desc:'  주문 테이블 플랫폼',
			date: '2023.09 ~ 2023.12',
			role: '모바일 퍼블리싱, Vue 프론트엔드 제작 (일부참여) ',
			stack: ['vue','scss'],
			url: 'https://vue-mart-2.netlify.app/publish',
			url2:'https://tsmartshop.mannashop.co.kr/shop/mts/',
		},
		{
			title: '스마트 골프 모바일',
			thumb: 'pt_golf.png',
			desc:'예약 플랫폼',
			date: '2023.05 ~ 2023.09',
			role: 'Vue 모바일 퍼블리싱',
			stack: ['vue','scss'],
			url: 'https://63233a86330f840008be9b72--extraordinary-snickerdoodle-799c22.netlify.app/path',
		},
		{
			title: '가맹점 POS 상품 설정',
			thumb: 'pt_pos-web.png',
			desc:'가맹점 플랫폼',
			date: '2022.04 ~ 2022.09',
			role: 'pc 퍼블리싱, php 프론트엔드 제작',
			stack: ['php','scss'],
			url: 'https://tmng.mannashop.co.kr/linkage/pos_v2/contents/setGoods/goods/list.php',
			url2: 'https://tmng.mannashop.co.kr/linkage/pos_v2/contents/setGoods/goods/list.php',
		},
		{
			title: '맛집 모바일',
			thumb: 'pt_manna.jpg',
			desc:'맛집 플랫폼',
			date: '2022.08 ~ 2022.11',
			role: '모바일 퍼블리싱',
			stack: ['php','scss'],
			url: 'https://smartshop.mannashop.co.kr/shop/mns/',
		},
		{
			title: '신한벽지 Pc/모바일',
			thumb: 'pt_shin.jpg',
			desc:'회사 소개',
			date: '2021',
			role: 'pc,mobile 퍼블리싱',
			stack: ['php','scss'],
			url: 'https://www.shinhanwall.co.kr',
		},
		{
			title: '쿠폰센든 반응형',
			thumb: 'pt_coupon_send.jpg',
			desc:'쿠폰 플랫폼',
			date: '2020',
			role: '반응형 퍼블리싱',
			stack: ['php','scss'],
			url: 'https://hyera1828.cafe24.com/coupon_send/ch.html',
		},

		{
			title: '장사의달인 반응형, 앱',
			thumb: 'pt_jangsa.jpg',
			desc:'창업 플랫폼',
			date: '2018',
			role: '반응형 퍼블리싱',
			stack: ['php','scss'],
			url: 'http://www.jangsadalin.com',
		},




	]
  return (
    <>
      <main className="p_main">
        <section className="pf_tab__wrap">
          <div className="pf_tab ">
            {tab.map((v, idx) => (
              <button key={idx} className={`tab ${tabIdx === idx ? 'active' : ''}`} onClick={() => setTabIdx(idx)}>
                {v.text}
              </button>
            ))}
          </div>
					 
        </section>
        {/*  포트폴리오 */}
        <section className="main_cont_sec">
          {tabIdx === 0 && (
            <>
						<div className="portfolio__list">
							
						{items.map((item, index) => (
                <PortfolioItem  index={index} item={item} />
              ))}
						</div>
            </>
          )}

          {tabIdx === 1 && (
            <>
            </>
          )}
        </section>
      </main>
    </>
  );
}

export default Main;
