import React, { useState } from 'react'

const PasswordAndSecurity = () => {
    const [showPassword, setShowPassword] = useState(false);
    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };
    const [showPassword1, setShowPassword1] = useState(false);
    const togglePasswordVisibility1 = () => {
        setShowPassword1(!showPassword1);
    };
    const [showPassword2, setShowPassword2] = useState(false);
    const togglePasswordVisibility2 = () => {
        setShowPassword2(!showPassword2);
    };

    return (
        <>
            {/* Password Authentication */}
            <div className="modal fade" id="password-security">
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title">Password &amp; Security</h5>
                            <button
                                type="button"
                                className="close"
                                data-bs-dismiss="modal"
                                aria-label="Close"
                            >
                                <span className="material-icons">close</span>
                            </button>
                        </div>
                        <div className="modal-body login-security">
                            {/* Card */}
                            <div className="settings-switch">
                                <h6>Security</h6>
                                <ul>
                                    <li className="d-flex align-items-center">
                                        <div>
                                            <span>Use two-factor authentication</span>
                                        </div>
                                        <label className="switch ms-auto">
                                            <input type="checkbox" />
                                            <span className="slider round" />
                                        </label>
                                    </li>
                                </ul>
                            </div>
                            <form action="new-friends">
                                <h6>Change Password</h6>
                                <div className="pass-login">
                                    <label className="form-label">Current Password </label>
                                    <div className="pass-group">
                                        <div>
                                            <input
                                                type={showPassword ? "text" : "password"}
                                                className="form-control pass-input"
                                            />
                                            <span
                                                className={`toggle-password fa-solid fa-eye${showPassword ? '' : '-slash'}`}
                                                onClick={togglePasswordVisibility}
                                            />
                                        </div>
                                    </div>
                                </div>
                                <div className="pass-login">
                                    <label className="form-label">New Password </label>
                                    <div className="pass-group">
                                    <div>
                                            <input
                                                type={showPassword1 ? "text" : "password"}
                                                className="form-control pass-input"
                                            />
                                            <span
                                                className={`toggle-password fa-solid fa-eye${showPassword1 ? '' : '-slash'}`}
                                                onClick={togglePasswordVisibility1}
                                            />
                                        </div>
                                    </div>
                                </div>
                                <div className="pass-login">
                                    <label className="form-label">Confirm Password </label>
                                    <div className="pass-group">
                                    <input
                                                type={showPassword2 ? "text" : "password"}
                                                className="form-control pass-input"
                                            />
                                            <span
                                                className={`toggle-password fa-solid fa-eye${showPassword2 ? '' : '-slash'}`}
                                                onClick={togglePasswordVisibility2}
                                            />
                                    </div>
                                </div>
                            </form>
                            {/* Card */}
                            <div className="mute-chat-btn">
                                <a
                                    className="btn btn-secondary"
                                    data-bs-dismiss="modal"
                                    aria-label="Close"
                                >
                                    <i className="feather-x me-1" />
                                    Cancel
                                </a>
                                <a
                                    className="btn btn-primary"
                                    data-bs-dismiss="modal"
                                    aria-label="Close"
                                >
                                    <i className="feather-check me-1" />
                                    Save Changes
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* /Password Authentication */}
        </>

    )
}

export default PasswordAndSecurity