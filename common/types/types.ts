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