"use client";

import React, { useEffect, useState } from "react";

import Links from "@/common/components/Links";
import { navBarLinks } from "@/common/constants/navLinks";

interface TProps {
  isOpen: boolean;
  toggleCallback: Function;
}

const SlidePanel = (props: TProps) => {
  const { isOpen, toggleCallback } = props;
  const slidePanelElement = document.getElementById("slide-panel");

  useEffect(() => {
    if (slidePanelElement) {
      if (!isOpen) {
        setTimeout(() => {
          slidePanelElement.style.display = "none";
        }, 2000);
      } else {
        slidePanelElement.style.display = "flex";
      }
    }
  }, [isOpen]);

  return (
    // <div className='slide-panel--open'>
    <div
      className={`slide-panel ${isOpen ? "slide-panel--open" : ""}`}
      id="slide-panel"
    >
      <Links
        wrapperClass="slide-panel--links"
        linkClass="slide-panel--link"
        links={navBarLinks}
        toggleCallback={toggleCallback}
      />
    </div>
  );
};

export default SlidePanel;
