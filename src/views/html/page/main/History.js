import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import gsap from 'gsap';
import SplitType from 'split-type';
import ScrollTrigger from 'gsap/ScrollTrigger';

import '../../assets/scss/page/history.scss';
//component
import ContactLinks from '../../component/inc/ContactLinks';

function History() {
  //about
  useEffect(() => {
    // SplitType 적용 (chars 단위)

    new SplitType('.char_text', {
      types: 'chars'
    });
    //글자 효과

    gsap.fromTo(
      '.char_text .char',
      { y: '100%', opacity: 0 },
      {
        opacity: 1,
        y: '0%',
        duration: 0.3,
        ease: 'power1.out',
        delay: 0.5,
        stagger: 0.02
      }
    );
  }, []);

  useEffect(() => {

      // 스크롤 트리거 애니메이션
      const items = gsap.utils.toArray('.history__item');
      // about 텍스트 클래스 순차적 추가
      const triggers = [];

      items.forEach((motion) => {
        const trigger = gsap.timeline({
          scrollTrigger: {
            trigger: motion,
            start: 'top 50%',
            scrub: 1,    
            //markers: true,
            //toggleClass: { targets: motion, className: 'active' },
            onEnter: () =>{
               motion.querySelector('dt').classList.add('active');
            },
            onLeaveBack: () => {
              motion.querySelector('dt').classList.remove('active');
            }
            // markers: true,
          }
        });
        triggers.push(trigger);
      });
      // 스크롤 트리거 애니메이션
      const cards = gsap.utils.toArray('.history__item-card');
      // about 텍스트 클래스 순차적 추가
      const triggers2 = [];

      cards.forEach((motion) => {
        const trigger = gsap.timeline({
          scrollTrigger: {
            trigger: motion,
            start: 'top 50%',
            scrub: 1,    
            //toggleClass: { targets: motion, className: 'active' },
            onEnter: () =>{
               motion.classList.add('active');
            },
            onLeaveBack: () => {
              motion.classList.remove('active');
            }
            // markers: true,
          }
        });
        triggers2.push(trigger);
      });
  
    }, []);

  return (
    <>
      <main className="history">
        <div className="com_center_wrap">
          <div className="history__txt">
            <p className="h en">
              <span className="char_text">History</span>
            </p>

            <div className="motion_txt h_st">
              <span>2015 부터 현재까지 작업한 프로젝트 입니다.</span>
            </div>
          </div>
          <dl className="motion_txt history__item">
            <dt>
              <p className="history__item-year">
                <span>2024.6 ~ 현재</span>
              </p>
              <div className="history__item-hash">#퍼블리싱 · 디자인 프리랜서</div>
            </dt>
            <dd>
              <div className="history__item-card">
                <p className="history__item-tit">2025</p>
                <ul>
                  <li>한국인터넷진흥원 웹 접근성</li>
                  <li>우수아이 브랜드 홈페이지 디자인 / 퍼블리싱</li>
                  <li>디지털 교과서 역사2 퍼블리싱</li>
                  <li>디지털 교과서 도덕2 퍼블리싱</li>
                  <li>코크플레이 반응형 / 앱 퍼블리싱</li>
                  <li>VETBLESS PC 관리 퍼블리싱</li>
                  <li>가구의 장인 인테리어 견적 플랫폼 퍼블리싱</li>
                  <li>위노스 가구 회사 홈페이지 퍼블리싱</li>
                  <li>특허유사도 Gadget 반응형 퍼블리싱</li>
                </ul>
              </div>
              <div className="history__item-card">
                <p className="history__item-tit">
                  <i></i>2024
                </p>
                <ul>
                  <li>
                    노아시스템즈 통합관제 시스템, 트래픽 관리 솔루션
                    <br /> Vue 프론트엔드 / 퍼블리싱
                  </li>
                  <li>이지수능 교육 관리 퍼블리싱</li>
                  <li>파랑새 축제 이벤트 플랫폼 퍼블리싱</li>
                  <li>온플 크리에이터 영상 콘텐츠 플랫폼 퍼블리싱</li>
                  <li>큐딩 모바일 쇼핑몰 퍼블리싱</li>
                  <li>퍼스트안과 병원 플랫폼 퍼블리싱</li>
                  <li>예일안과 병원 플랫폼 퍼블리싱</li>
                </ul>
              </div>
            </dd>
          </dl>
          <dl className="motion_txt history__item">
            <dt>
              <p className="history__item-year">2021~2024.5</p>
              <div className="history__item-hash">#Nuxt 프론트개발 #vue 퍼블리싱 #플랫폼 퍼블리싱</div>
            </dt>
            <dd>
              <div className="history__item-card">
                <p className="history__item-tit">
                  <i></i>2023~2024
                </p>
                <ul>
                  <li>[QR플랫폼] QR 모바일웹 Nuxt 프론트개발</li>
                  <li>[식자재플랫폼] 마트샵4.0 Vue 프론트개발</li>
                  <li>스크린 골프 Vue3 퍼블리싱</li>
                </ul>
              </div>
              <div className="history__item-card">
                <p className="history__item-tit">
                  <i></i>2022
                </p>
                <ul>
                  <li>[배달 플랫폼] 만나샵4.0 vue 퍼블리싱/프론트개발</li>
                  <li>[가맹점 플랫폼] 퍼블리싱</li>
                  <li>내부 관리자 리뉴얼 퍼블리싱</li>
                </ul>
              </div>
              <div className="history__item-card">
                <p className="history__item-tit">
                  <i></i>2021
                </p>
                <ul>
                  <li>배달 플랫폼 ‘만나플래닛’ 입사</li>

                  <li>[배달플랫폼] 가맹점 POS 웹뷰 퍼블리싱</li>
                  <li>[배달플랫폼] 가맹점 POS 웹뷰 PHP 프론트개발</li>
                </ul>
              </div>
            </dd>
          </dl>
          <dl className="motion_txt history__item">
            <dt>
              <p className="history__item-year">2018~2020</p>
              <div className="history__item-hash">#에이전시 퍼블리싱 </div>
            </dt>
            <dd>
              <div className="history__item-card">
                <p className="history__item-tit">
                  <i></i>2020
                </p>
                <ul>
                  <li>에스제이엔 반응형 홈페이지</li>
                  <li>세무법인 다솔 반응형 홈페이지</li>
                  <li>심평이혼 반응형 홈페이지</li>
                  <li>누리실버케어 반응형 홈페이지</li>
                  <li>더공감 반응형 홈페이지</li>
                  <li>서영산업 반응형 홈페이지</li>
                  <li>더케이커뮤니케이션</li>
                  <li>대영케이블 반응형 홈페이지</li>
                  <li>한제플래닛 반응형 홈페이지</li>
                  <li>모아맵 – 지도 맛집 플랫폼</li>
                  <li>오마이 양대창 프랜차이즈</li>
                  <li>여주도자기 축제</li>
                  <li>프리퍼커피 쇼핑몰</li>
                  <li>이건그린텍 반응형 홈페이지</li>
                  <li>미스터보삼 프랜차이즈</li>
                  <li>인천광역시청소년자립지원관</li>
                  <li>신천할매떡볶이 프랜차이즈</li>
                  <li>스쿨푸드 프랜차이즈</li>
                  <li>애드밀 광고 문의 사이트</li>
                  <li>신한벽지 브랜드 홈페이지</li>
                </ul>
              </div>
              <div className="history__item-card">
                <p className="history__item-tit">
                  <i></i>2018~2019
                </p>
                <ul>
                  <li>임금님 이천쌀 반응형 홈페이지</li>
                  <li>로맨틱 F&B 반응형 홈페이지</li>
                  <li>대영케이블 쇼핑몰 반응형 홈페이지</li>
                  <li>버즈플라이 반응형 홈페이지</li>
                  <li>티오티 반응형 홈페이지</li>
                  <li>에이텍씨앤 반응형 홈페이지</li>
                  <li>아카</li>
                  <li>체인 로지스 반응형 홈페이지</li>
                  <li>아카공인 다이렉트</li>
                  <li>디지털존 한국암재활협회</li>
                  <li>고성</li>
                  <li>홀로홀릭</li>
                  <li>인천 노인중구</li>
                  <li>가나통운</li>
                  <li>여주도자기</li>
                  <li>일본유랑기 (가비아)</li>
                  <li>일본유랑기 임시테스트서버 (Cafe24) NJY</li>
                  <li>생명공학</li>
                  <li>브레드 가든</li>
                  <li>센트로렌트카</li>
                  <li>에스제이엔</li>
                  {/*<li>세무법인 다솔</li>
                <li>심평이혼</li>
                <li>누리실버케어</li>
                <li>더공감</li>
                <li>서영산업</li>
                <li>더케이커뮤니케이션</li>
                <li>대영케이블</li>
                <li>한제플래닛</li>
                <li>모아맵 - 퍼블</li>
                <li>오마이 양대창</li>
                <li>크레파</li>
                <li>여주도자기 2000</li>
                <li>프리퍼커피</li>
                <li>이건그린텍</li>
                <li>미스터보쌈</li>
                <li>인천광역시청소년자립지원관</li>*/}
                  <li>신천할매떡볶이</li>
                  <li>스쿨푸드</li>
                  <li>야옹아멍멍해봐 (프랜차이즈)</li>
                  <li>애드밀</li>
                  {/*<li>신한벽지</li>
                <li>꿈많은청년들</li>
                <li>삼마</li>
                <li>체인 로지스</li> <li>아카</li>
                <li>공인다이렉트</li>
                <li>디지털존</li>
                <li>한국암재활협회</li>
                <li>고성</li>
                <li>홀로홀릭</li>
                <li>인천 노인중구</li>
                <li>가나통운</li>
                <li>여주도자기</li>*/}
                  {/*<li>NJY 생명공학</li>
                <li>브레드 가든</li>
                <li>여주도자기</li>
                <li>센트로렌트카</li>
                <li>cn테크-m</li>
                <li>에프엔아이에스</li>
                <li>국제무역</li>
                <li>정신건강박람회</li>
                <li>명품리무진</li>
                <li>에이치엔케이</li>
                <li>서울시산학연협력포럼</li>
                <li>코리아자동밸브</li>
                <li>캡쳐코리아</li>
                <li>한국자활연수원</li>
                <li>유아이엘</li>
                <li>d3d</li>
                <li>걸작떡볶이</li>
                <li>아일랜드캐슬</li>
                <li>기쁨병원</li>
                <li>삼점영</li>
                <li>크레켄 테스트</li>
                <li>크레켄 실서버</li>
                <li>뚝심</li>
                <li>컴팩스</li>
                <li>호현에프앤씨</li>
                <li>겔랑</li>
                <li>케이엘피</li>
                <li>한빛회</li>*/}
                </ul>
              </div>
            </dd>
          </dl>
          <dl className="motion_txt history__item">
            <dt>
              <p className="history__item-year">2015~2017</p>
              <div className="history__item-hash">#에이전시 퍼블리싱 </div>
            </dt>
            <dd>
              <div className="history__item-card">
                <p className="history__item-tit">
                  <i></i>2017
                </p>
                <ul>
                  <li>
                    굿레이트 반응형웹 -p2p 금융
                    <br />
                    (ICT K어워드코리아 디지털컨텐츠솔루션 은상)
                  </li>
                  <li> 세이브존문화센터 반응형웹</li>
                  <li>sh홀딩스</li>
                  <li>창성</li>
                  <li>병원신생아간호사회-m</li>
                  <li>쿠쿠</li>
                  <li>론게이트-p2p</li>
                  <li>더랜딩-p2p</li>
                  <li>좋은미디어</li>
                  <li>오토엘루</li>
                  <li>알리딘카</li>
                  {/*<li>엘큐치 중국어</li>
                <li>삼성유전체연구소</li>
                <li>트렌스펀</li>
                <li>콜만오가닉 (솔루션)</li>
                <li>에타민 (솔루션)</li>
                <li>구슬함박</li>
                <li>유로자전거</li>
                <li>진컴퍼니</li>
                <li>다빈치 스튜디오</li>
                <li>에스펀딩-p2p</li>
                <li>어메이징펀드-p2p</li>
                <li>씨와이 통번역</li>
                <li>vr 플레이</li>
                <li>영풀</li>
                <li>TTGS</li>
                <li>타이탄-p2p</li>
                <li>해밀가-p2p</li>
                <li>마르 필라테스</li>
                <li>원탑 속기사무소</li>
                <li>L&amp;P</li>
                <li>해담마을</li>
                <li>폴리텍 아이엔씨</li>
                <li>해듀컴퍼니</li>
                <li>백두농산</li>
                <li>이상엠엔씨</li>
                <li>차앤박피부과</li>
                <li>성서크레인</li>
                <li>세이브존</li>*/}
                  <li>티알아이코리아</li>
                  <li>속기닷컴</li>
                  <li>시너젠</li>
                  <li>더늦기전에</li>
                  <li>이오플로우</li>
                  <li>운악산</li>
                  <li>프로팩코리아</li>
                  <li>켐텍</li>
                </ul>
              </div>
              <div className="history__item-card">
                <p className="history__item-tit">
                  <i></i>2016
                </p>
                <ul>
                  <li>동양북스 pc/m 리뉴얼</li>
                  <li>코지마 쇼핑몰 반응형웹 </li>
                  <li>레이캅 방응웹</li>
                  <li>국립청소년디딤센터 프로젝트</li> <li>제나비</li>
                  <li>소중한식탁</li>
                  <li>열린필하모니</li>
                  <li>아이벙커</li>
                  {/*<li>뽕짝</li>
                <li>서용건설</li>
                <li>유원인더스트리</li>
                <li>레몬키친</li>
                <li>데코르</li>
                <li>교수곱창</li>
                <li>리스브릿지</li>
                <li>네모</li>
                <li>장사의달인</li>
                <li>충남상사</li>
                <li>성균관대</li>
                <li>교수곱창</li>
                <li>제이에스 이엔지</li>
                <li>세인세무법인</li>
                <li>신화전자</li>
                <li>언니다(솔루션)</li>
                <li>니즈블로그(솔루션)</li>
                <li>블랙스완</li>
                <li>국립환경과학원</li>
                <li>카페다</li>
                <li>디딤센터</li>
                <li>굿레이트-p2p</li>
                <li>진프린트</li>
                <li>두진</li>
                <li>거제도</li>*/}
                  <li>트렌스와우</li>
                  <li>알파홀딩스</li>
                  <li>3D쿡</li>
                  <li>마이리틀 프렌드</li>
                  <li>포르테나인</li>
                  <li>cn테크</li>
                </ul>
              </div>
              <div className="history__item-card">
                <p className="history__item-tit">
                  <i></i>2015
                </p>
                <ul>
                  <li>
                    - 소중한 식탁
                    <br />
                    (ICT K어워드코리아  e-커머스 부분 대상)
                  </li>
                  <li> SBI저축은행 웹접근성 인증마크 획득 </li>
                  <li>(주)나이스신용정보 웹사이트</li>
                  <li>한진중공업 분양사이트</li>
                  <li>산림조합 중앙회 푸른장터 모바일웹</li>
                  <li>경기도청소년 수련원 프로젝트 (웹접근성마크 획득)</li>
                  <li>(주)힘펠 프로젝트</li>
                  <li>웹에이전시 매스티지 입사 퍼블리싱팀 파트장 </li>
                </ul>
              </div>
            </dd>
          </dl>
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

export default History;
