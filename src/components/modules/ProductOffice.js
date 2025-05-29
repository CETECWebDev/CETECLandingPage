import Link from 'next/link'
import React from 'react'
import { AiOutlineRobot } from 'react-icons/ai';

function ProductOffice() {
  return (

  <section className="py-16 text-white" dir="rtl">
  <h1 className="text-[32px] font-extrabold text-white text-center mb-10">
    محصولات دانش بنیان
    </h1>

  <div className="grid md:grid-cols-3 gap-12 max-w-7xl mx-auto px-4 mb-20 items-center">
    
   
    <div >
      <ul className="space-y-3">
        <li className=" border border-gray-600 rounded-xl p-2
         hover:border-orange-400 transition w-[300px] h-[80px] top-4">
          <Link href="#" className="text-[20px] font-medium transition">
            پهپاد عمود پرواز هوشمند
          </Link>
        </li>
        
        <li className=" border border-gray-600 rounded-xl p-2
         hover:border-orange-400 transition w-[300px] h-[80px] top-4">
          <Link href="#" className="text-[20px] font-normal text-gray-300 hover:text-orange-400 transition">
            فانکشن ژنراتور قابل حمل
          </Link>
        </li>

        <li className=" border border-gray-600 rounded-xl p-2
         hover:border-orange-400 transition w-[300px] h-[80px] top-4">
          <Link href="#" className="text-[20px] font-normal text-gray-300 hover:text-orange-400 transition">
            سیستم پردازش صنعتی
          </Link>
        </li>
      </ul>
    </div>

    <div className="flex flex-col items-center gap-4 max-w-xl mx-auto">
    
 
    
  <div className="w-[954px] h-[392px] border border-orange-100 rounded-[16px] p-6 flex gap-12 items mr-80">
  
  <div className="w-[302px] h-[344px] bg-white rounded-xl overflow-hidden flex items-center justify-center shadow-md">
    <img src="/img1.jpg" alt="پهپاد" className="w-full h-full object-contain" />
  </div>

  
  <div className="flex flex-col justify-start text-right space-y-3">
    <h3 className="text-2xl font-bold text-white bg-orange-700">پهپاد عمود پرواز هوشمند</h3>
    <h4 className="text-green-300 font-semibold text-lg">ویژگی‌های محصول:</h4>
    <ul className=" leading-loose list-disc pr-5 space-y-1">
      <li className='text-xl font-meduim text-gray-100'>کنترل پرواز پیشرفته شرکت cetec با پردازشگر قدرتمند ۳۲ بیتی</li>

      <li className='text-xl font-meduim text-gray-100'>پایداری بالا و قدرت مانور فوق‌العاده + عکس‌العمل سریع</li>
     
      <li className='text-xl font-meduim text-gray-100'>موتورهای با قدرت پروازی بالا</li>
      <li className='text-xl font-meduim text-gray-100'>نقشه خودکار پرواز و مسیریابی توسط نرم‌افزار</li>
     
      <li className='text-xl font-meduim text-gray-100'>حالت مود برگشت به خانه و پایداری استندبای</li>
     
      <li className='text-xl font-meduim text-gray-100'>بازگشت خودکار به مبدأ در صورت قطع ارتباط با مرکز کنترل</li>
    </ul>
  </div>
</div>

  </div>

   
    
  </div>
</section>


  )
}

export default ProductOffice