import React from "react";
import Link from "next/link";

import { navBarLinks } from "../constants/navLinks";
import Links from "./Links";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navbar--title">
        <Link href="/">Forrest Storrs</Link>
      </div>
      <Links
        wrapperClass="navbar--links"
        linkClass="navbar--link"
        links={navBarLinks}
      />
    </div>
  );
};

export default Navbar;
