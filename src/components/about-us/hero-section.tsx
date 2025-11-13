"use client"

import Image from 'next/image'
import React from 'react'
import MaxContainer from '../shared/max-container'
import PaddingContainer from '../shared/padding-container'
import { motion } from 'framer-motion'

function AboutHero() {
    return (
        <section className='pt-28 lg:pt-48 pb-10'>
            <PaddingContainer>
                <MaxContainer className='space-y-5'>
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className='w-full max-w-[552px] mx-auto text-center space-y-2'>
                        <p className='text-lg lg:text-2xl'>From formulation to finish</p>
                        <h1 className='text-4xl md:text-5xl lg:text-[64px] tracking-neg-tight'>We Don’t Just Believe In <span className='font-semibold italic'>Beauty</span>, We <span className='font-semibold italic'>Make It</span>.</h1>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, scale: 0.5 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className='relative w-full aspect-[1000/737] max-w-[1000px] mx-auto'
                    >
                        <Image
                            src={"https://res.cloudinary.com/djrp3aaq9/image/upload/v1762958086/WhatsApp_Image_2025-11-12_at_03.27.22_17b2fa77_kmydvr.jpg"}
                            alt='Model Image'
                            fill
                            sizes="100vw"
                            className='object-cover object-center'
                        />
                    </motion.div>
                </MaxContainer>
            </PaddingContainer>
        </section>
    )
}

export default AboutHero