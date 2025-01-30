import React from 'react'
import Image from 'next/image'
import * as motion from "motion/react-client";

export default function frame2() {
  return (
    <div className="pt-[46px] sm:pt-[66.79px] max-w-[1000px] m-auto overflow-x-hidden w-screen">
      <div className="flex justify-center items-center">
        <Image src="/images/Lady.svg" alt="Lady" width={0} height={0}  className="w-[300px] sm:w-[450px] md:w-[837px] absolute m-auto"/>
        <div className="bg-[#EAF7DB] w-[250px] sm:w-[380px] md:w-[670px] h-[250px] sm:h-[380px] md:h-[670px] rounded-[50%] m-auto">
          <motion.div  initial={{ y: 0 }} animate={{ y: [0, -10, 0] }} transition={{ duration: 2, ease: "easeInOut", repeat: Infinity, repeatType: "loop"}} className="w-[98.66px] md:w-[158.66px] mt-[40px] sm:mt-[70px] md:mt-[150px] ml-[-30px] md:ml-[-45px]">
            <Image src="/images/Backed.svg" alt="Backed" width={0} height={0}  className="w-[98.66px] md:w-[158.66px] m-auto"/>
          </motion.div>
          <motion.div  initial={{ y: 0 }} animate={{ y: [0, -10, 0] }} transition={{ duration: 2, ease: "easeInOut", repeat: Infinity, repeatType: "loop"}} className="w-[97.66px] sm:w-[147.66px] md:w-[227.66px] mt-[40px] sm:mt-[120px] md:mt-[220px] ml-[-30px] sm:ml-[-80px] md:ml-[-60px] lg:ml-[-120px]">
            <Image src="/images/Google.svg" alt="Google" width={0} height={0}  className="w-[97.66px] sm:w-[147.66px] md:w-[227.66px] m-auto"/>
          </motion.div>
          <motion.div  initial={{ y: 0 }} animate={{ y: [0, -10, 0] }} transition={{ duration: 2, ease: "easeInOut", repeat: Infinity, repeatType: "loop"}} className="absolute w-[167px] sm:w-[237px] md:w-[297px] ml-[110px] sm:ml-[290px] md:ml-[400px] lg:ml-[550px] mt-[-150px] lg:mt-[-250px]">
            <Image src="/images/Balance.svg" alt="Balance" width={0} height={0}  className="absolute w-[97.66px] sm:w-[147.66px] md:w-[227.66px] m-auto"/>
          </motion.div>
        </div>
      </div>
      <div className="bg-[#EAF7DB] w-[100%] sm:w-[90%] m-auto h-[19px] sm:h-[29px] lg:w-[100%] md:h-[39px] rounded-[8px] z-10 relative"></div>
    </div>
  )
}


