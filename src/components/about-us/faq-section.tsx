import React from 'react'
import PaddingContainer from '../shared/padding-container'
import MaxContainer from '../shared/max-container'
import { FaqItems } from './faq-items'
import { faqs } from '@/lib/data'

function FaqSection() {
  return (
    <section>
        <PaddingContainer>
            <MaxContainer className='flex flex-col lg:flex-row gap-5 justify-between'>
                <div className="space-y-4 w-full lg:max-w-[589px]">
                    <h2 className='text-2xl lg:text-4xl font-semibold font-sans'>Glow With Clarity</h2>
                    <p className="text-[#292929] w-full lg:max-w-[589px] lg:text-xl">Got questions? We’ve answered some of the most common ones to help you shop, apply, and glow with confidence.</p>
                </div>
                <div className='w-full lg:max-w-[614px]'>
                    <FaqItems faqs={faqs} />
                </div>
            </MaxContainer>
        </PaddingContainer>
    </section>
  )
}

export default FaqSection