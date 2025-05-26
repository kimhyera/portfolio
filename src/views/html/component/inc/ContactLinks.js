import React from 'react'
import { Link } from 'react-router-dom';

function ContactLinks() {
  return (
    <>
        <div className="content_links">
          <Link to="mailto:khr1828@gmail.com">
             <i className="icon_gmail"></i>
          </Link>
          <Link to="https://github.com/kimhyera" target="_blank">
             <i className="icon_github"></i>
          </Link>
          <Link to="https://enshrined-cone-70b.notion.site/c37bdd09de3043909972c701a71be573" target="_blank">
             <i className="icon_notion"></i>
          </Link>
          <Link to="tel:01065791828" className="head__about-tel">
             <i className="icon_phone"></i>
          </Link>
        </div>
    </>
  )
}

export default ContactLinks