import { create } from "zustand";
import { createJSONStorage, persist, PersistOptions } from "zustand/middleware";

interface state {
  year: string;
  yearId: string;
  subjectId: string;

  setYear: (year: string) => void;
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
      year: "",
      yearId: "0",
      subjectId: "0",

      setYear: (year) => set({ year }),
      setYearId: (id) => set({ yearId: id }),
      setSubjectId: (id) => set({ subjectId: id }),

      resetYearAndSubjectId: () =>
        set({ year: "", yearId: "0", subjectId: "0" }),
    }),
    {
      name: "report",
      storage: createJSONStorage(() => sessionStorage),
    }
  )
);

export default useReportStore;
