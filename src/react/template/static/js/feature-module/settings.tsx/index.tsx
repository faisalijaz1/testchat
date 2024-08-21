import React from 'react'
import Scrollbars from 'react-custom-scrollbars-2'
import { Link } from 'react-router-dom'
import Sidebar from '../../core/common/sidebar.tsx'
import AccountSettings from '../../core/modals/settings/accountSettings.tsx'
import SettingsProfile from '../../core/modals/settings/settingsProfile.tsx'
import PasswordAndSecurity from '../../core/modals/settings/passwordandSecurity.tsx'
import Privacy from '../../core/modals/settings/privacy.tsx'
import Chat from '../../core/modals/settings/chat.tsx'
import SettingsNotification from '../../core/modals/settings/settingsNotification.tsx'
import SettingsLanguage from '../../core/modals/settings/settingsLanguage.tsx'
import DeviceHistory from '../../core/modals/settings/deviceHistory.tsx'
import BlockUser from '../../core/modals/settings/blockUser.tsx'
import MuteUser from '../../core/modals/settings/muteUser.tsx'
import DeleteAccount from '../../core/modals/settings/deleteAccount.tsx'
import SettingsLogout from '../../core/modals/settings/settingsLogout.tsx'
import { all_routes } from '../router/all_routes.tsx'

