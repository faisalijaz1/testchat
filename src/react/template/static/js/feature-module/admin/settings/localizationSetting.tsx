import React from "react";
import { Link } from "react-router-dom";
import Select, { StylesConfig } from "react-select";

const LocalizationSetting = () => {
  const privacy = [
    { value: "English", label: "English" },
    { value: "Arabic", label: "Arabic" },
    { value: "Chinese", label: "Chinese" },
  ];
  const time = [
    { value: "Calcutta (+5:30)", label: "Calcutta (+5:30)" },
    { value: "Beirut (+2:00)", label: "Beirut (+2:00)" },
  ];
  const date = [
    { value: "09 Aug 2023", label: "09 Aug 2023" },
    { value: "May 10 2023", label: "May 10 2023" },
  ];
  const timeformat = [
    { value: "12 Hours", label: "12 Hours" },
    { value: "24 Hours", label: "24 Hours" },
  ];
  const year = [
    { value: "2024", label: "2024" },
    { value: "2025", label: "2025" },
    { value: "2026", label: "2026" },
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
                <h4>Localization Setting</h4>
              </div>
            </div>
            <div className="row">
              <div className="col-12">
                <div className="noti-header card">
                  <div className="noti-wrapper local-wrapper d-flex align-items-center justify-content-between">
                    <div className="local-set-head">
                      <h6>Language</h6>
                      <p>Select Language of the Website</p>
                    </div>
                    <div className="drop-eng customize-select">
                      <Select
                        className="select w-100 settingselect"
                        options={privacy}
                        placeholder="English"
                        styles={customStyles}
                      />
                    </div>
                  </div>
                  <div className="noti-wrapper local-wrapper d-flex align-items-center justify-content-between">
                    <div className="local-set-head">
                      <h6>Language Switcher</h6>
                      <p>To Display in all the pages</p>
                    </div>
                    <div className="active-switch">
                      <label className="switch">
                        <input type="checkbox" defaultChecked="" />
                        <span className="sliders round" />
                      </label>
                    </div>
                  </div>
                  <div className="noti-wrapper local-wrapper d-flex align-items-center justify-content-between">
                    <div className="local-set-head">
                      <h6>Time Zone</h6>
                      <p>Select Time zone in website</p>
                    </div>
                    <div className="drop-eng customize-select">
                     
                      <Select
                        className="select w-100 settingselect"
                        options={time}
                        placeholder="Calcutta (+5:30)"
                        styles={customStyles}
                      />
                    </div>
                  </div>
                  <div className="noti-wrapper local-wrapper d-flex align-items-center justify-content-between">
                    <div className="local-set-head">
                      <h6>Date Format</h6>
                      <p>Select date format to display in website</p>
                    </div>
                    <div className="drop-eng customize-select">
                    <Select
                        className="select w-100 settingselect"
                        options={date}
                        placeholder="09 Aug 2023"
                        styles={customStyles}
                      />
                    </div>
                  </div>
                  <div className="noti-wrapper local-wrapper d-flex align-items-center justify-content-between">
                    <div className="local-set-head">
                      <h6>Time Format</h6>
                      <p>Select time format to display in website</p>
                    </div>
                    <div className="drop-eng customize-select">
                      
                      <Select
                        className="select w-100 settingselect"
                        options={timeformat}
                        placeholder="12 Hours"
                        styles={customStyles}
                      />
                    </div>
                  </div>
                  <div className="noti-wrapper local-wrapper d-flex align-items-center justify-content-between">
                    <div className="local-set-head">
                      <h6>Financial Year</h6>
                      <p>Select year for finance</p>
                    </div>
                    <div className="drop-eng customize-select">
                    <Select
                        className="select w-100 settingselect"
                        options={year}
                        placeholder="2024"
                        styles={customStyles}
                      />
                    </div>
                  </div>
                  <div className="noti-wrapper local-wrapper mb-0 d-flex align-items-center justify-content-between">
                    <div className="local-set-head">
                      <h6>Starting Month</h6>
                      <p>Select year for finance</p>
                    </div>
                    <div className="drop-eng customize-select">
                    <Select
                        className="select w-100 settingselect"
                        options={year}
                        placeholder="January"
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
  );
};

export default LocalizationSetting;
