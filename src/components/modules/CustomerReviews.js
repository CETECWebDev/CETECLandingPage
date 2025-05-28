import React from 'react'

function CustomerReviews() {
  return (
    <div className="container">
      <section className="text-white min-h-screen flex flex-col items-center justify-center px-6 text-center bg-[#0B1120]" dir="rtl">
        <div>
          {/* عنوان و توضیح */}
          <h1 className="text-[32px] font-extrabold md:text-4xl leading-relaxed text-center text-white">
            نظرات مشتریان قطب دانش
          </h1>
          <p className="text-[20px] font-medium text-gray-300 mt-6 leading-loose pt-5 max-w-3xl mx-auto">
            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ است، با استفاده از طراحان گرافیک. چاپگرها و متون بلکه روزنامه‌ها و مجله‌ها در ستون و سطر لازم، و برای شرایط فعلی تکنولوژی و کاربردهای متنوع طراحی شده‌اند.
          </p>

          {/* ۴ نظر کنار هم در یک ردیف */}
          <div className="mt-12 flex flex-nowrap justify-center gap-12">
            {/* آیتم اول */}
            <div className="flex flex-col items-center gap-4 w-1/4 min-w-[200px]">
              <img
                src="/review1.jpg"
                alt="نظر مشتری"
                className="rounded-full w-16 h-16 object-cover shadow-lg"
              />
              <div className="text-center mt-2">
                <p className="text-[18px] font-semibold text-white">مهدی مقدم</p>
                <p className="text-[16px] text-gray-400">مدیر مالی</p>
              </div>
            </div>

            {/* آیتم دوم */}
            <div className="flex flex-col items-center gap-4 w-1/4 min-w-[200px]">
              <img
                src="/review2.jpg"
                alt="نظر مشتری"
                className="rounded-full w-16 h-16 object-cover shadow-lg"
              />
              <div className="text-center mt-2">
                <p className="text-[18px] font-semibold text-white">مهدی مقدم</p>
                <p className="text-[16px] text-gray-400">مدیر مالی</p>
              </div>
            </div>

            {/* آیتم سوم */}
            <div className="flex flex-col items-center gap-4 w-1/4 min-w-[200px]">
              <img
                src="/review3.jpg"
                alt="نظر مشتری"
                className="rounded-full w-16 h-16 object-cover shadow-lg"
              />
              <div className="text-center mt-2">
                <p className="text-[18px] font-semibold text-white">مهدی مقدم</p>
                <p className="text-[16px] text-gray-400">مدیر مالی</p>
              </div>
            </div>

            {/* آیتم چهارم */}
            <div className="flex flex-col items-center gap-4 w-1/4 min-w-[200px]">
              <img
                src="/review4.jpg"
                alt="نظر مشتری"
                className="rounded-full w-16 h-16 object-cover shadow-lg"
              />
              <div className="text-center mt-2">
                <p className="text-[18px] font-semibold text-white">مهدی مقدم</p>
                <p className="text-[16px] text-gray-400">مدیر مالی</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default CustomerReviews
