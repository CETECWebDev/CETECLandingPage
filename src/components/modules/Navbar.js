"use client";
import { useEffect, useState } from "react";
import { FaChevronDown } from "react-icons/fa";
import Link from "next/link";
import { GiDeliveryDrone } from "react-icons/gi";
import { RxHamburgerMenu } from "react-icons/rx";
import { useTheme } from "next-themes";
import { BsFillMoonStarsFill } from "react-icons/bs";
import { IoMdSunny } from "react-icons/io";

export default function Navbar() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const { theme, setTheme } = useTheme();
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
      <nav className="text-white px-6 py-4 lg:block">
        <div className="flex items-center justify-between">
          {/* Mobile Hamburger Menu */}

          <button className="flex lg:hidden items-center gap-2 text-[var(--primary2)] shadow-[var(--primary2)] rounded-full inner-orange-shadow py-3  px-5">
            <RxHamburgerMenu />
            <span>فهرست</span>
          </button>

          {/* Logo */}

          <div className="flex items-center space-x-2 rtl:space-x-reverse">
            <img
              src="/logodark.svg"
              alt="logo"
              className="h-[50px] w-[150px]"
            />
          </div>

          {/* Menu Option */}

          <ul className="hidden lg:flex gap-4 text-xl font-medium text-white">
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
        w-[600px] bg-[#030F3F80] rounded-2xl p-2 shadow-md opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all ease-in-out duration-700`}
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


          <div  className="flex gap-4 items-center justify-center">
            {/* darkmode/loghtmode toggle */}
            <button
              suppressHydrationWarning
              className="linkHover hover:text-[var(--textHover)] hover:border-[var(--textHover)] border flex justify-center items-center rounded-full color-[var(--colTextB)] w-10 h-10"
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            >
              {theme === "dark" ? <IoMdSunny /> : <BsFillMoonStarsFill />}
            </button>

          {/* Register/Login Button */}
            <button className="text-[18px] font-medium border border-[var(--primary2)] text-white px-[24px] py-[11px] rounded-[25px] hover:border-white transition">
              ثبت‌نام / ورود
            </button>
          </div>
        </div>
      </nav>
    </div>
  );
}
