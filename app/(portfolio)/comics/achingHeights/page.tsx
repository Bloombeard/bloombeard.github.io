'use client'

import React, { useState } from 'react'

import ContentHeader from '@/common/components/ContentHeader'
import ComicReader from '@/common/components/ComicReader/ComicReaderComponent'

import { achingHeightsHeader } from '@/common/constants/headerBlocks'
import { comicPDFs } from '@/common/constants/comicPages'

const AchingHeights = () => {
    const [isReaderLoaded, setIsReaderLoaded] = useState<boolean>(false)

    return (
        <main>
            <ContentHeader block={achingHeightsHeader} isReaderLoaded={isReaderLoaded} openReaderCallback={setIsReaderLoaded} />
            {isReaderLoaded &&
                <ComicReader
                    closeReaderCallback={setIsReaderLoaded}
                    pages={comicPDFs.achingHeights}
                    title={achingHeightsHeader.title ? achingHeightsHeader.title : ''}
                />
            }
        </main>
    )
}

export default AchingHeights
