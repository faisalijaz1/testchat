import React from "react";

const MuteNotification = () => {
  return (
    <>
      {/* Mute */}
      <div className="modal fade mute-notify" id="mute-notification">
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Mute Notifications</h5>
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
                <div className="notify-check">
                  <div className="form-check d-flex align-items-center justify-content-start ps-0">
                    <label className="group-type-radio">
                      30 Minutes
                      <input type="radio" name="radio" />
                      <span className="checkmark" />
                    </label>
                  </div>
                  <div className="form-check d-flex align-items-center justify-content-start ps-0">
                    <label className="group-type-radio">
                      1 Hour
                      <input type="radio" name="radio" />
                      <span className="checkmark" />
                    </label>
                  </div>
                  <div className="form-check d-flex align-items-center justify-content-start ps-0">
                    <label className="group-type-radio">
                      1 Day
                      <input type="radio" name="radio" />
                      <span className="checkmark" />
                    </label>
                  </div>
                  <div className="form-check d-flex align-items-center justify-content-start ps-0">
                    <label className="group-type-radio">
                      1 Week
                      <input type="radio" name="radio" />
                      <span className="checkmark" />
                    </label>
                  </div>
                  <div className="form-check d-flex align-items-center justify-content-start ps-0">
                    <label className="group-type-radio">
                      1 Month
                      <input type="radio" name="radio" />
                      <span className="checkmark" />
                    </label>
                  </div>
                  <div className="form-check d-flex align-items-center justify-content-start ps-0">
                    <label className="group-type-radio">
                      1 Year
                      <input type="radio" name="radio" />
                      <span className="checkmark" />
                    </label>
                  </div>
                  <div className="form-check d-flex align-items-center justify-content-start ps-0">
                    <label className="group-type-radio">
                      Always
                      <input type="radio" name="radio" />
                      <span className="checkmark" />
                    </label>
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
                  <button
                    type="submit"
                    className="btn btn-primary"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                  >
                    Mute
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      {/* /Mute */}
    </>
  );
};

export default MuteNotification;
