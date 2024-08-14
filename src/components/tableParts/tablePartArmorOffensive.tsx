import style from './tableStyles.module.css'

type TOffensiveArmorDataProps = {
    offensiveArmorData: {
        mainGun: string,
        secondGun: string,
        caliber: string,
        gunType: string,
        stab: string,
        ammunition: string,
        ammunitionType: string,
        edges: string,
        range: string,
        aim: string,
        addition: string,
    }
}

export function TablePartArmorOffensive({ offensiveArmorData }: TOffensiveArmorDataProps) {

    const { mainGun, secondGun, caliber, gunType, stab, ammunition, 
            ammunitionType, edges, range, aim, addition } = offensiveArmorData

    return(
        <table className={style.table}>
            <tr>
                <td>Основное орудие</td>
                <td>{mainGun}</td>
            </tr>
            <tr>
                <td>Дополнительное орудие</td>
                <td>{secondGun}</td>
            </tr>
            <tr>
                <td>Основной калибр</td>
                <td>{caliber}</td>
            </tr>
            <tr>
                <td>Тип орудия</td>
                <td>{gunType}</td>
            </tr>
            <tr>
                <td>Стабилизатор</td>
                <td>{stab}</td>
            </tr>
            <tr>
                <td>Боезапас</td>
                <td>{ammunition}</td>
            </tr>
            <tr>
                <td>Типы боеприпасов</td>
                <td>{ammunitionType}</td>
            </tr>
            <tr>
                <td>Углы склонения</td>
                <td>{edges}</td>
            </tr>
            <tr>
                <td>Дальность выстрела</td>
                <td>{range}</td>
            </tr>
            <tr>
                <td>Прицел</td>
                <td>{aim}</td>
            </tr>
            <tr>
                <td>Дополнительное вооружение</td>
                <td>{addition}</td>
            </tr>
        </table>
    )
}