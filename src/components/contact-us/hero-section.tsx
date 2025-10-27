"use client"

import Image from 'next/image'
import React from 'react'
import PaddingContainer from '../shared/padding-container'
import MaxContainer from '../shared/max-container'
import ContactForm from '@/forms/contact-form'
import { motion } from 'framer-motion'
import { CONTACT_PAGE_DETAILS } from '@/constants'



function ContactPageHero() {
    return (
        <section className='w-full relative pt-24 md:pt-28 lg:pt-[200px] pb-10 lg:pb-20'>
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 2, ease: "easeInOut" }}
                className="w-full overflow-hidden absolute inset-0 -z-10"
            >
                <motion.div
                    initial={{ scale: 1.2, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{
                        duration: 3,
                        ease: [0.25, 0.46, 0.45, 0.94]
                    }}
                    className="relative w-full h-full"
                >
                    <Image
                        src="https://res.cloudinary.com/djrp3aaq9/image/upload/v1751125516/product-image-hero_svohfp.webp"
                        alt="Kojic acid cream"
                        fill
                        sizes="100vw"
                        className="object-cover object-center"
                    />
                </motion.div>

                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1.5, delay: 0.5 }}
                    className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/20 to-transparent"
                />

                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 0.3, scale: 1 }}
                    transition={{
                        duration: 2,
                        delay: 1,
                        ease: "easeOut"
                    }}
                    className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-primary/5"
                />
            </motion.div>
            <PaddingContainer className='z-50 w-full'>
                <MaxContainer className='flex flex-col gap-10 md:flex-row items-center lg:justify-between'>
                    <motion.div
                        initial={{ opacity: 0, x: -80, y: 20 }}
                        animate={{ opacity: 1, x: 0, y: 0 }}
                        transition={{
                            duration: 0.8,
                            ease: [0.25, 0.46, 0.45, 0.94],
                            delay: 0.3
                        }}
                        className='text-white w-full max-w-[474px] space-y-6'
                    >
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.5 }}
                            className='space-y-4'
                        >
                            <motion.h1
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: 0.7 }}
                                className="font-semibold text-3xl lg:text-5xl"
                            >
                                Get in touch with us
                            </motion.h1>
                            <motion.p
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: 0.9 }}
                                className='lg:text-lg text-[#FAFAFA]/80'
                            >
                                Email, call or complete the form and we will respond immediately.
                            </motion.p>
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 1.1 }}
                            className='w-full max-w-[389px] space-y-6'
                        >
                            {
                                CONTACT_PAGE_DETAILS.map(({ title, Icon, description }, index) => {
                                    return (
                                        <motion.div
                                            key={title}
                                            initial={{ opacity: 0, x: -40, scale: 0.9 }}
                                            animate={{ opacity: 1, x: 0, scale: 1 }}
                                            transition={{
                                                duration: 0.5,
                                                delay: 1.2 + (index * 0.15),
                                                ease: "easeOut"
                                            }}
                                            className='flex gap-6'
                                        >
                                            <motion.div
                                                initial={{ scale: 0, rotate: -180 }}
                                                animate={{ scale: 1, rotate: 0 }}
                                                transition={{
                                                    duration: 0.6,
                                                    delay: 1.3 + (index * 0.15),
                                                    type: "spring",
                                                    stiffness: 200
                                                }}
                                            >
                                                <Icon />
                                            </motion.div>
                                            <motion.div
                                                initial={{ opacity: 0, y: 10 }}
                                                animate={{ opacity: 1, y: 0 }}
                                                transition={{
                                                    duration: 0.4,
                                                    delay: 1.4 + (index * 0.15)
                                                }}
                                                className='space-y-2'
                                            >
                                                <h3 className='lg:text-xl font-semibold'>{title}</h3>
                                                { Array.isArray(description)? (
                                                    description.map((line, idx) => {
                                                        return (
                                                            <p key={idx} className='text-sm lg:text-base text-[#FAFAFA]/80'>{line}</p>
                                                        )
                                                    })
                                                ): <p className='text-sm lg:text-base text-[#FAFAFA]/80'>{description}</p>}
                                            </motion.div>
                                        </motion.div>
                                    )
                                })
                            }
                        </motion.div>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, x: 80, y: 20 }}
                        animate={{ opacity: 1, x: 0, y: 0 }}
                        transition={{
                            duration: 0.8,
                            ease: [0.25, 0.46, 0.45, 0.94],
                            delay: 0.4
                        }}
                        className="max-w-[502px] w-full lg:mx-auto bg-white p-6 rounded-[12px] shadow-md"
                    >
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.8 }}
                        >
                            <ContactForm />
                        </motion.div>
                    </motion.div>
                </MaxContainer>
            </PaddingContainer>
        </section>
    )
}

export default ContactPageHero