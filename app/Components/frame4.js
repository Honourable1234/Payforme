import React from 'react'
import Image from 'next/image'
import Accessibility from './accessibility'

export default function frame4() {
  return (
    <div className="bg-[#E7FBCF] min-h-[500px] xl:h-[809px] max-w-[1286px] m-auto rounded-[32px] mt-[40px] sm:mt-[60px] md:mt-[80px] pt-[75px] sm:pt-[100px] md:pt[126px] px-[29px] md:px-[69px] relative">
      <div className="border border-[#E9F8D8] bg-[#AFE27433] h-[22px] w-[109px] rounded-[32px]  text-[14px] text-[#3B3A3A] flex items-center justify-center gap-[3px] relative z-20">
        <Image src="/images/Fast.svg" alt="Fast" width={0} height={0}  className="w-[14px]"/>
        <p>Features</p>
      </div>
      <h2 className="relative font-bold text-[#2F2F2F] text-[22px] sm:text-[34px] md:text-[48px] z-20">What Truly sets us apart</h2>
      <div className="flex flex-wrap justify-around pb-[100px]">
      <Accessibility
      imageUrl="./images/Icon1.svg"
      title="Global Accessibility" 
      content="Effortlessly send tuition and other payments to educational institutions worldwide, no matter where you are."/>
      <Accessibility
      imageUrl="./images/Icon2.svg"
      title="Fast & Reliable Transactions" 
      content="Ensure your payments are processed quickly, helping you meet important deadlines without stress."/>
      <Accessibility
      imageUrl="./images/Icon3.svg"
      title="Secure & Transparent" 
      content="Enjoy peace of mind with secure payment processing and complete transparency on fees and conversion rates."/>
       <div className="absolute top-[10px] right-[0px]">
        <Image src="/images/Frame4img.svg" alt="Frame4" width={0} height={0}  className="w-[600px]"/>
      </div>
      </div>
    </div>
  )
}
