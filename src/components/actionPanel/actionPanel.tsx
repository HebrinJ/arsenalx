import style from './actionPanel.module.css'

export function ActionPanel() {

    return (
        <div className={style.box}>
            <p>Поиск</p>
            <p>Фильтр</p>
            <p>Сортировка</p>
        </div>
    )
}