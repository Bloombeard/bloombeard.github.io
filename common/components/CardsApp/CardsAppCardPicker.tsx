import React, { useEffect, useRef, useState } from 'react'
import Image, { StaticImageData } from 'next/image'
import { cardRanks, cardSuits, cardImages } from '@/common/constants/cards'


const CardsAppCardPicker = () => {
    const [currentRank, setCurrentRank] = useState<string | null>(null)
    const [currentSuit, setCurrentSuit] = useState<string | null>(null)
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
        <span className="cards-wrapper">
            <Image
                className="cards-card"
                src={currentRank && currentSuit ? cardImages[`${currentSuit}${currentRank}`] : cardImages.cardBack}
                alt={`${currentRank} of ${currentSuit}`}
            />
            <span className="card-selects--wrapper">
                <span className="card-select--wrapper">
                    <label className="card-select--label" htmlFor="suits">Suit</label>
                    <select className="card-select--selector" name="suits" id="suits" ref={suitSelectRef}>
                        {Object.values(cardSuits).map(suit => (
                            <option className="card-select--option" key={suit} value={suit}>{suit}</option>
                        ))}
                    </select>
                </span>
                <span className="card-select--wrapper">
                    <label className="card-select--label" htmlFor="ranks">Rank</label>
                    <select className="card-select--selector" name="ranks" id="ranks" ref={rankSelectRef}>
                        {Object.values(cardRanks).map(rank => (
                            <option className="card-select--option" key={rank} value={rank}>{rank}</option>
                        ))}
                    </select>
                </span>
            </span>
            <button className="card-submit" onClick={onSubmit}>Submit</button>
        </span>
    )
}

export default CardsAppCardPicker