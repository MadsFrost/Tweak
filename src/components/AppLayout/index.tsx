import React from "react";
import AppBar from "../AppBar";
import AppFooter from "../AppFooter";
import { useAppSelector } from "../../hooks";
export interface AppLayoutProps {
  children: React.ReactNode | React.ReactNode[];
}
const AppLayout: React.FC<AppLayoutProps> = ({ children }) => {
  const isSettingsOpen = useAppSelector((state) => state.client.settingsOpen);
  return (
    <div
      className={`min-h-screen h-full bg-transparent justify-between flex flex-col`}
    >
      <AppBar />
      <div
        className={`${
          isSettingsOpen ? "opacity-0 after:hidden" : "opacity-100"
        }`}
      >
        {children}
      </div>
      <AppFooter />
    </div>
  );
};

export default AppLayout;
