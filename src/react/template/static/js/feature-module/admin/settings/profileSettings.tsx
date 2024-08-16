import React from 'react'
import { Link } from 'react-router-dom'

const ProfileSettings = () => {
  return (
    <div>
<div className="page-wrapper profile-set-wrapper">
  <div className="content container-fluid profile-set-content">
    <div className="page-header">
      <div className="page-title">
        <h4>Profile Setting</h4>
      </div>
    </div>
    <div className="row">
      <div className="col-md-12 d-flex profile-card">
        {/* Profile Pic */}
        <div className="card card-table flex-fill card-details">
          <div className="profile-photo-wrapper d-flex align-items-center">
            <div className="profile-photo">
              <p> Profile Photo</p>
            </div>
            <div className="profile-content">
              <div className="profile-upload">
                <span>
                  <img
                    src="/admin/assets/img/icon/upload.svg"
                    className="img-fluid"
                    alt="Upload"
                  />
                </span>
                Upload Photo
                <input type="file" />
              </div>
              <p>
                For better preview recommended size is 450px x 450px. Max size
                5mb.
              </p>
            </div>
          </div>
        </div>
        {/* /Profile Pic */}
      </div>
      <div className="col-md-12 d-flex profile-card">
        {/* Personal Information */}
        <div className="card card-table flex-fill card-details person-info">
          <div className="person-profile">
            <h4>Personal Information</h4>
          </div>
          <div className="row">
            <div className="col-md-4 col-sm-6">
              <div className="inform-content">
                <label>First Name</label>
                <input type="text" className="form-control" />
              </div>
            </div>
            <div className="col-md-4 col-sm-6">
              <div className="inform-content">
                <label>Last Name</label>
                <input type="text" className="form-control" />
              </div>
            </div>
            <div className="col-md-4 col-sm-6">
              <div className="inform-content">
                <label>User Name</label>
                <input type="text" className="form-control" />
              </div>
            </div>
            <div className="col-md-4 col-sm-6">
              <div className="inform-content">
                <label>Email Address</label>
                <input type="email" className="form-control" />
              </div>
            </div>
            <div className="col-md-4 col-sm-6">
              <div className="inform-content">
                <label>Phone Number</label>
                <input type="text" className="form-control" />
              </div>
            </div>
          </div>
        </div>
        {/* /Personal Information */}
      </div>
      <div className="col-md-12 d-flex profile-card">
        {/* Address Details */}
        <div className="card card-table flex-fill card-details person-info add-details">
          <div className="person-profile">
            <h4>Address Details</h4>
          </div>
          <div className="row">
            <div className="col-md-12">
              <div className="inform-content">
                <label>Address</label>
                <input type="text" className="form-control" />
              </div>
            </div>
            <div className="col-md-3 col-sm-6">
              <div className="inform-content">
                <label>Country</label>
                <input type="text" className="form-control" />
              </div>
            </div>
            <div className="col-md-3 col-sm-6">
              <div className="inform-content">
                <label>State / Province</label>
                <input type="text" className="form-control" />
              </div>
            </div>
            <div className="col-md-3 col-sm-6">
              <div className="inform-content">
                <label>City</label>
                <input type="text" className="form-control" />
              </div>
            </div>
            <div className="col-md-3 col-sm-6">
              <div className="inform-content">
                <label>Postal Code</label>
                <input type="text" className="form-control" />
              </div>
            </div>
          </div>
        </div>
        {/* /Address Details */}
      </div>
      <div className="acc-submit">
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
  )
}

export default ProfileSettings