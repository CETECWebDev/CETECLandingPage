import Link from 'next/link'
import React from 'react'

function ProductOffice() {
  return (

  <section className="py-16 text-white" dir="rtl">
  <h1 className="text-[32px] font-extrabold text-white text-center mb-10">
    محصولات قطب دانش
  </h1>

  <div className="grid md:grid-cols-3 gap-12 max-w-7xl mx-auto px-4 mb-20 items-center">
    
    {/* ستون 1: لیست محصولات */}
    <div>
      <ul className="space-y-3">
        <li className="border border-gray-600 rounded-xl p-3 hover:border-orange-400 transition">
          <a href="#" className="text-[20px] font-medium transition">
            پهپاد عمود پرواز هوشمند
          </a>
        </li>
        <li className="border border-gray-600 rounded-xl p-3 hover:border-orange-400 transition">
          <a href="#" className="text-[20px] font-normal text-gray-300 hover:text-orange-400 transition">
            فانکشن ژنراتور قابل حمل
          </a>
        </li>
        <li className="border border-gray-600 rounded-xl p-3 hover:border-orange-400 transition">
          <a href="#" className="text-[20px] font-normal text-gray-300 hover:text-orange-400 transition">
            سیستم پردازش صنعتی
          </a>
        </li>
      </ul>
    </div>

    {/* ستون 2: کارت عکس محصول */}
    <div>
      <div className="bg-[#00143B] rounded-xl p-6 text-center shadow-lg">
        <img
          src="/img1.jpg"
          alt="پهپاد"
          className="mx-auto h-24 mb-4 rounded"
        />
        <p className="text-[20px] font-normal">پهپاد عمود پرواز هوشمند</p>
        <p className="text-[24px] font-medium text-green-600">ورژن ۱.۲</p>
      </div>
    </div>

    {/* ستون 3: متن عمودی و نوار رنگی */}
    <div className="flex flex-col items-center gap-4">
      <h2 className='text-[18px] font-bold text-gray-50 bg-[#e39d05]'>
        پهپاد عمود پرواز هوشمند بهترین قیمت
      </h2>
      <h3>ویژگی های محصول</h3>
    </div>
    
  </div>
</section>


  )
}

export default ProductOffice