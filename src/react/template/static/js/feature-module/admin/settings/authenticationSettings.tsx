import React from 'react'
import { Link } from 'react-router-dom'
import Select, { StylesConfig } from "react-select";

const AuthenticationSettings = () => {
  const phone = [
    { value: "60 Mins", label: "60 Mins" },
    { value: "30 Mins", label: "30 Mins" },
    { value: "15 Mins", label: "15 Mins" },
  ];
  const mobile = [
    { value: "Mobile", label: "Mobile" },
    { value: "Email", label: "Email" },
   
  ];
  const text = [
    { value: "SMS OTP", label: "SMS OTP" },
    { value: "Email OTP", label: "Email OTP" },
   
  ];
  const customStyles: StylesConfig = {
    option: (provided, state) => ({
      ...provided,
      backgroundColor: state.isFocused ? "#680A83" : "#fff",
      color: state.isFocused ? "#fff" : "#000",
      "&:hover": {
        backgroundColor: "#680A83",
      },
    }),
  };
  return (
    <div>
        <>
  {/* Page Wrapper */}
  <div className="page-wrapper profile-set-wrapper">
    <div className="content container-fluid profile-set-content">
      <div className="page-header">
        <div className="page-title">
          <h4>Authentication Setting</h4>
        </div>
      </div>
      <div className="row">
        <div className="col-12">
          <div className="noti-header card">
            <div className="auth-set-content local-wrapper d-flex align-items-center justify-content-between">
              <div className="local-set-head">
                <h6>Allow Registration</h6>
              </div>
              <div className="active-switch">
                <label className="switch">
                  <input type="checkbox" defaultChecked="" />
                  <span className="sliders round" />
                </label>
              </div>
            </div>
            <div className="auth-set-content local-wrapper d-flex align-items-center justify-content-between">
              <div className="local-set-head">
                <h6>Verification Required</h6>
              </div>
              <div className="active-switch">
                <label className="switch">
                  <input type="checkbox" />
                  <span className="sliders round" />
                </label>
              </div>
            </div>
            <div className="auth-set-content local-wrapper d-flex align-items-center justify-content-between">
              <div className="local-set-head">
                <h6>Verification Expired</h6>
              </div>
              <div className="drop-eng otp-custom customize-select">
               
                <Select
                    className="select otpselect"
                    options={phone }
                    placeholder="60 Mins"
                    styles={customStyles}
                  />
              </div>
            </div>
            <div className="auth-set-content local-wrapper d-flex align-items-center justify-content-between">
              <div className="local-set-head">
                <h6>Referral System</h6>
              </div>
              <div className="active-switch">
                <label className="switch">
                  <input type="checkbox" defaultChecked="" />
                  <span className="sliders round" />
                </label>
              </div>
            </div>
            <div className="auth-set-content local-wrapper d-flex align-items-center justify-content-between">
              <div className="local-set-head">
                <h6>Login Type</h6>
              </div>
              <div className="drop-eng otp-custom customize-select">
                
                
                <Select
                    className="select otpselect"
                    options={mobile}
                    placeholder="Mobile"
                    styles={customStyles}
                  />
              </div>
            </div>
            <div className="auth-set-content local-wrapper d-flex align-items-center justify-content-between">
              <div className="local-set-head">
                <h6>Password</h6>
              </div>
              <div className="active-switch">
                <label className="switch">
                  <input type="checkbox" defaultChecked="" />
                  <span className="sliders round" />
                </label>
              </div>
            </div>
            <div className="auth-set-content local-wrapper d-flex align-items-center justify-content-between">
              <div className="local-set-head">
                <h6>OTP System</h6>
              </div>
              <div className="active-switch">
                <label className="switch">
                  <input type="checkbox" />
                  <span className="sliders round" />
                </label>
              </div>
            </div>
            <div className="auth-set-content local-wrapper d-flex align-items-center justify-content-between mb-0">
              <div className="local-set-head">
                <h6>OTP Type</h6>
              </div>
              <div className="drop-eng otp-custom customize-select">
                
                <Select
                    className="select otpselect"
                    options={text}
                    placeholder="SMS OTP"
                    styles={customStyles}
                  />
              </div>
            </div>
          </div>
          <div className="acc-submit wrapp-set-system">
            <Link to="#" className="btn btn-secondary">
              Cancel
            </Link>
            <Link to="#" className="btn btn-primary">
              Save Changes
            </Link>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* /Page Wrapper */}
</>

    </div>
  )
}

export default AuthenticationSettings