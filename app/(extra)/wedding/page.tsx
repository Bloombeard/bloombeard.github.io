'use client'

import React, { useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Tangerine } from 'next/font/google'
import { setItem, getItem } from '@/common/utils/localStorage'

import weddingRingTop from '@/public/assets/wedding/weddingRingTop.png'
import weddingRingBottom from '@/public/assets/wedding/weddingRingBottom.png'
import weddingStars from '@/public/assets/wedding/weddingStars.png'

const tangerine = Tangerine({
    adjustFontFallback: false,
    display: 'swap',
    subsets: ['latin'],
    weight: '400',
})

const Wedding = () => {
    const defaultFontSize = '22px';
    const largerFontSize = '32px';
    const largestFontSize = '60px';

    const password = 'Zhen&Forrest2026'
    const outOfTownPassword = 'Zhen&ForrestInnerCircle'
    const rsvpUrl = 'https://docs.google.com/forms/d/e/1FAIpQLSeLeU9Y38zl_NHUGQIyl-_4Vkw0axqahIwra1Fu-jmkG6tSaA/viewform'
    const rsvpUrlInnerCircle = 'https://docs.google.com/forms/d/e/1FAIpQLSf4ASXlGqEI8PMTqtlrHLfFA-6ISL6erG_S0zXEE7VpO8koZw/viewform'

    const [hasAccess, setHasAccess] = useState<boolean>(() => {
        return getItem('hasAccess') || false
    })
    const [passwordMissed, setPasswordMissed] = useState<boolean>(false)
    const [passwordInput, setPasswordInput] = useState<string>('')
    const [isInnerCircle, setIsInnerCircle] = useState<boolean>(() => {
        return getItem('isInnerCircle') || false
    })
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
        setItem('isInnerCircle', isInnerCircle)
    }, [hasAccess, isInnerCircle])

    const onLoginClick = () => {
        if (passwordInput === password) {
            setHasAccess(true)

        } else if (passwordInput === outOfTownPassword) {
            setHasAccess(true)
            setIsInnerCircle(true)

        } else {
            setPasswordMissed(true)
        }
    }

    const getMainClassNames = () => {
        if (isInnerCircle) {
            return 'is-inner-circle'
        }

        return ''
    }

    return (
        <main className={getMainClassNames()}>
            { hasAccess ? (
                <>
                    <div className="center-column">
                        <div className="info-1">
                            <div className={tangerine.className} style={{ fontSize: '64px' }}>You are invited</div>
                            <div style={{ fontSize: `${defaultFontSize}`}}>to</div>
                        {/* </div>
                        <div className="info-1"> */}
                            <div style={{ fontSize: `${largestFontSize}`, fontWeight: 'bold', gap: '0' }}>Zhen & Forrest&apos;s</div>
                            <div style={{ fontSize: `${largestFontSize}`, fontWeight: 'bold' }}>Wedding Rumpus</div>
                        </div>
                        <div className="info-2">
                            <div style={{ fontSize: `${defaultFontSize}`}}>on October the 17th, after nightfall</div>
                            <div style={{ fontSize: `${defaultFontSize}`}}>with a reception to follow on the 18th.</div>
                        </div>
                        {isInnerCircle && (
                            <div className="info-2">
                                <div style={{ fontSize: `${defaultFontSize}`}}>YOU, specifically, are also invited</div>
                                <div style={{ fontSize: `${defaultFontSize}`}}>to a secret gathering of close friends,</div>
                                <div style={{ fontSize: `${defaultFontSize}`}}>on the preceding evening, the 16th.</div>
                            </div>
                        )}
                        <div style={{ fontSize: `${defaultFontSize}`}}>More details to follow.</div>
                        <Link className="rsvp-link" style={{ fontSize: `${largerFontSize}` }} href={isInnerCircle ? rsvpUrlInnerCircle : rsvpUrl}>RSVP</Link>
                    </div>
                        <Image objectFit="cover" className="wedding-stars" src={weddingStars} alt="field of cartoon stars" />
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