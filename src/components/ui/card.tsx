"use client";

import { ReactNode } from "react";
import { cn } from "@/services/utils";

interface CardProps {
  children: ReactNode;
  className?: string;
}

const Card = ({ children, className }: CardProps) => {
  // function to handle cursor movement
  const onMouseMove = (e: MouseEvent | any) => {
    const { currentTarget, clientX, clientY } = e;
    const { left, top } = currentTarget.getBoundingClientRect();
    const mouseX: number = clientX - left;
    const mouseY: number = clientY - top;

    currentTarget.style.setProperty("--mouse-x", `${mouseX}px`);
    currentTarget.style.setProperty("--mouse-y", `${mouseY}px`);
  };

  return (
    <div
      onMouseMove={onMouseMove}
      className={cn(
        "h-[20rem] md:h-[16rem] rounded-xl relative cursor-pointer " +
          "before:content-[''] before:absolute before:h-full before:rounded-xl before:left-0 before:top-0 before:w-full before:z-[2] before:bg-custom-radial " +
          "bg-slate/[0.1]  ",
        "dark:bg-white/[0.01] dark:border dark:border-white/[0.1]",
        className,
      )}
    >
      {children}
    </div>
  );
};

export default Card;
