import Image from 'next/image'
import React from 'react'
import MaxContainer from '../shared/max-container'
import PaddingContainer from '../shared/padding-container'

function AboutHero() {
    return (
        <section className='pt-28 lg:pt-48 pb-20'>
            <PaddingContainer>
                <MaxContainer className='space-y-10'>
                    <div className='w-full max-w-[839px]'>
                        <p className='text-lg lg:text-2xl'>From formulation to finish</p>
                        <h1 className='font-semibold text-4xl md:text-5xl lg:text-8xl'>We Don’t Just Believe In Beauty, We Make It.</h1>
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