import React from "react";
import Link from "next/link";
import { Oswald } from "next/font/google";

import { TPublicationBlock } from "@/common/types/types";
import { publications, nameChangeExplainer } from "@/common/constants/publications";

const oswald = Oswald({
  subsets: ["latin"],
});

const Publications = () => {
  const _renderPubDetails = (pub: TPublicationBlock, availability: boolean) => {
    const details: any[] = [];

    Object.keys(pub).forEach((pubKey) => {
      if (
        pubKey !== "title" &&
        pubKey !== "target" &&
        pubKey !== "availability"
      ) {
        details.push(pub[pubKey as keyof TPublicationBlock]);
      }
    });

    return (
      <div className="pub__details-wrapper">
        {details.map((detail: string, i) => (
          <div className="pub__detail" key={`detail${i}`}>
            {detail}
          </div>
        ))}
        {!pub.target && pub.availability && (
          <div className="pub__detail pub__detail--availability">
            {pub.availability}
          </div>
        )}
      </div>
    );
  };

  const _renderPublication = (pub: TPublicationBlock, i: number) => {
    if (pub.target) {
      return (
        <Link className="pub__link" href={pub.target}>
          <div className="pub">
            <div className="pub__title">{pub.title}</div>
            {_renderPubDetails(pub, true)}
          </div>
          {publications.length - 1 > i && <div className="pub__divider-line" />}
        </Link>
      );
    }

    return (
      <div className="pub__no-link">
        <div className="pub">
          <div className="pub__title">{pub.title}</div>
          {_renderPubDetails(pub, false)}
        </div>
        {publications.length - 1 > i && <div className="pub__divider-line" />}
      </div>
    );
  };

  return (
    <main className={oswald.className}>
      <div className="publications__wrapper">
        <div className="publications__header">Publications from 2020 and earlier were published under the name 'Joshua Storrs.'<br/>In 2020, Joshua changed their name to Forrest, and continues to write under their chosen name.</div>
        {publications.map((pub: TPublicationBlock, i) => {
          return _renderPublication(pub, i);
        })}
      </div>
    </main>
  );
};

export default Publications;
