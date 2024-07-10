import React from "react";
import { Link } from "react-router-dom";
// Icons
import {
  RiHome3Line,
  RiFileCopyLine,
  RiWalletLine,
  RiPieChartLine,
} from "react-icons/ri";

const NavLinks = () => {
  return (
    <nav className="flex flex-col gap-3">
      <Link className="flex items-center gap-4 text-white py-3 px-4 rounded-xl hover:bg-primary-900/50 transition-colors">
        <RiHome3Line className="text-2xl" /> Dashboard
      </Link>
      <Link className="flex items-center gap-4 text-white py-3 px-4 rounded-xl hover:bg-primary-900/50 transition-colors">
        <RiFileCopyLine className="text-2xl" /> Dashboard
      </Link>
      <Link className="flex items-center gap-4 text-white py-3 px-4 rounded-xl hover:bg-primary-900/50 transition-colors">
        <RiWalletLine className="text-2xl" /> Dashboard
      </Link>
      <Link className="flex items-center gap-4 text-white py-3 px-4 rounded-xl hover:bg-primary-900/50 transition-colors">
        <RiPieChartLine className="text-2xl" /> Dashboard
      </Link>
    </nav>
  );
};

export default NavLinks;
