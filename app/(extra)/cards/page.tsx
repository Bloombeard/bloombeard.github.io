'use client'

import React, { useState } from 'react'
import CardsAppCardPicker from '@/common/components/CardsApp/CardsAppCardPicker'
import CardsAppHeader from '@/common/components/CardsApp/CardsAppHeader'
import CardsAppAbout from '@/common/components/CardsApp/CardsAppAbout'

const Cards = () => {
    const [isPlayView, setIsPlayView] = useState<boolean>(true)

    return (
        <main>
            <CardsAppHeader isPlayView={isPlayView} setIsPlayViewCallback={setIsPlayView} />
            {isPlayView ?
                <CardsAppCardPicker />
                :
                <CardsAppAbout />
            }
            <span className="cards-app--copyright-footer">Created in 2025 by <a href="https://www.forreststorrs.com">Forrest Storrs</a> and <a href="https://www.illustratornate.com/">Nate Taylor</a></span>
        </main>
    )
}

export default Cards
