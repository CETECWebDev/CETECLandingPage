import React from 'react'

function About() {
  return (
     <section className="bg-[#0B0F2F] text-white min-h-screen flex items-center justify-center px-6 text-center">
      <div className="max-w-6xl">
        <h1 className="text-[32px] font-extrabold  md:text-4xl  leading-relaxed text-center text-white">
         درباره ی شرکت قطب دانش وفناوری های مدرن(CETEC)
        </h1>
        <p className="text-[24px] font-medium text-gray-300 mt-6 leading-loose pt-5">
          پلتفرمی جامع برای شناسایی، تشخیص، شمارش، احراز هویت، ردیابی، هدایت و مسیریابی هوشمند
          مبتنی بر تحلیل انواع جریان داده‌ها به‌صورت برخط بر اساس هوش مصنوعی و یادگیری عمیق <br/>
        </p>
        <button className="mt-8 bg-[#1A1D47] text-orange-400 border border-orange-400 px-6 py-2 rounded-lg hover:bg-orange-500 hover:text-white transition">
    اطلاعات بیشتر  </button>
      </div>
    </section>
  )
}

export default About
