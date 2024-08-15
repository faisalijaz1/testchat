import React from "react";
import ImageWithBasePath from "../../data/img/ImageWithBasePath.tsx";

const NewGroup = () => {
  return (
    <>
      {/* New Group */}
      <div className="modal fade " id="new-group">
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">New Group</h5>
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
              <form>
                <div className="new-group-add show-group-add">
                  <div className="user-profiles-group mb-4">
                    <div className="profile-cover text-center">
                      <label
                        className="profile-cover-avatar"
                        htmlFor="avatar_upload"
                      >
                        <ImageWithBasePath
                          className="avatar-img"
                          src="/assets/img/avatar/avatar-2.jpg"
                          alt="Profile Image"
                        />
                        <input type="file" id="avatar_upload" />
                        <span className="avatar-edit">
                          <ImageWithBasePath
                            src="/assets/img/icon/camera.svg"
                            alt="Image"
                          />
                        </span>
                      </label>
                    </div>
                    <div className="pass-login">
                      <label className="form-label">Group Name </label>
                      <input
                        type="password"
                        className="form-control pass-input"
                      />
                    </div>
                    <div className="pass-login">
                      <label className="form-label">Description </label>
                      <textarea className="form-control " defaultValue={""} />
                    </div>
                    <div className="pass-login">
                      <h4>Group Type</h4>
                      <div className="d-flex align-items-center">
                        <label className="group-type-radio">
                          Public
                          <input
                            type="radio"
                            defaultChecked="checked"
                            name="radio"
                          />
                          <span className="checkmark" />
                        </label>
                        <label className="group-type-radio">
                          Private
                          <input type="radio" name="radio" />
                          <span className="checkmark" />
                        </label>
                      </div>
                    </div>
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
                    <a className="btn btn-primary" id="next-parti">
                      <i className="feather-arrow-right me-1" />
                      Next
                    </a>
                  </div>
                </div>
                <div className="parti-group hash-participant">
                  <div className="user-block-group mb-4">
                    <div className="search_chat has-search group-name-search">
                      <span className="fas fa-search form-control-feedback" />
                      <input
                        className="form-control chat_input"
                        id="search-contact-one"
                        type="text"
                        placeholder="Search"
                      />
                    </div>
                    <h5>Contacts</h5>
                    <div className="sidebar">
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
                            <div className="notify-check parti-notify-check">
                              <div className="form-check d-flex align-items-center justify-content-start ps-0">
                                <label className="custom-check mt-0 mb-0">
                                  <input type="checkbox" name="remeber" />
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
                            <div className="notify-check parti-notify-check">
                              <div className="form-check d-flex align-items-center justify-content-start ps-0">
                                <label className="custom-check mt-0 mb-0">
                                  <input type="checkbox" name="remeber" />
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
                                src="/assets/img/avatar/avatar-4.jpg"
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
                            <div className="notify-check parti-notify-check">
                              <div className="form-check d-flex align-items-center justify-content-start ps-0">
                                <label className="custom-check mt-0 mb-0">
                                  <input type="checkbox" name="remeber" />
                                  <span className="checkmark" />
                                </label>
                              </div>
                            </div>
                          </div>
                        </li>
                        <li className="user-list-item ">
                          <div className="list-user-blk mb-0">
                            <div className="avatar">
                              <ImageWithBasePath
                                src="/assets/img/avatar/avatar-5.jpg"
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
                            <div className="notify-check parti-notify-check">
                              <div className="form-check d-flex align-items-center justify-content-start ps-0">
                                <label className="custom-check mt-0 mb-0">
                                  <input
                                    type="checkbox"
                                    name="remeber"
                                    defaultChecked={true}
                                  />
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
                    <a className="btn btn-secondary" id="previous-group">
                      <i className="bx bx-left-arrow-alt me-1" />
                      Previous
                    </a>
                    <a
                      className="btn btn-primary"
                      data-bs-dismiss="modal"
                      aria-label="Close"
                      data-bs-toggle="modal"
                      data-bs-target="#Success-group"
                    >
                      <i className="bx bx-send me-1" />
                      Create
                    </a>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
        {/* New Chat */}
        <div className="modal fade " id="Success-group">
          <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content success-group-wrap-list">
              <div className="modal-header">
                <div className="success-pass mx-auto">
                  <ImageWithBasePath
                    src="/assets/img/avatar/avatar-16.png"
                    alt="Success"
                    className="img-fluid"
                  />
                </div>
              </div>
              <div className="modal-body">
                <div className="success-header">
                  <h4>Success</h4>
                  <p>Group Created Successfully</p>
                </div>
                <a
                  className="btn btn-primary"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                >
                  Ok
                </a>
              </div>
            </div>
          </div>
        </div>
        {/* /New Chat */}
      </div>
      {/* /New Group */}
    </>
  );
};

export default NewGroup;
