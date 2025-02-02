import React from 'react'
import { Link } from 'react-router-dom';

function ContentsItem({type,index = null, link = "/html/Contents/Detail"}) {
  return (
    <div className={`com_contents_item ${type}`}>
      <div className='thumb'>
        <Link to={link}>
        img
        </Link>
        <button className='btn_extend'></button>
        <label className='com_btn_like type_circle'>
          <input type="checkbox" />
          <p className='button'>
            <i className='svg_icon icon_like'></i>
          </p>
        </label>
      </div>
			<div className="txt_area">
				{
					index && (
						<span className="count">{index}</span>
					)
				}
				<div className="tit_desc_wrap">
					<p className='tit'>퍼스트 안과 </p>
					<p className='desc'>병원 사이트</p>
				 </div>
			</div>
      <div className='info'>
        <div className="com_star_display svg_icon icon_star off">
          <div className="svg_icon icon_star on" style={{width:"90%"}}></div>
        </div>
        <span className='badge_cate'>javascript</span>
        <span className='badge_state'>php</span>
        <span className='badge_free'>scss</span>
      </div>
    </div>
  )
}

export default ContentsItem