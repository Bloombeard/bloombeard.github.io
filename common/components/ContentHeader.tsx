import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { IM_Fell_English_SC, Oswald } from 'next/font/google'
import parse from 'html-react-parser'
import { TDescriptionBlock } from '../types/types'

const imFell = IM_Fell_English_SC({
    adjustFontFallback: false,
    display: 'swap',
    subsets: ['latin'],
    weight: '400',
})

const oswald = Oswald({
    subsets: ['latin'],
})

interface TProps {
    block: TDescriptionBlock
    isReaderLoaded?: boolean
    openReaderCallback?: React.Dispatch<React.SetStateAction<boolean>>
}

const ContentHeader = (props: TProps) => {
    const { block, isReaderLoaded, openReaderCallback } = props

    return (
        <div className={`${oswald.className} content-header--wrapper`}>
            <div className="content-header--description">
                {block.title && <h1>{block.title}</h1>}
                <div className="content-header--description__details">
                    {block.subtitle && <h2>{block.subtitle}</h2>}
                    {block.bodyText && <p>{parse(block.bodyText)}</p>}
                    {block.links && (
                        <div className={`${imFell.className} content-header--description__links-wrapper`}>
                            {openReaderCallback && !isReaderLoaded && (
                                <div
                                    onClick={() => openReaderCallback(true)}
                                    className="content-header--description__link read-button"
                                >
                                    Read
                                </div>
                            )}
                            {block.links.map((link, i) => {
                                return (
                                    <Link className="content-header--description__link" href={link.target} key={link.label}>
                                        {link.label}
                                    </Link>
                                )
                            })}
                        </div>
                    )}
                </div>
            </div>
            <div className="content-header--cover-wrapper">
                <Image className="content-header--cover-image" src={block.coverImage} alt={block.coverAltText} fill={false} />
            </div>
        </div>
    )
}

export default ContentHeader
