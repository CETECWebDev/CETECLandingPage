import React from 'react'

function Symbols() {
  return (
    <section id="services" className="py-16 text-white">
      <div className="container mx-auto px-6">
        <div className="service-top text-center mb-12 mt-8">
          <h1 className="text-[32px] font-extrabold mb-4">
            نمادها
          </h1>
        </div>

        <div className="service-bottom grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">

          {/* Item 1 */}
          <div className="service-item bg-[#0B0F2F] text-white p-6 rounded-lg shadow-md text-center border border-orange-500">
            <div className="icon mb-4 flex justify-center">
              <img src="./about1.jpg" alt="about" />
            </div>
          </div>

          {/* Item 2 */}
          <div className="service-item bg-[#0B0F2F] text-white p-6 rounded-lg shadow-md text-center border border-orange-500">
            <div className="icon mb-4 flex justify-center">
              <img src="./about2.jpg" alt="Service Icon" />
            </div>
          </div>

          {/* Item 3 */}
          <div className="service-item bg-[#0B0F2F] text-white p-6 rounded-lg shadow-md text-center border border-orange-500">
            <div className="icon mb-4 flex justify-center">
              <img src="./about3.jpg" alt="Service Icon" />
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}

export default Symbols
