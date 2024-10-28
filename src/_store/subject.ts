import { create } from "zustand";

interface subject {
  id: number;
  setId: (num: number) => void;
}

const useSubjectStore = create<subject>((set) => ({
  id: 0,
  setId: (num) => set({ id: num }),
}));

export default useSubjectStore;
