import React from 'react'
import { Link } from 'react-router-dom'

const SmsSetting = () => {
  return (
    <div>
        <>
  {/* Page Wrapper */}
  <div className="page-wrapper profile-set-wrapper">
    <div className="content container-fluid system-set-wrapper">
      <div className="page-header">
        <div className="page-title">
          <h4>SMS Setting</h4>
        </div>
      </div>
      <div className="row location-set">
        <div className="col-lg-4 col-sm-6 col-12 d-flex">
          <div className="nav-menus">
            <Link to="#">
              <img src="/admin/assets/img/nexmo.png" alt="img" />
            </Link>
            <div className="settings-view">
              <Link
                to="#"
                className="me-3 d-flex"
                data-bs-toggle="modal"
                data-bs-target="#nexmo"
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
        <div className="col-lg-4 col-sm-6 col-12 d-flex">
          <div className="nav-menus">
            <img src="/admin/assets/img/2-factor.png" alt="img" />
            <div className="settings-view">
              <Link to="#" className="me-3 d-flex">
                <i className="bx bx-cog" />
              </Link>
              <div className="active-switch">
                <label className="switch">
                  <input type="checkbox" defaultChecked="" />
                  <span className="sliders round" />
                </label>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-sm-6 col-12 d-flex">
          <div className="nav-menus">
            <img src="/admin/assets/img/twilio.png" alt="img" />
            <div className="settings-view">
              <Link to="#" className="me-3 d-flex">
                <i className="bx bx-cog" />
              </Link>
              <div className="active-switch">
                <label className="switch">
                  <input type="checkbox" defaultChecked="" />
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
  <div className="modal fade custom-modal verify-modal" id="nexmo">
    <div className="modal-dialog modal-dialog-centered">
      <div className="modal-content Set-google-capt">
        <div className="captcha-header d-flex align-items-center justify-content-between">
          <div className="email-group">
            <h4>Nexmo</h4>
            <div className="active-switch me-2">
              <label className="switch">
                <input type="checkbox" defaultChecked="" />
                <span className="sliders round" />
              </label>
            </div>
          </div>
          <span>
            <Link to="#" data-bs-dismiss="modal" aria-label="Close">
              <i className="feather-x" />
            </Link>
          </span>
        </div>
        <div className="modaled-body">
          <form action="#">
            <label>
              API Key <span> * </span>
            </label>
            <input type="text" className="form-control" />
            <label>
              API Secret Key <span> * </span>
            </label>
            <input type="text" className="form-control" />
            <label>
              Sender ID <span> * </span>
            </label>
            <input type="text" className="form-control" />
          </form>
        </div>
        <div className="acc-submited">
          <Link to="#" className="btn btn-primary">
            Submit
          </Link>
          <Link to="#" className="btn btn-secondary">
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

export default SmsSetting