import style from './tableStyles.module.css'

type TMobilityArmorDataProps = {
    mobilityArmorData: {
        engine: string,
        power: string,
        roadSpeed: string,
        offroadSpeed: string,
        roadRange: string,
        offroadRange: string,
        specificPower: string,
        suspensionType: string,
        trackWidth: string,
        groundPress: string,
        ascentOver: string,
        ascentWall: string,
        ascentMoat: string,
        ascentFord: string,
    }
}

export function TablePartArmorMobility({ mobilityArmorData }: TMobilityArmorDataProps) {

    const { engine, power, roadSpeed, offroadSpeed, roadRange, offroadRange, specificPower,
            suspensionType, trackWidth, groundPress, ascentOver, ascentWall, ascentMoat, ascentFord,
     } = mobilityArmorData;

    return(
        <table className={style.table}>
            <tr>
                <td>Двигатель</td>
                <td>{engine}</td>
            </tr>
            <tr>
                <td>Мощность двигателя</td>
                <td>{power}</td>
            </tr>
            <tr>
                <td>Скорость по шоссе</td>
                <td>{roadSpeed}</td>
            </tr>
            <tr>
                <td>Скорость по бездорожью</td>
                <td>{offroadSpeed}</td>
            </tr>
            <tr>
                <td>Дальность хода по шоссе</td>
                <td>{roadRange}</td>
            </tr>
            <tr>
                <td>Дальность хода по бездорожью</td>
                <td>{offroadRange}</td>
            </tr>
            <tr>
                <td>Удельная мощность</td>
                <td>{specificPower}</td>
            </tr>
            <tr>
                <td>Тип подвески</td>
                <td>{suspensionType}</td>
            </tr>
            <tr>
                <td>Ширина гусениц/колес</td>
                <td>{trackWidth}</td>
            </tr>
            <tr>
                <td>Давление на грунт</td>
                <td>{groundPress}</td>
            </tr>
            <tr>
                <td>Преодолеваемый подъем</td>
                <td>{ascentOver}</td>
            </tr>
            <tr>
                <td>Преодолеваемая стенка</td>
                <td>{ascentWall}</td>
            </tr>
            <tr>
                <td>Преодолеваемый ров</td>
                <td>{ascentMoat}</td>
            </tr>
            <tr>
                <td>Преодолеваемый брод</td>
                <td>{ascentFord}</td>
            </tr>
        </table>
    )
}