import React from "react"
import Link from "next/link"

import { TNavLinks, TNavLink } from "../types/types"

interface TProps {
  wrapperClass: string
  linkClass: string
  links: TNavLinks
}

const renderLinks = (props: TProps) => {
    const { wrapperClass, linkClass, links } = props

  return (
    <div className={wrapperClass}>
      {links.map((link: TNavLink) => (
        <Link className={linkClass} key={link.label} href={link.target}>
          {link.label}
        </Link>
      ))}
    </div>
  )
}

export default renderLinks;
