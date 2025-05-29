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
        initialSlide={0}
        loop={true}
        // speed={1000}
        spaceBetween={100}
        slidesPerView={3}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: false,
        }}
        pagination={{
          clickable: true,
        }}
        mousewheel={{
          invert: true ,
          thresholdDelta:50,
          sensitivity: 1,
        }}
        modules={[EffectCoverflow, Pagination]}
        className="mySwiper"
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

      </Swiper>
    </div>

    </>
  );
}
