'use client'

import React, { useState } from 'react'

import TidyTextSidebar from './TidyTextSidebar'
import TidyTextBody from './TidyTextBody'
import { TTidyTextBodyBlocks } from '@/common/types/types'

const Dev = () => {

    const [activeBodyBlock, setActiveBodyBlock] = useState<TTidyTextBodyBlocks>("about")

    return (
        <main>
            <TidyTextSidebar activeBodyBlock={activeBodyBlock} onSidebarButtonClickCallback={setActiveBodyBlock}/>
            <div className="tidy-text-header-and-body--wrapper">
                <div className="tidy-text-header">Editing<br />Proofreading<br />Audio Proofing</div>
                <TidyTextBody activeBodyBlock={activeBodyBlock} />
            </div>
        </main>
    )
}

export default Dev
