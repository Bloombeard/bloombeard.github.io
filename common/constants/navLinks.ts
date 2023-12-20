import { TNavLinks } from '../types/types'
import MallKing11 from '@/common/assets/MallKing11.png'

const _externalLinks = {
    blog: 'https://bloombeard.tumblr.com/',
    instagram: 'https://www.instagram.com/bloombeard/',
}

export const comicLinks: TNavLinks = [
    {
        label: `The Curse of the Mall\xa0King`,
        target: '/comics/mallKing',
        previewImage: MallKing11,
        previewAltText: 'The Curse of the Mall King',
    },
    {
        label: 'Aching Heights',
        target: '/comics/achingHeights',
    },
    {
        label: 'Devyn',
        target: '/comics/devyn',
    },
    {
        label: 'Glittergym',
        target: '/comics/glittergym',
    },
    {
        label: 'Desert Birds',
        target: '/comics/desertBirds',
    },
    {
        label: 'Red Light',
        target: '/comics/redLight',
    },
]

export const gameLinks: TNavLinks = [
    {
        label: `Stuart Bidding's Wish${String.fromCharCode(8209)}Granting Factory`,
        target: '/games/factory',
    },
    {
        label: "Madame Bassitor's Catalogue of Curious Elixers",
        target: '/games/elixers'
    },
    {
        label: 'The Audit',
        target: '/games/audit'
    },
    {
        label: 'Your Living Room is Full of Furniture',
        target: '/games/furniture',
    },
]

export const aboutPageLinks: TNavLinks = [
    {
        label: 'Blog',
        target: _externalLinks.blog,
    },
    {
        label: 'Instagram',
        target: _externalLinks.instagram,
    },
]

export const navBarLinks: TNavLinks = [
    {
        label: 'Comics',
        target: '/comics',
        expansion: comicLinks,
    },
    {
        label: 'Games',
        target: '/games',
        expansion: gameLinks,
    },
    {
        label: 'Publications',
        target: '/publications',
    },
    {
        label: 'Blog',
        target: _externalLinks.blog,
    },
    {
        label: 'About',
        target: '/about',
    },
]