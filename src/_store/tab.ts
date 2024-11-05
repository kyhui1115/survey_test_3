import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

interface TabState {
  tabs: TabItem[];
  newTab: NewTab;
  activeKey: string;

  setTabs: (tabs: TabItem[]) => void;
  setNewTab: (newTab: NewTab) => void;
  setActiveKey: (key: string) => void;
  addTab: () => void;
}

interface TabItem {
  label: string;
  link: string;
  key: string;
}

interface NewTab {
  label: string;
  link: string;
  key: string;
}

const useTabStore = create<TabState>()(
  persist(
    (set) => ({
      tabs: [],
      newTab: { label: "", link: "", key: "" },
      activeKey: "0",

      setTabs: (tabs) => set({ tabs }),
      setNewTab: (newTab) => set({ newTab }),
      setActiveKey: (key) => set({ activeKey: key }),
      addTab: () =>
        set((state) => ({
          tabs: [...state.tabs, { ...state.newTab }],
          activeKey: state.newTab.key,
        })),
    }),
    {
      name: "tab",
      storage: createJSONStorage(() => sessionStorage),
    }
  )
);

export default useTabStore;
