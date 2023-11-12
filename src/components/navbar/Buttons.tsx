import { navigationLinksStyle } from '../../interfaces'
import { FC } from 'react'

const Buttons: FC<navigationLinksStyle> = ({ linkType , style  }): JSX.Element => {
    return (
        <>
            <ul className="flex gap-5 ml-10 lg:flex-row sm: flex-col">
                <li><a className={`${linkType} ${style}`} href="#">hero</a></li>
                <li><a className={`${linkType} ${style}`} href="#">cards</a></li>
                <li><a className={`${linkType} ${style}`} href="#">testimonials</a></li>
                <li><a className={`${linkType} ${style}`} href="#">contact</a></li>
            </ul>
        </>
    )
}

export default Buttons
