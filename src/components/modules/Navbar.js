"use client";
import { FaChevronDown } from "react-icons/fa";
import { GiDeliveryDrone } from "react-icons/gi";

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

          <li
            id="dropdownHoverButton"
            data-dropdown-toggle="dropdownHover"
            data-dropdown-trigger="hover"
            className=" text-[20px] font-medium flex items-center cursor-pointer hover:text-orange-400 space-x-1 rtl:space-x-reverse"
          >
            <span>قطب دانش</span>
            <FaChevronDown className="text-white" />
          </li>
        </ul>

        <button className="text-[24px] font-medium border border-[var(--primary2)] text-white px-[24px] py-[11px] rounded-[25px] hover:border-white transition">
          ثبت‌نام / ورود
        </button>
      </div>

      {/* Dropdown Menu */}

      <div
        id="dropdownHover"
        className="z-10 hidden  backdrop-blur-xl  rounded-lg shadow-lg w-[600px] dark:bg-gray-700 p-4"
      >
        <div className="grid grid-cols-2 gap-4">
          <div className="flex flex-col items-start">
            <GiDeliveryDrone className="text-[var(--primary2)] text-xl"  />
            <h3 className=" font-bold">پهپاد عمود پرواز هوشمند </h3>
            <p className="text-gray-600 dark:text-gray-300 text-sm">
              اولین پهپاد عمود پرواز تولید شده در ایران
            </p>
          </div>
          <div className="flex flex-col items-start">
            <GiDeliveryDrone className="text-[var(--primary2)] text-xl"  />

            <h3 className=" font-bold">فناکش ترازیفر قابل حمل </h3>
            <p className="text-gray-600 dark:text-gray-300 text-sm">
              دستگاهی برای ردیابی و شناسایی در شرایط خاص
            </p>
          </div>
          <div className="flex flex-col items-start">
            <GiDeliveryDrone className="text-[var(--primary2)] text-xl"  />

            <h3 className=" font-bold">پهپاد عمود پرواز هوشمند </h3>
            <p className="text-gray-600 dark:text-gray-300 text-sm">
              اولین پهپاد عمود پرواز تولید شده در ایران
            </p>
          </div>
          <div className="flex flex-col items-start">
            <GiDeliveryDrone className="text-[var(--primary2)] text-xl"  />

            <h3 className=" font-bold">فناکش ترازیفر قابل حمل </h3>
            <p className="text-gray-600 dark:text-gray-300 text-sm">
              دستگاهی برای ردیابی و شناسایی در شرایط خاص
            </p>
          </div>
          <div className="flex flex-col items-start">
            <GiDeliveryDrone className="text-[var(--primary2)] text-xl"  />

            <h3 className=" font-bold">پهپاد عمود پرواز هوشمند </h3>
            <p className="text-gray-600 dark:text-gray-300 text-sm">
              اولین پهپاد عمود پرواز تولید شده در ایران
            </p>
          </div>
        </div>
      </div>
    </nav>
  );
}
