import React from 'react';

const Footer = () => {
  return (
    <div className="container">
          <footer className=" text-gray-300 py-8" dir="rtl">
      <div className=" px-4 text-center">
        <p>© {new Date().getFullYear()} برند من. تمامی حقوق محفوظ است.</p>
      </div>
    </footer>
      </div>

  );
};

export default Footer;
