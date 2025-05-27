import React from 'react';
//import imageUrl from '../../assets/img/manashop.jpg';
import '../../assets/scss/component/portfolio.scss';
import { Link } from 'react-router-dom';

function PortfolioItem({ item = {} }) {
	const imageUrl = require(`../../assets/img/${item.thumb}`);
	return (
		<div className={`portfolio__item`}>
			<Link className="portfolio__thumb" to={item.url} target="_blank">
				<img src={imageUrl} alt="" />
			</Link>
			<div className="portfolio__info">
				<p className="portfolio__info-tit">{item.title} </p>

				<dl className="portfolio__info-desc">
					<dd>{item.role}</dd>
				</dl>

			</div>
			<div className="portfolio__hover">
					<p className="tit">{item.title} </p>
					<dl className="desc">
						<dt>기간:</dt>
						<dd>{item.date} </dd>
					</dl>
					<dl className="desc">
						<dt>설명:</dt>
						<dd>{item.desc}</dd>
					</dl>
					<dl className="desc">
						<dt>역활:</dt>
						<dd>{item.role}</dd>
					</dl>
					<dl className="desc skills">
						<dt>기술스택:</dt>
						<dd className="flex_row">
							<span className="skil">

								{item.stack[0] === 'react' && <><i className="react dote"></i>{item.stack[0]}</>}
								{item.stack[0] === 'vue' && <><i className="vue dote"></i>{item.stack[0]}</>}
								{item.stack[0] === 'php' && <><i className="php dote"></i>{item.stack[0]}</>}
							</span>
							{item.stack[1] && (
								<span className="skil">
									<i className="scss dote"></i> {item.stack[1]}
								</span>
							)}
						</dd>
					</dl>
					<dl className="desc links">
						<dt>배포링크:</dt>
						<dd className="flex_row">
							<Link className="link" to={item.url} target="_blank">
								<i className="icon icon_link"></i>
								퍼블리싱
							</Link>
							{item.url2 && (
								<Link className="link" to={item.url2} target="_blank">
									<i className="icon icon_link"></i> 프론트엔드
								</Link>
							)}
						</dd>
					</dl>
			</div>
		</div>
	);
}

export default PortfolioItem;
