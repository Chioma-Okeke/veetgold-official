"use client"

import React from 'react'
import Logo from './logo'
import { HEADER_URLS } from '@/constants'
import Link from 'next/link'
import { cn } from '@/lib/utils'
import { usePathname } from 'next/navigation'
import { MenuIcon, Search01 } from '@/icons'
import { useWindowWidth } from '@/hooks/use-width'

function Header() {
    const width = useWindowWidth()
    const pathname = usePathname()

    return (
        <header className='z-50 w-full absolute top-0 left-0 p-4 lg:px-[100px] lg:py-6 lg:bg-black/33 text-white'>
            <div className='flex items-center justify-between'>
                <div className='flex items-center lg:gap-32'>
                    <Link href="/">
                        <Logo variant={(pathname === "/about-us" && width && width < 1024) ? "colored" : "default"} />
                    </Link>
                    <nav className='hidden lg:block'>
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
                <Search01 className='hidden lg:block size-6' />
                <MenuIcon className='lg:hidden size-6 md:size-8' />
            </div>
        </header>
    )
}

export default Header