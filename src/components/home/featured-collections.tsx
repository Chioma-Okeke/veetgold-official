"use client"

import React from 'react'
import PaddingContainer from '../shared/padding-container'
import MaxContainer from '../shared/max-container'
import CollectionDisplay from './collection-display'
import { AnimatedSection } from '../shared/animated-section'

function FeaturedCollection() {
  return (
    <section className="text-white py-[75px] bg-[#55795E] h-fit">
      <PaddingContainer>
        <AnimatedSection>
          <MaxContainer className="space-y-[50px]">
            <div className='space-y-2'>
              <h2 className='text-4xl lg:text-5xl max-sm:text-center max-sm:font-sans font-semibold'>Our Featured Collections</h2>
            </div>
            <CollectionDisplay />
          </MaxContainer>
        </AnimatedSection>
      </PaddingContainer>
    </section>
  )
}

export default FeaturedCollection