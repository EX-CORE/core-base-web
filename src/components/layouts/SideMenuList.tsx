// @ts-ignore

import { getRoleMenuList } from "src/lib/utils";

export default function SideMenuList() {
  const USER_ROLE = "ADMIN";
  const clickedCategory = "회사관리";

  const target = getRoleMenuList(USER_ROLE, clickedCategory) as {
    CATEGORY: string;
    MENU_LIST: [];
  };

  return (
    <div>
      {target.MENU_LIST.map((menu) => (
        <div key={menu}>{menu}</div>
      ))}
    </div>
  );
}
