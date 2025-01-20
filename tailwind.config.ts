
import type { Config } from "tailwindcss";
import colors from "./src/style/color";

const pxToRem = (px: number, base = 16) => `${px / base}rem`;
const range = (start: number, end: number): number[] => {
  return Array.from({ length: end - start + 1 }, (_, index) => start + index);
};
const sizes = {
  ...range(1, 2000).reduce < Record < string, string>> ((acc, px) => {
    acc[`${px}pxr`] = pxToRem(px);
    return acc;
  }, {}),
};

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  safelist: Object.entries(colors).flatMap(([key, color]) => [
    `bg-[${color}]`,
    `text-[${color}]`,
    `border-[${color}]`,
  ]),
  theme: {
    extend: {
      colors: colors,
      fontSize: {
        ...sizes,
      },
      borderWidth: sizes,
      lineHeight: sizes,
      borderRadius: sizes,
      spacing: sizes,
    },
  },
  plugins: [],
} satisfies Config;
