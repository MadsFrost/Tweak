import React from "react";
import AppBar from "../AppBar";
import AppFooter from "../AppFooter";

export interface AppLayoutProps {
  children: React.ReactNode | React.ReactNode[];
}
const AppLayout: React.FC<AppLayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen h-full bg-transparent justify-between flex flex-col">
      <AppBar />
      {children}
      <AppFooter />
    </div>
  );
};

export default AppLayout;
