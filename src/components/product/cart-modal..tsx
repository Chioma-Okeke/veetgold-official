import React from 'react'
import { Dialog, DialogContent, DialogTrigger } from '../ui/dialog'
import { ShoppingBasket, ShoppingCart } from 'lucide-react'
import { useCartStore } from '@/store/useCartStore'
import { Badge } from '../ui/badge';
import { Button } from '../ui/button';

function CartModal() {
    const { cart, decreaseQty, increaseQty, removeFromCart, clearCart } = useCartStore();
    const phoneNumber = "2348033831759";

    const handleSendToWhatsApp = () => {
        if (cart.length === 0) return;

        const itemsList = cart.map((item) => `- ${item.name} (₦${item.price.toLocaleString()} x ${item.quantity})`).join('%0A');
        const total = cart.reduce((sum, item) => sum + item.price * (item.quantity || 1), 0);
        const message = `Hello Veetgold,%0A%0AI'd like to order:%0A${itemsList}%0A%0ATotal: ₦${total.toLocaleString()}%0A%0APlease confirm availability.`;
        const url = `https://wa.me/${phoneNumber}?text=${message}`;
        window.open(url, "_blank");
    }

    return (
        <Dialog>
            <DialogTrigger asChild>
                <div className='relative w-full max-w-11 cursor-pointer'>
                    <ShoppingBasket size={24} className='hover:scale-110 transition-all ease-in-out duration-300 max-lg:text-primary' />
                    <Badge className='rounded-full absolute top-0 right-0 text-xs size-3'>{cart.length}</Badge>
                </div>
            </DialogTrigger>
            <DialogContent className='max-md:w-[95%] mx-auto rounded-2xl overflow-y-auto max-h-[90vh]'>
                {cart.length === 0 ? <div className=' min-h-[30vh] flex flex-col items-center justify-center h-full gap-5'>
                    <div className='p-7 rounded-full bg-primary/20 w-fit'>
                        <ShoppingCart size={40} className='text-primary' />
                    </div>
                    <div>
                        <h3 className="text-center text-gray-900 font-semibold text-lg xl:text-2xl">Your cart is empty.</h3>
                        <p className='text-center text-gray-600'>Kindly add items to your cart.</p>
                    </div>
                </div> : <div className="">
                    <h2 className="text-2xl font-semibold mb-4">Your Cart</h2>
                    <ul className="space-y-3">
                        {cart.map((item) => (
                            <li
                                key={item._id}
                                className="flex justify-between items-center border p-3 rounded-lg"
                            >
                                <div>
                                    <p className="font-medium">{item.name}</p>
                                    <p className="text-sm text-gray-600">
                                        ₦{item.price?.toLocaleString()} x {item.quantity}
                                    </p>
                                </div>
                                <div className="flex items-center gap-3">
                                    <button
                                        onClick={() => decreaseQty(item._id)}
                                        className="px-2 py-1 border rounded hover:bg-gray-100"
                                    >
                                        -
                                    </button>
                                    <button
                                        onClick={() => increaseQty(item._id)}
                                        className="px-2 py-1 border rounded hover:bg-gray-100"
                                    >
                                        +
                                    </button>
                                    <button
                                        onClick={() => removeFromCart(item._id)}
                                        className="text-red-500 text-sm hover:underline"
                                    >
                                        Remove
                                    </button>
                                </div>
                            </li>
                        ))}
                    </ul>

                    <div className="mt-6 flex justify-between font-semibold">
                        <p>Total</p>
                        <p>
                            ₦
                            {cart
                                .reduce((sum, i) => sum + i.price * (i.quantity || 1), 0)
                                .toLocaleString()}
                        </p>
                    </div>

                    <div className="flex gap-3 mt-6">
                        <Button
                            onClick={handleSendToWhatsApp}
                            className="flex-1 py-3 rounded-[12px]"
                        >
                            Send Order to WhatsApp
                        </Button>
                        <Button
                            variant={"outline"}
                            onClick={clearCart}
                            className="flex-1 py-3 rounded-[12px]"
                        >
                            Clear Cart
                        </Button>
                    </div>
                </div>}
            </DialogContent>
        </Dialog>
    )
}

export default CartModal