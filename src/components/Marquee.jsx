import React from 'react'

const Marquee = () => {
  return (
    <div className="h-20 overflow-hidden bg-[#F6F8D5] text-6xl text-gray-400 whitespace-nowrap relative">
      <div className="flex w-max animate-marquee space-x-10">
        <span>MemoTag • Memory Support • Dementia Care •</span>
        <span>MemoTag • Memory Support • Dementia Care •</span>
      </div>
    </div>
  )
}

export default Marquee
