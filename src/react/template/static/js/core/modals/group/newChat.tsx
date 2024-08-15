import React from "react";
import ImageWithBasePath from "../../data/img/ImageWithBasePath.tsx";

const NewChat = () => {
  return (
    <>
      {/* New Chat */}
      <div className="modal fade " id="new-chat">
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">New Chat</h5>
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
                      id="search-contacted"
                      type="text"
                      placeholder="Search"
                    />
                  </div>
                  <h5>Contacts</h5>
                  <div className="sidebar sroll-side-view">
                    <div className="d-flex justify-content-between align-items-center ps-0 pe-0">
                      <div className="fav-title contact-title">
                        <h6>A</h6>
                      </div>
                    </div>
                    <ul className="user-list">
                      <li className="user-list-item">
                        <div className="list-user-blk">
                          <div className="avatar">
                            <ImageWithBasePath
                              src="/assets/img/avatar/avatar-4.jpg"
                              className="rounded-circle"
                              alt="image"
                            />
                          </div>
                          <div className="users-list-body">
                            <div>
                              <h5>Alexander Manuel</h5>
                              <p>Active 4Min Ago</p>
                            </div>
                          </div>
                          <div className="notify-check parti-notify-radio">
                            <div className="form-check d-flex align-items-center justify-content-start ps-0">
                              <label className="group-type-radio">
                                <input type="radio" name="radio" />
                                <span className="checkmark" />
                              </label>
                            </div>
                          </div>
                        </div>
                      </li>
                      <li className="user-list-item">
                        <div className="list-user-blk">
                          <div className="avatar">
                            <ImageWithBasePath
                              src="/assets/img/avatar/avatar-5.jpg"
                              className="rounded-circle"
                              alt="image"
                            />
                          </div>
                          <div className="users-list-body">
                            <div>
                              <h5>Annette Theriot</h5>
                              <p>Online</p>
                            </div>
                          </div>
                          <div className="notify-check parti-notify-radio">
                            <div className="form-check d-flex align-items-center justify-content-start ps-0">
                              <label className="group-type-radio">
                                <input type="radio" name="radio" />
                                <span className="checkmark" />
                              </label>
                            </div>
                          </div>
                        </div>
                      </li>
                    </ul>
                    <div className="d-flex justify-content-between align-items-center ps-0 pe-0">
                      <div className="fav-title contact-title">
                        <h6>B</h6>
                      </div>
                    </div>
                    <ul className="user-list">
                      <li className="user-list-item">
                        <div className="list-user-blk">
                          <div className="avatar">
                            <ImageWithBasePath
                              src="/assets/img/avatar/avatar-10.jpg"
                              className="rounded-circle"
                              alt="image"
                            />
                          </div>
                          <div className="users-list-body">
                            <div>
                              <h5>Bacon Mark</h5>
                              <p>Active 8Min Ago</p>
                            </div>
                          </div>
                          <div className="notify-check parti-notify-radio">
                            <div className="form-check d-flex align-items-center justify-content-start ps-0">
                              <label className="group-type-radio">
                                <input type="radio" name="radio" />
                                <span className="checkmark" />
                              </label>
                            </div>
                          </div>
                        </div>
                      </li>
                      <li className="user-list-item">
                        <div className="list-user-blk">
                          <div className="avatar">
                            <ImageWithBasePath
                              src="/assets/img/avatar/avatar-12.jpg"
                              className="rounded-circle"
                              alt="image"
                            />
                          </div>
                          <div className="users-list-body">
                            <div>
                              <h5>Bennett Gerard</h5>
                              <p>Last Seen Today at 12:35 AM</p>
                            </div>
                          </div>
                          <div className="notify-check parti-notify-radio">
                            <div className="form-check d-flex align-items-center justify-content-start ps-0">
                              <label className="group-type-radio">
                                <input type="radio" name="radio" />
                                <span className="checkmark" />
                              </label>
                            </div>
                          </div>
                        </div>
                      </li>
                    </ul>
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
                      src="/assets/img/icon/send.svg"
                      className="me-1"
                      alt="image"
                    />
                    Chat
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      {/* /New Chat */}
    </>
  );
};

export default NewChat;
