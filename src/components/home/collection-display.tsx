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
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../ui/select';

type CollectionKey = 'fragrances' | 'beauty' | 'cosmetics';

function CollectionDisplay() {
    const [activeTab, setActiveTab] = useState<CollectionKey>('fragrances');
    const swiperRef = useRef<SwiperClass | null>(null)
    const focusedContent = featuredCollections[activeTab];

    return (
        <Tabs value={activeTab} onValueChange={(value) => setActiveTab(value as CollectionKey)}>
            <div className="mb-6 sm:hidden">
                <Select value={activeTab} onValueChange={(value) => setActiveTab(value as CollectionKey)}>
                    <SelectTrigger className="w-full h-[44px] bg-white/30 text-white rounded-[12px] border-none">
                        <SelectValue defaultValue={activeTab} />
                    </SelectTrigger>
                    <SelectContent className="bg-white text-[#55795E]">
                        <SelectItem value="fragrances">Fragrance</SelectItem>
                        <SelectItem value="beauty">Beauty</SelectItem>
                        <SelectItem value="cosmetics">Cosmetics</SelectItem>
                    </SelectContent>
                </Select>
            </div>
            <TabsList className='bg-white w-full gap-2 max-w-[300px] sm:max-w-[334px] h-[61px] rounded-[12px] p-2 mb-[71px] max-sm:hidden'>
                <TabsTrigger value="fragrances" className='data-[state=active]:bg-[#55795E] data-[state=active]:text-white hover:bg-[#55795E] text-sm sm:tex-base rounded-[12px] py-[13px] px-4 hover:text-white transition-colors ease-in-out duration-300 cursor-pointer'>Fragrance</TabsTrigger>
                <TabsTrigger value="beauty" className='data-[state=active]:bg-[#55795E] data-[state=active]:text-white hover:bg-[#55795E] text-sm sm:tex-base rounded-[12px] py-[13px] px-4 hover:text-white transition-colors ease-in-out duration-300 cursor-pointer'>Beauty</TabsTrigger>
                <TabsTrigger value="cosmetics" className='data-[state=active]:bg-[#55795E] data-[state=active]:text-white hover:bg-[#55795E] text-sm sm:tex-base rounded-[12px] py-[13px] px-4 hover:text-white transition-colors ease-in-out duration-300 cursor-pointer'>Cosmetics</TabsTrigger>
            </TabsList>
            <TabsContent className='flex flex-col lg:flex-row-reverse gap-10 lg:items-center lg:justify-between' value={activeTab}>
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
                            <h3 className='font-semibold text-4xl lg:text-2xl'>{focusedContent.title}</h3>
                            <p className='w-full lg:max-w-[586px] text-justify'>{focusedContent.description}</p>
                        </motion.div>
                    </AnimatePresence>
                    <Link className='bg-white py-3 px-4 text-[#55795E] rounded-[12px] w-full max-w-[214px]' href={"/"}>
                        See all {activeTab} products
                    </Link>
                </div>
                <div className='relative aspect-[546/546] max-w-[546px] w-full mx-auto'>
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
                        className='relative w-full aspect-[546/546] max-w-[546px]'
                    >
                        {
                            focusedContent.imgSrc.map((image, index) => {
                                return (
                                    <SwiperSlide key={index} className="relative w-full">
                                        <div className='w-full aspect-[546/546] max-w-[546px] relative overflow-hidden rounded-[12px]'>
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