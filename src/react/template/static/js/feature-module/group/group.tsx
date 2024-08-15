import React, {useState} from "react";

import Scrollbars from "react-custom-scrollbars-2";
import NewChat from "../../core/modals/group/newChat.tsx";
import NewGroup from "../../core/modals/group/newGroup.tsx";
import MuteNotification from "../../core/modals/group/muteNotification.tsx";
import ForwardMessage from "../../core/modals/group/forwardMessage.tsx";
import ReportUser from "../../core/modals/group/reportUser.tsx";
import DeleteMessage from "../../core/modals/group/deleteMessage.tsx";
import { Link } from "react-router-dom";
import VideoCall from "../../core/modals/group/videoCall.tsx";
import { OverlayTrigger, Tooltip } from "react-bootstrap";
import VoiceCall from "../../core/modals/group/voiceCall.tsx";
import { all_routes } from "../router/all_routes.tsx";
import DisappearingMessage from "../../core/modals/group/disappearingMessage.tsx";
import GroupInfo from "../../core/modals/group/groupInfo.tsx";
import Sidebar from "../../core/common/sidebar.tsx";
import Lightbox from "yet-another-react-lightbox";
import ImageWithBasePath from "../../core/data/img/ImageWithBasePath.tsx";
import "yet-another-react-lightbox/styles.css";

