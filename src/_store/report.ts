import { create } from "zustand";
import { createJSONStorage, persist, PersistOptions } from "zustand/middleware";

interface state {
  yearId: string;
  subjectId: string;

  setYearId: (id: string) => void;
  setSubjectId: (id: string) => void;

  resetYearAndSubjectId: () => void;
}

type Persist = (
  config: (set: any, get: any, api: any) => state,
  options: PersistOptions<state>
) => (set: any, get: any, api: any) => state;

const useReportStore = create<state>(
  (persist as Persist)(
    (set) => ({
      yearId: "0",
      subjectId: "0",

      setYearId: (id) => set({ yearId: id }),
      setSubjectId: (id) => set({ subjectId: id }),

      resetYearAndSubjectId: () => set({ yearId: "0", subjectId: "0" }),
    }),
    {
      name: "report",
      storage: createJSONStorage(() => sessionStorage),
    }
  )
);

export default useReportStore;
