import React from 'react'

export default function Wave() {
  return (
    // <div className="bg-[url('/wave.svg')] bg-contain bg-center bg-no-repeat h-[400px] ">
    // </div>
    <div>
      {/* موج */}
      <img
        src="/wave.svg"
        alt=""
        className="  w-full pointer-events-none select-none "
      />
    </div>
  );
}
