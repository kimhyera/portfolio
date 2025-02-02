import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
/*component*/
import ContentsItem from './ContentsItem';
import { Navigation} from 'swiper/modules';

function SlideContents({ItemType, link}) {
  return (
    <div className='com_swiper_wrap full'>
      {
        ItemType==="type_wide" ? //pc에서는 리스트 모바일에서는 슬라이드
        <>
        <Swiper
          //loop={true}
          slidesPerView='2.5'
          spaceBetween='15'
          breakpoints={{
            767.9: {
              slidesPerView: '3'
            },
          }}
          navigation={true} 
          modules={[Navigation]}
          className='mobile_swiper'
        >
          {[1, 2, 3].map((index) => (
            <SwiperSlide key={index}>
              <ContentsItem type={ItemType} link={link}/>
            </SwiperSlide>
          ))}
        </Swiper>
        </>
        :
        <>
        <Swiper
          //loop={true}
          slidesPerView='1.3'
          spaceBetween='15'
          breakpoints={{
            1023.9: {
              slidesPerView: '5',
            },
            767.9: {
              slidesPerView: '2.7',
            },
          }}
          navigation={true} 
          modules={[Navigation]}
        >
          {[1, 2, 3, 4, 5, 6, 7].map((index) => (
            <SwiperSlide key={index}>
              <ContentsItem type={ItemType} ranking={index} link={link}/>
            </SwiperSlide>
          ))}
        </Swiper>
        </>
      }
      
    </div>
  )
}

export default SlideContents