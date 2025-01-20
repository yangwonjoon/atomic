interface LabelProps {
  text: string;
  className?: string;
}

const Label = ({ text, className = "" }: LabelProps) => {
  return <span className={`inline-block text-base ${className}`}>{text}</span>;
};

export default Label;
