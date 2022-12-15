import React from 'react'

import type { IWork } from '../../../models/IWork'

interface WorkItemProps {
    work: IWork
}

const MyWorkItem: React.FC<WorkItemProps> = (props) => {

    const { work } = props || {}

    return (
        <div className={'myWorks__content-area-block-item'}>
            <p className={'myWorks__content-area-block-item-head'}>{work.heading}</p>

            <div className={'myWorks__content-area-block-item-tag'}>
                {work.tag.map((tag) =>
                    <p key={tag} className={'myWorks__content-area-block-item-tag-text'}>{tag}</p>
                )}
            </div>
            <p className={'myWorks__content-area-block-item-text'}>
                {work.text}
            </p>
            <div className={'myWorks__content-area-block-item-link'}>
                {work.code &&
                    <a className={'myWorks__content-area-block-item-link-code'} href={work.code} target={'_blank'} rel={'noreferrer'}>
                        код
                    </a>
                }
                {work.site &&
                    <a className={'myWorks__content-area-block-item-link-site'} href={work.site} target={'_blank'} rel={'noreferrer'}>
                        сайт
                    </a>
                }
            </div>
        </div>
    )
}

export default MyWorkItem
