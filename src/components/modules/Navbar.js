"use client";
import { FaChevronDown } from "react-icons/fa";

export default function Navbar() {
  return (
    <nav className="bg-[#0B0F2F] text-white px-6 py-4" dir="rtl">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        
        <div className="flex items-center space-x-2 rtl:space-x-reverse">
          <img src="/logodark.svg" alt="logo" className="h-[50px] w-[150px]" />
        
        </div>

        {/* منو وسط */}
        <ul className=" text-[24px] font-medium flex items-center space-x-6 rtl:space-x-reverse text-sm">
        
          <li className="text-[20px] font-medium flex items-center cursor-pointer hover:text-orange-400 space-x-1 rtl:space-x-reverse">
            <span>محصولات</span>
            <FaChevronDown className="text-white" />
          </li>

          
          <li className=" text-[20px] font-medium flex items-center cursor-pointer hover:text-orange-400 space-x-1 rtl:space-x-reverse">
            <span>پروژه‌ها</span>
            <FaChevronDown className="text-white" />
          </li>

        
          

        
          <li className=" text-[20px] font-medium flex items-center cursor-pointer hover:text-orange-400 space-x-1 rtl:space-x-reverse">
            <span>قطب دانش</span>
            <FaChevronDown className="text-white" />
          </li>
        </ul>

      
        <button className="text-[24px] font-medium border border-[var(--primary2)] text-white px-[24px] py-[11px] rounded-[25px] hover:border-white transition">
          ثبت‌نام / ورود
        </button>

        </div>
      
    </nav>
  );
}
