'use client'

import React, { useEffect, useState } from 'react'
import { TTidyTextBodyBlocks } from '@/common/types/types'

interface TProps {
    activeBodyBlock: TTidyTextBodyBlocks
}

const TidyTextBody = (props: TProps) => {
    const { activeBodyBlock } = props

    const [activeAboutCopy, setActiveAboutCopy] = useState<number>(0)

    const aboutBlockCopyArray: string[] = [
    "Tidy Text provides editing, proofreading, and audio proofing services to make sure your readers can fully immerse themselves in your work without distraction.",
    "Whether it's a novel, non-fiction, business materials, or technical writing, Tidy Text will help you catch inconsistencies, grammar and spelling mistakes, mispronunciations, and anything extra you need to help bring clarity to your material.",
    "Receive feedback that's clear, thoughtful, and concise.",
    "Tidy Text is comfortable working with major as well as in-house style guides, and will work with your team's suite of productivity tools where necessary to ensure a smooth workflow.",
    "If accuracy and professional quality are your goals, then you need a real, thinking human being to give your book the full attention it deserves. Tidy Text will never rely on AI tools to check your work. Rest easy knowing the quality of your work is not a hallucination.",
    "From finishing touches to substantive editing, Tidy Text is here to help!",
    ]

    useEffect(() => {
        if (activeBodyBlock == "about") {
            setActiveAboutCopy(0)
        }

    }, [activeBodyBlock])

    const getBody = () => {
        switch (activeBodyBlock) {
            case "about":         
                return (
                    <div className="tidy-text-body--body">
                        {aboutBlockCopyArray[activeAboutCopy]}
                    </div>
                )
            case "experience":
                return (
                    <div className="tidy-text-body--body">
                        Proofreader
                        <br />
                        <i>Rise of the Lowborn, Vol. 2</i>
                        <br />
                        <b>Yen Press</b>
                        <br />
                        <br />
                        Proofreader
                        <br />
                        <i>Date A Live, Vol. 17</i>
                        <br />
                        <b>Yen Press</b>
                        <br />
                        <br />
                        Editor
                        <br />
                        <i>Children with Wands</i>
                        <br />
                        <b>Joe Kiewra</b>
                    </div>
                )
            case "contact":
                return (
                    <div className="tidy-text-body--body">
                        F.Storrs19@gmail.com
                    </div>
                )
        }
    }

    const onNextButtonClick = () => {
        if (activeAboutCopy >= aboutBlockCopyArray.length - 1) {
            setActiveAboutCopy(0)
        } else {
            setActiveAboutCopy(activeAboutCopy + 1)
        }
    }

    return (
        <div className="tidy-text-body--wrapper">
            {getBody()}
            {activeBodyBlock == "about" &&
            <div className="tidy-text-body--next-button-container">
                <button className="tidy-text-body--next-button" onClick={() => onNextButtonClick()}>→</button>
            </div>
            }
        </div>
    )
}

export default TidyTextBody