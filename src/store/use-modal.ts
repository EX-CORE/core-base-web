import { AddTeamModal } from "src/components/modals/AddTeamModal";
import { AddOrganizationModal } from "src/components/modals/AddOrganizationModal";
import { SearchAddressModal } from "src/components/modals/SearchAddressModal";
import { create } from "zustand";

export const MODAL_TYPES = {
  ADD_TEAM: "ADD_TEAM",
  ADD_ORGANIZATION: "ADD_ORGANIZATION",
  SEARCH_ADDRESS: "SEARCH_ADDRESS",
} as const;

export const MODAL_COMPONENT = {
  [MODAL_TYPES.ADD_TEAM]: AddTeamModal,
  [MODAL_TYPES.ADD_ORGANIZATION]: AddOrganizationModal,
  [MODAL_TYPES.SEARCH_ADDRESS]: SearchAddressModal,
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
