"use client";
import { motion } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";

export default function Scroller() {
  const scrollRef = useRef(null);
  const scroll = (direction) => {
    if (scrollRef.current) {
      const scrollAmount = 450;
      if (direction === "left") {
        scrollRef.current.scrollLeft -= scrollAmount;
      } else {
        scrollRef.current.scrollLeft += scrollAmount;
      }
    }
  };
  return (
    <div className="bg-white px-[5%] h-[650px] pt-[50px] md:pt-[80px]">
      <motion.div
        className="overflow-hidden h-[450px] flex relative"
        ref={scrollRef}
        drag="x"
        dragConstraints={{ right: 0, left: -500 }}
      >
        <div className="w-[376px] rounded-[16px]  h-[420px] absolute">
          <Image
            src="/images/Friends.svg"
            alt="Friends"
            width={0}
            height={0}
            className="w-[376px] rounded-[16px]"
          />
          <p className="text-[18px] sm:text-[22px] w-screen max-w-[376px] text-[#242323] mt-[39px] text-bold ">
            How to Navigate International Payments for Education With Ease
          </p>
          <Image
            src="/images/GreenBall.svg"
            alt="Green Ball"
            width={0}
            height={0}
            className="w-[50px] mt-[24px]"
          />
        </div>
        <div className="w-[376px] rounded-[16px] left-[450px]  h-[420px] absolute">
          <Image
            src="/images/Umbrellas.svg"
            alt="Umbrellas"
            width={0}
            height={0}
            className="w-[376px] rounded-[16px]"
          />
          <p className="text-[18px] sm:text-[22px] w-screen max-w-[376px] text-[#242323] mt-[39px] text-bold ">
            Importance of getting Insurance before traveling
          </p>
          <Image
            src="/images/GreenBall.svg"
            alt="Green Ball"
            width={0}
            height={0}
            className="w-[50px] mt-[24px]"
          />
        </div>
        <div className="w-[376px] rounded-[16px] left-[900px]  h-[420px] absolute">
          <Image
            src="/images/Cash.svg"
            alt="Cash"
            width={0}
            height={0}
            className="w-[376px] rounded-[16px]"
          />
          <p className="text-[18px] sm:text-[22px] w-screen max-w-[376px] text-[#242323] mt-[39px] text-bold ">
            Overcoming Challenges in Foreign Currency Tuition Payments
          </p>
          <Image
            src="/images/GreenBall.svg"
            alt="Green Ball"
            width={0}
            height={0}
            className="w-[50px] mt-[24px]"
          />
        </div>
      </motion.div>
      {/* Left Button */}
      <div className="relative w-[154px] m-auto">
        <button
          className="absolute left-0 bg-[#F6F6F6] w-[47px] h-[47px] text-white rounded-[50%] flex items-center justify-center"
          onClick={() => scroll("left")}
        >
          <Image
            src="/images/LessThan.svg"
            alt="Arrow left"
            width={0}
            height={0}
            className="w-[24px]"
          />
        </button>

        {/* Right Button */}
        <button
          className="absolute right-0 bg-[#F6F6F6] w-[47px] h-[47px] rounded-[50%] flex items-center justify-center"
          onClick={() => scroll("right")}
        >
          <Image
            src="/images/Greater.svg"
            alt="Arrow right"
            width={0}
            height={0}
            className="w-[24px]"
          />
        </button>
      </div>
    </div>
  );
}
