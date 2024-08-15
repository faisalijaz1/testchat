import React from 'react'
import { Link } from 'react-router-dom'

const WebsiteSettings = () => {
  return (
    <div>
<div className="page-wrapper profile-set-wrapper">
  <div className="content container-fluid profile-set-content">
    <div className="page-header">
      <div className="page-title">
        <h4>Website Setting</h4>
      </div>
    </div>
    <div className="row">
      <div className="col-md-12 d-flex profile-card">
        {/* Company Information */}
        <div className="card card-table flex-fill card-details person-info">
          <div className="person-profile">
            <h4>Company Information</h4>
          </div>
          <div className="row">
            <div className="col-md-4 col-sm-6">
              <div className="inform-content">
                <label>Company Name</label>
                <input type="text" className="form-control" />
              </div>
            </div>
            <div className="col-md-4 col-sm-6">
              <div className="inform-content">
                <label>Company Email Address</label>
                <input type="email" className="form-control" />
              </div>
            </div>
            <div className="col-md-4 col-sm-6">
              <div className="inform-content">
                <label>Phone Number</label>
                <input type="text" className="form-control" />
              </div>
            </div>
            <div className="col-md-4 col-sm-6">
              <div className="inform-content">
                <label>Fax</label>
                <input type="text" className="form-control" />
              </div>
            </div>
            <div className="col-md-4 col-sm-6">
              <div className="inform-content">
                <label>Website</label>
                <input type="text" className="form-control" />
              </div>
            </div>
          </div>
        </div>
        {/* /Company Information */}
      </div>
      <div className="col-md-12 d-flex profile-card">
        {/* Company Image */}
        <div className="card card-table flex-fill card-details person-info">
          <div className="person-profile">
            <h4>Company Image</h4>
          </div>
          <div className="row">
            <div className="col-md-3 col-sm-6">
              <div className="company-content">
                <h6>Company Logo</h6>
                <p>Upload Logo of your Company to display in website</p>
              </div>
            </div>
            <div className="col-md-6 col-sm-6">
              <div className="company-content">
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
                  5MB.
                </p>
              </div>
            </div>
            <div className="col-md-3 col-12 logo-cont">
              <div className="company-content">
                <div className="logo-content logo-space">
                  <img
                    src="/admin/assets/img/logo-dark.png"
                    className="img-fluid"
                    alt="Logo"
                  />
                  <div className="logo-delete">
                    <Link to="#">
                      <i className="bx bx-trash" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-3 col-sm-6">
              <div className="company-content">
                <h6>Company Icon</h6>
                <p>Upload Logo of your Company to display in website</p>
              </div>
            </div>
            <div className="col-md-6 col-sm-6">
              <div className="company-content">
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
                  5MB.
                </p>
              </div>
            </div>
            <div className="col-md-3 col-12">
              <div className="company-content d-flex justify-content-end">
                <div className="logo-content upload-space">
                  <i className="bx bx-camera" />
                </div>
              </div>
            </div>
            <div className="col-md-3 col-sm-6">
              <div className="company-content">
                <h6>Favicon</h6>
                <p>Upload Logo of your Company to display in website</p>
              </div>
            </div>
            <div className="col-md-6 col-sm-6">
              <div className="company-content">
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
                  5MB.
                </p>
              </div>
            </div>
            <div className="col-md-3 col-12 logo-cont">
              <div className="company-content d-flex justify-content-end">
                <div className="logo-content upload-space">
                  <img
                    src="/admin/assets/img/logo1.png"
                    className="img-fluid"
                    alt="Logo"
                  />
                </div>
              </div>
            </div>
            <div className="col-md-3 col-sm-6">
              <div className="company-content">
                <h6>Company Dark Logo</h6>
                <p>Upload Logo of your Company to display in website</p>
              </div>
            </div>
            <div className="col-md-6 col-sm-6">
              <div className="company-content">
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
                  5MB.
                </p>
              </div>
            </div>
            <div className="col-md-3 col-12">
              <div className="company-content">
                <div className="logo-content logo-space bg-logo">
                  <img
                    src="/admin/assets/img/logo.png"
                    className="img-fluid"
                    alt="Logo"
                  />
                  <div className="logo-delete">
                    <Link to="#">
                      <i className="bx bx-trash" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* /Company Image */}
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

export default WebsiteSettings