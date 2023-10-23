import Link from "next/link";
import { navs } from "../lib/navlinks";

const MenuOverlay = () => {
  return (
    <div className="flex flex-col text-center">
      {navs.map(nav =>
        <div className="py-2"><Link className="text-white px-4 py-2 text-sm hover:text-gray-300" key={nav.title} href={nav.link}>{nav.title}</Link></div>
      )}
    </div>
  );
}

export default MenuOverlay;