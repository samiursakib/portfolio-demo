"use client";

import Link from "next/link";
import { useState } from "react";
import { XmarkIcon, Bars3Icon } from "@heroicons/react/24/solid";
import { navs } from "../lib/navlinks";
import MenuOverlay from "../components/MenuOverlay";

const Navbar = () => {
  const [isNavbarOpen, setIsNavbarOpen] = useState(false);
  return (
    <div className="flex flex-col bg-[#181818] bg-opacity-95 fixed top-0 left-0 right-0 px-4 py-2 z-10">
      <div className="justify-between items-center flex">
        <h1 className="uppercase text-xl font-semibold text-white">Logo</h1>
        <div className="hidden sm:flex">
          {navs.map(nav => (
            <div className="py-2"><Link className="text-white px-4 py-2 text-sm hover:text-gray-300" key={nav.title} href={nav.link}>{nav.title}</Link></div>
            ))}
        </div>
        <div className="block sm:hidden">
          { 
            isNavbarOpen
            ? <button onClick={() => setIsNavbarOpen(false)} className="p-1"><XmarkIcon className="text-white w-6 h-6 hover:text-slate-200"/></button>
            : <button onClick={() => setIsNavbarOpen(true)} className="p-1"><Bars3Icon className="text-white w-6 h-6 hover:text-slate-200"/></button>
          }
        </div>
      </div>
      {isNavbarOpen && <MenuOverlay />}
    </div>
  );
}

export default Navbar;