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
        { text: 'РСЗО', target: 'mlrs', type: BtnTypes.SEC_NAV },
    ]

    const aircraft: Array<TBtnProps> = [
        { text: 'Истребители', target: 'fighters', type: BtnTypes.SEC_NAV },
        { text: 'Штурмовики', target: 'attack', type: BtnTypes.SEC_NAV },
        { text: 'Бомбардировщики', target: 'bombers', type: BtnTypes.SEC_NAV },
        { text: 'Вспомогательные самолеты', target: 'airsupport', type: BtnTypes.SEC_NAV },
        { text: 'Боевые вертолеты', target: 'b_helicopter', type: BtnTypes.SEC_NAV },
        { text: 'Вспомогательные вертолеты', target: 's_helicopter', type: BtnTypes.SEC_NAV },
        { text: 'Беспилотники', target: 'bpla', type: BtnTypes.SEC_NAV },
    ]

    const fleet: Array<TBtnProps> = [
        { text: 'Боевые катера', target: 'speedboat', type: BtnTypes.SEC_NAV },
        { text: 'Эсминцы', target: 'destroyer', type: BtnTypes.SEC_NAV },
        { text: 'Миноносцы', target: 'mines', type: BtnTypes.SEC_NAV },
        { text: 'Крейсеры', target: 'cruiser', type: BtnTypes.SEC_NAV },
        { text: 'Линкоры и дредноуты', target: 'battleship', type: BtnTypes.SEC_NAV },
        { text: 'Авианосцы и вертолетоносцы', target: 'carrier', type: BtnTypes.SEC_NAV },
        { text: 'Суда обеспечения', target: 'sup_ship', type: BtnTypes.SEC_NAV },
        { text: 'Подводные лодки', target: 'submarine', type: BtnTypes.SEC_NAV },
    ]

    return (
        <div className={style.navigationBackground}>
        <nav className={style.navigationBox}>
            <ul className={style.list}>
                <li className={style.listElem}>
                    <NavButton text={'НА ГЛАВНУЮ'} target='/' type={BtnTypes.MAIN_NAV} />
                </li>
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