import React from 'react'
import Image from 'next/image'

export default function Frame7() {
  return (
    <div>
        <Image
                  src="/images/Videodemo.svg"
                  alt="Videodemo"
                  width={0}
                  height={0}
                  className="w-[100%]"
                />
    </div>
  )
}
