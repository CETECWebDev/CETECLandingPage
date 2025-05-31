import React, { useRef, useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, Autoplay } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

SwiperCore.use([Navigation, Autoplay]);

const testimonialData = [
  { id: 1, name: "علی فرج پ.ر", text: "مستول", img: "/img1.jpg" },
  { id: 2, name: "نوید پوررضا", text: "دفتر دار", img: "/img1.jpg" },
  { id: 3, name: "مهدی دادرس", text: "مدیر", img: "/img1.jpg" },
];

const PrevArrow = ({ onClick }) => (
  <button
    onClick={onClick}
    className="absolute left-[-50px] top-1/2 transform -translate-y-1/2 z-20 text-white text-3xl"
    aria-label="Previous"
  >
    <FaChevronLeft />
  </button>
);

const NextArrow = ({ onClick }) => (
  <button
    onClick={onClick}
    className="absolute right-[-50px] top-1/2 transform -translate-y-1/2 z-20 text-white text-3xl"
    aria-label="Next"
  >
    <FaChevronRight />
  </button>
);

const Testimonial = () => {
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  const [swiperReady, setSwiperReady] = useState(false);

  useEffect(() => {
    setSwiperReady(true);
  }, []);

  return (
    <div data-aos="fade-up" data-aos-duration="300" className="py-10">
      <div className="container">
        <div className="text-center mb-20 max-w-[600px] mx-auto">
          
          <h1 className="text-3xl font-extrabold text-white">نظریات مشتریان قطب دانش</h1>

          <p className=" text-9xl text-white mt-3 top-5 ">،،</p>
          <p className="text-xl font-medium  text-gray-100 mb-3">
            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده
             از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است. برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می‌باشد.
            </p>
        </div>

        <div
          data-aos="zoom-in"
          data-aos-duration="300"
          className="grid grid-cols-1 max-w-[250px] mx-auto gap-6 relative"
        >
          <div ref={prevRef}>
            <PrevArrow />
          </div>
          <div ref={nextRef}>
            <NextArrow />
          </div>

          {swiperReady && (
            <Swiper
              spaceBetween={30}
              slidesPerView={1}
              loop={true}
              autoplay={{ delay: 4000, disableOnInteraction: false }}
              navigation={{
                prevEl: prevRef.current,
                nextEl: nextRef.current,
              }}
            >
              {testimonialData.map((data) => (
                <SwiperSlide key={data.id}>
                  <div className="my-6">
                    <div className="flex flex-col gap-4 shadow-lg py-8 px-6 mx-4 rounded-xl dark:bg-gray-800 bg-primary/10 relative items-center text-center">
                      <div>
                        <img
                          className="rounded-full w-20 h-20 mx-auto"
                          src={data.img}
                          alt=""
                        />
                      </div>
                      <div className="flex flex-col items-center gap-4">
                        <div>
                          <h1 className="text-xl font-medium text-white">{data.name}</h1>
                          <p className="text-white text-sm">{data.text}</p>
                        </div>
                      </div>

                     
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          )}
        </div>
      </div>
    </div>
  );
};

export default Testimonial; 