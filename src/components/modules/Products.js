import React from "react";

function Products() {
  return (
    <div className="container">
      <section className="py-16  text-white" dir="rtl">
        <div className="container mx-auto px-6 text-center mb-16">
          <h1 className="text-[32px] font-extrabold mb-4">
            محصولات قطب دانش (CETEC)
          </h1>
          <p className="text-[20px] font-medium text-white">
            برخی از قوی‌ترین محصولات هوشمند و نرم‌افزاری قطب دانش (CETEC)
          </p>
        </div>

        <div className="grid md:grid-cols-2 items-center gap-8 mb-20">
          <div className="flex flex-row items-center justify-start gap-4">
            <div className="w-[6px] h-80 bg-orange-500 rounded" />
            <div>
              <p
                className="text-[22px] font-medium text-orange-500 tracking-wider"
                style={{ writingMode: "vertical-rl", textOrientation: "mixed" }}
              >
                smart vertical take_off drone
              </p>
            </div>
            <div className="bg-[#00143B] rounded-xl p-6 w-full max-w-xs text-center">
              <img src="/img1.jpg" alt="drone" className="mx-auto h-24 mb-4" />
              <p className="text-[10px] font-normal text-green-600">
                پهپاد عمود پرواز هوشمند
              </p>
              <p className="text-[24px] font-semibold text-green-400 mt-1">
                ورژن ۱.۲
              </p>
            </div>
          </div>
          <div>
            <h2 className="text-[32px] font-semibold mb-2">
              پهپاد عمود پرواز هوشمند{" "}
              <span className="text-green-500">ورژن ۱.۲</span>
            </h2>
            <p className="text-[24px] font-medium text-gray-300 leading-relaxed mb-6">
              این محصول اولین نسل پهپادهای هوشمند عمودپرواز تولید شده در ایران
              است. دارای بخش کنترل پرواز پیشرفته‌ای است که آن را برای کاربردهای
              بسیاری از جمله امداد و نجات، مدیریت بحران، بازرسی و امنیت و
              سامانه‌های مدار بسته و... مناسب می‌سازد. به راحتی تنظیم و
              راه‌اندازی می‌شود.
            </p>
            <button
              className="text-[18px] font-medium mt-8
        inner-orange-shadow    px-6 py-2 rounded-lg hover:bg-[var(--dark-light-primary)] hover:text-white transition"
            >
              اطلاعات بیشتر{" "}
            </button>
          </div>
        </div>

        {/* محصول ۲ */}
        <div className="grid md:grid-cols-2 items-center gap-8  mx-auto mb-20">
          <div>
            <h2 className="text-[32px] font-semibold mb-2">
              پهپاد عمود پرواز هوشمند{" "}
              <span className="text-[32px] font-semibold text-gray-400">
                ورژن ۱.۲
              </span>
            </h2>
            <p className="text-[24px] font-medium text-gray-300 leading-relaxed mb-6">
              این محصول اولین نسل پهپادهای هوشمند عمودپرواز تولید شده در ایران
              است. دارای بخش کنترل پرواز پیشرفته‌ای است که آن را برای کاربردهای
              بسیاری از جمله امداد و نجات، مدیریت بحران، بازرسی و امنیت و
              سامانه‌های مدار بسته و... مناسب می‌سازد. به راحتی تنظیم و
              راه‌اندازی می‌شود.
            </p>
            <button
              className="text-[18px] font-medium mt-8
        inner-orange-shadow    px-6 py-2 rounded-lg hover:bg-[var(--dark-light-primary)] hover:text-white transition"
            >
              اطلاعات بیشتر{" "}
            </button>
          </div>

          <div className="flex flex-row-reverse items-center justify-start gap-4">
            <div className="w-[6px] h-80  bg-orange-500 rounded left-0" />
            <div>
              <p
                className="text-[22px] font-medium text-orange-400 tracking-wider"
                style={{ writingMode: "vertical-rl", textOrientation: "mixed" }}
              >
                smart vertical take_off drone
              </p>
            </div>
            <div className="bg-[#00143B] rounded-xl p-6 w-full max-w-xs text-center">
              <img src="/img1.jpg" alt="drone" className="mx-auto h-24 mb-4" />
              <p className="text-[20px] font-normal">پهپاد عمود پرواز هوشمند</p>
              <p className="text-[24px] font-medium text-green-600">ورژن ۱.۲</p>
            </div>
          </div>
        </div>

        {/* محصول ۳ */}
        <div className="grid md:grid-cols-2 items-center gap-8 mx-auto mb-20">
          <div className="flex flex-row items-center justify-start gap-4">
            <div className="w-[6px] h-80 bg-orange-500 rounded" />
            <div>
              <p
                className="text-[22px] font-medium text-orange-500 tracking-wider"
                style={{ writingMode: "vertical-rl", textOrientation: "mixed" }}
              >
                smart vertical take_off drone
              </p>
            </div>
            <div className="bg-[#00143B] rounded-xl p-6 w-full max-w-xs text-center">
              <img src="/img1.jpg" alt="drone" className="mx-auto h-24 mb-4" />
              <p className="text-[10px] font-normal text-green-600">
                پهپاد عمود پرواز هوشمند
              </p>
              <p className="text-[24px] font-semibold text-green-400 mt-1">
                ورژن ۱.۲
              </p>
            </div>
          </div>
          <div>
            <h2 className="text-[32px] font-semibold mb-2">
              پهپاد عمود پرواز هوشمند{" "}
              <span className="text-green-500">ورژن ۱.۲</span>
            </h2>
            <p className="text-[24px] font-medium text-gray-300 leading-relaxed mb-6">
              این محصول اولین نسل پهپادهای هوشمند عمودپرواز تولید شده در ایران
              است. دارای بخش کنترل پرواز پیشرفته‌ای است که آن را برای کاربردهای
              بسیاری از جمله امداد و نجات، مدیریت بحران، بازرسی و امنیت و
              سامانه‌های مدار بسته و... مناسب می‌سازد. به راحتی تنظیم و
              راه‌اندازی می‌شود.
            </p>
            <button
              className="text-[18px] font-medium mt-8
        inner-orange-shadow    px-6 py-2 rounded-lg hover:bg-[var(--dark-light-primary)] hover:text-white transition"
            >
              اطلاعات بیشتر{" "}
            </button>
          </div>
        </div>

        {/* محصول ۴ */}
        {/* محصول ۲ */}
        <div className="grid md:grid-cols-2 items-center gap-8 mx-auto mb-20">
          <div>
            <h2 className="text-[32px] font-semibold mb-2">
              پهپاد عمود پرواز هوشمند{" "}
              <span className="text-[32px] font-semibold text-gray-400">
                ورژن ۱.۲
              </span>
            </h2>
            <p className="text-[24px] font-medium text-gray-300 leading-relaxed mb-6">
              این محصول اولین نسل پهپادهای هوشمند عمودپرواز تولید شده در ایران
              است. دارای بخش کنترل پرواز پیشرفته‌ای است که آن را برای کاربردهای
              بسیاری از جمله امداد و نجات، مدیریت بحران، بازرسی و امنیت و
              سامانه‌های مدار بسته و... مناسب می‌سازد. به راحتی تنظیم و
              راه‌اندازی می‌شود.
            </p>
            <button
              className="text-[18px] font-medium mt-8
        inner-orange-shadow    px-6 py-2 rounded-lg hover:bg-[var(--dark-light-primary)] hover:text-white transition"
            >
              اطلاعات بیشتر{" "}
            </button>
          </div>

          <div className="flex flex-row-reverse items-center justify-start gap-4">
            <div className="w-[6px] h-80  bg-orange-500 rounded left-0" />
            <div>
              <p
                className="text-[22px] font-medium text-orange-400 tracking-wider"
                style={{ writingMode: "vertical-rl", textOrientation: "mixed" }}
              >
                smart vertical take_off drone
              </p>
            </div>
            <div className="bg-[#00143B] rounded-xl p-6 w-full max-w-xs text-center">
              <img src="/img1.jpg" alt="drone" className="mx-auto h-24 mb-4" />
              <p className="text-[20px] font-normal">پهپاد عمود پرواز هوشمند</p>
              <p className="text-[24px] font-medium text-green-600">ورژن ۱.۲</p>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 items-center gap-8  mx-auto mb-20">
          <div className="flex flex-row items-center justify-start gap-4">
            <div className="w-[6px] h-80 bg-orange-500 rounded" />
            <div>
              <p
                className="text-[22px] font-medium text-orange-500 tracking-wider"
                style={{ writingMode: "vertical-rl", textOrientation: "mixed" }}
              >
                smart vertical take_off drone
              </p>
            </div>
            <div className=" rounded-xl p-6 w-full max-w-xs text-center">
              <img src="/img1.jpg" alt="drone" className="mx-auto h-24 mb-4" />
              <p className="text-[10px] font-normal text-green-600">
                پهپاد عمود پرواز هوشمند
              </p>
              <p className="text-[24px] font-semibold text-green-400 mt-1">
                ورژن ۱.۲
              </p>
            </div>
          </div>
          <div>
            <h2 className="text-[32px] font-semibold mb-2">
              پهپاد عمود پرواز هوشمند{" "}
              <span className="text-green-500">ورژن ۱.۲</span>
            </h2>
            <p className="text-[24px] font-medium text-gray-300 leading-relaxed mb-6">
              این محصول اولین نسل پهپادهای هوشمند عمودپرواز تولید شده در ایران
              است. دارای بخش کنترل پرواز پیشرفته‌ای است که آن را برای کاربردهای
              بسیاری از جمله امداد و نجات، مدیریت بحران، بازرسی و امنیت و
              سامانه‌های مدار بسته و... مناسب می‌سازد. به راحتی تنظیم و
              راه‌اندازی می‌شود.
            </p>
            <button
              className="text-[18px] font-medium mt-8
        inner-orange-shadow    px-6 py-2 rounded-lg hover:bg-[var(--dark-light-primary)] hover:text-white transition"
            >
              اطلاعات بیشتر{" "}
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Products;
