import { useSidebar } from "src/store/use-sidebar";
import SideInfoBox from "./SideInfoBox";
import SideLogoBox from "./SideLogoBox";
import SideMenuList from "./SideMenuList";
import SideBarToggleButton from "./SideBarToggleButton";

export default function Toggle() {
  const { isOpen, onOpen, onClose, temporaryOpen, onMouseOver, onMouseLeave } =
    useSidebar();

  return (
    <>
      {isOpen && (
        <div className="flex flex-col w-full h-full p-6 relative">
          <SideBarToggleButton onClick={onClose}></SideBarToggleButton>
          <SideLogoBox />
          <SideMenuList />
          <SideInfoBox className="absolute bottom-4" />
        </div>
      )}

      {!isOpen && temporaryOpen && (
        <div
          className="flex flex-col w-full h-full p-6 relative"
          onMouseLeave={onMouseLeave}
        >
          <SideBarToggleButton onClick={onOpen}></SideBarToggleButton>
          <SideLogoBox />
          <SideMenuList />
          <SideInfoBox className="absolute bottom-4" />
        </div>
      )}

      {!isOpen && !temporaryOpen && (
        <div className="flex flex-col w-full h-full pt-6 relative ">
          <SideBarToggleButton onClick={onOpen} onMouseOver={onMouseOver}></SideBarToggleButton>
        </div>
      )}
    </>
  );
}
