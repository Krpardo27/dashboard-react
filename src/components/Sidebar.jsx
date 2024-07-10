import { Avatar } from "@mui/material";
import React, { useState } from "react";
import NavLinks from "./NavLinks";
// Icons
import { RiMore2Fill, RiCloseFill } from "react-icons/ri";

const Sidebar = () => {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <aside
      className={`bg-primary-900 h-full fixed lg:static w-[80%] md:w-[40%] lg:w-full transition-all z-50 duration-300 ${
        showMenu ? "left-0" : "-left-full"
      }`}
    >
      {/* Perfil */}
      <div className="flex flex-col items-center justify-center p-8 gap-2 h-[30vh]">
        <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
        <h1 className="text-xl text-white text-bold">Kevin Pardo</h1>
      </div>

      {/* NAV */}
      <div className="bg-primary-300 p-8 rounded-tr-[100px] h-[70vh] flex flex-col justify-between gap-8">
        <NavLinks />
        <button className="px-4 py-2 border w-full">Botones</button>
      </div>

      {/* Button mobile */}
      <button
        onClick={() => setShowMenu(!showMenu)}
        className="lg:hidden fixed right-4 bottom-4 text-2xl bg-primary-900 p-2.5 rounded-full text-white z-50"
      >
        {showMenu ? <RiCloseFill /> : <RiMore2Fill />}
      </button>
    </aside>
  );
};

export default Sidebar;
