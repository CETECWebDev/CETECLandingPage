import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Pagination  , Navigation} from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';


export default function Slider() {
return (
    <>
    <div className='container'>
      <Swiper
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        initialSlide={0}
        loop={false}
        // speed={1000}
        spaceBetween={60}
        slidesPerView={3}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 100,
          modifier: 2,
          slideShadows: false,
        }}

        mousewheel={{
          invert: true ,
          thresholdDelta:50,
          sensitivity: 1,
        }}
        pagination={{el:'.swiper-pagination' , clickable:true}}
        navigation={{
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
          clickable: true,
        }}
        modules={[EffectCoverflow, Pagination , Navigation]}
        className="swiper_container"
      >
        <SwiperSlide>
          <div className='h-[300px] rounded-3xl p-6 bg-[var(--dark-light-primary)]'>
          <img className='object-cover h-full'  src="/img1.jpg" />

          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='rounded-3xl p-6 bg-[var(--dark-light-primary)]'>
          <img className='object-cover h-full' src="/imgiot.png" />

          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='rounded-3xl p-6 bg-[var(--dark-light-primary)]'>
          <img src="/imgiot.png" className='w-full h-auto rounded-3xl object-cover' />

          </div>
        </SwiperSlide>


        <div className="Slider-controller">

          <div className="swiper-button-prev slider-arrow">
            <ion-icon name="arrow-back-outline"></ion-icon>
          </div>
          <div className="swiper-button-next slider-arrow">
            <ion-icon name="arrow-forward-outline"></ion-icon>
          </div>

          <div className="swiper-pagination"></div>

        </div>

      </Swiper>
    </div>

    </>
  );
}
