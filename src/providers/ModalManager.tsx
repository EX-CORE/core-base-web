import { createContext, PropsWithChildren } from "react";
import { MODAL_COMPONENT, useModal } from "src/store/use-modal";

export const ModalContext = createContext<null | ReturnType<typeof useModal>>(
  null
);

export default function ModalManager() {
  const modal = useModal((state) => state.modal);

  const renderPopup = () => {
    if (!modal) return null;

    const Component: React.ComponentType<any> = MODAL_COMPONENT[modal.type];
    return <Component {...modal?.props} />;
  };

  return <>{renderPopup()}</>;
}
