import { AddTeamModal } from "src/components/modals/AddTeamModal";
import { create } from "zustand";

export const MODAL_TYPES = {
  ADD_TEAM: "ADD_TEAM",
} as const;

export const MODAL_COMPONENT = {
  [MODAL_TYPES.ADD_TEAM]: AddTeamModal,
};

type Modal = {
  type: keyof typeof MODAL_TYPES;
  props?: Object; // 각 모달 마다 props가 다를 수 있기 때문에 Object로 설정
};
type ModalStore = {
  modal: null | Modal;
  openModal: ({ type, props }: Modal) => void;
  closeModal: () => void;
};

export const useModal = create<ModalStore>((set) => ({
  modal: null,
  openModal: ({ type, props }) => set({ modal: { type, props } }),
  closeModal: () => set({ modal: null }),
}));
