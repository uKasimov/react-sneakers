function Header(props) {

    return (
        <header className="p-40 d-flex justify-between align-center">
            <div className="headerLeft d-flex align-center">
                <img width={40} height={40} src="/img/icon/logo.svg" alt="logo"/>
                <div className="headerInfo">
                    <h3 className="text-uppercase"> React Sneakers</h3>
                    <p className="opacity-5">Магазин рекативный кросовок</p>
                </div>
            </div>
            <ul className="headerRight d-flex">
                <li onClick={props.onClickCart} className="mr-20 cu-p">
                    <img className="mr-15" width={18} height={18} src="/img/icon/cart.svg" alt="cart"/>
                    <span>2200 руб.</span>
                </li>
                <li className="mr-20">
                    <img width={18} height={18} src="/img/icon/heart.svg" alt="heart"/>
                </li>
                <li>
                    <img width={18} height={18} src="/img/icon/user.svg" alt="user"/>
                </li>
            </ul>
        </header>
    )
}

export default Header