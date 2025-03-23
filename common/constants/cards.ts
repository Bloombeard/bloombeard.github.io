import { TCardRanks, TCardSuits } from '../types/types'
import clubsA from '@/public/assets/cards/cl-a.gif'
import clubs2 from '@/public/assets/cards/cl-2.gif'
import clubs3 from '@/public/assets/cards/cl-3.gif'
import clubs4 from '@/public/assets/cards/cl-4.gif'
import clubs5 from '@/public/assets/cards/cl-5.gif'
import clubs6 from '@/public/assets/cards/cl-6.gif'
import clubs7 from '@/public/assets/cards/cl-7.gif'
import clubs8 from '@/public/assets/cards/cl-8.gif'
import clubs9 from '@/public/assets/cards/cl-9.gif'
import clubs10 from '@/public/assets/cards/cl-10.gif'
import clubsJ from '@/public/assets/cards/cl-j.gif'
import clubsQ from '@/public/assets/cards/cl-q.gif'
import clubsK from '@/public/assets/cards/cl-k.gif'
import diamondsA from '@/public/assets/cards/di-a.gif'
import diamonds2 from '@/public/assets/cards/di-2.gif'
import diamonds3 from '@/public/assets/cards/di-3.gif'
import diamonds4 from '@/public/assets/cards/di-4.gif'
import diamonds5 from '@/public/assets/cards/di-5.gif'
import diamonds6 from '@/public/assets/cards/di-6.gif'
import diamonds7 from '@/public/assets/cards/di-7.gif'
import diamonds8 from '@/public/assets/cards/di-8.gif'
import diamonds9 from '@/public/assets/cards/di-9.gif'
import diamonds10 from '@/public/assets/cards/di-10.gif'
import diamondsJ from '@/public/assets/cards/di-j.gif'
import diamondsQ from '@/public/assets/cards/di-q.gif'
import diamondsK from '@/public/assets/cards/di-k.gif'
import heartsA from '@/public/assets/cards/he-a.gif'
import hearts2 from '@/public/assets/cards/he-2.gif'
import hearts3 from '@/public/assets/cards/he-3.gif'
import hearts4 from '@/public/assets/cards/he-4.gif'
import hearts5 from '@/public/assets/cards/he-5.gif'
import hearts6 from '@/public/assets/cards/he-6.gif'
import hearts7 from '@/public/assets/cards/he-7.gif'
import hearts8 from '@/public/assets/cards/he-8.gif'
import hearts9 from '@/public/assets/cards/he-9.gif'
import hearts10 from '@/public/assets/cards/he-10.gif'
import heartsJ from '@/public/assets/cards/he-j.gif'
import heartsQ from '@/public/assets/cards/he-q.gif'
import heartsK from '@/public/assets/cards/he-k.gif'
import spadesA from '@/public/assets/cards/sp-a.gif'
import spades2 from '@/public/assets/cards/sp-2.gif'
import spades3 from '@/public/assets/cards/sp-3.gif'
import spades4 from '@/public/assets/cards/sp-4.gif'
import spades5 from '@/public/assets/cards/sp-5.gif'
import spades6 from '@/public/assets/cards/sp-6.gif'
import spades7 from '@/public/assets/cards/sp-7.gif'
import spades8 from '@/public/assets/cards/sp-8.gif'
import spades9 from '@/public/assets/cards/sp-9.gif'
import spades10 from '@/public/assets/cards/sp-10.gif'
import spadesJ from '@/public/assets/cards/sp-j.gif'
import spadesQ from '@/public/assets/cards/sp-q.gif'
import spadesK from '@/public/assets/cards/sp-k.gif'
import joker1 from '@/public/assets/cards/joker-1.gif'
import joker2 from '@/public/assets/cards/joker-2.gif'
import { StaticImageData } from 'next/image'


export const cardRanks: TCardRanks = {
    ace: 'Ace',
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
    joker: 'Joker',
}

export const cardSuits: TCardSuits = {
    clubs: 'Clubs',
    diamonds: 'Diamonds',
    hearts: 'Hearts',
    spades: "Spades",
}

export const cardImages: { [key: string]: StaticImageData } = {
    ClubsAce: clubsA,
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
    DiamondsAce: diamondsA,
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
    HeartsAce: heartsA,
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
    SpadesAce: spadesA,
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
    Joker1: joker1,
    Joker2: joker2,
}