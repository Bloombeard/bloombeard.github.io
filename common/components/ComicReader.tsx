"use client"

import React, { useEffect, useState } from "react"
import { pdfjs, Document, Page } from 'react-pdf'
import { PDFDocumentProxy } from 'pdfjs-dist';

interface TProps {
    shouldLoop?: boolean
    pages: string | File | null
}

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
    'pdfjs-dist/build/pdf.worker.min.js',
    import.meta.url,
).toString();

const ComicReader = (props: TProps) => {
    const { shouldLoop, pages } = props

    const [totalPages, setTotalPages] = useState<number>(0)
    const [currentPage, setCurrentPage] = useState<number>(1)

    useEffect(() => {
        const readerNavSelector = document?.getElementById('readerNavSelector') as HTMLInputElement
        
        if (readerNavSelector?.value) {
            readerNavSelector.value = currentPage.toString()
        }
    }, [currentPage])

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

    const getButtonClassNames = (isDisabled: boolean) => {
        let classNames = 'comic-reader__nav-button '

        if (isDisabled) {
            classNames += 'comic-reader__nav-button--disabled'
        }

        return classNames
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

        // render pages in reverse so they're 'stacked' in the right order.
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

    const turnPageForward = () => {
        if (currentPage < totalPages) {
            setCurrentPage(currentPage + 1)
        }
        else if (currentPage === totalPages && shouldLoop) {
            setCurrentPage(1)
        }
    }

    const turnPageBack = () => {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1)
        }
        else if (currentPage === 1 && shouldLoop) {
            setCurrentPage(totalPages)
        }
    }

    //TODO: Add logic detector cursor position. Clicking on the left-third of the page = previous page.
    const onPageClick = () => {
        turnPageForward()
    }

    //TODO: Add 'load' button and maybe a loading bar if possible. We DON'T want the pdf to load on page load. It's too big.

    return (
        <>
            <Document 
                onClick={() => onPageClick()}
                renderMode='canvas'
                className="comic-reader__wrapper"
                file={pages}
                onLoadSuccess={onDocumentLoadSuccess}
            >
                {renderPages()}
            </Document>
            {totalPages && (
                <div className='comic-reader__navigation'>
                    <button
                        className={getButtonClassNames(currentPage === 1)}
                        type="button"
                        disabled={currentPage === 1}
                        onClick={() => setCurrentPage(1)}
                    >
                        {'<<'} First
                    </button>
                    <button
                        className={getButtonClassNames(!shouldLoop && currentPage <= 1)}
                        type="button"
                        disabled={!shouldLoop && currentPage <= 1}
                        onClick={() => turnPageBack()}
                    >
                        {'<'} Previous
                    </button>
                    <select
                        id="readerNavSelector"
                        className="comic-reader__nav-selector"
                        onChange={e => setCurrentPage(Number(e.target.value))}
                    >
                        {renderPageSelectOptions()}
                    </select>
                    <button
                        className={getButtonClassNames(!shouldLoop && currentPage >= totalPages)}
                        type="button"
                        disabled={!shouldLoop && currentPage >= totalPages}
                        onClick={() => turnPageForward()}
                    >
                        Next {'>'}
                    </button>
                    <button
                        className={getButtonClassNames(currentPage === totalPages)}
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
