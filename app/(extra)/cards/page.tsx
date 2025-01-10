'use client'

import React, { useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import { cardRanks, cardSuits, cardImages } from '@/common/constants/cards'

const Cards = () => {
    const [currentRank, setCurrentRank] = useState<string>('')
    const [currentSuit, setCurrentSuit] = useState<string>('')
    const suitSelectRef = useRef<HTMLSelectElement>(null)
    const rankSelectRef = useRef<HTMLSelectElement>(null)

    const onSubmit = () => {
        const suitSelectValue = suitSelectRef?.current?.value
        const rankSelectValue = rankSelectRef?.current?.value
        
        if (suitSelectValue && suitSelectValue !== currentSuit) {
            setCurrentSuit(suitSelectValue)
        }

        if (rankSelectValue && rankSelectValue !== currentRank) {
            setCurrentRank(rankSelectValue)
        }
    }

    return (
        <main className="cards-wrapper">
            <label htmlFor="suits">Suit: </label>
            <select name="suits" id="suits" ref={suitSelectRef}>
                {Object.values(cardSuits).map(suit => (
                    <option value={suit}>{suit}</option>
                ))}
            </select>
            <label htmlFor="ranks">Rank:</label>
            <select name="ranks" id="ranks" ref={rankSelectRef}>
                {Object.values(cardRanks).map(rank => (
                    <option value={rank}>{rank}</option>
                ))}
            </select>
            <button onClick={onSubmit}>Submit</button>
            <div>{currentRank} of {currentSuit}</div>
            {currentSuit && currentRank && (
                <Image 
                className="cards-card"
                src={cardImages[currentSuit[currentRank]]}
                alt={`${currentRank} of ${currentSuit}`}
                />
            )}
        </main>
    )
}

export default Cards
