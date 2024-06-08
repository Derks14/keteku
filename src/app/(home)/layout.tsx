import Footer from "@/components/sections/footer";
import Nav from "@/components/sections/nav";
import Main from "@/components/sections/main";
import { ReactNode } from "react";

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <>
      <div className="flex h-full w-full flex-auto overflow-hidden">
        <Nav />
        <Main />
      </div>
    </>
  );
}
