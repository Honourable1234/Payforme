"use client";
import { motion } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";

export default function Scroller() {
  const scrollRef = useRef(null);
  const scroll = (direction) => {
    if (scrollRef.current) {
      const scrollAmount = 400;
      if (direction === "left") {
        scrollRef.current.scrollLeft -= scrollAmount;
      } else {
        scrollRef.current.scrollLeft += scrollAmount;
      }
    }
  };
  return (
    <div className="bg-white px-[5%]">
      <motion.div
        className="overflow-hidden h-[500px] flex relative"
        ref={scrollRef}
        drag="x"
        dragConstraints={{ right: 0, left: -500 }}
      >
        <div className="w-[347px] rounded-[16px] bg-[url('/images/Adewale.svg')]  h-[375px] absolute p-[20px]">
           <p className="text-[24px] text-[#FFFFFF] mt-[270px]">Jimmy Adewale</p>
           <p className="text-[14px] text-[#EBEBEB]">Entrepreneur</p>
        </div>
        <div className="w-[347px] rounded-[16px] bg-[url('/images/Nicole.svg')] left-[400px]  h-[375px] absolute p-[20px]">
           <p className="text-[24px] text-[#FFFFFF] mt-[270px]">Palmer Nicole</p>
           <p className="text-[14px] text-[#EBEBEB]">Phd Student</p>
        </div>
        <div className="w-[347px] rounded-[16px] bg-[url('/images/Adams.svg')] left-[800px]  h-[375px] absolute p-[20px]">
           <p className="text-[24px] text-[#FFFFFF] mt-[270px]">Hannah Adams</p>
           <p className="text-[14px] text-[#EBEBEB]">Senior Therapist</p>
        </div>
        <div className="w-[347px] rounded-[16px] bg-[url('/images/Brown.svg')] left-[1200px] h-[375px] absolute p-[20px]">
           <p className="text-[24px] text-[#FFFFFF] mt-[270px]">Lex Brown</p>
           <p className="text-[14px] text-[#EBEBEB]">Masters Student</p>
        </div>
      </motion.div>
      {/* Left Button */}
      <div className="relative mt-[-330px]">
      <button
        className="absolute left-0 top-1/2 bg-[#F6F6F6] w-[47px] h-[47px] text-white rounded-[50%] flex items-center justify-center"
        onClick={() => scroll("left")}
      >
         <Image src="/images/LessThan.svg" alt="Arrow left" width={0} height={0}  className="w-[24px]"/>
      </button>

      {/* Right Button */}
      <button
        className="absolute right-0 top-1/2 bg-[#F6F6F6] w-[47px] h-[47px] rounded-[50%] flex items-center justify-center"
        onClick={() => scroll("right")}
      >
        <Image src="/images/Greater.svg" alt="Arrow right" width={0} height={0}  className="w-[24px]"/>
      </button>
      </div>
    </div>
  );
}
