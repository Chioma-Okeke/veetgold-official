"use client"

import React from 'react'
import { ArrowUpRight, Snowflake } from 'lucide-react'
import { useRouter } from 'next/navigation'
import { useSeasonStore } from '@/store/useSeason'
import { cn } from '@/lib/utils'

function CustomButton({ animationClassName }: { animationClassName?: string }) {
    const router = useRouter()
    const isChristmas = useSeasonStore((state) => state.isChristmas)

    return (
        <button className='flex items-center group cursor-pointer w-fit relative' onClick={() => router.push("/product-catalog")}>
            <div className='bg-[#CB9E2B] text-white py-[22px] px-10 lg:py-4 lg:px-6 rounded-[64px] cursor-pointer lg:text-xl font-semibold'>Shop Now</div>
            <div className='h-8 w-12 bg-[#CB9E2B] -mx-6'></div>
            <div className='size-[58px] bg-[#CB9E2B] flex items-center justify-center rounded-full'>
                <ArrowUpRight color='white' className='transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-1.5 duration-500 ease-in-out' />
            </div>
            {isChristmas && (
                <>
                    <Snowflake className={cn("absolute top-1/2 -translate-y-1/2 -left-2 currentColor size-4 animate-bounce", animationClassName)} />
                    <Snowflake className={cn("absolute top-2 right-0 currentColor size-4 animate-bounce delay-200", animationClassName)} />
                </>
            )}
        </button>
    )
}

export default CustomButton