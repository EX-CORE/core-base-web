import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import { ROLE_MENULIST_MAP } from "./constants";

type RoleMenuDetail = {
  LABEL: string;
  VALUE: string;
  LINK: string;
};

type RoleMenuResult = {
  CATEGORY: RoleMenuDetail;
  MENU_LIST: RoleMenuDetail[];
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
    ({ CATEGORY }) => CATEGORY.LABEL === category
  )!;
};
