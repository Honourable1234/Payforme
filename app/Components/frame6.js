import React from "react";
import Image from "next/image";
import Tuition from "./tuition";

export default function frame6() {
  return (
    <div className="bg-[#0E0E0E] min-h-[500px] relative py-[75px] sm:py-[100px] md:pt[145px]">
      <Image
        src="/images/BraceL.svg"
        alt="Fast"
        width={0}
        height={0}
        className="absolute left-[0px] w-[150px] sm:w-[250px] md:w-[400px]"
      />
      <Image
        src="/images/BraceR.svg"
        alt="Fast"
        width={0}
        height={0}
        className="absolute right-[0px] top-[26px] w-[150px] sm:w-[250px] md:w-[400px]"
      />
      <div className="border border-[#E9F8D8] bg-[#E9F8D8] h-[22px] w-[129px] rounded-[32px] mx-auto  text-[10px] text-[#3B3A3A] flex items-center justify-center gap-[3px]">
        <Image
          src="/images/Fast.svg"
          alt="Fast"
          width={0}
          height={0}
          className="w-[14px]"
        />
        <p className="w-[93px]">WHAT WE OFFER</p>
      </div>
      <h2 className="font-bold text-[#FDFDFD] text-[24px] sm:text-[30px] md:text-[39px] lg:text-[48px] max-w-[767px] w-[90%] text-center m-auto mt-[20px] sm:mt-[32px]">
        Simplified Payments for Your Relocation Dreams
      </h2>
      <div className="mt-[50px] sm:mt-[80px] flex flex-wrap justify-center gap-[64px]">
        <Tuition
          customStyle="bg-[#FFFBE4]"
          image1="./images/YellowLightening.svg"
          image2="./images/Stanford.svg"
          image3="./images/Ghana.svg"
          image4="./images/BYU.svg"
          image5="./images/Unilag.svg"
          image6="./images/BraceY.svg"
          title="Super fast tuition and school fees payments"
          content="Seamlessly pay local and international educational expenses using our fast and convenient online payments platform from the comfort of your home."
        />
        <Tuition
          customStyle="bg-[#E7F8FF]"
          customStyle2="hidden"
          image1="./images/Blue$.svg"
          image2="./images/Sevis.svg"
          image3="./images/Applications.svg"
          image4="./images/WES.svg"
          image5="./images/WES.svg"
          image6="./images/BraceB.svg"
          title="Pay for SEVIS, WES, Visa Applications & More"
          content="We help you get closer to your study abroad and relocation goals faster by promptly completing your payment orders for credential evaluation, immigration, and visa purposes."
        />
      </div>
      <button className="text-[#242323] mt-[35px] sm:mt-[64px] m-auto bg-[#AFE274] border border-[#A4C47D] w-[219px] h-[54px] rounded-[33px] flex text-[16px] justify-center gap-[12px] items-center">
        Download App
        <Image
          src="/images/Download.svg"
          alt="Download"
          width={0}
          height={0}
          className="w-[52px]"
        />
      </button>
    </div>
  );
}
