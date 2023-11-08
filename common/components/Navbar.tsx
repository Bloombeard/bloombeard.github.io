'use client'

import React, { useState } from "react";
import Link from "next/link";
import Image from 'next/image'

import { navBarLinks } from "../constants/navLinks";
import Links from "./Links";
import HamburgerIcon from '@/common/assets/HamburgerIcon.svg'
import SlidePanel from "./SlidePanel";

const Navbar = () => {
  const [isSlidePanelOpen, setIsSlidePanelOpen] = useState(false)
  
  const openSlideMenu = () => {
    console.log('*** menu open')
    
    return (
      setIsSlidePanelOpen(!isSlidePanelOpen)
    )
  }

  return (
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
      <button className='navbar--hamburger__button' onClick={() => openSlideMenu()}>
        <Image src={HamburgerIcon} height={25} width={25} quality={100} alt='hamburger menu' />
      </button>
    </div>
  );
};

export default Navbar;
