"use client";

import { ReactNode } from "react";

export interface CoreProps {
  children: ReactNode;
}

const Core = ({ children }: CoreProps) => {
  return (
    <>
      <div>{children}</div>
    </>
  );
};

export default Core;
