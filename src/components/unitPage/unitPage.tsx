import { useEffect, useState } from "react";
import { TitleImage } from "../titleImage/titleImage";
import { UnitDescription } from "../unitDescription/unitDescription";
import api from "../../utils/api";
import style from './unitPage.module.css';
import { useLocation } from "react-router-dom";
import { TransformUnitData, TRawUnitDataObject, TTransformedUnitData } from "../../utils/transformUnitData";
import { TableCreator } from "../tableParts/tableCreator";

export function UnitPage() {

    const location = useLocation();
    const id = location.state;

    const [rawUnitData, setRawUnitData] = useState<TRawUnitDataObject>({});
    const [labelData, setLabelData] = useState({mainImage: '', description: ''})

    useEffect(() => {
        getUnitData();
    }, [])

    const getUnitData = async () => {
        const result = await api.getArmorData(id);
        setRawUnitData(result)
        setLabelData({mainImage: result.mainImage, description: result.description});
    }

    return (
        <div className={style.container}>
            <TitleImage imageLink={labelData.mainImage} />
            <TableCreator tableData={TransformUnitData(rawUnitData)} />
            <UnitDescription description={labelData.description} />
        </div>
    )
}