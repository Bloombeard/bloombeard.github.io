"use client"

import React, { useRef, useState } from "react"
import { pdfjs, Document, Page } from 'react-pdf'
import { PDFDocumentProxy } from 'pdfjs-dist';

interface TProps {
    pages: string | File | null
}

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
    'pdfjs-dist/build/pdf.worker.min.js',
    import.meta.url,
).toString();

const ComicReader = (props: TProps) => {
    const { pages } = props

    const [totalPages, setTotalPages] = useState<number>(0)
    // const [currentPage, setCurrentPage] = useState<number>(1)

    const onDocumentLoadSuccess = ({ numPages: nextNumPages }: PDFDocumentProxy) => {
        setTotalPages(nextNumPages)
        // setCurrentPage(1)
    }

    // const changePage = (offset: number) => {
    //     setCurrentPage(prevPageNumber => prevPageNumber + offset);
    // }

    // const previousPage = () => {
    //     changePage(-1);
    // }

    // const nextPage = () => {
    //     changePage(1);
    // }

    const renderPages = () => {
        const pageElements = []

        console.log('totalPages is ', totalPages)

        for (let i = 0; i <= totalPages; i++) (
            pageElements.push(
                <Page
                className="comic-reader__page--current"
                pageNumber={i}
                renderTextLayer={false}
                renderAnnotationLayer={false}
                />
            )
        )

        return pageElements
    }

    //TODO: Add 'load' button and maybe a loading bar if possible. We DON'T want the pdf to load on page load. It's too big.

    return (
        <>
            <Document renderMode='canvas' className="comic-reader__wrapper" file={pages} onLoadSuccess={onDocumentLoadSuccess}>
                {renderPages()}
            </Document>
            {/* {totalPages && (
                <div>
                    <p>
                        Page {currentPage || (totalPages ? 1 : '--')} of {totalPages || '--'}
                    </p>
                    <button
                        type="button"
                        disabled={currentPage <= 1}
                        onClick={previousPage}
                    >
                        Previous
                    </button>
                    <button
                        type="button"
                        disabled={currentPage >= totalPages}
                        onClick={nextPage}
                    >
                        Next
                    </button>
                </div>
            )} */}
        </>
    )
}

export default ComicReader
