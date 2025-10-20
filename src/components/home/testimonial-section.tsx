"use client"

import React from 'react'
import { TestimonialsBanner } from './testimonials-banner'
import { AnimatedSection } from '../shared/animated-section'

function TestimonialSection() {
  return (
    <section>
      <AnimatedSection className="space-y-12 py-10 lg:py-20">
        <div className='text-center space-y-5'>
          <h2 className='text-xl lg:text-[32px]'>TESTIMONIAL</h2>
          <h3 className='text-[32px] lg:text-5xl font-semibold'>What Our <span className='text-[#CB9E2B]'>Customers Say</span></h3>
        </div>
        <div>
          <TestimonialsBanner />
        </div>
      </AnimatedSection>
    </section>
  )
}

export default TestimonialSection