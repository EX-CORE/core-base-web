import { getRoleSubMenuList } from "src/lib/utils";

export default function SideMenuList() {
  const USER_ROLE = "ADMIN";
  const clickedCategory = "회사관리";

  const target = getRoleSubMenuList(USER_ROLE, clickedCategory);

  return (
    <div>
      {target.MENU_LIST.map((menu) => (
        <div
          onClick={() => (window.location.href = menu.LINK)}
          key={menu.VALUE}
          className="p-4"
        >
          {menu.LABEL}
        </div>
      ))}
    </div>
  );
}
