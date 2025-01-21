"use client";

import { ReactNode } from "react";

interface BaseButtonProps {
  children: ReactNode;
  className?: string;
  onClick?: () => void;
}

const BaseButton = ({ children, className, onClick }: BaseButtonProps) => {
  return (
    <button className={className} onClick={onClick}>
      {children}
    </button>
  );
};

export default BaseButton;
