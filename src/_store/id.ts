import { create } from "zustand";
import { createJSONStorage, persist, PersistOptions } from "zustand/middleware";

interface IdState {
  yearId: number;
  subjectId: number;
  navHdId: string;
  navSdId: string;

  setSubjectId: (id: number) => void;
  setYearId: (id: number) => void;
  setNavHdId: (id: string) => void;
  setNavSdId: (id: string) => void;

  resetYearAndSubjectId: () => void;
}

type MyPersist = (
  config: (set: any, get: any, api: any) => IdState,
  options: PersistOptions<IdState>
) => (set: any, get: any, api: any) => IdState;

const useIdStore = create<IdState>(
  (persist as MyPersist)(
    (set) => ({
      yearId: 0,
      subjectId: 0,
      navHdId: "1",
      navSdId: "0",

      setYearId: (id) => set({ yearId: id }),
      setSubjectId: (id) => set({ subjectId: id }),
      setNavHdId: (id) => set({ navHdId: id }),
      setNavSdId: (id) => set({ navSdId: id }),

      resetYearAndSubjectId: () => set({ yearId: 0, subjectId: 0 }),
    }),
    {
      name: "id",
      storage: createJSONStorage(() => sessionStorage),
    }
  )
);

export default useIdStore;
