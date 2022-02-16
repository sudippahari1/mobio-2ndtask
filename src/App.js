import React , { useState, useEffect} from 'react';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import './App.css';

import {readLocalStorage , saveLocalStorage} from './helpers/localstorage'

import HomePage from './components/homepage';
import CheckOut from './components/checkout';
import Register from './components/register'
import FinalPurchase from './components/final-purchase';

function App() {
  const [products, setProducts] = useState([]);
  const [cart, setCarts] = useState([]);
  const [user, setUser] = useState({
    name: '',
    email: '',
    mobile: '',
    address: '',
  });
  

  useEffect(() => {
    
    const products = readLocalStorage('products')
    const carts = readLocalStorage('carts')
    const user = readLocalStorage('user')
    
    if(products) {
      setProducts(products);
      if(carts){
        setCarts(carts)
      }
      if(user) {
        setUser(user)
      }
      
    }
    else{
      fetch('https://fakestoreapi.com/products')
      .then(response => response.json())
      .then(result => {
        console.log(result)
        if(result) {
          saveLocalStorage('products', result)
          setProducts(result);
        }
      })
      .catch(error => {
        console.error('Error:', error);
      });
    }
    
  }, []);


  useEffect(() => {
    saveLocalStorage('user', user)
  }, [user]);



  const addProductToCart = (productId) => {
    const newcart = [...cart,productId]
    saveLocalStorage('carts', newcart)
    setCarts(newcart)
  }
  const removeProductToCart = (productId) => {
    const newCartIds = cart.filter( v => v !== productId )
    saveLocalStorage('carts', newCartIds)
    setCarts(newCartIds)
  }

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage products={products} addProductToCart={addProductToCart} removeProductToCart={removeProductToCart}  cart={cart} />}> </Route>
          <Route path="/checkout" element={<CheckOut products={products} cart={cart} removeProductToCart={removeProductToCart} />}> </Route>
          <Route path="/register" element={<Register user={user} setUser={setUser}/>}> </Route>
          <Route path="/final-purchase" element={<FinalPurchase user={user} products={products} cart={cart} />}> </Route>
          
        </Routes>
      </BrowserRouter>
      
      
    </div>
  );
}

export default App;
