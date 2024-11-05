import { create } from "zustand";
import { createJSONStorage, persist, PersistOptions } from "zustand/middleware";

interface IdState {
  yearId: number;
  subjectId: number;

  setYearId: (id: number) => void;
  setSubjectId: (id: number) => void;

  resetYearAndSubjectId: () => void;
}

type MyPersist = (
  config: (set: any, get: any, api: any) => IdState,
  options: PersistOptions<IdState>
) => (set: any, get: any, api: any) => IdState;

const useReportIdStore = create<IdState>(
  (persist as MyPersist)(
    (set) => ({
      yearId: 0,
      subjectId: 0,

      setYearId: (id) => set({ yearId: id }),
      setSubjectId: (id) => set({ subjectId: id }),

      resetYearAndSubjectId: () => set({ yearId: 0, subjectId: 0 }),
    }),
    {
      name: "id",
      storage: createJSONStorage(() => sessionStorage),
    }
  )
);

export default useReportIdStore;
