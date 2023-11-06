import React from "react";
import Link from "next/link";

import navLinks from "../constants/navLinks";
import { TNavLinks } from '../types/types'

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navbar--title">
        <Link href="/">Forrest Storrs</Link>
      </div>

      <div className="navbar--links">
        {Object.keys(navLinks).map((navLink) => (
          <li key={navLinks[navLink as keyof TNavLinks].label}>
            <Link href={navLinks[navLink as keyof TNavLinks].target}>
              {navLinks[navLink as keyof TNavLinks].label}
            </Link>
          </li>
        ))}
      </div>
    </div>
  );
};

export default Navbar;
