import React from 'react'
import Image from 'next/image'

export default function steps({imageUrl, title, content, number}) {
  return (
    <div className="bg-white rounded-[12px] max-w-[437px] max-h-[510px] p-[15px] sm:p-[32px] mt-[50px]">
      <p className="text-[#000000]">{number}</p>
      <p className="text-[#2F2F2F] font-bold text-[16px] sm:text-[24px] mt-[30px] sm:mt-[48px]">{title}</p>
      <p className="text-[10px] sm:text-[16px] text-[#7D7D7D] mt-[18px] sm:mt-[32px]">{content}</p>
      <Image src={imageUrl} alt="Icon" width={0} height={0} className="w-[269.69px] mt-[30px] sm:mt-[48px] m-auto"/>
    </div>
  )
}