import React from 'react'
import Nav from './nav'
import Frame1 from './frame1'
import Frame2 from './frame2'

export default function hero() {
  return (
    <div className="bg-[#FAFAFA] min-h-screen pt-[20px]">
      <Nav />
      <Frame1 />
      <Frame2 />
    </div>
  )
}

