"use client";

interface BaseButtonProps {
  type?: "button" | "reset" | "submit";
  onClick?: () => void;
  children: React.ReactNode;
  className?: string;
}

const BaseButton = ({ type = "button", onClick, children, className }: BaseButtonProps) => {
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.stopPropagation();
    event.preventDefault();
    onClick?.();
  };

  return (
    <button type={type} onClick={handleClick} className={className}>
      {children}
    </button>
  );
};

export default BaseButton;
