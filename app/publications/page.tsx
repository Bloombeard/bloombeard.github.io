import React from "react";
import Link from "next/link";
import { Oswald } from "next/font/google";

import { TPublicationBlock } from "@/common/types/types";
import { publications } from "@/common/constants/publications";

const oswald = Oswald({
    subsets: ["latin"],
})

const Publications = () => {
    // const _renderPubTitle = (pub: TPublicationBlock) => {
    //     if (pub.target) {
    //         return (
    //             <Link className="pub__title pub__title--link" href={pub.target}>{pub.title}</Link>
    //         )
    //     }

    //     return <div className="pub__title">{pub.title}</div>
    // }

    const _renderPubDetails = (pub: TPublicationBlock, availability: boolean) => {
        const details: any[] = []

        Object.keys(pub).forEach(pubKey => {
            if (pubKey !== 'title' && pubKey !== 'target' && pubKey !== 'availability') {
                details.push(pub[pubKey as keyof TPublicationBlock])
            }
        })

        return (
            <div className="pub__details-wrapper">
                {details.map((detail: string, i) => (
                    <div className="pub__detail">
                        {detail}
                    </div>
                ))}
                {!pub.target && pub.availability && (
                    <div className="pub__detail pub__detail--availability">{pub.availability}</div>
                )}
            </div>
        )
    }

    const _renderPublication = (pub: TPublicationBlock, i: number) => {
        if (pub.target) {
            return (
                <Link className="pub__link" href={pub.target}>
                    <div className="pub">
                        <div className="pub__title">{pub.title}</div>
                        {_renderPubDetails(pub, true)}
                    </div>
                    {publications.length - 1 > i && (
                        <div className="pub__divider-line" />
                    )}
                </Link>
            )
        }

        return (
            <div className="pub__no-link">
                <div className="pub">
                    <div className="pub__title">{pub.title}</div>
                    {_renderPubDetails(pub, false)}
                </div>
                {publications.length - 1 > i && (
                    <div className="pub__divider-line" />
                )}
            </div>
        )
    }




    return (
        <main>
            <div className={`${oswald.className} publications__wrapper`}>
                {publications.map((pub: TPublicationBlock, i) => 
                    { return _renderPublication(pub, i) }
                )}
            </div>
        </main>
    )
};

export default Publications;
