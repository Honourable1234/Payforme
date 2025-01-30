import React from 'react'
import Image from 'next/image'

export default function button({text, imageUrl}) {
  return (
    <div className="bg-black w-[158px] h-[56px] rounded-[40px] flex justify-center gap-[10px] items-center m-auto">
        <div>
        <Image src={imageUrl} alt="Less Than Icon" className="m-auto" width={24} height={24}/>
        </div>
        <div className="h-[32px] leading-tight">
            <p className="text-[10px]">Download on</p>
            <p>{text}</p>
        </div> 
    </div>
  )
}
