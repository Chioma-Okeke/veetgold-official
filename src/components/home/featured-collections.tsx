"use client"

import React from 'react'
import PaddingContainer from '../shared/padding-container'
import MaxContainer from '../shared/max-container'
import CollectionDisplay from './collection-display'
import { AnimatedSection } from '../shared/animated-section'
import Image from 'next/image'
import Snowfall from "react-snowfall";
import { useSeasonStore } from '@/store/useSeason'


function FeaturedCollection() {
  const isChristmas = useSeasonStore((state) => state.isChristmas);
  return (
    <section className="text-white py-[75px] bg-[#55795E] h-fit relative">
      {isChristmas && (
        <Snowfall
          snowflakeCount={30}
          color="rgba(255,255,255,0.5)"
          style={{
            position: "absolute",
            inset: 0,
            pointerEvents: "none",
          }}
        />
      )}
      <PaddingContainer>
        <AnimatedSection>
          <MaxContainer className="space-y-[50px]">
            <div className='space-y-2 relative w-fit inline-block'>
              <h2 className='text-4xl lg:text-5xl max-sm:text-center max-sm:font-sans font-semibold'>Our Featured Collections</h2>
              {isChristmas && (
                <div className='max-xl:hidden w-full aspect-[50/50] max-w-[50px] absolute -top-3 right-[-14px] overflow-hidden'>
                  <Image src="https://res.cloudinary.com/djrp3aaq9/image/upload/v1765902813/Christmas-bow-icon_exlrpm.png" fill alt="Ribbon Icon" className="text-primary z-40" />
                </div>
              )}
            </div>
            <CollectionDisplay />
          </MaxContainer>
        </AnimatedSection>
      </PaddingContainer>
    </section>
  )
}

export default FeaturedCollection