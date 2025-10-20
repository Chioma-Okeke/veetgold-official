"use client"

import React from 'react'
import PaddingContainer from '../shared/padding-container'
import MaxContainer from '../shared/max-container'
import Image from 'next/image'
import CustomButton from '../shared/custom-button'
import { motion } from 'framer-motion'

function SectionUnderHero() {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
                delayChildren: 0.1
            }
        }
    }

    const itemVariants = {
        hidden: {
            opacity: 0,
            y: 30,
            filter: "blur(10px)"
        },
        visible: {
            opacity: 1,
            y: 0,
            filter: "blur(0px)",
            transition: {
                duration: 0.6,
                ease: [0.25, 0.46, 0.45, 0.94] as const
            }
        }
    }

    const imageVariants = {
        hidden: {
            opacity: 0,
            scale: 0.8,
            filter: "blur(10px)"
        },
        visible: {
            opacity: 1,
            scale: 1,
            filter: "blur(0px)",
            transition: {
                duration: 0.8,
                ease: [0.25, 0.46, 0.45, 0.94] as const
            }
        }
    }

    return (
        <section className='py-10 lg:pt-16 lg:pb-10'>
            <PaddingContainer>
                <MaxContainer className='flex lg:items-center justify-between gap-10 flex-col-reverse lg:flex-row'>
                    <motion.div
                        variants={imageVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.3 }}
                        className='relative overflow-hidden w-full aspect-[541/814] max-w-[541px] hidden lg:block'
                    >
                        <Image src={"/model2.png"} alt='Model Image' fill sizes='100vw' className='object-cover object-center' />
                    </motion.div>
                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.2 }}
                        className='w-full max-w-[646px] space-y-14'
                    >
                        <motion.div variants={itemVariants} className='space-y-4'>
                            <h2 className='text-2xl lg:text-4xl font-semibold'>What Makes Us Different</h2>
                            <p className='text-[#292929] lg:text-xl'>We don&apos;t outsource our magic. Every product you see was created by our own hands, in our own space. This gives us complete control over every step, from selecting ingredients to perfecting textures, so what you get is a formula we fully stand behind.</p>
                        </motion.div>
                        <div className='space-y-10'>
                            <motion.div variants={itemVariants} className='space-y-4'>
                                <h3 className='font-semibold text-lg lg:text-2xl'>Uncompromised Quality Ingredients</h3>
                                <p className='lg:text-xl'>No fillers, no fluff, just potent, skin-loving ingredients that work.</p>
                            </motion.div>
                            <motion.div variants={itemVariants} className='flex items-center justify-between gap-2'>
                                <motion.div
                                    whileHover={{ scale: 1.05 }}
                                    transition={{ duration: 0.3 }}
                                    className='relative w-full aspect-[315/220] max-w-[315px]'
                                >
                                    <Image src={"/glycolic-acid.png"} fill sizes='100vw' alt='product image' className='object-cover object-center' />
                                </motion.div>
                                <motion.div
                                    whileHover={{ scale: 1.05 }}
                                    transition={{ duration: 0.3 }}
                                    className='relative w-full aspect-[315/220] max-w-[315px]'
                                >
                                    <Image src={"/glycolic-acid.png"} fill sizes='100vw' alt='product image' className='object-cover object-center' />
                                </motion.div>
                            </motion.div>
                            <motion.div variants={itemVariants}>
                                <CustomButton />
                            </motion.div>
                        </div>
                    </motion.div>
                </MaxContainer>
            </PaddingContainer>
        </section>
    )
}

export default SectionUnderHero