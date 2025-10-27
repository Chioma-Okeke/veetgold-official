import React, { useState } from 'react'
import { Dialog, DialogContent, DialogTrigger } from '../ui/dialog'
import Image from 'next/image'
import { IProduct } from '@/types'
import { useCartStore } from '@/store/useCartStore';
import { BULK_ORDER_LINK } from '@/lib/constants';
import { Button } from '../ui/button';
import { motion } from 'framer-motion'
import { usePathname } from 'next/navigation';
import { Badge } from '../ui/badge';
import { cn } from '@/lib/utils';

interface ProductDisplayModalProps {
    product: IProduct;
    imageUrl: string;
    isNewArrival: boolean;
    isBestSelling: boolean;
}

function ProductDisplayModal({ product, imageUrl, isNewArrival, isBestSelling }: ProductDisplayModalProps) {
    const [isOpen, setIsOpen] = React.useState(false);
    const [isShimmering, setIsShimmering] = useState(false);
    const addToCart = useCartStore((state) => state.addToCart);
    const pathname = usePathname()

    const handleAddToCart = () => {
        setIsShimmering(true)
        addToCart(product)

        setTimeout(() => {
            setIsShimmering(false)
        }, 1000)
    }

    return (
        <Dialog open={isOpen} onOpenChange={() => {
            if (pathname === "/product-catalog") {
                setIsOpen(!isOpen);
            } else {
                setIsOpen(false);
            }
        }}>
            <DialogTrigger className={cn('w-full text-start h-full cursor-pointer', {
                'pointer-events-none': pathname !== '/product-catalog',
                })}>
                <div className='relative'>
                    <div className='overflow-hidden w-full aspect-[364/455] max-w-[364px] rounded-2xl'>
                        <motion.div
                            initial={pathname === "/product-catalog" ? { filter: "blur(20px)", opacity: 0.7 } : {}}
                            whileInView={pathname === "/product-catalog" ? { filter: "blur(0px)", opacity: 1 } : {}}
                            viewport={{ once: true, amount: 0.3 }}
                            transition={{ duration: 1, ease: "easeOut" }}
                            className="relative w-full h-full rounded-[12px]"
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
                    <div className='space-y-3 w-full min-w-[100px] max-w-[232px] lg:max-w-[390px] mt-4'>
                        {/* {product && <ProductDisplayModal product={product} />} */}
                        <h4 className='lg:text-xl lg:font-semibold break-words cursor-pointer'>
                            {product?.name || "Mother and Child Lotion"}
                        </h4>
                    </div>
                </div>
            </DialogTrigger>
            <DialogContent className='max-w-3xl flex max-lg:flex-col gap-5 max-md:w-[95%] mx-auto rounded-2xl min-h-[60vh] overflow-y-auto max-h-[90vh]'>
                <div className="relative w-full h-full rounded-[12px] aspect-[350/400] max-w-[350px] mx-auto">
                    <Image
                        src={product?.images[0].asset.url}
                        alt={product?.name}
                        fill
                        sizes='100vw'
                        className="object-center object-contain rounded-[12px]"
                    />
                </div>

                <div className="py-5 flex flex-col justify-between">
                    <div>
                        <h1 className="text-2xl font-semibold text-gray-800 mb-2">
                            {product?.name}
                        </h1>
                        <p className="text-gray-600 text-sm mb-4">{product?.description}</p>
                    </div>

                    <div className="flex flex-col gap-3">
                        <p className="text-xl font-semibold text-green-700 mb-4">
                            ₦{product?.price.toLocaleString()}
                        </p>
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
                                className={`w-full border-none rounded-[12px] py-3 relative overflow-hidden ${isShimmering ? 'bg-green-600' : ''
                                    }`}
                                disabled={isShimmering}
                            >
                                <span className={isShimmering ? 'text-transparent' : ''}>
                                    Add to Cart
                                </span>

                                {/* Shimmer overlay */}
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

                                {/* Success checkmark */}
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

                        <a
                            href={BULK_ORDER_LINK}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-center text-sm text-green-700 hover:underline"
                        >
                            For bulk orders, kindly reach us here →
                        </a>
                    </div>
                </div>
            </DialogContent>
        </Dialog>
    )
}

export default ProductDisplayModal