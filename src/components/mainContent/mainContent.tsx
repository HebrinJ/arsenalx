import { UnitCard } from '../unitCard/unitCard'
import style from './mainContent.module.css'
import api from '../../utils/api'
import { useEffect, useState } from 'react'
import { ARMOR, BBM } from '../../constants/unitTypeConstants'

type TCardList = [
    {
        id: string;
        group: string;
        type: string;
        year: number;
        company: string;
        country: string;
        image: string;
        unitName: string;
    }    
]

type TMainContentProps = {
    group: string;
    type: string;
}

export default function MainContent({ group = ARMOR, type = BBM }: TMainContentProps): JSX.Element {

    const [cardList, setCardList] = useState<TCardList>([{
        id: "0",
        group: "none",
        type: "none",
        year: 0,
        company: "none",
        country: "none",
        image: "none",
        unitName: "none",
    }])    

    useEffect(() => {
        const getData = async () => {
            const cards = await api.getCardListByType(type)
            setCardList(cards);            
        }

        getData();
    }, [type])

    return (
        <div className={style.contentBox}>
            {cardList.map((card) => {
                if(card.group === group && card.type === type) {
                    return (<UnitCard id={card.id} image={card.image} name={card.unitName}/>)
                }
            })}            
        </div>
    )
}