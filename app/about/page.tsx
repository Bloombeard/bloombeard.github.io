import React from 'react'

import ContentHeader from '@/common/components/ContentHeader'
import ContentHeaderV2 from '@/common/components/ContentHeaderV2'
import { aboutHeader } from '@/common/constants/headerBlocks'

const About = () => {
    return (
        <main>
            {/* <ContentHeader block={aboutHeader} /> */}
            <ContentHeaderV2 block={aboutHeader} />
        </main>
    )
}

export default About
