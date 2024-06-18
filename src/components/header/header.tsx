import React from 'react'
import style from './header.module.css'
import headerImg from './images/headerImg.png'

export function Header() {
    return (
        <div className={style.headerBox}>
            <img src={headerImg} alt='Шапка сайта'/>
        </div>
    )
}