import React from 'react'
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <>
    <footer className='footer'>
        <section className='footer__sns_wrap'>
          <Link className='footer__sns' to=""><i className='svg_icon icon_youtube'>유튜브</i></Link>
          <Link className='footer__sns' to=""><i className='svg_icon icon_insta'>인스타그램</i></Link>
          <Link className='footer__sns' to=""><i className='svg_icon icon_kakao'>카카오톡</i></Link>
        </section>

		<p className='copy'>Copyright. All Rights Reserved</p>
    </footer>
    </>
  )
}

export default Footer