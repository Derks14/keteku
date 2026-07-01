import { ReactNode } from "react";
import { cn } from "@/components/lib/utils.ts";

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
        `relative mb-2 cursor-pointer rounded-xl border border-black/[0.09] bg-black/[0.08] before:pointer-events-none before:absolute before:top-0 before:left-0 before:z-[2] before:h-full before:w-full before:rounded-xl before:bg-radial-[250px_at_var(--mouse-x)_var(--mouse-y)] before:from-black/25 before:to-[transparent_10%] before:content-[''] md:mb-0 md:h-full dark:border dark:border-white/[0.09] dark:bg-white/[0.09] dark:before:bg-radial-[200px_at_var(--mouse-x)_var(--mouse-y)] dark:before:from-white/15 dark:before:to-[transparent_10%]`,
        className,
      )}
    >
      {children}
    </div>
  );
};

export default Card;
