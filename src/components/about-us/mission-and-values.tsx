import { missionAndValues } from '@/lib/data'
import Image from 'next/image'
import React from 'react'
import PaddingContainer from '../shared/padding-container'
import MaxContainer from '../shared/max-container'
import { cn } from '@/lib/utils'

function MissionAndValues() {
    return (
        <section>
            <PaddingContainer>
                <MaxContainer>
                    {
                        missionAndValues.map((item, index) => {
                            const isOdd = (index) % 2 !== 0
                            return (
                                <div key={item.title} className={cn('flex items-center gap-10 py-10 lg:py-16 flex-col', {
                                    'lg:flex-row-reverse ': isOdd,
                                    'lg:flex-row': !isOdd
                                })}>
                                    <div className='space-y-4 w-full max-w-[642px]'>
                                        <h2 className='text-lg lg:text-2xl text-[#292929]'>{item.title}</h2>
                                        <h3 className='font-semibold text-2xl lg:text-4xl'>{item.subTitle}</h3>
                                        <p className='text-[#292929] lg:text-xl w-full max-w-[587px]'>{item.description}</p>
                                    </div>
                                    <div className='relative w-full aspect-[559/507] max-w-[559px]'>
                                        <Image src={item.imgSrc} alt={item.title} fill sizes='100vw' className='object-center object-cover' />
                                    </div>
                                </div>
                            )
                        })
                    }
                </MaxContainer>
            </PaddingContainer>
        </section>
    )
}

export default MissionAndValues