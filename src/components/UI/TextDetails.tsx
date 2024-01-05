import { ReactNode } from "react";

const TextDetails = ({ children }: { children: ReactNode }) => {
  return <span className="text-primary100">{children}</span>;
};

export default TextDetails;
