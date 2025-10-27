"use client"

import React, { useState } from 'react'
import { IProduct } from '@/types'
import { motion } from 'framer-motion'
import { Button } from '../ui/button'
import { useCartStore } from '@/store/useCartStore'
import ProductDisplayModal from './product-display-modal'
import { cn } from '@/lib/utils'
import { usePathname } from 'next/navigation'

function ProductCard({ product }: { product?: IProduct }) {
    const addToCart = useCartStore((state) => state.addToCart)
    const [isShimmering, setIsShimmering] = useState(false)

    const imageUrl = product?.images?.[0]?.asset?.url || "https://res.cloudinary.com/djrp3aaq9/image/upload/v1751229984/cream_y167ne.webp"

    const formattedPrice = product?.price ? `$${product.price.toFixed(2)}` : "$10.12"

    const isNewArrival = product?.newArrival
    const isBestSelling = product?.bestSelling

    const pathname = usePathname()

    const handleAddToCart = () => {
        if (!product) return

        setIsShimmering(true)
        addToCart(product)

        setTimeout(() => {
            setIsShimmering(false)
        }, 800)
    }

    return (
        <div className={cn('w-full h-full flex flex-col justify-between max-w-[232px] lg:max-w-[398px] lg:py-6 space-y-4 rounded-3xl transition-all duration-300 ease-in-out px-2', {
            'hover:shadow-lg': pathname === '/product-catalog',
        })}>
            <ProductDisplayModal
                product={product!}
                imageUrl={imageUrl}
                isNewArrival={!!isNewArrival}
                isBestSelling={!!isBestSelling}
            />
            <div className='space-y-4'>
                <p className='lg:text-lg xl:text-xl max-md:font-semibold'>
                    {formattedPrice}
                </p>
                {product && (
                    <motion.div
                        className="relative overflow-hidden"
                        animate={isShimmering ? {
                            boxShadow: [
                                "0 0 0 0 rgba(76, 142, 44, 0.4)",
                                "0 0 0 10px rgba(76, 142, 44, 0)",
                                "0 0 0 0 rgba(76, 142, 44, 0)"
                            ]
                        } : {}}
                        transition={{ duration: 0.8 }}
                    >
                        <Button
                            onClick={handleAddToCart}
                            className={`w-full py-3 rounded-[12px] relative overflow-hidden ${isShimmering ? 'bg-green-600' : ''
                                }`}
                            disabled={isShimmering}
                        >
                            <span className={isShimmering ? 'text-transparent' : ''}>
                                Add to Cart
                            </span>

                            {isShimmering && (
                                <motion.div
                                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
                                    initial={{ x: '-100%' }}
                                    animate={{ x: '100%' }}
                                    transition={{
                                        duration: 0.6,
                                        ease: "easeInOut",
                                        repeat: 1
                                    }}
                                />
                            )}

                            {isShimmering && (
                                <motion.div
                                    className="absolute inset-0 flex items-center justify-center"
                                    initial={{ scale: 0, opacity: 0 }}
                                    animate={{ scale: 1, opacity: 1 }}
                                    transition={{ delay: 0.3, duration: 0.3 }}
                                >
                                    <motion.svg
                                        className="w-5 h-5 text-white"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                        initial={{ pathLength: 0 }}
                                        animate={{ pathLength: 1 }}
                                        transition={{ delay: 0.4, duration: 0.3 }}
                                    >
                                        <motion.path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M5 13l4 4L19 7"
                                        />
                                    </motion.svg>
                                </motion.div>
                            )}
                        </Button>
                    </motion.div>
                )}
            </div>
        </div>
    )
}

export default ProductCard