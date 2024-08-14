import style from './tableStyles.module.css'

type TEquipArmorDataProps = {
    equipArmorData: {
        radio: string,
        commandAim: string,
    }
}

export function TablePartArmorEquip({ equipArmorData }: TEquipArmorDataProps) {

    const { radio, commandAim } = equipArmorData;

    return(
        <table className={style.table}>
            <tr>
                <td>Радиостанция</td>
                <td>{radio}</td>
            </tr>
            <tr>
                <td>Прицел командира</td>
                <td>{commandAim}</td>
            </tr>
        </table>
    )
}