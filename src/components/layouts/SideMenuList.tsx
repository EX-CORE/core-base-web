import { useNavigate } from "react-router-dom";
import { getRoleMenuList, getRoleSubMenuList } from "src/lib/utils";

export default function SideMenuList() {
  const navigate = useNavigate();

  const USER_ROLE = "ADMIN";

  const MENU_LIST = getRoleMenuList(USER_ROLE);

  return (
    <div>
      {MENU_LIST.map(({ MENU }) => (
        <div
          key={MENU.VALUE}
          onClick={() => navigate(MENU.LINK)}
          className="p-2"
        >
          {MENU.LABEL}
        </div>
      ))}
    </div>
  );
}
