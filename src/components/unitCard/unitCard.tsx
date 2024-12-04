import { Link } from 'react-router-dom';
import style from './unitCard.module.css';

type TItemProps = {
    id: string,
    image: string,
    name: string,
}

export function UnitCard({ id, image, name }: TItemProps) {    

    // return (
    //     <Link to={`/item/${id}`} state={id}>
    //         <div className={style.container}>
    //             <img className={style.image} src='http://war-book.ru/wp-content/uploads/2021/07/00065935.jpg' />
    //             <p className={style.label}>Название техники</p>
    //         </div>
    //     </Link>
    // )
    return (
        <Link to={`/item/${id}`} state={id}>
            <div className={style.container}>
                <img className={style.image} src={image} />
                <p className={style.label}>{name}</p>
            </div>
        </Link>
    )
}