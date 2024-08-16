import React from "react";

const Navbar = () => {
  return (
    // <nav className="sticky top-0 z-10 flex justify-around bg-violet-900 text-white py-2">
    <nav className="sticky top-0 z-10 flex items-center justify-around text-white py-2 bg-purple-700  bg-gradient-to-r from-purple-400 via-fuchsia-500 to-purple-500 bg-no-repeat bg-bottom bg-[length:100%_0px] hover:bg-[length:100%_100%] transition-[background-size]">
      <div className="logo">
        <span className="font-bold text-xl mx-9 p-2 hover:cursor-default">
          Todo
        </span>
      </div>
      <ul className="flex gap-8 mx-9">
        <li className="p-2 cursor-pointer hover:font-bold transition-all duration-50">
          <a href="/">Home</a>
        </li>
        <li className="p-2 cursor-pointer hover:font-bold duration-50 bg-gradient-to-r from-cyan-500 via-fuchsia-400 to-indigo-600 bg-top bg-no-repeat bg-[length:100%_1px] hover:bg-[length:100%_100%] transition-[background-size] rounded-xl">
          <a href="https://github.com/Mohid-Anwar" target="_blank" className="">
            Github
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
