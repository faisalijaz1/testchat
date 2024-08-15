import React, { useState } from 'react'
import PhoneInput from 'react-phone-number-input'

const DeleteAccount = () => {
    const [phone, setPhone] = useState<string>(''); // Ensure that the type of value matches E164Number or undefined

    const handlePhoneChange = (value: string) => {
        setPhone(value);
    };

    return (
        <>
            {/* Logout */}
            <div className="modal fade " id="delete-account">
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title">Delete My Account</h5>
                            <button
                                type="button"
                                className="close"
                                data-bs-dismiss="modal"
                                aria-label="Close"
                            >
                                <span className="material-icons">close</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            <div className="logout-group mb-4">
                                <p>Delete your account info and profile photo</p>
                                <p>Delete you from all dreamschat groups</p>
                                <p>
                                    Delete your message history on this phone and your icloud backup
                                </p>
                                <div className="form-group">
                                    <label className="form-label">
                                        Phone Number <span>*</span>
                                    </label>

                                    <PhoneInput
                                        placeholder="Enter phone number"
                                        value={phone}
                                        onChange={handlePhoneChange}
                                        inputProps={{
                                            className: "form-control form-control-lg group_formcontrol"
                                        }}
                                    />
                                </div>
                            </div>
                            <div className="mute-chat-btn">
                                <a
                                    className="btn btn-secondary"
                                    data-bs-dismiss="modal"
                                    aria-label="Close"
                                >
                                    Cancel
                                </a>
                                <a
                                    className="btn btn-primary"
                                    data-bs-dismiss="modal"
                                    aria-label="Close"
                                >
                                    Delete My Account
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* /Logout */}
        </>

    )
}

export default DeleteAccount
