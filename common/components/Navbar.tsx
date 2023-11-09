"use client";

import React, { useState } from "react";
import Link from "next/link";

import Links from "@/common/components/Links";
import SlidePanel from '@/common/components/SlidePanel'
import HamburgerIcon from "@/common/components/HamburgerIcon";
import { navBarLinks } from "@/common/constants/navLinks";
import { hamburgerColors } from "@/common/constants/hamburgerColors";

const Navbar = () => {
  const [isSlidePanelOpen, setIsSlidePanelOpen] = useState(false)
  const hamburgerColorFill = isSlidePanelOpen ? hamburgerColors.slidePanelOpen : hamburgerColors.slidePanelClosed
  
  const openSlideMenu = () => {
    console.log('*** menu open')
    
    return (
      setIsSlidePanelOpen(!isSlidePanelOpen)
    )
  }
  return (
    <div>
      <SlidePanel isOpen={isSlidePanelOpen} toggleCallback={() => setIsSlidePanelOpen(!isSlidePanelOpen)} />
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
          className="navbar--hamburger__button"
          onClick={() => openSlideMenu()}
        >
          <HamburgerIcon colorFill={hamburgerColorFill} />
        </button>
      </div>
    </div>
  );
};

export default Navbar;
