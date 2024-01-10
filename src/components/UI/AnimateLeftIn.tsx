import { ReactNode } from "react";

const AnimateLeftIn = ({ children }: { children: ReactNode }) => {
  return (
    <div className="opacity-0 -translate-x-16 animate-opacity-in">
      {children}
    </div>
  );
};

export default AnimateLeftIn;
