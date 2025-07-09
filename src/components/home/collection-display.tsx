"use client"

import React, { useRef, useState } from 'react'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../ui/tabs'
import { featuredCollections } from '@/lib/data'
import Link from 'next/link';
import Image from 'next/image';
import { Swiper, SwiperClass, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-cube";
import { Autoplay, EffectCube, Mousewheel } from "swiper/modules";
import { AnimatePresence, motion } from "framer-motion"

type CollectionKey = 'fragrances' | 'beauty' | 'cosmetics';

function CollectionDisplay() {
    const [activeTab, setActiveTab] = useState<CollectionKey>('fragrances');
    const swiperRef = useRef<SwiperClass | null>(null)
    const focusedContent = featuredCollections[activeTab];
    return (
        <Tabs defaultValue='fragrances' onValueChange={(value) => setActiveTab(value as CollectionKey)}>
            <TabsList className='bg-white w-full max-w-[300px] sm:max-w-[334px] h-[61px] mx-auto rounded-[12px] p-2 mb-[71px]'>
                <TabsTrigger value="fragrances" className='data-[state=active]:bg-[#55795E] data-[state=active]:text-white hover:bg-[#55795E] text-sm sm:tex-base rounded-[12px] py-[13px] px-4 hover:text-white transition-colors ease-in-out duration-300 cursor-pointer'>Fragrance</TabsTrigger>
                <TabsTrigger value="beauty" className='data-[state=active]:bg-[#55795E] data-[state=active]:text-white hover:bg-[#55795E] text-sm sm:tex-base rounded-[12px] py-[13px] px-4 hover:text-white transition-colors ease-in-out duration-300 cursor-pointer'>Beauty</TabsTrigger>
                <TabsTrigger value="cosmetics" className='data-[state=active]:bg-[#55795E] data-[state=active]:text-white hover:bg-[#55795E] text-sm sm:tex-base rounded-[12px] py-[13px] px-4 hover:text-white transition-colors ease-in-out duration-300 cursor-pointer'>Cosmetics</TabsTrigger>
            </TabsList>
            <TabsContent className='flex flex-col lg:flex-row max-xl:gap-10 lg:items-center lg:justify-between' value={activeTab}>
                <div className='space-y-8 lg:max-w-[586px] w-full'>
                    <AnimatePresence mode="wait">
                        <motion.div
                            initial={{ opacity: 0.5 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0.5 }}
                            transition={{
                                ease: "easeInOut",
                                duration: 0.5,
                            }} 
                            className='flex flex-col gap-5'
                        >
                            <h3 className='font-semibold text-4xl lg:text-[42px]'>{focusedContent.title}</h3>
                            <p className='text-[17px] lg:text-lg w-full lg:max-w-[514px] text-justify'>{focusedContent.description}</p>
                        </motion.div>
                    </AnimatePresence>
                    <Link className='bg-white py-3 px-4 text-[#55795E] rounded-[12px] w-full max-w-[214px]' href={"/"}>
                        See all {activeTab} products
                    </Link>
                </div>
                <div className='relative aspect-[630/630] max-w-[630px] w-full mx-auto'>
                    <Swiper
                        spaceBetween={0}
                        speed={1000}
                        autoplay={{ delay: 6000, disableOnInteraction: false }}
                        effect="cube"
                        modules={[Autoplay, EffectCube, Mousewheel]}
                        loop
                        onSwiper={(swiper) => {
                            swiperRef.current = swiper;
                        }}
                        className='relative w-full aspect-[630/630] max-w-[630px]'
                    >
                        {
                            focusedContent.imgSrc.map((image, index) => {
                                return (
                                    <SwiperSlide key={index} className="relative w-full">
                                        <div className='w-full aspect-[630/630] max-w-[630px] relative overflow-hidden rounded-[12px]'>
                                            <Image src={image} alt={`image-${index}`} fill sizes='100vw' className='object-cover object-center' />
                                        </div>
                                    </SwiperSlide>
                                )
                            })
                        }
                    </Swiper>
                </div>
            </TabsContent>
        </Tabs>
    )
}

export default CollectionDisplay