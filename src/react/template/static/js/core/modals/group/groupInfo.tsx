import { DatePicker } from "antd";
import React from "react";
import ImageWithBasePath from "../../data/img/ImageWithBasePath.tsx";

const GroupInfo = () => {
  return (
    <>
      {/* Account */}
      <div className="modal fade " id="edit-setting-condition">
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Group Info</h5>
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
              <div className="user-profiles-group mb-4">
                <div className="profile-cover text-center">
                  <label className="profile-cover-avatar">
                    <ImageWithBasePath
                      className="avatar-img"
                      src="assets/img/avatar/avatar-2.jpg"
                      alt="Profile Image"
                    />
                    <input type="file" id="avatar_upload_img" />
                    <span className="avatar-edit">
                      <ImageWithBasePath src="assets/img/icon/camera.svg" alt="Image" />
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
                        <select className="select pass-login-dropdown">
                          <option>Male</option>
                          <option>Female</option>
                          <option>Trans-Gender</option>
                        </select>
                      </div>
                    </div>
                    <div className="col-sm-12">
                      <div className="form-group">
                        <label className="form-control-label">
                          Date of Birth <span>*</span>
                        </label>
                        <div className="cal-icon">
                          <span>
                            <ImageWithBasePath
                              src="assets/img/icon/calendar.svg"
                              alt="Icon"
                            />
                          </span>
                          <DatePicker
                            className="form-control"
                            placeholder="Select Date"
                            format="DD-MM-YYYY"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="col-sm-12">
                      <div className="pass-login">
                        <label className="form-label">Country </label>
                        <select className="select pass-login-dropdown">
                          <option>India</option>
                          <option>USA</option>
                          <option>China</option>
                        </select>
                      </div>
                    </div>
                    <div className="col-sm-12">
                      <div className="pass-login">
                        <label className="form-label">About</label>
                        <textarea className="form-control " defaultValue={""} />
                      </div>
                    </div>
                  </div>
                </form>
              </div>
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
                  data-bs-toggle="modal"
                  data-bs-target="#group-parti"
                >
                  <i className="feather-check me-1" />
                  Save Changes
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* /Account */}
    </>
  );
};

export default GroupInfo;
