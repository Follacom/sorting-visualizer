import { create } from "zustand";

export type DrawerState = {
  open: boolean;
  width: {
    collapsed: string;
    expanded: string;
  };
  toggleDrawer: () => void;
};

const useDrawerStore = create<DrawerState>((set) => ({
  open: false,
  width: {
    collapsed: "w-0",
    expanded: "w-48",
  },
  toggleDrawer: () => set((state) => ({ open: !state.open })),
}));

export default useDrawerStore;
