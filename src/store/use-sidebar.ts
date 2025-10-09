import { create } from "zustand";

type SidebarState = {
  isOpen: boolean;
  onToggle: () => void;
  onClose: () => void;
  onOpen: () => void;
};

export const useSidebar = create<SidebarState>((set) => ({
  isOpen: true,
  onToggle: () => set((state) => ({ isOpen: !state.isOpen })),
  onClose: () => set(() => ({ isOpen: false })),
  onOpen: () => set(() => ({ isOpen: true })),
}));
