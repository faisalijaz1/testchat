import React from "react";
import { Link } from "react-router-dom";

const DisappearingMessage = () => {
  return (
    <>
      {/* Disappearing Messages */}
      <div className="modal fade" id="disappearing-messages">
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Disappearing messages</h5>
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
              <form action="#">
                <div className="block-user-blk">
                  <p>
                    For more privacy and storage, all new messages will
                    disappear from this chat for everyone after the selected
                    duration, except when kept. Anyone in the chat can change
                    this setting.
                  </p>
                  <div className="notify-check">
                    <div className="form-check d-flex align-items-center justify-content-start ps-0">
                      <label className="custom-check mt-0 mb-0">
                        <span className="remember-me">24 Hours</span>
                        <input type="checkbox" name="remeber" />
                        <span className="checkmark" />
                      </label>
                    </div>
                    <div className="form-check d-flex align-items-center justify-content-start ps-0">
                      <label className="custom-check mt-0 mb-0">
                        <span className="remember-me">7 Days</span>
                        <input type="checkbox" name="remeber" />
                        <span className="checkmark" />
                      </label>
                    </div>
                    <div className="form-check d-flex align-items-center justify-content-start ps-0">
                      <label className="custom-check mt-0 mb-0">
                        <span className="remember-me">90 Days</span>
                        <input type="checkbox" name="remeber" />
                        <span className="checkmark" />
                      </label>
                    </div>
                    <div className="form-check d-flex align-items-center justify-content-start ps-0">
                      <label className="custom-check mt-0 mb-0">
                        <span className="remember-me">Off</span>
                        <input type="checkbox" name="remeber" />
                        <span className="checkmark" />
                      </label>
                    </div>
                  </div>
                </div>
                <div className="mute-chat-btn">
                  <button
                    type="submit"
                    className="btn btn-secondary"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                  >
                    Cancel
                  </button>
                  <Link
                    to="#"
                    className="btn btn-primary"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                  >
                    Save
                  </Link>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      {/* /Disappearing Messages */}
    </>
  );
};

export default DisappearingMessage;
