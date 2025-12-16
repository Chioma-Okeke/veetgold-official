"use client"

import React from 'react'
import MaxContainer from '../shared/max-container'
import PaddingContainer from '../shared/padding-container'
import { motion } from 'framer-motion'
import { AnimatedSection } from '../shared/animated-section'

function AboutHeroVideo() {
    return (
        <section className='text-white relative max-2xl:h-screen 2xl:min-h-[90vh] flex items-center justify-center overflow-hidden'>
            {/* Video Background */}
            <div className='absolute inset-0 w-full h-full'>
                <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    className='absolute inset-0 w-full h-full object-cover'
                >
                    <source src="/Fragrance-line-video.mp4" type="video/mp4" />
                </video>

                {/* Dark overlay to reduce brightness */}
                <div className='absolute inset-0 bg-black/50' />

                {/* Gradient overlays for better text readability */}
                <div className='absolute inset-0 bg-gradient-to-b from-black/10 via-transparent to-black/30' />
            </div>

            {/* Content */}
            <PaddingContainer className='relative z-10 py-20 lg:py-32'>
                <MaxContainer>
                    <AnimatedSection className='space-y-8 lg:space-y-12'>
                        {/* Text content with decorative elements */}
                        <div className='relative'>
                            {/* Decorative top accent */}
                            <motion.div
                                initial={{ width: 0 }}
                                whileInView={{ width: "120px" }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
                                className='h-1 bg-gradient-to-r from-[#CB9E2B] to-transparent mx-auto mb-8'
                            />

                            <motion.div
                                className='w-full max-w-[700px] mx-auto text-center space-y-4 relative'>

                                <motion.p
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.6, delay: 0.2 }}
                                    className='text-lg lg:text-2xl text-[#CB9E2B] font-medium tracking-wide uppercase drop-shadow-lg'>
                                    From formulation to finish
                                </motion.p>

                                <motion.h1
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.6, delay: 0.3 }}
                                    className='text-4xl md:text-5xl lg:text-[64px] tracking-neg-tight leading-tight text-white drop-shadow-2xl'>
                                    We Don&apos;t Just Believe In{' '}
                                    <span className='relative font-semibold italic inline-block'>
                                        <span className='relative z-10'>Beauty</span>
                                        <motion.span
                                            initial={{ width: 0 }}
                                            whileInView={{ width: "100%" }}
                                            viewport={{ once: true }}
                                            transition={{ duration: 0.8, delay: 0.6 }}
                                            className='absolute bottom-2 left-0 h-3 bg-[#CB9E2B]/30 -z-0'
                                        />
                                    </span>
                                    , We{' '}
                                    <span className='relative font-semibold italic inline-block'>
                                        <span className='relative z-10'>Make It</span>
                                        <motion.span
                                            initial={{ width: 0 }}
                                            whileInView={{ width: "100%" }}
                                            viewport={{ once: true }}
                                            transition={{ duration: 0.8, delay: 0.8 }}
                                            className='absolute bottom-2 left-0 h-3 bg-[#CB9E2B]/30 -z-0'
                                        />
                                    </span>
                                </motion.h1>
                            </motion.div>
                        </div>

                        {/* Floating decorative elements */}
                        <motion.div
                            animate={{
                                y: [0, -20, 0],
                                rotate: [0, 180, 360],
                            }}
                            transition={{
                                duration: 8,
                                repeat: Infinity,
                                ease: "easeInOut"
                            }}
                            className='absolute top-20 right-10 w-16 h-16 border-2 border-[#CB9E2B]/30 rounded-full hidden lg:block'
                        />

                        <motion.div
                            animate={{
                                y: [0, 20, 0],
                                rotate: [360, 180, 0],
                            }}
                            transition={{
                                duration: 10,
                                repeat: Infinity,
                                ease: "easeInOut"
                            }}
                            className='absolute bottom-20 left-10 w-20 h-20 border-2 border-[#CB9E2B]/30 rounded-full hidden lg:block'
                        />
                    </AnimatedSection>
                </MaxContainer>
            </PaddingContainer>
        </section>
    )
}

export default AboutHeroVideo
