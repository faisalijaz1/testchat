import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import { all_routes } from '../router/all_routes.tsx';
import ImageWithBasePath from '../../core/data/img/ImageWithBasePath.tsx';
import * as Icon from 'react-feather';

const ResetPassword = () => {
    const routes = all_routes;
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
    const [showConfirmPassword, setConfirmShowPassword] = useState(false);
    const toggleConfirmPasswordVisibility = () => {
        setConfirmShowPassword(!showConfirmPassword);
    };
    return (
        <>
            {/* Main Wrapper */}
            <div className="main-wrapper register-surv">
                <div className="container-fluid">
                    <div className="login-wrapper">
                        <header className="logo-header">
                            <Link to={routes.home} className="logo-brand">
                                <ImageWithBasePath
                                    src="/assets/img/login-logo.png"
                                    alt="Logo"
                                    className="img-fluid logo-dark"
                                />
                                <h5>DREAMSCHAT</h5>
                            </Link>
                        </header>
                        <div className="login-inbox">
                            <div className="log-auth">
                                <div className="login-auth-wrap">
                                    <div className="login-content-head">
                                        <h3>Reset Password</h3>
                                        <p>
                                            Your new password must be different from previous used
                                            passwords.
                                        </p>
                                    </div>
                                </div>
                                <form>
                                    <div className="form-group">
                                        <label className="form-label">
                                            {" "}
                                            New Password <span>*</span>
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
                                    <div className="form-group reset-group">
                                        <label className="form-label">
                                            Confirm Password <span>*</span>
                                        </label>
                                        <div className="pass-group">
                                            <input
                                                type={showConfirmPassword ? "text" : "password"}
                                                className="form-control pass-input"
                                            />
                                            <span
                                                className={`toggle-password fa-solid fa-eye${showConfirmPassword ? '-slash' : ''}`}
                                                onClick={toggleConfirmPasswordVisibility}
                                            />
                                        </div>
                                    </div>
                                    <Link
                                        to={routes.resetPasswordSuccess}
                                        className="btn btn-primary w-100 btn-size justify-content-center"
                                    >
                                        Save Changes
                                    </Link>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* /Main Wrapper */}
        </>

    )
}

export default ResetPassword
