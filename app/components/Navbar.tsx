import React from "react";
import Link from "next/link";

import navLinks from "../constants/navLinks";
import { TNavLinks } from '../types/types'

const Navbar = () => {
  const renderNavLinks = () => (
    Object.keys(navLinks).map((key) => {
      const navLink = navLinks[key as keyof TNavLinks]
      
      return (
        <Link className='navbar--link' key={navLink.label} href={navLink.target}>
          {navLink.label}
        </Link>
      )
    })
  )
  
  return (
    <div className="navbar">
      <div className="navbar--title">
        <Link href="/">Forrest Storrs</Link>
      </div>
      <div className="navbar--links">
        {renderNavLinks()}
      </div>
    </div>
  );
};

export default Navbar;
