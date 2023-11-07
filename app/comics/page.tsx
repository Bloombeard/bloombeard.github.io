import React from "react";
import Link from 'next/link'
import { comicLinks } from '../../common/constants/navLinks'
import { TComicLinks } from '../../common/types/types'

const Comics = () => {
  const renderComicLinks = () => (
    Object.keys(comicLinks).map(key => {
      const comicLink = comicLinks[key as keyof TComicLinks]

      return (
        <Link className='comics-page--link' key={comicLink.label} href={comicLink.target}>
          {comicLink.label}
        </Link>
      )
    })
  )
  
  return (
    <div className='comics-page--links-wrapper'>
      {renderComicLinks()}
    </div>
    )
}

export default Comics;
