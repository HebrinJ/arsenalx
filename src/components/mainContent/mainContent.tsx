import { UnitCard } from '../unitCard/unitCard'
import style from './mainContent.module.css'
import api from '../../utils/api'
import { useEffect, useState } from 'react'
import { UnitGroup, UnitTypes } from '../../utils/unitTypes'

type TCardList = [
    {
        id: string;
        group: string;
        type: string;
        year: number;
        company: string;
        country: string;
        image: string;
        name: string;
    }    
]

type TMainContentProps = {
    group: UnitGroup;
    type: UnitTypes;
}

export default function MainContent({ group, type }: TMainContentProps): JSX.Element {

    const [cardList, setCardList] = useState<TCardList>([{
        id: "0",
        group: "none",
        type: "none",
        year: 0,
        company: "none",
        country: "none",
        image: "none",
        name: "none",
    }])    

    useEffect(() => {
        getData();
    }, [])
    
    async function getData() {
        setCardList(await api.getCardList())
    }

    return (
        <div className={style.contentBox}>
            {cardList.map((unit) => {
                if(unit.group === group.toString() && unit.type === type.toString()) {
                    return (<UnitCard id={unit.id} image={unit.image} name={unit.name}/>)
                }
            })}            
        </div>
    )
}