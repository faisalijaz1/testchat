import React from "react";

const DeleteMessage = () => {
  return (
    <>
      {/* Delete Message To */}
      <div className="modal fade " id="delete-message">
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content delete-model-head">
            <div className="modal-header">
              <h5 className="modal-title">Delete Message</h5>
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
              <div className="notify-check delete-chat-notify">
                <div className="form-check d-flex align-items-center justify-content-start ps-0">
                  <label className="custom-check mt-0 mb-0">
                    <span className="remember-me">Delete for Me</span>
                    <input type="checkbox" name="remeber" defaultChecked={true} />
                    <span className="checkmark" />
                  </label>
                </div>
                <div className="form-check d-flex align-items-center justify-content-start ps-0">
                  <label className="custom-check mt-0 mb-0">
                    <span className="remember-me">Delete for Everyone</span>
                    <input type="checkbox" name="remeber" />
                    <span className="checkmark" />
                  </label>
                </div>
              </div>
              <div className="mute-chat-btn delete-pop-btn justify-content-end">
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
                  <i className="bx bx-trash me-1" />
                  Delete
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* /Delete Message To */}
    </>
  );
};

export default DeleteMessage;
