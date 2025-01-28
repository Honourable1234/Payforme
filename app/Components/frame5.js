import React from 'react'
import Image from "next/image"
import Steps from "./steps"

export default function frame5() {
  return (
    <div className="bg-[#FAFAFA] pt-[75px] sm:pt-[100px] md:pt[145px]">
      <div className="border border-[#E9F8D8] bg-[#E9F8D8] h-[22px] w-[109px] rounded-[32px] mx-auto text-[10px] text-[#3B3A3A] flex items-center justify-center gap-[3px]">
        <Image src="/images/Fast.svg" alt="Fast" width={0} height={0}  className="w-[14px]"/>
        <p className="w-[95px]">HOW IT WORKS</p>
      </div>
      <h2 className="font-bold text-[#2F2F2F] text-[22px] text-center">4 Simple Steps to Get Started</h2>
      <div className="flex flex-wrap justify-center gap-[56px]">
        <Steps 
          number = "1."
          title= "Download the Mobile App"
          content="Get started by downloading our mobile app, available on iOS and Android."
          imageUrl="images/QRcode.svg"
        />
        <Steps 
          number = "2."
          title= "Sign up on the app."
          content="Sign up with your details, verify your identity, and set up your payment preferences."
          imageUrl="images/Signup..svg"
        />
      </div>
      <div className="flex flex-wrap justify-center gap-[56px]">
      <Steps 
          number = "3."
          title= "Setup Payment Details"
          content="Securely link your local bank account or mobile wallet to the Pay4me app."
          imageUrl="images/Setup.svg"
        />
        <Steps 
          number = "4."
          title= "Complete Your Payment."
          content="Choose your preferred payment method and finalize the transaction securely."
          imageUrl="images/Complete.svg"
        />
      </div>
      <button className="text-[#242323] mt-[35px] sm:mt-[64px] m-auto bg-[#AFE274] border border-[#A4C47D] w-[219px] h-[54px] rounded-[33px] flex text-[16px] justify-center gap-[12px] items-center">
        Download App
        <Image src="/images/Download.svg" alt="Download" width={0} height={0}  className="w-[52px]"/>
      </button>
    </div>
  )
}
