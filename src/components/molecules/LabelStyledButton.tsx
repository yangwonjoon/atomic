import StyledButton, { StyledButtonProps } from "../molecules/StyledButton";
import Label from "../atoms/Label";

interface LabelStyledButtonProps extends StyledButtonProps {
  label: string;
}

const LabelStyledButton = ({ label, ...props }: LabelStyledButtonProps) => {
  return (
    <StyledButton {...props}>
      <Label text={label} />
      {props.children}
    </StyledButton>
  );
};

export default LabelStyledButton;
