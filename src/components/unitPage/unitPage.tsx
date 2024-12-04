import { useEffect, useState } from "react";
import { TitleImage } from "../titleImage/titleImage";
import { UnitDescription } from "../unitDescription/unitDescription";
import { UnitTable } from "../unitTable/unitTable";
import api from "../../utils/api";
import style from './unitPage.module.css';
import { useLocation } from "react-router-dom";

export function UnitPage() {

    const location = useLocation();
    const id = location.state;

    const [unitData, setUnitData] = useState({mainImage: '', description: ''});

    useEffect(() => {
        getUnitData();
    }, [])

    const getUnitData = async () => {
        const result = await api.getArmorData(id);
        setUnitData(result)
    }

    return (
        <div className={style.container}>
            <TitleImage imageLink={unitData.mainImage} />
            <UnitTable unitData={unitData}/>
            <UnitDescription description={unitData.description} />
        </div>
    )
}