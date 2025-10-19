import { cn } from '@/lib/utils';
import React from 'react'

type PageBannerProp = {
    bannerText: string;
    bannerColor?: string;
    textColor?: string
}

function PageBanner({bannerText, bannerColor = 'bg-black', textColor = 'text-white'}: PageBannerProp) {
  return (
    <div className={`${bannerColor} py-4 w-full`}>
        <p className={cn('text-center currentColor', textColor)}>{bannerText}</p>
    </div>
  )
}

export default PageBanner