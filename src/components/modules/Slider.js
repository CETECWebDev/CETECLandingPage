import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

export default function Slider() {

  const prevRef = useRef(null);
  const nextRef = useRef(null);
  const swiperRef = useRef(null);

    const handlePrev = () => {
    if (swiperRef.current) swiperRef.current.slidePrev();
  };

  const handleNext = () => {
    if (swiperRef.current) swiperRef.current.slideNext();
  };

  return (
    <>
      <div className="container px-20">
        <Swiper
          effect={"coverflow"}
          grabCursor={true}
          centeredSlides={true}
          initialSlide={1}
          loop={false}
          onSwiper={(swiper) => {
              swiperRef.current = swiper;
            }}
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
                  <h2 >لورم ایپسوم</h2>
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

          {/* Custom Arrows */}
          <button
            onClick={handlePrev}
            className="absolute left-[90px] top-1/2 transform -translate-y-1/2 z-20 text-gray-300 text-xl"
          >
            <FaChevronLeft />
          </button>
          <button
            onClick={handleNext}
            className="absolute right-[90px] top-1/2 transform -translate-y-1/2 z-20 text-gray-300 text-xl"
          >
            <FaChevronRight />
          </button>
          <div className="swiper-pagination mt-4 flex justify-center gap-2"></div>
        </Swiper>
      </div>
    </>
  );
}