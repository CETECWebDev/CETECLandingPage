export default function Hero() {
  return (
    <section className="bg-[#0B0F2F] text-white py-20 text-center px-6">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-2xl md:text-5xl font-bold leading-relaxed md:whitespace-nowrap">
         <span className="text-orange-400"> قطب دانش</span> دروازه ی ورود به دنیای دیجیتال و هوشمندسازی
        </h1>
        <p className="text-gray-300 mt-6 leading-loose">
          پلتفرمی جامع برای شناسایی، تشخیص، شمارش، احراز هویت، ردیابی، هدایت و مسیریابی هوشمند
          مبتنی بر تحلیل انواع جریان داده‌ها به صورت برخط براساس هوش مصنوعی و یادگیری عمیق
        </p>
        <button className="mt-8 bg-[#1A1D47] text-orange-400 border border-orange-400 px-6 py-2 rounded-lg hover:bg-orange-500 hover:text-white transition">
          سامانه ی پیشرفته
        </button>
      </div>
    </section>
  );
}
