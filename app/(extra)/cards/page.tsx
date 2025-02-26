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
        </main>
    )
}

export default Cards
