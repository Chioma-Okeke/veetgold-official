import React from 'react'
import { ArrowUpRight } from 'lucide-react'

function CustomButton() {
  return (
    <div className='flex items-center group cursor-pointer w-fit'>
        <button className='bg-[#CB9E2B] text-white py-[22px] px-10 lg:py-4 lg:px-6 rounded-[64px] cursor-pointer lg:text-xl font-semibold'>Shop Now</button>
        <div className='h-8 w-12 bg-[#CB9E2B] -mx-6'></div>
        <div className='size-[58px] bg-[#CB9E2B] flex items-center justify-center rounded-full'>
            <ArrowUpRight color='white' className='transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-1.5 duration-500 ease-in-out'/>
        </div>
    </div>
  )
}

export default CustomButton