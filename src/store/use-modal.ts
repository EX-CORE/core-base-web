import { AddTeamModal } from "src/components/modals/AddTeamModal";
import { create } from "zustand";

export const MODAL_TYPES = {
  ADD_TEAM: "ADD_TEAM",
} as const;

export const MODAL_COMPONENT = {
  ADD_TEAM: AddTeamModal,
};

type Modal = {
  type: keyof typeof MODAL_TYPES;
  props: Object;
};
type ModalStore = {
  modal: null | Modal;
  openModal: ({ type, props }: Modal) => void;
};

export const useModal = create<ModalStore>((set) => ({
  modal: null,
  openModal: ({ type, props }) => set({ modal: { type, props } }),
}));
