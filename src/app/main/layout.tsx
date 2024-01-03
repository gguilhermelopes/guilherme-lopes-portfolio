import React from "react";

const MainLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <h1>Main Layout</h1>
      <div>{children}</div>
    </>
  );
};

export default MainLayout;
