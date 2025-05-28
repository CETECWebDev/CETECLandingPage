import React from 'react'

export default function Wave() {
  return (
    <div className="w-full overflow-hidden h-[200px] sm:h-[300px]">
      <img
        src="wave.svg"
        alt=""
        className="w-[150%] sm:w-full h-full object-cover object-center"
      />
    </div>
  );
}
