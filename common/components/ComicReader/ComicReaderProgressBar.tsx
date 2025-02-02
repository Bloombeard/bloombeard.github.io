"use client"

import React, { useEffect, useState } from 'react'
import { Oswald } from 'next/font/google'

const oswald = Oswald({
    subsets: ['latin'],
    adjustFontFallback: false,
    display: 'swap',
})

interface TProps {
    closeReaderCallback: React.Dispatch<React.SetStateAction<boolean>>
    percentLoadedState: number
    percentLoadedCallback: React.Dispatch<React.SetStateAction<number>>
    readerRef: React.RefObject<HTMLDivElement>
    title: string
}

const ComicReaderProgressBar = (props: TProps) => {
    const { closeReaderCallback, percentLoadedState, percentLoadedCallback, readerRef, title } = props

    const [hasScrolledToProgressBar, setHasScrolledToProgressBar] = useState<boolean>(false)

    useEffect(() => {
        if (percentLoadedState > 0 && !hasScrolledToProgressBar && readerRef?.current) {
            readerRef?.current.scrollIntoView({behavior: 'smooth', block: 'start' })
            setHasScrolledToProgressBar(true)
        }
        if (percentLoadedState === 100 && readerRef?.current) {
            setTimeout(() => {
                readerRef?.current?.scrollIntoView({ behavior: 'smooth', block: 'start' })
            }, 250)
        }
    }, [hasScrolledToProgressBar, percentLoadedState, readerRef])

    const onCloseButtonClick = () => {
        percentLoadedCallback(0)

        setHasScrolledToProgressBar(false)
        
        setTimeout(() => {
            window.scrollTo({ top: 0, behavior: 'smooth' })
        }, 400)

        setTimeout(() => {
            closeReaderCallback(false)
        }, 600)
    }

    const getLoadingBarClassnames = (): string => {
        let classNames = `${oswald.className} comic-reader__progress`

        if (percentLoadedState > 0) {
            classNames += ` comic-reader__progress--${percentLoadedState.toString()}percent`
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

    return (
        <div className={getLoadingBarClassnames()}>
            <div className={getProgressContentClasses()}>
                <h1>{title}</h1>
                <button className="comic-reader__progress--close" onClick={() => onCloseButtonClick()}> X </button>
            </div>
        </div>
    )
}

export default ComicReaderProgressBar