import React from 'react'

function About() {
  return (
    <div className="container">
   <section className=" text-white min-h-screen flex items-center justify-center px-6 text-center">
      <div className="">
        <h1 className="text-[32px] font-extrabold  md:text-4xl  leading-relaxed text-center text-white">
         درباره ی شرکت قطب دانش وفناوری های مدرن(CETEC)
        </h1>
        <p className="text-[24px] font-medium text-gray-300 mt-6 leading-loose pt-5">
        لوازم ایپسوم متن ساختگی با تولید سادگی نامفهوم ازصنعت چاپ و با استفاده از طراحان گرافیک است،چاپگرهاومتون بلکه روزنامه ومجله
        درستون وسرآنچنان که لازم است، و برای شرایط فعلی نکمولوژی مورد نیاز 
        وکاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد. </p>
        
        
        
        <button className="text-[18px] font-medium mt-8 bg-[#1A1D47] text-orange-400 border
        inner-orange-shadow    border-orange-400 px-6 py-2 rounded-lg hover:bg-orange-400 hover:text-white transition">
    اطلاعات بیشتر  </button>
      </div>
    </section>
    </div>
  
  )
}

export default About
