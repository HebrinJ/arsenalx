import { UnitCard } from '../unitCard/unitCard'
import style from './mainContent.module.css'

export default function MainContent() {
    return (
        <div className={style.contentBox}>
            <UnitCard id='2'/>
            <UnitCard id='1'/>
            <UnitCard id='1'/>
            <UnitCard id='1'/>
            <UnitCard id='1'/>
            <UnitCard id='1'/>
        </div>
    )
}