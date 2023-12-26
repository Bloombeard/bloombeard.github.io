'use client'

import React from "react"
import { pdfjs, Document } from 'react-pdf'

import Image, { StaticImageData } from "next/image";
import { TComicPages } from "../types/types";

interface TProps {
    pages: string | File | null
}

// pdfjs.GlobalWorkerOptions.workerSrc = new URL(
//     'pdfjs-dist/build/pdf.worker.min.js',
//     import.meta.url,
// ).toString();

pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.js`;

const ComicReader = (props: TProps) => {
    const { pages } = props

    return (
        <div className="comic-reader__wrapper">
            {/* <div className="comic-reader__pages">
                {pages.map(page => (
                    <Image className="comic-reader__page" src={page.image} alt={page.altText} key={page.altText} />
                ))}
            </div> */}
            <Document file={pages} />
        </div>
    )
}

export default ComicReader
