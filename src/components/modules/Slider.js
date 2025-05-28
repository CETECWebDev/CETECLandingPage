import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';

export default function Slider() {
return (
    <>
    <div className=''>
      <Swiper
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        initialSlide={1}
        // loop={true}
        slidesPerView={3}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={true}
        modules={[EffectCoverflow, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className='rounded-3xl p-6 bg-[var(--dark-light-primary)]'>
          <img src="/imgiot.png" />

          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='rounded-3xl p-6 bg-[var(--dark-light-primary)]'>
          <img src="/imgiot.png" />

          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='rounded-3xl p-6 bg-[var(--dark-light-primary)]'>
          <img src="/imgiot.png" className='w-full h-auto rounded-3xl object-cover' />

          </div>
        </SwiperSlide>

      </Swiper>
    </div>

    </>
  );
}
