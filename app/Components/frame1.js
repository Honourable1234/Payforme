import React from 'react'
import Image from 'next/image'

export default function frame1() {
  return (
    <div>
      <div className="border border-[#E9F8D8] bg-[#E9F8D8] h-[22px] w-[149px] rounded-[32px] mx-auto mt-[75px] sm:mt-[100px] md:mt[145px] text-[10px] text-[#3B3A3A] flex items-center justify-center gap-[3px]">
        <Image src="/images/Fast.svg" alt="Fast" width={0} height={0}  className="w-[14px]"/>
        <p className="w-[123px]">SECURE. GLOBAL. FAST</p>
      </div>
      <div className="max-w-[920px] pt-[17px] sm:pt-[22px] md:pt-[27px] px-[16px] m-auto">
        <h1 className="font-[cabinet-grotesk] font-bold text-[#2F2F2F] text-center text-[24px] sm:text-[35px] md:text-[52px] lg:text-[64px]">Reliable Payment Solutions for International Education</h1>
        <p className="text-[#666565] text-[14px] md:text-[16px] mt-[18px] md:mt-[24px] text-center max-w-[652px] m-auto">The easiest and fastest way to pay tuition and fees to educational institutions, businesses, and government agencies worldwide.</p>
      </div>
      <div className="mt-[30px] sm:mt-[40px] md:mt-[50px] sm:flex justify-between max-w-[478px] m-auto">
        <button className="text-[#242323] m-auto bg-[#AFE274] border border-[#A4C47D] w-[219px] h-[54px] rounded-[33px] flex text-[16px] justify-center gap-[12px] items-center">
           Download App
           <Image src="/images/Download.svg" alt="Download" width={0} height={0}  className="w-[52px]"/>
        </button>
        <button className="bg-[#F4F8EF] border border-[#AFE274] w-[206px] h-[57px] text-[#242323] m-auto rounded-[33px] flex items-center justify-center mt-[30px] sm:mt-[0px]">
          Watch Demo
          <Image src="/images/playCircle.svg" alt="Play Circle" width={0} height={0}  className="w-[24px]"/>
        </button>
      </div>
      <div className="flex items-center w-[285px] sm:w-[320px] m-auto justify-between mt-[32px]">
        <span className="flex w-[90px]">
          <Image src="/images/Ellipse 1.svg" alt="Play Circle" width={0} height={0}  className="w-[32px]"/>
          <Image src="/images/Ellipse 2.svg" alt="Play Circle" width={0} height={0}  className="w-[32px] ml-[-15px]"/>
          <Image src="/images/Ellipse 3.svg" alt="Play Circle" width={0} height={0}  className="w-[32px] ml-[-15px]"/>
          <Image src="/images/Ellipse 4.svg" alt="Play Circle" width={0} height={0}  className="w-[32px] ml-[-15px]"/>
        </span>
        <p className="text-[12px] text-[#666565] sm:text-[15px] max-w-[234px]">Trusted by 3k+ Students Globally</p>
      </div>
    </div>
  )
}


