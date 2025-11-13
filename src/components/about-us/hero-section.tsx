"use client"

import Image from 'next/image'
import React from 'react'
import MaxContainer from '../shared/max-container'
import PaddingContainer from '../shared/padding-container'
import { motion } from 'framer-motion'

function AboutHero() {
    return (
        <section className='relative pt-28 lg:pt-48 pb-10 xl:pb-20 overflow-hidden'>
            {/* Gradient background blobs */}
            <div className='absolute top-20 -right-40 w-96 h-96 bg-[#CB9E2B]/10 rounded-full blur-[120px] pointer-events-none' />
            <div className='absolute bottom-20 -left-40 w-96 h-96 bg-purple-500/10 rounded-full blur-[120px] pointer-events-none' />

            <PaddingContainer>
                <MaxContainer className='space-y-8 lg:space-y-12'>
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
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, ease: "easeOut" }}
                            className='w-full max-w-[700px] mx-auto text-center space-y-4 relative'>

                            {/* Floating decorative circles */}
                            <motion.div
                                animate={{
                                    y: [0, -20, 0],
                                    rotate: [0, 180, 360]
                                }}
                                transition={{
                                    duration: 8,
                                    repeat: Infinity,
                                    ease: "easeInOut"
                                }}
                                className='absolute -top-8 -left-8 w-16 h-16 border-2 border-[#CB9E2B]/30 rounded-full'
                            />
                            <motion.div
                                animate={{
                                    y: [0, 20, 0],
                                    rotate: [0, -180, -360]
                                }}
                                transition={{
                                    duration: 10,
                                    repeat: Infinity,
                                    ease: "easeInOut"
                                }}
                                className='absolute -bottom-8 -right-8 w-24 h-24 border-2 border-purple-400/20 rounded-full'
                            />

                            <motion.p
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: 0.2 }}
                                className='text-lg lg:text-2xl text-[#CB9E2B] font-medium tracking-wide uppercase'>
                                From formulation to finish
                            </motion.p>

                            <h1 className='text-4xl md:text-5xl lg:text-[64px] tracking-neg-tight leading-tight'>
                                We Don&apos;t Just Believe In{' '}
                                <span className='relative font-semibold italic inline-block'>
                                    <span className='relative z-10'>Beauty</span>
                                    <motion.span
                                        initial={{ width: 0 }}
                                        whileInView={{ width: "100%" }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 0.6, delay: 0.5 }}
                                        className='absolute bottom-2 left-0 h-3 bg-[#CB9E2B]/20 -z-0'
                                    />
                                </span>
                                , We{' '}
                                <span className='relative font-semibold italic inline-block'>
                                    <span className='relative z-10'>Make It</span>
                                    <motion.span
                                        initial={{ width: 0 }}
                                        whileInView={{ width: "100%" }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 0.6, delay: 0.7 }}
                                        className='absolute bottom-2 left-0 h-3 bg-purple-400/20 -z-0'
                                    />
                                </span>.
                            </h1>
                        </motion.div>
                    </div>

                    {/* Image with decorative frame */}
                    <motion.div
                        initial={{ opacity: 0, y: 100 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
                        className='relative w-full max-w-[1100px] mx-auto group'
                    >
                        {/* Decorative border gradient */}
                        <div className='absolute -inset-4 bg-gradient-to-r from-[#CB9E2B] via-purple-500 to-[#CB9E2B] rounded-[24px] opacity-20 group-hover:opacity-30 transition-opacity duration-500 blur-xl' />

                        {/* Main image container */}
                        <div className='relative aspect-[1000/737] rounded-[20px] overflow-hidden shadow-2xl'>
                            {/* Border frame */}
                            <div className='absolute inset-0 border-4 border-white/50 rounded-[20px] z-10 pointer-events-none' />

                            <motion.div
                                whileHover={{ scale: 1.05 }}
                                transition={{ duration: 0.6, ease: "easeOut" }}
                                className='w-full h-full'
                            >
                                <Image
                                    src={"https://res.cloudinary.com/djrp3aaq9/image/upload/v1763060368/facial_scrubs_collection_iy2b19.png"}
                                    alt='Facial Scrubs Collection'
                                    fill
                                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 90vw, 1100px"
                                    className='object-cover object-center'
                                    priority
                                />
                            </motion.div>
                        </div>

                        {/* Corner accents */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.4 }}
                            className='absolute -top-6 -left-6 w-12 h-12 border-t-4 border-l-4 border-[#CB9E2B] rounded-tl-[20px]'
                        />
                        <motion.div
                            initial={{ opacity: 0, scale: 0 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.6 }}
                            className='absolute -bottom-6 -right-6 w-12 h-12 border-b-4 border-r-4 border-purple-500 rounded-br-[20px]'
                        />
                    </motion.div>
                </MaxContainer>
            </PaddingContainer>
        </section>
    )
}

export default AboutHero