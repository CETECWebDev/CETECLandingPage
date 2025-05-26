import React from 'react'

function Features() {
  return (
   <section id="services" class="py-16 bg-[#0B0F2F] text-white">
  <div class="container mx-auto px-6">
    <div class="service-top text-center mb-12">
      <h1 class="text-4xl font-bold mb-4">
       کاربردهای هوشمند فناوری های ما
      </h1>
     
    </div>

    <div class="service-bottom grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
      <div class="service-item bg-[#0B0F2F] text-white p-6 rounded-lg shadow-md text-center border border-orange-500">
        <div class="icon mb-4 flex justify-center">
          <img src="https://img.icons8.com/bubbles/100/000000/services.png" alt="Service Icon" />
        </div>
        <h2 class="text-xl font-semibold mb-2">هایتک</h2>
        <p class="text-gray-400">
          به کارگیری فتاوری های هوشمند برای بهینه سازی فناوری هوشمند
        </p>
      </div>

      <div class="service-item bg-[#0B0F2F] text-white p-6 rounded-lg shadow-md text-center border border-orange-500">
        <div class="icon mb-4 flex justify-center">
          <img src="https://img.icons8.com/bubbles/100/000000/services.png" alt="Service Icon" />
        </div>
        <h2 class="text-xl font-semibold mb-2">سازمانی</h2>
        <p class="text-gray-400">
           به کارگیری فتاوری های هوشمند برای بهینه سازی فناوری هوشمند
        </p>
      </div>

      <div class="service-item bg-[#0B0F2F] text-white p-6 rounded-lg shadow-md text-center border border-orange-500">
        <div class="icon mb-4 flex justify-center">
          <img src="https://img.icons8.com/bubbles/100/000000/services.png" alt="Service Icon" />
        </div>
        <h2 class="text-xl font-semibold mb-2">تجاری</h2>
        <p class="text-gray-300">
           به کارگیری فتاوری های هوشمند برای بهینه سازی فناوری هوشمند
        </p>
      </div>

      <div class="service-item bg-[#0B0F2F] text-white p-6 rounded-lg shadow-md text-center border border-orange-500">
        <div class="icon mb-4 flex justify-center">
          <img src="https://img.icons8.com/bubbles/100/000000/services.png" alt="Service Icon" />
        </div>
        <h2 class="text-xl font-semibold mb-2">صنعتی</h2>
        <p class="text-gray-400">
          به کارگیری فتاوری های هوشمند برای بهینه سازی فناوری هوشمند
         </p>
      </div>
    </div>
  </div>
</section>

  )
}

export default Features