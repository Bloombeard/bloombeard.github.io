import { TExternalLinks, TNavLinks } from '../types/types'

import AchingHeightsCover from '@/public/assets/coverImages/AchingHeightsCover.png'
import DesertBirdsCover from '@/public/assets/coverImages/DesertBirdsCover.png'
import DevynCover from '@/public/assets/coverImages/DevynCover.jpeg'
import GlittergymCover from '@/public/assets/coverImages/GlittergymCover.png'
import MallKingCover from '@/public/assets/coverImages/MallKingCover.png'
import RedLightCover from '@/public/assets/coverImages/RedLightCover.png'

const _externalLinks = {
    blog: 'https://bloombeard.tumblr.com/',
    instagram: 'https://www.instagram.com/bloombeard/',
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
        previewAltText: 'Desert Birds'
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
        previewAltText: 'Devyn'
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

export const externalDownloadLinks: TExternalLinks = {
    mallKing: [{
        label: 'Download',
        target: 'https://payhip.com/b/2ZGV',
    }],
    achingHeights: [{
        label: 'Download',
        target: '',
    }],
    devyn: [{
        label: 'Download',
        target: '',
    }],
    glittergym: [
        {
            label: 'Issue\xa01',
            target: 'https://entervoid.com/view/6609/2/1',
        },
        {
            label: 'Issue\xa02',
            target: 'https://entervoid.com/view/6628/1/1',
        },
        {
            label: 'Issue\xa03',
            target: 'https://entervoid.com/view/6639/1/1',
        },
    ],
    desertBirds: [{
        label: 'Download',
        target: '',
    }],
    redLight: [{
        label: 'Download',
        target: '',
    }],
    wishFactory: [{
        label: 'Download',
        target: '',
    }],
    elixers: [{
        label: 'Download',
        target: '',
    }],
    audit: [{
        label: 'Download',
        target: '',
    }],
    furniture: [{
        label: 'Download',
        target: '',
    }],
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
    },
    {
        label: 'About',
        target: '/about',
    },
]