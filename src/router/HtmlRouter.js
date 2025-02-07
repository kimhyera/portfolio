import React from 'react';
import {BrowserRouter, Route, Routes, Navigate} from 'react-router-dom';
//css
import '../views/html/assets/scss/styles.scss';
//components
import Header from '../views/html/component/inc/Header';
//pages
import Main from '../views/html/page/main/Main';
import About from '../views/html/page/main/About';
import Portfolio from '../views/html/page/main/Portfolio';

function AppRouter() {
  const routes = [
    {path: '/', element: <Navigate to="/Main" />},
    {path: '/Main', element: <Main />},
    {path: '/About', element: <About />},
    {path: '/Portfolio', element: <Portfolio />}
  ];

  return (
    <Routes>
      {routes.map((route, index) => (
        <Route key={index} path={route.path} element={route.element} />
      ))}
    </Routes>
  );
}

function HtmlRouter() {
  // 로컬 개발 환경에서는 basename 설정을 하지 않음
  const basename = process.env.NODE_ENV === 'production' ? '/portfolio' : '';
  return (
    <BrowserRouter basename={basename}>      {/* 환경에 따라 basename 설정 */}
      <div className="main_container pf_center_wrap">
        <Header />
        <AppRouter />
      </div>
    </BrowserRouter>
  );
}

export default HtmlRouter;
