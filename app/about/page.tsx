import React from 'react'

import ContentHeader from '@/common/components/ContentHeader'
import { aboutBlock } from '@/common/constants/descriptionBlocks'

const About = () => {
    return (
        <main>
            <ContentHeader block={aboutBlock} />
        </main>
    )
}

export default About
