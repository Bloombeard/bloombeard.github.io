import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Courier_Prime, Oswald } from 'next/font/google'
import parse from 'html-react-parser'
import { TDescriptionBlock } from '../types/types'

const oswald = Oswald({
    subsets: ['latin'],
})

const courierPrime = Courier_Prime({
    subsets: ['latin'],
    weight: ['400', '700'],
})

interface TProps {
    block: TDescriptionBlock
    isReaderLoaded?: boolean
    openReaderCallback?: React.Dispatch<React.SetStateAction<boolean>>
}

const ContentHeader = (props: TProps) => {
    const { block, isReaderLoaded, openReaderCallback } = props

    return (
        <div className={`${oswald.className} content-header-v3--wrapper`}>
            <div className="content-header-v3--cover-wrapper">
                <Image className="content-header-v3--cover-image" src={block.coverImage} alt={block.coverAltText} fill={false} />
            </div>
            <div className="content-header-v3--description">
                {block.title && <h1>{block.title}</h1>}
                {block.subtitle && <h2>{block.subtitle}</h2>}
                {block.bodyText && <p>{parse(block.bodyText)}</p>}
                {block.links && (
                    <div className={`${courierPrime.className} content-header-v3--description__links-wrapper`}>
                        {block.links.map((link, i) => {
                            return (
                                <div className="content-header-v3--description__link-wrapper" key={link.label}>
                                    {openReaderCallback && !isReaderLoaded && (
                                        <div onClick={() => openReaderCallback(true)} className="content-header-v3--description__link read-button">
                                            Read
                                        </div>
                                    )}
                                    <Link className="content-header-v3--description__link external-link" href={link.target}>
                                        {link.label}
                                    </Link>
                                </div>
                            )
                        })}
                    </div>
                )}
            </div>
        </div>
    )
}

export default ContentHeader
