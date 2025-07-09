import FaqSection from '@/components/about-us/faq-section'
import MissionAndValues from '@/components/about-us/mission-and-values'
import SectionUnderHero from '@/components/about-us/section-under-hero'
import AboutHero from '@/components/about-us/hero-section'
import React from 'react'

function AboutUs() {
  return (
    <>
        <AboutHero />
        <SectionUnderHero/>
        <MissionAndValues/>
        <FaqSection/>
    </>
  )
}

export default AboutUs