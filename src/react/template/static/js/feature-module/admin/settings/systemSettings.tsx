import React from 'react'
import { Link } from 'react-router-dom'
import ImageWithBasePath from '../../../core/data/img/ImageWithBasePath.tsx'

const SystemSettings = () => {
  return (
    <div>
        <>
  {/* Page Wrapper */}
  <div className="page-wrapper profile-set-wrapper">
    <div className="content container-fluid system-set-wrapper">
      <div className="page-header">
        <div className="page-title">
          <h4>System Setting</h4>
        </div>
      </div>
      <div className="row">
        <div className="col-md-4">
          <div className="system-set-wrrapper">
            <div className="system-load-time">
              <div className="system-set-logo d-flex align-items-center">
                <span>
                  <img
                    src="/admin/assets/img/icon/system-logo-01.svg"
                    alt="Logo"
                    className="img-fluid"
                  />
                </span>
                <h6>
                  <Link to="#">Google Captcha</Link>
                </h6>
              </div>
              <div className="active-switch">
                <label className="switch">
                  <input type="checkbox" defaultChecked={true} />
                  <span className="sliders round" />
                </label>
              </div>
            </div>
            <p>
              Lorem ipsum dolor sit amet, consectetur elit, sed do eiusmod
              tempor incididunt{" "}
            </p>
            <div className="set-view">
              <Link
                to="#"
                className="btn btn-secondary"
                data-bs-toggle="modal"
                data-bs-target="#goog-cap"
              >
                {" "}
                <i className="bx bx-wrench" /> View Integration
              </Link>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="system-set-wrrapper">
            <div className="system-load-time">
              <div className="system-set-logo d-flex align-items-center">
                <span>
                  <img
                    src="/admin/assets/img/icon/system-logo-02.svg"
                    alt="Logo"
                    className="img-fluid"
                  />
                </span>
                <h6>
                  <Link to="#">Agora Settings</Link>
                </h6>
              </div>
              <div className="active-switch">
                <label className="switch">
                  <input type="checkbox" defaultChecked={true} />
                  <span className="sliders round" />
                </label>
              </div>
            </div>
            <p>
              Lorem ipsum dolor sit amet, consectetur elit, sed do eiusmod
              tempor incididunt{" "}
            </p>
            <div className="set-view">
              <Link
                to="#"
                className="btn btn-secondary"
                data-bs-toggle="modal"
                data-bs-target="#agora-cap"
              >
                {" "}
                <i className="bx bx-wrench" /> View Integration
              </Link>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="system-set-wrrapper">
            <div className="system-load-time">
              <div className="system-set-logo d-flex align-items-center">
                <span className="system-three">
                  <ImageWithBasePath
                    src="/admin/assets/img/icon/system-logo-03.svg"
                    alt="Logo"
                    className="img-fluid"
                  />
                </span>
                <h6>
                  <Link to="#">Firebase Settings</Link>
                </h6>
              </div>
              <div className="active-switch">
                <label className="switch">
                  <input type="checkbox" />
                  <span className="sliders round" />
                </label>
              </div>
            </div>
            <p>
              Lorem ipsum dolor sit amet, consectetur elit, sed do eiusmod
              tempor incididunt{" "}
            </p>
            <div className="set-view">
              <Link
                to="#"
                className="btn btn-secondary"
                data-bs-toggle="modal"
                data-bs-target="#fire-cap"
              >
                {" "}
                <i className="bx bx-wrench" /> View Integration
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* /Page Wrapper */}
  {/* Google Captcha  */}
  <div className="modal fade custom-modal verify-modal" id="goog-cap">
    <div className="modal-dialog modal-dialog-centered">
      <div className="modal-content Set-google-capt">
        <div className="captcha-header d-flex align-items-center justify-content-between">
          <h4>Configure Google Captcha</h4>
          <span>
            <Link to="#" data-bs-dismiss="modal" aria-label="Close">
              <i className="feather-x" />
            </Link>
          </span>
        </div>
        <div className="modaled-body">
          <form action="#">
            <label>
              Google Recaptcha Site Key <span> * </span>
            </label>
            <input type="text" className="form-control" />
            <label>
              Google Recaptcha Secret Key <span> * </span>
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
  <div className="modal fade custom-modal verify-modal" id="agora-cap">
    <div className="modal-dialog modal-dialog-centered">
      <div className="modal-content Set-google-capt">
        <div className="captcha-header d-flex align-items-center justify-content-between">
          <h4>Agora Settings</h4>
          <span>
            <Link to="#" data-bs-dismiss="modal" aria-label="Close">
              <i className="feather-x" />
            </Link>
          </span>
        </div>
        <div className="modaled-body">
          <form action="#">
            <label>
              Agora Application key <span> * </span>
            </label>
            <input type="text" className="form-control" />
            <label>
              APNS Key <span> * </span>
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
  <div className="modal fade custom-modal verify-modal" id="fire-cap">
    <div className="modal-dialog modal-dialog-centered">
      <div className="modal-content Set-google-capt">
        <div className="captcha-header d-flex align-items-center justify-content-between">
          <h4>Firebase Settings</h4>
          <span>
            <Link to="#" data-bs-dismiss="modal" aria-label="Close">
              <i className="feather-x" />
            </Link>
          </span>
        </div>
        <div className="modaled-body">
          <form action="#">
            <label>
              Firebase Server Key<span> * </span>
            </label>
            <input type="text" className="form-control" />
            <label>
              APNS Key <span> * </span>
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
</>

    </div>
  )
}

export default SystemSettings