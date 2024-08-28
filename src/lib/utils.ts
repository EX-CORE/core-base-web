import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import { ROLE_MENULIST_MAP } from "./role";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const getRoleMenuList = (role: "ADMIN" | "USER") => {
  return ROLE_MENULIST_MAP[role];
};

export const getRoleSubMenuList = (role: "ADMIN" | "USER", menu?: string) => {
  return ROLE_MENULIST_MAP[role].find(({ MENU }) => MENU.LABEL === menu)!;
};
