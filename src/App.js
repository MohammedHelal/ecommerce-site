import './App.css';
import Products from './products/Products.js';
import Item from './products/ItemDetails/Item.js'
import Navbar from './nav/Navbar.js';
import Filter from "./products//filter/Filter.js";
import Cart from "./cart/Cart.js";
import { useState } from 'react';
import { Route, Routes } from "react-router-dom";

function App() {
  const [url, setUrl] = useState('https://fakestoreapi.com/products');
  const [name, setName] = useState('All Items');
  const [rating, setRating] = useState(0);
  const [cartItem, setCartItem] = useState([]);

  function changeUrl(data){
    if(data === 'all' || data === 'navAll'){
      setUrl('https://fakestoreapi.com/products');
    } else if(data === 'electronics' || data === 'navElectronics'){
      setUrl('https://fakestoreapi.com/products/category/electronics');
    } else if(data === 'jewelery' || data === 'navJewelery'){
      setUrl('https://fakestoreapi.com/products/category/jewelery');
    } else if(data === 'mens' || data === 'navMens'){
      setUrl("https://fakestoreapi.com/products/category/men's%20clothing");
    } else if(data === 'womens' || data === 'navWomen'){
      setUrl("https://fakestoreapi.com/products/category/women's%20clothing");
    }
  }

  function changeName(n){
    if(n === 'all' || n === 'navAll'){
      setName('All Items');
    } else if(n === 'electronics' || n === 'navElectronics'){
      setName('Electronics');
    } else if(n === 'jewelery' || n === 'navJewelery'){
      setName('Jewelery');
    } else if(n === 'mens' || n === 'navMens'){
      setName("Men's Clothing");
    } else if(n === 'womens' || n === 'navWomen'){
      setName("Women's Clothing");
    }
  }

  function addCart(i){
    setCartItem([...cartItem, i]);
  }

  function deleteItemfromCart(id){
    setCartItem((cartItem) =>
    cartItem.filter((e) => e.id !== id));
  }

  return (
    <div className="App">
        <Navbar changeUrl={changeUrl} changeName={changeName} cartNum={cartItem.length}/>
        <Routes>
          <Route path="/" element={
            <div className="grid">
              <Filter changeUrl={changeUrl} changeName={changeName} rating={(num) => setRating(num)}/>
              <Products url={url} name={name} rating={rating}/>
            </div>
          } />
          <Route path="/products/:id" element={<Item addCart={addCart} />} />
          <Route path="/cart" element={<Cart item={cartItem} deleteItem={deleteItemfromCart} />} />
        </Routes>
      </div>
  );
}

export default App;