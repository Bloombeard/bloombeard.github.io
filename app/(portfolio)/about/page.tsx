import React from 'react'

import ContentHeader from '@/common/components/ContentHeader'
import { aboutHeader } from '@/common/constants/headerBlocks'

const About = () => {
    return (
        <main>
            <ContentHeader block={aboutHeader} />
        </main>
    )
}

export default About
