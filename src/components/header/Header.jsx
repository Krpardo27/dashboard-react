import React from "react";
import DarkMode from "../DarkMode";
import { RiSearch2Line } from "react-icons/ri";
import { Box, TextField } from "@mui/material";

const Header = () => {
  return (
    <header className="flex justify-between items-center">
      <h1 className="text-4xl">
        Hola <span className="text-primary-100">Kevin</span>
      </h1>
      <form method="get">
        <div className="relative">
          <RiSearch2Line className="absolute top-1/2 -translate-1/2 -translate-y-1/2 right-2" />
          <Box
            sx={{
              width: 500,
              maxWidth: "100%",
            }}
          >
            <TextField fullWidth label="Search input" id="" name="" />
          </Box>

          {/*  <input type="text" name="" id="" className="bg-gray-200 outline-none py-2 pl-8 pr-4 rounded-xl" placeholder="Buscar..."/> */}
        </div>
      </form>
      <DarkMode />
    </header>
  );
};

export default Header;
