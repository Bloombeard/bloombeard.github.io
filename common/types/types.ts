import { StaticImageData } from "next/image"

export type TNavLink = {
    label: string
    target: string
    expansion?: TNavLinks
    previewImage?: any
    previewAltText?: string
    isExternal?: boolean
}

export type TNavLinks = TNavLink[]

export type TExternalLinks = {
    nerveGardens: TNavLinks,
    mallKing: TNavLinks,
    achingHeights: TNavLinks,
    devyn: TNavLinks,
    glittergym: TNavLinks,
    desertBirds: TNavLinks,
    redLight: TNavLinks,
    elixers: TNavLinks,
    audit: TNavLinks,
    furniture: TNavLinks,
    camp: TNavLinks,
}

export type TDescriptionBlock = {
    title?: string
    subtitle?: string
    bodyText?: string
    links?: TNavLinks
    coverImage: any
    coverAltText: string
}

export type TPublicationBlock = {
    title: string
    repubDetails?: string
    pubDetails?: string
    awards?: string
    storyType: string
    target?: string
    availability?: string
}

export type TStoryTypes = {
    flashFiction: string
    shortStory: string
    novella: string
    comic: string
}

export type TCoverImage = {
    altText: string
    image: StaticImageData
}

export type TComicPDFs = {
    achingHeights: string
    desertBirds: string
    devyn: string
    mallKing: string
    redLight: string
}

export type TCardSuits = {
    clubs: string
    diamonds: string
    hearts: string
    spades: string
}

export type TCardRanks = {
    ace: string
    two: string
    three: string
    four: string
    five: string
    six: string
    seven: string
    eight: string
    nine: string
    ten: string
    jack: string
    queen: string
    king: string
    joker: string
}

export type TDevInfoBlockKeys = 'about' | 'skills' | 'experience' | 'contact' | 'none'

export type TDevInfoBlock = {
    [key in TDevInfoBlockKeys]: TDevInfoBlockContent
}

export type TDevInfoBlockContent = {
    header?: string
    sections?: TDevInfoBlockContentSection[]
}

export type TDevInfoBlockContentSection = {
    preHeader?: string
    subHeader?: string
    sectionHeader?: string
    bodyText?: string
    bullets?: string[]
}

export type TAslSign = {
    label: string
    link: string
}
export type TAslSigns = TAslSign[]