'use client'

import React, { useEffect, useState } from 'react'

import { aslSigns } from '@/common/constants/aslSigns'
import { TAslSign } from '@/common/types/types'

const Asl = () => {
    const [currentSign, setCurrentSign] = useState<TAslSign | null>(null)

    const getRandomSign = () => {
        const randomIndex = Math.floor(Math.random() * aslSigns.length)
        setCurrentSign(aslSigns[randomIndex])
    }

    return (
        <main>
            {currentSign &&
                <div className="asl-sign--wrapper">
                    <div className="asl-sign--label">
                        {currentSign.label}
                    </div>
                </div>
            }
            <div className="asl-sign-buttons-wrapper">
            {currentSign &&
                <a className="asl-sign--link" href={currentSign.link} target="_blank">
                    See answer
                </a>
            }
            <button className="asl-sign--randomize-button" onClick={getRandomSign}>{currentSign ? "Next" : "Begin"}</button>
            </div>
        </main>
    )
}

export default Asl