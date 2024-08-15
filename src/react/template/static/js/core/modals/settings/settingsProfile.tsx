import React from 'react'

const SettingsProfile = () => {
  return (
   <>
  {/* Social Profile */}
  <div className="modal fade " id="social-profile">
    <div className="modal-dialog modal-dialog-centered">
      <div className="modal-content">
        <div className="modal-header">
          <h5 className="modal-title">Social Profiles</h5>
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
          <div className="social-profile-blk">
            <form action="#">
              <div className="pass-login">
                <input
                  type="text"
                  className="form-control"
                  defaultValue="www.facebook.com"
                />
                <span className="social-medias">
                  <i className="fa-brands fa-facebook-f" />
                </span>
              </div>
              <div className="pass-login">
                <input
                  type="text"
                  className="form-control"
                  defaultValue="www.google.com   "
                />
                <span className="social-medias">
                  <i className="fa-brands fa-google" />
                </span>
              </div>
              <div className="pass-login">
                <input
                  type="text"
                  className="form-control"
                  defaultValue="www.twitter.com "
                />
                <span className="social-medias">
                  <i className="fa-brands fa-twitter" />
                </span>
              </div>
              <div className="pass-login">
                <input
                  type="text"
                  className="form-control"
                  defaultValue="www.linkedin.com "
                />
                <span className="social-medias">
                  <i className="fa-brands fa-linkedin" />
                </span>
              </div>
              <div className="pass-login">
                <input
                  type="text"
                  className="form-control"
                  defaultValue="www.youtube.com"
                />
                <span className="social-medias">
                  <i className="fa-brands fa-youtube" />
                </span>
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
            >
              <i className="feather-check me-1" />
              Save Changes
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* /Social Profile */}
</>

  )
}

export default SettingsProfile
