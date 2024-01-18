'use client'

import React, { useState } from 'react'
import Image from 'next/image'
import { pdfjs } from 'react-pdf'

import ContentHeader from '@/common/components/ContentHeader'
import { mallKingHeader } from '@/common/constants/headerBlocks'
import { mallKingPages } from '@/common/constants/comicPages'
// import mallKingPDF from "@/public/assets/mallKingPages/mallKingPDF.pdf"
import { comicPDFs } from '@/common/constants/comicPages'
import ComicReader from '@/common/components/ComicReader/ComicReaderComponent'

const MallKing = () => {
    const [isReaderLoaded, setIsReaderLoaded] = useState<boolean>(false)
    const [isHeaderCollapsed, setIsHeaderCollapsed] = useState<boolean>(false)

    const getMainClassNames = (): string => {
        if (isHeaderCollapsed) {
            return 'hidden-content-header'
        }

        return ''
    }

    return (
        <main className={getMainClassNames()}>
            <ContentHeader block={mallKingHeader} openReaderCallback={setIsReaderLoaded} />
            <ComicReader
                collapseHeaderCallback={setIsHeaderCollapsed}
                isLoaded={isReaderLoaded}
                pages={comicPDFs.mallKingHiRes}
                shouldLoop
                title={mallKingHeader.title ? mallKingHeader.title : ''}
            />
        </main>
    )
}

export default MallKing
