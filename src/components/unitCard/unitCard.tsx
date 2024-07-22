import style from './unitCard.module.css'

export function UnitCard() {

    return (
        <div className={style.container}>
            <img className={style.image} src='http://war-book.ru/wp-content/uploads/2021/07/00065935.jpg' />
            <p className={style.label}>Название техники</p>
        </div>
    )
}