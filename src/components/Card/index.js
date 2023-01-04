import React from "react";
import styles from './Card.module.scss';

function Card({ title, imageUrl, price, onAdd}) {

    const [isAdded, setIsAdded] = React.useState(false);

    const onClickPlus = () => {
        onAdd({title, imageUrl, price});
        setIsAdded(!isAdded);
    }

    return (
        <div className={styles.card}>
            <div className={styles.favorite}>
                <img src="/img/icon/heart-liked.svg" alt=""/>
            </div>
            <img width={133} height={122} src={imageUrl} alt={title}/>
            <h5>{title}</h5>
            <div className="d-flex justify-between align-center">
                <div className="d-flex flex-column">
                    <span>Цена:</span>
                    <b>{price} руб.</b>
                </div>
                <div className={styles.buttonAdd}>
                    <img src={!isAdded ? "/img/icon/add.svg" : "img/icon/added.svg"} alt="button add"
                         onClick={onClickPlus}/>
                </div>
            </div>
        </div>
    )
}

export default Card;