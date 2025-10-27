import { ICartState } from "@/types";
import { create } from "zustand";

const data = localStorage.getItem("cart");
const parsedCart: ICartState["cart"] = data ? JSON.parse(data) : [];

export const useCartStore = create<ICartState>((set) => ({
    cart: parsedCart,

    addToCart: (product) => {
        set((state) => {
            const existing = state.cart.find((p) => p._id === product._id);
            if (existing) {
                const cart = state.cart.map((p) =>
                    p._id === product._id
                        ? { ...p, quantity: (p.quantity || 1) + 1 }
                        : p
                );
                localStorage.setItem("cart", JSON.stringify(cart));
                return {
                    cart: cart,
                };
            }
            localStorage.setItem(
                "cart",
                JSON.stringify([...state.cart, { ...product, quantity: 1 }])
            );
            return { cart: [...state.cart, { ...product, quantity: 1 }] };
        });
    },

    removeFromCart: (id) =>
        set((state) => {
            const updatedCart = state.cart.filter((p) => p._id !== id);
            localStorage.setItem("cart", JSON.stringify(updatedCart));
            return { cart: updatedCart };
        }),

    clearCart: () => set(() => {
      localStorage.removeItem("cart");
      return { cart: [] };
    }),

    increaseQty: (id) =>
        set((state) => {
            const cart = state.cart.map((p) =>
                p._id === id ? { ...p, quantity: (p.quantity || 1) + 1 } : p
            );
            localStorage.setItem("cart", JSON.stringify(cart));
            return {
                cart: cart,
            };
        }),

    decreaseQty: (id) =>
        set((state) => {
            const product = state.cart
                .map((p) =>
                    p._id === id
                        ? { ...p, quantity: Math.max((p.quantity || 1) - 1, 1) }
                        : p
                )
                .filter((p) => p.quantity !== 0);
            localStorage.setItem("cart", JSON.stringify(product));
            return {
                cart: product,
            };
        }),
}));
