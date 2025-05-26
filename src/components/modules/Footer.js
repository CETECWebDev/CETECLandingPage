import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-gray-300 py-8" dir="rtl">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <p>© {new Date().getFullYear()} برند من. تمامی حقوق محفوظ است.</p>
      </div>
    </footer>
  );
};

export default Footer;
