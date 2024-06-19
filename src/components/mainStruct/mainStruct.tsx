import { Outlet } from "react-router-dom";
import { Header } from "../header/header";
import MainContent from "../mainContent/mainContent";
import { NavPanel } from "../navPanel/navPanel";
import PageContainer from "../pageContainer/pageContainer";

export default function MainStruct() {
    return (
        <>
            <PageContainer>
                <Header />            
                <NavPanel />
            </PageContainer>
            <Outlet />
        </>
    )
}