import { useEffect, useState } from "react";
import { mockArmor } from "../../mock/mockData";
import { TitleImage } from "../titleImage/titleImage";
import { UnitDescription } from "../unitDescription/unitDescription";
import { UnitTable } from "../unitTable/unitTable";
import api from "../../utils/api";
import style from './unitPage.module.css';

export function UnitPage() {

    const unitData = mockArmor;

    const [testInfo, setTestInfo] = useState('0');
    useEffect(() => {
        req();
    }, [])

    const req = async () => {
        const result = await api.testGet();
        setTestInfo(result.data)
    }

    return (
        <div className={style.container}>
            <TitleImage imageLink={unitData.mainImage} />
            <p>{` ЭТО ПОЛУЧЕННЫЕ ДАННЫЕ ${testInfo}`}</p>
            <UnitTable unitData={unitData}/>
            <UnitDescription description={unitData.description} />
        </div>
    )
}