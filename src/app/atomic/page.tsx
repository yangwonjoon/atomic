"use client";

import BaseButton from "@/components/atoms/BaseButton";
import Label from "@/components/atoms/Label";
import LabelStyledButton from "@/components/molecules/LabelStyledButton";
import StyledButton from "@/components/molecules/StyledButton";

export default function Atomic() {
  return (
    <div className="flex justify-center items-center h-screen gap-20pxr">
      <div className="flex flex-col items-center gap-12pxr">
        <h1>Label</h1>
        <Label text="label" />
      </div>
      <div className="flex flex-col items-center gap-12pxr">
        <h1>base button</h1>
        <BaseButton>base-button</BaseButton>
      </div>
      <div className="flex flex-col items-center gap-12pxr">
        <h1>Styled Button</h1>
        <StyledButton>Styled-button</StyledButton>
      </div>
      <div className="flex flex-col items-center gap-12pxr">
        <h1>Styled Button</h1>
        <LabelStyledButton label="label-styled-button" onClick={() => console.log("Button clicked!")} />
      </div>
    </div>
  );
}
