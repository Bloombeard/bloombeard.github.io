import { TCardRanks, TCardSuits, TCardImages } from '../types/types'
import clubsA from '@/public/assets/cards/fronts/png_96_dpi/clubs_ace.png'
import clubs2 from '@/public/assets/cards/fronts/png_96_dpi/clubs_2.png'
import clubs3 from '@/public/assets/cards/fronts/png_96_dpi/clubs_3.png'
import clubs4 from '@/public/assets/cards/fronts/png_96_dpi/clubs_4.png'
import clubs5 from '@/public/assets/cards/fronts/png_96_dpi/clubs_5.png'
import clubs6 from '@/public/assets/cards/fronts/png_96_dpi/clubs_6.png'
import clubs7 from '@/public/assets/cards/fronts/png_96_dpi/clubs_7.png'
import clubs8 from '@/public/assets/cards/fronts/png_96_dpi/clubs_8.png'
import clubs9 from '@/public/assets/cards/fronts/png_96_dpi/clubs_9.png'
import clubs10 from '@/public/assets/cards/fronts/png_96_dpi/clubs_10.png'
import clubsJ from '@/public/assets/cards/fronts/png_96_dpi/clubs_jack.png'
import clubsQ from '@/public/assets/cards/fronts/png_96_dpi/clubs_queen.png'
import clubsK from '@/public/assets/cards/fronts/png_96_dpi/clubs_king.png'
import diamondsA from '@/public/assets/cards/fronts/png_96_dpi/diamonds_ace.png'
import diamonds2 from '@/public/assets/cards/fronts/png_96_dpi/diamonds_2.png'
import diamonds3 from '@/public/assets/cards/fronts/png_96_dpi/diamonds_3.png'
import diamonds4 from '@/public/assets/cards/fronts/png_96_dpi/diamonds_4.png'
import diamonds5 from '@/public/assets/cards/fronts/png_96_dpi/diamonds_5.png'
import diamonds6 from '@/public/assets/cards/fronts/png_96_dpi/diamonds_6.png'
import diamonds7 from '@/public/assets/cards/fronts/png_96_dpi/diamonds_7.png'
import diamonds8 from '@/public/assets/cards/fronts/png_96_dpi/diamonds_8.png'
import diamonds9 from '@/public/assets/cards/fronts/png_96_dpi/diamonds_9.png'
import diamonds10 from '@/public/assets/cards/fronts/png_96_dpi/diamonds_10.png'
import diamondsJ from '@/public/assets/cards/fronts/png_96_dpi/diamonds_jack.png'
import diamondsQ from '@/public/assets/cards/fronts/png_96_dpi/diamonds_queen.png'
import diamondsK from '@/public/assets/cards/fronts/png_96_dpi/diamonds_king.png'
import heartsA from '@/public/assets/cards/fronts/png_96_dpi/hearts_ace.png'
import hearts2 from '@/public/assets/cards/fronts/png_96_dpi/hearts_2.png'
import hearts3 from '@/public/assets/cards/fronts/png_96_dpi/hearts_3.png'
import hearts4 from '@/public/assets/cards/fronts/png_96_dpi/hearts_4.png'
import hearts5 from '@/public/assets/cards/fronts/png_96_dpi/hearts_5.png'
import hearts6 from '@/public/assets/cards/fronts/png_96_dpi/hearts_6.png'
import hearts7 from '@/public/assets/cards/fronts/png_96_dpi/hearts_7.png'
import hearts8 from '@/public/assets/cards/fronts/png_96_dpi/hearts_8.png'
import hearts9 from '@/public/assets/cards/fronts/png_96_dpi/hearts_9.png'
import hearts10 from '@/public/assets/cards/fronts/png_96_dpi/hearts_10.png'
import heartsJ from '@/public/assets/cards/fronts/png_96_dpi/hearts_jack.png'
import heartsQ from '@/public/assets/cards/fronts/png_96_dpi/hearts_queen.png'
import heartsK from '@/public/assets/cards/fronts/png_96_dpi/hearts_king.png'
import spadesA from '@/public/assets/cards/fronts/png_96_dpi/spades_ace.png'
import spades2 from '@/public/assets/cards/fronts/png_96_dpi/spades_2.png'
import spades3 from '@/public/assets/cards/fronts/png_96_dpi/spades_3.png'
import spades4 from '@/public/assets/cards/fronts/png_96_dpi/spades_4.png'
import spades5 from '@/public/assets/cards/fronts/png_96_dpi/spades_5.png'
import spades6 from '@/public/assets/cards/fronts/png_96_dpi/spades_6.png'
import spades7 from '@/public/assets/cards/fronts/png_96_dpi/spades_7.png'
import spades8 from '@/public/assets/cards/fronts/png_96_dpi/spades_8.png'
import spades9 from '@/public/assets/cards/fronts/png_96_dpi/spades_9.png'
import spades10 from '@/public/assets/cards/fronts/png_96_dpi/spades_10.png'
import spadesJ from '@/public/assets/cards/fronts/png_96_dpi/spades_jack.png'
import spadesQ from '@/public/assets/cards/fronts/png_96_dpi/spades_queen.png'
import spadesK from '@/public/assets/cards/fronts/png_96_dpi/spades_king.png'


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

export const cardImages: TCardImages = {
    clubs: {
        ace: clubsA,
        two: clubs2,
        three: clubs3,
        four: clubs4,
        five: clubs5,
        six: clubs6,
        seven: clubs7,
        eight: clubs8,
        nine: clubs9,
        ten: clubs10,
        jack: clubsJ,
        queen: clubsQ,
        king: clubsK,
    },
    diamonds: {
        ace: diamondsA,
        two: diamonds2,
        three: diamonds3,
        four: diamonds4,
        five: diamonds5,
        six: diamonds6,
        seven: diamonds7,
        eight: diamonds8,
        nine: diamonds9,
        ten: diamonds10,
        jack: diamondsJ,
        queen: diamondsQ,
        king: diamondsK,
    },
    hearts: {
        ace: heartsA,
        two: hearts2,
        three: hearts3,
        four: hearts4,
        five: hearts5,
        six: hearts6,
        seven: hearts7,
        eight: hearts8,
        nine: hearts9,
        ten: hearts10,
        jack: heartsJ,
        queen: heartsQ,
        king: heartsK,
    },
    spades: {
        ace: spadesA,
        two: spades2,
        three: spades3,
        four: spades4,
        five: spades5,
        six: spades6,
        seven: spades7,
        eight: spades8,
        nine: spades9,
        ten: spades10,
        jack: spadesJ,
        queen: spadesQ,
        king: spadesK,
    }
}