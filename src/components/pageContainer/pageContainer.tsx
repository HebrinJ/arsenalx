import style from './pageContainer.module.css';

type TPageContainer = {
    children?: React.ReactNode;
}

export default function PageContainer(props: TPageContainer) {
    return (
        <div className={style.pageContainer}>
            {props.children}
        </div>
    )
}