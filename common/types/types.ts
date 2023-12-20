export type TNavLink = {
    label: string
    target: string
    expansion?: TNavLinks
    previewImage?: any
    previewAltText?: string
}

export type TNavLinks = TNavLink[]

export type TDescriptionBlock = {
    title?: string
    subtitle?: string
    bodyText?: string
    links?: TNavLinks
    coverImage: any
    coverAltText: string
}