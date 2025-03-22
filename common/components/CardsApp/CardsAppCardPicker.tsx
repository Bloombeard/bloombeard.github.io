import React, { useEffect, useRef, useState } from 'react'
import Image, { StaticImageData } from 'next/image'
import { cardRanks, cardSuits, cardImages } from '@/common/constants/cards'
import faceLogo from '@/public/assets/cards/faceLogo.png'
import { TCardSuits } from '@/common/types/types'


const CardsAppCardPicker = () => {
    const [currentRank, setCurrentRank] = useState<string | null>(null)
    const [currentSuit, setCurrentSuit] = useState<string | null>(null)
    const [currentJoker, setCurrentJoker] = useState<1 | 2>(1)
    const [shouldShowSuitSelect, setShouldShowSuitSelect] = useState<boolean>(true)
    const suitSelectRef = useRef<HTMLSelectElement>(null)
    const rankSelectRef = useRef<HTMLSelectElement>(null)

    const getCardImage = () => {
        if (currentRank && currentRank !== cardRanks.joker && currentSuit) {
            return (
                <Image
                    className="cards-card"
                    src={cardImages[`${currentSuit}${currentRank}`]}
                    alt={`${currentRank} of ${currentSuit}`}
                />
            )
        } else if (currentRank === cardRanks.joker && currentJoker === 1) {
            return (
                <Image
                    className="cards-card"
                    src={cardImages.Joker1}
                    alt="joker 1"
                />
            )
        } else if (currentRank === cardRanks.joker && currentJoker === 2) {
            return (
                <Image
                    className="cards-card"
                    src={cardImages.Joker2}
                    alt="joker 2"
                />
            )
        }

        return (
            <span className="cards-blank">
                <Image
                    className="cards-blank--logo"
                    src={faceLogo}
                    alt={'face logo'}
                />
                <span className="cards-blank--description">reveal a card from the deck, select its suit and rank below, and hit “draw”</span>
            </span>
        )
    }
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

    useEffect(() => {
        if (currentRank === cardRanks.joker) {
            console.log('currentRank is ', currentRank)
            setCurrentJoker(1)
            onSubmit()
        }

    }, [currentRank])

    const _onRankSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        if (e.target.value === cardRanks.joker && currentRank !== cardRanks.joker) {
            setCurrentJoker(1)
            onSubmit()
        }

        if (e.target.value === cardRanks.joker && shouldShowSuitSelect) {
            setShouldShowSuitSelect(false)
        } else if (!shouldShowSuitSelect && e.target.value !== cardRanks.joker) {
            setShouldShowSuitSelect(true)
        }
    }

    const _getSuitWithSymbol = (suit: string) => {
        switch (suit) {
            case cardSuits.clubs:
                return "♣ " + suit
            case cardSuits.diamonds:
                return "♦ " + suit
            case cardSuits.hearts:
                return "♥ " + suit
            case cardSuits.spades:
                return "♠ " + suit
        }

    }

    const _getJokerSelectButtonClasses = (joker: 1 | 2) => {
        let classNames = ["card--joker-select"]

        if (joker === currentJoker) {
            classNames.push("card--joker-select__disabled")
        }

        return classNames.join(' ')
    }

    const _onJokerSelectClick = (jokerClicked: 1 | 2) => {
        if (jokerClicked !== currentJoker) {
            setCurrentJoker(jokerClicked)
        }
    }

    return (
        <span className="cards-wrapper">
            <span className="cards-card--wrapper">
                {getCardImage()}
            </span>
            <span className="card-selects--wrapper">
                <select className="card-select--selector" name="ranks" id="ranks" onChange={_onRankSelectChange} ref={rankSelectRef}>
                    {Object.values(cardRanks).map(rank => (
                        <option className="card-select--option" key={rank} value={rank}>{rank}</option>
                    ))}
                </select>
                <span className="card-selects--conjunction">{shouldShowSuitSelect ? 'of' : 'aha!'}</span>
                {
                    shouldShowSuitSelect ?
                        <select className="card-select--selector" name="suits" id="suits" ref={suitSelectRef}>
                            {Object.values(cardSuits).map(suit => (
                                <option className="card-select--option" key={suit} value={suit}>{_getSuitWithSymbol(suit)}</option>
                            ))}
                        </select>
                        :
                        <div className="card--joker-select__wrapper">
                            <button className={_getJokerSelectButtonClasses(1)} onClick={() => _onJokerSelectClick(1)}>1</button>
                            <button className={_getJokerSelectButtonClasses(2)} onClick={() => _onJokerSelectClick(2)}>2</button>
                        </div>
                }

            </span>
            <button className="card-submit" onClick={onSubmit}>Submit</button>
        </span>
    )
}

export default CardsAppCardPicker