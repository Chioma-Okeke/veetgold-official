"use client"

import Image from 'next/image'
import React from 'react'
import { Badge } from '../ui/badge'
import { IProduct } from '@/types'
import { motion } from 'framer-motion'
import { usePathname } from 'next/navigation'
import { Button } from '../ui/button'
import { useCartStore } from '@/store/useCartStore'
import ProductDisplayModal from './prroduct-display-modal'

function ProductCard({ product }: { product?: IProduct }) {
    const pathname = usePathname()
    const addToCart = useCartStore((state) => state.addToCart)

    const imageUrl = product?.images?.[0]?.asset?.url || "https://res.cloudinary.com/djrp3aaq9/image/upload/v1751229984/cream_y167ne.webp"

    const formattedPrice = product?.price ? `$${product.price.toFixed(2)}` : "$10.12"

    const isNewArrival = product?.newArrival
    const isBestSelling = product?.bestSelling

    return (
        <div className='w-full h-full flex flex-col justify-between max-w-[232px] lg:max-w-[398px] lg:py-6 space-y-6 rounded-3xl'>
            <div className='relative'>
                <div className='overflow-hidden w-full aspect-[364/455] max-w-[364px] rounded-2xl'>
                    <motion.div
                        initial={pathname === "/product-catalog" ? { filter: "blur(20px)", opacity: 0.7 } : {}}
                        whileInView={pathname === "/product-catalog" ? { filter: "blur(0px)", opacity: 1 } : {}}
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{ duration: 1, ease: "easeOut" }}
                        className="relative w-full h-full rounded-xl"
                    >
                        <Image
                            loading='lazy'
                            src={imageUrl}
                            fill
                            sizes='100vw'
                            className="object-cover object-center"
                            alt={product?.name || "Product image"}
                        />
                        {pathname === "/" && <motion.div
                            initial={{ y: "0%" }}
                            whileInView={{ y: "-100%" }}
                            viewport={{ once: true, amount: 0.3 }}
                            transition={{ duration: 0.9, ease: "easeOut" }}
                            className="absolute inset-0 bg-white origin-bottom"
                        />}
                    </motion.div>
                </div>
                {/* Show badge based on product flags */}
                {(isNewArrival || isBestSelling) && (
                    <Badge className="absolute top-1.5 right-1.5 lg:right-2 lg:top-4 bg-[#4C8E2C] py-1 px-2 lg:py-2.5 lg:px-4 text-[8px] lg:text-lg h-fit rounded-[100px]">
                        {isBestSelling ? "Best Seller" : "New"}
                    </Badge>
                )}
            </div>
            <div className='space-y-3 w-full min-w-[150px] max-w-[232px] lg:max-w-[390px]'>
                {product && <ProductDisplayModal product={product} />}
                {/* <h4 className='text-lg lg:text-xl lg:font-semibold break-words'>
                    {product?.name || "Mother and Child Lotion"}
                </h4> */}
                <p className='text-lg lg:text-xl max-md:font-semibold'>
                    {formattedPrice}
                </p>
            </div>
            {product && <Button onClick={() => addToCart(product)} className='w-full'>
                Add to Cart
            </Button>}
        </div>
    )
}

export default ProductCard