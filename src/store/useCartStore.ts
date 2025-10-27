import { ICartState } from "@/types";
import { create } from "zustand";
import { persist } from "zustand/middleware";

export const useCartStore = create<ICartState>()(
    persist(
        (set) => ({
            cart: [],

            addToCart: (product) => {
                set((state) => {
                    const existing = state.cart.find(
                        (p) => p._id === product._id
                    );
                    if (existing) {
                        const cart = state.cart.map((p) =>
                            p._id === product._id
                                ? { ...p, quantity: (p.quantity || 1) + 1 }
                                : p
                        );
                        return { cart };
                    }
                    return {
                        cart: [...state.cart, { ...product, quantity: 1 }],
                    };
                });
            },

            removeFromCart: (id) =>
                set((state) => ({
                    cart: state.cart.filter((p) => p._id !== id),
                })),

            clearCart: () => set({ cart: [] }),

            increaseQty: (id) =>
                set((state) => ({
                    cart: state.cart.map((p) =>
                        p._id === id
                            ? { ...p, quantity: (p.quantity || 1) + 1 }
                            : p
                    ),
                })),

            decreaseQty: (id) =>
                set((state) => ({
                    cart: state.cart
                        .map((p) =>
                            p._id === id
                                ? {
                                      ...p,
                                      quantity: Math.max(
                                          (p.quantity || 1) - 1,
                                          1
                                      ),
                                  }
                                : p
                        )
                        .filter((p) => (p.quantity || 0) > 0),
                })),
        }),
        {
            name: "cart", // key name in localStorage
        }
    )
);
