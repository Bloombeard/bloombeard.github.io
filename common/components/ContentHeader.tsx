import React from "react";
import Link from "next/link";
import { Courier_Prime, Oswald } from "next/font/google";

import { TDescriptionBlock } from "../types/types";

const oswald = Oswald({
  subsets: ["latin"],
});

const courierPrime = Courier_Prime({
  subsets: ['latin'],
  weight: ["400", "700"],
})

interface TProps {
  block: TDescriptionBlock;
}

const ContentHeader = (props: TProps) => {
  const { block } = props;

  return (
    <div className={`${oswald.className} content-header--wrapper`}>
      <div className="content-header--cover">Cover image goes here</div>
      <div className="content-header--description">
        {block.title && <h1>{block.title}</h1>}
        {block.subtitle && <h2>{block.subtitle}</h2>}
        {block.bodyText && <p>{block.bodyText}</p>}
        {block.links && (
          <div className={`${courierPrime.className} content-header--description__links-wrapper`}>
            {block.links.map((link, i) => {
              return (
                <div className='content-header--description__link-wrapper' key={link.label}>
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
