'use client'

import React, { useState } from 'react'

import ContentHeader from '@/common/components/ContentHeader'
import ComicReader from '@/common/components/ComicReader/ComicReaderComponent'

import { devynHeader } from '@/common/constants/headerBlocks'
import { comicPDFs } from '@/common/constants/comicPages'

const Devyn = () => {
    const [isReaderLoaded, setIsReaderLoaded] = useState<boolean>(false)

    return (
        <main>
            <ContentHeader block={devynHeader} isReaderLoaded={isReaderLoaded} openReaderCallback={setIsReaderLoaded} />
            <ComicReader
                closeReaderCallback={setIsReaderLoaded}
                isLoaded={isReaderLoaded}d
                pages={comicPDFs.devyn}
                title={devynHeader.title ? devynHeader.title : ''}
            />
        </main>
    )
}

export default Devyn
