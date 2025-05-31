import React, { useRef, useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, Autoplay } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

SwiperCore.use([Navigation, Autoplay]);

const testimonialData = [
  { id: 1, name: "علی فرج پ.ر", text: "مسئول", img: "https://picsum.photos/101/101" },
  { id: 2, name: "نوید پوررضا", text: "دفتر دار", img: "https://picsum.photos/102/102" },
  { id: 3, name: "مهدی دادرس", text: "مدیر", img: "https://picsum.photos/103/103" },
];

const Testimonial = () => {
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
    <div className="py-10">
      <div className="container">
        <div className="text-center mb-20 max-w-[600px] mx-auto">
          <h1 className="text-3xl font-extrabold text-white">نظریات مشتریان قطب دانش</h1>
          <p className=" text-9xl text-white mt-3">،،</p>
          <p className="text-xl font-medium text-gray-100 mb-3">
            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است.
          </p>
        </div>

        <div className="relative max-w-[600px] mx-auto">
          {/* Custom Arrows */}
          <button
            onClick={handlePrev}
            className="absolute left-[90px] top-1/2 transform -translate-y-1/2 z-20 text-gray-300"
          >
            <FaChevronLeft />
          </button>
          <button
            onClick={handleNext}
            className="absolute right-[90px] top-1/2 transform -translate-y-1/2 z-20 text-gray-300 tet-xl"
          >
            <FaChevronRight />
          </button>

          <Swiper
            spaceBetween={30}
            slidesPerView={1}
            loop={true}
            autoplay={{ delay: 4000, disableOnInteraction: false }}
            onSwiper={(swiper) => {
              swiperRef.current = swiper;
            }}
          >
            {testimonialData.map((data) => (
              <SwiperSlide key={data.id}>
                <div className="my-6">
                  <div className="flex flex-col gap-4  py-8 px-6 rounded-xl items-center text-center ">
                    <img
                      className="rounded-full w-20 h-20 mx-auto"
                      src={data.img}
                      alt={data.name}
                    />
                    <h1 className="text-xl font-medium text-white">{data.name}</h1>
                    <p className="text-white text-sm">{data.text}</p>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
