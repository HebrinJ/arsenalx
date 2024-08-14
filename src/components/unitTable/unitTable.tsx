import { ArmorTable } from "../armorTable/armorTable";

export function UnitTable({unitData}: any) {

    switch (unitData.type) {
        case 'armor':
            return <ArmorTable unitData={unitData}/>;  
        default:
            return <></>
    }
}