import React from 'react'

function About() {
  return (
    <div>
      <section className="bg-[#0B0F2F] text-white py-20 text-center px-6">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-2xl md:text-5xl font-bold leading-relaxed md:whitespace-nowrap">
            درباره‌ی شرکت قطب دانش و فناوری‌های مدرن <span className="text-orange-400">(CETEC)</span>
          </h1>
          <p className="text-xl font-bold text-gray-400 mt-6 leading-loose max-w-2xl mx-auto text-center">
            لوازم ایپسونم ساختگی با تولید سادگی نامفهوم از صنعت چاپ است.
            همچنین برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع طراحی شده است.
          </p>
          <button className="mt-8 bg-[#1A1D47] text-orange-400 border border-orange-400 px-6 py-2 rounded-lg hover:bg-orange-500 hover:text-white transition">
            اطلاعات بیشتر
          </button>
        </div>
      </section>
    </div>
  )
}

export default About
