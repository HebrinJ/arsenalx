import { UnitCard } from '../unitCard/unitCard'
import style from './mainContent.module.css'
import api from '../../utils/api'
import { useEffect, useState } from 'react'

type TCardList = [
    {
        id: string;
        image: string;
        name: string;
    }    
]

export default function MainContent() {

    const [cardList, setCardList] = useState<TCardList>([{id: "0", image: "none", name: "none"}])    

    useEffect(() => {
        getData(); 
    }, [])
    
    async function getData() {
        setCardList(await api.getCardList())
    } 

    return (
        <div className={style.contentBox}>
            {cardList.map((unit) => {
                return (<UnitCard id={unit.id} image={unit.image} name={unit.name}/>)
            })}            
        </div>
    )
}