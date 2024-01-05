import Header from "@/components/header";
import React from "react";

const MainLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="p-8 lg:p-12">
      <Header />
      <div>{children}</div>
    </div>
  );
};

export default MainLayout;
