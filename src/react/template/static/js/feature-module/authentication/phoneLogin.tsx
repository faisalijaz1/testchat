import React, { useState } from 'react'
import { all_routes } from '../router/all_routes.tsx'
import { Link } from 'react-router-dom';
import ImageWithBasePath from '../../core/data/img/ImageWithBasePath.tsx';
import PhoneInput from 'react-phone-number-input'


const PhoneLogin = () => {
    const [value, setValue] = useState();


    const routes=all_routes;

  return (


   <div className="container-fluid">
  <div className="login-wrapper">
    <header className="logo-header">
      <Link to={routes.index} className="logo-brand">
        <ImageWithBasePath src="./assets/img/login-logo.png" alt="Logo" className="img-fluid logo-dark" />
        <h5>DREAMSCHAT</h5>
      </Link>
    </header>
    <div className="login-inbox">
      <div className="log-auth">
        <div className="login-auth-wrap">
          <div className="login-content-head">
            <h3>Login</h3>
            <p>Hi Welcome Back</p>
          </div>
          <div className="phone-login">
            <span>
              Sign in with 
              <Link to={routes.emailLogin}>
                Email Address
              </Link>
            </span>
          </div>
        </div>
        <form>
          <div className="form-group">
            <label className="form-label">Phone Number <span>*</span></label>
            {/* <input className="form-control form-control-lg group_formcontrol" id="phone" name="phone" type="text" /> */}

            <PhoneInput
      placeholder="Enter phone number"
      value={value}
      onChange={setValue}
      className="form-control form-control-lg group_formcontrol"
      />
          </div>
          <div className="form-group">
            <label className="form-label">Password <span>*</span></label>
            <div className="pass-group">
              <input type="password" className="form-control pass-input" />
              <span className="toggle-password fa-solid fa-eye" />
            </div>
          </div>
          <div className="form-group form-remember d-flex align-items-center justify-content-between">
            <div className="form-check d-flex align-items-center justify-content-start ps-0">
              <label className="custom-check mt-0 mb-0">
                <span className="remember-me">Remember Me</span>
                <input type="checkbox" name="remeber" />                                        
                <span className="checkmark" />
              </label>
            </div>
            <span className="forget-pass">
              <Link to={routes.forgotpassword}>
                Forgot Password
              </Link>
            </span>
          </div>
          <Link to={routes.index} className="btn btn-primary w-100 btn-size justify-content-center">Login</Link>
          <div className="login-or">
            <span className="span-or-log">or Login With</span>
          </div>
          <div className="form-group mb-0">
            <ul className="social-login d-flex align-items-center">
              <li className="text-center">
                <Link to="#" className="d-flex align-items-center justify-content-center">
                  <ImageWithBasePath src="assets/img/icons/google.svg" className="img-fluid" alt="Google" />
                  <span>Google</span>
                </Link>
              </li>
              <li className="text-center">
                <Link to="#" className="d-flex align-items-center justify-content-center">
                  <ImageWithBasePath src="assets/img/icons/facebook.svg" className="img-fluid" alt="Facebook" />
                  <span>Facebook</span>
                </Link>
              </li>
              <li className="text-center">
                <Link to="#" className="d-flex align-items-center justify-content-center">
                  <ImageWithBasePath src="assets/img/icons/apple.svg" className="img-fluid" alt="Apple" />
                  <span>Apple</span>
                </Link>
              </li>
            </ul>
          </div>
          <div className="bottom-text text-center">
            <p>Don&apos;t have account? <Link to={routes.register}>Sign up!</Link></p>
          </div>
        </form>
      </div>
    </div>                
  </div>  
</div>



  )
}

export default PhoneLogin