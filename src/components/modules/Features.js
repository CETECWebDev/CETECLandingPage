import React from 'react';

function Features() {
  return (
    <section id="services" className="py-16  text-white">
      <div className="container mx-auto px-6">
        <div className="service-top text-center mb-12">
          <h1 className="text-[32px] font-extrabold mb-4">
            کاربردهای هوشمند فناوری‌های ما
          </h1>
        </div>

        <div className="service-bottom grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            { title: 'صنعتی' },
            { title: 'تجاری' },
            { title: 'سازمانی' },
            { title: 'هایتک' }
          ].map((item, index) => (
            <div
              key={index}
              className="service-item bg-[#0B0F2F] text-white p-6 rounded-lg shadow-md text-center border border-orange-500"
            >
              <div className="icon mb-4 flex justify-center">
                <img
                  src="https://img.icons8.com/bubbles/100/000000/services.png"
                  alt="Service Icon"
                />
              </div>
              <h2 className="text-[28px] font-bold mb-2">{item.title}</h2>
              <p className="text-[18px] font-medium text-gray-400">
                به‌کارگیری فناوری‌های هوشمند برای بهینه‌سازی فرآیندها
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Features;
