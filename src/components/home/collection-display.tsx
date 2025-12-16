"use client"

import React, { useRef, useState } from 'react'
import { Tabs, TabsList, TabsTrigger } from '../ui/tabs'
import { featuredCollections } from '@/lib/data'
import Link from 'next/link';
import Image from 'next/image';
import { Swiper, SwiperClass, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-cube";
import { Autoplay, EffectCube, Mousewheel } from "swiper/modules";
import { AnimatePresence, motion } from "framer-motion"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../ui/select';

type CollectionKey = 'scrubs' | 'facials' | 'fragrances';

function CollectionDisplay() {
    const [activeTab, setActiveTab] = useState<CollectionKey>('scrubs');
    const swiperRef = useRef<SwiperClass | null>(null)
    const focusedContent = featuredCollections[activeTab];

    return (
        <Tabs value={activeTab} onValueChange={(value) => setActiveTab(value as CollectionKey)}>
            <div className="mb-6 sm:hidden">
                <Select value={activeTab} onValueChange={(value) => setActiveTab(value as CollectionKey)}>
                    <SelectTrigger className="w-full h-[44px] bg-white/30 text-white py-3.5 px-4 rounded-[12px] border-none">
                        <SelectValue defaultValue={activeTab} />
                    </SelectTrigger>
                    <SelectContent className="bg-white text-[#55795E]">
                        <SelectItem value="scrubs">Scrubs</SelectItem>
                        <SelectItem value="facials">Facials</SelectItem>
                        <SelectItem value="fragrances">Fragrances</SelectItem>
                    </SelectContent>
                </Select>
            </div>
            <TabsList className='bg-white w-full gap-2 max-w-[300px] sm:max-w-[334px] h-[61px] rounded-[12px] p-2 mb-[71px] max-sm:hidden'>
                <TabsTrigger value="scrubs" className='data-[state=active]:bg-[#55795E] data-[state=active]:text-white hover:bg-[#55795E] text-sm sm:tex-base rounded-[12px] py-[13px] px-4 hover:text-white transition-colors ease-in-out duration-300 cursor-pointer'>Scrubs</TabsTrigger>
                <TabsTrigger value="facials" className='data-[state=active]:bg-[#55795E] data-[state=active]:text-white hover:bg-[#55795E] text-sm sm:tex-base rounded-[12px] py-[13px] px-4 hover:text-white transition-colors ease-in-out duration-300 cursor-pointer'>Facials</TabsTrigger>
                <TabsTrigger value="fragrances" className='data-[state=active]:bg-[#55795E] data-[state=active]:text-white hover:bg-[#55795E] text-sm sm:tex-base rounded-[12px] py-[13px] px-4 hover:text-white transition-colors ease-in-out duration-300 cursor-pointer'>Fragrances</TabsTrigger>
            </TabsList>
            <div className='flex flex-col lg:flex-row-reverse max-lg:gap-10 lg:gap-5 lg:items-center lg:justify-between'>
                <motion.div
                    layout
                    transition={{ duration: 0.4, ease: "easeInOut" }}
                    className='space-y-8 lg:max-w-[586px] w-full'
                >
                    <AnimatePresence mode='wait'>
                        <motion.div
                            key={focusedContent.title}
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -10 }}
                            transition={{
                                ease: "easeInOut",
                                duration: 0.35,
                            }}
                            className='flex flex-col gap-5'
                        >
                            <h3 className='font-semibold text-4xl lg:text-2xl'>
                                {focusedContent.title}
                            </h3>
                            <p className='w-full lg:max-w-[586px] text-justify'>
                                {focusedContent.description}
                            </p>
                        </motion.div>
                    </AnimatePresence>

                    <motion.div layout transition={{ duration: 0.35, ease: "easeInOut" }}>
                        <Link
                            className='bg-white py-3 px-4 text-[#55795E] rounded-[12px] w-fit'
                            href={{
                                pathname: '/product-catalog',
                                query: { filter: activeTab }
                            }}
                        >
                            {focusedContent.CTA}
                        </Link>
                    </motion.div>
                </motion.div>
                <AnimatePresence mode="wait">
                    <motion.div
                        key={activeTab}
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.95 }}
                        transition={{ duration: 0.4, ease: "easeInOut" }}
                        className='relative aspect-[450/450] max-w-[450px] w-full mx-auto'
                    >
                        <Swiper
                            spaceBetween={0}
                            speed={1000}
                            autoplay={{ delay: 4000, disableOnInteraction: false }}
                            effect="cube"
                            modules={[Autoplay, EffectCube, Mousewheel]}
                            loop
                            onSwiper={(swiper) => {
                                swiperRef.current = swiper;
                            }}
                            className='relative w-full aspect-[450/450] max-w-[450px]'
                        >
                            {
                                focusedContent.imgSrc.map((image, index) => {
                                    return (
                                        <SwiperSlide key={index} className="relative w-full">
                                            <div className='w-full aspect-[450/450] max-w-[450px] relative overflow-hidden rounded-[12px]'>
                                                <Image src={image} alt={`image-${index}`} fill sizes='100vw' className='object-cover object-center' />
                                            </div>
                                        </SwiperSlide>
                                    )
                                })
                            }
                        </Swiper>
                    </motion.div>
                </AnimatePresence>
            </div>
        </Tabs>
    )
}

export default CollectionDisplay