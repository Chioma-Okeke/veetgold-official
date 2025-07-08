import Image from 'next/image'
import React from 'react'
import { Badge } from '../ui/badge'

function ProductCard() {
    return (
        <div className='w-full h-full max-w-[232px] lg:max-w-[390px] max-h-[446px] lg:max-h-[683px] bg-[#FAFAFA] p-4 lg:py-6 px-4 space-y-6'>
            <div className='relative'>
                <div className="relative w-full h-[250px] lg:h-[455px]">
                    <Image src="https://res.cloudinary.com/djrp3aaq9/image/upload/v1751229984/cream_y167ne.webp" fill sizes='100vw' className="object-cover object-center" alt="product image" />
                </div>
                <Badge className="absolute top-1.5 right-1.5 lg:right-2 lg:top-4 bg-[#4C8E2C] py-1 px-2 lg:py-2.5 lg:px-4 text-[8px] lg:text-lg h-fit rounded-[100px]">New</Badge>
            </div>
            <div className='space-y-5 w-[232px] lg:w-[390px]'>
                <h4 className='text-xl lg:text-2xl'>Mother and Child Baby Lotion</h4>
                <p className='font-semibold text-xl lg:text-2xl'>$10.12</p>
            </div>
        </div>
    )
}

export default ProductCard