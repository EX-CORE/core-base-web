import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import { ROLE_MENULIST_MAP } from "./constants";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const getRoleMenuList = (role: "ADMIN" | "USER", category?: string) => {
  if (!category) return ROLE_MENULIST_MAP[role];

  return ROLE_MENULIST_MAP[role].find(({ CATEGORY }) => CATEGORY === category);
};
