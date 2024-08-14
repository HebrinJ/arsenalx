import { TablePartArmorMain } from "../tableParts/tablePartArmorMain";
import { TablePartArmorDefence } from "../tableParts/tablePartArmorDefence";
import { TablePartArmorDimensions } from "../tableParts/tablePartArmorDimensions";
import { TablePartArmorOffensive } from "../tableParts/tablePartArmorOffensive";
import { TablePartArmorMobility } from "../tableParts/tablePartArmorMobility";
import { TablePartArmorEquip } from "../tableParts/tablePartArmorEquipment";
import style from './armorTable.module.css'

export function ArmorTable({unitData}: any) {

    return(
        <div className={style.tableContainer}>
            <TablePartArmorMain mainArmorData={unitData.main} />
            <TablePartArmorDefence defenceArmorData={unitData.defence} />
            <TablePartArmorDimensions dimensionsArmorData={unitData.dimensions} />
            <TablePartArmorOffensive offensiveArmorData={unitData.offensive} />
            <TablePartArmorMobility mobilityArmorData={unitData.mobility} />
            <TablePartArmorEquip equipArmorData={unitData.equipment} />
        </div>
    )
}