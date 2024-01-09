import Footer from "@/components/footer";
import Header from "@/components/header";
import React from "react";

const MainLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="p-8 lg:p-12 flex flex-col min-h-screen">
      <Header />
      <div>{children}</div>
      <Footer />
    </div>
  );
};

export default MainLayout;
