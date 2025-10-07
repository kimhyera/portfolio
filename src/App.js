import React, {useEffect, useRef, lazy, Suspense} from 'react';

import Lenis from '@studio-freight/lenis';

const HtmlRouter = lazy(() => import('./router/HtmlRouter.js'));

function App() {
  const lenis = useRef(null);

  useEffect(() => {
    // Initialize Lenis
    lenis.current = new Lenis({
      duration: 0.3, // 스크롤 애니메이션 지속 시간 (초)
      easing: (t) => 1 - Math.pow(1 - t, 3), // 부드러운 감속을 위한 easing 함수
      lerp: 0.05, // 선형 보간 강도 (0과 1 사이의 값)
      wheelMultiplier: 4, // 휠 스크롤 속도 배율 (기본값: 1)
      touchMultiplier: 4, // 터치 스크롤 속도 배율 (기본값: 1)
      smooth: true, // 스무스 스크롤 활성화
      smoothTouch: true // 터치 장치에서 스무스 스크롤 활성화
    });

    const animate = (time) => {
      lenis.current.raf(time);
      requestAnimationFrame(animate);
    };

    requestAnimationFrame(animate);

    // Cleanup on unmount
    return () => {
      lenis.current.destroy();
    };
  }, []);

  let routerComponent;
  routerComponent = <HtmlRouter />;
  return <Suspense>{routerComponent}</Suspense>;
}

export default App;
