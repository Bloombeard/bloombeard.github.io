'use client'

import React, { useState } from 'react'
import DevHeader from './DevHeader'
import DevInfoBlock from './DevInfoBlock'
import DevButtons from './DevButtons'
import { devInfoBlocks } from '@/common/constants/devInfoBlocks'
import { TDevInfoBlockKeys } from '@/common/types/types'

const Dev = () => {
    const [activeBlock, setActiveBlock] = useState<TDevInfoBlockKeys>('none')

    const setActiveBlockCallback = (nextBlock: TDevInfoBlockKeys) => {
        if (nextBlock !== activeBlock) {
            return setActiveBlock(nextBlock)
        }

        return setActiveBlock('none')
    }

    return (
        <main>
            <div className="dev-header-and-buttons-wrapper">
                <div className="dev-header">
                    <div className="dev-header__title">Forrest Storrs</div>
                    <div className="dev-header__subtitle">Software Engineer</div>
                </div>
                <DevButtons setActiveBlockCallback={setActiveBlockCallback} />
            </div>
            {activeBlock !== 'none' && (
                <DevInfoBlock block={devInfoBlocks[activeBlock]} />
            )}
        </main>
    )
}

export default Dev
