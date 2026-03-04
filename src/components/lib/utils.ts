import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const toggleMobileNav = () => {
  const sidebar = document.getElementById("mobile-nav") as HTMLElement;
  const hamburger = document.getElementById("hamburger") as HTMLElement;
  hamburger.classList.toggle("open-hamburger");
  sidebar.classList.toggle("-translate-y-full");
  document.body.classList.toggle("overflow-hidden");
  document.body.classList.toggle("fixed");
};

export const navLinks: { label: string; path: string }[] = [
  {
    label: "Projects",
    path: "/projects",
  },
  {
    label: "About",
    path: "/about",
  },
  {
    label: "Blog",
    path: "/blog",
  },

];


export const toggleTheme = () => {

}