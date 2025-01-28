import React from 'react'
import Image from 'next/image'

export default function accessibility({imageUrl, title, content}) {
  return (
    <div className="bg-white rounded-[12px] max-w-[355px] p-[15px] sm:p-[32px] mt-[50px] z-10">
      <Image src={imageUrl} alt="Icon" width={0} height={0} className="w-[36px] sm:w-[48px]"/>
      <p className="text-[#2F2F2F] font-bold text-[16px] sm:text-[20px] sm:mt-[48px]">{title}</p>
      <p className="text-[10px] sm:text-[14px] text-[#7D7D7D] mt-[5px] sm:mt-[32px]">{content}</p>
      <button className="flex w-[140px] h-[40px] rounded-[33px] bg-[#AFE274] border-[#A4C47D] justify-center items-center text-[12px] gap-[8px] mt-[15px]">
        Download App
        <Image src="/images/sDownload.svg" alt="Download" width={0} height={0}  className="w-[16px]"/>
      </button>
    </div>
  )
}
