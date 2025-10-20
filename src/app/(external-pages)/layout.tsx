"use client"

import Footer from '@/components/shared/footer'
import Header from '@/components/shared/header'
import PageBanner from '@/components/shared/page-banner'
import React from 'react'

function ExternalPagesLayout({ children }: { children: React.ReactNode }) {
  
  return (
    <>
      {/* <PageBanner bannerText='🎉  Get 10% Bonus Today' /> */}
      <div className='relative'>
        {<Header />}
        <main>{children}</main>
        <Footer />
        <PageBanner bannerText='© Copyright VeetGold 2025, All Rights Reserved' textColor='text-white/50' />
      </div>
    </>
  )
}

export default ExternalPagesLayout