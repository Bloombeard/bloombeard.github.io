import React from "react";
import Link from "next/link";

import { navBarLinks } from "../constants/navLinks";
import { TNavBarLinks } from '../types/types'

const Navbar = () => {
  const renderNavBarLinks = () => (
    Object.keys(navBarLinks).map((key) => {
      const navLink = navBarLinks[key as keyof TNavBarLinks]
      
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
        {renderNavBarLinks()}
      </div>
    </div>
  );
};

export default Navbar;
