import React from 'react'

export default function AdvicingDotLayout({right , top}) {

    const dots = new Array(25).fill("");

  return (
    <div className={`w-[97px] h-[120px] grid grid-cols-5 place-items-center absolute right-[50px] top-[-50px]`}>
        {dots.map( (dot,index) => {
            return <div key={index} className='bg-white w-[5px] h-[5px] rounded-full'></div>
        })}
    </div>
  )
}
