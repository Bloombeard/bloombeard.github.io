'use client'

import React from 'react'
import Image from 'next/image'

import tidyTextImage from '@/public/assets/TidyTextLogo.png'
import { TTidyTextBodyBlocks } from '@/common/types/types'

interface TProps {
    activeBodyBlock: TTidyTextBodyBlocks
    onSidebarButtonClickCallback: React.Dispatch<React.SetStateAction<TTidyTextBodyBlocks>>
}

const TidyTextSidebar = (props: TProps) => {
    const { activeBodyBlock, onSidebarButtonClickCallback } = props

    const getButtonClassNames = (block: TTidyTextBodyBlocks) => {
        let classNames = "tidy-text-sidebar--button"
    
        if (block === activeBodyBlock) {
            classNames += " tidy-text-sidebar--button__active"
        }

        return classNames
    }

    return (
        <div className="tidy-text-sidebar--wrapper">
            <Image className="tidy-text-sidebar--logo" src={tidyTextImage} alt="tidy text logo" />
            Forrest Storrs
            <button className={getButtonClassNames("about")} onClick={() => onSidebarButtonClickCallback("about")}>about</button>
            <button className={getButtonClassNames("experience")} onClick={() => onSidebarButtonClickCallback("experience")}>experience</button>
            <button className={getButtonClassNames("contact")} onClick={() => onSidebarButtonClickCallback("contact")}>contact</button>
        </div>
    )
}

export default TidyTextSidebar