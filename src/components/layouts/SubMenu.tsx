import { Outlet, NavLink, useMatches } from "react-router-dom";
import { ROLE, ROLE_MENULIST_MAP } from "src/lib/role";

export default function SubMenu() {
  const matches = useMatches();
  const targetPath = matches[matches.length - 1].pathname;

  // 관리자로 가정
  const subMenuList =
    ROLE_MENULIST_MAP[ROLE.COMPANY_ADMIN.VALUE].find(({ MENU }) =>
      new RegExp(MENU.LINK).test(targetPath)
    )?.SUB_MENU || [];

  const hideSubMenuBar = /^\/management\/review/.test(targetPath);

  return (
    <div>
      {!hideSubMenuBar && (
        <div className="p-8 flex items-center font-black gap-4 border-b font-pretendard">
          {subMenuList.map((subMenu) => (
            <NavLink
              key={subMenu.VALUE}
              to={subMenu.LINK}
              className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "active" : ""
              }
            >
              {subMenu.LABEL}
            </NavLink>
          ))}
        </div>
      )}

      <Outlet />
    </div>
  );
}
