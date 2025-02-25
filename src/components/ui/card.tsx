
import { ReactNode } from "react";
import { cn } from "@/components/services/utils.ts";

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
        // "h-[16rem]" +
        "md:h-full rounded-xl relative cursor-pointer mb-2 md:mb-0" +
        "before:content-[''] before:absolute before:h-full before:rounded-xl before:left-0 before:top-0 before:w-full before:z-[2] before:bg-custom-radial " +
        "bg-black/[0.08] border border-black/[0.09] dark:bg-white/[0.09] dark:border dark:border-white/[0.09]",
        className,
      )}
    >
      <div className="flex h-full flex-col-reverse p-4 md:p-6">
        <div>{children}</div>
        <div> </div>
      </div>
    </div>
  );
};

export default Card;
