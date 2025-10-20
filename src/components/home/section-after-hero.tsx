"use client"

import React from 'react'
import Image from 'next/image'
import PaddingContainer from '../shared/padding-container'
import MaxContainer from '../shared/max-container'
import CustomButton from '../shared/custom-button'
import { motion } from 'framer-motion'

function SectionAfterHero() {
    return (
        <section className="py-10 lg:py-16 bg-[#FFFEFA] relative overflow-hidden">
            <PaddingContainer>
                <MaxContainer className='flex flex-col md:flex-row md:items-center gap-14'>
                    <motion.div
                        initial={{ x: -100, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="space-y-6 lg:space-y-10">
                        <div className="space-y-4 lg:space-y-6">
                            <h2 className="text-[28px] lg:text-[40px]">Naturally crafted to nourish the skin — gentle, and powerful</h2>
                            <p className='text-lg lg:text-xl'>Veetgold, a piethora of beauty products readily available at your local grocery stores.</p>
                        </div>
                        <CustomButton />
                    </motion.div>
                    <motion.div
                        initial={{ x: 100, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className='relative w-full h-[598px] lg:h-[815px]'>
                        <Image alt="African Queen" src="https://res.cloudinary.com/djrp3aaq9/image/upload/v1751229984/african-queen_panxkr.webp" fill sizes="100vw" className='object-cover object-center' />
                    </motion.div>
                </MaxContainer>
            </PaddingContainer>
            {/* <div className="absolute inset-y-0 left-0 flex items-center overflow-hidden border  border-red-500 pointer-events-none">
                <div className="watermark-animate rotate-270 origin-bottom-left w-full">
                    <p className="text-[100px] font-bold text-[#121212]/5 leading-none whitespace-nowrap">
                        VEETGOLD
                    </p>
                </div>
            </div> */}

        </section>
    )
}

export default SectionAfterHero