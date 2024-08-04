'use client'

import React, { useState } from 'react'
import ContentHeader from '@/common/components/ContentHeader'
import ComicReader from '@/common/components/ComicReader/ComicReaderComponent'

import { desertBirdsHeader } from '@/common/constants/headerBlocks'
import { comicPDFs } from '@/common/constants/comicPages'

const DesertBirds = () => {
    const [isReaderLoaded, setIsReaderLoaded] = useState<boolean>(false)

    return (
        <main>
            <ContentHeader block={desertBirdsHeader} isReaderLoaded={isReaderLoaded} openReaderCallback={setIsReaderLoaded} />
            {isReaderLoaded &&
                <ComicReader
                    closeReaderCallback={setIsReaderLoaded}
                    pages={comicPDFs.desertBirds}
                    title={desertBirdsHeader.title ? desertBirdsHeader.title : ''}
                />
            }
        </main>
    )
}

export default DesertBirds
