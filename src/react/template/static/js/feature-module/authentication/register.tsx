import React, { useState } from 'react'
import * as Icon from 'react-feather';
import { Link } from 'react-router-dom';
import ImageWithBasePath from '../../core/data/img/ImageWithBasePath.tsx';
import { all_routes } from '../router/all_routes.tsx';

const Register = () => {
    const routes = all_routes
    const [passwordVisibility, setPasswordVisibility] = useState([false, false]);
    const togglePasswordVisibility = (index: number) => {
        const updatedVisibility = [...passwordVisibility];
        updatedVisibility[index] = !updatedVisibility[index];
        setPasswordVisibility(updatedVisibility);
    };
    const [password, setPassword] = useState('');
    const [passwordResponce, setPasswordResponce] = useState({
        passwordResponceText: '',
        passwordResponceKey: '',
    });

    const onChangePassword = (password: string) => {
        setPassword(password);
        if (password.match(/^$|\s+/)) {
            setPasswordResponce({
                passwordResponceText: '',
                passwordResponceKey: '',
            });
        } else if (password.length === 0) {
            setPasswordResponce({
                passwordResponceText: '',
                passwordResponceKey: '',
            });
        } else if (password.length < 8) {
            setPasswordResponce({
                passwordResponceText: '',
                passwordResponceKey: '0',
            });
        } else if (
            password.search(/[a-z]/) < 0 ||
            password.search(/[A-Z]/) < 0 ||
            password.search(/[0-9]/) < 0
        ) {
            setPasswordResponce({
                passwordResponceText:
                    '',
                passwordResponceKey: '1',
            });
        } else if (password.search(/(?=.*?[#?!@$%^&*-])/) < 0) {
            setPasswordResponce({
                passwordResponceText: '',
                passwordResponceKey: '2',
            });
        } else {
            setPasswordResponce({
                passwordResponceText: '',
                passwordResponceKey: '3',
            });
        }
    };


    return (
        <>
            <div className='login-form'>
                {/* Main Wrapper */}
                <div className="register-surv">
                    <div className="content-field d-flex align-items-center w-100 p-0">
                        <div className="login-group-left">
                            <div className="login-wrapper register-wrapper">
                                <header className="logo-header">
                                    <Link to={routes.index} className="logo-brand">
                                        <ImageWithBasePath
                                            src="/assets/img/login-logo.png"
                                            alt="Logo"
                                            className="img-fluid logo-dark"
                                        />
                                        <h5>DREAMSCHAT</h5>
                                    </Link>
                                </header>
                                <div className="login-inbox">
                                    <div className="log-auth register-auth">
                                        <div className="login-auth-wrap">
                                            <div className="login-content-head">
                                                <h3>Sign Up</h3>
                                            </div>
                                        </div>
                                        <form>
                                            <div className="row">
                                                <div className="col-sm-6">
                                                    <div className="form-group">
                                                        <label className="form-label">
                                                            First Name <span>*</span>
                                                        </label>
                                                        <input type="text" className="form-control" />
                                                    </div>
                                                </div>
                                                <div className="col-sm-6">
                                                    <div className="form-group">
                                                        <label className="form-label">
                                                            Last Name <span>*</span>
                                                        </label>
                                                        <input type="text" className="form-control" />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="form-group">
                                                <label className="form-label">
                                                    Email Address <span>*</span>
                                                </label>
                                                <input type="email" className="form-control" />
                                            </div>
                                            <div className="form-group">
                                                <label className="form-label">
                                                    Phone Number <span>*</span>
                                                </label>
                                                <input
                                                    className="form-control form-control-lg group_formcontrol"
                                                    id="phone"
                                                    name="phone"
                                                    type="text"
                                                />
                                            </div>
                                            <div className="form-group">
                                                <label className="form-label">
                                                    Username <span>*</span>
                                                </label>
                                                <input type="text" className="form-control" />
                                            </div>
                                            <div className="form-group">
                                                <label className="form-label">
                                                    Password <span>*</span>
                                                </label>
                                                <div className="pass-group" id="passwordInput">
                                                    <div>
                                                        <input
                                                            type={passwordVisibility[0] ? 'text' : 'password'}
                                                            value={password}
                                                            onChange={(e) => onChangePassword(e.target.value)}
                                                            className="form-control pass-input"

                                                        />
                                                        <span
                                                            className="toggle-password"
                                                            onClick={() => togglePasswordVisibility(0)}
                                                        >
                                                            {passwordVisibility[0] ? (
                                                                <Icon.Eye className="react-feather-custom" size={18} />
                                                            ) : (
                                                                <Icon.EyeOff className="react-feather-custom" size={18} />
                                                            )}
                                                        </span>
                                                    </div>
                                                </div>
                                                <div
                                                    className={`password-strength ${passwordResponce.passwordResponceKey === '0'
                                                            ? 'poor-active'
                                                            : passwordResponce.passwordResponceKey === '1'
                                                                ? 'avg-active'
                                                                : passwordResponce.passwordResponceKey === '2'
                                                                    ? 'strong-active'
                                                                    : passwordResponce.passwordResponceKey === '3'
                                                                        ? 'heavy-active'
                                                                        : ''
                                                        }`}
                                                    id="passwordStrength"
                                                >
                                                    <span id="poor" className="active"></span>
                                                    <span id="weak" className="active"></span>
                                                    <span id="strong" className="active"></span>
                                                    <span id="heavy" className="active"></span>
                                                </div>
                                                <div
                                                    id="passwordInfo"
                                                    className={
                                                        passwordResponce.passwordResponceKey === '0'
                                                            ? 'weak'
                                                            : passwordResponce.passwordResponceKey === '1'
                                                                ? 'average'
                                                                : passwordResponce.passwordResponceKey === '2'
                                                                    ? 'good'
                                                                    : passwordResponce.passwordResponceKey === '3'
                                                                        ? 'great'
                                                                        : ''
                                                    }
                                                >
                                                    {passwordResponce.passwordResponceText}
                                                </div>
                                            </div>
                                            <div className="form-group form-remember d-flex align-items-center justify-content-between">
                                                <div className="form-check d-flex align-items-center justify-content-start ps-0">
                                                    <label className="custom-check mt-0 mb-0">
                                                        <span className="remember-me">
                                                            I Agree to <Link to="#">Terms</Link> of Use and{" "}
                                                            <Link to="#">Privacy Policy</Link>
                                                        </span>
                                                        <input type="checkbox" name="remeber" />
                                                        <span className="checkmark" />
                                                    </label>
                                                </div>
                                            </div>
                                            <button
                                                type="submit"
                                                className="btn btn-primary w-100 btn-size justify-content-center"
                                            >
                                                Sign Up
                                            </button>
                                            <div className="login-or">
                                                <span className="span-or-log">or Login With</span>
                                            </div>
                                            <div className="form-group mb-0">
                                                <ul className="social-login d-flex align-items-center">
                                                    <li className="text-center">
                                                        <Link
                                                            to="#"
                                                            className="d-flex align-items-center justify-content-center"
                                                        >
                                                            <ImageWithBasePath
                                                                src="/assets/img/icons/google.svg"
                                                                className="img-fluid"
                                                                alt="Google"
                                                            />
                                                            <span>Google</span>
                                                        </Link>
                                                    </li>
                                                    <li className="text-center">
                                                        <Link
                                                            to="#"
                                                            className="d-flex align-items-center justify-content-center"
                                                        >
                                                            <ImageWithBasePath
                                                                src="/assets/img/icons/facebook.svg"
                                                                className="img-fluid"
                                                                alt="Facebook"
                                                            />
                                                            <span>Facebook</span>
                                                        </Link>
                                                    </li>
                                                    <li className="text-center">
                                                        <Link
                                                            to="#"
                                                            className="d-flex align-items-center justify-content-center"
                                                        >
                                                            <ImageWithBasePath
                                                                src="/assets/img/icons/apple.svg"
                                                                className="img-fluid"
                                                                alt="Apple"
                                                            />
                                                            <span>Apple</span>
                                                        </Link>
                                                    </li>
                                                </ul>
                                            </div>
                                            <div className="bottom-text text-center">
                                                <p>
                                                    Already Have An Account?{" "}
                                                    <Link to={routes.emailLogin}>Login</Link>
                                                </p>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* /Main Wrapper */}
            </div>
        </>

    )
}

export default Register
