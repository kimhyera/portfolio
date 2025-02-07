import React from 'react';
import Thumb01 from '../../assets/img/manashop.jpg';
import '../../assets/scss/component/portfolio.scss';
import {Link} from 'react-router-dom';

function PortfolioItem({items = []}) {
  return (
    <div className={`portfolio__item`}>
      <Link className="portfolio__thumb" to="https://634fa63d3236be6714353078--willowy-parfait-db4af9.netlify.app/path" target="_blank">
        <img src={Thumb01} alt="" />
      </Link>
      <div className="portfolio__info">
        <p className="portfolio__info-tit">배달플랫폼 만나샵 </p>
        <dl className="portfolio__info-desc">
          <dt>기간:</dt>
          <dd>2023.10 ~ 2024.01</dd>
        </dl>
        <dl className="portfolio__info-desc">
          <dt>설명:</dt>
          <dd>고객 배달 플랫폼 (배달음식)</dd>
        </dl>
        <dl className="portfolio__info-desc">
          <dt>역활:</dt>
          <dd>모바일 퍼블리싱, Vue 프론트엔드 제작</dd>
        </dl>
        <dl className="portfolio__info-desc skills">
          <dt>기술스택:</dt>
          <dd className="flex_row">
            <span className="skil">
              <i className="vue dote"></i> vue
            </span>
            <span className="skil">
              <i className="scss dote"></i> scss
            </span>
          </dd>
        </dl>
        <dl className="portfolio__info-desc links">
          <dt>배포링크:</dt>
          <dd className="flex_row">
            <Link className="link" to="https://634fa63d3236be6714353078--willowy-parfait-db4af9.netlify.app/path" target="_blank">
              <i className="icon icon_link"></i>
              퍼블리싱
            </Link>
            <Link className="link" to="https://smartshop.mannashop.co.kr/shop/mns/" target="_blank">
              <i className="icon icon_link"></i> 프론트엔드
            </Link>
          </dd>
        </dl>
      </div>
    </div>
  );
}

export default PortfolioItem;
