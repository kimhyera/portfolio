import React, {useState} from 'react';
import {NavLink} from 'react-router-dom';

function Header() {
  //햄버거 메뉴
  const [barMenu, setBarMenu] = useState(false);
  //햄버거 메뉴
  const toggleBarMenu = () => {
    setBarMenu((current) => !current);
  };
  return (
    <>
      <header className="head">
        <div className="head__about">
          <p className="head__about-txt">
            🏆 퍼블리셔 10년 차 김혜라 입니다! <br />
            300여건의 프로젝트 경험과 노하우
          </p>
          <div className="head__about-links"> 🔗email 🔗Github 🔗Notion</div>
          <a href="tel:01065791828" className="head__about-tel">
             Tel: 010-6579-1828
          </a>
        </div>

<nav className={`nav  ${barMenu ? 'active' : ''}`}>
	<NavLink className="item" activeclassname="active" to="/About">
		About
	</NavLink>
	<NavLink className="item" activeclassname="active" to="/Experience">
		Experience
	</NavLink>
	<NavLink className="item" activeclassname="active" to="/Portfolio">
		Portfolio
	</NavLink>
</nav>
        <button className={`nav__open ${barMenu ? 'active' : ''}`} onClick={toggleBarMenu}>
          <span className="item"></span>
          <span className="item"></span>
          <span className="item"></span>
        </button>
      </header>
    </>
  );
}
export default Header;
