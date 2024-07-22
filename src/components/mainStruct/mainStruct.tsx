import { Outlet, Route, Routes } from "react-router-dom";
import { Header } from "../header/header";
import MainContent from "../mainContent/mainContent";
import { NavPanel } from "../navPanel/navPanel";
import PageContainer from "../pageContainer/pageContainer";
import style from './mainStruct.module.css'

export default function MainStruct() {
    return (
        <>
            <PageContainer>
                <Header />
                <div className={style.bodyBox}>
                    <NavPanel />
                    <Outlet />
                </div>
            </PageContainer>            
        </>
    )
}