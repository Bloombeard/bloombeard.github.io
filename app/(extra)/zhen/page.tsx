'use client'

import React, { useEffect, useState } from 'react'

const Zhen = () => {

    const [visibleLines, setVisibleLines] = useState(0)

    const onClick = () => {
        if (visibleLines < 16){
            setVisibleLines(visibleLines + 1)
        }
    }

    useEffect(() => {
        document.addEventListener('click', onClick)

        return () => document.removeEventListener('click', onClick)
    })

    const getLineClassName = (lineNumber: number) => {
        let classNames = "poem-line"

        if (lineNumber <= visibleLines) {
            classNames += " poem-line__visible"
        }
        
        return classNames
    }

    const getPromptClassNames = () => {
        let classNames = "poem-click-prompt"

        if (visibleLines === 16) {
            classNames += " poem-click-prompt__hidden"
        }

        return classNames
    }

    return (
        <main>
            <div className="poem-wrapper">
                <h1 className="poem-title">
                    Shall I Compare&nbsp;Thee to&nbsp;a&nbsp;Stinker?
                </h1>
                <div className="poem-stanza">
                    <div className={getLineClassName(1)}>
                        I once compared you to a cat
                    </div>
                    <div className={getLineClassName(2)}>
                        pawing into random rooms
                    </div>
                    <div className={getLineClassName(3)}>
                        investigating this and that.
                    </div>
                    <div className={getLineClassName(4)}>
                        You chose the softest place to be
                    </div>
                    <div className={getLineClassName(5)}>
                        on the furniture sometimes
                    </div>
                    <div className={getLineClassName(6)}>
                        or sprawled across the ground
                    </div>
                    <div className={getLineClassName(7)}>
                        but never hesitant to rouse
                    </div>
                    <div className={getLineClassName(8)}>
                        following your fancy.
                    </div>
                </div>
                <div className="poem-stanza">
                    <div className={getLineClassName(9)}>
                        Together we adopted cats
                    </div>
                    <div className={getLineClassName(10)}>
                        and watch them paw from room to room
                    </div>
                    <div className={getLineClassName(11)}>
                        investigating this an that
                    </div>
                    <div className={getLineClassName(12)}>
                        soft places, reminding me
                    </div>
                    <div className={getLineClassName(13)}>
                        you don&apos;t just paw to random rooms
                    </div>
                    <div className={getLineClassName(14)}>
                        or rouse for random fancy
                    </div>
                    <div className={getLineClassName(15)}>
                        like our cats, and like your moose
                    </div>
                    <div className={getLineClassName(16)}>
                        you just want to be next to your family
                    </div>
                </div>
                <div className={getPromptClassNames()}> click</div>
            </div>
        </main>
    )
}

export default Zhen
