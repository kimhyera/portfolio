
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
/*css*/
import '../../assets/scss/page/main.scss';
//component
//img


const AnimatedBox = () => {
  const boxRef = useRef(null);

  useEffect(() => {
    gsap.to(boxRef.current, { x: 100, duration: 1, ease: "power2.out" });
  }, []);

  return (
    <div ref={boxRef} style={{ width: 100, height: 100, background: "red" }}>
      Box
    </div>
  );
};

const ScrollAnimation = () => {
  const boxRef2 = useRef(null);

  useEffect(() => {
    gsap.to(boxRef2.current, {
      x: 800,
      duration: 2,
      scrollTrigger: {
        trigger: boxRef2.current,
        start: "top 20%", 
        end: "top 30%",
        scrub: true,
      },
    });
  }, []);

  return (
    <div
      ref={boxRef2}
      style={{
        width: 100,
        height: 100,
        background: "blue",
        marginTop: "100vh",
      }}
    >
      Scroll Me
    </div>
  );
};

const TimelineAnimation = () => {
  useEffect(() => {
    const tl = gsap.timeline();
    tl.to(".animated-box", { x: 100, duration: 1 })
      .to(".animated-box", { y: 100, duration: 1 })
      .to(".animated-box", { rotation: 360, duration: 1 });
  }, []);

  return (
    <div
      className="animated-box"
      style={{
        width: 100,
        height: 100,
        background: "green",
      }}
    >
      Timeline
    </div>
  );
};
const AnimatedSection = () => {
  useEffect(() => {
    const tl = gsap.timeline();

    // 배경 애니메이션
    tl.fromTo(
      ".start_bg",
      {
        top: "0",
        ease: "expo.inOut",
      },
      {
        top: "-100%",
        ease: "expo.inOut",
        duration: 1,
      }
    )

    // 로고 애니메이션
    .from(".logo", {
      opacity: 0,
      y: 30,
      ease: "expo.out",
      duration: 1,
      delay: 0.5,
    })

    // 버튼 네비게이션 애니메이션
    .from(".btn_nav", {
      opacity: 0,
      x: 100,
      duration: 1,
      delay: 0.5,
    })

    // 필터 리스트 애니메이션 (스태거)
    .staggerFrom(
      ".filter_list li",
      0.8,
      {
        opacity: 0,
        x: -200,
        delay: 0.5,
      },
      0.2
    )

    // 제목 애니메이션
    .from(".main_sec_tit", {
      opacity: 0,
      x: -200,
      duration: 0.8,
      delay: 0.2,
    })

    // 오른쪽 콘텐츠 애니메이션
    .from(".right_con", {
      opacity: 0,
      y: 30,
      duration: 1,
      delay: 0.8,
    });
  }, []);

  return (
    <div>
      <div className="start_bg" style={{ background: "red", height: "100vh" }}>
        Start Background
      </div>
      <div className="logo" style={{ opacity: 0 }}>
        Logo
      </div>
      <nav className="btn_nav" style={{ opacity: 0 }}>
        Navigation Buttons
      </nav>
      <ul className="filter_list">
        <li>Item 1</li>
        <li>Item 2</li>
        <li>Item 3</li>
      </ul>
      <div className="main_sec_tit" style={{ opacity: 0 }}>
        Section Title
      </div>
      <div className="right_con" style={{ opacity: 0 }}>
        Right Content
      </div>
    </div>
  );
};


function Portfolio() {
  return (
    <>
      <main className="p_main"   style={{
   
        height: 5000,
      }}>
				<AnimatedBox/>
				<ScrollAnimation/>
				<TimelineAnimation/>
				<AnimatedSection/>
        {/*  포트폴리오 */}
        <section className="main_cont_sec">
          <div className="pf_center_wrap">
            <div className="pf_sec_tit__wrap">
              <h2 className="pf_sec_tit">
                <i className="png_icon icon_ai"></i>
                포트폴리오
              </h2>
            </div>
						
          </div>
        </section>
      </main>    
    </>
  );
}

export default Portfolio;
