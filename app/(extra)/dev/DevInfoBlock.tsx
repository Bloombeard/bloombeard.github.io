import React from 'react'

import { TDevInfoBlockContent } from '@/common/types/types'

export interface TProps {
    block: TDevInfoBlockContent
}

const DevInfoBlock = (props: TProps) => {
    const { block } = props

    return (
        <div className="dev-info-block">
            {block.header && <div className="dev-info-block__header">{block.header}</div>}
            {block.sections && block.sections.map(section => (
                <div className="dev-block-section">
                    {section.preHeader && <div className="dev-block-section__pre-header">{section.preHeader}</div>}
                    {section.sectionHeader && <div className="dev-block-section__header">{section.sectionHeader}</div>}
                    {section.subHeader && <div className="dev-block-section__sub-header">{section.subHeader}</div>}
                    {section.bodyText && <div className="dev-block-section__body-text">{section.bodyText}</div>}
                    {section.bullets &&
                        <ul className="dev-block-section__bullet-list">
                            {section.bullets.map(bullet => (
                                <li className="dev-block-section__bullet">{bullet}</li>
                            ))}
                        </ul>
                    }
                </div>
            ))}
        </div>
    )
}

export default DevInfoBlock