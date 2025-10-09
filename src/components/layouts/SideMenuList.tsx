import { useNavigate } from "react-router-dom";
import { getRoleMenuList, getRoleSubMenuList } from "src/lib/utils";
import { useSidebar } from "src/store/use-sidebar";

type Props = {
  isOpen?: boolean;
};

export default function SideMenuList({ isOpen = true }: Props) {
  const navigate = useNavigate();

  const USER_ROLE = "ADMIN";

  const MENU_LIST = getRoleMenuList(USER_ROLE);

  return (
    <>
      {MENU_LIST.map(({ MENU }) => (
            <button
              key={MENU.VALUE}
              onClick={() => navigate(MENU.LINK)}
              className={`h-10 relative items-center rounded-[4px] shrink-0 w-full transition-colors hover:bg-slate-100`}
            >
              <div className={`flex flex-row overflow-clip relative size-full box-border content-stretch items-center gap-3 py-2 w-full px-0 text-[14px]`}>
                {MENU.ICON}{isOpen && MENU.LABEL}
              </div>
            </button>
          ))
        }
    </>
  );
}
