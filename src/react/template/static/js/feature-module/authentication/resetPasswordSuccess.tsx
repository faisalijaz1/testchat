import React from 'react'
import { Link } from 'react-router-dom'
import { all_routes } from '../router/all_routes.tsx'

const ResetPasswordSuccess = () => {
    const routes = all_routes
    return (
        <>
            {/* Main Wrapper */}
            <div className="main-wrapper register-surv">
                <div className="container-fluid">
                    <div className="login-wrapper">
                        <header className="logo-header">
                           <Link to={routes.home} className="logo-brand">
                                <img
                                    src="/assets/img/login-logo.png"
                                    alt="Logo"
                                    className="img-fluid logo-dark"
                                />
                                <h5>DREAMSCHAT</h5>
                            </Link>

                        </header>
                        <div className="login-inbox">
                            <div className="log-auth">
                                <div className="success-pass">
                                    <img
                                        src="/assets/img/avatar/avatar-16.png"
                                        alt="Success"
                                        className="img-fluid"
                                    />
                                </div>
                                <div className="login-auth-wrap">
                                    <div className="login-content-head w-100 text-center">
                                        <h3>Reset Password Success</h3>
                                        <p className="text-center">
                                            Your new password has been successfully saved.
                                            <br />
                                            Now you can login with your new password
                                        </p>
                                    </div>
                                </div>
                               <Link
                                    to={routes.emailLogin}
                                    className="btn btn-primary w-100 btn-size justify-content-center"
                                >
                                    Login
                                </Link>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* /Main Wrapper */}
        </>

    )
}

export default ResetPasswordSuccess
