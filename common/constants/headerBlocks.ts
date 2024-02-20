import { TDescriptionBlock } from '../types/types'
import { aboutPageLinks, externalDownloadLinks } from './navLinks'

import AchingHeightsCover from '@/public/assets/coverImages/AchingHeightsCover.png'
import AuditCover from '@/public/assets/coverImages/AuditCover.png'
import DesertBirdsCover from '@/public/assets/coverImages/DesertBirdsCover.png'
import DevynCover from '@/public/assets/coverImages/DevynCover.jpeg'
import FurnitureCover from '@/public/assets/coverImages/FurnitureCover.png'
import GlittergymCover from '@/public/assets/coverImages/GlittergymCover.png'
import Headshot from '@/public/assets/coverImages/Headshot.png'
import MallKingCover from '@/public/assets/coverImages/MallKingCover.png'
import RedLightCover from '@/public/assets/coverImages/RedLightCover.png'

export const aboutHeader: TDescriptionBlock = {
    title: 'Forrest Storrs',
    subtitle: 'he / she / they',
    bodyText: 'Forrest Storrs is a queer, agendered writer living in Pittsburgh. He mostly writes comics and short stories, and his work has appeared in a handful of magazines and literary journals under his legal name, Joshua Storrs. He is a pushcart nominee and a finalist for the Barry Hannah Prize. When he’s not writing stories or making comics with his friends, he’s probably playing tabletop RPGs or saying hello to other people’s dogs.',
    links: aboutPageLinks,
    coverImage: Headshot,
    coverAltText: 'Guggenheim Grin',
}

export const mallKingHeader: TDescriptionBlock = {
    title: 'The Curse of the Mall King',
    subtitle: '16 pages, black & white',
    bodyText: 'Illustrated by Shelby Criswell',
    links: externalDownloadLinks.mallKing,
    coverImage: MallKingCover,
    coverAltText: 'Mall King cover',
}

export const achingHeightsHeader: TDescriptionBlock = {
    title: 'Aching Heights',
    subtitle: '12 pages, black & white',
    bodyText: 'Illustrated by Conner Herbison',
    links: externalDownloadLinks.achingHeights,
    coverImage: AchingHeightsCover,
    coverAltText: 'Aching Heights cover',
}

export const devynHeader: TDescriptionBlock = {
    title: 'Devyn',
    subtitle: '3 pages, black & white',
    bodyText: `Illustration and interview by Yang Zhen Lee.\n‘Devyn’ is a non-fiction comic about a queer, non-binary homeless person living in Pittsburgh. It is part of the Drawn to Home comics anthology, edited by Nathaniel Taylor.`,
    links: externalDownloadLinks.devyn,
    coverImage: DevynCover,
    coverAltText: 'Devyn cover',
}

export const glittergymHeader: TDescriptionBlock = {
    title: 'Glittergym',
    subtitle: '24 pages, color',
    bodyText: 'Illustrated by Greg Lyons',
    links: externalDownloadLinks.glittergym,
    coverImage: GlittergymCover,
    coverAltText: 'Glittergym cover',
}

export const redLightHeader: TDescriptionBlock = {
    title: 'Red Light',
    subtitle: '6 pages, partial color',
    bodyText: 'Illustrated by Jackarais',
    links: externalDownloadLinks.redLight,
    coverImage: RedLightCover,
    coverAltText: 'Red Light cover',
}

export const desertBirdsHeader: TDescriptionBlock = {
    title: 'Desert Birds',
    subtitle: '26 pages, partial color',
    bodyText: 'Illustrated by Jackarais',
    links: externalDownloadLinks.desertBirds,
    coverImage: DesertBirdsCover,
    coverAltText: 'Desert Birds cover',
}

export const elixersHeader: TDescriptionBlock = {
    title: "Madame Bassitor's Catalogue of Curious Elixers",
    subtitle: 'tabletop RPG supplement pamphlet',
    bodyText: 'Illustrations by Yang Zhen Lee. A tri-fold pamphlet detailing twelve, horror-themed potions. Intended as a system-agnostic supplement for tabletop RPGs.',
    links: externalDownloadLinks.elixers,
    coverImage: Headshot,
    coverAltText: 'Elixer Catalogue cover image',
}

export const furnitureHeader: TDescriptionBlock = {
    title: "Your Living Room Is Full of Furniture",
    subtitle: 'sound and text based horror game',
    bodyText: 'Made with musician and sound designer Echo Reece. This is a short game about finding a new piece of a furniture in your living room. It is also about our relationship with discomfort.',
    links: externalDownloadLinks.furniture,
    coverImage: FurnitureCover,
    coverAltText: 'Furniture game cover image',
}

export const auditHeader: TDescriptionBlock = {
    title: 'The Audit',
    subtitle: "original adventure for the tabletop RPG, 'Dread,' by Epidiah Ravachol",
    bodyText: "Up to five characters explore an abandoned mech hangar in order to complete an audit for a galactic megacorp. Written for the 'Dread' one-shot RPG system, in which players perform actions by pulling blocks from a Jenga tower.",
    links: externalDownloadLinks.audit,
    coverImage: AuditCover,
    coverAltText: 'The Audit cover image',
}