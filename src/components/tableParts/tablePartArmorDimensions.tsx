import style from './tableStyles.module.css'

type TDimensionsArmorDataProps = {
    dimensionsArmorData: {
        length: string,
        lengthWithGun: string,
        width: string,
        height: string,
        clearance: string,
    }
}

export function TablePartArmorDimensions({ dimensionsArmorData }: TDimensionsArmorDataProps) {

    const { length, lengthWithGun, width, height, clearance } = dimensionsArmorData;

    return(
        <table className={style.table}>
            <tr>
                <td>Длина без орудия</td>
                <td>{length}</td>
            </tr>
            <tr>
                <td>Длина с орудием</td>
                <td>{lengthWithGun}</td>
            </tr>
            <tr>
                <td>Ширина</td>
                <td>{width}</td>
            </tr>
            <tr>
                <td>Высота</td>
                <td>{height}</td>
            </tr>
            <tr>
                <td>Клиренс</td>
                <td>{clearance}</td>
            </tr>
        </table>
    )
}