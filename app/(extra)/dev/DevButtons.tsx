import React from 'react'

export interface TProps {
    setActiveBlockCallback: Function
}

const DevButtons = (props: TProps) => {
    const { setActiveBlockCallback } = props

    return (
        <div className="dev-header__buttons">
            <button className="dev-header__button" onClick={() => setActiveBlockCallback('about')}>about</button>
            <button className="dev-header__button" onClick={() => setActiveBlockCallback('skills')}>skills</button>
            <button className="dev-header__button" onClick={() => setActiveBlockCallback('experience')}>experience</button>
            <button className="dev-header__button" onClick={() => setActiveBlockCallback('contact')}>contact</button>
        </div>
    )
}

export default DevButtons