import { ArrowLeftFromLine, ArrowRightFromLine } from "lucide-react";
import { useSidebar } from "src/store/use-sidebar";
import { Button } from "../Button";
import { Hint } from "../Hint";
import SideInfoBox from "./SideInfoBox";
import SideLogoBox from "./SideLogoBox";
import SideMenuList from "./SideMenuList";

export default function Toggle() {
  // const { toggle, onToggle } = useSidebar();

  // const label = toggle ? "사이드바 접기" : "사이드바 참깨";

  return (
    <>
      {/* {toggle ? ( */}
      <div className="flex flex-col w-full h-full p-6 relative">
        <SideLogoBox />

        {/* <Hint label={label} side="right" asChild>
          <Button variant={"ghost"} onClick={onToggle} className="justify-end">
            <ArrowLeftFromLine className="h-4 w-4" />
          </Button>
        </Hint> */}

        <SideMenuList />

        <SideInfoBox className="absolute bottom-4" />
      </div>
      {/* ) : (
        <div className="flex flex-col w-full h-full p-6 relative gap-6">
          <div className="hidden lg:flex -w-full items-center justify-center pt-4 mb-4">
            <Hint label={label} side="right" asChild>
              <Button variant={"ghost"} onClick={onToggle}>
                <ArrowRightFromLine className="h-4 w-4 ml-auto" />
              </Button>
            </Hint>
          </div>

          <SideMenuList />
        </div>
      )} */}
    </>
  );
}
