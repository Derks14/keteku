import { ReactNode } from "react";
import { cn } from "@/services/utils";
import TopNav from "@/components/sections/top-nav";

interface wrapper_props {
  children: ReactNode;
  page: string;
  row_cols_class: string;
}

const wrapper = ({ children, page, row_cols_class }: wrapper_props) => {
  return (
    <div className="h-full w-full">
      <TopNav title={page}></TopNav>
      <div className={cn("grid h-full w-full gap-4", row_cols_class)}>{children}</div>
    </div>
  );
};
export default wrapper;
