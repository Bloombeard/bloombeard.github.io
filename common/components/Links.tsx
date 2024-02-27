"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";

import { TNavLinks, TNavLink } from "../types/types";

interface TProps {
  wrapperClass: string;
  linkClass: string;
  links: TNavLinks;
  toggleCallback?: Function;
  isHubPage?: boolean;
}

const renderLinks = (props: TProps) => {
  const { wrapperClass, linkClass, links, toggleCallback, isHubPage } = props;

  // TODO: Expand this to allow for expansion menus in the slide panel.
  const onLinkClick = () => {
    return toggleCallback ? toggleCallback() : {};
  };

  const getLinkClasses = (link: TNavLink): string => {
    let linkClasses = linkClass
    
    if (link.isExternal) {
      linkClasses += (' external-link')
    }
    
    return linkClasses
  }

  return (
    <div className={wrapperClass}>
      {links.map((link: TNavLink) => (
        <Link
          className={getLinkClasses(link)}
          key={link.label}
          href={link.target}
          onClick={() => onLinkClick()}
        >
          {isHubPage && link.previewImage && (
            <>
            <div className='hub-page--image-overlay' />
              <Image
                className="hub-page--preview-image"
                src={link.previewImage}
                alt={link.previewAltText ? link.previewAltText : ""}
              />
            </>
          )}
          <div className="hub-page--link-label">{link.label}</div>
        </Link>
      ))}
    </div>
  );
};

export default renderLinks;
