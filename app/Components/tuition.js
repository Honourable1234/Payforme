import React from 'react'
import Image from 'next/image'

export default function tuition({image1, image2, image3, image4, image5, title, content,image6, customStyle= "", customStyle2= ""}) {
  return (
    <div className={`relative max-w-[459px] p-[40px]  sm:h-[598.97px] rounded-[24px] ${customStyle}`}>
       <Image src={image1} alt="Icon" width={0} height={0} className="w-[50px] sm:w-[64px]"/>
       <p className="text-[#2F2F2F] max-w-[379px] text-[24px] sm:text-[32px] mt-[22px] sm:mt-[32px]">{title}</p>
       <p className="text-[#7D7D7D] text-[13px] sm:text-[16px] max-w-[379px] mt-[16px] sm:mt-[24px]">{content}</p>
       <div className="flex mt-[50px] max-w-[311.94px] gap-[80px] sm:mt-[80px]  relative z-10">
        <Image src={image2} alt="Icon" width={0} height={0} className="w-[50px] sm:w-[131px]"/>
        <Image src={image3} alt="Icon" width={0} height={0} className="w-[50px] sm:w-[131px]"/>
       </div>
       <div className="flex max-w-[202px] mt-[28px] sm:mt-[40px] gap-[80px] relative z-10">
        <Image src={image4} alt="Icon" width={0} height={0} className="w-[50px] sm:w-[66px]"/>
        <Image src={image5} alt="Icon" width={0} height={0} className={`w-[50px] sm:w-[66px] ${customStyle2}`}/>
       </div>
        <Image src={image6} alt="Icon" width={0} height={0} className="w-[176px] absolute right-[0px] bottom-[0px]"/>
    </div>
  )
}
