import { create } from "zustand";

type SidebarState = {
  toggle: boolean;
  onToggle: () => void;
};

export const useSidebar = create<SidebarState>((set) => ({
  toggle: false,
  onToggle: () => set((state) => ({ toggle: !state.toggle })),
}));
