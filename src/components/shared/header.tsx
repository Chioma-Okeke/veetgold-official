"use client"

import React from 'react'
import Logo from './logo'
import { HEADER_URLS } from '@/constants'
import Link from 'next/link'
import { cn } from '@/lib/utils'
import { usePathname } from 'next/navigation'

function Header() {

    const pathname = usePathname()

    return (
        <header className='px-[100px] py-6 bg-black/33 text-white'>
            <div className='flex items-center gap-32'>
                <Logo variant="default" />
                <nav>
                    <ul className='flex items-center gap-8'>
                        {HEADER_URLS.map((item) => {
                            return (
                                <Link
                                    className={cn("pb-1.5 border-b border-b-transparent hover:border-b-[#FADF80] transition-colors ease-in-out duration-300", { 'border-b-[#FADF80] text-[#FADF80]': pathname === item.link })}
                                    href={item.link} key={item.label}
                                >
                                    {item.label}
                                </Link>
                            )
                        })}
                    </ul>
                </nav>
            </div>
        </header>
    )
}

export default Header