import style from './titleImage.module.css'

type TTitleImageProps = {
    imageLink: string;
}

export function TitleImage({ imageLink }: TTitleImageProps) {

    return (
        <img className={style.imageBox} src={imageLink} alt={'test'} />
    )
}