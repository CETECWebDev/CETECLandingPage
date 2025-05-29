import React from 'react'
import AdvicingDotLayout from './AdvicingDotLayout'

export default function AdvicingCard() {
    return (
        <div className='w-full hidden lg:block'>

            <div className='container py-[88px]'>




                <div className='w-[90%] mr-auto ml-auto h-[250px] bg-[#F8A61C]  rounded-[12px] relative'>

                    <AdvicingDotLayout />

                    <div className='w-[386px] h-[400px] rounded-full overflow-hidden absolute top-[50%] -translate-y-[50%] left-[89px]'>
                        <img src="/advice.png" className='w-full h-full object-cover' alt="" />
                    </div>

                    <div className='absolute top-[46px] left-[763px] overflow-visible'>
                        <img src="/arrow.svg" className='w-full h-full' alt="" />
                    </div>

                    <button className='text-[18px] text-[#FFFFF5] bg-[#35363A] rounded-[12px] p-3  absolute bottom-[50px] left-[567px] '>سامانه ی پیشرفته</button>

                    <div className='pt-[50px] mr-[100px]' >

                        <p className='text-[20px] font-bold'>
                            تماس با ما و مشاوره با کارشناسان فروش
                        </p>
                        <p className='text-[18px] text-[#00000580]'>
                            قبل از خرید با ما مشورت کنید
                        </p>

                    </div>


                </div>


            </div>


        </div>
    )
}
