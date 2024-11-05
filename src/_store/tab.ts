import { create } from "zustand";

interface tab {
  tabs: tabItem[];
  newTab: newTab;
  newKey: string;
  activeKey: string;

  setTabs: (tabs: tabItem[]) => void;
  setNewTab: (newTab: newTab) => void;
  setActiveKey: (key: string) => void;
  addTab: () => void;
}

interface tabItem {
  label: string;
  children: string;
  key: string;
}

interface newTab {
  label: string;
  children: string;
}

const useTabStore = create<tab>((set) => ({
  tabs: [],
  newTab: { label: "", children: "" },
  newKey: "1",
  activeKey: "0",

  setTabs: (tabs) => set({ tabs }),
  addTab: () =>
    set((state) => ({
      tabs: [...state.tabs, { ...state.newTab, key: state.newKey }],
      newKey: String(Number(state.newKey) + 1),
      activeKey: state.newKey,
    })),
  setNewTab: (newTab) => set({ newTab }),
  setActiveKey: (key) => set({ activeKey: key }),
}));

export default useTabStore;
