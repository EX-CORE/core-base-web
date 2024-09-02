import { createContext, PropsWithChildren } from "react";
import { useModal } from "src/store/use-modal";

export const ModalContext = createContext<null | ReturnType<typeof useModal>>(
  null
);

export default function ModalProvider({ children }: PropsWithChildren) {
  const modalStore = useModal();

  return (
    <ModalContext.Provider value={modalStore}>{children}</ModalContext.Provider>
  );
}
