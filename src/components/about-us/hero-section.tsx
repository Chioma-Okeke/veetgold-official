import Image from 'next/image'
import React from 'react'
import MaxContainer from '../shared/max-container'
import PaddingContainer from '../shared/padding-container'

function AboutHero() {
    return (
        <section className='pt-28 lg:pt-48 pb-20'>
            <PaddingContainer>
                <MaxContainer>
                    <div className='w-full max-w-[552px] mx-auto text-center space-y-2'>
                        <p className='text-lg lg:text-2xl'>From formulation to finish</p>
                        <h1 className='text-4xl md:text-5xl lg:text-[64px] tracking-neg-tight'>We Don’t Just Believe In <span className='font-semibold italic'>Beauty</span>, We <span className='font-semibold italic'>Make It</span>.</h1>
                    </div>
                    <div
                        className='relative w-full aspect-[1240/737] max-w-[1240px]'
                    >
                        <Image
                            src={"/image.png"}
                            alt='Model Image'
                            fill
                            sizes="100vw"
                            className='object-cover object-center'
                        />
                    </div>
                </MaxContainer>
            </PaddingContainer>
        </section>
    )
}

export default AboutHero