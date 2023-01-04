import styles from './Drawer.module.scss'

function Drawer({onClose, onRemove, cartItems = []}) {
    return (
        <div className={styles.overlay}>
            <div className={styles.drawer}>
                <h2 className="mb-30 d-flex justify-between ">
                    Корзина
                    <img
                        onClick={onClose}
                        className="removeBtn cu-p"
                        src="/img/icon/remove.svg"
                        alt="Close"/>
                </h2>

                <div className={styles.items}>
                    {
                        cartItems.map((product) => (
                            <div className="cartItem d-flex align-center mb-20">
                                <div style={{backgroundImage: `url(${product.imageUrl})`}} className="cartItemImg ">
                                </div>
                                <div className="mr-5 flex">
                                    <p className="mb-5">{product.title}</p>
                                    <b>{product.price} руб.</b>
                                </div>
                                <img onClick={() => onRemove(product.id)} className="removeBtn"
                                     src="/img/icon/remove.svg" alt="Remove"/>
                            </div>
                        ))
                    }
                </div>

                <div className={styles}>
                    <ul>
                        <li className="d-flex">
                            <span>Итого:</span>
                            <div></div>
                            <b>21 498 руб.</b>
                        </li>
                        <li className="d-flex">
                            <span>Налог 5%:</span>
                            <div></div>
                            <b>1074 руб.</b>
                        </li>
                    </ul>
                    <button className="greenButton">Оформит заказ <img src="/img/icon/arrow.svg" alt="Arrow"/></button>
                </div>

            </div>
        </div>
    )
}

export default Drawer