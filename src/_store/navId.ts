import { create } from "zustand";
import { createJSONStorage, persist, PersistOptions } from "zustand/middleware";

interface IdState {
  navHdId: string;
  navSdId: string;

  setNavHdId: (id: string) => void;
  setNavSdId: (id: string) => void;
}

type MyPersist = (
  config: (set: any, get: any, api: any) => IdState,
  options: PersistOptions<IdState>
) => (set: any, get: any, api: any) => IdState;

const useNavIdStore = create<IdState>(
  (persist as MyPersist)(
    (set) => ({
      navHdId: "1",
      navSdId: "0",

      setNavHdId: (id) => set({ navHdId: id }),
      setNavSdId: (id) => set({ navSdId: id }),
    }),
    {
      name: "navId",
      storage: createJSONStorage(() => sessionStorage),
    }
  )
);

export default useNavIdStore;
