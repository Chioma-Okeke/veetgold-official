import React from 'react'
import { Dialog, DialogContent, DialogTrigger } from '../ui/dialog'
import Image from 'next/image'
import { IProduct } from '@/types'
import { useCartStore } from '@/store/useCartStore';
import { BULK_ORDER_LINK } from '@/lib/constants';

function ProductDisplayModal({ product }: { product: IProduct }) {
    const addToCart = useCartStore((state) => state.addToCart);

    return (
        <Dialog>
            <DialogTrigger asChild>
                <h4 className='text-lg lg:text-xl lg:font-semibold break-words'>
                    {product?.name || "Mother and Child Lotion"}
                </h4>
            </DialogTrigger>
            <DialogContent className='max-w-2xl flex max-lg:flex-col gap-5 max-md:w-[95%] mx-auto rounded-2xl'>
                <div className="relative w-full h-64">
                    <Image
                        src={product.images[0].asset.url}
                        alt={product.name}
                        fill
                        className="object-center object-contain"
                    />
                </div>

                <div className="py-5">
                    <h1 className="text-2xl font-semibold text-gray-800 mb-2">
                        {product.name}
                    </h1>
                    <p className="text-gray-600 text-sm mb-4">{product.description}</p>

                    <p className="text-xl font-semibold text-green-700 mb-4">
                        ₦{product.price.toLocaleString()}
                    </p>

                    <div className="flex flex-col gap-3">
                        <button
                            onClick={() => addToCart(product)}
                            className="bg-green-600 text-white py-3 rounded-lg hover:bg-green-700 transition font-medium"
                        >
                            Add to Cart
                        </button>

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