import { useEffect, useState } from "react";
import { mockArmor } from "../../mock/mockData";
import { TitleImage } from "../titleImage/titleImage";
import { UnitDescription } from "../unitDescription/unitDescription";
import { UnitTable } from "../unitTable/unitTable";
import api from "../../utils/api";
import style from './adminPage.module.css';
import { UnitTypes } from "../../utils/unitTypes";

export function AdminPage() {

    const unitData = mockArmor;

    const [unitType, setUnitType] = useState();

    const [mainImg, setMainImg] = useState('');
    const [unitName, setUnitName] = useState('');
    const [unitDesc, setUnitDesc] = useState('');

    // const [testInfo, setTestInfo] = useState('0');
    // useEffect(() => {
    //     req();
    // }, [])

    // const req = async () => {
    //     const result = await api.testGet();
    //     setTestInfo(result.data)
    // }
    const handleSubmit = () => {
        console.log(mainImg);
        console.log(unitName);
        console.log(unitDesc);
        console.log('Отправлено')
    }

    const handleMainImgChg = (event: any) => {
        setMainImg(event.target.value);
    }

    const handleUnitNameChg = (event: any) => {
        setUnitName(event.target.value)
    }

    const handleUnitDescChg = (event: any) => {
        setUnitDesc(event.target.value)
    }

    const handleChangeUnitForm = () => {

    }

    return (
        <div className={style.container}>
            <form onSubmit={handleSubmit} className={style.form}>
                <label>
                    Выберите тип техники
                    <select value={unitType} onChange={handleChangeUnitForm}>
                        <option value={UnitTypes.BBM}>ББМ</option>
                        <option value={UnitTypes.TANK}>Танк</option>
                        <option value={UnitTypes.MLRS}>РСЗО</option>
                        <option value={UnitTypes.ACV}>БМП</option>
                    </select>
                </label>
                <label>
                    Вставьте ссылку на главное фото
                    <input value={mainImg} onChange={handleMainImgChg}></input>
                </label>
                <label>
                    Заполните название техники
                    <input value={unitName} onChange={handleUnitNameChg}></input>
                </label>
                <label>
                    Заполните сведения о технике
                    <input></input>
                </label>
                <label>
                    Заполните описание техники
                    <textarea value={unitDesc} onChange={handleUnitDescChg}></textarea>
                </label>
                <label>
                    Добавьте ссылки на фотографии
                    <input></input>
                </label>
            </form>
            <button type="submit" onClick={handleSubmit}>Отправить</button>
        </div>
    )
}