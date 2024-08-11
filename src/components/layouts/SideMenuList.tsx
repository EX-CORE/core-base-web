import { useNavigate } from "react-router-dom";
import { getRoleMenuList, getRoleSubMenuList } from "src/lib/utils";
import { useSidebar } from "src/store/use-sidebar";

export default function SideMenuList() {
  const navigate = useNavigate();
  const { toggle } = useSidebar();

  const USER_ROLE = "ADMIN";

  const MENU_LIST = getRoleMenuList(USER_ROLE);

  return (
    <>
      {toggle
        ? MENU_LIST.map(({ MENU }) => (
            <p
              key={MENU.VALUE}
              onClick={() => navigate(MENU.LINK)}
              className="p-2"
            >
              {MENU.LABEL}
            </p>
          ))
        : MENU_LIST.map(({ MENU }) => {
            return (
              <p key={MENU.VALUE} onClick={() => navigate(MENU.LINK)}>
                {MENU.ICON}
              </p>
            );
          })}
    </>
  );
}
