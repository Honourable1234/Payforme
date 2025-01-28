import React from 'react'
import Image from 'next/image'

export default function frame3() {
  return (
    <div className="bg-[#FFFFFF] pt-[35px] md:pt-[50px] lg:pt-[65px]">
      <p className="text-[14px] md:text-[16px] text-[#848484] text-center">Leading Brands Partner with us</p>
      <div className="flex flex-wrap justify-between w-[100%] md:w-[90%] m-auto mt-[29px]">
        <Image src="/images/Accross.svg" alt="Accross" width={0} height={0}  className="w-[100px] sm:w-[140px] md:w-[178.1px]"/>
        <Image src="/images/Mpower.svg" alt="Mpower" width={0} height={0}  className="w-[100px] sm:w-[140px] md:w-[183.93px]"/>
        <Image src="/images/Prodigy.svg" alt="Prodigy" width={0} height={0}  className="w-[100px] sm:w-[140px] md:w-[178.1px]"/>
        <Image src="/images/Techstars.svg" alt="Techstars" width={0} height={0}  className="w-[100px] sm:w-[140px] md:w-[190.17px]"/>
        <Image src="/images/Stripe.svg" alt="Stripe" width={0} height={0}  className="w-[100px] sm:w-[137px]"/>
        <Image src="/images/Paystack.svg" alt="Paystack" width={0} height={0}  className="w-[100px] sm:w-[140px] md:w-[193.45px]"/>
      </div>
    </div>
  )
}