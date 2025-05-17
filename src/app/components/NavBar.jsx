"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const NavBar = () => {
  const pathname = usePathname();
  console.log(pathname, pathname.includes("dashboard"));

  if (pathname.includes("dashboard")) return <></>;
  else {
    return (
      <div>
        <nav className="flex justify-center">
          <ul className="flex justify-between w-60 px-5 py-2 bg-gray-900 rounded-3xl mt-2 transition-all duration-300 hover:shadow-lg hover:shadow-gray-500/50 hover:scale-105 hover:rotate-1">
            <Link href="/">
              <li className="text-gray-300 hover:text-white transition-all duration-300 hover:scale-125 hover:-rotate-6 hover:font-bold hover:animate-bounce">
                Home
              </li>
            </Link>
            <Link href="/services">
              <li className="text-gray-300 hover:text-white transition-all duration-300 hover:scale-125 hover:rotate-6 hover:font-bold hover:animate-bounce">
                Services
              </li>
            </Link>
            <Link href="/about">
              <li className="text-gray-300 hover:text-white transition-all duration-300 hover:scale-125 hover:-rotate-6 hover:font-bold hover:animate-bounce">
                About
              </li>
            </Link>
          </ul>
        </nav>
      </div>
    );
  }
};

export default NavBar;
