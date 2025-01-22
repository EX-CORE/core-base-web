import { ArrowLeftFromLine, ArrowRightFromLine } from "lucide-react";
import { useSidebar } from "src/store/use-sidebar";
import { Button } from "../Button";
import SideInfoBox from "./SideInfoBox";
import SideLogoBox from "./SideLogoBox";
import SideMenuList from "./SideMenuList";

export default function Toggle() {
  const { isOpen, onOpen, onClose, temporaryOpen, onMouseOver, onMouseLeave } =
    useSidebar();

  return (
    <>
      {isOpen && (
        <div className="flex flex-col w-full h-full p-6 relative">
          <Button variant={"ghost"} onClick={onClose}>
            <ArrowLeftFromLine className="h-4 w-4 ml-auto" />
          </Button>
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
          <Button variant={"ghost"} onClick={onOpen}>
            <ArrowRightFromLine className="h-4 w-4 ml-auto" />
          </Button>
          <SideLogoBox />
          <SideMenuList />
          <SideInfoBox className="absolute bottom-4" />
        </div>
      )}

      {!isOpen && !temporaryOpen && (
        <div className="flex flex-col w-full h-full pt-6 relative ">
          <Button variant={"ghost"} onClick={onOpen} onMouseOver={onMouseOver}>
            <ArrowRightFromLine className="h-4 w-4 " />
          </Button>
        </div>
      )}
    </>
  );
}
