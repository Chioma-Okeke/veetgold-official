import { create } from "zustand";

type SeasonState = {
  isChristmas: boolean;
  setChristmas: (value: boolean) => void;
};

const isDecember = () => {
    const today = new Date();
    return today.getMonth() === 11
}

export const useSeasonStore = create<SeasonState>((set) => ({
    isChristmas: isDecember(),
    setChristmas: (value: boolean) => set({ isChristmas: value }),
}));
