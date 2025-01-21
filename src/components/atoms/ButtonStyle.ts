'use client';

import colors from '@/styles/color';

export interface ButtonStylesProps {
  size?: 'sm';
  color?: keyof typeof colors;
  disabled?: boolean;
  outline?: boolean;
}

export const getButtonStyles = ({
  size = 'sm',
  color = 'blue-base',
  disabled = false,
  outline = false,
}: ButtonStylesProps) => {
  const argColor = colors[color] || color;

  const sizeClass = {
    sm: 'h-34pxr px-12pxr py-6pxr text-14pxr leading-22pxr rounded-6pxr',
  }[size];

  const colorClass = outline
    ? `border border-[${argColor}] text-[${argColor}] bg-transparent`
    : `bg-[${argColor}] text-white`;

  const disabledClass = disabled ? 'opacity-50 cursor-not-allowed' : '';

  return `${sizeClass} ${colorClass} ${disabledClass}`;
};
