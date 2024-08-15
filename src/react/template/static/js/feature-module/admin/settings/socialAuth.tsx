import React from 'react'
import { Link } from 'react-router-dom'

const SocialAuth = () => {
  return (
    <div>
      <>
  {/* Page Wrapper */}
  <div className="page-wrapper profile-set-wrapper">
    <div className="content container-fluid system-set-wrapper">
      <div className="page-header">
        <div className="page-title">
          <h4>Social Authentication</h4>
        </div>
      </div>
      <div className="row">
        <div className="col-md-4">
          <div className="system-set-wrrapper">
            <div className="system-load-time">
              <div className="system-set-logo d-flex align-items-center">
                <span>
                  <img
                    src="/assets/img/icons/facebook.svg"
                    alt="Logo"
                    className="img-fluid"
                  />
                </span>
                <h6>
                  <Link to="#">Facebook</Link>
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
              <Link
                to="#"
                className="btn btn-secondary"
                data-bs-toggle="modal"
                data-bs-target="#fac-cap"
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
        <div className="col-md-4">
          <div className="system-set-wrrapper">
            <div className="system-load-time">
              <div className="system-set-logo d-flex align-items-center">
                <span>
                  <img
                    src="/assets/img/icons/google.svg"
                    alt="Logo"
                    className="img-fluid"
                  />
                </span>
                <h6>
                  <Link to="#">Google</Link>
                </h6>
              </div>
              <div className="social-connect dis-conect">
                <p>Disconnect</p>
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
                data-bs-target="#goo-cap"
              >
                {" "}
                <i className="bx bx-wrench" /> Connect Now
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
        <div className="col-md-4">
          <div className="system-set-wrrapper">
            <div className="system-load-time">
              <div className="system-set-logo d-flex align-items-center">
                <span>
                  <img
                    src="/assets/img/icons/apple.svg"
                    alt="Logo"
                    className="img-fluid"
                  />
                </span>
                <h6>
                  <Link to="#">Apple</Link>
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
              <Link
                to="#"
                className="btn btn-secondary"
                data-bs-toggle="modal"
                data-bs-target="#goo-cap"
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
      </div>
    </div>
  </div>
  {/* /Page Wrapper */}
  {/* Google Captcha  */}
  <div className="modal fade custom-modal verify-modal" id="fac-cap">
    <div className="modal-dialog modal-dialog-centered">
      <div className="modal-content Set-google-capt">
        <div className="captcha-header d-flex align-items-center justify-content-between">
          <h4>Facebook Login Settings</h4>
          <span>
            <Link to="">
              <i className="feather-x" />
            </Link>
          </span>
        </div>
        <div className="modaled-body">
          <form action="#">
            <label>
              Consumer Key (API Key) <span> * </span>
            </label>
            <input type="text" className="form-control fac-key" />
            <p className="fac-goo">
              If you are not sure what is your APP ID, Please head over to{" "}
              <span> Getting Started. </span>{" "}
            </p>
            <label>
              Consumer Secret (Secret Key) <span> * </span>
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
  {/* /Google Captcha  */}
  {/* Agora Captcha  */}
  <div className="modal fade custom-modal verify-modal" id="goo-cap">
    <div className="modal-dialog modal-dialog-centered">
      <div className="modal-content Set-google-capt">
        <div className="captcha-header d-flex align-items-center justify-content-between">
          <h4>Google Login Settings</h4>
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
            <input type="text" className="form-control fac-key" />
            <p className="fac-goo">
              If you are not sure what is your APP ID, Please head over to{" "}
              <span>Getting Started.</span>{" "}
            </p>
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
            <input type="text" className="form-control fac-key" />
            <p className="fac-goo">
              If you are not sure what is your APP ID, Please head over to{" "}
              <span> Getting Started. </span>{" "}
            </p>
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

export default SocialAuth