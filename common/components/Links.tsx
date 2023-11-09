'use client'

import React, { useState } from "react"
import Link from "next/link"

import { TNavLinks, TNavLink } from "../types/types"

interface TProps {
  wrapperClass: string
  linkClass: string
  links: TNavLinks
  toggleCallback?: Function
}

const renderLinks = (props: TProps) => {
    const { wrapperClass, linkClass, links, toggleCallback } = props
    
    // TODO: Expand this to allow for expansion menus in the slide panel.
    const onLinkClick = () => {
      return toggleCallback ? toggleCallback() : {}
    }

  return (
    <div className={wrapperClass}>
      {links.map((link: TNavLink) => (
        <Link className={linkClass} key={link.label} href={link.target} onClick={() => onLinkClick()}>
          {link.label}
        </Link>
      ))}
    </div>
  )
}

export default renderLinks;
