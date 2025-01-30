import React from "react";
import Image from "next/image";

export default function frame8() {
  return (
    <div className="px-[5%] py-[100px] relative">
      <div className="border border-[#E9F8D8] bg-[#AFE27433] h-[22px] w-[109px] rounded-[32px]  text-[14px] text-[#3B3A3A] flex items-center justify-center gap-[3px] relative z-20">
        <Image
          src="/images/Fast.svg"
          alt="Fast"
          width={0}
          height={0}
          className="w-[14px]"
        />
        <p>TESTIMONIALS</p>
      </div>
      <h2 className="font-bold text-[24px] sm:text-[30px] md:text-[39px] lg:text-[48px] text-[#2F2F2F] max-w-[650px] relative z-20">
        Don’t take our words for it, Take theirs.
      </h2>
      <div className="absolute top-[0px] right-[0px]">
        <Image
          src="/images/Testi.svg"
          alt="Frame4"
          width={0}
          height={0}
          className="w-[300px]"
        />
      </div>
    </div>
  );
}
