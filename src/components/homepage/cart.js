import React, { useState, useEffect} from 'react'
import { useNavigate } from 'react-router-dom';

function Cart({products, cart, removeProductToCart}) {
  let navigate = useNavigate();
  const [allItems, setallItems] = useState([]);
  
  useEffect(() => {
    const temp ={}
    products.forEach( v=> {
      temp[v.id] = {...v}
    })
    setallItems(temp)
  }, [products]);

  const redirectToCheckout= () => {
    navigate('/checkout')
  }

  return (
    <>
      <div className='row' style={{backgroundColor: '#ebd2b1'}}>
        <div className="col-12">
          <button type="button" className="btn btn-success pull-right" onClick={redirectToCheckout}>
            checkout 
          </button>
        </div>

      </div>
      <div className='row'>
        {cart && cart.map( v => {
          return(
            <div className="col-12" style={{marginTop: 20}} key={v}>
              
              <div className="card productBox">
                <img src={allItems[v] ? allItems[v].image : 'https://demofree.sirv.com/nope-not-here.jpg'} className="card-img-top img-fluid" alt={`product-${v}`} style={{height:100 ,width:100}} />
                <div className="card-body">
                  <h5> { allItems[v] ? allItems[v].title : '' } </h5>
                  <h5> Price : ${ allItems[v] ? allItems[v].price : '0' } </h5>
                  <button type="button" className="btn btn-primary pull-right" onClick={ ()=>{removeProductToCart(v)} } >
                    remove item
                  </button>
                </div>
              </div>
            </div>
          )
        })}
      </div>
     
    </>
  ) 
}
export default Cart