import React , { useState, useEffect} from 'react'
import { useNavigate } from 'react-router-dom';

function CheckOut({products, cart, removeProductToCart}) {
  let navigate = useNavigate();
  const [allItems, setallItems] = useState([]);
  const [totalAmount, setTotalAmount] = useState(0);
  
  useEffect(() => {
    const temp ={}
    products.forEach( v=> {
      temp[v.id] = {...v}
    })
    setallItems(temp)
  }, [products]);

  useEffect(() => {
    let totalPrice = 0
    cart.forEach( v => {
      if(allItems[v] && allItems[v].price){
        totalPrice = totalPrice+ parseFloat(allItems[v].price) 
      }
    })
    setTotalAmount(totalPrice)
  }, [cart,allItems]);

  useEffect(() => {
    if(cart.length === 0) {
      navigate('/')
    }
  }, [cart,navigate]);

  const goToRegisterPage = () => {
    navigate('/register')
  }



  return (
    <>
      {cart && cart.map( v => {
        return(
          <div className='row' style={{marginTop: 10, padding: 10 , border: '1px solid grey'}} key={v}>
            <div className="col-3" >
              <img src={allItems[v] ? allItems[v].image : 'https://demofree.sirv.com/nope-not-here.jpg'} className="card-img-top img-fluid" alt={`product-${v}`} style={{height:100 ,width:100}} />
            </div>
            <div className="col-3" >
              <h5> { allItems[v] ? allItems[v].title : '' } </h5>
            </div>
            <div className="col-3" >
              <h5> Price : ${ allItems[v] ? allItems[v].price : '0' } </h5>
            </div>
            <div className="col-3" >
              <button type="button" className="btn btn-primary pull-right" onClick={ ()=>{removeProductToCart(v)} } >
                remove item
              </button>
            </div>
          </div>
        )
      })}

      <div className='row' style={{marginTop: 10, padding: 10 , border: '1px solid grey', textAlign: 'end'}}> 
        
        <div className="col-6" >
          <button type="button" className="btn btn-primary pull-left" onClick={goToRegisterPage}>
           Account Info
          </button>
        </div>
        <div className="col-6" >
          <h3> Total amount : $ {totalAmount} </h3>
        </div>
      </div>
      
    </>
    
  )
}

export default CheckOut