import { ICartState } from "@/types";
import { create } from "zustand";

export const useCartStore = create<ICartState>((set) => ({
  cart: [],

  addToCart: (product) =>
    set((state) => {
      const existing = state.cart.find((p) => p._id === product._id);
      if (existing) {
        return {
          cart: state.cart.map((p) =>
            p._id === product._id
              ? { ...p, quantity: (p.quantity || 1) + 1 }
              : p
          ),
        };
      }
      return { cart: [...state.cart, { ...product, quantity: 1 }] };
    }),

  removeFromCart: (id) =>
    set((state) => ({ cart: state.cart.filter((p) => p._id !== id) })),

  clearCart: () => set({ cart: [] }),

  increaseQty: (id) =>
    set((state) => ({
      cart: state.cart.map((p) =>
        p._id === id ? { ...p, quantity: (p.quantity || 1) + 1 } : p
      ),
    })),

  decreaseQty: (id) =>
    set((state) => ({
      cart: state.cart
        .map((p) =>
          p._id === id ? { ...p, quantity: Math.max((p.quantity || 1) - 1, 1) } : p
        )
        .filter((p) => p.quantity !== 0),
    })),
}));