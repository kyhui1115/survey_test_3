import { create } from "zustand";

interface id {
  yearId: number;
  subjectId: number;
  navHdId: number;

  setSubjectId: (id: number) => void;
  setYearId: (id: number) => void;
  setNavHdId: (id: number) => void;
}

const useIdStore = create<id>((set) => ({
  yearId: 0,
  subjectId: 0,
  navHdId: 1,

  setYearId: (id) => set({ yearId: id }),
  setSubjectId: (id) => set({ subjectId: id }),
  setNavHdId: (id) => set({ navHdId: id }),
}));

export default useIdStore;
