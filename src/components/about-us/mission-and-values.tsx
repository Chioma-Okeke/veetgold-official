"use client"

import { missionAndValues } from '@/lib/data'
import Image from 'next/image'
import React from 'react'
import PaddingContainer from '../shared/padding-container'
import MaxContainer from '../shared/max-container'
import { cn } from '@/lib/utils'
import { motion } from 'framer-motion'

function MissionAndValues() {
    return (
        <section>
            <PaddingContainer>
                <MaxContainer>
                    {
                        missionAndValues.map((item, index) => {
                            const isOdd = (index) % 2 !== 0
                            return (
                                <motion.div
                                    key={item.title}
                                    initial="hidden"
                                    whileInView="visible"
                                    viewport={{ once: true, amount: 0.3 }}
                                    className={cn('flex items-center gap-10 lg:gap-20 py-10 lg:py-16 flex-col', {
                                        'lg:flex-row-reverse ': isOdd,
                                        'lg:flex-row': !isOdd
                                    })}
                                >
                                    {/* Text Content with Parallax */}
                                    <motion.div
                                        variants={{
                                            hidden: {
                                                opacity: 0,
                                                x: isOdd ? 60 : -60,
                                                y: 40
                                            },
                                            visible: {
                                                opacity: 1,
                                                x: 0,
                                                y: 0,
                                                transition: {
                                                    duration: 0.8,
                                                    ease: [0.25, 0.46, 0.45, 0.94],
                                                    delay: 0.2
                                                }
                                            }
                                        }}
                                        className='space-y-4 w-full max-w-[642px]'
                                    >
                                        <motion.h2
                                            variants={{
                                                hidden: { opacity: 0, y: 20 },
                                                visible: {
                                                    opacity: 1,
                                                    y: 0,
                                                    transition: { duration: 0.6, delay: 0.4 }
                                                }
                                            }}
                                            className='text-lg lg:text-2xl text-[#292929]'
                                        >
                                            {item.title}
                                        </motion.h2>
                                        <motion.h3
                                            variants={{
                                                hidden: { opacity: 0, y: 20 },
                                                visible: {
                                                    opacity: 1,
                                                    y: 0,
                                                    transition: { duration: 0.6, delay: 0.5 }
                                                }
                                            }}
                                            className='font-semibold text-2xl lg:text-4xl'
                                        >
                                            {item.subTitle}
                                        </motion.h3>
                                        <motion.p
                                            variants={{
                                                hidden: { opacity: 0, y: 20 },
                                                visible: {
                                                    opacity: 1,
                                                    y: 0,
                                                    transition: { duration: 0.6, delay: 0.6 }
                                                }
                                            }}
                                            className='text-[#292929] lg:text-xl w-full max-w-[587px]'
                                        >
                                            {item.description}
                                        </motion.p>
                                    </motion.div>

                                    {/* Image with Different Parallax Speed */}
                                    <motion.div
                                        variants={{
                                            hidden: {
                                                opacity: 0,
                                                x: isOdd ? -80 : 80,
                                                y: -20,
                                                scale: 0.9
                                            },
                                            visible: {
                                                opacity: 1,
                                                x: 0,
                                                y: 0,
                                                scale: 1,
                                                transition: {
                                                    duration: 1,
                                                    ease: [0.25, 0.46, 0.45, 0.94],
                                                    delay: 0.1
                                                }
                                            }
                                        }}
                                        whileHover={{
                                            scale: 1.02,
                                            transition: { duration: 0.3 }
                                        }}
                                        className='relative w-full aspect-[559/507] max-w-[559px] rounded-[12px]'
                                    >
                                        <Image src={item.imgSrc} alt={item.title} fill sizes='100vw' className='object-center object-cover rounded-2xl' />
                                    </motion.div>
                                </motion.div>
                            )
                        })
                    }
                </MaxContainer>
            </PaddingContainer>
        </section>
    )
}

export default MissionAndValues