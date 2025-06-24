import React from 'react'

type PageBannerProp = {
    bannerText: string;
    bannerColor?: string;
}

function PageBanner({bannerText, bannerColor = 'bg-black'}: PageBannerProp) {
  return (
    <div className={`${bannerColor} py-4 w-full`}>
        <h1 className='text-center'>{bannerText}</h1>
    </div>
  )
}

export default PageBanner