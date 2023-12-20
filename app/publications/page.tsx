import React from "react";
import Link from "next/link";
import { Oswald } from "next/font/google";

import { TPublicationBlock } from "@/common/types/types";
import { publications } from "@/common/constants/publications";

const oswald = Oswald({
    subsets: ["latin"],
})

const Publications = () => {
    const _renderPubTitle = (pub: TPublicationBlock) => {
        if (pub.target) {
            return (
                <Link className="pub__title pub__title--link" href={pub.target}>{pub.title}</Link>
            )
        }

        return <div className="pub__title">{pub.title}</div>
    }

    const _renderPubDetails = (pub: TPublicationBlock) => {
        const details: any[] = []

        Object.keys(pub).forEach(pubKey => {
            if (pubKey !== 'title' && pubKey !== 'target') {
                details.push(pub[pubKey as keyof TPublicationBlock])
            }
        })

        return (
            <div className="pub__details-wrapper">
                {details.map((detail: string, i) => (
                    <div className="pub__detail" key={`detail${i}`}>
                        {detail}
                    </div>
                ))}
            </div>
        )
    }
  
    return (
    <main>
      <div className={`${oswald.className} publications__wrapper`}>
        {publications.map((pub: TPublicationBlock, i) => (
            <>
                <div className="pub" key={`pub${i}`}>
                    {_renderPubTitle(pub)}                
                    {_renderPubDetails(pub)}
                </div>
                {publications.length - 1 > i && (
                    <div className="pub__divider-line" />
                )}
            </>
        ))}
      </div>
    </main>
  );
};

export default Publications;
