import React from 'react';
import {Swiper, SwiperSlide} from 'swiper/react';
import {Navigation} from 'swiper/modules';
//import { Link } from 'react-router-dom';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
/*css*/
import '../../assets/scss/page/main.scss';
//component
import ContentsItem from '../../component/contents/ContentsItem';
//import Modal from '../../component/inc/Modal';
//import PartnershipInquiry from '../../component/popup/PartnershipInquiry'; //제휴제안문의
//img
function Main() {
  //문의작성
  //const [modalInquiry, setModalInquiry] = useState(false);
  //const handleCloseInquiry = () => setModalInquiry(false);
  return (
    <>
      <main className="p_main">
        {/*  포트폴리오 */}
        <section className="main_cont_sec">
          <div className="com_center_wrap">
            <div className="com_sec_tit__wrap">
              <h2 className="com_sec_tit">
                <i className="png_icon icon_ai"></i>
                포트폴리오 main add 
              </h2>
            </div>
            <section className="com_swiper_wrap">
              <Swiper
                slidesPerView="1.4"
                spaceBetween="0"
                breakpoints={{
                  767.9: {
                    slidesPerView: '3.6'
                  },
                  1023.9: {
                    slidesPerView: '5.6'
                  }
                }}
                navigation={true}
                modules={[Navigation]}
                className="mobile_swiper"
              >
                {[1, 2, 3, 4, 5, 6].map((index) => (
                  <SwiperSlide key={index}>
                    <ContentsItem type="ai_training" index={index} />
                  </SwiperSlide>
                ))}
              </Swiper>
            </section>
          </div>
        </section>
      </main>    
			 {/* 상품문의 */}
      {/*<Modal open={modalInquiry} close={handleCloseInquiry} popSize="s" type="">
        <PartnershipInquiry />
        <div className="btn_container">
          <button className="com_btn point s">문의</button>
        </div>
      </Modal>*/}
    </>
  );
}

export default Main;
