import { TCardRanks, TCardSuits } from '../types/types'
import cardBack from '@/public/assets/cards/abstract_clouds.png'
import clubsA from '@/public/assets/cards/clubs_ace.png'
import clubs2 from '@/public/assets/cards/clubs_2.png'
import clubs3 from '@/public/assets/cards/clubs_3.png'
import clubs4 from '@/public/assets/cards/clubs_4.png'
import clubs5 from '@/public/assets/cards/clubs_5.png'
import clubs6 from '@/public/assets/cards/clubs_6.png'
import clubs7 from '@/public/assets/cards/clubs_7.png'
import clubs8 from '@/public/assets/cards/clubs_8.png'
import clubs9 from '@/public/assets/cards/clubs_9.png'
import clubs10 from '@/public/assets/cards/clubs_10.png'
import clubsJ from '@/public/assets/cards/clubs_jack.png'
import clubsQ from '@/public/assets/cards/clubs_queen.png'
import clubsK from '@/public/assets/cards/clubs_king.png'
import diamondsA from '@/public/assets/cards/diamonds_ace.png'
import diamonds2 from '@/public/assets/cards/diamonds_2.png'
import diamonds3 from '@/public/assets/cards/diamonds_3.png'
import diamonds4 from '@/public/assets/cards/diamonds_4.png'
import diamonds5 from '@/public/assets/cards/diamonds_5.png'
import diamonds6 from '@/public/assets/cards/diamonds_6.png'
import diamonds7 from '@/public/assets/cards/diamonds_7.png'
import diamonds8 from '@/public/assets/cards/diamonds_8.png'
import diamonds9 from '@/public/assets/cards/diamonds_9.png'
import diamonds10 from '@/public/assets/cards/diamonds_10.png'
import diamondsJ from '@/public/assets/cards/diamonds_jack.png'
import diamondsQ from '@/public/assets/cards/diamonds_queen.png'
import diamondsK from '@/public/assets/cards/diamonds_king.png'
import heartsA from '@/public/assets/cards/hearts_ace.png'
import hearts2 from '@/public/assets/cards/hearts_2.png'
import hearts3 from '@/public/assets/cards/hearts_3.png'
import hearts4 from '@/public/assets/cards/hearts_4.png'
import hearts5 from '@/public/assets/cards/hearts_5.png'
import hearts6 from '@/public/assets/cards/hearts_6.png'
import hearts7 from '@/public/assets/cards/hearts_7.png'
import hearts8 from '@/public/assets/cards/hearts_8.png'
import hearts9 from '@/public/assets/cards/hearts_9.png'
import hearts10 from '@/public/assets/cards/hearts_10.png'
import heartsJ from '@/public/assets/cards/hearts_jack.png'
import heartsQ from '@/public/assets/cards/hearts_queen.png'
import heartsK from '@/public/assets/cards/hearts_king.png'
import spadesA from '@/public/assets/cards/spades_ace.png'
import spades2 from '@/public/assets/cards/spades_2.png'
import spades3 from '@/public/assets/cards/spades_3.png'
import spades4 from '@/public/assets/cards/spades_4.png'
import spades5 from '@/public/assets/cards/spades_5.png'
import spades6 from '@/public/assets/cards/spades_6.png'
import spades7 from '@/public/assets/cards/spades_7.png'
import spades8 from '@/public/assets/cards/spades_8.png'
import spades9 from '@/public/assets/cards/spades_9.png'
import spades10 from '@/public/assets/cards/spades_10.png'
import spadesJ from '@/public/assets/cards/spades_jack.png'
import spadesQ from '@/public/assets/cards/spades_queen.png'
import spadesK from '@/public/assets/cards/spades_king.png'
import headerImage from '@/public/asses/cards/headerImage'
import { StaticImageData } from 'next/image'


export const cardRanks: TCardRanks = {
    ace: 'A',
    two: '2',
    three: '3',
    four: '4',
    five: '5',
    six: '6',
    seven: '7',
    eight: '8',
    nine: '9',
    ten: '10',
    jack: 'J',
    queen: 'Q',
    king: 'K',
}

export const cardSuits: TCardSuits = {
    clubs: 'Clubs',
    diamonds: 'Diamonds',
    hearts: 'Hearts',
    spades: "Spades",
}

export const cardImages: { [key: string]: StaticImageData } = {
    cardBack: cardBack,
    ClubsA: clubsA,
    Clubs2: clubs2,
    Clubs3: clubs3,
    Clubs4: clubs4,
    Clubs5: clubs5,
    Clubs6: clubs6,
    Clubs7: clubs7,
    Clubs8: clubs8,
    Clubs9: clubs9,
    Clubs10: clubs10,
    ClubsJ: clubsJ,
    ClubsQ: clubsQ,
    ClubsK: clubsK,
    DiamondsA: diamondsA,
    Diamonds2: diamonds2,
    Diamonds3: diamonds3,
    Diamonds4: diamonds4,
    Diamonds5: diamonds5,
    Diamonds6: diamonds6,
    Diamonds7: diamonds7,
    Diamonds8: diamonds8,
    Diamonds9: diamonds9,
    Diamonds10: diamonds10,
    DiamondsJ: diamondsJ,
    DiamondsQ: diamondsQ,
    DiamondsK: diamondsK,
    HeartsA: heartsA,
    Hearts2: hearts2,
    Hearts3: hearts3,
    Hearts4: hearts4,
    Hearts5: hearts5,
    Hearts6: hearts6,
    Hearts7: hearts7,
    Hearts8: hearts8,
    Hearts9: hearts9,
    Hearts10: hearts10,
    HeartsJ: heartsJ,
    HeartsQ: heartsQ,
    HeartsK: heartsK,
    SpadesA: spadesA,
    Spades2: spades2,
    Spades3: spades3,
    Spades4: spades4,
    Spades5: spades5,
    Spades6: spades6,
    Spades7: spades7,
    Spades8: spades8,
    Spades9: spades9,
    Spades10: spades10,
    SpadesJ: spadesJ,
    SpadesQ: spadesQ,
    SpadesK: spadesK,
}