import React, { useEffect, useRef, lazy, Suspense } from 'react';
import { LenisContext } from './context/LenisContext';
import Lenis from '@studio-freight/lenis';

const HtmlRouter = lazy(() => import('./router/HtmlRouter.js'));

function App() {
  const lenis = useRef(null);

  useEffect(() => {
    // Initialize Lenis
    lenis.current = new Lenis({
      duration: 0.3, // 스크롤 애니메이션 지속 시간 (초)
      easing: (t) => 1 - Math.pow(1 - t, 3), // 부드러운 감속을 위한 easing 함수
      lerp: 0.1, // 선형 보간 강도 (0과 1 사이의 값)
      wheelMultiplier: 5, // 휠 스크롤 속도 배율 (기본값: 1)
      touchMultiplier: 5, // 터치 스크롤 속도 배율 (기본값: 1)
      smooth: true, // 스무스 스크롤 활성화
      smoothTouch: true // 터치 장치에서 스무스 스크롤 활성화
    });

    const raf = (time) => {
      lenis.current?.raf(time);
      requestAnimationFrame(raf);
    };
    requestAnimationFrame(raf);

    return () => lenis.current?.destroy();
  }, []);


  return (
    <LenisContext.Provider value={lenis}>
      <Suspense>
        <HtmlRouter />
      </Suspense>
    </LenisContext.Provider>
  );
}

export default App;
