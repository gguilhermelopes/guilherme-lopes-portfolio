import { ComponentProps } from "react";

const TextDetails = ({ children, ...props }: ComponentProps<"span">) => {
  return (
    <span {...props} className="text-primary100 font-bold">
      {children}
    </span>
  );
};

export default TextDetails;
