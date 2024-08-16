import React from "react";
import ImageWithBasePath from "../../data/img/ImageWithBasePath.tsx";

const ForwardMessage = () => {
  return (
    <>
      {/* Forward Message To */}
      <div className="modal fade " id="forward-message">
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Forward Message To</h5>
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
                <div className="user-block-group mb-4">
                  <div className="search_chat has-search">
                    <span className="fas fa-search form-control-feedback" />
                    <input
                      className="form-control chat_input"
                      id="search-contact"
                      type="text"
                      placeholder="Search"
                    />
                  </div>
                  <h5>Recent Chats</h5>
                  <div className="recent-block-group">
                    <div className="user-block-profile">
                      <div className="avatar">
                        <ImageWithBasePath
                          src="assets/img/avatar/avatar-1.jpg"
                          className="rounded-circle"
                          alt="image"
                        />
                      </div>
                      <div className="block-user-name">
                        <h6>Horace Keene</h6>
                        <span>Sleeping</span>
                      </div>
                    </div>
                    <div className="notify-check mb-0">
                      <div className="form-check d-flex align-items-center justify-content-start ps-0">
                        <label className="custom-check mt-0 mb-0">
                          <input type="checkbox" name="remeber" />
                          <span className="checkmark" />
                        </label>
                      </div>
                    </div>
                  </div>
                  <div className="recent-block-group">
                    <div className="user-block-profile">
                      <div className="avatar">
                        <ImageWithBasePath
                          src="assets/img/avatar/avatar-2.jpg"
                          className="rounded-circle"
                          alt="image"
                        />
                      </div>
                      <div className="block-user-name">
                        <h6>Bacon Mark</h6>
                        <span>Available</span>
                      </div>
                    </div>
                    <div className="notify-check mb-0">
                      <div className="form-check d-flex align-items-center justify-content-start ps-0">
                        <label className="custom-check mt-0 mb-0">
                          <input type="checkbox" name="remeber" />
                          <span className="checkmark" />
                        </label>
                      </div>
                    </div>
                  </div>
                  <div className="recent-block-group">
                    <div className="user-block-profile">
                      <div className="avatar">
                        <ImageWithBasePath
                          src="assets/img/avatar/avatar-3.jpg"
                          className="rounded-circle"
                          alt="image"
                        />
                      </div>
                      <div className="block-user-name">
                        <h6>Debra Jones</h6>
                        <span>At Work</span>
                      </div>
                    </div>
                    <div className="notify-check mb-0">
                      <div className="form-check d-flex align-items-center justify-content-start ps-0">
                        <label className="custom-check mt-0 mb-0">
                          <input type="checkbox" name="remeber" />
                          <span className="checkmark" />
                        </label>
                      </div>
                    </div>
                  </div>
                  <div className="recent-block-group mb-0">
                    <div className="user-block-profile">
                      <div className="avatar">
                        <ImageWithBasePath
                          src="assets/img/avatar/avatar-4.jpg"
                          className="rounded-circle"
                          alt="image"
                        />
                      </div>
                      <div className="block-user-name">
                        <h6>Dina Brown</h6>
                        <span>Can’t Talk, WhatsApp only</span>
                      </div>
                    </div>
                    <div className="notify-check">
                      <div className="form-check d-flex align-items-center justify-content-start ps-0">
                        <label className="custom-check mt-0 mb-0">
                          <input type="checkbox" name="remeber" />
                          <span className="checkmark" />
                        </label>
                      </div>
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
                    <i className="feather-x me-1" />
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="btn btn-primary"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                  >
                    <ImageWithBasePath
                      src="assets/img/icon/send.svg"
                      className="me-1"
                      alt="image"
                      data-bs-dismiss="modal"
                      aria-label="Close"
                    />
                    Send
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      {/* /Forward Message To */}
    </>
  );
};

export default ForwardMessage;
