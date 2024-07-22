import style from './navButton.module.css'
import NavButton from './navButton';
import { TBtnProps } from './types';
import { useState } from 'react';

type TDDBtnProps = {
    text: string,
    btnsArray: Array<TBtnProps>,
}

export default function DropDownBtn({ text, btnsArray }: TDDBtnProps): JSX.Element {

    const [dropState, setDropState] = useState({ open: false });

    function clickHandler() { 
        if(btnsArray.length <= 0) return;

        setDropState({ open: !dropState.open })
    }

    return (
        <div>
            <button type="button" className={style.mainNavBtn} onClick={clickHandler}>{text}</button>
            { dropState.open && <div>
                <ul className={style.list}>
                    { btnsArray.map((item) => {
                        return <li className={style.listElem}>
                                    <NavButton text={item.text} target={item.target} type={item.type} />
                                </li>
                    }) }
                </ul>
            </div>}
        </div>
    )
}