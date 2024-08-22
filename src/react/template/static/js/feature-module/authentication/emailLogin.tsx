import React, { useEffect,useState } from 'react'
import { Link } from 'react-router-dom'
import ImageWithBasePath from '../../core/data/img/ImageWithBasePath.tsx'
import Scrollbars from 'react-custom-scrollbars-2'
import { all_routes } from '../router/all_routes.tsx'
import Apple from './apple.svg'
import google from './google.svg'
import facebook from './facebook.svg'
import { useNavigate } from 'react-router-dom';
import { Message } from 'primereact/message';
import loginlogo from '../../../../../../react/template/assets/img/skm-transparent1.png'
const EmailLogin = () => {
    const routes = all_routes;
    const [inputText, setInputText] = useState("");
    const [inputText1, setInputText1] = useState("");
    const [iserror, setiserror] = useState(false);
    const navigate = useNavigate();
    useEffect(() => {
      document.body.classList.add('login-form');
  
      return () => {
        document.body.classList.remove('login-form');
      };
    }, []);
    const content = (
      <div className="flex align-items-center">
          {/* <img alt="logo" src="https://primefaces.org/cdn/primereact/images/logo.png" width="32" /> */}
          <div className="ml-2">InValid Credentials</div>
      </div>
  );
  const handleinputchange = ( e) => {
    setiserror(false)
    setInputText(e.target.value)
  }
  const handlepasswordchange = ( e) => {
    setiserror(false)
    setInputText1(e.target.value)
  }

    const handleSelectContact1 = ( e) => {
      e.preventDefault(); // Prevents the default link behavior
      if(inputText==="demo" && inputText1==="abc123"){
        setiserror(false)
        navigate(routes.WebIndex );
      }
       else{
        setiserror(true)
       }
      // navigate(routes.index, { state: contact });
    };
  return (
  <div className="container-fluid">
    <Scrollbars>
    <div className="login-wrapper">
      <header className="logo-header">
        <Link to={routes.index} className="logo-brand">
          {/* <ImageWithBasePath src={loginlogo} alt="Logo" height={70} className="img-fluid logo-dark" /> */}
          <img
      className="img-fluid logo-dark"
      src={loginlogo}
     style={{height:'60px'}}
    />
          <h5 style={{marginLeft:'-13px',fontSize:'24px'}}>SKM ChatConnect</h5>
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
                <Link to={routes.phoneLogin}>
                  Phone Number
                </Link>
              </span>
            </div>
          </div>
          <form>
          <Message severity="error"
                style={{
                   
                    display:`${iserror ? "inline-block":"none"}`
                }}
                className={`border-primary w-full justify-content-start `}  
                text="InValid Credentials"
                
                
            />
            <div className="form-group">
              <label className="form-label">UserName <span>*</span></label>
              <input value={inputText}
                    onChange={handleinputchange} type="text" className="form-control" />
            </div>
            <div className="form-group">
              <label className="form-label">Password <span>*</span></label>
              <div className="pass-group">
                <input value={inputText1}
                    onChange={handlepasswordchange} type="password" className="form-control pass-input" />
                <span className="fas fa-eye toggle-password" />
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
            <Link  onClick={(e) => handleSelectContact1( e)} className="btn btn-primary w-100 btn-size justify-content-center">Login</Link>
            <div className="login-or">
              <span className="span-or-log">or Login With</span>
            </div>
            <div className="form-group mb-0">
              <ul className="social-login d-flex align-items-center">
                <li className="text-center">
                  <Link to="#" className="d-flex align-items-center justify-content-center">
                    {/* <ImageWithBasePath src="assets/img/icons/google.svg" className="img-fluid" alt="Google" /> */}
                    <img
      className="img-fluid"
      src={google}
      height='auto'
      alt="google"
      width="100%"
      id="google"
    />
                    <span>Google</span>
                  </Link>
                </li>
                <li className="text-center">
                  <Link to="#" className="d-flex align-items-center justify-content-center">
                    {/* <ImageWithBasePath src="assets/img/icons/facebook.svg" className="img-fluid" alt="Facebook" /> */}
                    <img
      className="img-fluid"
      src={facebook}
      height='auto'
      alt="Facebook"
      width="100%"
      id="facebook"
    />
                    <span>Facebook</span>
                  </Link>
                </li>
                <li className="text-center">
                  <Link to="#" className="d-flex align-items-center justify-content-center">
                    {/* <ImageWithBasePath src="assets/img/icons/apple.svg" className="img-fluid" alt="Apple" /> */}
                    <img
      className="img-fluid"
      src={Apple}
      height='auto'
      alt="image"
      width="100%"
      id="apple"
    />
                    <span>Apple</span>
                  </Link>
                </li>
              </ul>
            </div>
            <div className="bottom-text text-center">
              <p>Don’t have account? <Link to={routes.register}>Sign up!</Link></p>
            </div>
          </form>
        </div>
      </div>                
    </div>  
    </Scrollbars>          
  </div>
 
  )
}

export default EmailLogin