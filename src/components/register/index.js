import React from 'react'
import { useNavigate } from 'react-router-dom';

function Register({user,setUser}) {

  let navigate = useNavigate();
  const redirectToFinalPurchase = ()=>{
    navigate('/final-purchase')
  }

  const handleNameChange= (e) => {
    setUser({...user, name : e.target.value})
  }
  const handleEmailChange = (e) => {
    setUser({...user, email : e.target.value})
  }
  const handleMobileChange = (e) => {
    setUser({...user, mobile : e.target.value})
  }
  const handleAddressChange = (e) => {
    setUser({...user, address : e.target.value})
  }

  return (
    <div className="row"> 
      <div className="col-md-12">
        <h3>Registration </h3>
        <p>
          we can do login and other auth here
          <br/>
          I am just saving data in the state , no APi call
        </p>
      </div>

      <div className="col-md-12" style={{marginTop: 10}}>

        <div className="mb-3">
          <label className="form-label">Name</label>
          <input type="text" className="form-control"  value={user.name} onChange={(e) => handleNameChange(e)}/>
         
        </div>
        <div className="mb-3">
          <label className="form-label">Email address</label>
          <input type="email" className="form-control" value={user.email} onChange={(e) => handleEmailChange(e)}/>
         
        </div>

        <div className="mb-3">
          <label className="form-label">Mobile</label>
          <input type="text" className="form-control" value={user.mobile} onChange={(e) => handleMobileChange(e)}/>
        </div>
        <div className="mb-3">
          <label className="form-label">Address</label>
          <input type="text" className="form-control" value={user.address} onChange={(e) => handleAddressChange(e)}/>
        </div>
        <div className="mb-3">
          <button type="button" className="btn btn-primary pull-right" onClick={redirectToFinalPurchase}>Register</button>
        </div>
        
      </div>
    </div>
  )
}

export default Register