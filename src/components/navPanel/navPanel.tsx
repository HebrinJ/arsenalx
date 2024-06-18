import style from './navPanel.module.css'

export function NavPanel() {
    return (
        <nav className={style.navigationBox}>
            <button>Первая кнопка</button>
            <button>Вторая кнопка</button>
        </nav>
    )
}