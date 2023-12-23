import React from "react";
import Image, { StaticImageData } from "next/image";
import { TComicPages } from "../types/types";

interface TProps {
    pages: TComicPages
}

const ComicReader = (props: TProps) => {
    const { pages } = props

    return (
        <div className="comic-reader__wrapper">
            <div className="comic-reader__pages">
                {pages.map(page => (
                    <Image className="comic-reader__page" src={page.image} alt={page.altText} key={page.altText} />
                ))}
            </div>
        </div>
    )
}

export default ComicReader
