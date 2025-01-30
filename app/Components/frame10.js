import React from 'react'
import Image from 'next/image'

export default function frame10() {
  return (
    <div className="bg-white">
      <div className="border border-[#E9F8D8] bg-[#AFE27433] h-[22px] w-[109px] rounded-[32px]  text-[14px] text-[#3B3A3A] flex items-center justify-center gap-[3px] m-auto">
              <Image
                src="/images/Fast.svg"
                alt="Fast"
                width={0}
                height={0}
                className="w-[14px]"
              />
              <p>Blogs</p>
      </div>
      <h2 className="font-bold text-[24px] sm:text-[30px] md:text-[39px] lg:text-[48px] text-[#2F2F2F] max-w-[650px] m-auto mt-[50px] text-center">
          Latest Blog & Resources
      </h2>
    </div>
  )
}