const Group = () => {
  const [open1, setOpen1] = React.useState(false);
  const [open2, setOpen2] = React.useState(false);


  const [visible, setVisible] = useState(false);
  const [searchChat, setSearchChat] = useState(false);

  const [isEmojiGroupVisible, setIsEmojiGroupVisible] = useState(false);

  const handleSmileyClick = () => {
    setIsEmojiGroupVisible(!isEmojiGroupVisible);
  };
  const [isEmojiGroupVisible1, setIsEmojiGroupVisible1] = useState(false);

  const handleSmileyClick1 = () => {
    setIsEmojiGroupVisible1(!isEmojiGroupVisible1);
  };
  const [isEmojiGroupVisible2, setIsEmojiGroupVisible2] = useState(false);
  const handleSmileyClick2 = () => {
    setIsEmojiGroupVisible2(!isEmojiGroupVisible2);
  };
  const [isEmojiGroupVisible3, setIsEmojiGroupVisible3] = useState(false);
  const handleSmileyClick3 = () => {
    setIsEmojiGroupVisible3(!isEmojiGroupVisible3);
  };
  const [isEmojiGroupVisible4, setIsEmojiGroupVisible4] = useState(false);
  const handleSmileyClick4 = () => {
    setIsEmojiGroupVisible4(!isEmojiGroupVisible4);
  };
  const [isEmojiGroupVisible5, setIsEmojiGroupVisible5] = useState(false);
  const handleSmileyClick5 = () => {
    setIsEmojiGroupVisible5(!isEmojiGroupVisible5);
  };
  const [isEmojiGroupVisible6, setIsEmojiGroupVisible6] = useState(false);
  const handleSmileyClick6 = () => {
    setIsEmojiGroupVisible6(!isEmojiGroupVisible6);
  };
  const [isEmojiGroupVisible7, setIsEmojiGroupVisible7] = useState(false);
  const handleSmileyClick7 = () => {
    setIsEmojiGroupVisible7(!isEmojiGroupVisible7);
  };
  const [isEmojiGroupVisible8, setIsEmojiGroupVisible8] = useState(false);
  const handleSmileyClick8 = () => {
    setIsEmojiGroupVisible8(!isEmojiGroupVisible8);
  };

  const routes = all_routes;
  const [isSmallChatOptions, setIsSmallChatOptions] = useState(false);
  const [isShowRightSidebar, setIsShowRightSidebar] = useState(false);

  const handleIconClick = () => {
    setIsSmallChatOptions(!isSmallChatOptions);
    setIsShowRightSidebar(!isSmallChatOptions);
  };

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
          <div
            id="chats"
            className="left-sidebar-wrap sidebar active slimscroll"
          >
            <Scrollbars>
              <div className="slimscroll">
                {/* Left Chat Title */}
                <div className="left-chat-title all-chats d-flex justify-content-between align-items-center">
                  <div className="select-group-chat">
                    <div className="dropdown">
                      <Link
                        to="#"
                        className="dropdown-toggle"
                        data-bs-toggle="dropdown"
                      >
                        All Group
                        <i className="bx bx-chevron-down" />
                      </Link>
                      <ul className="dropdown-menu">
                        <li>
                          <Link className="dropdown-item" to={routes.group}>
                            All Group
                          </Link>
                        </li>
                        <li>
                          <Link className="dropdown-item" to={routes.archiveChat}>
                            Archive Group
                          </Link>
                        </li>
                        <li>
                          <Link className="dropdown-item" to={routes.pinnedChat}>
                            Pinned Group
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="add-section">
                    <ul>
                      <li>
                        <Link
                          to="#"
                          className="user-chat-search-btn"
                          onClick={() => setVisible(!visible)}
                        >
                          <i className="bx bx-search" />
                        </Link>
                      </li>
                      <li>
                        <div className="chat-action-btns">
                          <div className="chat-action-col">
                            <Link
                              className="#"
                              to="#"
                              data-bs-toggle="dropdown"
                              aria-expanded="false"
                            >
                              <i className="bx bx-dots-vertical-rounded" />
                            </Link>
                            <div className="dropdown-menu dropdown-menu-end">
                              <Link
                                to="#"
                                className="dropdown-item "
                                data-bs-toggle="modal"
                                data-bs-target="#new-chat"
                              >
                                <span>
                                  <i className="bx bx-message-rounded-add" />
                                </span>
                                New Group{" "}
                              </Link>
                              <Link
                                to="#"
                                className="dropdown-item"
                                data-bs-toggle="modal"
                                data-bs-target="#new-group"
                              >
                                <span>
                                  <i className="bx bx-user-circle" />
                                </span>
                                Create Group
                              </Link>
                              <Link to="#" className="dropdown-item">
                                <span>
                                  <i className="bx bx-user-plus" />
                                </span>
                                Invite Others
                              </Link>
                            </div>
                          </div>
                        </div>
                      </li>
                    </ul>
                    {/* Chat Search */}
                    <div
                      className={
                        visible
                          ? "user-chat-search visible-chat"
                          : "user-chat-search"
                      }
                    >
                      <form>
                        <span className="form-control-feedback">
                          <i className="bx bx-search" />
                        </span>
                        <input
                          type="text"
                          name="chat-search"
                          placeholder="Search"
                          className="form-control"
                        />
                        <div
                          className="user-close-btn-chat"
                          onClick={() => setVisible(!visible)}
                        >
                          <span className="material-icons">close</span>
                        </div>
                      </form>
                    </div>
                    {/* /Chat Search */}
                  </div>
                </div>
                {/* /Left Chat Title */}
                <div className="sidebar-body chat-body" id="chatsidebar">
                  {/* Left Chat Title */}
                  <div className="d-flex justify-content-between align-items-center ps-0 pe-0">
                    <div className="fav-title pin-chat">
                      <h6>Archived </h6>
                    </div>
                  </div>
                  {/* /Left Chat Title */}
                  <ul className="user-list mb-3">
                    <li className="user-list-item chat-user-list">
                      <Link to="#">
                        <div className="avatar avatar-online">
                          <ImageWithBasePath
                            src="/assets/img/avatar/avatar-1.jpg"
                            className="rounded-circle"
                            alt="image"
                          />
                        </div>
                        <div className="users-list-body">
                          <div>
                            <h5>User Research</h5>
                            <p>
                              Hollis:
                              <i className="feather-image ms-1 me-1" />
                              Photo
                            </p>
                          </div>
                          <div className="last-chat-time">
                            <small className="text-muted">10:20 PM</small>
                            <div className="chat-pin">
                              <i className="bx bx-archive-in me-2" />
                            </div>
                          </div>
                        </div>
                      </Link>
                      <div className="chat-hover">
                        <div className="chat-action-col">
                          <span className="d-flex" data-bs-toggle="dropdown">
                            <i className="bx bx-dots-vertical-rounded" />
                          </span>
                          <div className="dropdown-menu chat-drop-menu dropdown-menu-end">
                            <span className="dropdown-item ">
                              <span>
                                <i className="bx bx-archive-in" />
                              </span>
                              Unarchive Group{" "}
                            </span>
                            <span
                              className="dropdown-item"
                              data-bs-toggle="modal"
                              data-bs-target="#mute-notification"
                            >
                              <span>
                                <i className="bx bx-volume-mute" />
                              </span>
                              Mute Notification
                            </span>
                            <span className="dropdown-item">
                              <span>
                                <i className="bx bx-log-out" />
                              </span>
                              Exit Group
                            </span>
                            <span className="dropdown-item">
                              <span>
                                <i className="bx bx-pin" />
                              </span>
                              Pin Group
                            </span>
                            <span className="dropdown-item">
                              <span>
                                <i className="bx bx-check-square" />
                              </span>
                              Mark as Unread
                            </span>
                          </div>
                        </div>
                      </div>
                    </li>
                  </ul>
                  {/* Left Chat Title */}
                  <div className="d-flex justify-content-between align-items-center ps-0 pe-0">
                    <div className="fav-title pin-chat">
                      <h6>Recent Group</h6>
                    </div>
                  </div>
                  {/* /Left Chat Title */}
                  <ul className="user-list">
                    <li className="user-list-item chat-user-list">
                      <Link to="#" className="status-active">
                        <div className="avatar">
                          <ImageWithBasePath
                            src="/assets/img/group/group-01.jpg"
                            className="rounded-circle"
                            alt="image"
                          />
                        </div>
                        <div className="users-list-body">
                          <div>
                            <h5>UI UX Designer</h5>
                            <p>
                              James:
                              <i className="feather-video ms-1 me-1" />
                              Video
                            </p>
                          </div>
                          <div className="last-chat-time">
                            <small className="text-muted">10:20 PM</small>
                          </div>
                        </div>
                      </Link>
                      <div className="chat-hover">
                        <div className="chat-action-col">
                          <span className="d-flex" data-bs-toggle="dropdown">
                            <i className="bx bx-dots-vertical-rounded" />
                          </span>
                          <div className="dropdown-menu chat-drop-menu dropdown-menu-end">
                            <span className="dropdown-item ">
                              <span>
                                <i className="bx bx-archive-in" />
                              </span>
                              Archive Group{" "}
                            </span>
                            <span
                              className="dropdown-item"
                              data-bs-toggle="modal"
                              data-bs-target="#mute-notification"
                            >
                              <span>
                                <i className="bx bx-volume-mute" />
                              </span>
                              Mute Notification
                            </span>
                            <span className="dropdown-item">
                              <span>
                                <i className="bx bx-log-out" />
                              </span>
                              Exit Group
                            </span>
                            <span className="dropdown-item">
                              <span>
                                <i className="bx bx-pin" />
                              </span>
                              Pin Group
                            </span>
                            <span className="dropdown-item">
                              <span>
                                <i className="bx bx-check-square" />
                              </span>
                              Mark as Unread
                            </span>
                          </div>
                        </div>
                      </div>
                    </li>
                    <li className="user-list-item chat-user-list">
                      <Link to="#">
                        <div>
                          <div className="avatar avatar-online">
                            <ImageWithBasePath
                              src="/assets/img/group/group-02.jpg"
                              className="rounded-circle"
                              alt="image"
                            />
                          </div>
                        </div>
                        <div className="users-list-body">
                          <div>
                            <h5>Graphics Team</h5>
                            <p>
                              <span className="animate-typing-col me-1">
                                {" "}
                                Debra is Typing
                                <span className="dot" />
                                <span className="dot" />
                                <span className="dot" />
                              </span>
                            </p>
                          </div>
                          <div className="last-chat-time">
                            <small className="text-muted">Just Now</small>
                            <div className="chat-pin">
                              <span className="count-message">5</span>
                            </div>
                          </div>
                        </div>
                      </Link>
                      <div className="chat-hover ms-1">
                        <div className="chat-action-col">
                          <span className="d-flex" data-bs-toggle="dropdown">
                            <i className="bx bx-dots-vertical-rounded" />
                          </span>
                          <div className="dropdown-menu chat-drop-menu dropdown-menu-end">
                            <span className="dropdown-item ">
                              <span>
                                <i className="bx bx-archive-in" />
                              </span>
                              Archive Group{" "}
                            </span>
                            <span
                              className="dropdown-item"
                              data-bs-toggle="modal"
                              data-bs-target="#mute-notification"
                            >
                              <span>
                                <i className="bx bx-volume-mute" />
                              </span>
                              Mute Notification
                            </span>
                            <span className="dropdown-item">
                              <span>
                                <i className="bx bx-log-out" />
                              </span>
                              Exit Group
                            </span>
                            <span className="dropdown-item">
                              <span>
                                <i className="bx bx-pin" />
                              </span>
                              Pin Group
                            </span>
                            <span className="dropdown-item">
                              <span>
                                <i className="bx bx-check-square" />
                              </span>
                              Mark as Read
                            </span>
                          </div>
                        </div>
                      </div>
                    </li>
                    <li className="user-list-item chat-user-list">
                      <Link to="#">
                        <div className="avatar">
                          <ImageWithBasePath
                            src="/assets/img/group/group-03.jpg"
                            className="rounded-circle"
                            alt="image"
                          />
                        </div>
                        <div className="users-list-body">
                          <div>
                            <h5>HTML Team</h5>
                            <p>
                              Debra:
                              <i className="feather-file-text me-1" />
                              Sticker
                            </p>
                          </div>
                          <div className="last-chat-time">
                            <small className="text-muted">Just Now</small>
                            <div className="chat-pin">
                              <span className="count-message">7</span>
                            </div>
                          </div>
                        </div>
                      </Link>
                      <div className="chat-hover ms-1">
                        <div className="chat-action-col">
                          <span className="d-flex" data-bs-toggle="dropdown">
                            <i className="bx bx-dots-vertical-rounded" />
                          </span>
                          <div className="dropdown-menu chat-drop-menu dropdown-menu-end">
                            <span className="dropdown-item ">
                              <span>
                                <i className="bx bx-archive-in" />
                              </span>
                              Archive Group{" "}
                            </span>
                            <span
                              className="dropdown-item"
                              data-bs-toggle="modal"
                              data-bs-target="#mute-notification"
                            >
                              <span>
                                <i className="bx bx-volume-mute" />
                              </span>
                              Mute Notification
                            </span>
                            <span className="dropdown-item">
                              <span>
                                <i className="bx bx-log-out" />
                              </span>
                              Exit Group
                            </span>
                            <span className="dropdown-item">
                              <span>
                                <i className="bx bx-pin" />
                              </span>
                              Pin Group
                            </span>
                            <span className="dropdown-item">
                              <span>
                                <i className="bx bx-check-square" />
                              </span>
                              Mark as Read
                            </span>
                          </div>
                        </div>
                      </div>
                    </li>
                    <li className="user-list-item chat-user-list">
                      <Link to="#">
                        <div>
                          <div className="avatar avatar-online">
                            <ImageWithBasePath
                              src="/assets/img/group/group-04.jpg"
                              className="rounded-circle"
                              alt="image"
                            />
                          </div>
                        </div>
                        <div className="users-list-body">
                          <div>
                            <h5>Columbus Studios</h5>
                            <p>
                              Horace:
                              <i className="feather-file-text ms-1 me-1" />
                              Design Guide....
                            </p>
                          </div>
                          <div className="last-chat-time">
                            <small className="text-muted">Just Now</small>
                            <div className="chat-pin">
                              <span className="count-message">2</span>
                            </div>
                          </div>
                        </div>
                      </Link>
                      <div className="chat-hover ms-1">
                        <div className="chat-action-col">
                          <span className="d-flex" data-bs-toggle="dropdown">
                            <i className="bx bx-dots-vertical-rounded" />
                          </span>
                          <div className="dropdown-menu chat-drop-menu dropdown-menu-end">
                            <span className="dropdown-item ">
                              <span>
                                <i className="bx bx-archive-in" />
                              </span>
                              Archive Group{" "}
                            </span>
                            <span
                              className="dropdown-item"
                              data-bs-toggle="modal"
                              data-bs-target="#mute-notification"
                            >
                              <span>
                                <i className="bx bx-volume-mute" />
                              </span>
                              Mute Notification
                            </span>
                            <span className="dropdown-item">
                              <span>
                                <i className="bx bx-log-out" />
                              </span>
                              Exit Group
                            </span>
                            <span className="dropdown-item">
                              <span>
                                <i className="bx bx-pin" />
                              </span>
                              Pin Group
                            </span>
                            <span className="dropdown-item">
                              <span>
                                <i className="bx bx-check-square" />
                              </span>
                              Mark as Read
                            </span>
                          </div>
                        </div>
                      </div>
                    </li>
                    <li className="user-list-item chat-user-list">
                      <Link to="#">
                        <div>
                          <div className="avatar ">
                            <ImageWithBasePath
                              src="/assets/img/group/group-05.jpg"
                              className="rounded-circle"
                              alt="image"
                            />
                          </div>
                        </div>
                        <div className="users-list-body">
                          <div>
                            <h5>Themeforest Group</h5>
                            <p>Jones:https://youtube...</p>
                          </div>
                          <div className="last-chat-time">
                            <small className="text-muted">Just Now</small>
                            <div className="chat-pin">
                              <span className="count-message">10</span>
                            </div>
                          </div>
                        </div>
                      </Link>
                      <div className="chat-hover ms-1">
                        <div className="chat-action-col">
                          <span className="d-flex" data-bs-toggle="dropdown">
                            <i className="bx bx-dots-vertical-rounded" />
                          </span>
                          <div className="dropdown-menu chat-drop-menu dropdown-menu-end">
                            <span className="dropdown-item ">
                              <span>
                                <i className="bx bx-archive-in" />
                              </span>
                              Archive Group{" "}
                            </span>
                            <span
                              className="dropdown-item"
                              data-bs-toggle="modal"
                              data-bs-target="#mute-notification"
                            >
                              <span>
                                <i className="bx bx-volume-mute" />
                              </span>
                              Mute Notification
                            </span>
                            <span className="dropdown-item">
                              <span>
                                <i className="bx bx-log-out" />
                              </span>
                              Exit Group
                            </span>
                            <span className="dropdown-item">
                              <span>
                                <i className="bx bx-pin" />
                              </span>
                              Pin Group
                            </span>
                            <span className="dropdown-item">
                              <span>
                                <i className="bx bx-check-square" />
                              </span>
                              Mark as Read
                            </span>
                          </div>
                        </div>
                      </div>
                    </li>
                    <li className="user-list-item chat-user-list">
                      <Link to="#">
                        <div>
                          <div className="avatar avatar-online">
                            <ImageWithBasePath
                              src="/assets/img/group/group-06.jpg"
                              className="rounded-circle"
                              alt="image"
                            />
                          </div>
                        </div>
                        <div className="users-list-body">
                          <div>
                            <h5>Competition Team </h5>
                            <p>+91 8888888888 joined using...</p>
                          </div>
                          <div className="last-chat-time">
                            <small className="text-muted">Just Now</small>
                            <div className="chat-pin">
                              <span className="count-message">11</span>
                            </div>
                          </div>
                        </div>
                      </Link>
                      <div className="chat-hover ms-1">
                        <div className="chat-action-col">
                          <span className="d-flex" data-bs-toggle="dropdown">
                            <i className="bx bx-dots-vertical-rounded" />
                          </span>
                          <div className="dropdown-menu chat-drop-menu dropdown-menu-end">
                            <span className="dropdown-item ">
                              <span>
                                <i className="bx bx-archive-in" />
                              </span>
                              Archive Group{" "}
                            </span>
                            <span
                              className="dropdown-item"
                              data-bs-toggle="modal"
                              data-bs-target="#mute-notification"
                            >
                              <span>
                                <i className="bx bx-volume-mute" />
                              </span>
                              Mute Notification
                            </span>
                            <span className="dropdown-item">
                              <span>
                                <i className="bx bx-log-out" />
                              </span>
                              Exit Group
                            </span>
                            <span className="dropdown-item">
                              <span>
                                <i className="bx bx-pin" />
                              </span>
                              Pin Group
                            </span>
                            <span className="dropdown-item">
                              <span>
                                <i className="bx bx-check-square" />
                              </span>
                              Mark as Read
                            </span>
                          </div>
                        </div>
                      </div>
                    </li>
                    <li className="user-list-item chat-user-list">
                      <Link to="#">
                        <div>
                          <div className="avatar">
                            <ImageWithBasePath
                              src="/assets/img/group/group-07.jpg"
                              className="rounded-circle"
                              alt="image"
                            />
                          </div>
                        </div>
                        <div className="users-list-body">
                          <div>
                            <h5>Cricket Team</h5>
                            <p>Smith:Ok Sure</p>
                          </div>
                          <div className="last-chat-time">
                            <small className="text-muted">Just Now</small>
                          </div>
                        </div>
                      </Link>
                      <div className="chat-hover ms-1">
                        <div className="chat-action-col">
                          <span className="d-flex" data-bs-toggle="dropdown">
                            <i className="bx bx-dots-vertical-rounded" />
                          </span>
                          <div className="dropdown-menu chat-drop-menu dropdown-menu-end">
                            <span className="dropdown-item ">
                              <span>
                                <i className="bx bx-archive-in" />
                              </span>
                              Archive Group{" "}
                            </span>
                            <span
                              className="dropdown-item"
                              data-bs-toggle="modal"
                              data-bs-target="#mute-notification"
                            >
                              <span>
                                <i className="bx bx-volume-mute" />
                              </span>
                              Mute Notification
                            </span>
                            <span className="dropdown-item">
                              <span>
                                <i className="bx bx-log-out" />
                              </span>
                              Exit Group
                            </span>
                            <span className="dropdown-item">
                              <span>
                                <i className="bx bx-pin" />
                              </span>
                              Pin Group
                            </span>
                            <span className="dropdown-item">
                              <span>
                                <i className="bx bx-check-square" />
                              </span>
                              Mark as Unread
                            </span>
                          </div>
                        </div>
                      </div>
                    </li>
                    <li className="user-list-item chat-user-list">
                      <Link to="#">
                        <div>
                          <div className="avatar avatar-online">
                            <ImageWithBasePath
                              src="/assets/img/group/group-08.jpg"
                              className="rounded-circle"
                              alt="image"
                            />
                          </div>
                        </div>
                        <div className="users-list-body">
                          <div>
                            <h5>Dreamguys</h5>
                            <p>Have you called them?</p>
                          </div>
                          <div className="last-chat-time">
                            <small className="text-muted">10:20 PM</small>
                          </div>
                        </div>
                      </Link>
                      <div className="chat-hover ms-1">
                        <div className="chat-action-col">
                          <span className="d-flex" data-bs-toggle="dropdown">
                            <i className="bx bx-dots-vertical-rounded" />
                          </span>
                          <div className="dropdown-menu chat-drop-menu dropdown-menu-end">
                            <span className="dropdown-item ">
                              <span>
                                <i className="bx bx-archive-in" />
                              </span>
                              Archive Group{" "}
                            </span>
                            <span
                              className="dropdown-item"
                              data-bs-toggle="modal"
                              data-bs-target="#mute-notification"
                            >
                              <span>
                                <i className="bx bx-volume-mute" />
                              </span>
                              Mute Notification
                            </span>
                            <span className="dropdown-item">
                              <span>
                                <i className="bx bx-log-out" />
                              </span>
                              Exit Group
                            </span>
                            <span className="dropdown-item">
                              <span>
                                <i className="bx bx-pin" />
                              </span>
                              Pin Group
                            </span>
                            <span className="dropdown-item">
                              <span>
                                <i className="bx bx-check-square" />
                              </span>
                              Mark as Unread
                            </span>
                          </div>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </Scrollbars>
          </div>
          {/* / Chats sidebar */}
        </div>
        {/* /Sidebar group */}
        {/* Chat */}
        <div className="chat" id="middle">
          <div>
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
                  <ImageWithBasePath
                    src="/assets/img/group/group-01.jpg"
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
                  <ImageWithBasePath
                    className="avatar-img rounded-circle"
                    alt="User Image"
                    src="/assets/img/avatar/avatar-6.jpg"
                  />
                </div>
                <div className="avatar avatar-xs group_img group_header">
                  <ImageWithBasePath
                    className="avatar-img rounded-circle"
                    alt="User Image"
                    src="/assets/img/avatar/avatar-4.jpg"
                  />
                </div>
                <div className="avatar avatar-xs group_img group_header">
                  <ImageWithBasePath
                    className="avatar-img rounded-circle"
                    alt="User Image"
                    src="/assets/img/avatar/avatar-1.jpg"
                  />
                </div>
                <div className="avatar avatar-xs group_img group_header">
                  <ImageWithBasePath
                    className="avatar-img rounded-circle"
                    alt="User Image"
                    src="/assets/img/avatar/avatar-2.jpg"
                  />
                </div>
                <div className="avatar avatar-xs group_img group_header">
                  <span className="avatar-title rounded-circle">+25</span>
                </div>
              </div>
              <div
                className={`chat-options ${isSmallChatOptions ? "chat-small" : ""}`}
              >
                <ul className="list-inline">
                  <li className="list-inline-item">
                    <OverlayTrigger
                      placement="bottom"
                      overlay={<Tooltip id="tooltip-group">Search</Tooltip>}
                    >
                      <Link
                        onClick={() => setSearchChat(!searchChat)}
                        to="#"
                        className="btn btn-outline-light chat-search-btn"
                      >
                        <i className="bx bx-search" />
                      </Link>
                    </OverlayTrigger>
                  </li>
                  <li className="list-inline-item">
                    <OverlayTrigger
                      placement="bottom"
                      overlay={
                        <Tooltip id="tooltip-video-call">Video Call</Tooltip>
                      }
                    >
                      <Link
                        to="#"
                        className="btn btn-outline-light"
                        data-bs-toggle="modal"
                        data-bs-target="#video_call"
                      >
                        <i className="bx bx-video" />
                      </Link>
                    </OverlayTrigger>
                  </li>
                  <li className="list-inline-item">
                    <OverlayTrigger
                      placement="bottom"
                      overlay={
                        <Tooltip id="tooltip-voice-call">Voice Call</Tooltip>
                      }
                    >
                      <Link
                        to="#"
                        className="btn btn-outline-light"
                        data-bs-toggle="modal"
                        data-bs-target="#voice_call"
                      >
                        <i className="bx bx-phone" />
                      </Link>
                    </OverlayTrigger>
                  </li>

                  <li className="list-inline-item dream_profile_menu">
                    <OverlayTrigger
                      placement="bottom"
                      overlay={<Tooltip>Contact Info</Tooltip>}
                    >
                      <Link
                        to="#"
                        className="btn btn-outline-light not-chat-user"
                        onClick={handleIconClick}
                      >
                        <i className="bx bx-info-circle" />
                      </Link>
                    </OverlayTrigger>
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
                        Close Group{" "}
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
                        Delete Group
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
              <div
                className={
                  searchChat ? "chat-search visible-chat" : "user-chat-search"
                }
              >
                <form>
                  <span className="form-control-feedback">
                    <i className="bx bx-search" />
                  </span>
                  <input
                    type="text"
                    name="chat-search"
                    placeholder="Search Chats"
                    className="form-control"
                  />
                  <div
                    className="close-btn-chat"
                    onClick={() => setSearchChat(!searchChat)}
                  >
                    <span className="material-icons">close</span>
                  </div>
                </form>
              </div>
              {/* /Chat Search */}
            </div>
            <div className="chat-body chat-page-group slimscroll">
              <div className="messages">
                <div className="chats">
                  <div className="chat-avatar">
                    <ImageWithBasePath
                      src="/assets/img/avatar/avatar-2.jpg"
                      className="rounded-circle dreams_chat"
                      alt="image"
                    />
                  </div>
                  <div className="chat-content">
                    <div className="chat-profile-name">
                      <h6>
                        Mark Villiams<span>8:16 PM</span>
                        <span className="check-star msg-star d-none">
                          <i className="bx bxs-star" />
                        </span>
                      </h6>
                      <div className="chat-action-btns ms-2">
                        <div className="chat-action-col">
                          <Link className="#" to="#" data-bs-toggle="dropdown">
                            <i className="bx bx-dots-horizontal-rounded" />
                          </Link>
                          <div className="dropdown-menu chat-drop-menu dropdown-menu-end">
                            <Link
                              to="#"
                              className="dropdown-item message-info-left"
                            >
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
                            <Link to="#" className="dropdown-item click-star">
                              <span>
                                <i className="bx bx-star" />
                              </span>
                              <span className="star-msg">Star Message</span>
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
                              <i
                                className="bx bx-smile"
                                onClick={handleSmileyClick}
                              />
                            </Link>

                            <div
                              className="emoj-group-list"
                              style={{
                                display: isEmojiGroupVisible ? "block" : "none",
                              }}
                            >
                              <ul>
                                <li>
                                  <Link to="#">
                                    <ImageWithBasePath
                                      src="/assets/img/icon/emoj-icon-01.svg"
                                      alt="Icon"
                                    />
                                  </Link>
                                </li>
                                <li>
                                  <Link to="#">
                                    <ImageWithBasePath
                                      src="/assets/img/icon/emoj-icon-02.svg"
                                      alt="Icon"
                                    />
                                  </Link>
                                </li>
                                <li>
                                  <Link to="#">
                                    <ImageWithBasePath
                                      src="/assets/img/icon/emoj-icon-03.svg"
                                      alt="Icon"
                                    />
                                  </Link>
                                </li>
                                <li>
                                  <Link to="#">
                                    <ImageWithBasePath
                                      src="/assets/img/icon/emoj-icon-04.svg"
                                      alt="Icon"
                                    />
                                  </Link>
                                </li>
                                <li>
                                  <Link to="#">
                                    <ImageWithBasePath
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
                        <i className="bx bx-check-double me-1 inactive-check" />
                        Alex Smith<span>8:16 PM</span>
                        <span className="check-star msg-star-one d-none">
                          <i className="bx bxs-star" />
                        </span>
                      </h6>
                      <div className="chat-action-btns ms-2">
                        <div className="chat-action-col">
                          <Link className="#" to="#" data-bs-toggle="dropdown">
                            <i className="bx bx-dots-horizontal-rounded" />
                          </Link>
                          <div className="dropdown-menu chat-drop-menu dropdown-menu-end">
                            <Link
                              to="#"
                              className="dropdown-item message-info-left"
                            >
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
                            <Link
                              to="#"
                              className="dropdown-item click-star-one"
                            >
                              <span>
                                <i className="bx bx-star" />
                              </span>
                              <span className="star-msg-one">Star Message</span>
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
                            <Link to="#" onClick={handleSmileyClick1}>
                              <i className="bx bx-smile" />
                            </Link>
                            <div
                              className="emoj-group-list"
                              style={{
                                display: isEmojiGroupVisible1
                                  ? "block"
                                  : "none",
                              }}
                            >
                              <ul>
                                <li>
                                  <Link to="#">
                                    <ImageWithBasePath
                                      src="/assets/img/icon/emoj-icon-01.svg"
                                      alt="Icon"
                                    />
                                  </Link>
                                </li>
                                <li>
                                  <Link to="#">
                                    <ImageWithBasePath
                                      src="/assets/img/icon/emoj-icon-02.svg"
                                      alt="Icon"
                                    />
                                  </Link>
                                </li>
                                <li>
                                  <Link to="#">
                                    <ImageWithBasePath
                                      src="/assets/img/icon/emoj-icon-03.svg"
                                      alt="Icon"
                                    />
                                  </Link>
                                </li>
                                <li>
                                  <Link to="#">
                                    <ImageWithBasePath
                                      src="/assets/img/icon/emoj-icon-04.svg"
                                      alt="Icon"
                                    />
                                  </Link>
                                </li>
                                <li>
                                  <Link to="#">
                                    <ImageWithBasePath
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
                                <ImageWithBasePath
                                  src="/assets/img/icon/play-01.svg"
                                  alt="image"
                                />
                              </span>
                            </Link>
                          </li>
                          <li>
                            <ImageWithBasePath
                              src="/assets/img/voice.svg"
                              alt="image"
                            />
                          </li>
                          <li>0:05</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="chat-avatar">
                    <ImageWithBasePath
                      src="/assets/img/avatar/avatar-10.jpg"
                      className="rounded-circle dreams_chat"
                      alt="image"
                    />
                  </div>
                </div>
                <div className="chats">
                  <div className="chat-avatar">
                    <ImageWithBasePath
                      src="/assets/img/avatar/avatar-1.jpg"
                      className="rounded-circle dreams_chat"
                      alt="image"
                    />
                  </div>
                  <div className="chat-content">
                    <div className="chat-profile-name">
                      <h6>
                        Elizabeth Sosa<span>8:16 PM</span>
                        <span className="check-star msg-star-five d-none">
                          <i className="bx bxs-star" />
                        </span>
                      </h6>
                      <div className="chat-action-btns ms-2">
                        <div className="chat-action-col">
                          <Link className="#" to="#" data-bs-toggle="dropdown">
                            <i className="bx bx-dots-horizontal-rounded" />
                          </Link>
                          <div className="dropdown-menu chat-drop-menu dropdown-menu-end">
                            <Link
                              to="#"
                              className="dropdown-item message-info-left"
                            >
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
                            <Link
                              to="#"
                              className="dropdown-item click-star-five"
                            >
                              <span>
                                <i className="bx bx-star" />
                              </span>
                              <span className="star-msg-five">
                                Star Message
                              </span>
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
                      <ImageWithBasePath src="/assets/img/award.jpg" alt="img" />
                      <div className="emoj-group">
                        <ul>
                          <li className="emoj-action">
                            <Link to="#" onClick={handleSmileyClick2}>
                              <i className="bx bx-smile" />
                            </Link>
                            <div
                              className="emoj-group-list"
                              style={{
                                display: isEmojiGroupVisible2
                                  ? "block"
                                  : "none",
                              }}
                            >
                              <ul>
                                <li>
                                  <Link to="#">
                                    <ImageWithBasePath
                                      src="/assets/img/icon/emoj-icon-01.svg"
                                      alt="Icon"
                                    />
                                  </Link>
                                </li>
                                <li>
                                  <Link to="#">
                                    <ImageWithBasePath
                                      src="/assets/img/icon/emoj-icon-02.svg"
                                      alt="Icon"
                                    />
                                  </Link>
                                </li>
                                <li>
                                  <Link to="#">
                                    <ImageWithBasePath
                                      src="/assets/img/icon/emoj-icon-03.svg"
                                      alt="Icon"
                                    />
                                  </Link>
                                </li>
                                <li>
                                  <Link to="#">
                                    <ImageWithBasePath
                                      src="/assets/img/icon/emoj-icon-04.svg"
                                      alt="Icon"
                                    />
                                  </Link>
                                </li>
                                <li>
                                  <Link to="#">
                                    <ImageWithBasePath
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
                        <i className="bx bx-check-double me-1 active-check" />
                        Alex Smith<span>8:16 PM</span>
                        <span className="check-star msg-star-three d-none">
                          <i className="bx bxs-star" />
                        </span>
                      </h6>
                      <div className="chat-action-btns ms-2">
                        <div className="chat-action-col">
                          <Link className="#" to="#" data-bs-toggle="dropdown">
                            <i className="bx bx-dots-horizontal-rounded" />
                          </Link>
                          <div className="dropdown-menu chat-drop-menu dropdown-menu-end">
                            <Link
                              to="#"
                              className="dropdown-item message-info-left"
                            >
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
                            <Link
                              to="#"
                              className="dropdown-item click-star-three"
                            >
                              <span>
                                <i className="bx bx-star" />
                              </span>
                              <span className="star-msg-three">
                                Star Message
                              </span>
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
                            <Link to="#" onClick={handleSmileyClick3}>
                              <i className="bx bx-smile" />
                            </Link>
                            <div
                              className="emoj-group-list"
                              style={{
                                display: isEmojiGroupVisible3
                                  ? "block"
                                  : "none",
                              }}
                            >
                              <ul>
                                <li>
                                  <Link to="#">
                                    <ImageWithBasePath
                                      src="/assets/img/icon/emoj-icon-01.svg"
                                      alt="Icon"
                                    />
                                  </Link>
                                </li>
                                <li>
                                  <Link to="#">
                                    <ImageWithBasePath
                                      src="/assets/img/icon/emoj-icon-02.svg"
                                      alt="Icon"
                                    />
                                  </Link>
                                </li>
                                <li>
                                  <Link to="#">
                                    <ImageWithBasePath
                                      src="/assets/img/icon/emoj-icon-03.svg"
                                      alt="Icon"
                                    />
                                  </Link>
                                </li>
                                <li>
                                  <Link to="#">
                                    <ImageWithBasePath
                                      src="/assets/img/icon/emoj-icon-04.svg"
                                      alt="Icon"
                                    />
                                  </Link>
                                </li>
                                <li>
                                  <Link to="#">
                                    <ImageWithBasePath
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
                          <Lightbox
                            open={open1}
                            close={() => setOpen1(false)}
                            slides={[
                              { src: "assets/img/media/media-02.jpg" },
                              { src: "assets/img/media/media-03.jpg" },
                              { src: "assets/img/media/media-01.jpg" },
                            ]}
                          />
                          <li>
                            <div className="image-download-col">
                              <Link
                                onClick={() => setOpen1(true)}
                                href="assets/img/media/media-02.jpg"
                                data-fancybox="gallery"
                                className="fancybox"
                              >
                                <ImageWithBasePath
                                  src="/assets/img/media/media-02.jpg"
                                  alt=""
                                />
                              </Link>
                            </div>
                          </li>
                          <li>
                            <div className="image-download-col ">
                              <Link
                                onClick={() => setOpen1(true)}
                                href="assets/img/media/media-03.jpg"
                                data-fancybox="gallery"
                                className="fancybox"
                              >
                                <ImageWithBasePath
                                  src="/assets/img/media/media-03.jpg"
                                  alt=""
                                />
                              </Link>
                            </div>
                          </li>
                          <li>
                            <div className="image-download-col image-not-download">
                              <Link
                                onClick={() => setOpen1(true)}
                                href="assets/img/media/media-01.jpg"
                                data-fancybox="gallery"
                                className="fancybox"
                              >
                                <ImageWithBasePath
                                  src="/assets/img/media/media-01.jpg"
                                  alt=""
                                />
                                <span>10+</span>
                              </Link>
                            </div>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="chat-avatar">
                    <ImageWithBasePath
                      src="/assets/img/avatar/avatar-10.jpg"
                      className="rounded-circle dreams_chat"
                      alt="image"
                    />
                  </div>
                </div>
                <div className="chats">
                  <div className="chat-avatar">
                    <ImageWithBasePath
                      src="/assets/img/avatar/avatar-4.jpg"
                      className="rounded-circle dreams_chat"
                      alt="image"
                    />
                  </div>
                  <div className="chat-content">
                    <div className="chat-profile-name">
                      <h6>
                        James Albert<span>8:16 PM</span>
                        <span className="check-star msg-star-four d-none">
                          <i className="bx bxs-star" />
                        </span>
                      </h6>
                      <div className="chat-action-btns ms-2">
                        <div className="chat-action-col">
                          <Link className="#" to="#" data-bs-toggle="dropdown">
                            <i className="bx bx-dots-horizontal-rounded" />
                          </Link>
                          <div className="dropdown-menu chat-drop-menu dropdown-menu-end">
                            <Link
                              to="#"
                              className="dropdown-item message-info-left"
                            >
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
                            <Link
                              to="#"
                              className="dropdown-item click-star-four"
                            >
                              <span>
                                <i className="bx bx-star" />
                              </span>
                              <span className="star-msg-four">
                                Star Message
                              </span>
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
                          <ImageWithBasePath
                            src="/assets/img/icon/smile-chat.svg"
                            alt="Icon"
                          />
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
                            <Link to="#" onClick={handleSmileyClick4}>
                              <i className="bx bx-smile" />
                            </Link>
                            <div
                              className="emoj-group-list"
                              style={{
                                display: isEmojiGroupVisible4
                                  ? "block"
                                  : "none",
                              }}
                            >
                              <ul>
                                <li>
                                  <Link to="#">
                                    <ImageWithBasePath
                                      src="/assets/img/icon/emoj-icon-01.svg"
                                      alt="Icon"
                                    />
                                  </Link>
                                </li>
                                <li>
                                  <Link to="#">
                                    <ImageWithBasePath
                                      src="/assets/img/icon/emoj-icon-02.svg"
                                      alt="Icon"
                                    />
                                  </Link>
                                </li>
                                <li>
                                  <Link to="#">
                                    <ImageWithBasePath
                                      src="/assets/img/icon/emoj-icon-03.svg"
                                      alt="Icon"
                                    />
                                  </Link>
                                </li>
                                <li>
                                  <Link to="#">
                                    <ImageWithBasePath
                                      src="/assets/img/icon/emoj-icon-04.svg"
                                      alt="Icon"
                                    />
                                  </Link>
                                </li>
                                <li>
                                  <Link to="#">
                                    <ImageWithBasePath
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
                            2
                            <ImageWithBasePath
                              src="/assets/img/icon/like.svg"
                              alt="Icon"
                            />
                          </Link>
                        </li>
                        <li className="comment-chat">
                          <Link to="#">
                            2
                            <ImageWithBasePath
                              src="/assets/img/icon/heart.svg"
                              alt="Icon"
                            />
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="chats">
                  <div className="chat-avatar">
                    <ImageWithBasePath
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
                            <Link
                              to="#"
                              className="dropdown-item message-info-left"
                            >
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
                      <div className="forward-msg">
                        <i className="bx bx-share me-1" />
                        Forwarded
                      </div>
                      Thank you for your support
                      <div className="emoj-group">
                        <ul>
                          <li className="emoj-action">
                            <Link to="#" onClick={handleSmileyClick5}>
                              <i className="bx bx-smile" />
                            </Link>
                            <div
                              className="emoj-group-list"
                              style={{
                                display: isEmojiGroupVisible5
                                  ? "block"
                                  : "none",
                              }}
                            >
                              <ul>
                                <li>
                                  <Link to="#">
                                    <ImageWithBasePath
                                      src="/assets/img/icon/emoj-icon-01.svg"
                                      alt="Icon"
                                    />
                                  </Link>
                                </li>
                                <li>
                                  <Link to="#">
                                    <ImageWithBasePath
                                      src="/assets/img/icon/emoj-icon-02.svg"
                                      alt="Icon"
                                    />
                                  </Link>
                                </li>
                                <li>
                                  <Link to="#">
                                    <ImageWithBasePath
                                      src="/assets/img/icon/emoj-icon-03.svg"
                                      alt="Icon"
                                    />
                                  </Link>
                                </li>
                                <li>
                                  <Link to="#">
                                    <ImageWithBasePath
                                      src="/assets/img/icon/emoj-icon-04.svg"
                                      alt="Icon"
                                    />
                                  </Link>
                                </li>
                                <li>
                                  <Link to="#">
                                    <ImageWithBasePath
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
                <div className="chats chats-right">
                  <div className="chat-content">
                    <div className="chat-profile-name justify-content-end">
                      <h6>
                        <i className="bx bx-check-double me-1 inactive-check" />
                        Alex Smith<span>8:16 PM</span>
                        <span className="check-star msg-star-three d-none">
                          <i className="bx bxs-star" />
                        </span>
                      </h6>
                      <div className="chat-action-btns ms-2">
                        <div className="chat-action-col">
                          <Link className="#" to="#" data-bs-toggle="dropdown">
                            <i className="bx bx-dots-horizontal-rounded" />
                          </Link>
                          <div className="dropdown-menu chat-drop-menu dropdown-menu-end">
                            <Link
                              to="#"
                              className="dropdown-item message-info-left"
                            >
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
                            <Link
                              to="#"
                              className="dropdown-item click-star-three"
                            >
                              <span>
                                <i className="bx bx-star" />
                              </span>
                              <span className="star-msg-three">
                                Star Message
                              </span>
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
                    <div className="message-content reply-getcontent">
                      <div className="replay-msg mb-1">
                        Thank you for your support
                      </div>
                      Welcome
                      <div className="emoj-group">
                        <ul>
                          <li className="emoj-action">
                            <Link to="#" onClick={handleSmileyClick6}>
                              <i className="bx bx-smile" />
                            </Link>
                            <div
                              className="emoj-group-list"
                              style={{
                                display: isEmojiGroupVisible6
                                  ? "block"
                                  : "none",
                              }}
                            >
                              <ul>
                                <li>
                                  <Link to="#">
                                    <ImageWithBasePath
                                      src="/assets/img/icon/emoj-icon-01.svg"
                                      alt="Icon"
                                    />
                                  </Link>
                                </li>
                                <li>
                                  <Link to="#">
                                    <ImageWithBasePath
                                      src="/assets/img/icon/emoj-icon-02.svg"
                                      alt="Icon"
                                    />
                                  </Link>
                                </li>
                                <li>
                                  <Link to="#">
                                    <ImageWithBasePath
                                      src="/assets/img/icon/emoj-icon-03.svg"
                                      alt="Icon"
                                    />
                                  </Link>
                                </li>
                                <li>
                                  <Link to="#">
                                    <ImageWithBasePath
                                      src="/assets/img/icon/emoj-icon-04.svg"
                                      alt="Icon"
                                    />
                                  </Link>
                                </li>
                                <li>
                                  <Link to="#">
                                    <ImageWithBasePath
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
                  <div className="chat-avatar">
                    <ImageWithBasePath
                      src="/assets/img/avatar/avatar-10.jpg"
                      className="rounded-circle dreams_chat"
                      alt="image"
                    />
                  </div>
                </div>
                <div className="chats">
                  <div className="chat-avatar">
                    <ImageWithBasePath
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
                            <Link
                              to="#"
                              className="dropdown-item message-info-left"
                            >
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
                      Hey, have you heard about the importance pf user research
                      in our design process?
                      <div className="emoj-group">
                        <ul>
                          <li className="emoj-action">
                            <Link to="#" onClick={handleSmileyClick7}>
                              <i className="bx bx-smile" />
                            </Link>
                            <div
                              className="emoj-group-list"
                              style={{
                                display: isEmojiGroupVisible7
                                  ? "block"
                                  : "none",
                              }}
                            >
                              <ul>
                                <li>
                                  <Link to="#">
                                    <ImageWithBasePath
                                      src="/assets/img/icon/emoj-icon-01.svg"
                                      alt="Icon"
                                    />
                                  </Link>
                                </li>
                                <li>
                                  <Link to="#">
                                    <ImageWithBasePath
                                      src="/assets/img/icon/emoj-icon-02.svg"
                                      alt="Icon"
                                    />
                                  </Link>
                                </li>
                                <li>
                                  <Link to="#">
                                    <ImageWithBasePath
                                      src="/assets/img/icon/emoj-icon-03.svg"
                                      alt="Icon"
                                    />
                                  </Link>
                                </li>
                                <li>
                                  <Link to="#">
                                    <ImageWithBasePath
                                      src="/assets/img/icon/emoj-icon-04.svg"
                                      alt="Icon"
                                    />
                                  </Link>
                                </li>
                                <li>
                                  <Link to="#">
                                    <ImageWithBasePath
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
              </div>
            </div>
          </div>
          <div className="chat-footer">
            <form>
              <div className="smile-foot">
                <div className="chat-action-btns">
                  <div className="chat-action-col">
                    <Link
                      className="action-circle"
                      to="#"
                      data-bs-toggle="dropdown"
                    >
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
                <Link
                  to="#"
                  className="action-circle"
                  onClick={handleSmileyClick8}
                >
                  <i className="bx bx-smile" />
                </Link>
                <div
                  className="emoj-group-list-foot down-emoji-circle"
                  style={{ display: isEmojiGroupVisible8 ? "block" : "none" }}
                >
                  <ul>
                    <li>
                      <Link to="#">
                        <ImageWithBasePath
                          src="/assets/img/icon/emoj-icon-01.svg"
                          alt="Icon"
                        />
                      </Link>
                    </li>
                    <li>
                      <Link to="#">
                        <ImageWithBasePath
                          src="/assets/img/icon/emoj-icon-02.svg"
                          alt="Icon"
                        />
                      </Link>
                    </li>
                    <li>
                      <Link to="#">
                        <ImageWithBasePath
                          src="/assets/img/icon/emoj-icon-03.svg"
                          alt="Icon"
                        />
                      </Link>
                    </li>
                    <li>
                      <Link to="#">
                        <ImageWithBasePath
                          src="/assets/img/icon/emoj-icon-04.svg"
                          alt="Icon"
                        />
                      </Link>
                    </li>
                    <li>
                      <Link to="#">
                        <ImageWithBasePath
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
              </div>
              <div className="smile-foot">
                <Link to="#" className="action-circle">
                  <i className="bx bx-microphone-off" />
                </Link>
              </div>
              <div className="replay-forms">
                <div className="chats forward-chat-msg reply-div d-none">
                  <div className="contact-close_call text-end">
                    <Link to="#" className="close-replay">
                      <i className="bx bx-x" />
                    </Link>
                  </div>
                  <div className="chat-avatar">
                    <ImageWithBasePath
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
                            <Link
                              to="#"
                              className="dropdown-item message-info-left"
                            >
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
                <input
                  type="text"
                  className="form-control chat_form"
                  placeholder="Type your message here..."
                />
              </div>
              <div className="form-buttons">
                <Link className="btn send-btn" to="#">
                  <i className="bx bx-paper-plane" />
                </Link>
              </div>
            </form>
          </div>
        </div>
        {/* /Chat */}
        {/* Right sidebar */}
        <div
          className={`right-sidebar right_sidebar_profile right-side-contact ${isShowRightSidebar ? "show-right-sidebar" : "hide-right-sidebar"}`}
          id="middle1"
        >
          <Scrollbars>
            <div className="right-sidebar-wrap active">
              <div className="slimscroll">
                <div className="left-chat-title d-flex justify-content-between align-items-center border-bottom-0">
                  <div className="fav-title mb-0">
                    <h6>Group Info</h6>
                  </div>
                  <div className="contact-close_call text-end">
                    <Link
                      to="#"
                      className="close_profile close_profile4"
                      onClick={handleIconClick}
                    >
                      <span className="material-icons">close</span>
                    </Link>
                  </div>
                </div>
                <div className="sidebar-body">
                  <div className="mt-0 right_sidebar_logo">
                    <div className="text-center right-sidebar-profile">
                      <figure className="avatar avatar-xl mb-3">
                        <ImageWithBasePath
                          src="/assets/img/avatar/avatar-2.jpg"
                          className="rounded-circle"
                          alt="image"
                        />
                      </figure>
                      <h5 className="profile-name">
                        UI UX Designer{" "}
                        <span>
                          <Link
                            to="#"
                            data-bs-toggle="modal"
                            data-bs-target="#edit-setting-condition"
                          >
                            <i className="bx bx-pencil ms-1" />
                          </Link>
                        </span>
                      </h5>
                      <div className="last-seen-profile">
                        <span>Group ·&nbsp;35 participants</span>
                      </div>
                      <div className="chat-options chat-option-profile">
                        <ul className="list-inline">
                          <li
                            className="list-inline-item"
                            data-bs-toggle="tooltip"
                            data-bs-placement="bottom"
                            title="Voice Call"
                          >
                            <Link
                              to={routes.audioCall}
                              className="btn btn-outline-light "
                              data-bs-toggle="modal"
                              data-bs-target="#voice_call"
                            >
                              <i className="bx bx-phone" />
                            </Link>
                          </li>
                          <li
                            className="list-inline-item "
                            data-bs-toggle="tooltip"
                            data-bs-placement="bottom"
                            title="Video Call"
                          >
                            <Link
                              to={routes.videoCall}
                              className="btn btn-outline-light profile-open"
                              data-bs-toggle="modal"
                              data-bs-target="#voice_call"
                            >
                              <i className="bx bx-video" />
                            </Link>
                          </li>
                          <li className="list-inline-item">
                            <Link
                              to={routes.index}
                              className="btn btn-outline-light"
                              data-bs-toggle="tooltip"
                              data-bs-placement="bottom"
                              title="Chat"
                            >
                              <i className="bx bx-message-square-dots" />
                            </Link>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="group-description">
                      <div className="description-sub">
                        <h5>
                          Group Description
                          <span>
                            <Link to="#">
                              <i className="bx bx-pencil" />
                            </Link>
                          </span>
                        </h5>
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit,
                        </p>
                        <p className="description-date">
                          Group created by James Albert, on 18 Feb 2022 at 1:32
                          pm
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="right-sidebar-head share-media">
                  <div className="share-media-blk">
                    <h5>Shared Media</h5>
                    <Link to="#">View All</Link>
                  </div>
                  <div className="about-media-tabs">
                    <nav>
                      <div className="nav nav-tabs " id="nav-tab">
                        <Link
                          className="nav-item nav-link active"
                          id="nav-home-tab"
                          data-bs-toggle="tab"
                          to="#info"
                        >
                          Photos
                        </Link>
                        <Link
                          className="nav-item nav-link"
                          id="nav-profile-tab1"
                          data-bs-toggle="tab"
                          to="#Participants"
                        >
                          Videos
                        </Link>
                        <Link
                          className="nav-item nav-link"
                          id="nav-profile-tab2"
                          data-bs-toggle="tab"
                          to="#media"
                        >
                          File
                        </Link>
                        <Link
                          className="nav-item nav-link"
                          id="nav-profile-tab3"
                          data-bs-toggle="tab"
                          to="#link"
                        >
                          Link
                        </Link>
                      </div>
                    </nav>
                    <div className="tab-content pt-0" id="nav-tabContent">
                      <div className="tab-pane fade show active" id="info">
                        <ul className="nav share-media-img mb-0">
                        <Lightbox
                            open={open2}
                            close={() => setOpen2(false)}
                            slides={[
                              { src: "assets/img/media/media-big-01.jpg" },
                              { src: "assets/img/media/media-big-02.jpg" },
                              { src: "assets/img/media/media-big-03.jpg" },
                              { src: "assets/img/media/media-big-04.jpg" },
                              { src: "assets/img/media/media-big-05.jpg" },
                              { src: "assets/img/media/media-02.jpg" },
                            ]}
                          />
                          <li>
                            <Link onClick={() => setOpen2(true)}
                              href="assets/img/media/media-big-01.jpg"
                              data-fancybox="gallery"
                              className="fancybox"
                            >
                              <ImageWithBasePath
                                src="/assets/img/media/media-01.jpg"
                                alt=""
                              />
                            </Link>
                          </li>
                          <li>
                            <Link onClick={() => setOpen2(true)}
                              href="/assets/img/media/media-big-02.jpg"
                              data-fancybox="gallery"
                              className="fancybox"
                            >
                              <ImageWithBasePath
                                src="/assets/img/media/media-02.jpg"
                                alt=""
                              />
                            </Link>
                          </li>
                          <li>
                            <Link onClick={() => setOpen2(true)}
                              href="/assets/img/media/media-big-03.jpg"
                              data-fancybox="gallery"
                              className="fancybox"
                            >
                              <ImageWithBasePath
                                src="/assets/img/media/media-03.jpg"
                                alt=""
                              />
                            </Link>
                          </li>
                          <li>
                            <Link onClick={() => setOpen2(true)}
                              href="/assets/img/media/media-big-04.jpg"
                              data-fancybox="gallery"
                              className="fancybox"
                            >
                              <ImageWithBasePath
                                src="/assets/img/media/media-04.jpg"
                                alt=""
                              />
                            </Link>
                          </li>
                          <li>
                            <Link onClick={() => setOpen2(true)}
                              href="/assets/img/media/media-05.jpg"
                              data-fancybox="gallery"
                              className="fancybox"
                            >
                              <ImageWithBasePath
                                src="/assets/img/media/media-05.jpg"
                                alt=""
                              />
                            </Link>
                          </li>
                          <li className="blur-media">
                            <Link onClick={() => setOpen2(true)}
                              href="/assets/img/media/media-02.jpg"
                              data-fancybox="gallery"
                              className="fancybox"
                            >
                              <ImageWithBasePath
                                src="/assets/img/media/media-02.jpg"
                                alt=""
                              />
                            </Link>
                            <span>+10</span>
                          </li>
                        </ul>
                      </div>
                      <div className="tab-pane fade" id="Participants">
                        <ul className="nav share-media-img mb-0">
                          <li>
                            <Link
                              to="https://www.youtube.com/embed/Mj9WJJNp5wA"
                              data-fancybox=""
                              className="fancybox"
                            >
                              <ImageWithBasePath
                                src="/assets/img/media/media-01.jpg"
                                alt="img"
                              />
                              <span>
                                <i className="bx bx-play-circle" />
                              </span>
                            </Link>
                          </li>
                          <li>
                            <Link
                              to="https://www.youtube.com/embed/Mj9WJJNp5wA"
                              data-fancybox=""
                              className="fancybox"
                            >
                              <ImageWithBasePath
                                src="/assets/img/media/media-02.jpg"
                                alt="img"
                              />
                              <span>
                                <i className="bx bx-play-circle" />
                              </span>
                            </Link>
                          </li>
                          <li>
                            <Link
                              to="https://www.youtube.com/embed/Mj9WJJNp5wA"
                              data-fancybox=""
                              className="fancybox"
                            >
                              <ImageWithBasePath
                                src="/assets/img/media/media-03.jpg"
                                alt="img"
                              />
                              <span>
                                <i className="bx bx-play-circle" />
                              </span>
                            </Link>
                          </li>
                          <li>
                            <Link
                              to="https://www.youtube.com/embed/Mj9WJJNp5wA"
                              data-fancybox=""
                              className="fancybox"
                            >
                              <ImageWithBasePath
                                src="/assets/img/media/media-04.jpg"
                                alt="img"
                              />
                              <span>
                                <i className="bx bx-play-circle" />
                              </span>
                            </Link>
                          </li>
                          <li>
                            <Link
                              to="https://www.youtube.com/embed/Mj9WJJNp5wA"
                              data-fancybox=""
                              className="fancybox"
                            >
                              <ImageWithBasePath
                                src="/assets/img/media/media-05.jpg"
                                alt="img"
                              />
                              <span>
                                <i className="bx bx-play-circle" />
                              </span>
                            </Link>
                          </li>
                          <li className="blur-media">
                            <Link
                              to="https://www.youtube.com/embed/Mj9WJJNp5wA"
                              data-fancybox=""
                              className="fancybox"
                            >
                              <ImageWithBasePath
                                src="/assets/img/media/media-02.jpg"
                                alt="img"
                              />
                            </Link>
                            <span>+10</span>
                          </li>
                        </ul>
                      </div>
                      <div className="tab-pane fade" id="media">
                        <div className="media-file">
                          <div className="media-doc-blk">
                            <span>
                              <i className="bx bxs-file-doc" />
                            </span>
                            <div className="document-detail">
                              <h6>Landing_page_V1.doc</h6>
                              <ul>
                                <li>12 Mar 2023</li>
                                <li>246.3 KB</li>
                              </ul>
                            </div>
                          </div>
                          <div className="media-download">
                            <Link to="#">
                              <i className="bx bx-download" />
                            </Link>
                          </div>
                        </div>
                        <div className="media-file">
                          <div className="media-doc-blk">
                            <span>
                              <i className="bx bxs-file-pdf" />
                            </span>
                            <div className="document-detail">
                              <h6>Design Guideless.pdf</h6>
                              <ul>
                                <li>12 Mar 2023</li>
                                <li>246.3 KB</li>
                              </ul>
                            </div>
                          </div>
                          <div className="media-download">
                            <Link to="#">
                              <i className="bx bx-download" />
                            </Link>
                          </div>
                        </div>
                        <div className="media-file">
                          <div className="media-doc-blk">
                            <span>
                              <i className="bx bxs-file" />
                            </span>
                            <div className="document-detail">
                              <h6>sample site.txt</h6>
                              <ul>
                                <li>12 Mar 2023</li>
                                <li>246.3 KB</li>
                              </ul>
                            </div>
                          </div>
                          <div className="media-download">
                            <Link to="#">
                              <i className="bx bx-download" />
                            </Link>
                          </div>
                        </div>
                      </div>
                      <div className="tab-pane fade" id="link">
                        <div className="media-link-grp">
                          <div className="link-img">
                            <Link to="#">
                              <ImageWithBasePath
                                src="/assets/img/media-link-01.jpg"
                                alt="Img"
                              />
                            </Link>
                          </div>
                          <div className="media-link-detail">
                            <h6>
                              <Link to="#">Digital Marketing Guide</Link>
                            </h6>
                            <span>
                              <Link to="#">
                                https://elements.envato.com/all-items/blog
                              </Link>
                            </span>
                          </div>
                        </div>
                        <div className="media-link-grp mb-0">
                          <div className="link-img">
                            <Link to="#">
                              <ImageWithBasePath
                                src="/assets/img/media-link-02.jpg"
                                alt="Img"
                              />
                            </Link>
                          </div>
                          <div className="media-link-detail">
                            <h6>
                              <Link to="#">Blog Post</Link>
                            </h6>
                            <span>
                              <Link to="#">
                                https://elements.envato.com/blog-post-TXQ5FB8
                              </Link>
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="chat-message-grp chat-encrypt">
                  <ul>
                    <li>
                      <Link to="#" className="star-message-left">
                        <div className="stared-group">
                          <span className="star-message">
                            {" "}
                            <i className="bx bxs-star" />
                          </span>
                          <h6>Starred Messages</h6>
                        </div>
                        <div className="count-group">
                          <span>10</span>
                          <i className="feather-chevron-right" />
                        </div>
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="#"
                        data-bs-toggle="modal"
                        data-bs-target="#mute-notification"
                      >
                        <div className="stared-group">
                          <span className="mute-message">
                            {" "}
                            <i className="bx bx-microphone-off" />
                          </span>
                          <h6>Mute Notifications</h6>
                        </div>
                        <div className="count-group">
                          <i className="feather-chevron-right" />
                        </div>
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="#"
                        data-bs-toggle="modal"
                        data-bs-target="#disappearing-messages"
                      >
                        <div className="stared-group">
                          <span className="disapper-message">
                            {" "}
                            <i className="bx bx-time" />
                          </span>
                          <h6>Disappearing messages</h6>
                        </div>
                        <div className="count-group">
                          <i className="feather-chevron-right" />
                        </div>
                      </Link>
                    </li>
                    <li>
                      <Link to="#">
                        <div className="stared-group align-items-start">
                          <span className="block-message flex-shrink-0">
                            {" "}
                            <i className="bx bx-lock-alt" />
                          </span>
                          <div className="encrypted-message">
                            <h6>Encryption</h6>
                            <p>
                              Messages are end-to-end encrypted. Click to
                              learnmore{" "}
                            </p>
                          </div>
                        </div>
                        <div className="count-group">
                          <i className="feather-chevron-right" />
                        </div>
                      </Link>
                    </li>
                    <li>
                      <Link to="#" className="group-left-setting">
                        <div className="stared-group">
                          <span className="group-setting-msg">
                            {" "}
                            <i className="bx bx-cog" />
                          </span>
                          <h6>Group Setting</h6>
                        </div>
                        <div className="count-group">
                          <i className="feather-chevron-right" />
                        </div>
                      </Link>
                    </li>
                  </ul>
                </div>
                <div className="participants-list">
                  <div className="participants-list-group">
                    <h6>
                      35 Participants
                      <span className="parti-search">
                        <i className="bx bx-search" />
                      </span>
                    </h6>
                    <ul className="user-list mt-2">
                      <li className="d-flex">
                        <div>
                          <div className="avatar avatar-online">
                            <ImageWithBasePath
                              src="/assets/img/avatar/avatar-3.jpg"
                              className="rounded-circle"
                              alt="image"
                            />
                          </div>
                        </div>
                        <div className="users-list-body d-flex justify-content-between">
                          <div>
                            <h5>Horace Keene</h5>
                            <p>Busy</p>
                          </div>
                          <div className="d-flex align-items-center">
                            <Link to="#" className="p-0 m-0 admin-shade">
                              <span className="admin-profiles">Admin</span>
                            </Link>
                            <div className="group-set-wrap d-flex align-items-center ms-1">
                              <span
                                className="d-flex"
                                data-bs-toggle="dropdown"
                              >
                                <i className="bx bx-dots-vertical-rounded" />
                              </span>
                              <div className="dropdown-menu chat-drop-menu dropdown-menu-end">
                                <span className="dropdown-item ">
                                  <span>
                                    <i className="bx bx-archive-in" />
                                  </span>
                                  Archive Chat{" "}
                                </span>
                                <span
                                  className="dropdown-item"
                                  data-bs-toggle="modal"
                                  data-bs-target="#mute-notification"
                                >
                                  <span>
                                    <i className="bx bx-volume-mute" />
                                  </span>
                                  Mute Notification
                                </span>
                                <span className="dropdown-item">
                                  <span>
                                    <i className="bx bx-log-out" />
                                  </span>
                                  Exit Group
                                </span>
                                <span className="dropdown-item">
                                  <span>
                                    <i className="bx bx-pin" />
                                  </span>
                                  Unpin Chat
                                </span>
                                <span className="dropdown-item">
                                  <span>
                                    <i className="bx bx-check-square" />
                                  </span>
                                  Mark as Unread
                                </span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </li>
                      <li className="d-flex">
                        <div>
                          <div className="avatar avatar-online">
                            <ImageWithBasePath
                              src="/assets/img/avatar/avatar-1.jpg"
                              className="rounded-circle"
                              alt="image"
                            />
                          </div>
                        </div>
                        <div className="users-list-body d-flex justify-content-between">
                          <div>
                            <h5>Hollis Tran</h5>
                            <p>Available</p>
                          </div>
                          <div className="d-flex align-items-center">
                            <Link to="#" className="p-0 m-0 admin-shade">
                              <span className="admin-profiles">Admin</span>
                            </Link>
                            <div className="group-set-wrap d-flex align-items-center ms-1">
                              <span
                                className="d-flex"
                                data-bs-toggle="dropdown"
                              >
                                <i className="bx bx-dots-vertical-rounded" />
                              </span>
                              <div className="dropdown-menu chat-drop-menu dropdown-menu-end">
                                <span className="dropdown-item ">
                                  <span>
                                    <i className="bx bx-archive-in" />
                                  </span>
                                  Archive Chat{" "}
                                </span>
                                <span
                                  className="dropdown-item"
                                  data-bs-toggle="modal"
                                  data-bs-target="#mute-notification"
                                >
                                  <span>
                                    <i className="bx bx-volume-mute" />
                                  </span>
                                  Mute Notification
                                </span>
                                <span className="dropdown-item">
                                  <span>
                                    <i className="bx bx-log-out" />
                                  </span>
                                  Exit Group
                                </span>
                                <span className="dropdown-item">
                                  <span>
                                    <i className="bx bx-pin" />
                                  </span>
                                  Unpin Chat
                                </span>
                                <span className="dropdown-item">
                                  <span>
                                    <i className="bx bx-check-square" />
                                  </span>
                                  Mark as Unread
                                </span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </li>
                      <li className="d-flex">
                        <div>
                          <div className="avatar ">
                            <ImageWithBasePath
                              src="/assets/img/avatar/avatar-5.jpg"
                              className="rounded-circle"
                              alt="image"
                            />
                          </div>
                        </div>
                        <div className="users-list-body d-flex justify-content-between">
                          <div>
                            <h5>James Albert</h5>
                            <p>At work</p>
                          </div>
                          <div className="group-set-wrap d-flex align-items-center">
                            <span className="d-flex" data-bs-toggle="dropdown">
                              <i className="bx bx-dots-vertical-rounded" />
                            </span>
                            <div className="dropdown-menu chat-drop-menu dropdown-menu-end">
                              <span className="dropdown-item ">
                                <span>
                                  <i className="bx bx-archive-in" />
                                </span>
                                Archive Chat{" "}
                              </span>
                              <span
                                className="dropdown-item"
                                data-bs-toggle="modal"
                                data-bs-target="#mute-notification"
                              >
                                <span>
                                  <i className="bx bx-volume-mute" />
                                </span>
                                Mute Notification
                              </span>
                              <span className="dropdown-item">
                                <span>
                                  <i className="bx bx-log-out" />
                                </span>
                                Exit Group
                              </span>
                              <span className="dropdown-item">
                                <span>
                                  <i className="bx bx-pin" />
                                </span>
                                Unpin Chat
                              </span>
                              <span className="dropdown-item">
                                <span>
                                  <i className="bx bx-check-square" />
                                </span>
                                Mark as Unread
                              </span>
                            </div>
                          </div>
                        </div>
                      </li>
                      <li className="d-flex">
                        <div>
                          <div className="avatar avatar-online">
                            <ImageWithBasePath
                              src="/assets/img/avatar/avatar-3.jpg"
                              className="rounded-circle"
                              alt="image"
                            />
                          </div>
                        </div>
                        <div className="users-list-body d-flex justify-content-between">
                          <div>
                            <h5>Debra Jones</h5>
                            <p>Sleeping</p>
                          </div>
                          <div className="group-set-wrap d-flex align-items-center">
                            <span className="d-flex" data-bs-toggle="dropdown">
                              <i className="bx bx-dots-vertical-rounded" />
                            </span>
                            <div className="dropdown-menu chat-drop-menu dropdown-menu-end">
                              <span className="dropdown-item ">
                                <span>
                                  <i className="bx bx-archive-in" />
                                </span>
                                Archive Chat{" "}
                              </span>
                              <span
                                className="dropdown-item"
                                data-bs-toggle="modal"
                                data-bs-target="#mute-notification"
                              >
                                <span>
                                  <i className="bx bx-volume-mute" />
                                </span>
                                Mute Notification
                              </span>
                              <span className="dropdown-item">
                                <span>
                                  <i className="bx bx-log-out" />
                                </span>
                                Exit Group
                              </span>
                              <span className="dropdown-item">
                                <span>
                                  <i className="bx bx-pin" />
                                </span>
                                Unpin Chat
                              </span>
                              <span className="dropdown-item">
                                <span>
                                  <i className="bx bx-check-square" />
                                </span>
                                Mark as Unread
                              </span>
                            </div>
                          </div>
                        </div>
                      </li>
                      <li className="d-flex">
                        <div>
                          <div className="avatar ">
                            <ImageWithBasePath
                              src="/assets/img/avatar/avatar-7.jpg"
                              className="rounded-circle"
                              alt="image"
                            />
                          </div>
                        </div>
                        <div className="users-list-body d-flex justify-content-between">
                          <div>
                            <h5>Dina Brown</h5>
                            <p>At the Movies</p>
                          </div>
                          <div className="group-set-wrap d-flex align-items-center">
                            <span className="d-flex" data-bs-toggle="dropdown">
                              <i className="bx bx-dots-vertical-rounded" />
                            </span>
                            <div className="dropdown-menu chat-drop-menu dropdown-menu-end">
                              <span className="dropdown-item ">
                                <span>
                                  <i className="bx bx-archive-in" />
                                </span>
                                Archive Chat{" "}
                              </span>
                              <span
                                className="dropdown-item"
                                data-bs-toggle="modal"
                                data-bs-target="#mute-notification"
                              >
                                <span>
                                  <i className="bx bx-volume-mute" />
                                </span>
                                Mute Notification
                              </span>
                              <span className="dropdown-item">
                                <span>
                                  <i className="bx bx-log-out" />
                                </span>
                                Exit Group
                              </span>
                              <span className="dropdown-item">
                                <span>
                                  <i className="bx bx-pin" />
                                </span>
                                Unpin Chat
                              </span>
                              <span className="dropdown-item">
                                <span>
                                  <i className="bx bx-check-square" />
                                </span>
                                Mark as Unread
                              </span>
                            </div>
                          </div>
                        </div>
                      </li>
                    </ul>
                    <div className="text-left group-view-all">
                      <Link to="#" className="load-more-btn">
                        View All (30 more)
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="chat-message-grp group-exits">
                  <ul>
                    <li>
                      <Link
                        to="#"
                        data-bs-toggle="modal"
                        data-bs-target="#exit-group"
                      >
                        <div className="stared-group">
                          <span className="exit-bg-message">
                            {" "}
                            <i className="bx bx-log-out" />
                          </span>
                          <h6>Exit Group</h6>
                        </div>
                        <div className="count-group">
                          <i className="feather-chevron-right" />
                        </div>
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="#"
                        data-bs-toggle="modal"
                        data-bs-target="#report-user"
                      >
                        <div className="stared-group">
                          <span className="exit-bg-message">
                            {" "}
                            <i className="bx bx-dislike" />
                          </span>
                          <h6>Report User</h6>
                        </div>
                        <div className="count-group">
                          <i className="feather-chevron-right" />
                        </div>
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </Scrollbars>
        </div>
        {/* Right sidebar */}
        {/* Star Message Right sidebar */}
        <div
          className="right-sidebar right_side_star hide-right-sidebar"
          id="middle2"
        >
          <div className="right-sidebar-wrap active">
            <div className="slimscroll">
              <div className="left-chat-title d-flex justify-content-between align-items-center border-bottom-0">
                <div className="fav-title mb-0">
                  <h6>
                    <Link to="#" className="remove-star-message d-flex">
                      <i className="bx bx-arrow-back me-2" />
                    </Link>
                    Starred Messages
                  </h6>
                </div>
                <div className="star-drop">
                  <Link
                    className="btn btn-outline-light"
                    to="#"
                    data-bs-toggle="dropdown"
                  >
                    <i className="bx bx-dots-vertical-rounded" />
                  </Link>
                  <div className="dropdown-menu dropdown-menu-end">
                    <Link to="#" className="dropdown-item ">
                      <span>
                        <i className="feather-star" />
                      </span>
                      Unstar All{" "}
                    </Link>
                  </div>
                </div>
              </div>
              <div className="sidebar-body chat star-chat-group">
                <div className="chat-body">
                  <div className="messages">
                    <div className="chats">
                      <div className="chat-avatar">
                        <ImageWithBasePath
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
                          <div className="chat-action-btns ms-3">
                            <div className="chat-action-col">
                              <Link
                                className="#"
                                to="#"
                                data-bs-toggle="dropdown"
                              >
                                <i className="bx bx-dots-horizontal-rounded" />
                              </Link>
                              <div className="dropdown-menu chat-drop-menu dropdown-menu-end">
                                <Link to="#" className="dropdown-item ">
                                  <span>
                                    <i className="bx bx-info-circle" />
                                  </span>
                                  Message Info{" "}
                                </Link>
                                <Link to="#" className="dropdown-item">
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
                                  Unstar Message
                                </Link>
                                <Link to="#" className="dropdown-item">
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
                          <Link to="#" className="ms-1 d-flex chev-icon">
                            <i className="bx bx-chevron-right" />
                          </Link>
                        </div>
                        <div className="message-content mb-2">
                          Hello <Link to="#">@Alex</Link> Thank you for the
                          beautiful web design ahead schedule.
                        </div>
                        <div className="message-star">
                          <div className="avatar">
                            <ImageWithBasePath
                              src="/assets/img/avatar/avatar-2.jpg"
                              className="rounded-circle"
                              alt="Icon"
                            />
                          </div>
                          <h6>
                            Alex Smith
                            <span className="ms-1">
                              <i className="fa-solid fa-star" />
                            </span>
                          </h6>
                        </div>
                      </div>
                    </div>
                    <div className="chats">
                      <div className="chat-avatar">
                        <ImageWithBasePath
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
                          <div className="chat-action-btns ms-3">
                            <div className="chat-action-col">
                              <Link
                                className="#"
                                to="#"
                                data-bs-toggle="dropdown"
                              >
                                <i className="bx bx-dots-horizontal-rounded" />
                              </Link>
                              <div className="dropdown-menu chat-drop-menu dropdown-menu-end">
                                <Link to="#" className="dropdown-item ">
                                  <span>
                                    <i className="bx bx-info-circle" />
                                  </span>
                                  Message Info{" "}
                                </Link>
                                <Link to="#" className="dropdown-item">
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
                                  Unstar Message
                                </Link>
                                <Link to="#" className="dropdown-item">
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
                          <Link to="#" className="ms-1 d-flex chev-icon">
                            <i className="bx bx-chevron-right" />
                          </Link>
                        </div>
                        <div className="message-content mb-2 award-link">
                          <Link to="#">
                            https://www.youtube.com/watch?v=GCmL3mS0Psk
                          </Link>
                          <ImageWithBasePath
                            src="/assets/img/award.jpg"
                            alt="img"
                          />
                        </div>
                        <div className="message-star">
                          <div className="avatar">
                            <ImageWithBasePath
                              src="/assets/img/avatar/avatar-2.jpg"
                              className="rounded-circle"
                              alt="Icon"
                            />
                          </div>
                          <h6>
                            Alex Smith
                            <span className="ms-1">
                              <i className="fa-solid fa-star" />
                            </span>
                          </h6>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Star Message Right sidebar */}
        {/* Group Setting */}
        <div
          className="right-sidebar right_side_group hide-right-sidebar"
          id="middle3"
        >
          <div className="right-sidebar-wrap active">
            <div className="slimscroll">
              <div className="left-chat-title d-flex justify-content-between align-items-center border-bottom-0">
                <div className="fav-title mb-0">
                  <h6>
                    <Link to="#" className="remove-group-message">
                      <ImageWithBasePath
                        src="/assets/img/icon/arrow-left.svg"
                        className="me-2"
                        alt="Icon"
                      />
                    </Link>
                    Group Setting
                  </h6>
                </div>
                <div className="star-drop">
                  <Link
                    className="btn btn-outline-light"
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
                      Close Group{" "}
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
                      Delete Group
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
                </div>
              </div>
              <div className="sidebar-body group-setting">
                <div className="chat-message-grp">
                  <ul>
                    <li>
                      <Link
                        to="#"
                        data-bs-toggle="modal"
                        data-bs-target="#edit-group"
                      >
                        <div className="stared-group">
                          <span className="disapper-message">
                            {" "}
                            <ImageWithBasePath
                              src="/assets/img/icon/edit-group.svg"
                              alt="icon"
                            />
                          </span>
                          <div className="edit-set-details">
                            <h6>Edit Group Settings</h6>
                            <p>All Participants</p>
                          </div>
                        </div>
                        <div className="count-group">
                          <i className="feather-chevron-right" />
                        </div>
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="#"
                        data-bs-toggle="modal"
                        data-bs-target="#send-message"
                      >
                        <div className="stared-group">
                          <span className="group-send-msg">
                            {" "}
                            <ImageWithBasePath
                              src="/assets/img/icon/send-message.svg"
                              alt="icon"
                            />
                          </span>
                          <div className="edit-set-details">
                            <h6>Send Messages</h6>
                            <p>All Participants</p>
                          </div>
                        </div>
                        <div className="count-group">
                          <i className="feather-chevron-right" />
                        </div>
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="#"
                        data-bs-toggle="modal"
                        data-bs-target="#edit-admin"
                      >
                        <div className="stared-group">
                          <span className="mute-message">
                            {" "}
                            <ImageWithBasePath
                              src="/assets/img/icon/users-group.svg"
                              alt="icon"
                            />
                          </span>
                          <div className="edit-set-details">
                            <h6>Edit Group Admins</h6>
                          </div>
                        </div>
                        <div className="count-group">
                          <i className="feather-chevron-right" />
                        </div>
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="#"
                        data-bs-toggle="modal"
                        data-bs-target="#approve-participant"
                      >
                        <div className="stared-group">
                          <span className="report-message">
                            {" "}
                            <ImageWithBasePath
                              src="/assets/img/icon/group-checked.svg"
                              alt="icon"
                            />
                          </span>
                          <div className="edit-set-details">
                            <h6>Approve New Participants</h6>
                            <p>Off</p>
                          </div>
                        </div>
                        <div className="count-group">
                          <i className="feather-chevron-right" />
                        </div>
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Group Setting */}
        {/* Message Info Right sidebar */}
        <div
          className="right-sidebar right_sidebar_info hide-right-sidebar"
          id="middle3"
        >
          <div className="right-sidebar-wrap active">
            <div className="slimscroll">
              <div className="left-chat-title d-flex justify-content-between align-items-center border-bottom-0">
                <div className="fav-title mb-0">
                  <h6>
                    <Link to="#" className="remove-message-info">
                      <i className="bx bx-arrow-back me-2" />
                    </Link>
                    Messages Info
                  </h6>
                </div>
                <div className="star-drop">
                  <Link
                    className="btn btn-outline-light"
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
                </div>
              </div>
              <div className="sidebar-body chat star-chat-group">
                <div className="chat-body">
                  <div className="messages">
                    <div className="chats">
                      <div className="chat-avatar ps-0">
                        <ImageWithBasePath
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
                              <Link
                                className="#"
                                to="#"
                                data-bs-toggle="dropdown"
                              >
                                <i className="bx bx-dots-horizontal-rounded" />
                              </Link>
                              <div className="dropdown-menu chat-drop-menu dropdown-menu-end">
                                <Link to="#" className="dropdown-item ">
                                  <span>
                                    <i className="bx bx-info-circle" />
                                  </span>
                                  Message Info{" "}
                                </Link>
                                <Link
                                  to="#"
                                  className="dropdown-item reply-button"
                                >
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
                                <Link to="#" className="dropdown-item">
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
                          <Link to="#" className="ms-1 d-flex chev-icon">
                            <i className="bx bx-chevron-right" />
                          </Link>
                        </div>
                        <div className="message-content fancy-msg-box">
                          <div className="download-col">
                            <ul className="nav mb-0">
                              <li>
                                <div className="image-download-col">
                                  <Link
                                    to="assets/img/media/media-01.jpg"
                                    data-fancybox="gallery"
                                    className="fancybox"
                                  >
                                    <ImageWithBasePath
                                      src="/assets/img/media/media-01.jpg"
                                      alt=""
                                    />
                                  </Link>
                                </div>
                              </li>
                              <li>
                                <div className="image-download-col ">
                                  <Link
                                    to="assets/img/media/media-02.jpg"
                                    data-fancybox="gallery"
                                    className="fancybox"
                                  >
                                    <ImageWithBasePath
                                      src="/assets/img/media/media-02.jpg"
                                      alt=""
                                    />
                                  </Link>
                                </div>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="message-info-box">
                      <h6>
                        <span className="material-icons check-active">
                          done_all
                        </span>
                        Read
                      </h6>
                      <span>Today at 7:12 AM</span>
                    </div>
                    <div className="message-info-box">
                      <h6>
                        <span className="material-icons check">done_all</span>
                        Delivered
                      </h6>
                      <span>Today at 7:09 AM</span>
                    </div>
                    <div className="message-info-box">
                      <h6>
                        <i className="feather-check sent" />
                        Sent
                      </h6>
                      <span>Today at 7:09 AM</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Message Right sidebar */}
        <NewChat />
        <NewGroup />
        <MuteNotification />
        <ForwardMessage />
        <ReportUser />
        <DeleteMessage />
        <VideoCall />
        <VoiceCall />
        <DisappearingMessage />
        <GroupInfo />
        <>
  {/* Exit UI UX Designer Group? */}
  <div className="modal fade " id="exit-group">
    <div className="modal-dialog modal-dialog-centered">
      <div className="modal-content">
        <div className="modal-header">
          <h5 className="modal-title">Exit UI UX Designer Group?</h5>
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
          <div className="notify-check parcipant-check">
            <p>Only group admins will be notified that you left the group.</p>
          </div>
          <div className="mute-chat-btn">
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
              Exit group
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</>

      </div>
      {/* /Content */}
    </>
  );
};

export default Group;
