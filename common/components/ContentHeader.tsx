import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { IM_Fell_English_SC, Oswald } from 'next/font/google'
import parse from 'html-react-parser'
import { TDescriptionBlock } from '../types/types'

const imFell = IM_Fell_English_SC({
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
        <div className={`${oswald.className} content-header-v3--wrapper`}>
            <div className="content-header-v3--cover-wrapper">
                <Image className="content-header-v3--cover-image" src={block.coverImage} alt={block.coverAltText} fill={false} />
            </div>
            <div className="content-header-v3--description">
                {block.title && <h1>{block.title}</h1>}
                {block.subtitle && <h2>{block.subtitle}</h2>}
                {block.bodyText && <p>{parse(block.bodyText)}</p>}
                {block.links && (
                    <div className={`${imFell.className} content-header-v3--description__links-wrapper`}>
                        {block.links.map((link, i) => {
                            return (
                                <div className="content-header-v3--description__link-wrapper" key={link.label}>
                                    {openReaderCallback && !isReaderLoaded && (
                                        <div onClick={() => openReaderCallback(true)} className="content-header-v3--description__link read-button">
                                            Read
                                        </div>
                                    )}
                                    <Link className="content-header-v3--description__link" href={link.target}>
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
