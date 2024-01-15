import { StaticImageData } from "next/image"

export type TNavLink = {
    label: string
    target: string
    expansion?: TNavLinks
    previewImage?: any
    previewAltText?: string
}

export type TNavLinks = TNavLink[]

export type TExternalLinks = {
    mallKing: TNavLinks,
    achingHeights: TNavLinks,
    devyn: TNavLinks,
    glittergym: TNavLinks,
    desertBirds: TNavLinks,
    redLight: TNavLinks,
    wishFactory: TNavLinks,
    elixers: TNavLinks,
    audit: TNavLinks,
    furniture: TNavLinks,
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

export type TComicPage = {
    altText: string
    image: StaticImageData
}

export type TComicPages = TComicPage[]
export type TComicPDFs = {
    mallKing: string
    mallKingHiRes: string
}