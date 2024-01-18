import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Courier_Prime, Oswald } from "next/font/google";
import { TDescriptionBlock } from "../types/types";

import Headshot from '../assets/Headshot.png'

const oswald = Oswald({
  subsets: ["latin"],
});

const courierPrime = Courier_Prime({
  subsets: ['latin'],
  weight: ["400", "700"],
})

interface TProps {
  block: TDescriptionBlock
  openReaderCallback?: React.Dispatch<React.SetStateAction<boolean>>
}

const ContentHeader = (props: TProps) => {
  const { block, openReaderCallback } = props;

  return (
    <div className={`${oswald.className} content-header--wrapper`}>
      <div className="content-header--cover-wrapper">
        <Image className='content-header--cover-image' src={block.coverImage} alt={block.coverAltText} fill={true} />
      </div>
      <div className="content-header--description">
        {block.title && <h1>{block.title}</h1>}
        {block.subtitle && <h2>{block.subtitle}</h2>}
        {block.bodyText && <p>{block.bodyText}</p>}
        {block.links && (
          <div className={`${courierPrime.className} content-header--description__links-wrapper`}>
            {block.links.map((link, i) => {
              return (
                <div className='content-header--description__link-wrapper' key={link.label}>
                  { openReaderCallback && (
                    <div onClick={() => openReaderCallback(true)} className="content-header--description__link">Read</div>
                  )}
                  <Link
                    className="content-header--description__link"
                    href={link.target}
                  >
                    {link.label}
                  </Link>
                  {/* @ts-expect-error - can't get here if undefined */}
                  {i < block.links.length - 1 && (
                    <div className="content-header--description__links-spacer">|&nbsp;</div>
                  )}
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
};

export default ContentHeader;
