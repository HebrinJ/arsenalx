import { BtnTypes } from '../../utils/btnTypes'
import NavButton from '../buttons/navButton'
import style from './navPanel.module.css'

export function NavPanel() {
    return (
        <nav className={style.navigationBox}>
            <ul>
                <li>
                    <NavButton text={'Первая'} target={'someRoute'} type={BtnTypes.MAIN_NAV} />
                </li>
                <li>
                    <NavButton text={'Вторая'} target={'someRoute'} type={BtnTypes.SEC_NAV} />
                </li>
            </ul>
        </nav>
    )
}