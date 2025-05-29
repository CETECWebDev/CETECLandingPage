import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";

export default function Slider() {
  return (
    <>
      <div className="container px-20">
        <Swiper
          effect={"coverflow"}
          grabCursor={true}
          centeredSlides={true}
          initialSlide={0}
          loop={false}
          // speed={1000}
          spaceBetween={80}
          slidesPerView={3}
          coverflowEffect={{
            rotate: 0,
            stretch: 0,
            depth: 250,
            modifier: 1,
            slideShadows: false,
          }}
          mousewheel={{
            invert: true,
            thresholdDelta: 50,
            sensitivity: 1,
          }}
          pagination={{ el: ".swiper-pagination", clickable: true }}
          navigation={{
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
            clickable: true,
          }}
          modules={[EffectCoverflow, Pagination, Navigation]}
          className="swiper_container relative"
        >
          <SwiperSlide >
            <div className=" rounded-3xl p-6 bg-[var(--dark-light-primary)]">
              <div className="relative ">
                <img className="object-cover h-full" src="/imgiot.png"/>
                <div className="h-1/3 absolute bottom-0 backdrop-blur-xl p-2 text-gray-300">
                  <h2>لورم ایپسوم</h2>
                  <p className=" text-sm">
                    لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و
                    با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه
                    و مجله در ستون و سطرآنچنان که لازم است.
                  </p>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide >
            <div className=" rounded-3xl p-6 bg-[var(--dark-light-primary)]">
              <div className="relative ">
                <img className="object-cover h-full" src="/imgiot.png"/>
                <div className="h-1/3 absolute bottom-0 backdrop-blur-xl px-2 text-gray-300">
                  <h2>لورم ایپسوم</h2>
                  <p className=" text-sm">
                    لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و
                    با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه
                    و مجله در ستون و سطرآنچنان که لازم است.
                  </p>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide >
            <div className=" rounded-3xl p-6 bg-[var(--dark-light-primary)]">
              <div className="relative ">
                <img className="object-cover h-full" src="/imgiot.png"/>
                <div className="h-1/3 absolute bottom-0 backdrop-blur-xl px-2 text-gray-300">
                  <h2>لورم ایپسوم</h2>
                  <p className=" text-sm">
                    لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و
                    با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه
                    و مجله در ستون و سطرآنچنان که لازم است.
                  </p>
                </div>
              </div>
            </div>
          </SwiperSlide>

          <div className="swiper-button-prev slider-arrow absolute left-0 top-2/3 -translate-y-1/2 z-10 text-white text-3xl">
            <ion-icon name="arrow-back-outline"></ion-icon>
          </div>
          <div className="swiper-button-next slider-arrow absolute right-0 top-2/3 -translate-y-1/2 z-10 text-white text-3xl">
            <ion-icon name="arrow-forward-outline"></ion-icon>
          </div>

          <div className="swiper-pagination mt-4 flex justify-center gap-2"></div>
        </Swiper>
      </div>
    </>
  );
}
