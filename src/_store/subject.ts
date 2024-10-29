import { create } from "zustand";

interface subject {
  id: number;
  year: string;
  setId: (num: number) => void;
  setYear: (num: string) => void;
}

const useSubjectStore = create<subject>((set) => ({
  id: 0,
  year: "2024",

  setId: (num) => set({ id: num }),
  setYear: (year) => set({ year: year }),
}));

export default useSubjectStore;
