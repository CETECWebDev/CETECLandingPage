"use client";
import { useState } from "react";
import { FaChevronDown } from "react-icons/fa";
import Link from "next/link";
import { GiDeliveryDrone } from "react-icons/gi";

export default function Navbar() {
  const mainMenus = [
    { key: "products", label: "محصولات" },
    { key: "services", label: "خدمات" },
    { key: "about", label: "درباره ما" },
  ];

  const submenuItems = {
    products: [
            {
        title: "پهپاد باربر نسل ۲",
        desc: "حمل بار تا ۲۰ کیلوگرم در ارتفاع بالا",
        href: "#",
      },
      {
        title: "پهپاد امداد و نجات",
        desc: "ویژه عملیات امدادی در شرایط بحرانی",
        href: "#",
      },
                  {
        title: "پهپاد باربر نسل ۲",
        desc: "حمل بار تا ۲۰ کیلوگرم در ارتفاع بالا",
        href: "#",
      },
      {
        title: "پهپاد امداد و نجات",
        desc: "ویژه عملیات امدادی در شرایط بحرانی",
        href: "#",
      },
                  {
        title: "پهپاد باربر نسل ۲",
        desc: "حمل بار تا ۲۰ کیلوگرم در ارتفاع بالا",
        href: "#",
      },

    ],
    services: [
      {
        title: "پهپاد عمود پرواز هوشمند",
        desc: "اولین نسل پهپادهای هوشمند عمود پرواز تولید شده در ایران",
        href: "#",
      },
      {
        title: "پهپاد باربر نسل ۲",
        desc: "حمل بار تا ۲۰ کیلوگرم در ارتفاع بالا",
        href: "#",
      },
      {
        title: "پهپاد امداد و نجات",
        desc: "ویژه عملیات امدادی در شرایط بحرانی",
        href: "#",
      },
            {
        title: "پهپاد باربر نسل ۲",
        desc: "حمل بار تا ۲۰ کیلوگرم در ارتفاع بالا",
        href: "#",
      },
      {
        title: "پهپاد امداد و نجات",
        desc: "ویژه عملیات امدادی در شرایط بحرانی",
        href: "#",
      },
    ],
    about: [
            {
        title: "پهپاد باربر نسل ۲",
        desc: "حمل بار تا ۲۰ کیلوگرم در ارتفاع بالا",
        href: "#",
      },
      {
        title: "پهپاد امداد و نجات",
        desc: "ویژه عملیات امدادی در شرایط بحرانی",
        href: "#",
      },
                  {
        title: "پهپاد باربر نسل ۲",
        desc: "حمل بار تا ۲۰ کیلوگرم در ارتفاع بالا",
        href: "#",
      },
      {
        title: "پهپاد امداد و نجات",
        desc: "ویژه عملیات امدادی در شرایط بحرانی",
        href: "#",
      },
                  {
        title: "پهپاد باربر نسل ۲",
        desc: "حمل بار تا ۲۰ کیلوگرم در ارتفاع بالا",
        href: "#",
      },

    ],
  };

  return (
    <div className="container">
      <nav className="text-white px-6 py-4" dir="rtl">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2 rtl:space-x-reverse">
            <img
              src="/logodark.svg"
              alt="logo"
              className="h-[50px] w-[150px]"
            />
          </div>

          <ul className="flex gap-4 text-xl font-medium text-white">
            {mainMenus.map((menu) => (
              <li
                key={menu.key}
                className="h-full relative group p-4 text-[var(--darkText)]"
              >
                <Link href="#" className="hover:text-yellow-400">
                  {menu.label}
                </Link>

                <ul
                  className={` absolute left-[50%] translate-x-[-50%] top-full mt-2  grid grid-cols-2 gap-4
        } 
        w-[600px] bg-[#030F3F80] rounded-2xl p-2 shadow-md opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200`}
                >
                  {(submenuItems[menu.key] || []).map((item, idx) => (
                    <li key={idx}>
                      <Link
                        href={item.href}
                        className="block px-4 py-2 bg-opacity-50  ] "
                      >
                       
                          <div className="flex gap-2    hover:bg-[var(--darkPrimary) ">
                            <GiDeliveryDrone className="text-[var(--primary2)] text-xl" />
                            <div className="flex flex-col justify-center">
                              <h3 className="font-bold">{item.title}</h3>
                              <p className="text-gray-600 text-sm font-medium">
                                {item.desc}
                              </p>
                            </div>
                          </div>
                 
                      </Link>
                    </li>
                  ))}
                </ul>
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
