"use client"

import React, { useRef, useState, useEffect } from 'react'
import PaddingContainer from '../shared/padding-container'
import Link from 'next/link'
import ProductCard from '../product/product-card'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import MaxContainer from '../shared/max-container'
import { Button } from '../ui/button'

function NewArrivals({ sectionTitle }: { sectionTitle: string }) {
    const productGridRef = useRef<HTMLDivElement | null>(null);
    const [showLeftArrow, setShowLeftArrow] = useState(false)
    const [showRightArrow, setShowRightArrow] = useState(false)
    const [firstWord, ...rest] = sectionTitle?.split(" ")

    const checkScroll = () => {
        const container = productGridRef.current
        if (!container) return

        const { scrollLeft, scrollWidth, clientWidth } = container
        setShowLeftArrow(scrollLeft > 0)
        setShowRightArrow(scrollLeft + clientWidth < scrollWidth)
    }

    const scrollBy = (amount: number) => {
        const container = productGridRef.current
        if (!container) return

        container.scrollBy({ left: amount, behavior: 'smooth' })
    }

    useEffect(() => {
        const container = productGridRef.current
        if (!container) return

        const check = () => checkScroll()

        check()

        const handleScroll = () => check()
        const handleResize = () => check()
        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === 'ArrowRight') scrollBy(300)
            if (e.key === 'ArrowLeft') scrollBy(-300)
        }

        container.addEventListener('scroll', handleScroll)
        window.addEventListener('resize', handleResize)
        window.addEventListener('keydown', handleKeyDown)

        return () => {
            container.removeEventListener('scroll', handleScroll)
            window.removeEventListener('resize', handleResize)
            window.removeEventListener('keydown', handleKeyDown)
        }
    }, [])


    return (
        <section className='py-20 lg:py-[100px]'>
            <PaddingContainer>
                <MaxContainer className="space-y-12">
                    <div className='flex items-center justify-between'>
                        <div>
                            <h2 className="text-2xl lg:text-[32px] font-orbitron"><span className='text-[#CB9E2B] underline underline-offset-16'>{firstWord}</span> {rest.join(" ")}</h2>
                        </div>
                        <Link href="/" className="underline text-xl">View All</Link>
                    </div>
                    <div className='relative'>
                        <div ref={productGridRef} className='flex scrollbar overflow-x-scroll gap-4 lg:gap-6'>
                            {[1, 2, 3].map((_, index) => {
                                return (
                                    <ProductCard key={index} />
                                )
                            })}
                        </div>
                        {(showLeftArrow || showRightArrow) && (
                            <div className='absolute top-1/2 left-0 -translate-y-1/2 flex items-center justify-between w-full px-4 lg:px-0 pointer-events-none'>
                                {showLeftArrow && (
                                    <Button
                                        onClick={() => scrollBy(-300)}
                                        className='bg-black/20 backdrop-blur-lg rounded-full p-1 text-white hover:bg-black/30 hover:scale-110 cursor-pointer transition duration-300 pointer-events-auto'
                                    >
                                        <ChevronLeft />
                                    </Button>
                                )}

                                {showRightArrow && (
                                    <Button
                                        onClick={() => scrollBy(300)}
                                        className='bg-black/20 backdrop-blur-lg rounded-full p-1 text-white hover:bg-black/30 hover:scale-110 cursor-pointer transition duration-300 pointer-events-auto'
                                    >
                                        <ChevronRight />
                                    </Button>
                                )}
                            </div>
                        )}
                    </div>
                </MaxContainer>
            </PaddingContainer>
        </section>
    )
}

export default NewArrivals