import React from "react";
import Image from "next/image";

export default function frame9() {
  return (
    <div className="bg-white px-[5%] py-[80px]">
      <div className="border border-[#E9F8D8] bg-[#AFE27433] h-[22px] w-[109px] rounded-[32px]  text-[14px] text-[#3B3A3A] flex items-center justify-center gap-[3px] relative z-20">
        <Image
          src="/images/Fast.svg"
          alt="Fast"
          width={0}
          height={0}
          className="w-[14px]"
        />
        <p>FAQS</p>
      </div>
      <h2 className="font-bold text-[24px] sm:text-[30px] md:text-[39px] lg:text-[48px] text-[#2F2F2F] max-w-[650px] relative z-20">
        Got Questions?
      </h2>
      <p className="text-[12px] sm:text-[15px] md:text-[19px] lg:text-[24px] text-[#7D7D7D]">We’ve got answers</p>
      <div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
}
