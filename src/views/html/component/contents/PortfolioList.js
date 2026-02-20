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
            title: '영카트 기반 글로벌 쇼핑몰',
            thumb: 'pt_0korea.jpg',
            desc: '영카트 기반 글로벌 커머스 플랫폼 UX/UI 기획 및 퍼블리싱',
            date: '2025',
            role: 'UX/UI 기획 · 디자인 · 영카트',
            stack: ['영카트', 'PHP', 'SCSS', '글로벌 커머스 UI'],
            type: ['쇼핑몰', '글로벌', '홈페이지'],
            url: 'https://0korea.ranked0.com/',
            titleDetail: ['0KOREA', '영카트 기반 글로벌 쇼핑몰 플랫폼'],
            descDetail: ['글로벌 판매 흐름을 고려한 서비스 구조 기획', 'UX/UI 디자인 및 영카트 기반 쇼핑몰 커스터마이징'],
            thumbDetail: 'pt_0korea.jpg',
            디바이스: 'PC / Mobile'
        },
        {
            title: '아임웹 기반 교육 콘텐츠 사이트',
            thumb: 'pt_lernity.jpg',
            desc: '교육 콘텐츠 플랫폼',
            date: '2025',
            role: 'UX/UI 기획 & 디자인 · 아임웹 구현',
            stack: ['Imweb (섹션 설계 및 커스터마이징)', '반응형'],
            type: ['아임웹', '반응형', '교육 플랫폼'],
            url: 'https://lernity.imweb.me/Index',
            titleDetail: ['LERNITY', '아임웹 기반 교육 콘텐츠 사이트'],
            descDetail: ['교육 콘텐츠 흐름에 맞춘 서비스 구조 기획', 'UX/UI 디자인 및 아임웹 기반 사이트 구현'],
            thumbDetail: 'pt_lernity.jpg',
            디바이스: 'PC / Tablet / Mobile'
        },
        {
            title: '한국인터넷진흥원(KISA) 접근성 웹 구축',
            thumb: 'pt_kisa.jpg',
            desc: '웹 접근성 기준을 반영한 보안 서비스 사이트 퍼블리싱',
            date: '2025',
            role: '웹 접근성 기반 Vue 퍼블리싱',
            stack: ['Vue.js', 'SCSS', '웹 접근성(WA) 가이드 준수'],
            type: ['Vue', '반응형', '접근성'],
            url: 'https://kisa.awsome-app.kr/main',
            titleDetail: ['KISA', '웹 접근성 기반 보안 서비스 사이트'],
            descDetail: ['웹 접근성(WCAG) 기준을 고려한 퍼블리싱', '디자이너와 협업하여 구조·스타일 구현'],
            디바이스: 'PC'
        },
        {
            title: '디지털 교과서 | 현대사회와 윤리',
            thumb: 'pt_2025_jhmse.jpg',
            desc: '디지털 교과서 앱 내 웹뷰 기반 이러닝 콘텐츠 퍼블리싱',
            date: '2025.08 ~ 2025.09',
            role: '디지털 교과서 웹뷰 퍼블리싱',
            stack: ['HTML/CSS 기반 교과서 퍼블리싱', '퀴즈 인터랙션 JavaScript'],
            type: ['디지털교과서', '이러닝 콘텐츠', '웹뷰'],
            url: 'https://www.usuaia.me/ebook/jhmse_/',
            titleDetail: ['현대사회와 윤리', '디지털 교과서 앱(WebView) 콘텐츠'],
            descDetail: ['교과서 콘텐츠 구조에 맞춘 웹뷰 퍼블리싱', '퀴즈·학습 인터랙션 구현'],
            thumbDetail: 'pt_2025_jhmse.jpg',
            디바이스: 'PC'
        },
        {
            title: '디지털 교과서 | 역사 2',
            thumb: 'pt_2025_jmhs2.jpg',
            desc: '디지털 교과서 앱 내 웹뷰 기반 이러닝 콘텐츠 퍼블리싱',
            date: '2025.08 ~ 2025.09',
            role: '디지털 교과서 웹뷰 퍼블리싱',
            stack: ['HTML/CSS 기반 교과서 퍼블리싱', '퀴즈 인터랙션 JavaScript'],
            type: ['디지털교과서', '이러닝 콘텐츠', '웹뷰'],
            url: 'https://www.usuaia.me/ebook/jmhs2/contents/html/ebook/ebook.html',
            titleDetail: ['역사 2', '디지털 교과서 앱(WebView) 콘텐츠'],
            descDetail: ['교과서 콘텐츠 흐름에 맞춘 웹뷰 퍼블리싱', '퀴즈·학습 인터랙션 구현'],
            thumbDetail: 'pt_2025_jmhs2.jpg',
            디바이스: 'PC'
        },
        {
            title: '디지털 교과서 | 한국사 2',
            thumb: 'pt_2025_jmkh2.jpg',
            desc: '디지털 교과서 앱 내 웹뷰 기반 이러닝 콘텐츠 퍼블리싱',
            date: '2025.07 ~ 2025.09',
            role: '디지털 교과서 웹뷰 퍼블리싱',
            stack: ['HTML/CSS 기반 교과서 퍼블리싱', '퀴즈 인터랙션 JavaScript'],
            type: ['디지털교과서', '이러닝 콘텐츠', '웹뷰'],
            url: 'https://www.usuaia.me/ebook/jmkh2/',
            titleDetail: ['한국사 2', '디지털 교과서 앱(WebView) 콘텐츠'],
            descDetail: ['디지털 교과서 전용 웹뷰 퍼블리싱', '퀴즈 및 학습 인터랙션 구현, 개발자 협업'],
            thumbDetail: 'pt_2025_jmkh2.jpg',
            디바이스: 'PC'
        },
        {
            title: '코그플레이(CogPlay) 웹·앱 반응형 구축',
            thumb: 'pt_2024_cgplay.jpg',
            desc: '뇌 트레이닝 플랫폼 웹·앱 연계 반응형 퍼블리싱',
            date: '2024.11 ~ 2024.12',
            role: 'React 기반 웹·앱 퍼블리싱',
            stack: ['React', 'SCSS', '컴포넌트 기반 퍼블리싱'],
            type: ['React', '반응형', '웹/앱'],
            url: 'https://play.google.com/store/apps/details?id=com.cogplay2&hl=ko&pli=1',
            titleDetail: ['CogPlay', '뇌 트레이닝 플랫폼 웹·앱 반응형 구축'],
            descDetail: ['앱 연동을 고려한 반응형 웹 퍼블리싱', 'React 컴포넌트 단위 UI 퍼블리싱'],
            thumbDetail: 'pt_2024_cgplay.png',

            디바이스: 'PC/Tablet/Mobile'
        },
        {
            title: 'Vetbless B2B 관리자 플랫폼',
            thumb: 'pt_2025_nalazoo.jpg',
            desc: '상품·고객·예약 데이터를 관리하는 B2B 관리자 웹 퍼블리싱',
            date: '2025',
            role: 'B2B 관리자 퍼블리싱',
            stack: ['PHP', 'SCSS', '관리자 UI 퍼블리싱'],
            type: ['B2B', '관리자', '웹'],
            url: 'https://nalazoo.awsome-app.kr/front/Chart',
            디바이스: 'PC'
        },
        {
            title: '배달 플랫폼 모바일 서비스',
            thumb: 'manashop.jpg',
            desc: '음식 배달 주문을 위한 B2C 모바일 플랫폼',
            date: '2023 ~ 2024',
            role: '모바일 퍼블리싱 · Vue 프론트엔드 개발',
            stack: ['Vue.js', 'SCSS', '모바일 UI 퍼블리싱'],
            type: ['B2C', '모바일', '플랫폼', 'Vue'],
            url: 'https://634fa63d3236be6714353078--willowy-parfait-db4af9.netlify.app/path',
            url2: 'https://smartshop.mannashop.co.kr/shop/mns/',

            디바이스: 'Mobile'
        },
        {
            title: 'QR 주문 테이블 모바일 플랫폼',
            thumb: 'pt_qr.png',
            desc: '매장 내 QR 주문을 위한 모바일 테이블 주문 플랫폼',
            descDetail: ['매장 내 QR 주문을 위한 모바일 테이블 주문 플랫폼', ' Nuxt3 프론트엔드 개발'],
            date: '2024',
            role: '모바일 퍼블리싱 · Nuxt3 프론트엔드 개발',
            stack: ['Nuxt3', 'Vue.js', 'SCSS', '모바일 UI 퍼블리싱'],
            type: ['B2C', '모바일', '플랫폼', 'QR 주문'],
            url: 'https://web-nuxt-qr-netlify.netlify.app/pb/path',
            디바이스: 'Mobile'
        },
        {
            title: '마트 모바일 주문 플랫폼',
            thumb: 'pt_mart.png',
            desc: '상품 탐색부터 주문까지 가능한 B2C 모바일 마트 주문 플랫폼',
            descDetail: ['상품 탐색부터 주문까지 가능한 B2C 모바일 마트 주문 플랫폼', ' Vue 프론트엔드 개발'],
            date: '2023',
            role: '모바일 퍼블리싱 · Vue 프론트엔드 개발',
            stack: ['Vue.js', 'SCSS', '모바일 커머스 UI 퍼블리싱'],
            type: ['B2C', '모바일', '플랫폼', '커머스'],
            url: 'https://vue-mart-2.netlify.app/publish',
            url2: 'https://tsmartshop.mannashop.co.kr/shop/mts/',
            디바이스: 'Mobile'
        },
        {
            title: '스마트 골프 모바일 예약 플랫폼',
            thumb: 'pt_golf.png',
            desc: '골프 예약 흐름을 중심으로 한 B2C 모바일 예약 플랫폼 Vue 퍼블리싱',
            date: '2024',
            role: 'Vue 기반 모바일 퍼블리싱',
            stack: ['Vue.js', 'SCSS', '모바일 UI 퍼블리싱'],
            type: ['B2C', '모바일', '플랫폼', '예약'],
            url: 'https://63233a86330f840008be9b72--extraordinary-snickerdoodle-799c22.netlify.app/path',
            디바이스: 'Mobile'
        },
        {
            title: '수바툴 모바일 자영업 플랫폼',
            thumb: 'pt_2024_suva.jpg',
            desc: '자영업자를 위한 서비스 관리 모바일 플랫폼',
            date: '2024',
            role: '모바일 퍼블리싱',
            stack: ['PHP', 'SCSS', '모바일 UI 퍼블리싱'],
            type: ['모바일', '플랫폼', '자영업'],
            url: 'https://suva.awsome-app.kr/',
            디바이스: 'Mobile'
        },
        {
            title: '에코하이 반응형 이벤트 플랫폼',
            thumb: 'pt_2024_ecohi.jpg',
            desc: '회원 참여형 이벤트 운영을 위한 반응형 웹 플랫폼',
            date: '2024',
            role: '반응형 웹 퍼블리싱',
            stack: ['PHP', 'SCSS', '반응형 UI 퍼블리싱'],
            type: ['반응형', '웹', '이벤트'],
            url: 'https://ecohigh.kr/front/Member/Login',
            디바이스: 'PC / Tablet / Mobile'
        },
        {
            title: '이지수능 교육 관리 플랫폼',
            thumb: 'pt_2024_easy_study.jpg',
            desc: '교사·학생 학습 관리를 위한 B2B 교육 관리 플랫폼 React 퍼블리싱',
            date: '2024',
            role: 'React 기반 퍼블리싱',
            stack: ['React', 'SCSS', '컴포넌트 기반 UI 퍼블리싱'],
            type: ['B2B', '교육', '반응형', 'React'],
            url: 'http://easy-study.awsome-app.kr/',
            디바이스: 'PC'
        },
        {
            title: '파랑새 반응형 축제 이벤트 플랫폼',
            thumb: 'pt_2025_bluebird.jpg',
            desc: '지역 축제 운영을 위한 반응형 이벤트 웹 플랫폼',
            date: '2024',
            role: '반응형 웹 퍼블리싱',
            stack: ['PHP', 'SCSS', '반응형 UI 퍼블리싱'],
            type: ['홈페이지', '반응형', '이벤트'],
            url: 'https://bluebird.awsome-app.kr/',
            디바이스: 'PC / Tablet / Mobile'
        },
        {
            title: '온플 크리에이터 영상 콘텐츠 플랫폼',
            thumb: 'pt_2024_onply.jpg',
            desc: '크리에이터 영상 콘텐츠 제공을 위한 반응형 웹 플랫폼',
            date: '2024',
            role: '반응형 웹 퍼블리싱',
            stack: ['PHP', 'SCSS', '미디어 UI 퍼블리싱'],
            type: ['홈페이지', '반응형', '콘텐츠'],
            url: 'https://onply.awsome-app.kr/',
            디바이스: 'PC / Tablet / Mobile'
        },
        {
            title: '특허 유사도 Gadget 반응형 플랫폼',
            thumb: 'pt_2024_gadget.jpg',
            desc: '고객 특허 유사도 분석 결과를 제공하는 반응형 웹 플랫폼',
            date: '2025',
            role: '반응형 웹 퍼블리싱',
            stack: ['PHP', 'SCSS', '데이터 UI 퍼블리싱'],
            type: ['홈페이지', '반응형', '플랫폼'],
            url: 'https://gadget.awsome-app.kr/',
            디바이스: 'PC / Tablet / Mobile'
        },
        {
            title: '가구의장인 모바일 인테리어 견적 플랫폼',
            thumb: 'pt_2025_gagu.jpg',
            desc: '인테리어 견적 요청 흐름을 중심으로 한 모바일·반응형 플랫폼',
            date: '2025',
            role: '모바일·반응형 퍼블리싱',
            stack: ['PHP', 'SCSS', '모바일 UI 퍼블리싱'],
            type: ['모바일', '반응형', '플랫폼'],
            url: 'https://gagu.awsome-app.kr/',
            디바이스: 'Mobile'
        },
        {
            title: 'WINos 반응형 회사소개 사이트',
            thumb: 'pt_2025_winos.jpg',
            desc: '기업 브랜딩 정보를 전달하는 반응형 회사소개 웹 퍼블리싱',
            date: '2025',
            role: '반응형 웹 퍼블리싱',
            stack: ['PHP', 'SCSS', '반응형 UI 퍼블리싱'],
            type: ['홈페이지', '반응형', '기업'],
            url: 'https://winos.awsome-app.kr/',
            디바이스: 'PC / Tablet / Mobile'
        },
        {
            title: '큐딩 모바일 쇼핑몰',
            thumb: 'pt_2025_qding.jpg',
            desc: '상품 탐색과 구매를 위한 모바일 쇼핑몰 퍼블리싱',
            date: '2025',
            role: '모바일 퍼블리싱',
            stack: ['PHP', 'SCSS', '커머스 UI 퍼블리싱'],
            type: ['모바일', '쇼핑몰', '커머스'],
            url: 'https://qding2.awsome-app.kr/front/Mall/Online',
            디바이스: 'Mobile'
        },
        {
            title: '퍼스트안과 반응형 병원 플랫폼',
            thumb: 'pt_firsteye.jpg',
            desc: '병원 정보 제공 및 상담 흐름을 고려한 반응형 웹 플랫폼',
            date: '2024',
            role: '반응형 웹 퍼블리싱',
            stack: ['PHP', 'SCSS', '반응형 UI 퍼블리싱'],
            type: ['홈페이지', '반응형', '병원'],
            url: 'https://www.firsteyeclinic.co.kr/',
            디바이스: 'PC / Tablet / Mobile'
        },
        {
            title: '예일안과 반응형 병원 플랫폼',
            thumb: 'pt_lasik.jpg',
            desc: '시력교정 병원 정보 제공을 위한 반응형 웹 플랫폼',
            date: '2024',
            role: '반응형 웹 퍼블리싱',
            stack: ['PHP', 'SCSS', '반응형 UI 퍼블리싱'],
            type: ['홈페이지', '반응형', '병원'],
            url: 'https://lasikmasan.mycafe24.com/',
            디바이스: 'PC / Tablet / Mobile'
        },
        {
            title: '가맹점 POS 상품 설정 관리자',
            thumb: 'pt_pos-web.png',
            desc: '가맹점 상품 등록·관리 기능을 제공하는 B2B POS 관리자 웹 퍼블리싱 및 PHP 프론트엔드 개발',
            date: '2022',
            role: 'PC 퍼블리싱 · PHP 프론트엔드 개발',
            stack: ['PHP', 'SCSS', '관리자 UI 퍼블리싱'],
            type: ['B2B', '관리자', 'POS'],
            url: 'https://tmng.mannashop.co.kr/linkage/pos_v2/contents/setGoods/goods/list.php',
            url2: 'https://tmng.mannashop.co.kr/linkage/pos_v2/contents/setGoods/goods/list.php'
        },
        {
            title: '맛집 모바일 플랫폼',
            thumb: 'pt_manna.png',
            desc: '매장 정보 탐색과 주문을 위한 모바일 맛집 플랫폼',
            date: '2022',
            role: '모바일 퍼블리싱',
            stack: ['PHP', 'SCSS', '모바일 UI 퍼블리싱'],
            type: ['모바일', '플랫폼', '맛집'],
            url: 'https://smartshop.mannashop.co.kr/shop/mns/',
            디바이스: 'Mobile'
        },
        {
            title: '신한벽지 반응형 회사소개 사이트',
            thumb: 'pt_shin.jpg',
            desc: '기업 브랜드와 제품 정보를 전달하는 PC·모바일 반응형 웹 퍼블리싱',
            date: '2021',
            role: '반응형 웹 퍼블리싱',
            stack: ['PHP', 'SCSS', '반응형 UI 퍼블리싱'],
            type: ['홈페이지', '반응형', '기업'],
            url: 'https://www.shinhanwall.co.kr',
            디바이스: 'PC / Tablet / Mobile'
        },
        {
            title: '쿠폰센든 반응형 쿠폰 플랫폼',
            thumb: 'pt_coupon_send.jpg',
            desc: '쿠폰 발급 및 활용을 위한 반응형 웹 플랫폼',
            date: '2020',
            role: '반응형 웹 퍼블리싱',
            stack: ['PHP', 'SCSS', '플랫폼 UI 퍼블리싱'],
            type: ['홈페이지', '반응형', '쿠폰'],
            url: 'https://hyera1828.cafe24.com/coupon_send/ch.html',
            디바이스: 'PC / Tablet / Mobile'
        },
        {
            title: '한제플래닛 반응형 회사소개 사이트',
            thumb: 'pt_jangsa.jpg',
            desc: '기업 정보 전달을 위한 반응형 회사소개 웹 퍼블리싱',
            date: '2020',
            role: '반응형 웹 퍼블리싱',
            stack: ['PHP', 'SCSS', '반응형 UI 퍼블리싱'],
            type: ['홈페이지', '반응형', '기업'],
            url: 'http://hanjae.freewebclub.com/main/main.html',
            디바이스: 'PC / Tablet / Mobile'
        },

        {
            title: '아일랜드캐슬 반응형 회사소개 사이트',
            thumb: 'pt_05.jpg',
            desc: '기업 브랜드 정보를 전달하는 반응형 회사소개 웹 퍼블리싱',
            date: '2020',
            role: '반응형 웹 퍼블리싱',
            stack: ['PHP', 'SCSS', '반응형 UI 퍼블리싱'],
            type: ['홈페이지', '반응형', '기업'],
            url: 'http://www.island-castle.co.kr/',
            디바이스: 'PC / Tablet / Mobile'
        },
        {
            title: '더케이 커뮤니케이션 반응형 커뮤니티 플랫폼',
            thumb: 'pt_thek.jpg',
            desc: '커뮤니티 중심의 정보 제공을 위한 반응형 웹 플랫폼',
            date: '2020',
            role: '반응형 웹 퍼블리싱',
            stack: ['PHP', 'SCSS', '플랫폼 UI 퍼블리싱'],
            type: ['홈페이지', '반응형', '커뮤니티'],
            url: 'http://mc3099.freewebclub.com/main/main.html',
            디바이스: 'PC / Tablet / Mobile'
        },
        {
            title: '미스터키친 반응형 프랜차이즈 플랫폼',
            thumb: 'pt_mrbossam.jpg',
            desc: '프랜차이즈 브랜드 정보 제공을 위한 반응형 웹 퍼블리싱',
            date: '2020',
            role: '반응형 웹 퍼블리싱',
            stack: ['PHP', 'SCSS', '브랜드 UI 퍼블리싱'],
            type: ['홈페이지', '반응형', '프랜차이즈'],
            url: 'http://mrbossam.co.kr/main/main.html',
            디바이스: 'PC / Tablet / Mobile'
        },
        {
            title: '스쿨푸드 반응형 프랜차이즈 플랫폼',
            thumb: 'pt_schoolfood.jpg',
            desc: '외식 프랜차이즈 브랜드 운영을 위한 반응형 웹 퍼블리싱',
            date: '2020',
            role: '반응형 웹 퍼블리싱',
            stack: ['PHP', 'SCSS', '브랜드 UI 퍼블리싱'],
            type: ['홈페이지', '반응형', '프랜차이즈'],
            url: 'http://schoolfood.freewebclub.com/main/main.html',
            디바이스: 'PC / Tablet / Mobile'
        },
        {
            title: '차앤박피부과 PC·모바일 병원 플랫폼',
            thumb: 'pt_03.jpg',
            desc: ['회사·지점·고객 병원 통합 플랫폼 '],
            descDetail: ['회사·지점·고객 관리를 포함한 병원 통합 플랫폼 ', '(ICT K어워드 코리아 e-비즈니스 은상)'],
            date: '2018',
            role: 'PC·모바일 퍼블리싱',
            stack: ['PHP', 'SCSS', '병원 플랫폼 UI 퍼블리싱'],

            type: ['홈페이지', '모바일', 'B2C', 'B2B', '병원'],
            url: 'https://www.cnpskin.com/pc/cnp/main/main.html',
            url2: 'https://www.cnpskin.com/pc/branch/main/main.html?jijummid=cnpskin18',
            디바이스: 'PC / Mobile'
        },
        {
            title: '일본 유랑기 PC·모바일 여행 예약 플랫폼',
            thumb: 'pt_01.jpg',
            desc: '여행 상품 탐색 및 예약을 위한 PC·모바일 여행 플랫폼',
            date: '2019',
            role: 'PC·모바일 퍼블리싱',
            stack: ['PHP', 'SCSS', '여행 플랫폼 UI 퍼블리싱'],
            type: ['홈페이지', '모바일', '여행'],
            url: 'https://www.japanuranggi.com/main/main.html',
            디바이스: 'PC / Mobile'
        },
        {
            title: '유로자전거나라 PC·모바일 여행 플랫폼',
            thumb: 'pt_02.jpg',
            desc: '자전거 여행 상품 예약을 위한 PC·모바일 여행 플랫폼',
            descDetail: ['자전거 여행 상품 예약을 위한 PC·모바일 여행 플랫폼 ', '(ICT K어워드코리아 UI/UX 디자인 금상)'],
            date: '2020',
            role: 'PC·모바일 퍼블리싱',
            stack: ['PHP', 'SCSS', '여행 플랫폼 UI 퍼블리싱'],
            type: ['홈페이지', '모바일', '여행'],
            url: 'http://www.jangsadalin.com',
            디바이스: 'PC / Mobile'
        },
        {
            title: '타이탄 인베스트 반응형 금융 플랫폼',
            thumb: 'pt_06.jpg',
            desc: '투자 상품 정보 제공을 위한 반응형 금융 플랫폼',
            date: '2019',
            role: '반응형 웹 퍼블리싱',
            stack: ['PHP', 'SCSS', '금융 플랫폼 UI 퍼블리싱'],
            type: ['홈페이지', '반응형', '금융'],
            url: 'https://www.titaninvest.co.kr',
            디바이스: 'PC / Tablet / Mobile'
        },
        {
            title: '굿레이트 반응형 P2P 금융 플랫폼',
            thumb: 'pt_07.jpg',
            desc: 'P2P 금융 서비스 제공을 위한 반응형 웹 플랫폼 ',

            descDetail: ['P2P 금융 서비스 제공을 위한 반응형 웹 플랫폼 ', '(ICT K어워드코리아 디지털콘텐츠솔루션 은상)'],
            date: '2016',
            role: '반응형 웹 퍼블리싱',
            stack: ['PHP', 'SCSS', '금융 플랫폼 UI 퍼블리싱'],
            type: ['홈페이지', '반응형', '금융'],
            url: 'https://www.grate.kr',
            디바이스: 'PC / Tablet / Mobile'
        },
        {
            title: '세이브존 반응형 문화센터 플랫폼',
            thumb: 'pt_08.jpg',
            desc: '문화센터 프로그램 안내 및 운영을 위한 반응형 웹 플랫폼',
            date: '2018',
            role: '반응형 웹 퍼블리싱',
            stack: ['PHP', 'SCSS', '문화·교육 UI 퍼블리싱'],
            type: ['홈페이지', '반응형', '문화'],
            url: 'https://saveculture.savezone.co.kr/',
            디바이스: 'PC / Tablet / Mobile'
        },
        {
            title: '장사의달인 반응형·앱 창업 플랫폼',
            thumb: 'pt_jangsa.jpg',
            desc: '창업 정보 제공과 서비스 이용을 위한 반응형 웹·앱 플랫폼',
            date: '2018',
            role: '반응형 웹 퍼블리싱',
            stack: ['PHP', 'SCSS', '플랫폼 UI 퍼블리싱'],
            type: ['홈페이지', '반응형', '창업'],
            url: 'http://www.jangsadalin.com',
            디바이스: 'PC / Tablet / Mobile'
        },
        {
            title: '국민청소년 디딤센터 반응형 커뮤니티 플랫폼',
            thumb: 'pt_07.jpg',
            desc: '청소년 대상 커뮤니티 운영을 위한 반응형 웹 플랫폼',
            date: '2016',
            role: '반응형 웹 퍼블리싱',
            stack: ['PHP', 'SCSS', '커뮤니티 UI 퍼블리싱'],
            type: ['홈페이지', '반응형', '공공'],
            url: 'https://www.grate.kr',
            디바이스: 'PC / Tablet / Mobile'
        },
        {
            title: 'SBI저축은행 반응형 금융 플랫폼',
            thumb: 'pt_sb.jpg',
            desc: '금융 서비스 정보 제공을 위한 반응형 웹 플랫폼',
            date: '2017',
            role: '반응형 웹 퍼블리싱',
            stack: ['PHP', 'SCSS', '금융 UI 퍼블리싱'],
            type: ['홈페이지', '반응형', '금융'],
            url: 'https://www.sbisb.co.kr/',
            디바이스: 'PC / Tablet / Mobile'
        },
        {
            title: 'NICE신용정보 PC·모바일 금융 플랫폼',
            thumb: 'pt_nice_1.jpg',
            desc: '금융 정보 제공을 위한 PC·모바일 웹 퍼블리싱',
            date: '2016',
            role: 'PC·모바일 퍼블리싱',
            stack: ['PHP', 'SCSS', '금융 UI 퍼블리싱'],
            type: ['홈페이지', '반응형', '금융'],
            url: 'https://www.niceamc.co.kr/kr/index.do',
            디바이스: 'PC'
        },
        {
            title: '동양북스 PC·모바일 서적 플랫폼',
            thumb: 'pt_dongyangbooks.jpg',
            desc: '출판사 서적 정보 제공을 위한 PC·모바일 웹 퍼블리싱',
            date: '2016',
            role: 'PC·모바일 퍼블리싱',
            stack: ['PHP', 'SCSS', '콘텐츠 UI 퍼블리싱'],
            type: ['홈페이지', '반응형', '출판'],
            url: 'https://www.dongyangbooks.com',
            디바이스: 'PC / Mobile'
        },
        {
            title: '경기도청소년수련원 공공 커뮤니티 플랫폼',
            thumb: 'pt_ggyc.jpg',
            desc: '공공기관 커뮤니티 웹 구축 및 웹접근성 마크 획득',
            date: '2015',
            role: '퍼블리싱 · 웹접근성 마크 획득',
            stack: ['PHP', 'SCSS', '웹접근성 기반 UI 퍼블리싱'],
            type: ['홈페이지', '공공', '접근성'],
            url: 'https://www.ggyc.kr/',
            디바이스: 'PC / Mobile'
        },
        {
            title: '이오플로우 제품 소개 반응형 플랫폼',
            thumb: 'pt_eoflow.jpg',
            desc: '의료기기 제품 정보를 전달하는 반응형 웹 퍼블리싱',
            date: '2017',
            role: '반응형 웹 퍼블리싱',
            stack: ['PHP', 'SCSS', '브랜드 UI 퍼블리싱'],
            type: ['홈페이지', '반응형', '제품'],
            url: 'http://eoflow.freewebclub.com/',
            디바이스: 'PC / Tablet / Mobile'
        },
        {
            title: '브레드가든 반응형 쇼핑몰 플랫폼',
            thumb: 'pt_10.jpg',
            desc: '상품 탐색과 구매를 위한 반응형 쇼핑몰 웹 퍼블리싱',
            date: '2017',
            role: '반응형 웹 퍼블리싱',
            stack: ['PHP', 'SCSS', '커머스 UI 퍼블리싱'],
            type: ['홈페이지', '반응형', '쇼핑몰'],
            url: 'https://www.breadgarden.co.kr/',
            디바이스: 'PC / Tablet / Mobile'
        },
        {
            title: '마이리틀프랜드 반응형 반려용품 플랫폼',
            thumb: 'pt_09.jpg',
            desc: '반려동물 용품 정보를 제공하는 반응형 웹 플랫폼',
            date: '2017',
            role: '반응형 웹 퍼블리싱',
            stack: ['PHP', 'SCSS', '커머스 UI 퍼블리싱'],
            type: ['홈페이지', '반응형', '반려동물'],
            url: 'https://www.mylittlefriend.kr/',
            디바이스: 'PC / Tablet / Mobile'
        },
        {
            title: '영풀 PC·모바일 교육 플랫폼',
            thumb: 'pt_17.jpg',
            desc: '교육 콘텐츠 정보 제공을 위한 PC·모바일 웹 퍼블리싱',
            date: '2017',
            role: 'PC·모바일 퍼블리싱',
            stack: ['PHP', 'SCSS', '교육 콘텐츠 UI 퍼블리싱'],
            type: ['홈페이지', '모바일', '교육'],
            url: 'http://www.youngpull.com/',
            디바이스: 'PC / Mobile'
        },
        {
            title: 'NICE 지니데이터 B2B ERP 플랫폼',
            thumb: 'pt_nice.jpg',
            desc: '사내 데이터 관리 및 업무 지원을 위한 B2B ERP 웹 퍼블리싱',
            date: '2015',
            role: 'B2B 퍼블리싱',
            stack: ['PHP', 'SCSS', '관리자 UI 퍼블리싱'],
            type: ['B2B', '홈페이지', 'ERP'],
            url: 'https://hivesystem.net/',
            디바이스: 'PC / Tablet / Mobile'
        },
        {
            title: '법률사무소 고은 반응형 웹사이트',
            thumb: 'pt_gounlaw.jpg',
            desc: '법률 서비스 정보를 전달하는 반응형 웹 퍼블리싱',
            date: '2015',
            role: '반응형 웹 퍼블리싱',
            stack: ['PHP', 'SCSS', '브랜드 UI 퍼블리싱'],
            type: ['홈페이지', '반응형', '법률'],
            url: 'https://gounlaw.com/',
            디바이스: 'PC / Tablet / Mobile'
        },
        {
            title: '부산마루국제음악제 반응형 커뮤니티 플랫폼',
            thumb: 'pt_bmimf.jpg',
            desc: '국제 음악제 정보 제공을 위한 반응형 커뮤니티 웹 퍼블리싱',
            date: '2016',
            role: '반응형 웹 퍼블리싱',
            stack: ['PHP', 'SCSS', '콘텐츠 UI 퍼블리싱'],
            type: ['홈페이지', '반응형', '커뮤니티'],
            url: 'https://www.bmimf.co.kr/',
            디바이스: 'PC / Tablet / Mobile'
        },
        {
            title: '하이브시스템 반응형 회사소개 사이트',
            thumb: 'pt_hivesystem.jpg',
            desc: '기업 서비스 및 기술 정보를 전달하는 반응형 웹 퍼블리싱',
            date: '2015',
            role: '반응형 웹 퍼블리싱',
            stack: ['PHP', 'SCSS', '반응형 UI 퍼블리싱'],
            type: ['홈페이지', '반응형', '기업'],
            url: 'https://hivesystem.net/',
            디바이스: 'PC / Tablet / Mobile'
        }
    ];

    //탭
    const [tabIdx, setTabIdx] = useState(0);
    const tab = [
        { text: '전체', link: '' },
        { text: '아임웹', link: '' },
        { text: '이러닝', link: '' },
        { text: '쇼핑몰', link: '' },
        { text: '홈페이지', link: '' },
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
        if (page === 'main') return;
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
        ).fromTo(
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
            tl.kill(); // GSAP 타임라인 제거
        };
    }, []);

    return (
        <>
            {page === 'work' ? (
                <section className="tit_wrap">
                    <h2 className="tit motion_txt">
                        <span>WORK</span>
                    </h2>
                    <div className="filter_list ">
                        {tab.map((v, idx) => (
                            <button key={idx} className={`filter ${tabIdx === idx ? 'active' : ''}`} onClick={() => handleTabClick(idx)}>
                                <span>{v.text}</span>
                            </button>
                        ))}
                    </div>
                </section>
            ) : null}

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
                            <PortfolioItem key={index} index={index} item={item} />
                        </>
                    ))}
            </div>
        </>
    );
}

export default PortfolioList;
