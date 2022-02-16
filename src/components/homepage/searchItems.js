import React , { useState, useEffect} from 'react'

function SearchBar({products , addproduct ,cart}) {
  const [modifiedProducts, setModifiedProducts] = useState([]);
  
  useEffect(() => {
    console.log("test")
    setModifiedProducts(products)
  }, [products]);


  const handleSelectChange = (event)=>{
    let newModifiedProduct = [...modifiedProducts]
    const value = event.target.value;
    if(value === 'price'){
      newModifiedProduct.sort((a, b)=>a.price - b.price);
    }
    else if(value === 'name'){
      newModifiedProduct.sort((a, b) => a.title.localeCompare(b.title))
    }
    else{
      newModifiedProduct = [...products]
    }
    setModifiedProducts(newModifiedProduct)
  }

  return (
    <>
      <div className='row'>
        
        <div className="col-4">
          <select className="form-select" onChange={(e) => handleSelectChange(e)} >
            <option value="">select an option</option>
            <option value="price">sort by Price</option>
            <option value="name">sort by Name</option>
          </select>
        </div>
        <div className="col-8"></div>
        
      </div>

      <div className='row'>
        {/* {JSON.stringify(modifiedProducts) } */}
        {modifiedProducts && modifiedProducts.map( v => {
          return(
            <div className="col-3" style={{marginTop: 20}} key={v.id}>
              
              <div className="card productBox">
                <img src={`${v.image}`} className="card-img-top" alt={`product-${v.id}`} style={{height:200 ,width:200}} />
                <div className="card-body">
                  <h5> {v.title} </h5>
                  <h5> Price: $ {v.price} </h5>
                  {
                    cart.indexOf(v.id) === -1 
                    ?
                    <button type="button" className="btn btn-primary pull-right" onClick={ ()=>{addproduct(v.id)} } >
                      add to cart
                    </button>
                    :
                    <p> Already Added to cart </p>
                  }
                  
                </div>
              </div>
            </div>
          )
        })}
        
      </div>
    </>

  )
}

export default SearchBar