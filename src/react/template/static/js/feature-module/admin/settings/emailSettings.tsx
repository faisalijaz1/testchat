import React from 'react'
import { Link } from 'react-router-dom'

const EmailSettings = () => {
  return (
    <div>
<>
  {/* Page Wrapper */}
  <div className="page-wrapper profile-set-wrapper">
    <div className="content container-fluid system-set-wrapper">
      <div className="page-header">
        <div className="page-title">
          <h4>Email Setting</h4>
        </div>
      </div>
      <div className="row">
        <div className="col-md-4 d-flex">
          <div className="system-set-wrrapper">
            <div className="system-load-time">
              <div className="system-set-logo d-flex align-items-center">
                <h6>
                  <Link to="#">PHP Mail</Link>
                </h6>
              </div>
            </div>
            <p>
              Lorem ipsum dolor sit amet, consectetur elit, sed do eiusmod
              tempor incididunt{" "}
            </p>
            <div className="set-view d-flex align-items-center justify-content-between">
              <Link
                to="#"
                className="btn btn-secondary"
                data-bs-toggle="modal"
                data-bs-target="#php-mail"
              >
                {" "}
                <i className="bx bx-wrench" /> Connect Now
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
        <div className="col-md-4 d-flex">
          <div className="system-set-wrrapper">
            <div className="system-load-time">
              <div className="system-set-logo d-flex align-items-center">
                <h6>
                  <Link to="#">SMTP</Link>
                </h6>
              </div>
            </div>
            <p>
              Lorem ipsum dolor sit amet, consectetur elit, sed do eiusmod
              tempor incididunt{" "}
            </p>
            <div className="set-view d-flex align-items-center justify-content-between">
              <Link
                to="#"
                className="btn btn-secondary"
                data-bs-toggle="modal"
                data-bs-target="#smtp"
              >
                {" "}
                <i className="bx bx-wrench" /> Connect Now
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
        <div className="col-md-4 d-flex">
          <div className="system-set-wrrapper">
            <div className="system-load-time">
              <div className="system-set-logo d-flex align-items-center">
                <h6>
                  <Link to="javasript:;">SendGrid</Link>
                </h6>
              </div>
              <div className="social-connect">
                <p>Connected</p>
              </div>
            </div>
            <p>
              Lorem ipsum dolor sit amet, consectetur elit, sed do eiusmod
              tempor incididunt{" "}
            </p>
            <div className="set-view d-flex align-items-center justify-content-between">
              <Link to="#" className="btn btn-secondary">
                {" "}
                <i className="bx bx-wrench" /> View Integration
              </Link>
              <div className="active-switch">
                <label className="switch">
                  <input type="checkbox" />
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
  <div className="modal fade custom-modal verify-modal" id="php-mail">
    <div className="modal-dialog modal-dialog-centered">
      <div className="modal-content Set-google-capt">
        <div className="captcha-header d-flex align-items-center justify-content-between">
          <div className="email-group">
            <h4>PHP EMail</h4>
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
              From Email Address <span> * </span>
            </label>
            <input type="text" className="form-control" />
            <label>
              Email Password <span> * </span>
            </label>
            <input type="text" className="form-control" />
            <label>
              From Name <span> * </span>
            </label>
            <input type="text" className="form-control" />
            <div className="acc-submited">
              <button type="submit" className="btn btn-primary">
                Submit
              </button>
              <button
                type="submit"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
                aria-label="Close"
              >
                Cancel
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
  {/* /Google Captcha  */}
  {/* Agora Captcha  */}
  <div className="modal fade custom-modal verify-modal" id="smtp">
    <div className="modal-dialog modal-dialog-centered">
      <div className="modal-content Set-google-capt">
        <div className="captcha-header d-flex align-items-center justify-content-between">
          <div className="email-group">
            <h4>SMTP</h4>
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
              From Email Address <span> * </span>
            </label>
            <input type="text" className="form-control" />
            <label>
              Email Password <span> * </span>
            </label>
            <input type="text" className="form-control" />
            <label>
              Host <span> * </span>
            </label>
            <input type="text" className="form-control" />
            <label>
              Port <span> * </span>
            </label>
            <input type="text" className="form-control" />
            <div className="acc-submited">
              <button type="submit" className="btn btn-primary">
                Submit
              </button>
              <button
                type="submit"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
                aria-label="Close"
              >
                Cancel
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
  {/* /Agora Captcha  */}
  {/* Agora Captcha  */}
  <div className="modal fade custom-modal verify-modal" id="app-cap">
    <div className="modal-dialog modal-dialog-centered">
      <div className="modal-content Set-google-capt">
        <div className="captcha-header d-flex align-items-center justify-content-between">
          <h4>Apple Login Settings</h4>
          <span>
            <Link to="">
              <i className="feather-x" />
            </Link>
          </span>
        </div>
        <div className="modaled-body">
          <form action="#">
            <label>
              Client ID <span> * </span>
            </label>
            <input type="text" className="form-control" />
            <label>
              Consumer Secret (Secret Key) <span> * </span>
            </label>
            <input type="text" className="form-control" />
            <label>
              Login Redirect URL <span> * </span>
            </label>
            <input type="text" className="form-control" />
            <div className="acc-submited">
              <button type="submit" className="btn btn-primary">
                Save Changes
              </button>
              <button
                type="submit"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
                aria-label="Close"
              >
                Cancel
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
  {/* /Agora Captcha  */}
</>

    </div>
  )
}

export default EmailSettings