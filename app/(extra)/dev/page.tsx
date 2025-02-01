'use client'

import React, { useState } from 'react'
import DevHeader from './DevHeader'
import DevInfoBlock from './DevInfoBlock'
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
                <DevHeader setActiveBlockCallback={setActiveBlockCallback} />
                {activeBlock !== 'none' && (
                    <DevInfoBlock block={devInfoBlocks[activeBlock]} />
                )}
        </main>
    )
}

export default Dev
