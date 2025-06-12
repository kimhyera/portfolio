/* eslint-disable */
import React, { useEffect } from "react";

function ModalDetail({ item = {}, open, close }) {

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
					<div className={`pop_container`}>
						<div className="popup_header">
							<button type="button" className="btn_close" onClick={close}>
								<i className="svg_icon icon_close white"></i>
							</button>
						</div>
						<div className="content_container">
							<div className="popup_top">

								<div className="tit">

									{item.titleDetail ? (

										item.titleDetail.map((line, idx) => (
											<p key={idx}>{line} </p>
										))
									) : item.title}
								</div>
								<div className="desc">


									{item.descDetail ? (

										item.titleDetail.map((line, idx) => (
											<p key={idx}>{line} </p>
										))
									) : item.desc}
								</div>
								<a href={item.url} target="_blank" className="pf_btn white l line oval">사이트 바로가기 <i className="icon_chevron_right"></i></a>


							</div>
							<div className="detail_img">

								<img src={imageUrl} alt="" className="" />
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
											<td>		<div className="flex_row">
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
											</div>
											</td>
											<th>디바이스</th>
											<td>{item.디바이스}</td>
										</tr>
									</tbody>
								</table>

							</div>

							<div className="popup_bottom">
								<button className="pf_btn point l oval  " onClick={close}>확인</button>
							</div>

						</div>
					</div>
					<i className="bg_close" ></i>
				</section>
			) : null}
		</>
	);
}

export default ModalDetail;