import style from './tableStyles.module.css'

type TMainArmorDataProps = {
    mainArmorData: {
        endOfDevelop: string,
        productionYears: string,
        country: string,
        developer: string,
        productCount: string,
        classification: string,
        weight: string,
        layout: string,
        crew: string,
        cost: string,
    }
}

export function TablePartArmorMain({ mainArmorData }: TMainArmorDataProps) {

    const { endOfDevelop, productionYears, country, developer, productCount, classification,
        weight, layout, crew, cost } = mainArmorData;

    return (
        <table className={style.table}>
            <tr>
                <td>Окончание разработки</td>
                <td>{endOfDevelop}</td>
            </tr>
            <tr>
                <td>Годы производства</td>
                <td>{productionYears}</td>
            </tr>
            <tr>
                <td>Страна</td>
                <td>{country}</td>
            </tr>
            <tr>
                <td>Разработчик</td>
                <td>{developer}</td>
            </tr>
            <tr>
                <td>Произведено, шт.</td>
                <td>{productCount}</td>
            </tr>
            <tr>
                <td>Классификация</td>
                <td>{classification}</td>
            </tr>
            <tr>
                <td>Масса</td>
                <td>{weight}</td>
            </tr>
            <tr>
                <td>Компоновка</td>
                <td>{layout}</td>
            </tr>
            <tr>
                <td>Экипаж</td>
                <td>{crew}</td>
            </tr>
            <tr>
                <td>Стоиомсть</td>
                <td>{cost}</td>
            </tr>
        </table>
    )
}