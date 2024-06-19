import { BtnTypes } from '../../utils/btnTypes';
import style from './navButton.module.css'
import { NavLink } from 'react-router-dom';

type TBtnProps = {
    text: string,
    target: string,
    type: BtnTypes,
}

export default function NavButton({ text, target, type }: TBtnProps): JSX.Element {

    function setStyle(type: BtnTypes): string {
        switch (type) {
            case BtnTypes.MAIN_NAV:
                return 'mainNavBtn';
            case BtnTypes.SEC_NAV:
                return 'secNavBtn';   
            default:
                return '';
        }
    }

    return (
        <NavLink to={target} className={style[setStyle(type)]}>{text}</NavLink>
    )
}