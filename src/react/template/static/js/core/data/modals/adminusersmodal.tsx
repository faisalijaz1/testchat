import React from 'react'
import ImageWithBasePath from '../img/ImageWithBasePath.tsx'
import Select, { StylesConfig } from 'react-select';

const AdminUsersmodal = () => {
  const callList = [
    { value: "Select Country", label: "Select Country" },
    { value: "America", label: "America" },
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
  {/* Add Users  */}
  <div className="modal fade " id="add-users">
    <div className="modal-dialog modal-dialog-centered">
      <div className="modal-content">
        <div className="modal-header">
          <h5 className="modal-title">
            Add Users 
          </h5>
          <button type="button" className="close" data-bs-dismiss="modal" aria-label="Close">
            <span className="material-icons">close</span>
          </button>
        </div>
        <div className="modal-body">
          <div className="user-profiles-group ">
            <div className="profile-cover text-center">
              <label className="profile-cover-avatar" htmlFor="avatar_upload">
                <span className="empty-user"><i className="bx bxs-user" /></span>
                <input type="file" id="avatar_upload" />
                <span className="avatar-edit">
                  <i className="bx bx-camera" />
                </span>
              </label>
            </div>
            <form action="#">
              <div className="row mb-4">
                <div className="col-md-6">
                  <div className="pass-login">
                    <label className="form-label">First Name <span className="dark-red">*</span></label>
                    <input type="password" className="form-control pass-input" />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="pass-login">
                    <label className="form-label">Last Name <span className="dark-red">*</span></label>
                    <input type="password" className="form-control pass-input" />
                  </div>
                </div>
                <div className="col-md-12">
                  <div className="pass-login">
                    <label className="form-label">Email Addess <span className="dark-red">*</span></label>
                    <input type="email" className="form-control pass-input" />
                  </div>
                </div>
                <div className="col-md-12">
                  <div className="pass-login">
                    <label className="form-label">Phone Number <span className="dark-red">*</span></label>
                    <input className="form-control form-control-lg group_formcontrol" id="phone" name="phone" type="text" />
                  </div>
                </div>
                <div className="col-md-12">
                  <div className="pass-login">
                    <label className="form-label">Country</label>
                    
                    <Select
                              className="select w-100"
                              options={callList}
                              placeholder="Select Country"
                              styles={customStyles}
                            />
                  </div>
                </div>
              </div>
              <div className="mute-chat-btn">
                <button type="submit" className="btn btn-primary" data-bs-dismiss="modal" aria-label="Close">
                  <i className="feather-check me-1" />Add User
                </button>
                <button type="submit" className="btn btn-secondary" data-bs-dismiss="modal" aria-label="Close">
                  <i className="feather-x me-1" />Cancel
                </button>
              </div>
            </form>
          </div>
        </div>       
      </div>
    </div>
  </div>
  {/* /Add Users  */}
  {/* Edit Users   */}
  <div className="modal fade " id="edit-users">
    <div className="modal-dialog modal-dialog-centered">
      <div className="modal-content">
        <div className="modal-header">
          <h5 className="modal-title">
            Edit Users 
          </h5>
          <button type="button" className="close" data-bs-dismiss="modal" aria-label="Close">
            <span className="material-icons">close</span>
          </button>
        </div>
        <div className="modal-body">
          <div className="user-profiles-group mb-4">
            <div className="profile-cover text-center">
              <label className="profile-cover-avatar" htmlFor="edit_avatar_upload">
                <ImageWithBasePath className="avatar-img" src="/admin/assets/img/profiles/avatar-02.jpg" alt="Profile Image" />
                <input type="file" id="edit_avatar_upload" />
                <span className="avatar-edit">
                  <i className="bx bx-camera" />
                </span>
              </label>
            </div>
            <form action="#">
              <div className="row">
                <div className="col-md-6">
                  <div className="pass-login">
                    <label className="form-label">First Name <span className="dark-red">*</span></label>
                    <input type="text" className="form-control" defaultValue="Alexandar" />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="pass-login">
                    <label className="form-label">Last Name <span className="dark-red">*</span></label>
                    <input type="text" className="form-control" defaultValue=" Manuel" />
                  </div>
                </div>
                <div className="col-md-12">
                  <div className="pass-login">
                    <label className="form-label">Email Addess <span className="dark-red">*</span></label>
                    <input type="email" className="form-control " defaultValue=" alexander@example.com" />
                  </div>
                </div>
                <div className="col-md-12">
                  <div className="pass-login">
                    <label className="form-label">Phone Number <span className="dark-red">*</span></label>
                    <input className="form-control form-control-lg group_formcontrol" id="edit-phone" name="phone" defaultValue="602-555-0119" type="text" />
                  </div>
                </div>
                <div className="col-md-12">
                  <div className="pass-login">
                    <label className="form-label">Country</label>
                    <Select
                              className="select w-100"
                              options={callList}
                              placeholder="Select Country"
                              styles={customStyles}
                            />
                  </div>
                </div>
              </div>
            </form>
          </div>
          <div className="mute-chat-btn">
            <button type="submit" className="btn btn-primary" data-bs-dismiss="modal" aria-label="Close">
              <i className="feather-check me-1" />Save Changes
            </button>
            <button type="submit" className="btn btn-secondary" data-bs-dismiss="modal" aria-label="Close">
              <i className="feather-x me-1" />Cancel
            </button>
          </div>
        </div>       
      </div>
    </div>
  </div>
  {/* /Edit Users   */}</div>

  )
}

export default AdminUsersmodal