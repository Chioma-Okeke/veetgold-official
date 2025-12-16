import { cn } from '@/lib/utils';
import React from 'react'

type PageBannerProp = {
    bannerText: string;
    bannerColor?: string;
    textClass?: string
}

function PageBanner({bannerText, bannerColor = 'bg-black', textClass}: PageBannerProp) {
  return (
    <div className={`${bannerColor} py-4 w-full`}>
        <p className={cn('text-center currentColor', textClass)}>{bannerText}</p>
    </div>
  )
}

export default PageBanner