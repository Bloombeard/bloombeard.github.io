"use client"

import React, { useEffect, useRef, useState } from 'react'
import { pdfjs, Document, Page } from 'react-pdf'
import { PDFDocumentProxy } from 'pdfjs-dist'
import { Oswald } from 'next/font/google'
import { useSwipeable } from 'react-swipeable'

const oswald = Oswald({
    subsets: ['latin'],
})

interface TProps {
    closeReaderCallback: React.Dispatch<React.SetStateAction<boolean>>
    isLoaded: boolean
    pages: string | File | null
    shouldLoop?: boolean
    title: string
}

pdfjs.GlobalWorkerOptions.workerSrc = new URL('pdfjs-dist/build/pdf.worker.min.js', import.meta.url).toString()

const ComicReader = (props: TProps) => {
    const { closeReaderCallback, isLoaded, pages, shouldLoop, title } = props

    const desktopBreakpoint = 576
    const mobileBreakpoint = 430
    const desktopcomicPageWidth = 570
    const mobilecomicPageWidth = 396
    const tinycomicPageWidth = 300

    const [isMobile, setIsMobile] = useState<boolean>(window ? window.innerWidth < desktopBreakpoint : true)

    const selectcomicPageWidth = (): number => {
        if (!isMobile) {
            return desktopcomicPageWidth
        } else if (isMobile && window.innerWidth >= mobileBreakpoint) {
            return mobilecomicPageWidth
        }

        return tinycomicPageWidth
    }

    const [totalPages, setTotalPages] = useState<number>(0)
    const [currentPage, setCurrentPage] = useState<number>(1)
    const [comicPageWidth, setComicPageWidth] = useState<number>(selectcomicPageWidth())

    useEffect(() => {
        const onResize = () => {
            if (window.innerWidth >= desktopBreakpoint && comicPageWidth !== desktopcomicPageWidth) {
                setComicPageWidth(desktopcomicPageWidth)
                isMobile && setIsMobile(false)
            } else if (
                window.innerWidth < desktopBreakpoint &&
                window.innerWidth >= mobileBreakpoint &&
                comicPageWidth !== mobilecomicPageWidth
            ) {
                setComicPageWidth(mobilecomicPageWidth)
                !isMobile && setIsMobile(true)
            } else if (window.innerWidth < mobileBreakpoint && comicPageWidth !== tinycomicPageWidth) {
                setComicPageWidth(tinycomicPageWidth)
                !isMobile && setIsMobile(true)
            }
        }
        window.addEventListener('resize', onResize)

        return () => {
            window.removeEventListener('resize', onResize)
        }
    }, [comicPageWidth, isMobile])

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
            return (className += '--hidden')
        }

        return (className += '--visible')
    }

    const getButtonClassNames = (isDisabled: boolean) => {
        let classNames = 'comic-reader__nav-button '

        if (isDisabled) {
            classNames += 'comic-reader__nav-button--disabled'
        }

        return classNames
    }

    const turnToNextPage = () => {
        if (currentPage < totalPages) {
            setCurrentPage(currentPage + 1)
        } else if (currentPage === totalPages && shouldLoop) {
            setCurrentPage(1)
        }
    }

    const turnToPreviousPage = () => {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1)
        } else if (currentPage === 1 && shouldLoop) {
            setCurrentPage(totalPages)
        }
    }

    //TODO: Add logic detector cursor position. Clicking on the left-third of the page = previous page.
    const onPageClick = (e: React.MouseEvent<HTMLElement>) => {
        if (document) {
            const wrapperBoundaries = document.getElementsByClassName('comic-reader__document')[0].getBoundingClientRect()

            const leftThirdBoundary: number = wrapperBoundaries.width / 3 + wrapperBoundaries.left

            if (e.clientX < leftThirdBoundary) {
                turnToPreviousPage()
            } else {
                turnToNextPage()
            }
        }
    }

    const swipeHandlers = useSwipeable({
        onSwipedLeft: () => turnToNextPage(),
        onSwipedUp: turnToNextPage,
        onSwipedRight: turnToPreviousPage,
        onSwipedDown: turnToPreviousPage,
        preventScrollOnSwipe: true,
    })

    const renderPages = () => {
        const pageElements = []

        for (let i = 1; i <= totalPages; i++)
            pageElements.push(
                <Page
                    key={`page${i}`}
                    className={getPageClassName(i)}
                    pageNumber={i}
                    renderTextLayer={false}
                    renderAnnotationLayer={false}
                    width={comicPageWidth}
                />,
            )

        // render pages in reverse so they're 'stacked' in the right order.
        return pageElements.reverse()
    }

    const renderPageSelectOptions = () => {
        const options = []

        for (let i = 1; i <= totalPages; i++) {
            options.push(
                <option key={`option${i}`} className="comic-reader__nav-selector--option" value={i}>
                    Page {i} of {totalPages}
                </option>,
            )
        }

        return options
    }

    //TODO: Add 'load' button and maybe a loading bar if possible. We DON'T want the pdf to load on page load. It's too big.
    const [percentLoadedState, setPercentLoadedState] = useState<number>(0)

    const handleLoadProgress = (loaded: number, total: number) => {
        const progress = (loaded / total) * 100

        if (progress >= percentLoadedState + 10) {
            setPercentLoadedState(Math.floor(progress / 10) * 10)
        }
    }

    const getLoadingBarClassnames = (): string => {
        let classNames = `${oswald.className} comic-reader__progress`

        if (percentLoadedState > 0) {
            classNames += ` comic-reader__progress--${percentLoadedState.toString()}percent`
        }

        return classNames
    }

    const getReaderDropdownClasses = (): string => {
        let classNames = 'comic-reader__dropdown '

        if (percentLoadedState === 100) {
            classNames += 'comic-reader__dropdown--visible'
        }

        return classNames
    }

    const getProgressContentClasses = (): string => {
      let classNames = 'comic-reader__progress--content-wrapper '

      if (percentLoadedState === 100) {
        classNames += 'comic-reader__progress--content-wrapper-visible'
      }

      return classNames
    }

    const onCloseButtonClick = () => {
      setPercentLoadedState(0)
      setTimeout(() => {
        closeReaderCallback(false)
      }, 600)
    }

    // const loadingBarTestButton = () => {
    //   setPercentLoadedState(percentLoadedState + 10)
    // }

    if (!isLoaded) {
        return null
    } else
        return (
            <div className="comic-reader__wrapper" {...swipeHandlers}>
                <div className={getLoadingBarClassnames()}>
                    <div className={getProgressContentClasses()}>
                        <h1>{title}</h1>
                        <button className="comic-reader__progress--close" onClick={() => onCloseButtonClick()}>X</button>
                    </div>
                </div>
                <div className={getReaderDropdownClasses()}>
                    <Document
                        onClick={e => onPageClick(e)}
                        renderMode="canvas"
                        className="comic-reader__document"
                        file={pages}
                        onLoadProgress={({ loaded, total }) => handleLoadProgress(loaded, total)}
                        onLoadSuccess={onDocumentLoadSuccess}
                    >
                        {renderPages()}
                    </Document>
                    {totalPages && (
                        <div className="comic-reader__navigation">
                            <button
                                className={getButtonClassNames(currentPage === 1)}
                                type="button"
                                disabled={currentPage === 1}
                                onClick={() => setCurrentPage(1)}
                            >
                                {'<<'}
                                {!isMobile && '\u00A0First'}
                            </button>
                            <button
                                className={getButtonClassNames(!shouldLoop && currentPage <= 1)}
                                type="button"
                                disabled={!shouldLoop && currentPage <= 1}
                                onClick={() => turnToPreviousPage()}
                            >
                                {'<'}
                                {!isMobile && '\u00A0Previous'}
                            </button>
                            {!isMobile && (
                                <select
                                    id="readerNavSelector"
                                    className="comic-reader__nav-selector"
                                    onChange={e => setCurrentPage(Number(e.target.value))}
                                >
                                    {renderPageSelectOptions()}
                                </select>
                            )}
                            <button
                                className={getButtonClassNames(!shouldLoop && currentPage >= totalPages)}
                                type="button"
                                disabled={!shouldLoop && currentPage >= totalPages}
                                onClick={() => turnToNextPage()}
                            >
                                {!isMobile && 'Next\u00A0'}
                                {'>'}
                            </button>
                            <button
                                className={getButtonClassNames(currentPage === totalPages)}
                                type="button"
                                disabled={currentPage === totalPages}
                                onClick={() => setCurrentPage(totalPages)}
                            >
                                {!isMobile && 'Last\u00A0'}
                                {'>>'}
                            </button>
                        </div>
                    )}
                </div>
            </div>
        )
}

export default ComicReader
