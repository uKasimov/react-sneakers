import React from "react";
import axios from "axios";
import Card from './components/Card'
import Header from "./components/Header";
import Drawer from "./components/Drawer/";

function App() {
    const [products, setProducts] = React.useState([]);
    const [cartProducts, setCartProducts] = React.useState([]);
    const [searchValue, setSearchValue] = React.useState('');
    const [cartOpened, setCartOpened] = React.useState(false);

    React.useEffect(() => {
        axios.get("https://63b03beb6a74151a1bbc8638.mockapi.io/items")
            .then((res) => {
                setProducts(res.data)
            });
        axios.get('https://63b03beb6a74151a1bbc8638.mockapi.io/cart')
            .then((res) => {
                setCartProducts(res.data)
            })
    }, []);

    const onAddToCart = (product) => {
        axios.post('https://63b03beb6a74151a1bbc8638.mockapi.io/cart', product)
            .then((res) => {
                setCartProducts(res.data)
            })
        setCartProducts(prev => [...prev, product])
    }
    
    const onRemoveItem = (id) => {
        axios.delete(`https://63b03beb6a74151a1bbc8638.mockapi.io/cart/${id}`)
            .then((res) => {
                setCartProducts(res.data)
            })
        setCartProducts(prev => prev.filter(item => item.id !== id))
        console.log(id)
    }

    const onChangeSearchInput = (event) => {
        setSearchValue(event.target.value);
    };

    return (
        <div className="wrapper clear">
            {cartOpened && <Drawer cartItems={cartProducts} onClose={() => setCartOpened(false)} onRemove={onRemoveItem}/>}
            <Header onClickCart={() => setCartOpened(true)}
            />
            <div className="content p-40">
                <div className="d-flex align-center mb-40 justify-between">
                    <h1>{searchValue ? `Поиск по запросу: "${searchValue}"` : 'Все кроссовки'}</h1>
                    <div className="searchBlock d-flex">
                        <img src="/img/icon/search.svg" alt="search"/>
                        <input onChange={onChangeSearchInput} value={searchValue} placeholder="Поиск..."/>
                        {searchValue && <span onClick={() => setSearchValue('')} className="clearField cu-p">X</span>}
                    </div>
                </div>
                <div className="d-flex flex-wrap">
                    {products.filter(product => product.title.toLowerCase().includes(searchValue.toLowerCase())).map((product, index) => (
                        <Card
                            key={index}
                            title={product.title}
                            price={product.price}
                            imageUrl={product.imageUrl}
                            onFavorite={() => console.log("Добавли в закладки")}
                            onAdd={(cartProduct) => onAddToCart(cartProduct)}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}

export default App;
