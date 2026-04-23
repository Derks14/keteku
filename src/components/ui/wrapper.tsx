import { ReactNode } from "react";
import TopNav from "@/components/sections/top-nav.tsx";
import { cn } from "@/components/lib/utils.ts";


interface wrapper_props {
  children: ReactNode;
  page?: string;
  row_cols_class: string;
}

const wrapper = ({ children, page, row_cols_class }: wrapper_props) => {
  return (
    <div className="h-full w-full">
      {/*<TopNav title={page}></TopNav>*/}
      <div className={cn("md:grid h-full md:gap-3 w-full", row_cols_class)}>{children}</div>
    </div>
  );
};
export default wrapper;
