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
    const forrestPartyPassword = 'Pilgrim'
    const zhenPartyPassword = 'Potato'
    const rsvpUrl = 'https://forms.gle/yZedzKbNhN3FS2nn6'
    const rspvUrlForrestParty = 'https://forms.gle/43VjZfEJV2rHXaj58'
    const rspvUrlZhenParty = 'https://forms.gle/Sv94T2tpjn9CYags8'

    const [hasAccess, setHasAccess] = useState<boolean>(() => {
        return getItem('hasAccess') || false
    })
    const [passwordMissed, setPasswordMissed] = useState<boolean>(false)
    const [passwordInput, setPasswordInput] = useState<string>('')
    const [isForrestParty, setIsForrestParty] = useState<boolean>(() => {
        return getItem('isForrestParty') || false
    })
    const [isZhenParty, setIsZhenParty] = useState<boolean>(() => {
        return getItem('isZhenParty') || false
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
        setItem('isForrestParty', isForrestParty)
        setItem('isZhenParty', isZhenParty)
    }, [hasAccess, isForrestParty, isZhenParty])

    const onLoginClick = () => {
        if (passwordInput === password) {
            setHasAccess(true)

        } else if (passwordInput === forrestPartyPassword) {
            setHasAccess(true)
            setIsForrestParty(true)
        } else if (passwordInput === zhenPartyPassword) {
            setHasAccess(true)
            setIsZhenParty(true)
        } else {
            setPasswordMissed(true)
        }
    }

    const getMainClassNames = () => {
        if (isForrestParty || isZhenParty) {
            return 'is-inner-circle'
        }

        return ''
    }

    const getRsvpUrl = () => {
        if (isForrestParty) {
            return rspvUrlForrestParty
        }
        
        if (isZhenParty) {
            return rspvUrlZhenParty
        }

        return rsvpUrl
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
                        {isForrestParty && (
                            <div className="info-2">
                                <div style={{ fontSize: `${defaultFontSize}`}}>YOU, specifically, are also invited to a</div>
                                <div style={{ fontSize: `${defaultFontSize}`}}>secret gathering of Forrest&apos;s out-of-town friends,</div>
                                <div style={{ fontSize: `${defaultFontSize}`}}>on the preceding evening, the 16th.</div>
                            </div>
                        )}
                        {isZhenParty && (
                            <div className="info-2">
                                <div style={{ fontSize: `${defaultFontSize}`}}>YOU, specifically, are also invited to</div>
                                <div style={{ fontSize: `${defaultFontSize}`}}>Zhen&apos;s pre-wedding party,</div>
                                <div style={{ fontSize: `${defaultFontSize}`}}>on the preceding evening, the 16th.</div>
                            </div>
                        )}
                        <div style={{ fontSize: `${defaultFontSize}`}}>More details to follow.</div>
                        <Link className="rsvp-link" style={{ fontSize: `${largerFontSize}` }} href={getRsvpUrl()}>RSVP</Link>
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