"use client"

import Footer from '@/components/shared/footer'
import Header from '@/components/shared/header'
import PageBanner from '@/components/shared/page-banner'
import { useSeasonStore } from '@/store/useSeason'
import React from 'react'

function ExternalPagesLayout({ children }: { children: React.ReactNode }) {
  const isChristmas = useSeasonStore((state) => state.isChristmas)
  
  return (
    <>
      {isChristmas && <PageBanner bannerText='Season’s Glow — Merry Christmas ✨' bannerColor='bg-green-900' textClass="text-sm text-white" />}
      <div className='relative min-h-screen'>
        {<Header />}
        <main>{children}</main>
        <Footer />
        <PageBanner bannerText='© Copyright VeetGold 2025, All Rights Reserved' textClass='text-white/50' />
      </div>
    </>
  )
}

export default ExternalPagesLayout