const Settings = () => {
  const routes = all_routes
  return (
    <>
      {/* content */}
      <div className="content main_content">
        {/* Left Sidebar Menu */}
        <Sidebar />
        {/* /Left Sidebar Menu */}
        {/* sidebar group */}
        <div className="sidebar-group left-sidebar chat_sidebar">
          {/* Chats sidebar */}

          <div id="chats" className="left-sidebar-wrap sidebar active slimscroll">
            <Scrollbars>
              <div className="slimscroll">
                {/* Left Chat Title */}
                <div className="left-chat-title d-flex justify-content-between align-items-center position-relative">
                  <div className="setting-title-head">
                    <h4>
                      <Link to="#">
                        <img src="/assets/img/icon/arrow-left.svg" alt="Icon" />
                      </Link>{" "}
                      Setting
                    </h4>
                  </div>
                  <Link to="#" className="user-chat-search-btn">
                    <i className="bx bx-search set-search" />{" "}
                  </Link>
                  {/* Chat Search */}
                  <div className="user-chat-search">
                    <form action="#">
                      <span className="form-control-feedback">
                        <i className="bx bx-search" />
                      </span>
                      <input
                        type="text"
                        name="chat-search"
                        placeholder="Search"
                        className="form-control"
                      />
                      <div className="user-close-btn-chat">
                        <span className="material-icons">close</span>
                      </div>
                    </form>
                  </div>
                  {/* /Chat Search */}
                </div>
                {/* /Left Chat Title */}
                <div className="setting-profile-card">
                  <div className="settings-option">
                    <Link to="#" className="user-list-item">
                      Edit Settings
                    </Link>
                  </div>
                  <div className="account-setting">
                    <h5>Account Setting</h5>
                    <Link
                      to="#"
                      data-bs-toggle="modal"
                      data-bs-target="#edit-setting-condition"
                    >
                      {" "}
                      <i className="bx bx-pencil set-search d-flex" />
                    </Link>
                  </div>
                  <div className="profile-card">
                    <div className="profile-cover text-center">
                      <label className="profile-cover-avatar">
                        <img
                          className="avatar-img"
                          src="/assets/img/avatar/avatar-17.png"
                          alt="Profile Image"
                        />
                        <input type="file" id="avatar_upload_one" />
                        <span className="avatar-edit">
                          <i className="bx bx-camera" />
                        </span>
                      </label>
                    </div>
                    <div className="profile-info">
                      <div className="profile-listout">
                        <p className="info-title mb-0">Your Name</p>
                        <span className="info-text">
                          {/* <img
                            src="/assets/img/icon/smile-01.svg"
                            className="ms-1"
                            alt="Image"
                          /> */}
                          {" "}
                          Test Account{" "}
                          {/* <img
                            src="/assets/img/icon/smile-01.svg"
                            className="me-1"
                            alt="Image"
                          /> */}
                        </span>
                      </div>
                      <div className="profile-listout">
                        <p className="info-title mb-0">About</p>
                        <span className="info-text">Can’t Talk, WhatsApp only</span>
                      </div>
                      <div className="profile-listout">
                        <p className="info-title mb-0">Date of Birth</p>
                        <span className="info-text">10 July 1996</span>
                      </div>
                      <div className=" profile-listout">
                        <p className="info-title mb-0">Gender</p>
                        <span className="info-text">Male</span>
                      </div>
                      <div className="profile-listout mb-0">
                        <p className="info-title mb-0">Country</p>
                        <span className="info-text">Pakistan</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="settings-card">
                  <div className="settings-control">
                    <ul>
                      <li>
                        <Link
                          to="#"
                          data-bs-toggle="modal"
                          data-bs-target="#social-profile"
                        >
                          <div className="setting-card-list">
                            <i className="bx bx-globe" />
                            <span>Social Profiles</span>
                          </div>
                          <i className="bx bx-chevron-right" />
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="#"
                          data-bs-toggle="modal"
                          data-bs-target="#password-security"
                        >
                          <div className="setting-card-list">
                            <i className="bx bx-lock-alt" />
                            <span>Password &amp; Security</span>
                          </div>
                          <i className="bx bx-chevron-right" />
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="#"
                          data-bs-toggle="modal"
                          data-bs-target="#privacy"
                        >
                          <div className="setting-card-list">
                            <i className="bx bx-check-shield" />
                            <span>Privacy</span>
                          </div>
                          <i className="bx bx-chevron-right" />
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="#"
                          data-bs-toggle="modal"
                          data-bs-target="#setting-chat"
                        >
                          <div className="setting-card-list">
                            <i className="bx bx-message-square-dots" />
                            <span>Chat</span>
                          </div>
                          <i className="bx bx-chevron-right" />
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="#"
                          data-bs-toggle="modal"
                          data-bs-target="#setting-notification"
                        >
                          <div className="setting-card-list">
                            <i className="bx bx-bell" />
                            <span>Notifications</span>
                          </div>
                          <i className="bx bx-chevron-right" />
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="#"
                          data-bs-toggle="modal"
                          data-bs-target="#setting-languages"
                        >
                          <div className="setting-card-list">
                            <i className="bx bx-globe" />
                            <span>Languages</span>
                          </div>
                          <i className="bx bx-chevron-right" />
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="#"
                          data-bs-toggle="modal"
                          data-bs-target="#setting-device"
                        >
                          <div className="setting-card-list">
                            <i className="bx bx-laptop" />
                            <span>Manage Devices</span>
                          </div>
                          <i className="bx bx-chevron-right" />
                        </Link>
                      </li>
                      <li>
                        <Link to="#">
                          <div className="setting-card-list">
                            <i className="bx bx-file" />
                            <span>Terms &amp; Conditions</span>
                          </div>
                          <i className="bx bx-chevron-right" />
                        </Link>
                      </li>
                      <li>
                        <Link to="#">
                          <div className="setting-card-list">
                            <i className="bx bx-shield-alt-2" />
                            <span>Privacy Policy</span>
                          </div>
                          <i className="bx bx-chevron-right" />
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="#"
                          data-bs-toggle="modal"
                          data-bs-target="#blocked-user"
                        >
                          <div className="setting-card-list">
                            <i className="bx bx-block" />
                            <span>Blocked User</span>
                          </div>
                          <i className="bx bx-chevron-right" />
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="#"
                          data-bs-toggle="modal"
                          data-bs-target="#mute-user"
                        >
                          <div className="setting-card-list">
                            <i className="bx bx-volume-mute" />
                            <span>Mute User</span>
                          </div>
                          <i className="bx bx-chevron-right" />
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="#"
                          data-bs-toggle="modal"
                          data-bs-target="#delete-account"
                        >
                          <div className="setting-card-list">
                            <i className="bx bx-trash" />
                            <span>Delete Account</span>
                          </div>
                          <i className="bx bx-chevron-right" />
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="#"
                          data-bs-toggle="modal"
                          data-bs-target="#setting-logout"
                        >
                          <div className="setting-card-list">
                            <i className="bx bx-lock-alt" />
                            <span>Logout</span>
                          </div>
                          <i className="bx bx-chevron-right" />
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </Scrollbars>
          </div>
          {/* / Chats sidebar */}
        </div>
        {/* /Sidebar group */}
        {/* Chat */}
        <div className="chat setting-chat" id="middle">
          <Scrollbars>
            <div className="slimscroll">
              <div className="chat-header">
                <div className="user-details">
                  <div className="d-lg-none">
                    <ul className="list-inline mt-2 me-2">
                      <li className="list-inline-item">
                        <Link
                          className="text-muted px-0 left_side"
                          to="#"
                          data-chat="open"
                        >
                          <i className="fas fa-arrow-left" />
                        </Link>
                      </li>
                    </ul>
                  </div>
                  <figure className="avatar ms-1">
                    <img
                      src="/assets/img/avatar/avatar-2.jpg"
                      className="rounded-circle"
                      alt="image"
                    />
                  </figure>
                  <div className="mt-1">
                    <h5>UI UX Designer</h5>
                    <small className="last-seen">
                      35 Members, <span className="active-online">15 Online</span>
                    </small>
                  </div>
                </div>
                <div className="avatar-group">
                  <div className="avatar avatar-xs group_img group_header">
                    <img
                      className="avatar-img rounded-circle"
                      alt="User Image"
                      src="/assets/img/avatar/avatar-6.jpg"
                    />
                  </div>
                  <div className="avatar avatar-xs group_img group_header">
                    <img
                      className="avatar-img rounded-circle"
                      alt="User Image"
                      src="/assets/img/avatar/avatar-4.jpg"
                    />
                  </div>
                  <div className="avatar avatar-xs group_img group_header">
                    <img
                      className="avatar-img rounded-circle"
                      alt="User Image"
                      src="/assets/img/avatar/avatar-1.jpg"
                    />
                  </div>
                  <div className="avatar avatar-xs group_img group_header">
                    <img
                      className="avatar-img rounded-circle"
                      alt="User Image"
                      src="/assets/img/avatar/avatar-2.jpg"
                    />
                  </div>
                  <div className="avatar avatar-xs group_img group_header">
                    <span className="avatar-title rounded-circle">+25</span>
                  </div>
                </div>
                <div className="chat-options ">
                  <ul className="list-inline">
                    <li className="list-inline-item">
                      <Link
                        to="#"
                        className="btn btn-outline-light chat-search-btn"
                        data-bs-toggle="tooltip"
                        data-bs-placement="bottom"
                        title="Search"
                      >
                        <i className="bx bx-search" />
                      </Link>
                    </li>
                    <li className="list-inline-item">
                      <Link
                        to={routes.videoCall}
                        className="btn btn-outline-light"
                        data-bs-toggle="tooltip"
                        data-bs-placement="bottom"
                        title="Video Call"
                      >
                        <i className="bx bx-video" />
                      </Link>
                    </li>
                    <li className="list-inline-item">
                      <Link
                        to={routes.audioCall}
                        className="btn btn-outline-light"
                        data-bs-toggle="tooltip"
                        data-bs-placement="bottom"
                        title="Voice Call"
                      >
                        <i className="bx bx-phone" />
                      </Link>
                    </li>
                    <li className="list-inline-item dream_profile_menu">
                      <Link
                        to="#"
                        className="btn btn-outline-light not-chat-user"
                        data-bs-toggle="tooltip"
                        data-bs-placement="bottom"
                        title="Contact Info"
                      >
                        <i className="bx bx-info-circle" />
                      </Link>
                    </li>
                    <li className="list-inline-item">
                      <Link
                        className="btn btn-outline-light no-bg"
                        to="#"
                        data-bs-toggle="dropdown"
                      >
                        <i className="bx bx-dots-vertical-rounded" />
                      </Link>
                      <div className="dropdown-menu dropdown-menu-end">
                        <Link to="#" className="dropdown-item ">
                          <span>
                            <i className="bx bx-x" />
                          </span>
                          Close Chat{" "}
                        </Link>
                        <Link
                          to="#"
                          className="dropdown-item"
                          data-bs-toggle="modal"
                          data-bs-target="#mute-notification"
                        >
                          <span>
                            <i className="bx bx-volume-mute" />
                          </span>
                          Mute Notification
                        </Link>
                        <Link
                          to="#"
                          className="dropdown-item"
                          data-bs-toggle="modal"
                          data-bs-target="#disappearing-messages"
                        >
                          <span>
                            <i className="bx bx-time-five" />
                          </span>
                          Disappearing Message
                        </Link>
                        <Link
                          to="#"
                          className="dropdown-item"
                          data-bs-toggle="modal"
                          data-bs-target="#clear-chat"
                        >
                          <span>
                            <i className="bx bx-brush-alt" />
                          </span>
                          Clear Message
                        </Link>
                        <Link
                          to="#"
                          className="dropdown-item"
                          data-bs-toggle="modal"
                          data-bs-target="#change-chat"
                        >
                          <span>
                            <i className="bx bx-trash" />
                          </span>
                          Delete Chat
                        </Link>
                        <Link
                          to="#"
                          className="dropdown-item"
                          data-bs-toggle="modal"
                          data-bs-target="#report-user"
                        >
                          <span>
                            <i className="bx bx-dislike" />
                          </span>
                          Report
                        </Link>
                        <Link
                          to="#"
                          className="dropdown-item"
                          data-bs-toggle="modal"
                          data-bs-target="#block-user"
                        >
                          <span>
                            <i className="bx bx-block" />
                          </span>
                          Block
                        </Link>
                      </div>
                    </li>
                  </ul>
                </div>
                {/* Chat Search */}
                <div className="chat-search">
                  <form action="#">
                    <span className="form-control-feedback">
                      <i className="bx bx-search" />
                    </span>
                    <input
                      type="text"
                      name="chat-search"
                      placeholder="Search Chats"
                      className="form-control"
                    />
                    <div className="close-btn-chat">
                      <span className="material-icons">close</span>
                    </div>
                  </form>
                </div>
                {/* /Chat Search */}
              </div>
              <div className="chat-body">
                <div className="messages">
                  <div className="chats">
                    <div className="chat-avatar">
                      <img
                        src="/assets/img/avatar/avatar-2.jpg"
                        className="rounded-circle dreams_chat"
                        alt="image"
                      />
                    </div>
                    <div className="chat-content">
                      <div className="chat-profile-name">
                        <h6>
                          Mark Villiams<span>8:16 PM</span>
                        </h6>
                        <div className="chat-action-btns ms-2">
                          <div className="chat-action-col">
                            <Link className="#" to="#" data-bs-toggle="dropdown">
                              <i className="bx bx-dots-horizontal-rounded" />
                            </Link>
                            <div className="dropdown-menu chat-drop-menu dropdown-menu-end">
                              <Link to="#" className="dropdown-item message-info-left">
                                <span>
                                  <i className="bx bx-info-circle" />
                                </span>
                                Message Info{" "}
                              </Link>
                              <Link to="#" className="dropdown-item reply-button">
                                <span>
                                  <i className="bx bx-share" />
                                </span>
                                Reply
                              </Link>
                              <Link to="#" className="dropdown-item">
                                <span>
                                  <i className="bx bx-smile" />
                                </span>
                                React
                              </Link>
                              <Link
                                to="#"
                                className="dropdown-item"
                                data-bs-toggle="modal"
                                data-bs-target="#forward-message"
                              >
                                <span>
                                  <i className="bx bx-reply" />
                                </span>
                                Forward
                              </Link>
                              <Link to="#" className="dropdown-item">
                                <span>
                                  <i className="bx bx-star" />
                                </span>
                                Star Message
                              </Link>
                              <Link
                                to="#"
                                className="dropdown-item"
                                data-bs-toggle="modal"
                                data-bs-target="#report-user"
                              >
                                <span>
                                  <i className="bx bx-dislike" />
                                </span>
                                Report
                              </Link>
                              <Link
                                to="#"
                                className="dropdown-item"
                                data-bs-toggle="modal"
                                data-bs-target="#delete-message"
                              >
                                <span>
                                  <i className="bx bx-trash" />
                                </span>
                                Delete
                              </Link>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="message-content">
                        Hello <Link to="#">@Alex</Link> Thank you for the
                        beautiful web design ahead schedule.
                        <div className="emoj-group">
                          <ul>
                            <li className="emoj-action">
                              <Link to="#">
                                <i className="bx bx-smile" />
                              </Link>
                              <div className="emoj-group-list">
                                <ul>
                                  <li>
                                    <Link to="#">
                                      <img
                                        src="/assets/img/icon/emoj-icon-01.svg"
                                        alt="Icon"
                                      />
                                    </Link>
                                  </li>
                                  <li>
                                    <Link to="#">
                                      <img
                                        src="/assets/img/icon/emoj-icon-02.svg"
                                        alt="Icon"
                                      />
                                    </Link>
                                  </li>
                                  <li>
                                    <Link to="#">
                                      <img
                                        src="/assets/img/icon/emoj-icon-03.svg"
                                        alt="Icon"
                                      />
                                    </Link>
                                  </li>
                                  <li>
                                    <Link to="#">
                                      <img
                                        src="/assets/img/icon/emoj-icon-04.svg"
                                        alt="Icon"
                                      />
                                    </Link>
                                  </li>
                                  <li>
                                    <Link to="#">
                                      <img
                                        src="/assets/img/icon/emoj-icon-05.svg"
                                        alt="Icon"
                                      />
                                    </Link>
                                  </li>
                                  <li className="add-emoj">
                                    <Link to="#">
                                      <i className="feather-plus" />
                                    </Link>
                                  </li>
                                </ul>
                              </div>
                            </li>
                            <li>
                              <Link
                                to="#"
                                data-bs-toggle="modal"
                                data-bs-target="#forward-message"
                              >
                                <i className="bx bx-share" />
                              </Link>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="chat-line">
                    <span className="chat-date">Today, July 24</span>
                  </div>
                  <div className="chats chats-right">
                    <div className="chat-content">
                      <div className="chat-profile-name text-end">
                        <h6>
                          Alex Smith<span>8:16 PM</span>
                        </h6>
                        <div className="chat-action-btns ms-2">
                          <div className="chat-action-col">
                            <Link className="#" to="#" data-bs-toggle="dropdown">
                              <i className="bx bx-dots-horizontal-rounded" />
                            </Link>
                            <div className="dropdown-menu chat-drop-menu dropdown-menu-end">
                              <Link to="#" className="dropdown-item message-info-left">
                                <span>
                                  <i className="bx bx-info-circle" />
                                </span>
                                Message Info{" "}
                              </Link>
                              <Link to="#" className="dropdown-item reply-button">
                                <span>
                                  <i className="bx bx-share" />
                                </span>
                                Reply
                              </Link>
                              <Link to="#" className="dropdown-item">
                                <span>
                                  <i className="bx bx-smile" />
                                </span>
                                React
                              </Link>
                              <Link
                                to="#"
                                className="dropdown-item"
                                data-bs-toggle="modal"
                                data-bs-target="#forward-message"
                              >
                                <span>
                                  <i className="bx bx-reply" />
                                </span>
                                Forward
                              </Link>
                              <Link to="#" className="dropdown-item">
                                <span>
                                  <i className="bx bx-star" />
                                </span>
                                Star Message
                              </Link>
                              <Link
                                to="#"
                                className="dropdown-item"
                                data-bs-toggle="modal"
                                data-bs-target="#edit-message"
                              >
                                <span>
                                  <i className="bx bx-edit-alt" />
                                </span>
                                Edit
                              </Link>
                              <Link
                                to="#"
                                className="dropdown-item"
                                data-bs-toggle="modal"
                                data-bs-target="#delete-message"
                              >
                                <span>
                                  <i className="bx bx-trash" />
                                </span>
                                Delete
                              </Link>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="message-content ">
                        <div className="emoj-group rig-emoji-group">
                          <ul>
                            <li className="emoj-action">
                              <Link to="#">
                                <i className="bx bx-smile" />
                              </Link>
                              <div className="emoj-group-list">
                                <ul>
                                  <li>
                                    <Link to="#">
                                      <img
                                        src="/assets/img/icon/emoj-icon-01.svg"
                                        alt="Icon"
                                      />
                                    </Link>
                                  </li>
                                  <li>
                                    <Link to="#">
                                      <img
                                        src="/assets/img/icon/emoj-icon-02.svg"
                                        alt="Icon"
                                      />
                                    </Link>
                                  </li>
                                  <li>
                                    <Link to="#">
                                      <img
                                        src="/assets/img/icon/emoj-icon-03.svg"
                                        alt="Icon"
                                      />
                                    </Link>
                                  </li>
                                  <li>
                                    <Link to="#">
                                      <img
                                        src="/assets/img/icon/emoj-icon-04.svg"
                                        alt="Icon"
                                      />
                                    </Link>
                                  </li>
                                  <li>
                                    <Link to="#">
                                      <img
                                        src="/assets/img/icon/emoj-icon-05.svg"
                                        alt="Icon"
                                      />
                                    </Link>
                                  </li>
                                  <li className="add-emoj">
                                    <Link to="#">
                                      <i className="feather-plus" />
                                    </Link>
                                  </li>
                                </ul>
                              </div>
                            </li>
                            <li>
                              <Link
                                to="#"
                                data-bs-toggle="modal"
                                data-bs-target="#forward-message"
                              >
                                <i className="bx bx-share" />
                              </Link>
                            </li>
                          </ul>
                        </div>
                        <div className="chat-voice-group">
                          <ul>
                            <li>
                              <Link to="#">
                                <span>
                                  <img
                                    src="/assets/img/icon/play-01.svg"
                                    alt="image"
                                  />
                                </span>
                              </Link>
                            </li>
                            <li>
                              <img src="/assets/img/voice.svg" alt="image" />
                            </li>
                            <li>0:05</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div className="chat-avatar">
                      <img
                        src="/assets/img/avatar/avatar-10.jpg"
                        className="rounded-circle dreams_chat"
                        alt="image"
                      />
                    </div>
                  </div>
                  <div className="chats">
                    <div className="chat-avatar">
                      <img
                        src="/assets/img/avatar/avatar-1.jpg"
                        className="rounded-circle dreams_chat"
                        alt="image"
                      />
                    </div>
                    <div className="chat-content">
                      <div className="chat-profile-name">
                        <h6>
                          Elizabeth Sosa<span>8:16 PM</span>
                        </h6>
                        <div className="chat-action-btns ms-2">
                          <div className="chat-action-col">
                            <Link className="#" to="#" data-bs-toggle="dropdown">
                              <i className="bx bx-dots-horizontal-rounded" />
                            </Link>
                            <div className="dropdown-menu chat-drop-menu dropdown-menu-end">
                              <Link to="#" className="dropdown-item message-info-left">
                                <span>
                                  <i className="bx bx-info-circle" />
                                </span>
                                Message Info{" "}
                              </Link>
                              <Link to="#" className="dropdown-item reply-button">
                                <span>
                                  <i className="bx bx-share" />
                                </span>
                                Reply
                              </Link>
                              <Link to="#" className="dropdown-item">
                                <span>
                                  <i className="bx bx-smile" />
                                </span>
                                React
                              </Link>
                              <Link
                                to="#"
                                className="dropdown-item"
                                data-bs-toggle="modal"
                                data-bs-target="#forward-message"
                              >
                                <span>
                                  <i className="bx bx-reply" />
                                </span>
                                Forward
                              </Link>
                              <Link to="#" className="dropdown-item">
                                <span>
                                  <i className="bx bx-star" />
                                </span>
                                Star Message
                              </Link>
                              <Link
                                to="#"
                                className="dropdown-item"
                                data-bs-toggle="modal"
                                data-bs-target="#report-user"
                              >
                                <span>
                                  <i className="bx bx-dislike" />
                                </span>
                                Report
                              </Link>
                              <Link
                                to="#"
                                className="dropdown-item"
                                data-bs-toggle="modal"
                                data-bs-target="#delete-message"
                              >
                                <span>
                                  <i className="bx bx-trash" />
                                </span>
                                Delete
                              </Link>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="message-content award-link chat-award-link">
                        <Link to="#">
                          https://www.youtube.com/watch?v=GCmL3mS0Psk
                        </Link>
                        <img src="/assets/img/award.jpg" alt="img" />
                        <div className="emoj-group">
                          <ul>
                            <li className="emoj-action">
                              <Link to="#">
                                <i className="bx bx-smile" />
                              </Link>
                              <div className="emoj-group-list">
                                <ul>
                                  <li>
                                    <Link to="#">
                                      <img
                                        src="/assets/img/icon/emoj-icon-01.svg"
                                        alt="Icon"
                                      />
                                    </Link>
                                  </li>
                                  <li>
                                    <Link to="#">
                                      <img
                                        src="/assets/img/icon/emoj-icon-02.svg"
                                        alt="Icon"
                                      />
                                    </Link>
                                  </li>
                                  <li>
                                    <Link to="#">
                                      <img
                                        src="/assets/img/icon/emoj-icon-03.svg"
                                        alt="Icon"
                                      />
                                    </Link>
                                  </li>
                                  <li>
                                    <Link to="#">
                                      <img
                                        src="/assets/img/icon/emoj-icon-04.svg"
                                        alt="Icon"
                                      />
                                    </Link>
                                  </li>
                                  <li>
                                    <Link to="#">
                                      <img
                                        src="/assets/img/icon/emoj-icon-05.svg"
                                        alt="Icon"
                                      />
                                    </Link>
                                  </li>
                                  <li className="add-emoj">
                                    <Link to="#">
                                      <i className="feather-plus" />
                                    </Link>
                                  </li>
                                </ul>
                              </div>
                            </li>
                            <li>
                              <Link
                                to="#"
                                data-bs-toggle="modal"
                                data-bs-target="#forward-message"
                              >
                                <i className="bx bx-share" />
                              </Link>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="chats chats-right">
                    <div className="chat-content">
                      <div className="chat-profile-name justify-content-end">
                        <h6>
                          Alex Smith<span>8:16 PM</span>
                        </h6>
                        <div className="chat-action-btns ms-2">
                          <div className="chat-action-col">
                            <Link className="#" to="#" data-bs-toggle="dropdown">
                              <i className="bx bx-dots-horizontal-rounded" />
                            </Link>
                            <div className="dropdown-menu chat-drop-menu dropdown-menu-end">
                              <Link to="#" className="dropdown-item message-info-left">
                                <span>
                                  <i className="bx bx-info-circle" />
                                </span>
                                Message Info{" "}
                              </Link>
                              <Link to="#" className="dropdown-item reply-button">
                                <span>
                                  <i className="bx bx-share" />
                                </span>
                                Reply
                              </Link>
                              <Link to="#" className="dropdown-item">
                                <span>
                                  <i className="bx bx-smile" />
                                </span>
                                React
                              </Link>
                              <Link
                                to="#"
                                className="dropdown-item"
                                data-bs-toggle="modal"
                                data-bs-target="#forward-message"
                              >
                                <span>
                                  <i className="bx bx-reply" />
                                </span>
                                Forward
                              </Link>
                              <Link to="#" className="dropdown-item">
                                <span>
                                  <i className="bx bx-star" />
                                </span>
                                Star Message
                              </Link>
                              <Link
                                to="#"
                                className="dropdown-item"
                                data-bs-toggle="modal"
                                data-bs-target="#edit-message"
                              >
                                <span>
                                  <i className="bx bx-edit-alt" />
                                </span>
                                Edit
                              </Link>
                              <Link
                                to="#"
                                className="dropdown-item"
                                data-bs-toggle="modal"
                                data-bs-target="#delete-message"
                              >
                                <span>
                                  <i className="bx bx-trash" />
                                </span>
                                Delete
                              </Link>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="message-content fancy-msg-box">
                        <div className="emoj-group wrap-emoji-group ">
                          <ul>
                            <li className="emoj-action">
                              <Link to="#">
                                <i className="bx bx-smile" />
                              </Link>
                              <div className="emoj-group-list">
                                <ul>
                                  <li>
                                    <Link to="#">
                                      <img
                                        src="/assets/img/icon/emoj-icon-01.svg"
                                        alt="Icon"
                                      />
                                    </Link>
                                  </li>
                                  <li>
                                    <Link to="#">
                                      <img
                                        src="/assets/img/icon/emoj-icon-02.svg"
                                        alt="Icon"
                                      />
                                    </Link>
                                  </li>
                                  <li>
                                    <Link to="#">
                                      <img
                                        src="/assets/img/icon/emoj-icon-03.svg"
                                        alt="Icon"
                                      />
                                    </Link>
                                  </li>
                                  <li>
                                    <Link to="#">
                                      <img
                                        src="/assets/img/icon/emoj-icon-04.svg"
                                        alt="Icon"
                                      />
                                    </Link>
                                  </li>
                                  <li>
                                    <Link to="#">
                                      <img
                                        src="/assets/img/icon/emoj-icon-05.svg"
                                        alt="Icon"
                                      />
                                    </Link>
                                  </li>
                                  <li className="add-emoj">
                                    <Link to="#">
                                      <i className="feather-plus" />
                                    </Link>
                                  </li>
                                </ul>
                              </div>
                            </li>
                            <li>
                              <Link
                                to="#;"
                                data-bs-toggle="modal"
                                data-bs-target="#forward-message"
                              >
                                <i className="bx bx-share" />
                              </Link>
                            </li>
                          </ul>
                        </div>
                        <div className="download-col">
                          <ul className="nav mb-0">
                            <li>
                              <div className="image-download-col">
                                <Link
                                  to="/assets/img/media/media-02.jpg"
                                  data-fancybox="gallery"
                                  className="fancybox"
                                >
                                  <img src="/assets/img/media/media-02.jpg" alt="" />
                                </Link>
                              </div>
                            </li>
                            <li>
                              <div className="image-download-col ">
                                <Link
                                  to="/assets/img/media/media-03.jpg"
                                  data-fancybox="gallery"
                                  className="fancybox"
                                >
                                  <img src="/assets/img/media/media-03.jpg" alt="" />
                                </Link>
                              </div>
                            </li>
                            <li>
                              <div className="image-download-col image-not-download">
                                <Link
                                  to="/assets/img/media/media-01.jpg"
                                  data-fancybox="gallery"
                                  className="fancybox"
                                >
                                  <img src="/assets/img/media/media-01.jpg" alt="" />
                                  <span>10+</span>
                                </Link>
                              </div>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div className="chat-avatar">
                      <img
                        src="/assets/img/avatar/avatar-10.jpg"
                        className="rounded-circle dreams_chat"
                        alt="image"
                      />
                    </div>
                  </div>
                  <div className="chats">
                    <div className="chat-avatar">
                      <img
                        src="/assets/img/avatar/avatar-4.jpg"
                        className="rounded-circle dreams_chat"
                        alt="image"
                      />
                    </div>
                    <div className="chat-content">
                      <div className="chat-profile-name">
                        <h6>
                          James Albert<span>8:16 PM</span>
                        </h6>
                        <div className="chat-action-btns ms-2">
                          <div className="chat-action-col">
                            <Link className="#" to="#" data-bs-toggle="dropdown">
                              <i className="bx bx-dots-horizontal-rounded" />
                            </Link>
                            <div className="dropdown-menu chat-drop-menu dropdown-menu-end">
                              <Link to="#" className="dropdown-item message-info-left">
                                <span>
                                  <i className="bx bx-info-circle" />
                                </span>
                                Message Info{" "}
                              </Link>
                              <Link to="#" className="dropdown-item reply-button">
                                <span>
                                  <i className="bx bx-share" />
                                </span>
                                Reply
                              </Link>
                              <Link to="#" className="dropdown-item">
                                <span>
                                  <i className="bx bx-smile" />
                                </span>
                                React
                              </Link>
                              <Link
                                to="#"
                                className="dropdown-item"
                                data-bs-toggle="modal"
                                data-bs-target="#forward-message"
                              >
                                <span>
                                  <i className="bx bx-reply" />
                                </span>
                                Forward
                              </Link>
                              <Link to="#" className="dropdown-item">
                                <span>
                                  <i className="bx bx-star" />
                                </span>
                                Star Message
                              </Link>
                              <Link
                                to="#"
                                className="dropdown-item"
                                data-bs-toggle="modal"
                                data-bs-target="#report-user"
                              >
                                <span>
                                  <i className="bx bx-dislike" />
                                </span>
                                Report
                              </Link>
                              <Link
                                to="#"
                                className="dropdown-item"
                                data-bs-toggle="modal"
                                data-bs-target="#delete-message"
                              >
                                <span>
                                  <i className="bx bx-trash" />
                                </span>
                                Delete
                              </Link>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="message-content review-files">
                        <p>
                          Please check and review the files
                          <span className="ms-1">
                            <img src="/assets/img/icon/smile-chat.svg" alt="Icon" />
                          </span>
                        </p>
                        <div className="file-download d-flex align-items-center mb-0">
                          <div className="file-type d-flex align-items-center justify-content-center me-2">
                            <i className="bx bxs-file-doc" />
                          </div>
                          <div className="file-details">
                            <span className="file-name">Landing_page_V1.doc</span>
                            <ul>
                              <li>80 Bytes</li>
                              <li>
                                <Link to="#">Download</Link>
                              </li>
                            </ul>
                          </div>
                        </div>
                        <div className="emoj-group">
                          <ul>
                            <li className="emoj-action">
                              <Link to="#">
                                <i className="bx bx-smile" />
                              </Link>
                              <div className="emoj-group-list">
                                <ul>
                                  <li>
                                    <Link to="#">
                                      <img
                                        src="/assets/img/icon/emoj-icon-01.svg"
                                        alt="Icon"
                                      />
                                    </Link>
                                  </li>
                                  <li>
                                    <Link to="#">
                                      <img
                                        src="/assets/img/icon/emoj-icon-02.svg"
                                        alt="Icon"
                                      />
                                    </Link>
                                  </li>
                                  <li>
                                    <Link to="#">
                                      <img
                                        src="/assets/img/icon/emoj-icon-03.svg"
                                        alt="Icon"
                                      />
                                    </Link>
                                  </li>
                                  <li>
                                    <Link to="#">
                                      <img
                                        src="/assets/img/icon/emoj-icon-04.svg"
                                        alt="Icon"
                                      />
                                    </Link>
                                  </li>
                                  <li>
                                    <Link to="#">
                                      <img
                                        src="/assets/img/icon/emoj-icon-05.svg"
                                        alt="Icon"
                                      />
                                    </Link>
                                  </li>
                                  <li className="add-emoj">
                                    <Link to="#">
                                      <i className="feather-plus" />
                                    </Link>
                                  </li>
                                </ul>
                              </div>
                            </li>
                            <li>
                              <Link
                                to="#"
                                data-bs-toggle="modal"
                                data-bs-target="#forward-message"
                              >
                                <i className="bx bx-share" />
                              </Link>
                            </li>
                          </ul>
                        </div>
                      </div>
                      <div className="like-chat-grp">
                        <ul>
                          <li className="like-chat">
                            <Link to="#">
                              2<img src="/assets/img/icon/like.svg" alt="Icon" />
                            </Link>
                          </li>
                          <li className="comment-chat">
                            <Link to="#">
                              2<img src="/assets/img/icon/heart.svg" alt="Icon" />
                            </Link>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="chats">
                    <div className="chat-avatar">
                      <img
                        src="/assets/img/avatar/avatar-5.jpg"
                        className="rounded-circle dreams_chat"
                        alt="image"
                      />
                    </div>
                    <div className="chat-content">
                      <div className="chat-profile-name">
                        <h6>
                          Richard Ohare<span>8:16 PM</span>
                        </h6>
                        <div className="chat-action-btns ms-2">
                          <div className="chat-action-col">
                            <Link className="#" to="#" data-bs-toggle="dropdown">
                              <i className="bx bx-dots-horizontal-rounded" />
                            </Link>
                            <div className="dropdown-menu chat-drop-menu dropdown-menu-end">
                              <Link to="#" className="dropdown-item message-info-left">
                                <span>
                                  <i className="bx bx-info-circle" />
                                </span>
                                Message Info{" "}
                              </Link>
                              <Link to="#" className="dropdown-item reply-button">
                                <span>
                                  <i className="bx bx-share" />
                                </span>
                                Reply
                              </Link>
                              <Link to="#" className="dropdown-item">
                                <span>
                                  <i className="bx bx-smile" />
                                </span>
                                React
                              </Link>
                              <Link
                                to="#"
                                className="dropdown-item"
                                data-bs-toggle="modal"
                                data-bs-target="#forward-message"
                              >
                                <span>
                                  <i className="bx bx-reply" />
                                </span>
                                Forward
                              </Link>
                              <Link to="#" className="dropdown-item">
                                <span>
                                  <i className="bx bx-star" />
                                </span>
                                Star Message
                              </Link>
                              <Link
                                to="#"
                                className="dropdown-item"
                                data-bs-toggle="modal"
                                data-bs-target="#report-user"
                              >
                                <span>
                                  <i className="bx bx-edit-alt" />
                                </span>
                                Report
                              </Link>
                              <Link
                                to="#"
                                className="dropdown-item"
                                data-bs-toggle="modal"
                                data-bs-target="#delete-message"
                              >
                                <span>
                                  <i className="bx bx-trash" />
                                </span>
                                Delete
                              </Link>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="message-content reply-getcontent">
                        Thank you for your support
                        <div className="emoj-group">
                          <ul>
                            <li className="emoj-action">
                              <Link to="#">
                                <i className="bx bx-smile" />
                              </Link>
                              <div className="emoj-group-list">
                                <ul>
                                  <li>
                                    <Link to="#">
                                      <img
                                        src="/assets/img/icon/emoj-icon-01.svg"
                                        alt="Icon"
                                      />
                                    </Link>
                                  </li>
                                  <li>
                                    <Link to="#">
                                      <img
                                        src="/assets/img/icon/emoj-icon-02.svg"
                                        alt="Icon"
                                      />
                                    </Link>
                                  </li>
                                  <li>
                                    <Link to="#">
                                      <img
                                        src="/assets/img/icon/emoj-icon-03.svg"
                                        alt="Icon"
                                      />
                                    </Link>
                                  </li>
                                  <li>
                                    <Link to="#">
                                      <img
                                        src="/assets/img/icon/emoj-icon-04.svg"
                                        alt="Icon"
                                      />
                                    </Link>
                                  </li>
                                  <li>
                                    <Link to="#">
                                      <img
                                        src="/assets/img/icon/emoj-icon-05.svg"
                                        alt="Icon"
                                      />
                                    </Link>
                                  </li>
                                  <li className="add-emoj">
                                    <Link to="#">
                                      <i className="feather-plus" />
                                    </Link>
                                  </li>
                                </ul>
                              </div>
                            </li>
                            <li>
                              <Link
                                to="#;"
                                data-bs-toggle="modal"
                                data-bs-target="#forward-message"
                              >
                                <i className="bx bx-share" />
                              </Link>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="chats">
                    <div className="chat-avatar">
                      <img
                        src="/assets/img/avatar/avatar-8.jpg"
                        className="rounded-circle dreams_chat"
                        alt="image"
                      />
                    </div>
                    <div className="chat-content">
                      <div className="chat-profile-name">
                        <h6>
                          Judy Mercer<span>8:16 PM</span>
                        </h6>
                        <div className="chat-action-btns ms-2">
                          <div className="chat-action-col">
                            <Link className="#" to="#" data-bs-toggle="dropdown">
                              <i className="bx bx-dots-horizontal-rounded" />
                            </Link>
                            <div className="dropdown-menu chat-drop-menu dropdown-menu-end">
                              <Link to="#" className="dropdown-item message-info-left">
                                <span>
                                  <i className="bx bx-info-circle" />
                                </span>
                                Message Info{" "}
                              </Link>
                              <Link to="#" className="dropdown-item reply-button">
                                <span>
                                  <i className="bx bx-share" />
                                </span>
                                Reply
                              </Link>
                              <Link to="#" className="dropdown-item">
                                <span>
                                  <i className="bx bx-smile" />
                                </span>
                                React
                              </Link>
                              <Link
                                to="#"
                                className="dropdown-item"
                                data-bs-toggle="modal"
                                data-bs-target="#forward-message"
                              >
                                <span>
                                  <i className="bx bx-reply" />
                                </span>
                                Forward
                              </Link>
                              <Link to="#" className="dropdown-item">
                                <span>
                                  <i className="bx bx-star" />
                                </span>
                                Star Message
                              </Link>
                              <Link
                                to="#"
                                className="dropdown-item"
                                data-bs-toggle="modal"
                                data-bs-target="#report-user"
                              >
                                <span>
                                  <i className="bx bx-edit-alt" />
                                </span>
                                Report
                              </Link>
                              <Link
                                to="#"
                                className="dropdown-item"
                                data-bs-toggle="modal"
                                data-bs-target="#delete-message"
                              >
                                <span>
                                  <i className="bx bx-trash" />
                                </span>
                                Delete
                              </Link>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="message-content reply-getcontent">
                        Hey, have you heard about the importance pf user research in
                        our design process?
                        <div className="emoj-group">
                          <ul>
                            <li className="emoj-action">
                              <Link to="#">
                                <i className="bx bx-smile" />
                              </Link>
                              <div className="emoj-group-list">
                                <ul>
                                  <li>
                                    <Link to="#">
                                      <img
                                        src="/assets/img/icon/emoj-icon-01.svg"
                                        alt="Icon"
                                      />
                                    </Link>
                                  </li>
                                  <li>
                                    <Link to="#">
                                      <img
                                        src="/assets/img/icon/emoj-icon-02.svg"
                                        alt="Icon"
                                      />
                                    </Link>
                                  </li>
                                  <li>
                                    <Link to="#">
                                      <img
                                        src="/assets/img/icon/emoj-icon-03.svg"
                                        alt="Icon"
                                      />
                                    </Link>
                                  </li>
                                  <li>
                                    <Link to="#">
                                      <img
                                        src="/assets/img/icon/emoj-icon-04.svg"
                                        alt="Icon"
                                      />
                                    </Link>
                                  </li>
                                  <li>
                                    <Link to="#">
                                      <img
                                        src="/assets/img/icon/emoj-icon-05.svg"
                                        alt="Icon"
                                      />
                                    </Link>
                                  </li>
                                  <li className="add-emoj">
                                    <Link to="#">
                                      <i className="feather-plus" />
                                    </Link>
                                  </li>
                                </ul>
                              </div>
                            </li>
                            <li>
                              <Link
                                to="#;"
                                data-bs-toggle="modal"
                                data-bs-target="#forward-message"
                              >
                                <i className="bx bx-share" />
                              </Link>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="chats forward-chat-msg reply-div d-none">
                    <div className="contact-close_call text-end">
                      <Link to="#" className="close-replay">
                        <i className="bx bx-x" />
                      </Link>
                    </div>
                    <div className="chat-avatar">
                      <img
                        src="/assets/img/avatar/avatar-2.jpg"
                        className="rounded-circle dreams_chat"
                        alt="image"
                      />
                    </div>
                    <div className="chat-content">
                      <div className="chat-profile-name">
                        <h6>
                          Mark Villiams<span>8:16 PM</span>
                        </h6>
                        <div className="chat-action-btns ms-2">
                          <div className="chat-action-col">
                            <Link className="#" to="#" data-bs-toggle="dropdown">
                              <i className="bx bx-dots-horizontal-rounded" />
                            </Link>
                            <div className="dropdown-menu chat-drop-menu dropdown-menu-end">
                              <Link to="#" className="dropdown-item message-info-left">
                                <span>
                                  <i className="bx bx-info-circle" />
                                </span>
                                Message Info{" "}
                              </Link>
                              <Link to="#" className="dropdown-item reply-button">
                                <span>
                                  <i className="bx bx-share" />
                                </span>
                                Reply
                              </Link>
                              <Link to="#" className="dropdown-item">
                                <span>
                                  <i className="bx bx-smile" />
                                </span>
                                React
                              </Link>
                              <Link
                                to="#"
                                className="dropdown-item"
                                data-bs-toggle="modal"
                                data-bs-target="#forward-message"
                              >
                                <span>
                                  <i className="bx bx-reply" />
                                </span>
                                Forward
                              </Link>
                              <Link to="#" className="dropdown-item">
                                <span>
                                  <i className="bx bx-star" />
                                </span>
                                Star Message
                              </Link>
                              <Link
                                to="#"
                                className="dropdown-item"
                                data-bs-toggle="modal"
                                data-bs-target="#report-user"
                              >
                                <span>
                                  <i className="bx bx-dislike" />
                                </span>
                                Report
                              </Link>
                              <Link
                                to="#"
                                className="dropdown-item"
                                data-bs-toggle="modal"
                                data-bs-target="#delete-message"
                              >
                                <span>
                                  <i className="bx bx-trash" />
                                </span>
                                Delete
                              </Link>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="message-content reply-content"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Scrollbars>
          <div className="chat-footer">
            <form action="#">
              <div className="smile-foot">
                <div className="chat-action-btns">
                  <div className="chat-action-col">
                    <Link className="action-circle" to="#" data-bs-toggle="dropdown">
                      <i className="bx bx-dots-vertical-rounded" />
                    </Link>
                    <div className="dropdown-menu dropdown-menu-end">
                      <Link to="#" className="dropdown-item ">
                        <span>
                          <i className="bx bx-file" />
                        </span>
                        Document
                      </Link>
                      <Link to="#" className="dropdown-item">
                        <span>
                          <i className="bx bx-camera" />
                        </span>
                        Camera
                      </Link>
                      <Link to="#" className="dropdown-item">
                        <span>
                          <i className="bx bx-image" />
                        </span>
                        Gallery
                      </Link>
                      <Link to="#" className="dropdown-item">
                        <span>
                          <i className="bx bx-volume-full" />
                        </span>
                        Audio
                      </Link>
                      <Link to="#" className="dropdown-item">
                        <span>
                          <i className="bx bx-map" />
                        </span>
                        Location
                      </Link>
                      <Link to="#" className="dropdown-item">
                        <span>
                          <i className="bx bx-user-pin" />
                        </span>
                        Contact
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              <div className="smile-foot emoj-action-foot">
                <Link to="#" className="action-circle">
                  <i className="bx bx-smile" />
                </Link>
                <div className="emoj-group-list-foot down-emoji-circle">
                  <ul>
                    <li>
                      <Link to="#">
                        <img src="/assets/img/icon/emoj-icon-01.svg" alt="Icon" />
                      </Link>
                    </li>
                    <li>
                      <Link to="#">
                        <img src="/assets/img/icon/emoj-icon-02.svg" alt="Icon" />
                      </Link>
                    </li>
                    <li>
                      <Link to="#">
                        <img src="/assets/img/icon/emoj-icon-03.svg" alt="Icon" />
                      </Link>
                    </li>
                    <li>
                      <Link to="#">
                        <img src="/assets/img/icon/emoj-icon-04.svg" alt="Icon" />
                      </Link>
                    </li>
                    <li>
                      <Link to="#">
                        <img src="/assets/img/icon/emoj-icon-05.svg" alt="Icon" />
                      </Link>
                    </li>
                    <li className="add-emoj">
                      <Link to="#">
                        <i className="feather-plus" />
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="smile-foot">
                <Link to="#" className="action-circle">
                  <i className="bx bx-microphone-off" />
                </Link>
              </div>
              <input
                type="text"
                className="form-control chat_form"
                placeholder="Type your message here..."
              />
              <div className="form-buttons">
                <button className="btn send-btn" type="submit">
                  <i className="bx bx-paper-plane" />
                </button>
              </div>
            </form>
          </div>
        </div>
        {/* /Chat */}
        <AccountSettings />
        <SettingsProfile />
        <PasswordAndSecurity />
        <Privacy />
        <Chat />
        <SettingsNotification />
        <SettingsLanguage />
        <DeviceHistory />
        <BlockUser />
        <MuteUser />
        <DeleteAccount />
        <SettingsLogout />
      </div>
      {/* /Content */}
    </>

  )
}

export default Settings
