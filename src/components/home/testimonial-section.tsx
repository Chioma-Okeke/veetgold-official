import React from 'react'
import { TestimonialsBanner } from './testimonials-banner'

function TestimonialSection() {
  return (
    <section className="space-y-12 py-32">
        <div className='text-center space-y-5'>
            <h2 className='text-xl lg:text-[32px]'>TESTIMONIAL</h2>
            <h3 className='text-[32px] lg:text-5xl font-semibold'>What Our <span className='text-[#CB9E2B]'>Customers Say</span></h3>
        </div>
        <div>
            <TestimonialsBanner />
        </div>
    </section>
  )
}

export default TestimonialSection