'use client'

import React, { useState } from 'react'
import Image from 'next/image'
import CardsAppCardPicker from '@/common/components/CardsApp/CardsAppCardPicker'
import CardsAppHeader from '@/common/components/CardsApp/CardsAppHeader'
import CardsAppAbout from '@/common/components/CardsApp/CardsAppAbout'
import border1 from '@/public/assets/cards/border-1.jpeg'
import border2 from '@/public/assets/cards/border-2.jpeg'
import border3 from '@/public/assets/cards/border-3.jpeg'
import border4 from '@/public/assets/cards/border-4.jpeg'

const Cards = () => {
    const [isPlayView, setIsPlayView] = useState<boolean>(true)

    return (
        <main>
            <Image className="cards-border" src={isPlayView ? border3 : border1} alt="left border image" />
            <div className="cards-content">
                <CardsAppHeader isPlayView={isPlayView} setIsPlayViewCallback={setIsPlayView} />
                {isPlayView ?
                    <CardsAppCardPicker />
                    :
                    <CardsAppAbout />
                }
                <span className="cards-app--copyright-footer">Created in 2025 by <a href="https://www.forreststorrs.com">Forrest Storrs</a> and <a href="https://www.illustratornate.com/">Nate Taylor</a></span>
            </div>
            <Image className="cards-border" src={isPlayView ? border4 : border2} alt="right border image" />
        </main>
    )
}

export default Cards
