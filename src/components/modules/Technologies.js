import React from 'react'
import { AiOutlineRobot } from "react-icons/ai";

function Technologies() {
  return (
    <div className="container">
      <section id="services" className="py-16 text-white">
        <div className="container mx-auto px-6">
          <div className="service-top text-center mb-12">
            <h1 className="text-[32px] font-extrabold mb-4 text-white">
              فناوری های مورد استفاده قطب دانش
            </h1>
            <p className='text-[20px] font-medium'>
              قطب دانش برای توسعه نرم افزار‌ها و اجرای پروژه‌های کوچک و بزرگ شما از چنین فناوری‌هایی بهره می‌گیرد.
            </p>
          </div>

          <div className="grid md:grid-cols-2 items-center gap-8 max-w-7xl mx-auto mb-20">
            <div>
              <p className="text-[20px] font-medium text-white leading-relaxed mb-6">
                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است،
                چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد
                نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می‌باشد.
              </p>
            </div>

            <div className="flex flex-col items-center gap-4 max-w-xl mx-auto w-full">
              <div className="flex flex-wrap justify-center gap-4 w-full">
                {[...Array(5)].map((_, i) => (
                  <div key={i} className="w-28 h-28 bg-blue-900 text-white rounded-xl flex 
                  flex-col items-center justify-center shadow-lg">
                    <AiOutlineRobot className='text-2xl' />
                    <h1 className='mt-2'>هوش مصنوعی</h1>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  )
}

export default Technologies;
