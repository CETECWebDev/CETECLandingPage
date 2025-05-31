// pages/404.tsx
import Link from 'next/link';

export default function Custom404() {
  return (
    <div className="inset-0 fixed flex flex-col items-center justify-center bg-black text-white text-center p-6">
      <h1 className="text-4xl font-bold mb-4">۴۰۴ - صفحه پیدا نشد</h1>
      <p className="mb-6">صفحه‌ای که دنبالش بودید وجود نداره یا حذف شده.</p>
      <Link href="/">
        بازگشت به صفحه اصلی
      </Link>
    </div>
  );
}
