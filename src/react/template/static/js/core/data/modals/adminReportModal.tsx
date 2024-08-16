import React from 'react'
import ImageWithBasePath from '../img/ImageWithBasePath.tsx'
import { Link } from 'react-router-dom'

const AdminReportModal = () => {
  return (
    


<div>
  {/* New Group */}
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
          <div className="user-profiles-group mb-4">
            <div className="profile-cover text-center">
              <label className="profile-cover-avatar" htmlFor="avatar_upload">
                <ImageWithBasePath className="avatar-img" src="/admin/assets/img/profiles/avatar-02.jpg" alt="Profile Image" />
                <input type="file" id="avatar_upload" />
                <span className="avatar-edit">
                  <i className="bx bx-camera" />
                </span>
              </label>
            </div>
            <form>
              <div className="row">
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
                    <select className="select">
                      <option>Select Country</option>
                      <option>America</option>
                    </select>
                  </div>
                </div>
              </div>
            </form>
          </div>
          <div className="mute-chat-btn">
            <Link to="#" className="btn btn-primary" data-bs-dismiss="modal" aria-label="Close">
              <i className="feather-check me-1" />Add User
            </Link>
            <Link to="#" className="btn btn-secondary" data-bs-dismiss="modal" aria-label="Close">
              <i className="feather-x me-1" />Cancel
            </Link>
          </div>
        </div>       
      </div>
    </div>
  </div>
  {/* /New Group */}
  {/* Report */}
  <div className="modal fade" id="report-reason">
    <div className="modal-dialog modal-dialog-centered">
      <div className="modal-content">
        <div className="modal-header">
          <h5 className="modal-title">
            Report Reason
          </h5>
          <button type="button" className="close" data-bs-dismiss="modal" aria-label="Close">
            <span className="material-icons">close</span>
          </button>
        </div>
        <div className="modal-body">
          <div className="block-user-blk ">
            <p>Directing hate against a protected category (e.g., race, religion, 
              gender, orientation, disability)</p>
          </div>
          <div className="mute-chat-btn ">
            <Link to="#"className="btn btn-primary" data-bs-dismiss="modal" aria-label="Close">
              Ok
            </Link>
            <Link to="#" className="btn btn-secondary" data-bs-dismiss="modal" aria-label="Close">
              Cancel
            </Link>
          </div>
        </div>       
      </div>
    </div>
  </div>
  {/* /Report */}
  {/* Delete User */}
  <div className="modal fade" id="delete-user">
    <div className="modal-dialog modal-dialog-centered">
      <div className="modal-content">
        <div className="modal-header">
          <h5 className="modal-title">
            Delete User
          </h5>
          <button type="button" className="close" data-bs-dismiss="modal" aria-label="Close">
            <span className="material-icons">close</span>
          </button>
        </div>
        <div className="modal-body text-center">
          <div className="block-user-blk ">
            <p>Clearing or deleting entire users will only remove messages from this device</p>
          </div>
          <div className="mute-chat-btn justify-content-center">
            <Link to="#" className="btn btn-primary" data-bs-dismiss="modal" aria-label="Close">
              Continue
            </Link>
            <Link to="#" className="btn btn-secondary" data-bs-dismiss="modal" aria-label="Close">
              Cancel
            </Link>
          </div>
        </div>       
      </div>
    </div>
  </div>
  {/* /Delete User */}
  </div>


   
  )
}

export default AdminReportModal