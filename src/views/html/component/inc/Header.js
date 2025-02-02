import React,{useState} from 'react'
import { Link, NavLink } from 'react-router-dom';

/*이미지*/
//component

function Header() {

  //햄버거 메뉴
  const [barMenu, setBarMenu] = useState(false); 

  //햄버거 메뉴
  const toggleBarMenu = () =>{
  setBarMenu(current => !current);
  }
  return (
    <>
    <header className="head">
      <div className='com_center_wrap head__inner'>
        <Link to='/html/Main' className='head__logo'>
       logo
        </Link>
        <RenderNav 
        />

		<button className='head__bar svg_icon icon_bar' onClick={toggleBarMenu}>메뉴</button> 
      </div>
    </header>
    {/*햄버거메뉴*/}
    <section className={`head__menu_sec ${barMenu ? 'active':''}`}>
      <div className='head__menu_sec__inner'>
        <article className='head__m'>
          <div className='head__m_ribbon'>
            <button type='button' className='svg_icon icon_close' onClick={()=>setBarMenu(false)}></button>
          </div>
					<RenderNav 
        />
        </article>
      </div>
    </section>
    </>
  )
}
function RenderNav() {

	//테블릿, 모바일 화면
	//const [isMobile, setIsMobile] = useState(window.innerWidth <= 1024);

  //useEffect(() => {
  //  const handleResize = () => {
  //    setIsMobile(window.innerWidth <= 1024);
  //  };
  //  window.addEventListener('resize', handleResize);
  //  return () => {
  //    window.removeEventListener('resize', handleResize);
  //  };
  //}, []);

    return(
      <>
    
							<nav className='head__nav_wrap'>
								<NavLink className="head__nav" activeclassname="active" to='/About'>
								About
								</NavLink>
								<NavLink className="head__nav" activeclassname="active" to="/Experience">
						
									Experience
								</NavLink>
								<NavLink className="head__nav" activeclassname="active" to="/Portfolio">
								Portfolio
								</NavLink>
							</nav>
					
					</>
    )
  
}
export default Header