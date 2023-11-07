import { TDescriptionBlock } from '../types/types'
import { aboutPageLinks } from './navLinks'

import Headshot from '@/common/assets/Headshot.png'

export const aboutHeader: TDescriptionBlock = {
    title: 'Forrest Storrs',
    subtitle: 'he / she / they',
    bodyText: 'Forrest Storrs is a queer, agendered writer living in Pittsburgh. He mostly writes comics and short stories, and his work has appeared in a handful of magazines and literary journals under his legal name, Joshua Storrs. He is a pushcart nominee and a finalist for the Barry Hannah Prize. When he’s not writing stories or making comics with his friends, he’s probably playing tabletop RPGs or saying hello to other people’s dogs.',
    links: aboutPageLinks,
    coverImage: Headshot,
    coverAltText: 'Guggenheim Grin',
}