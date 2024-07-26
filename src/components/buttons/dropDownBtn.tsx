import style from './navButton.module.css'
import NavButton from './navButton';
import { TBtnProps } from './types';
import { useState, useRef } from 'react';
import { CSSTransition } from 'react-transition-group';

type TDDBtnProps = {
    text: string,
    btnsArray: Array<TBtnProps>,
}

export default function DropDownBtn({ text, btnsArray }: TDDBtnProps): JSX.Element {

    const [dropState, setDropState] = useState({ open: false }); 
    const containerRef = useRef(null);

    function clickHandler() { 
        if(btnsArray.length <= 0) return;

        setDropState({ open: !dropState.open })
    }

    return (
        <div>
            <button type="button" className={style.mainNavBtn} onClick={clickHandler}>{text}</button>            
            <CSSTransition 
                in={dropState.open}
                classNames={{ 
                    enter: style.containerEnter,
                    enterActive: style.containerEnterActive,
                    exit: style.containerExit,
                    exitActive: style.containerExitActive,
                }}
                nodeRef={containerRef}
                timeout={700}
                unmountOnExit>
                <div ref={containerRef}>
                    <ul className={style.list}>
                        { btnsArray.map((item) => {
                            return <li className={style.listElem}>
                                        <NavButton text={item.text} target={item.target} type={item.type} />
                                    </li>
                        }) }
                    </ul>
                </div>
            </CSSTransition>                         
        </div>
    )
}