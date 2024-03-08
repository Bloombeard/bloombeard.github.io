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
            {isReaderLoaded &&
                <ComicReader
                    closeReaderCallback={setIsReaderLoaded}
                    pages={comicPDFs.devyn}
                    title={devynHeader.title ? devynHeader.title : ''}
                />
            }
        </main>
    )
}

export default Devyn
