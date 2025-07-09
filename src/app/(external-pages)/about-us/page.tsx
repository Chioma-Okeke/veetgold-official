import FaqSection from '@/components/about-us/faq-section'
import MissionAndValues from '@/components/about-us/mission-and-values'
import SectionUnderHero from '@/components/about-us/section-under-hero'
import React from 'react'

function AboutUs() {
  return (
    <div>
        <SectionUnderHero/>
        <MissionAndValues/>
        <FaqSection/>
    </div>
  )
}

export default AboutUs