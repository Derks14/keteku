import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const toggleMobileNav = () => {
  const sidebar = document.getElementById("mobileSideBar") as HTMLElement;
  sidebar.classList.toggle("-translate-x-full");
  document.body.classList.toggle("overflow-hidden");
};
