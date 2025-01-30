import React from "react";
import Image from "next/image";
import Button from "./button";

export default function Footer() {
  return (
    <div className="bg-white pt-[60px]">
      <div className="bg-white px-[5%] flex flex-wrap justify-between py-[40px] gap-[40px]">
        <div className="m-auto">
          <Image
            src="/images/PayForMe.svg"
            alt="Pay For Logo"
            width={0}
            height={0}
            className="w-[100px] sm:w-[128px]"
          />
          <span className="flex gap-[5px] text-[#5D5D5D] mt-[24px]">
            <Image
              src="/images/mail.svg"
              alt="Pay For Logo"
              width={0}
              height={0}
              className="w-[22px]"
            />
            <p className="text-[14px]">support@pay4me.app</p>
          </span>
          <span className="flex gap-[10px] mt-[24px]">
            <Image
              src="/images/IG.svg"
              alt="Instagram"
              width={0}
              height={0}
              className="w-[32px]"
            />
            <Image
              src="/images/X.svg"
              alt="Twitter"
              width={0}
              height={0}
              className="w-[32px]"
            />
            <Image
              src="/images/FB.svg"
              alt="Facebook"
              width={0}
              height={0}
              className="w-[32px]"
            />
            <Image
              src="/images/Tik.svg"
              alt="Tiktok"
              width={0}
              height={0}
              className="w-[32px]"
            />
            <Image
              src="/images/YT.svg"
              alt="Youtube"
              width={0}
              height={0}
              className="w-[32px]"
            />
          </span>
        </div>
        <div className="flex flex-wrap text-[#5D5D5D] font-light w-[500px] justify-between leading-loose m-auto">
          <span>
            <p className="text-[#2F2F2F] font-bold">Company</p>
            <ul>
              <li>About</li>
              <li>Blog</li>
              <li>How it Works</li>
              <li>Careers</li>
            </ul>
          </span>
          <span>
            <p className="text-[#2F2F2F] font-bold">Company</p>
            <ul>
              <li>About</li>
              <li>Blog</li>
              <li>How it Works</li>
              <li>Careers</li>
            </ul>
          </span>
          <span>
            <p className="text-[#2F2F2F] font-bold">Company</p>
            <ul>
              <li>About</li>
              <li>Blog</li>
              <li>How it Works</li>
              <li>Careers</li>
            </ul>
          </span>
        </div>
        <div className="max-w-[350px] m-auto">
          <div className="flex flex-wrap gap-[10px]">
            <Button imageUrl="./images/Apple.svg" text="Appstore" />
            <Button imageUrl="./images/Playstore.svg" text="Playstore" />
          </div>
          <p className="text-[#5D5D5D] font-light mt-[16px]">
            Depending on your mobile device, download our awesome native app to
            start enjoying all the benefits of pay4Me.
          </p>
        </div>
      </div>
      <div className="border-y h-[100px] w-[90%] m-auto flex items-center justify-center">
        <p className="text-[#7D7D7D]  font-light">© 2020 - 2024 Pay4Me, Inc.</p>
      </div>
      <div className="bg-white w-[90%] m-auto hidden sm:flex items-center gap-[50px]">
        <Image
          src="/images/Frame4img.svg"
          alt="Frame4"
          width={0}
          height={0}
          className="w-[94px]"
        />
        <p className="text-[12px] text-[#666565]">
          Pay4Me is a financial technology company making it easier for
          international students and immigrants to pay their tuition and fees in
          minutes. We offer our products and services in partnership with
          licensed transmitters and banking partners in their respective
          jurisdictions. All trademarks, logos, and brand names are the property
          of their respective owners. All company, product, and service names
          used on this website are for identification purposes only. Use of
          these names, trademarks and brands do not imply endorsement.
        </p>
      </div>
    </div>
  );
}
