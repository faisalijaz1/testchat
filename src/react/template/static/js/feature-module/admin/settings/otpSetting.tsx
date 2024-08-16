import React from "react";
import { Link } from "react-router-dom";
import Select, { StylesConfig } from "react-select";

const OtpSetting = () => {
  const phone = [
    { value: "SMS", label: "SMS" },
    { value: "Mail", label: "Mail" },
  ];
  const digital = [
    { value: "4", label: "4" },
    { value: "5", label: "5" },
    { value: "6", label: "6" },
  ];
  const otp = [
    { value: "5 Mins", label: "5 Mins" },
    { value: "10 Mins", label: "10 Mins" },
    { value: "15 Mins", label: "15 Mins" },
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
    <div className="page-wrapper profile-set-wrapper">
      <div className="content container-fluid profile-set-content">
        <div className="page-header">
          <div className="page-title">
            <h4>OTP Setting</h4>
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <div className="noti-header card">
              <div className="noti-wrapper local-wrapper d-flex align-items-center justify-content-between">
                <div className="local-set-head">
                  <h6>OTP Type</h6>
                  <p>Your can configure the type</p>
                </div>
                <div className="drop-eng otp-custom customize-select">
                  <Select
                    className="select  otpselect"
                    options={phone}
                    placeholder="SMS"
                    styles={customStyles}
                  />
                </div>
              </div>
              <div className="noti-wrapper local-wrapper d-flex align-items-center justify-content-between">
                <div className="local-set-head">
                  <h6>OTP Digit Limit</h6>
                  <p>Select size of the format</p>
                </div>
                <div className="drop-eng otp-custom customize-select">
                  <Select
                    className="select  otpselect"
                    options={digital}
                    placeholder="4"
                    styles={customStyles}
                  />
                </div>
              </div>
              <div className="noti-wrapper local-wrapper mb-0 d-flex align-items-center justify-content-between">
                <div className="local-set-head">
                  <h6>OTP Expire Time</h6>
                  <p>Select expire time of OTP </p>
                </div>
                <div className="drop-eng otp-custom customize-select">
                  <Select
                    className="select  otpselect"
                    options={otp}
                    placeholder="5 Min"
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
  );
};

export default OtpSetting;
