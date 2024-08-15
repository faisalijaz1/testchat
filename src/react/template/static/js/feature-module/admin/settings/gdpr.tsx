import React from "react";
import Select, { StylesConfig } from "react-select";
import DefaultEditor from 'react-simple-wysiwyg';

const Gdpr = () => {
  const [values, setValue] = React.useState();
  function onChange(e: any) {
    setValue(e.target.value);
  }
  const direction = [
    { value: "Right", label: "Right" },
    { value: "Left", label: "Left" },
  ];
  const agree = [
    { value: "Select Button text", label: "Select Button text" },
    { value: "Agree", label: "Agree" },
    { value: "Ok", label: "Ok" },
  ];
  const decline = [
    { value: "Select Button text", label: "Select Button text" },
    { value: "Decline", label: "Decline" },
    { value: "Ok", label: "Ok" },
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
      <div className="page-wrapper profile-set-wrapper">
        <div className="content container-fluid profile-set-content">
          <div className="page-header">
            <div className="page-title">
              <h4>GDPR (Cookies)</h4>
            </div>
          </div>
          <div className="row">
            <div className="col-12">
              <div className="noti-header card">
                <div className="auth-set-content local-wrapper d-flex align-items-center justify-content-between">
                  <div className="local-set-head">
                    <h6>Cookies Position</h6>
                  </div>
                  <div className="drop-eng otp-custom customize-select">
                    <Select
                      className="select otpselect"
                      options={direction}
                      placeholder="Right"
                      styles={customStyles}
                    />
                  </div>
                </div>
                <div className="auth-set-content local-wrapper d-flex align-items-center justify-content-between">
                  <div className="local-set-head">
                    <h6>Agree Button Text</h6>
                  </div>
                  <div className="drop-eng otp-custom customize-select">
                    <Select
                      className="select otpselect"
                      options={agree}
                      placeholder="Select Button text"
                      styles={customStyles}
                    />
                  </div>
                </div>
                <div className="auth-set-content local-wrapper d-flex align-items-center justify-content-between">
                  <div className="local-set-head">
                    <h6>Decline Button Text</h6>
                  </div>
                  <div className="drop-eng otp-custom customize-select">
                    <Select
                      className="select otpselect"
                      options={decline}
                      placeholder="Select Button text"
                      styles={customStyles}
                    />
                  </div>
                </div>
                <div className="auth-set-content local-wrapper d-flex align-items-center justify-content-between">
                  <div className="local-set-head">
                    <h6>Show Decline Button</h6>
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
                    <h6>Link for Cookies Page</h6>
                  </div>
                  <div className="pass-login">
                    <input type="text" className="form-control" />
                  </div>
                </div>
                <div className="auth-set-content local-wrapper d-flex justify-content-between">
                  <div className="local-set-head">
                    <h6>Cookies Consent Text</h6>
                  </div>
                  <div className="summer-group">
                  <DefaultEditor value={values} onChange={onChange} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gdpr;
