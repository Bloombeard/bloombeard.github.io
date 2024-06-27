import { TDescriptionBlock } from '../types/types'
import { aboutPageLinks, externalDownloadLinks } from './navLinks'

import AchingHeightsCover from '@/public/assets/coverImages/AchingHeightsCover.png'
import AuditCover from '@/public/assets/coverImages/AuditCover.png'
import DesertBirdsCover from '@/public/assets/coverImages/DesertBirdsCover.png'
import DevynCover from '@/public/assets/coverImages/DevynCover.jpeg'
import ElixersCover from '@/public/assets/coverImages/ElixersCover.png'
import FurnitureCover from '@/public/assets/coverImages/FurnitureCover.png'
import GlittergymCover from '@/public/assets/coverImages/GlittergymCover.png'
import Headshot from '@/public/assets/coverImages/Headshot.png'
import MallKingCover from '@/public/assets/coverImages/MallKingCover.png'
import RedLightCover from '@/public/assets/coverImages/RedLightCover.png'

export const aboutHeader: TDescriptionBlock = {
    title: 'Forrest Storrs',
    subtitle: 'he / she / they',
    bodyText: "Forrest Storrs is a queer, agendered writer living in Pittsburgh. They mostly write comics and short stories, and their work has appeared in a handful of magazines and literary journals under their legal name, Joshua Storrs. They are a pushcart nominee and a finalist for the Barry Hannah Prize. When they're not writing stories or making comics with their friends, they're probably playing tabletop RPGs or saying hello to other people’s dogs.",
    links: aboutPageLinks,
    coverImage: Headshot,
    coverAltText: 'Guggenheim Grin',
}

export const mallKingHeader: TDescriptionBlock = {
    title: 'The Curse of\nthe Mall\xa0King',
    subtitle: '16 pages, black & white',
    bodyText: `Illustrated by <a href="https://www.shelbycriswell.com/">Shelby Criswell</a><br/> <br/>'A trio of traveling kids have to go beat up a mall king to stop an old lady's house from getting turned into a parking lot.`,
    links: externalDownloadLinks.mallKing,
    coverImage: MallKingCover,
    coverAltText: 'Mall King cover',
}

export const achingHeightsHeader: TDescriptionBlock = {
    title: 'Aching Heights',
    subtitle: '12 pages, black & white',
    bodyText: 'Illustrated by <a href="https://connerherbison.com/">Conner Herbison</a><br/><br/>A short comic about hiking, dying, and regret.',
    links: externalDownloadLinks.achingHeights,
    coverImage: AchingHeightsCover,
    coverAltText: 'Aching Heights cover',
}

export const devynHeader: TDescriptionBlock = {
    title: 'Devyn',
    subtitle: '3 pages, black & white',
    bodyText: `Illustration and interview by <a href="https://www.instagram.com/yangzhenlee">Yang Zhen Lee</a>.<br/><br/>A non-fiction comic about a queer, non-binary homeless person living in Pittsburgh. It is part of the Drawn to Home comics anthology, edited by <a href="https://www.illustratornate.com/">Nathaniel Taylor.</a>`,
    links: externalDownloadLinks.devyn,
    coverImage: DevynCover,
    coverAltText: 'Devyn cover',
}

export const glittergymHeader: TDescriptionBlock = {
    title: 'Glittergym',
    subtitle: '24 pages, color',
    bodyText: `Illustrated by <a href"https://www.instagram.com/greglypoo/">Greg Lyons</a><br/><br/>Glittergym was made on very tight deadlines for a comics tournament on <a href="https://www.EnterVoid.com/">EnterVoid.com</a>. The goal of the tournament is to create a comic depicting your characters fighting those of other users.`,
    links: externalDownloadLinks.glittergym,
    coverImage: GlittergymCover,
    coverAltText: 'Glittergym cover',
}

export const redLightHeader: TDescriptionBlock = {
    title: 'Red Light',
    subtitle: '6 pages, partial color',
    bodyText: 'Illustrated by <a href="https://www.bicycleboy.net/">Jackarais</a><br/><br/>Sam wakes up from a head wound on a dirt road, staring down a pair of headlights.',
    links: externalDownloadLinks.redLight,
    coverImage: RedLightCover,
    coverAltText: 'Red Light cover',
}

export const desertBirdsHeader: TDescriptionBlock = {
    title: 'Desert Birds',
    subtitle: '26 pages, partial color',
    bodyText: `Illustrated by <a href="https://www.bicycleboy.net/">Jackarais</a><br/><br/>Two people try to kill each other while a talking vulture heckles them.`,
    links: externalDownloadLinks.desertBirds,
    coverImage: DesertBirdsCover,
    coverAltText: 'Desert Birds cover',
}

export const elixersHeader: TDescriptionBlock = {
    title: "Madame Bassitor's Catalogue of Curious\xa0Elixers",
    subtitle: 'tabletop RPG supplement pamphlet',
    bodyText: 'Illustrations by <a href="https://www.instagram.com/yangzhenlee">Yang Zhen Lee</a>. A tri-fold pamphlet detailing twelve, horror-themed potions. Intended as a system-agnostic supplement for tabletop RPGs.',
    links: externalDownloadLinks.elixers,
    coverImage: ElixersCover,
    coverAltText: 'Elixer Catalogue cover image',
}

export const furnitureHeader: TDescriptionBlock = {
    title: "Your Living Room Is Full of\xa0Furniture",
    subtitle: 'sound and text based horror game',
    bodyText: 'Made with musician and sound designer <a href="https://trashmaker.bandcamp.com/">Echo&nbsp;Reece</a>. This is a short game about finding a new piece of a furniture in your living room. It is also about our relationship with discomfort.',
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