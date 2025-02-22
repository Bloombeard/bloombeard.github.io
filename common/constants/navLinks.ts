import { TExternalLinks, TNavLinks } from '../types/types'

import AchingHeightsCover from '@/public/assets/coverImages/AchingHeightsCover.png'
import AuditCover from '@/public/assets/coverImages/AuditCover.png'
import DesertBirdsCover from '@/public/assets/coverImages/DesertBirdsCover.png'
import DevynCover from '@/public/assets/coverImages/DevynCover.jpeg'
import ElixersCover from '@/public/assets/coverImages/ElixersCover.png'
import FurnitureCover from '@/public/assets/coverImages/FurnitureCover.png'
import GlittergymCover from '@/public/assets/coverImages/GlittergymCover.png'
import MallKingCover from '@/public/assets/coverImages/MallKingCover.png'
import RedLightCover from '@/public/assets/coverImages/RedLightCover.png'
import CampCover from '@/public/assets/coverImages/CampCover.png'
import WhiskersCover from '@/public/assets/coverImages/WhiskersCover.png'

const _externalLinks = {
    blog: 'https://bloombeard.tumblr.com/',
    instagram: 'https://www.instagram.com/bloombeard/',
    elixers: 'https://forreststorrs.itch.io/elixers',
    audit: 'https://forreststorrs.itch.io/the-audit',
    furniture: 'https://forreststorrs.itch.io/new-furniture',
    camp: 'https://forreststorrs.itch.io/jesus-camp',
    whiskers: 'https://forreststorrs.itch.io/mrs-whiskers',
}

export const comicLinks: TNavLinks = [
    {
        label: `The Curse of the Mall\xa0King`,
        target: '/comics/mallKing',
        previewImage: MallKingCover,
        previewAltText: 'The Curse of the Mall King',
    },
    {
        label: 'Desert Birds',
        target: '/comics/desertBirds',
        previewImage: DesertBirdsCover,
        previewAltText: 'Desert Birds',
    },
    {
        label: 'Red Light',
        target: '/comics/redLight',
        previewImage: RedLightCover,
        previewAltText: 'Red Light',
    },
    {
        label: 'Devyn',
        target: '/comics/devyn',
        previewImage: DevynCover,
        previewAltText: 'Devyn',
    },
    {
        label: 'Aching Heights',
        target: '/comics/achingHeights',
        previewImage: AchingHeightsCover,
        previewAltText: 'Aching Heights',
    },
    {
        label: 'Glittergym',
        target: '/comics/glittergym',
        previewImage: GlittergymCover,
        previewAltText: 'Glittergym',
    },
]

export const gameLinks: TNavLinks = [
    {
        label: "The Vile & Wicked Mrs. Whiskers",
        target: _externalLinks.whiskers,
        previewImage: WhiskersCover,
    },
    {
        label: "Three Wishes at Jesus Camp",
        target: _externalLinks.camp,
        previewImage: CampCover,
    },
    {
        label: "Madame Bassitor's Catalogue of Curious\xa0Elixers",
        target: _externalLinks.elixers,
        previewImage: ElixersCover,
    },
    {
        label: 'The Audit',
        target: _externalLinks.audit,
        previewImage: AuditCover,
        previewAltText: 'The Audit',
    },
    {
        label: 'Your Living Room is Full of\xa0Furniture',
        target: _externalLinks.furniture,
        previewImage: FurnitureCover,
        previewAltText: 'Your Living Room is Full of Furniture',
    },
]

export const aboutPageLinks: TNavLinks = [
    {
        label: 'Blog',
        target: _externalLinks.blog,
        isExternal: true,
    },
    {
        label: 'Instagram',
        target: _externalLinks.instagram,
        isExternal: true,
    },
]

export const externalDownloadLinks: TExternalLinks = {
    mallKing: [
        {
            label: 'Download',
            target: 'https://forreststorrs.itch.io/mall-king',
            isExternal: true,
        },
    ],
    achingHeights: [
        {
            label: 'Download',
            target: 'https://forreststorrs.itch.io/aching-heights',
            isExternal: true,
        },
    ],
    devyn: [
        {
            label: 'Full\xa0Anthology',
            target: 'https://issuu.com/acdhsoee/docs/drawntohome_final',
            isExternal: true,
        },
    ],
    glittergym: [
        {
            label: 'Issue\xa01',
            target: 'https://entervoid.com/view/6609/2/1',
            isExternal: true,
        },
        {
            label: 'Issue\xa02',
            target: 'https://entervoid.com/view/6628/1/1',
            isExternal: true,
        },
        {
            label: 'Issue\xa03',
            target: 'https://entervoid.com/view/6639/1/1',
            isExternal: true,
        },
    ],
    desertBirds: [
        {
            label: 'Download',
            target: 'https://forreststorrs.itch.io/desert-birds',
            isExternal: true,
        },
    ],
    redLight: [
        {
            label: 'Download',
            target: 'https://forreststorrs.itch.io/red-light',
            isExternal: true,
        },
    ],
    elixers: [
        {
            label: 'Download',
            target: 'https://forreststorrs.itch.io/elixers',
            isExternal: true,
        },
    ],
    audit: [
        {
            label: 'Download',
            target: 'https://forreststorrs.itch.io/the-audit',
            isExternal: true,
        },
    ],
    furniture: [
        {
            label: 'Download',
            target: 'https://forreststorrs.itch.io/new-furniture',
            isExternal: true,
        },
    ],
    camp: [
        {
            label: 'Download',
            target: 'https://forreststorrs.itch.io/jesus-camp',
            isExternal: true,
        },
    ],
}

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
        isExternal: true,
    },
    {
        label: 'About',
        target: '/about',
    },
]
