import React from 'react'
import { Button } from '../ui/button'
import Image from 'next/image'
import PaddingContainer from '../shared/padding-container'

function SectionAfterHero() {
    return (
        <section className="py-10 lg:py-16">
            <PaddingContainer className='flex flex-col md:flex-row md:items-center gap-14'>
                <div className="space-y-10">
                    <div className="space-y-4 lg:space-y-6">
                        <h2 className="text-[28px] lg:text-[40px]">Naturally crafted to nourish the skin — gentle, powerful, and <span className="text-[#55795E]">proudly made in Nigeria</span></h2>
                        <p className='text-lg lg:text-xl'>Veetgold, a piethora of beauty products readily available at your local grocery stores.</p>
                    </div>
                    <Button>Shop Now</Button>
                </div>
                <div className='relative w-full h-[598px] lg:h-[815px] max-md:mt-10'>
                    <Image alt="African ueen" src="/image.png" fill sizes="100vw" className='object-cover object-center' />
                </div>
            </PaddingContainer>
        </section>
    )
}

export default SectionAfterHero