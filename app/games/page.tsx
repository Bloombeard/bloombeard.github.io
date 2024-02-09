import React from 'react'

import { gameLinks } from '@/common/constants/navLinks'
import Links from '@/common/components/Links'

const Games = () => {
    return (
        <Links wrapperClass='hub-page--links-wrapper' linkClass='hub-page--link' links={gameLinks} isHubPage />
    )
}

export default Games
