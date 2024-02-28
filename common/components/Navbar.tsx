"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";

import Links from "@/common/components/Links";
import SlidePanel from "@/common/components/SlidePanel";
import HamburgerIcon from "@/common/components/HamburgerIcon";
import { navBarLinks } from "@/common/constants/navLinks";
import { hamburgerColors } from "@/common/constants/hamburgerColors";

const Navbar = () => {
  const [isSlidePanelOpen, setIsSlidePanelOpen] = useState(false);

  const hamburgerColorFill = hamburgerColors.slidePanelClosed

  return (
    <div>
      <SlidePanel
        isOpen={isSlidePanelOpen}
        toggleCallback={() => setIsSlidePanelOpen(!isSlidePanelOpen)}
      />
      <div className="navbar">
        <div className="navbar--title__clickable">
          <Link href="/">Forrest Storrs</Link>
        </div>
        <div className="navbar--title__static">Forrest Storrs</div>
        <Links
          wrapperClass="navbar--links"
          linkClass="navbar--link"
          links={navBarLinks}
        />
        <button
          className="navbar--hamburger-button"
          onClick={() => setIsSlidePanelOpen(!isSlidePanelOpen)}
        >
          <HamburgerIcon colorFill={hamburgerColors.slidePanelClosed} />
        </button>
      </div>
    </div>
  );
};

export default Navbar;
