'use client'

import React, { useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import { Tangerine } from 'next/font/google'
import { setItem, getItem } from '@/common/utils/localStorage'

import weddingRingTop from '@/public/assets/wedding/weddingRingTop.png'
import weddingRingBottom from '@/public/assets/wedding/weddingRingBottom.png'

const tangerine = Tangerine({
    adjustFontFallback: false,
    display: 'swap',
    subsets: ['latin'],
    weight: '400',
})

const Wedding = () => {
    const defaultFontSize = '22px';
    const largerFontSize = '32px';
    const largestFontSize = '46px';

    const password = 'Zhen&Forrest2026'
    const [hasAccess, setHasAccess] = useState<boolean>(() => {
        return getItem('hasAccess') || false
    })
    const [passwordMissed, setPasswordMissed] = useState<boolean>(false)
    const [passwordInput, setPasswordInput] = useState<string>('')
    const inputRef = useRef<HTMLInputElement>(null)

    const onEnterKeyPressed = (e: any) => {
        if (e.key === 'Enter') {
            onLoginClick()
        }
    }

    useEffect(() => {
        document.addEventListener('keypress', (e) => onEnterKeyPressed(e))

        return () => document.removeEventListener('keypress', (e) => onEnterKeyPressed(e))
    })

    useEffect(() => {
        setItem('hasAccess', hasAccess)
    }, [hasAccess])

    const onLoginClick = () => {
        if (passwordInput === password) {
            setHasAccess(true)

        } else {
            setPasswordMissed(true)
        }
    }

    return (
        <main>
            { hasAccess ? (
                <>
                    <div className="center-column">
                        <div className="info-1">
                            <div className={tangerine.className} style={{ fontSize: '64px' }}>You are invited</div>
                            <div style={{ fontSize: `${defaultFontSize}`}}>to a much belated wedding between</div>
                        </div>
                        <div style={{ fontSize: `${largestFontSize}`, fontWeight: 'bold' }}>Zhen & Forrest</div>
                        <div className="info-2">
                            <div style={{ fontSize: `${defaultFontSize}`}}>on October the 17th, after nightfall</div>
                            <div style={{ fontSize: `${defaultFontSize}`}}>with a reception to follow on the 18th.</div>
                        </div>
                        <div style={{ fontSize: `${defaultFontSize}`}}>More details to follow.</div>
                        <div style={{ fontSize: `${largerFontSize}` }}>Save the date!</div>
                    </div>
                        <Image objectFit="cover" className="ring ring-top" src={weddingRingTop} alt="ring of animals, top" />
                        <Image objectFit="cover" className="ring ring-bottom" src={weddingRingBottom} alt="ring of animals, bottom" />
                </>
            ) : (
                <div className="login-wrapper">
                    <div>please enter password</div>
                    <input onChange={ (e) => setPasswordInput(e.target.value)} ref={inputRef} value={passwordInput} />
                    <button onClick={onLoginClick}>enter</button>
                    { passwordMissed && (<div style={{ color: 'red' }}>password incorrect</div>)}
                </div>
            )}
        </main>
    )
}

export default Wedding