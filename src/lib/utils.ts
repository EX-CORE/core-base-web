import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import { ROLE_MENULIST_MAP } from "./constants";

type RoleMenuResult =
  | {
      CATEGORY: string;
      MENU_LIST: string[];
    }[]
  | { CATEGORY: string; MENU_LIST: string[] }
  | undefined;

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const getRoleMenuList = (
  role: "ADMIN" | "USER",
  category?: String
): RoleMenuResult => {
  if (!category) return ROLE_MENULIST_MAP[role];

  return ROLE_MENULIST_MAP[role].find(({ CATEGORY }) => CATEGORY === category); // 객체 하나
};
