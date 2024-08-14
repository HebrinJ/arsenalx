import { mockArmor } from "../../mock/mockData";
import { TitleImage } from "../titleImage/titleImage";
import { UnitTable } from "../unitTable/unitTable";
import style from './unitPage.module.css';

export function UnitPage() {

    const unitData = mockArmor;

    return (
        <div className={style.container}>
            <TitleImage imageLink={unitData.mainImage} />
            <UnitTable unitData={unitData}/>
        </div>
    )
}