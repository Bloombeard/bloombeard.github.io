import React from 'react'

const DevHeader = () => {
    return (
        <div className="dev-header">
            <div className="dev-header__title">Forrest Storrs</div>
            <div className="dev-header__subtitle">Software Engineer</div>
            <div className="dev-header__buttons">
                <button className="dev-header__button">about</button>
                <button className="dev-header__button">skills</button>
                <button className="dev-header__button">experience</button>
                <button className="dev-header__button">contact</button>
            </div>
        </div>
    )
}

export default DevHeader