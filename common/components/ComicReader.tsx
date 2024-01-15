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
    const [currentPage, setCurrentPage] = useState<number>(1)

    const onDocumentLoadSuccess = ({ numPages: nextNumPages }: PDFDocumentProxy) => {
        setTotalPages(nextNumPages)
        setCurrentPage(1)
    }

    const getPageClassName = (i: number) => {
        let className = 'comic-reader__page'

        if (i < currentPage) {
            return className += '--hidden'
        }

        return className += '--visible'
    }

    const renderPages = () => {
        const pageElements = []

        for (let i = 1; i <= totalPages; i++) (
            pageElements.push(
                <Page
                className={getPageClassName(i)}
                pageNumber={i}
                renderTextLayer={false}
                renderAnnotationLayer={false}
                />
            )
        )

        // stack pages in reverse so last one loaded ends up on top.
        return pageElements.reverse()
    }

    const renderPageSelectOptions = () => {
        const options = []

        for (let i = 1; i <= totalPages; i++) {
            options.push(
                <option className="comic-reader__nav-selector--option" value={i}>Page {i} of {totalPages}</option>
            )
        }

        return options
    }

    //TODO: Add 'load' button and maybe a loading bar if possible. We DON'T want the pdf to load on page load. It's too big.

    return (
        <>
            <Document renderMode='canvas' className="comic-reader__wrapper" file={pages} onLoadSuccess={onDocumentLoadSuccess}>
                {renderPages()}
            </Document>
            {totalPages && (
                <div className='comic-reader__navigation'>
                    <button
                        className="comic-reader__nav-button"
                        type="button"
                        disabled={currentPage === 1}
                        onClick={() => setCurrentPage(1)}
                    >
                        {'<<'} First
                    </button>
                    <button
                        className="comic-reader__nav-button"
                        type="button"
                        disabled={currentPage <= 1}
                        onClick={() => setCurrentPage(currentPage - 1)}
                    >
                        {'<'} Previous
                    </button>
                    <select className="comic-reader__nav-selector" onChange={e => setCurrentPage(Number(e.target.value))}>
                        {renderPageSelectOptions()}
                    </select>
                    <button
                        className="comic-reader__nav-button"
                        type="button"
                        disabled={currentPage >= totalPages}
                        onClick={() => setCurrentPage(currentPage + 1)}
                    >
                        Next {'>'}
                    </button>
                    <button
                        className="comic-reader__nav-button"
                        type="button"
                        disabled={currentPage === totalPages}
                        onClick={() => setCurrentPage(totalPages)}
                    >
                        Last {'>>'}
                    </button>
                </div>
            )}
        </>
    )
}

export default ComicReader
