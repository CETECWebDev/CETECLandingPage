"use client";
import { useState } from "react";
import { FaChevronDown } from "react-icons/fa";
import { GiDeliveryDrone } from "react-icons/gi";

export default function Navbar() {
  // state برای ذخیره منوی باز
  const [openIndex, setOpenIndex] = useState(null);

  // داده منوها برای DRY بودن کد
  const menus = [
    { title: "محصولات" },
    { title: "پروژه‌ها" },
    { title: "قطب دانش" },
  ];

  return (
    <div className="container hidden lg:block">
       <nav className=" text-white px-6 py-4" dir="rtl">
      <div className=" flex items-center justify-between">
        <div className="flex items-center space-x-2 rtl:space-x-reverse">
          <img src="/logodark.svg" alt="logo" className="h-[50px] w-[150px]" />
        </div>

        <ul className="h-full text-[24px] font-medium flex items-center space-x-6 rtl:space-x-reverse text-sm">
          {menus.map((menu, i) => (
            <li
              key={i}
              className={` gap-2 py-4 px-2 relative text-[20px] font-medium flex items-center cursor-pointer hover:text-orange-400 space-x-1 rtl:space-x-reverse ${
                openIndex === i ? "text-orange-400" : ""
              }`}
              onMouseEnter={() => setOpenIndex(i)}   // موس وارد منو شد => بازش کن
              onMouseLeave={() => setOpenIndex(null)} // موس خارج شد => ببندش
            >
              <span>{menu.title}</span>
              <FaChevronDown />

              {/* Dropdown Menu */}
              <div
                className={`absolute top-full left-1/2 transform -translate-x-1/2 z-20  rounded-lg shadow-lg w-[600px] text-white  p-4 backdrop-blur-xl transition-all duration-500 ${
                  openIndex === i
                    ? "opacity-100 translate-y-0 pointer-events-auto"
                    : "opacity-0 translate-y-4 pointer-events-none"
                }`}
              >
                <div className="grid grid-cols-2 gap-4">
                  {Array.from({ length: 5 }).map((_, j) => (
                    <div key={j} className="flex flex-col items-start">
                      <GiDeliveryDrone className="text-[var(--primary2)] text-xl" />
                      <h3 className="font-bold">پهپاد عمود پرواز هوشمند</h3>
                      <p className="text-gray-600 text-sm">
                        اولین پهپاد عمود پرواز تولید شده در ایران
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </li>
          ))}
        </ul>

        <button className="text-[24px] font-medium border border-[var(--primary2)] text-white px-[24px] py-[11px] rounded-[25px] hover:border-white transition">
          ثبت‌نام / ورود
        </button>
      </div>
    </nav>
    </div>
   
  );
}
