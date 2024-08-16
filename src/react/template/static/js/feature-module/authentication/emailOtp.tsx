import React from 'react'
import { Link } from 'react-router-dom'
import { all_routes } from '../router/all_routes.tsx'

const EmailOtp = () => {
    const routes = all_routes;
  return (
   <div className="login-content-info">
  <div className="container-fluid">
    {/* Login Phone Otp */}
    <div className="row">
      <div className="account-content login-wrapper justify-content-center">
        <div className="account-info">
          <header className="logo-header">
            <Link to={routes.index} className="logo-brand">
              <img src="./assets/img/login-logo.png" alt="Logo" className="img-fluid logo-dark" />
              <h5>DREAMSCHAT</h5>
            </Link>
          </header>
          <div className="login-inbox">
            <div className="log-auth">
              <div className="login-verify-img">
                <img src="assets/img/icons/mail-otp.svg" alt="mobile-icon" className="img-fluid" />
              </div>
              <div className="login-title">
                <h3>Email OTP Verification</h3>
                <p className="mb-0">OTP sent to your Email Address ending <span>info@******.com</span></p>
              </div>
              <form method="get" className="digit-group login-form-control" data-group-name="digits" data-autosubmit="false" autoComplete="off" action={routes.emailLogin}>
                <div className="otp-box">
                  <div className="forms-block">
                    <input type="text" id="digit-1" name="digit-1" data-next="digit-2" maxLength={1} placeholder="9" />
                    <input type="text" id="digit-2" name="digit-2" data-next="digit-3" data-previous="digit-1" maxLength={1} placeholder="4" />
                    <input type="text" id="digit-3" name="digit-3" data-next="digit-4" data-previous="digit-2" maxLength={1} />
                    <input type="text" id="digit-4" name="digit-4" data-next="digit-5" data-previous="digit-3" maxLength={1} />
                  </div>
                </div>
                <div className="forms-block">
                  <div className="otp-info d-flex align-items-center justify-content-between">
                    <div className="otp-code d-flex align-items-center mb-0">
                      <p className="mb-0">Didn&apos;t receive OTP code?</p>
                      <Link to="#">Resend Code</Link>
                    </div>
                    <div className="otp-sec">
                      <p className=" badge align-items-center"><i className="feather-clock" /> 00:25 secs</p>
                    </div>
                  </div>
                </div>
                <div className="reset-btn">
                  <button className="btn btn-primary w-100 justify-content-center" type="submit">Verify And Proceed</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
    {/* /Login Phone Otp */}
  </div>
</div>

  )
}

export default EmailOtp