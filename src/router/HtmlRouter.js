import React from 'react';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
//css
import '../views/html/assets/scss/styles.scss';
//components
import Header from '../views/html/component/inc/Header';
//pages
import Main from '../views/html/page/main/Main';
import About from '../views/html/page/main/About';
import Work from '../views/html/page/main/Work';
import History from '../views/html/page/main/History';
import WorkDetail from '../views/html/page/main/WorkDetail';
import DietDiary from '../views/html/page/main/DietDiary';
import Seo from '../seo/Seo';


function AppRouter() {
  const routes = [
    {path: '/', element: <Main />},
    {path: '/Main', element: <Main />},
    {path: '/About', element: <About />},
    {path: '/History', element: <History />},
    {path: '/Work', element: <Work />},
    {path: '/WorkDetail', element: <WorkDetail />},
    {path: '/DietDiary', element: <DietDiary />},
  ];

  return (
    <Routes>
      {routes.map((route, index) => (
        <Route
          key={index}
          path={route.path}
          element={route.path === '/' || route.path === '/Main' || route.path === '/About' ? route.element : <><Header />{route.element}</>}
        />
      ))}
    </Routes>
  );
}

function HtmlRouter() {
  // 개발 서버와 배포 환경 모두 CRA의 공개 경로를 기준으로 라우팅합니다.
  const basename = new URL(process.env.PUBLIC_URL || '/', window.location.origin).pathname.replace(/\/$/, '');
  return (
    <BrowserRouter basename={basename}>      {/* 환경에 따라 basename 설정 */}
   
        <Seo />
        <AppRouter />
    </BrowserRouter>
  );
}

export default HtmlRouter;
