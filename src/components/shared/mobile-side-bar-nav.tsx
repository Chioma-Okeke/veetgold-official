"use client"

import React, { useEffect, useRef, useState } from 'react'
import { usePathname } from 'next/navigation'
import { FacebookIcon, Menu as MenuIcon, X as XIcon } from 'lucide-react'
import Link from 'next/link'
import { CONTACT_DATA, HEADER_URLS } from '@/constants'
import { cn } from '@/lib/utils'
import { motion, AnimatePresence } from 'framer-motion'
import { InstagramIcon, Mail02 } from '@/icons'

function MobileSideBarNav() {
    const pathname = usePathname()
    const [open, setOpen] = useState(false)
    const triggerRef = useRef<HTMLButtonElement | null>(null)
    const panelRef = useRef<HTMLDivElement | null>(null)

    useEffect(() => {
        if (open) {
            const originalStyle = window.getComputedStyle(document.body).overflow
            document.body.style.overflow = 'hidden'
            return () => {
                document.body.style.overflow = originalStyle
            }
        }
    }, [open])

    useEffect(() => {
        function onKey(e: KeyboardEvent) {
            if (e.key === 'Escape') setOpen(false)
        }
        if (open) window.addEventListener('keydown', onKey)
        return () => window.removeEventListener('keydown', onKey)
    }, [open])

    useEffect(() => {
        if (!open) triggerRef.current?.focus()
    }, [open])

    const backdrop = {
        hidden: { opacity: 0 },
        visible: { opacity: 1 },
    }

    const panel = {
        hidden: { x: '-100%' },
        visible: { x: 0 },
    }

    const listItem = {
        hidden: { opacity: 0, x: -24, y: 8 },
        visible: { opacity: 1, x: 0, y: 0 },
    }

    return (
        <div className="lg:hidden">
            <button
                ref={triggerRef}
                aria-label="Open menu"
                onClick={() => setOpen(true)}
                className="rounded-md border-none ring-0 outline-none focus:outline-none focus:ring-0 focus:border-none"
            >
                <MenuIcon className="size-6" color={pathname === '/product-catalog' || pathname === '/about-us' ? 'black' : 'currentColor'} />
            </button>

            <AnimatePresence>
                {open && (
                    <>
                        <motion.div
                            key="backdrop"
                            className="fixed inset-0 z-40 bg-black/50"
                            initial="hidden"
                            animate="visible"
                            exit="hidden"
                            variants={backdrop}
                            onClick={() => setOpen(false)}
                        />

                        <motion.aside
                            key="panel"
                            ref={panelRef}
                            className="fixed inset-y-0 left-0 z-50 w-[86%] max-w-xs bg-white shadow-2xl border-r border-gray-100 p-6"
                            initial="hidden"
                            animate="visible"
                            exit="hidden"
                            variants={panel}
                            transition={{ type: 'tween', duration: 0.28 }}
                            role="dialog"
                            aria-modal="true"
                        >
                            <div className="flex items-center justify-between mb-6">
                                <div className="text-lg font-semibold">Menu</div>
                                <button
                                    aria-label="Close menu"
                                    onClick={() => setOpen(false)}
                                    className="p-2 rounded-md border-none ring-0 outline-none focus:outline-none focus:ring-0 focus:border-none"
                                >
                                    <XIcon className="size-6" />
                                </button>
                            </div>

                            <nav>
                                <ul className="flex flex-col gap-4 text-black">
                                    {HEADER_URLS.map((item, idx) => (
                                        <motion.li
                                            key={item.label}
                                            initial="hidden"
                                            animate="visible"
                                            exit="hidden"
                                            variants={listItem}
                                            transition={{
                                                delay: 0.15 + (0.12 * idx),
                                                type: 'spring',
                                                stiffness: 400,
                                                damping: 25,
                                                duration: 0.6
                                            }}
                                        >
                                            <Link
                                                href={item.link}
                                                onClick={() => setOpen(false)}
                                                className={cn(
                                                    'block text-2xl font-medium pb-1.5 border-b border-b-transparent hover:border-b-[#FADF80] transition-colors duration-200',
                                                    { 'border-b-[#FADF80] text-[#FADF80]': pathname === item.link }
                                                )}
                                            >
                                                {item.label}
                                            </Link>
                                        </motion.li>
                                    ))}
                                </ul>
                            </nav>

                            <div className="mt-6 text-gray-500">
                                <hr className="border-gray-100" />
                                <p className="mt-4 text-sm text-gray-500">Follow us for new launches and offers</p>
                                <motion.div
                                    className='mt-5'
                                    initial={{ opacity: 0, y: 12 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.15 + (0.12 * HEADER_URLS.length) + 0.1, duration: 0.4 }}
                                >
                                    <ul className='flex items-center gap-3'>
                                        <motion.li
                                            initial={{ opacity: 0, scale: 0.8 }}
                                            animate={{ opacity: 1, scale: 1 }}
                                            transition={{
                                                delay: 0.15 + (0.12 * HEADER_URLS.length) + 0.2,
                                                type: 'spring',
                                                stiffness: 500,
                                                damping: 20
                                            }}
                                        >
                                            <Link href={CONTACT_DATA.INSTAGRAM}>
                                                <div className='rounded-full p-2 size-10 bg-[#E9E9EA] flex items-center justify-center transition ease-in-out duration-300 hover:bg-[#FADF80] cursor-pointer'>
                                                    <InstagramIcon className="#1D1F2C size-8" />
                                                </div>
                                            </Link>
                                        </motion.li>
                                        <motion.li
                                            initial={{ opacity: 0, scale: 0.8 }}
                                            animate={{ opacity: 1, scale: 1 }}
                                            transition={{
                                                delay: 0.15 + (0.12 * HEADER_URLS.length) + 0.28,
                                                type: 'spring',
                                                stiffness: 500,
                                                damping: 20
                                            }}
                                        >
                                            <Link href={CONTACT_DATA.FACEBOOK}>
                                                <div className='rounded-full p-2 size-10 bg-[#E9E9EA] flex items-center justify-center transition ease-in-out duration-300 hover:bg-[#FADF80] cursor-pointer'>
                                                    <FacebookIcon className="#1D1F2C size-8" />
                                                </div>
                                            </Link>
                                        </motion.li>
                                        <motion.li
                                            initial={{ opacity: 0, scale: 0.8 }}
                                            animate={{ opacity: 1, scale: 1 }}
                                            transition={{
                                                delay: 0.15 + (0.12 * HEADER_URLS.length) + 0.36,
                                                type: 'spring',
                                                stiffness: 500,
                                                damping: 20
                                            }}
                                        >
                                            <Link href={CONTACT_DATA.EMAIL}>
                                                <div className='rounded-full p-2 size-10 bg-[#E9E9EA] flex items-center justify-center transition ease-in-out duration-300 hover:bg-[#FADF80] cursor-pointer'>
                                                    <Mail02 className="#1D1F2C size-8" />
                                                </div>
                                            </Link>
                                        </motion.li>
                                    </ul>
                                </motion.div>
                            </div>
                        </motion.aside>
                    </>
                )}
            </AnimatePresence>
        </div>
    )
}

export default MobileSideBarNav