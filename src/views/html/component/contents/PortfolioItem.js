import React, { useState } from 'react';

import '../../assets/scss/component/portfolio.scss';
import ModalDetail from './ModalDetail';

function PortfolioItem({ item = {} }) {


	const [modalDetail, setModalDetail] = useState(false);
	const handleOpenDetail = (item) => {
		//if (item.descDetail) {
			setModalDetail(true);
		//} else if (item.url) {
		//	window.open(item.url, '_blank');
		//}
	};
	const handleCloseDetail = () => {
		console.log('asdf')
		setModalDetail(false)
	};
	const imageUrl = require(`../../assets/img/${item.thumb}`);
	return (

		<>
			<div className={`portfolio__item`} >
				<div className="portfolio__thumb"  onClick={()=> handleOpenDetail(item)}>
					<img src={imageUrl} alt="" />
				</div>
				<div className="portfolio__info">
					<p className="portfolio__info-tit">{item.title} </p>

					<dl className="portfolio__info-desc">
						<dd>{item.role}</dd>
					</dl>

				</div>
				<div className="portfolio__hover"  onClick={()=> handleOpenDetail(item)} >
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
						<dt>담당역할:</dt>
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
						<dt></dt>
						<dd className="flex_row">
							<button className="link pf_btn m point oval"  onClick={()=> handleOpenDetail(item)}>
								<svg className="icon_link" xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
									<path d="M7.07144 9.75001C7.39353 10.1806 7.80446 10.5369 8.27635 10.7947C8.74825 11.0525 9.27007 11.2058 9.80643 11.2443C10.3428 11.2827 10.8811 11.2053 11.3849 11.0173C11.8888 10.8294 12.3463 10.5353 12.7264 10.155L14.9764 7.90501C15.6595 7.19775 16.0375 6.25049 16.029 5.26725C16.0204 4.28401 15.626 3.34347 14.9308 2.64819C14.2355 1.9529 13.2949 1.55852 12.3117 1.54998C11.3285 1.54143 10.3812 1.91941 9.67394 2.6025L8.38394 3.885M10.0714 8.25C9.74935 7.81941 9.33842 7.46312 8.86653 7.2053C8.39463 6.94748 7.87281 6.79417 7.33645 6.75575C6.80009 6.71734 6.26175 6.79473 5.75793 6.98267C5.25411 7.17061 4.7966 7.4647 4.41644 7.845L2.16644 10.095C1.48335 10.8023 1.10537 11.7495 1.11391 12.7328C1.12246 13.716 1.51684 14.6565 2.21212 15.3518C2.9074 16.0471 3.84795 16.4415 4.83118 16.45C5.81442 16.4586 6.76168 16.0806 7.46894 15.3975L8.75144 14.115" stroke="#58A6FF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
									<script xmlns="" /></svg>
								상세보기
							</button>
							{/*{item.url2 && (
								<Link className="link" to={item.url2} target="_blank">
									<svg className="icon_link" xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
										<path d="M7.07144 9.75001C7.39353 10.1806 7.80446 10.5369 8.27635 10.7947C8.74825 11.0525 9.27007 11.2058 9.80643 11.2443C10.3428 11.2827 10.8811 11.2053 11.3849 11.0173C11.8888 10.8294 12.3463 10.5353 12.7264 10.155L14.9764 7.90501C15.6595 7.19775 16.0375 6.25049 16.029 5.26725C16.0204 4.28401 15.626 3.34347 14.9308 2.64819C14.2355 1.9529 13.2949 1.55852 12.3117 1.54998C11.3285 1.54143 10.3812 1.91941 9.67394 2.6025L8.38394 3.885M10.0714 8.25C9.74935 7.81941 9.33842 7.46312 8.86653 7.2053C8.39463 6.94748 7.87281 6.79417 7.33645 6.75575C6.80009 6.71734 6.26175 6.79473 5.75793 6.98267C5.25411 7.17061 4.7966 7.4647 4.41644 7.845L2.16644 10.095C1.48335 10.8023 1.10537 11.7495 1.11391 12.7328C1.12246 13.716 1.51684 14.6565 2.21212 15.3518C2.9074 16.0471 3.84795 16.4415 4.83118 16.45C5.81442 16.4586 6.76168 16.0806 7.46894 15.3975L8.75144 14.115" stroke="#58A6FF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
										<script xmlns="" /></svg> 프론트엔드
								</Link>
							)}*/}
						</dd>
					</dl>
				</div>
			</div>

			{/*{item.descDetail ? (*/}
				<ModalDetail item={item} open={modalDetail} close={handleCloseDetail} />
				
			
		</>
	);
}

export default PortfolioItem;
