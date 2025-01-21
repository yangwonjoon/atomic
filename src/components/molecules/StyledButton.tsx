"use client";

import BaseButton from "../atoms/BaseButton";
import { ReactNode } from "react";
import { ButtonStylesProps, getButtonStyles } from "../atoms/ButtonStyle";

interface PosButtonProps extends ButtonStylesProps {
  className?: string;
  onClick?: () => void;
  children: ReactNode;
}

const PosButton = ({
  onClick,
  children,
  size,
  color,
  disabled,
  outline,
  className,
}: PosButtonProps) => {
  const buttonClass = getButtonStyles({ size, color, disabled, outline });

  return (
    <BaseButton className={buttonClass + className} onClick={onClick}>
      {children}
    </BaseButton>
  );
};

export default PosButton;
