"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from 'next/image'
import { usePathname } from "next/navigation";

import Links from "@/common/components/Links";
import SlidePanel from "@/common/components/SlidePanel";
import HamburgerIcon from "@/common/components/HamburgerIcon";
import rat from '@/public/assets/RatCropped.png'
import { navBarLinks } from "@/common/constants/navLinks";

const Navbar = () => {
  const [isSlidePanelOpen, setIsSlidePanelOpen] = useState(false);

  const pathname = usePathname()

  const getWrapperClassNames = () => {
    let classNames = 'navbar'

    if (pathname === '/') {
      classNames += ' homepage'
    }

    return classNames
  }

  return (
    <div >
      <SlidePanel
        isOpen={isSlidePanelOpen}
        toggleCallback={() => setIsSlidePanelOpen(!isSlidePanelOpen)}
      />
      <div className={getWrapperClassNames()}>
        <Image className="navbar--rat" src={rat} alt="rat logo" />
        <div className="navbar--title__clickable">
          <Link href="/">Forrest Storrs</Link>
        </div>
        <div className="navbar--title__static">Forrest Storrs</div>
        <Links
          wrapperClass="navbar--links"
          linkClass="navbar--link"
          links={navBarLinks}
        />
        {pathname !== '/' &&
          <button
            className="navbar--hamburger-button"
            onClick={() => setIsSlidePanelOpen(!isSlidePanelOpen)}
          >
            <HamburgerIcon colorFill="#222222" />
          </button>
        }
      </div>
    </div>
  );
};

export default Navbar;
