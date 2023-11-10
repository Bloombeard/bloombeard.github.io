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
  const classNamesConstant = ["slide-panel", "slide-panel--open"];
  const [classNames, setClassNames] = useState(classNamesConstant[0]);

  useEffect(() => {
    const slidePanelElement = document.getElementById("slide-panel");

    if (slidePanelElement) {
      if (!isOpen) {
        setClassNames(classNamesConstant[0]);
        setTimeout(() => {
          slidePanelElement.style.display = "none";
        }, 200);
      } else {
        slidePanelElement.style.display = "flex";
        setTimeout(() => {
          setClassNames(classNamesConstant.join(" "));
        }, 200);
      }
    }
  }, [isOpen]);

  return (
    <div
      className={classNames}
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
