import style from './tableStyles.module.css'

type TDefenceArmorDataProps = {
    defenceArmorData: {
        type: string,
        vld: string,
        nld: string,
        side: string,
        back: string,
        roof: string,
        turretFront: string,
        gunMask: string,
        turretSide: string,
        turretBack: string,
        defenceEquip: string,
        dinamicArmor: string,
        activeArmor: string,
    }
}

export function TablePartArmorDefence({ defenceArmorData }: TDefenceArmorDataProps) {

    const { type, vld, nld, side, back, roof, turretFront, gunMask, turretSide,
            turretBack, defenceEquip, dinamicArmor, activeArmor } = defenceArmorData;

    return(
        <table className={style.table}>
            <tr>
                <td>Тип брони</td>
                <td>{type}</td>
            </tr>
            <tr>
                <td>Толщина ВЛД</td>
                <td>{vld}</td>
            </tr>
            <tr>
                <td>Толщина НЛД</td>
                <td>{nld}</td>
            </tr>
            <tr>
                <td>Толщина бортов</td>
                <td>{side}</td>
            </tr>
            <tr>
                <td>Толщина кормы</td>
                <td>{back}</td>
            </tr>
            <tr>
                <td>Толщина крыши</td>
                <td>{roof}</td>
            </tr>
            <tr>
                <td>Толщина лба башни</td>
                <td>{turretFront}</td>
            </tr>
            <tr>
                <td>Толщина маски орудия</td>
                <td>{gunMask}</td>
            </tr>
            <tr>
                <td>Толщина сбоку башни</td>
                <td>{turretSide}</td>
            </tr>
            <tr>
                <td>Толщина кормы башни</td>
                <td>{turretBack}</td>
            </tr>
            <tr>
                <td>Защитное оборудование</td>
                <td>{defenceEquip}</td>
            </tr>
            <tr>
                <td>Динамическая защита</td>
                <td>{dinamicArmor}</td>
            </tr>
            <tr>
                <td>Активная броня</td>
                <td>{activeArmor}</td>
            </tr>
        </table>
    )
}