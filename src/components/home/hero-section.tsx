"use client"

import React, { useRef, useState } from 'react'
import { Swiper, SwiperClass, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-fade";
import { Autoplay, EffectFade, Mousewheel } from "swiper/modules";
import Image from 'next/image';
import { heroImageData } from '@/lib/data';
import { Button } from '../ui/button';
import { useWindowWidth } from '@/hooks/use-width';
import { SnowFlake } from '@/icons';

function HeroSection() {
    const swiperRef = useRef<SwiperClass | null>(null);
    const width = useWindowWidth();
    const [currentIndex, setCurrentIndex] = useState<number | undefined>(0);

    const handleSlideChange = (swiper: SwiperClass) => {
        setCurrentIndex(swiper.realIndex);
    };

    return (
        <section className="relative h-fit pb-24 lg:pb-12">
            {/* Background Swiper */}
            <Swiper
                spaceBetween={0}
                speed={1000}
                autoplay={{ delay: 6000, disableOnInteraction: false }}
                effect="fade"
                modules={[Autoplay, EffectFade, Mousewheel]}
                loop
                onSlideChange={handleSlideChange}
                onSwiper={(swiper) => {
                    swiperRef.current = swiper;
                }}
                className='absolute inset-0 z-0 w-full swiper-class'
            >
                {heroImageData.map(({ imgSrc, alt }, index) => (
                    <SwiperSlide key={index} className="relative w-full">
                        <div className="relative z-0 w-full h-full after:content-[''] after:absolute after:inset-0 after:bg-gradient-to-t after:from-black/40 after:to-transparent">
                            <Image
                                priority
                                alt={alt}
                                src={imgSrc}
                                fill
                                sizes="100vw"
                                className="object-cover object-center"
                            />
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>

            {/* Foreground content */}
            <div className="relative z-20 w-full md:pl-[72px] pt-[117px] md:pt-[176px] max-w-[756px] text-white">
                <SnowFlake className="text-[#FFF4ED] w-[42px] h-9 md:w-[88px] md:h-[73px]" />
                <div className="border border-[#BD5B00]/50 mt-11 mx-5 lg:ml-[87px] space-y-11 rounded-xl">
                    <div>
                        <p className="font-semibold text-lg md:text-2xl">Get the Skin You Deserve</p>
                        <h1 className="font-orbitron font-bold text-[28px] md:text-[56px] mt-4 mb-2">
                            Skincare that Breathes With You
                        </h1>
                        <p className="text-sm md:text-lg">
                            Nourish your glow. Own your skin. Shine, effortlessly.
                        </p>
                    </div>
                    <Button className="rounded-[64px]">Shop Now</Button>
                    <div className="flex gap-10 text-white">
                        <div className="space-y-4">
                            <p className="font-semibold text-4xl lg:text-[40px]">+250K</p>
                            <p className="text-xl lg:text-2xl">Our Customers</p>
                        </div>
                        <div className="space-y-4">
                            <p className="font-semibold text-4xl lg:text-[40px]">+50K</p>
                            <p className="text-xl lg:text-2xl">Our Products</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Mobile pagination dots */}
            {width < 1024 && (
                <div className="absolute bottom-4 right-3 z-20 flex items-center justify-center gap-2">
                    {heroImageData.map((_, index) => (
                        <Button
                            key={index}
                            onClick={() => swiperRef.current?.slideToLoop(index)}
                            variant={currentIndex === index ? "outline" : "default"}
                            className="size-2.5 rounded-full p-1 transition-colors"
                        />
                    ))}
                </div>
            )}
        </section>
    );
}

export default HeroSection;
