import { create } from "zustand";

type SidebarState = {
  isOpen: boolean;
  // toggle: boolean;
  temporaryOpen: boolean;
  onToggle: () => void;
  onClose: () => void;
  onOpen: () => void;
  onMouseOver: () => void;
  onMouseLeave: () => void;
};

export const useSidebar = create<SidebarState>((set) => ({
  isOpen: true,
  // toggle: false,
  temporaryOpen: false,
  onToggle: () => set((state) => ({ isOpen: !state.isOpen })),
  onClose: () => set(() => ({ isOpen: false, temporaryOpen: false })),
  onOpen: () => set(() => ({ isOpen: true, temporaryOpen: false })),
  onMouseOver: () => set(() => ({ temporaryOpen: true })),
  onMouseLeave: () => set(() => ({ temporaryOpen: false })),
}));
