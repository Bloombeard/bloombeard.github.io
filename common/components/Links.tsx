'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'

import { TNavLinks, TNavLink } from '../types/types'

interface TProps {
    wrapperClass: string
    linkClass: string
    links: TNavLinks
    toggleCallback?: Function
    isHubPage?: boolean
}

const RenderLinks = (props: TProps) => {
    const { wrapperClass, linkClass, links, toggleCallback, isHubPage } = props

    const pathName = usePathname()

    const getLinkLabelClassnames = (target: string): string => {
        let classNames = 'hub-page--link-label'

        if (target === pathName) {
            classNames += ' current'
        }

        return classNames
    }

    // TODO: Expand this to allow for expansion menus in the slide panel.
    const onLinkClick = (target: string) => {
        if (toggleCallback && target !== pathName) {
            return toggleCallback()
        }
        return {}
    }

    return (
        <div className={wrapperClass}>
            {links.map((link: TNavLink) => (
                <Link className={linkClass} key={link.label} href={link.target} onClick={() => onLinkClick(link.target)}>
                    {isHubPage && link.previewImage && (
                        <>
                            <div className="hub-page--image-overlay" />
                            <Image
                                className="hub-page--preview-image"
                                src={link.previewImage}
                                alt={link.previewAltText ? link.previewAltText : ''}
                            />
                        </>
                    )}
                    <div className={getLinkLabelClassnames(link.target)}>{link.label}</div>
                </Link>
            ))}
        </div>
    )
}

export default RenderLinks
