'use client'

import React from "react";

import Links from "@/common/components/Links";
import { navBarLinks } from "../constants/navLinks";

interface TProps {
  isOpen: boolean;
  toggleCallback: Function;
}

const SlidePanel = (props: TProps) => {
  const { isOpen, toggleCallback } = props;

  return (
    // <div className='slide-panel--open'>
    <div className={isOpen ? "slide-panel--open" : "slide-panel--closed"}>
      <Links
        wrapperClass="slide-panel--links"
        linkClass="slide-panel--link"
        links={navBarLinks}
        onClickCallback={toggleCallback}
      />
    </div>
  );
};

export default SlidePanel;
