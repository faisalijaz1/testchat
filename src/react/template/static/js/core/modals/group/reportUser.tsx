import React from "react";
import ImageWithBasePath from "../../data/img/ImageWithBasePath.tsx";

const ReportUser = () => {
  return (
    <>
      {/* Report */}
      <div className="modal fade" id="report-user">
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Report Mark Villiams</h5>
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
              <div className="block-user-blk text-center">
                <ImageWithBasePath src="assets/img/icon/report-01.svg" alt="icon" />
                <p>
                  If you block this contact and clear the chat, messages will
                  only be removed from this device and your devices on the newer
                  versions of DreamsChat
                </p>
                <div className="notify-check">
                  <div className="form-check d-flex align-items-center justify-content-center ps-0">
                    <label className="custom-check mt-0 mb-0">
                      <span className="remember-me">
                        Block contact and clear chat
                      </span>
                      <input type="checkbox" name="remeber" />
                      <span className="checkmark" />
                    </label>
                  </div>
                </div>
              </div>
              <div className="mute-chat-btn justify-content-center">
                <a
                  className="btn btn-secondary"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                >
                  Cancel
                </a>
                <a
                  className="btn btn-primary"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                >
                  Report
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* /Report */}
    </>
  );
};

export default ReportUser;
