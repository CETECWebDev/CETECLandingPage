import Link from "next/link";
import React from "react";
import {
  FaInstagram,
  FaFacebook,
  FaLinkedin,
  FaTelegramPlane,
} from "react-icons/fa";

function Footer() {
  return (
    <div
      className="bg-[url('/footer.jpg')] bg-cover bg-center relative"
    >
      <section className="bg-black/60 text-white h-full">
        <div className="container mx-auto px-6 py-12 flex flex-col justify-between min-h-[500px]">
          <div className="flex justify-start mb-10">
            <img src="/logodark.svg" alt="logo" className="h-[50px] w-[150px]" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-10 text-right font-medium">
            <div>
              <h2 className="text-2xl font-semibold mb-4">قطب دانش</h2>
              <ul className="space-y-2 text-xl">
                <li>
                  <Link href="/about" className="hover:text-orange-400 transition">
                    درباره شرکت
                  </Link>
                </li>
                <li>
                  <Link href="/vision-mission" className="hover:text-orange-400 transition">
                    چشم‌انداز و ماموریت
                  </Link>
                </li>
                <li>
                  <Link href="/team" className="hover:text-orange-400 transition">
                    درباره تیم ما
                  </Link>
                </li>
                <li>
                  <Link href="/faq" className="hover:text-orange-400 transition">
                    سوالات متداول
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-4">محصولات</h2>
              <ul className="space-y-2 text-xl">
                <li>پهپاد عمود پرواز هوشمند</li>
                <li>فاکشن ژیراژتور قابل حمل</li>
                <li>پهپاد عمود پرواز هوشمند</li>
                <li>فاکشن ژیراژتور قابل حمل</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-4">ارتباط با ما</h2>
              <ul className="space-y-2 text-lg leading-7">
                <li>آدرس: رشت، بلوار امام خمینی، نرسیده به میدان فرهنگ</li>
                <li>کوچه شیرمحمدی، فرعی ۱، مرکز نوآوری صنایع خلاق</li>
                <li>تلفن: ۰۱۳۵۴۵۱۳۲۳۳</li>
                <li>ایمیل: info@cetec.com</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-4">آخرین پروژه‌ها</h2>
              <ul className="space-y-2 text-xl">
                <li>
                  <Link href="#" className="hover:text-orange-400 transition">
                    لورم ایپسوم
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-orange-400 transition">
                    لورم ایپسوم
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="flex justify-center gap-6 mt-6 text-2xl">
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-orange-400 transition"
            >
              <FaInstagram />
            </a>
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-orange-400 transition"
            >
              <FaFacebook />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-orange-400 transition"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://t.me"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-orange-400 transition"
            >
              <FaTelegramPlane />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Footer;
