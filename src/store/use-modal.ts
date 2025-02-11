import { AddTeamModal } from "src/components/modals/AddTeamModal";
import { UpdateTeamModal } from "src/components/modals/UpdateTeamModal";
import { AddMemberModal } from "src/components/modals/AddMemberModal";
import { AddOrganizationModal } from "src/components/modals/AddOrganizationModal";
import { SearchAddressModal } from "src/components/modals/SearchAddressModal";
import { create } from "zustand";

export const MODAL_TYPES = {
  ADD_TEAM: "ADD_TEAM",
  UPDATE_TEAM: "UPDATE_TEAM",
  ADD_ORGANIZATION: "ADD_ORGANIZATION",
  SEARCH_ADDRESS: "SEARCH_ADDRESS",
  ADD_MEMBER: "ADD_MEMBER",
} as const;

export const MODAL_COMPONENT = {
  [MODAL_TYPES.ADD_TEAM]: AddTeamModal,
  [MODAL_TYPES.UPDATE_TEAM]: UpdateTeamModal,
  [MODAL_TYPES.ADD_MEMBER]: AddMemberModal,
  [MODAL_TYPES.ADD_ORGANIZATION]: AddOrganizationModal,
  [MODAL_TYPES.SEARCH_ADDRESS]: SearchAddressModal,
};

type Modal = {
  type: keyof typeof MODAL_TYPES;
  props?: Object; // 각 모달 마다 props가 다를 수 있기 때문에 Object로 설정
  onClose?: Function | null; // 모들이 닫길 때 호출되는 callback 함수
};
type ModalStore = {
  modal: null | Modal;
  openModal: ({ type, props, onClose }: Modal) => void;
  closeModal: () => void;
};

export const useModal = create<ModalStore>((set, get) => ({
  modal: null,
  openModal: ({ type, props, onClose }) =>
    set({ modal: { type, props, onClose } }),
  closeModal: () => {
    const {modal} = get();
    if(modal?.onClose) {
      modal.onClose()
    }
    set({modal: null})
  },
}));
