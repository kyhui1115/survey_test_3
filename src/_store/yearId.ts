import { create } from "zustand";

interface yearId {
  yearId: number;

  setYearId: (id: number) => void;
}

const useYearIdStore = create<yearId>((set) => ({
  yearId: 0,

  setYearId: (id) => set({ yearId: id }),
}));

export default useYearIdStore;
