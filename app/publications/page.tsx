import React from "react";
import Link from "next/link";

import { TPublicationBlock } from "@/common/types/types";
import { publications } from "@/common/constants/publications";

const Publications = () => {
    const _renderPubTitle = (pub: TPublicationBlock) => {
        if (pub.target) {
            return (
                <Link className="pub__title" href={pub.target}>{pub.title}</Link>
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
      <div className="publications__wrapper">
        {publications.map((pub: TPublicationBlock, i) => (
            <div className="pub" key={`pub${i}`}>
                {_renderPubTitle(pub)}                
                {_renderPubDetails(pub)}
            </div>
        ))}
      </div>
    </main>
  );
};

export default Publications;
