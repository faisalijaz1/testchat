import React from 'react'
import { Link } from 'react-router-dom'

const StorageSetting = () => {
  return (
    <div>
<>
  {/* Page Wrapper */}
  <div className="page-wrapper profile-set-wrapper">
    <div className="content container-fluid system-set-wrapper">
      <div className="page-header">
        <div className="page-title">
          <h4>Storage</h4>
        </div>
      </div>
      <div className="row location-set">
        <div className="col-md-6 col-12 d-flex">
          <div className="nav-menus nav-store">
            <div className="system-set-logo store-logo d-flex align-items-center">
              <span>
                <img
                  src="./assets/img/icon/local.svg"
                  alt="Logo"
                  className="img-fluid"
                />
              </span>
              <h6>
                <Link
                  to="#"
                  data-bs-toggle="modal"
                  data-bs-target="#"
                >
                  Local Storage
                </Link>
              </h6>
            </div>
            <div className="settings-view">
              <Link to="#" className="me-3 d-flex store-set">
                <i className="bx bx-cog" />
              </Link>
              <div className="active-switch">
                <label className="switch">
                  <input type="checkbox" defaultChecked={true} />
                  <span className="sliders round" />
                </label>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-6 col-12 d-flex">
          <div className="nav-menus nav-store mb-0">
            <div className="system-set-logo store-logo d-flex align-items-center">
              <span>
                <img
                  src="./assets/img/icon/aws.svg"
                  alt="Logo"
                  className="img-fluid"
                />
              </span>
              <h6>
                <Link to="#">AWS</Link>
              </h6>
            </div>
            <div className="settings-view">
              <Link
                to="#"
                className="me-3 d-flex store-set"
                data-bs-toggle="modal"
                data-bs-target="#aws-cap"
              >
                <i className="bx bx-cog" />
              </Link>
              <div className="active-switch">
                <label className="switch">
                  <input type="checkbox" defaultChecked={true} />
                  <span className="sliders round" />
                </label>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* /Page Wrapper */}
  {/* Google Captcha  */}
  <div className="modal fade custom-modal verify-modal" id="aws-cap">
    <div className="modal-dialog modal-dialog-centered">
      <div className="modal-content Set-google-capt">
        <div className="captcha-header d-flex align-items-center justify-content-between">
          <h4>AWS Settings</h4>
          <div className="aws-setting">
            <div className="active-switch aws-act-set">
              <label className="switch">
                <input type="checkbox" defaultChecked={true} />
                <span className="sliders round" />
              </label>
            </div>
            <span>
              <Link to="">
                <i className="feather-x" />
              </Link>
            </span>
          </div>
        </div>
        <div className="modaled-body">
          <form action="#">
            <label>
              AWS Access Key <span> * </span>
            </label>
            <input type="text" className="form-control" />
            <label>
              Secret Key <span> * </span>
            </label>
            <input type="text" className="form-control" />
            <label>
              Bucket Name <span> * </span>
            </label>
            <input type="text" className="form-control" />
            <label>
              Region <span> * </span>
            </label>
            <input type="text" className="form-control" />
            <label>
              Base URL <span> * </span>
            </label>
            <input type="text" className="form-control" />
          </form>
        </div>
        <div className="acc-submited">
          <Link to="" className="btn btn-primary">
            Submit
          </Link>
          <Link to="" className="btn btn-secondary">
            Cancel
          </Link>
        </div>
      </div>
    </div>
  </div>
  {/* /Google Captcha  */}
</>

    </div>
  )
}

export default StorageSetting