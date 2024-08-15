import React, { useState } from 'react'
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { Link } from 'react-router-dom';
import Select, { StylesConfig } from "react-select";
import ImageWithBasePath from '../../data/img/ImageWithBasePath.tsx';

const AccountSettings = () => {
 
      const [selectedDate, setSelectedDate] = useState<Date | null>(null);

      const handleDateChange = (date: Date | null) => {
          setSelectedDate(date);
      };
      const optionsChoose = [
        { value: "India", label: "India" },
        { value: "USA", label: "USA" },
        { value: "China", label: "China" },
      ];
      const gender = [
        { value: "Male", label: "Male" },
        { value: "Female", label: "Female" },
        { value: "Trans-Gender", label: "Trans-Gender" },
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
    <>
    {/* Account */}
    <div className="modal fade " id="edit-setting-condition">
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">Account Setting</h5>
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
            <div className="user-profiles-group ">
              <div className="profile-cover text-center">
                <label className="profile-cover-avatar">
                  <ImageWithBasePath
                    className="avatar-img"
                    src="/assets/img/avatar/avatar-2.jpg"
                    alt="Profile Image"
                  />
                  <input type="file" id="avatar_upload_img" />
                  <span className="avatar-edit">
                    <ImageWithBasePath src="/assets/img/icon/camera.svg" alt="Image" />
                  </span>
                </label>
              </div>
              <form action="#">
                <div className="row">
                  <div className="col-sm-6">
                    <div className="pass-login ">
                      <label className="form-label">
                        First Name <span>*</span>
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        defaultValue="Alexander"
                      />
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="pass-login">
                      <label className="form-label">
                        Last Name <span>*</span>
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        defaultValue="Manuel"
                      />
                    </div>
                  </div>
                  <div className="col-sm-12">
                    <div className="pass-login">
                      <label className="form-label">Gender </label>
                     
                      <Select
                            className="select pass-login-dropdown"
                            options={gender}
                            placeholder="Male"
                            styles={customStyles}
                          />
                    </div>
                  </div>
                  <div className="col-sm-12">
                    <div className="form-group">
                      <label className="form-control-label">
                        Date of Birth <span>*</span>
                      </label>
                      <div className="cal-icon">
                        <span>
                          <ImageWithBasePath src="/assets/img/icon/calendar.svg" alt="Icon" />
                        </span>
                         <DatePicker
                          selected={selectedDate}
                          onChange={handleDateChange}
                          dateFormat="dd/MM/yyyy"
                          placeholderText="19-09-2023"
                          className="form-control datetimepicker"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-12">
                    <div className="pass-login">
                      <label className="form-label">Country </label>
                      <Select
                            className="select pass-login-dropdown"
                            options={optionsChoose}
                            placeholder="India"
                            styles={customStyles}
                          />
                    </div>
                  </div>
                  <div className="col-sm-12">
                    <div className="pass-login">
                      <label className="form-label">About</label>
                      <textarea className="form-control " defaultValue={""} />
                    </div>
                  </div>
                </div>
                <div className="mute-chat-btn">
                  <Link
                    to="#"
                    className="btn btn-secondary"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                  >
                    <i className="feather-x me-1" />
                    Cancel
                  </Link>
                  <Link
                    to="#"
                    className="btn btn-primary"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                  >
                    <i className="feather-check me-1" />
                    Save Changes
                  </Link>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
    {/* /Account */}
  </>
  
  )
}

export default AccountSettings
