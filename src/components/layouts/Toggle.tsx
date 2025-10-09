import { useSidebar } from "src/store/use-sidebar";
import SideInfoBox from "./SideInfoBox";
import SideLogoBox from "./SideLogoBox";
import SideMenuList from "./SideMenuList";
import SideBarToggleButton from "./SideBarToggleButton";

export default function Toggle() {
  const { isOpen, onOpen, onClose } =
    useSidebar();

  return (
    <>
      {isOpen && (
        <div className="flex flex-col h-full p-6 relative w-60">
          <SideBarToggleButton onClick={onClose}></SideBarToggleButton>
          <SideLogoBox toggle={isOpen} />
          <SideMenuList isOpen={isOpen}/>
          <SideInfoBox className="absolute bottom-4" />
        </div>
      )}

      {!isOpen && (
        <div className="flex flex-col h-full p-6 relative w-20">
          <SideBarToggleButton onClick={onOpen}></SideBarToggleButton>
          <SideMenuList isOpen={isOpen}/>
        </div>
      )}
    </>
  );
}
