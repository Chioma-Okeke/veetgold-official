import FeaturedCollection from '@/components/home/featured-collections'
import HeroSection from '@/components/home/hero-section'
import SectionAfterHero from '@/components/home/section-after-hero'
import TestimonialSection from '@/components/home/testimonial-section'
import React from 'react'

function Home() {
  return (
    <>
      <HeroSection />
      <SectionAfterHero />
      <FeaturedCollection />
      <TestimonialSection />
    </>
  )
}

export default Home