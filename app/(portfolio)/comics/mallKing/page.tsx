'use client'

import React, { useState } from 'react'

import ContentHeader from '@/common/components/ContentHeader'
import { mallKingHeader } from '@/common/constants/headerBlocks'
import { comicPDFs } from '@/common/constants/comicPages'
import ComicReader from '@/common/components/ComicReader/ComicReaderComponent'

const MallKing = () => {
    const [isReaderLoaded, setIsReaderLoaded] = useState<boolean>(false)

    return (
        <main>
            <ContentHeader block={mallKingHeader} isReaderLoaded={isReaderLoaded} openReaderCallback={setIsReaderLoaded} />
            {isReaderLoaded &&
                <ComicReader
                    closeReaderCallback={setIsReaderLoaded}
                    pages={comicPDFs.mallKing}
                    title={mallKingHeader.title ? mallKingHeader.title : ''}
                />
            }
        </main>
    )
}

export default MallKing
