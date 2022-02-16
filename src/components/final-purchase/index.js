import React, { useState, useEffect} from 'react'

function FinalPurchase({user , products, cart}) {
  
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


  return (
    <div className='row' style={{margin:10}}>
      <div className="col-12" >
        {user 
        ? 
          <>
          Hi , {user.name}
          <br/>
          Address: {user.address}
          </>
        :
          <>
          Hi
          </>
        }
        
      </div>
      <div className="col-12" style={{marginTop:10}}>
        <h3> Total amount : $ {totalAmount}  </h3>
      </div>
      <div className="col-12" >
        <button type="button" className="btn btn-primary" >
          Cash on Delivery
        </button>
      </div>
      
      
    </div>
   
  )
}

export default FinalPurchase