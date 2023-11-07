export type TNavLink = {
    label: string
    target: string
}

export type TNavLinks = TNavLink[]

export type TDescriptionBlock = {
    title?: string
    subtitle?: string
    bodyText?: string
    links?: TNavLinks
}