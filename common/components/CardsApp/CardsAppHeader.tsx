'use client'

import React from 'react'
import Image from 'next/image'
import headerImage from '@/public/assets/cards/headerImage.png'

interface TProps {
    isPlayView: boolean
    setIsPlayViewCallback: Function
}

const CardsAppHeader = (props: TProps) => {
    const { isPlayView, setIsPlayViewCallback } = props

    return (
        <span className="cards-app--header-wrapper">
            <Image
                className="cards-app--header-image"
                src={headerImage}
                alt="A Road that Knows Your Name"
                onClick={() => setIsPlayViewCallback(true)}
            />
            <span className="cards-app--header-buttons">
                <button className={isPlayView ? "cards-app--header-button cards-app--header-button__selected" : "cards-app--header-button"} onClick={() => setIsPlayViewCallback(true)}>play</button>
                <button className={isPlayView ? "cards-app--header-button" : "cards-app--header-button cards-app--header-button__selected"} onClick={() => setIsPlayViewCallback(false)}>about</button>
            </span>
        </span>
    )
}

export default CardsAppHeader
