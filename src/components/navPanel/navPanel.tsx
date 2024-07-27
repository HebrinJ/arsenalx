import { BtnTypes } from '../../utils/btnTypes'
import DropDownBtn from '../buttons/dropDownBtn'
import NavButton from '../buttons/navButton'
import style from './navPanel.module.css'
import { TBtnProps } from '../buttons/types'

export function NavPanel() {

    const armorVehicles: Array<TBtnProps> = [
        { text: 'Танки', target: 'tanks', type: BtnTypes.SEC_NAV },
        { text: 'ББМ', target: 'bbm', type: BtnTypes.SEC_NAV },
        { text: 'САУ', target: 'sau', type: BtnTypes.SEC_NAV },
    ]

    const aircraft: Array<TBtnProps> = [
        { text: 'Истребители', target: 'fighters', type: BtnTypes.SEC_NAV },
        { text: 'Штурмовики', target: 'attack', type: BtnTypes.SEC_NAV },
        { text: 'Бомбардировщики', target: 'bombers', type: BtnTypes.SEC_NAV },
    ]

    const fleet: Array<TBtnProps> = [
        { text: 'Линкоры', target: 'lines', type: BtnTypes.SEC_NAV },
        { text: 'Корветы', target: 'corvette', type: BtnTypes.SEC_NAV },
        { text: 'Фрегаты', target: 'fregates', type: BtnTypes.SEC_NAV },
    ]

    return (
        <div className={style.navigationBackground}>
        <nav className={style.navigationBox}>
            <ul className={style.list}>
                <li className={style.listElem}>
                    <DropDownBtn text={'БРОНЕТЕХНИКА'} btnsArray={armorVehicles} />
                </li>
                <li className={style.listElem}>
                    <DropDownBtn text={'АВИАЦИЯ'} btnsArray={aircraft} />
                </li>
                <li className={style.listElem}>
                    <DropDownBtn text={'ФЛОТ'} btnsArray={fleet} />
                </li>
            </ul>
        </nav>
        </div>
    )
}