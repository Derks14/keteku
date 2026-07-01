import { ReactNode } from "react";
import { cn } from "@/components/lib/utils.ts";

interface stackProps {
  className?: string;
  name: string;
  children?: ReactNode;
}

const TechStack = ({ className, name, children }: stackProps) => {
  return (
    <>
      <div
        className={cn(
          "flex items-center gap-1 rounded-full bg-blue-500/10 px-2.5 py-1 text-center text-xs font-medium text-blue-700 dark:text-blue-300",
          className,
        )}
      >
        <span>{children}</span>
        <span>{name}</span>
      </div>
    </>
  );
};

export default TechStack;
