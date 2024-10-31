import { create } from "zustand";

interface subjectId {
  subjectId: number;

  setSubjectId: (id: number) => void;
}

const useSubjectIdStore = create<subjectId>((set) => ({
  subjectId: 0,

  setSubjectId: (id) => set({ subjectId: id }),
}));

export default useSubjectIdStore;
