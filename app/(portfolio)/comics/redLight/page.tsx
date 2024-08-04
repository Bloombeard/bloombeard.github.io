'use client'

import React, { useState } from 'react'

import ComicReader from '@/common/components/ComicReader/ComicReaderComponent'
import ContentHeader from '@/common/components/ContentHeader'
import { redLightHeader } from '@/common/constants/headerBlocks'
import { comicPDFs } from '@/common/constants/comicPages'

const RedLight = () => {
    const [isReaderLoaded, setIsReaderLoaded] = useState<boolean>(false)

    return (
        <main>
            <ContentHeader block={redLightHeader} isReaderLoaded={isReaderLoaded} openReaderCallback={setIsReaderLoaded} />
            {isReaderLoaded &&
                <ComicReader
                    closeReaderCallback={setIsReaderLoaded}
                    pages={comicPDFs.redLight}
                    title={redLightHeader.title ? redLightHeader.title : ''}
                />
            }
        </main>
    )
}

export default RedLight
