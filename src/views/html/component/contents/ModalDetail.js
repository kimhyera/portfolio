/* eslint-disable */
import React, { useRef, useEffect } from 'react';

//css
import style from './popup.module.scss';

function ModalDetail({ item = {}, open, close }) {
  //const lenis = useLenis();
  const popupRef = useRef(null);

  useEffect(() => {
    const html = document.documentElement;
    if (open) {
      //lenis.current?.stop();
      html.classList.add('scroll_lock');
      // popup 내부 스크롤
      popupRef.current.addEventListener('wheel', (e) => e.stopPropagation()); //이벤트가 상위 DOM(부모)로 전파되지 않도록 막는 메서드
      popupRef.current.addEventListener('touchmove', (e) => e.stopPropagation());
    } else {
      //lenis.current?.start();
      html.classList.remove('scroll_lock');
    }
  }, [open]);
  if (!open) return null;
  const imageUrl = require(`../../assets/img/${item.thumbDetail || item.thumb}`);
  return (
    <>
      <section className={style.popup}>
        <div className={style.popup__container}>
          <div className={style.popup__header}>
            <button type="button" className={style['popup__header-btn']} onClick={close}>
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M19 1L1.71987 19M1 1L18.2801 19" stroke="white" stroke-width="2" stroke-linecap="round" />
              </svg>
            </button>
          </div>
          <div className={style.popup__content} ref={popupRef}>
            <div className={style['popup__content-img']}>
              <img src={imageUrl} alt="" className="" />
            </div>
            <div className={style.popup__body}>
              <div className={style.popup__top}>
                <h3>{item.titleDetail ? item.titleDetail.map((line, idx) => <p key={idx}>{line} </p>) : item.title}</h3>
                <div className={style.popup__top_desc}>{item.descDetail ? item.descDetail.map((line, idx) => <p key={idx}>{line} </p>) : item.desc}</div>
                <a href={item.url} target="_blank" className="com_btn white_2 l line oval">
                  사이트 바로가기 <i className="icon_chevron_right"></i>
                </a>
              </div>

              <ul className={style.popup__summary_list}>
                <li className={style['popup__summary_list-item']}>
                  <span className="typo_lg">프로젝트 기간</span>
                  <b className="typo_lg des">{item.date}</b>
                </li>
                <li className={style['popup__summary_list-item']}>
                  <span className="typo_lg">담당 역할</span>
                  <b className="typo_lg des">{item.role}</b>
                </li>
                <li className={style['popup__summary_list-item']}>
                  <span className="typo_lg">기술스택</span>

                  <div className="com_flex_row">
                    <b className="typo_lg skil">
                      {(() => {
                        switch (item.stack[0].trim()) {
                          case 'react':
                            return (
                              <>
                                <i className="react dote"></i>
                                {item.stack[0]}
                              </>
                            );
                          case 'vue':
                            return (
                              <>
                                <i className="vue dote"></i>
                                {item.stack[0]}
                              </>
                            );
                          case 'php':
                            return (
                              <>
                                <i className="php dote"></i>
                                {item.stack[0]}
                              </>
                            );
                          case 'scss':
                            return (
                              <>
                                <i className="scss dote"></i>
                                {item.stack[0]}
                              </>
                            );
                          default:
                            return (
                              <>
                                <i className="default dote"></i>
                                {item.stack[0]}
                              </>
                            ); // 기본 아이콘
                        }
                      })()}
                    </b>

                    {item.stack[1] && (
                      <b className="typo_lg skil">
                        {
                          item.stack[1].trim() === 'scss' ? (
                            <>
                              <i className="scss dote"></i>
                              {item.stack[1]}
                            </>
                          ) : (
                            <>
                              <i className="default dote"></i>
                              {item.stack[1]}
                            </>
                          ) // 기본 아이콘
                        }
                      </b>
                    )}
                  </div>
                </li>
                <li className={style['popup__summary_list-item']}>
                  <span className="typo_lg">디바이스</span>
                  <b className="typo_lg des">{item.디바이스}</b>
                </li>
              </ul>
              <div className={style.popup__bottom}>
                <button className="com_btn white_2 l oval line  " onClick={close}>
                  확인
                </button>
              </div>
            </div>
          </div>
        </div>
        <i className="bg_close"></i>
      </section>
    </>
  );
}

export default ModalDetail;
