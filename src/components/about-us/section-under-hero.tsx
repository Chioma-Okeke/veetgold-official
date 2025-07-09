import React from 'react'
import PaddingContainer from '../shared/padding-container'
import MaxContainer from '../shared/max-container'
import Image from 'next/image'
import { Button } from '../ui/button'

function SectionUnderHero() {
    return (
        <section className='py-10 lg:pt-16 lg:pb-10'>
            <PaddingContainer>
                <MaxContainer className='flex lg:items-center justify-between gap-10 flex-col-reverse lg:flex-row'>
                    <div className='relative overflow-hidden w-full h-full max-w-[541px] max-h-[814px]'>
                        <Image src={"/model2.png"} alt='Model Image' fill sizes='100vw' className='object-cover object-center' />
                    </div>
                    <div className='w-full max-w-[646px] space-y-14'>
                        <div className='space-y-4'>
                            <h2 className='text-2xl lg:text-4xl font-semibold'>What Makes Us Different</h2>
                            <p className='text-[#292929] lg:text-xl'>We don’t outsource our magic. Every product you see was created by our own hands, in our own space. This gives us complete control over every step, from selecting ingredients to perfecting textures, so what you get is a formula we fully stand behind.</p>
                        </div>
                        <div className='space-y-10'>
                            <div className='space-y-4'>
                                <h3 className='font-semibold text-lg lg:text-2xl'>Uncompromised Quality Ingredients</h3>
                                <p className='lg:text-xl'>No fillers, no fluff, just potent, skin-loving ingredients that work.</p>
                            </div>
                            <div className='flex items-center justify-between'>
                                <div className='relative w-full h-full max-w-[315px] max-h-[220px] gap-1'>
                                    <Image src={"/glycolic-acid.png"} fill sizes='100vw' alt='product image' className='object-cover object-center'/>
                                </div>
                                <div className='relative w-full h-full max-w-[315px] max-h-[220px]'>
                                    <Image src={"/glycolic-acid.png"} fill sizes='100vw' alt='product image' className='object-cover object-center'/>
                                </div>
                            </div>
                            <Button>
                                Shop now
                            </Button>
                        </div>
                    </div>
                </MaxContainer>
            </PaddingContainer>
        </section>
    )
}

export default SectionUnderHero