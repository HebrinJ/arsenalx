import { Link } from 'react-router-dom';
import style from './unitCard.module.css';

type TItemProps = {
    id: string,
    image: string,
    name: string,
}

export function UnitCard({ id, image, name }: TItemProps) {

    return (
        <Link className={style.link} to={`/item/${id}`} state={id}>
            <div className={style.container}>
                <img className={style.image} src={image} />
                <p className={style.label}>{name}</p>
            </div>
        </Link>
    )
}