import { TComicPages, TComicPDFs } from '../types/types'

import MallKing00 from '@/public/assets/mallKingPages/MallKing00.png'


export const mallKingPages: TComicPages = [
    {
        altText: 'Mall King front cover',
        image: MallKing00,
    },
]

export const comicPDFs: TComicPDFs = {
    mallKing: '/assets/mallKingPages/mallKing.pdf',
}