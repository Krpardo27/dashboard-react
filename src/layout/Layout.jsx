import React from "react";
import { Outlet } from "react-router-dom";
import useDarkMode from "../hooks/useDarkMode";
import Sidebar from "../components/Sidebar";
import Header from "../components/header/Header";

const Layout = () => {
  const { darkMode } = useDarkMode();

  return (
    <div className={`${darkMode && "dark"}`}>
      <div className="grid lg:grid-cols-4 xl:grid-cols-6 min-h-screen">
        <Sidebar />

        <main className="lg:col-span-3 xl:col-span-5 bg-gray-100 p-8 h-[100vh] overflow-y-scroll">
          <Header />
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default Layout;
