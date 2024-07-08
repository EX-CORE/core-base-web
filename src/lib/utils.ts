import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import { ROLE_MENULIST_MAP } from "./constants";

type RoleMenuResult = {
  CATEGORY: string;
  MENU_LIST: string[];
}[];

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const getRoleMenuList = (role: "ADMIN" | "USER") => {
  return ROLE_MENULIST_MAP[role];
};

export const getRoleSubMenuList = (
  role: "ADMIN" | "USER",
  category?: string
) => {
  return (ROLE_MENULIST_MAP[role] as RoleMenuResult).find(
    ({ CATEGORY }) => CATEGORY === category
  )!;
};
