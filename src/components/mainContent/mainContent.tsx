import { UnitCard } from '../unitCard/unitCard'
import style from './mainContent.module.css'

export default function MainContent() {
    return (
        <div className={style.contentBox}>
            <UnitCard />
            <UnitCard />
            <UnitCard />
            <UnitCard />
            <UnitCard />
            <UnitCard />
        </div>
    )
}