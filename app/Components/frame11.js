import React from "react";
import Image from "next/image";
import Button from "./button";

export default function frame11() {
  return (
    <div className="px-[5%] bg-white pt-[50px] sm:pt-[70px] md:pt-[100px]">
      <div className="bg-[#EDF5E2] w-full px-[30px] sm:px-[90px] md:px-[117px] py-[53px] rounded-[32px] flex flex-wrap justify-between items-center gap-[50px] relative">
        <div className="m-auto relative z-10">
          <h2 className="font-bold text-[18px] sm:text-[20px] md:text-[26px] lg:text-[36px] text-[#2F2F2F] max-w-[535px] mt-[50px]">
            Download the Pay4Me App Today!
          </h2>
          <p className="text-[#7D7D7D] text-[12px] sm:text-[14px] md:text-[16px] max-w-[370px] mt-[16px] sm:mt-[24px] md:mt-[32px]">
            Our custom QR code will take you to your app store to download our
            awesome native apps
          </p>
          <div className="flex flex-wrap max-w-[332px] justify-between mt-[38px]">
            <Button imageUrl="./images/Apple.svg" text="Appstore" />
            <Button imageUrl="./images/Playstore.svg" text="Playstore" />
          </div>
        </div>
        <div className="m-auto relative z-10">
          <Image
            src="/images/QRcode2.svg"
            alt="QR code"
            width={0}
            height={0}
            className="w-[396.5px]"
          />
        </div>
        <div className="absolute top-[10px] right-[0px]">
          <Image
            src="/images/Frame4img.svg"
            alt="Frame4"
            width={0}
            height={0}
            className="w-[530px]"
          />
        </div>
      </div>
    </div>
  );
}
