import { getRoleMenuList } from "src/lib/utils";

export default function HeaderNavbar() {
  const USER_ROLE = "ADMIN";

  const MENU_LIST = getRoleMenuList(USER_ROLE) as { CATEGORY: string }[];

  return (
    <div className="flex justify-around h-full items-center gap-8 pt-2">
      {MENU_LIST.map(({ CATEGORY }) => (
        <div key={CATEGORY}>{CATEGORY}</div>
      ))}
    </div>
  );
}
