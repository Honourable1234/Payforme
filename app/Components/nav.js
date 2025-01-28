"use client";
import {useState} from 'react'
import { FaBars } from "react-icons/fa";
import Image from 'next/image';

export default function nav() {
  const [show, setShow] = useState(false);

  const toggleDropdown = () => {
    setShow((prev) => !prev);
  };
  return (
    <div className="w-[100%] sm:w-[90%] md:w-[80%] m-auto h-[50px] md:h-[72px] bg-[#242323] text-[#fff] flex justify-between items-center rounded-[44px] px-[16px] py-[10px]"> 
      <div> 
        <Image src="/images/Logo.svg" alt="Pay For Logo" width={0} height={0}  className="w-[100px] sm:w-[128px]"/>
      </div>
      <div>
          <ul className="items-center hidden lg:flex w-[339px] justify-around text-[16px] text-[#F6F6F6]"> 
            <li className="hover:text-gray-300 hover:border-b border-[#80BC39] cursor-pointer">Home</li>
            <li className="hover:text-gray-300 hover:border-b border-[#80BC39] cursor-pointer">About</li>
            <li className="hover:text-gray-300 hover:border-b border-[#80BC39] cursor-pointer">Blog</li>
            <li className="hover:text-gray-300 hover:border-b border-[#80BC39] cursor-pointer">Support</li>
          </ul>
      </div> 
      <div>
         <button className=" text-[#242323] bg-[#AFE274] border border-[#A4C47D] w-[219px] h-[54px] rounded-[33px] hidden lg:flex text-[16px] justify-center gap-[12px] items-center">
            Download App
            <Image src="/images/Download.svg" alt="Download" width={0} height={0}  className="w-[52px]"/>
          </button>
      </div> 
      <FaBars size={20} className="cursor-pointer lg:hidden" onClick={toggleDropdown}/>
      {show && (
        <div className="absolute top-[90px] right-0 w-[150px] bg-[#A4C47D] text-white p-4 rounded-lg shadow-lg">
          <ul className="space-y-2">
            <li className="hover:text-gray-300 cursor-pointer">Home</li>
            <li className="hover:text-gray-300 cursor-pointer">About</li>
            <li className="hover:text-gray-300 cursor-pointer">Blog</li>
            <li className="hover:text-gray-300 cursor-pointer">Support</li>
          </ul>
          <button className=" text-[#242323] bg-[#ffff] px-4 py-2 rounded-lg mt-4 text-[12px]">
            Download App
            <Image src="/images/Download.svg" alt="Download" width={0} height={0}  className="w-[30px]"/>
          </button>
        </div>
      )}
    </div>
  )
}

