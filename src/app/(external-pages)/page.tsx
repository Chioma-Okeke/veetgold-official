import FeaturedCollection from '@/components/home/featured-collections'
import HeroSection from '@/components/home/hero-section'
import NewArrivals from '@/components/home/new-arrivals'
import SectionAfterHero from '@/components/home/section-after-hero'
import TestimonialSection from '@/components/home/testimonial-section'
import React from 'react'

function Home() {
  return (
    <>
        <HeroSection/>
        <SectionAfterHero />
        <NewArrivals sectionTitle="New Arrivals"/>
        <NewArrivals sectionTitle='Best Selling'/>
        <FeaturedCollection/>
        <TestimonialSection />
    </>
  )
}

export default Home