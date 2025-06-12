/* eslint-disable */
import React, { useEffect } from "react";

function ModalDetail({ open, close, item = {} }) {
	//const { open, close } = props;
	useEffect(() => {
		if (open) {
			document.body.style.overflow = "hidden";
			return () => {
				document.body.style.overflow = "";
			}
		}
	});


	const imageUrl = require(`../../assets/img/${item.thumbDetail || item.thumb}`);
	return (
		<>
			{open ? (
				<section className={`pf_popup popup_detail`}>
					<div className={`pop_container content_container`}>
						<button type="button" className="btn_close svg_icon icon_close white" onClick={close}></button>
						<div className="popup_top">

							<div className="tit">
					{item.titleDetail.map((line, idx) => (
									<p key={idx}>{line} </p>
								))}
								</div>
							<p className="desc">

								{item.descDetail.map((line, idx) => (
									<p key={idx}>{line}</p>
								))}
							</p>
							<a href={item.url} target="_blank" className="pf_btn white l line oval">사이트 바로가기 <i className="icon_chevron_right"></i></a>

              
						</div>
						<div className="detail_img">
							
							<img src={imageUrl} alt="" className=""/>
						</div>
						
						<div className="popup_body">

							<table className="com_board_list">
								<colgroup>
									<col width="20%" />
									<col width="auto" />
									<col width="20%" />
									<col width="auto" />
								</colgroup>
								<tbody>
									<tr>
										<th>프로젝트 기간</th>
										<td>{item.date}</td>
										<th>담당 역할</th>
										<td>{item.role}</td>
									</tr>
									<tr>
										<th>기술스택</th>
										<td>
											
								{item.stack.map((line, idx) => (
									<span key={idx}>{line} </span>
								))}
										</td>
										<th>디바이스</th>
										<td>{item.디바이스}</td>
									</tr>
								</tbody>
							</table>

						</div>

						<div className="pf_btn_wrap center bottom">
							<button className="pf_btn point l oval ">확인</button>
						</div>

					</div>
					<i className="bg_close" onClick={close}></i>
				</section>
			) : null}
		</>
	);
}

export default ModalDetail;