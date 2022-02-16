import React from 'react'
import SearchItems from './searchItems'
import Cart from './cart';

function HomePage({products,addProductToCart ,removeProductToCart,  cart}) {
  return (
    <div className='row'>
        
        { cart.length > 0
        ?
        <>
          <div className="col-10"> 
            <SearchItems products={products} addproduct={addProductToCart} cart={cart} />
          </div>
          <div className="col-2" style={{backgroundColor: 'antiquewhite'}}> 
            <Cart products={products} cart={cart} removeProductToCart={removeProductToCart} />
          </div>
        </>
        :
        <>
         <div className="col-12"> 
            { products ? <SearchItems products={products} addproduct={addProductToCart} cart={cart} /> : 'No item found'}
          </div>
        </>
        }
        
      </div>
  )
}

export default HomePage