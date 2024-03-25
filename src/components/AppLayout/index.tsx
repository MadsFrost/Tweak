import React from "react";
import AppBar from "../AppBar";
import AppFooter from "../AppFooter";
import { useAppSelector } from "../../hooks";
import { Outlet } from "react-router-dom";

const AppLayout = () => {
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
        <Outlet />
      </div>
      <AppFooter />
    </div>
  );
};

export default AppLayout;
