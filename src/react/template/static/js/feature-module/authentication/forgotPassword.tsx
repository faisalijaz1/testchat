import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import ImageWithBasePath from '../../core/data/img/ImageWithBasePath.tsx'
import { all_routes } from '../router/all_routes.tsx'
import PhoneInput from 'react-phone-number-input'



const ForgotPassword = () => {

    const routes= all_routes;
    const [value, setValue] = useState();

  return (


   <div className="container-fluid">
  <div className="login-wrapper">
    <header className="logo-header">
      <Link to={routes.index} className="logo-brand">
        <ImageWithBasePath src="/assets/img/login-logo.png" alt="Logo" className="img-fluid logo-dark" />
        <h5>DREAMSCHAT</h5>
      </Link>
    </header>
    <div className="login-inbox">
      <div className="log-auth">
        <div className="login-auth-wrap">
          <div className="login-content-head">
            <h3>Forgot Password</h3>
            <p>Enter your email or phone number and we will send you a otp to reset your 
              password.</p>
          </div>
        </div>
        <form>
          <div className="form-group">
            <label className="form-label">Email or Phone Number <span>*</span></label>
            {/* <input className="form-control form-control-lg group_formcontrol" id="phone" name="phone" type="text" /> */}
            <PhoneInput
      placeholder="Enter phone number"
      value={value}
      onChange={setValue}
      className="form-control form-control-lg group_formcontrol"
      />
          </div>                          
          <Link to={routes.resetPassword} className="btn btn-primary w-100 btn-size justify-content-center">Reset Password</Link>                           
        </form>
      </div>
    </div>                
  </div>            
</div>



  )
}

export default ForgotPassword