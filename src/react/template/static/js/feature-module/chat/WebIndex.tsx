import React, { useEffect, useState } from "react";
// import useEffect from "react";
// import  useState  from "react";
import { Link } from "react-router-dom";
import ImageWithBasePath from "../../core/data/img/ImageWithBasePath.tsx";
import Scrollbars from "react-custom-scrollbars-2";
import Slider from "react-slick";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import HomeModals from "../../core/data/modals/homeModals.tsx";
import Sidebar from "../../core/common/sidebar.tsx";
import { all_routes } from "../router/all_routes.tsx";
import AVATAR2 from '../../../../../../react/template/assets/img/avatar/avatar-2.jpg'
import AVATAR1 from '../../../../../../react/template/assets/img/avatar/avatar-1.jpg'
import AVATAR7 from '../../../../../../react/template/assets/img/avatar/avatar-7.jpg'
import AVATAR5 from '../../../../../../react/template/assets/img/avatar/avatar-5.jpg'
import AVATAR3 from '../../../../../../react/template/assets/img/avatar/avatar-3.jpg'
import AVATAR13 from '../../../../../../react/template/assets/img/avatar/avatar-13.jpg'
import AVATAR4 from '../../../../../../react/template/assets/img/avatar/avatar-4.jpg'
import AVATAR9 from '../../../../../../react/template/assets/img/avatar/avatar-9.jpg'
import AVATAR8 from '../../../../../../react/template/assets/img/avatar/avatar-8.jpg'
import AVATAR6 from '../../../../../../react/template/assets/img/avatar/avatar-6.jpg'
import IMG01 from '../../../../../../react/template/assets/img/empty-img-01.png'
import IMG02 from '../../../../../../react/template/assets/img/empty-img-dark.png'
const WebIndex = () => {

  const routes = all_routes;
  const [visible, setVisible] = useState(false);

  const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth < 992);


  const handleResize = () => {
    setIsSmallScreen(window.innerWidth < 992);
  };


  useEffect(() => {
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const settings = {
    dots: false,
    autoplay: false,
    slidesToShow: 5,
    margin: 12,
    speed: 500,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 5,
        },
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 5,
        },
      },
      {
        breakpoint: 776,
        settings: {
          slidesToShow: 5,
        },
      },
      {
        breakpoint: 567,
        settings: {
          slidesToShow: 5,
        },
      },
    ],
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
          <div id="chats" className="left-sidebar-wrap sidebar active slimscroll">
            <Scrollbars className={isSmallScreen ? "mob-scrn" : ""} >
              <div >
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
                          All Chats
                          <i className="bx bx-chevron-down" />
                        </Link>
                        <ul className="dropdown-menu">
                          <li>
                            <Link className="dropdown-item" to={routes.allChat}>
                              All Chat
                            </Link>
                          </li>
                          <li>
                            <Link
                              className="dropdown-item"
                              to={routes.archiveChat}
                            >
                              Archive Chat
                            </Link>
                          </li>
                          <li>
                            <Link className="dropdown-item" to={routes.pinnedChat}>
                              Pinned Chat
                            </Link>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="add-section">
                      <ul>
                        <li>
                          <Link to="#" className="user-chat-search-btn" onClick={() => setVisible(!visible)}>
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
                                  New Chat{" "}
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
                                <Link
                                  to="#"
                                  className="dropdown-item"
                                  data-bs-toggle="modal"
                                  data-bs-target="#invite-other"
                                >
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
                      <div className={visible ? "user-chat-search visible-chat" : "user-chat-search"}>
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
                          <div className="user-close-btn-chat" onClick={() => setVisible(!visible)}>
                            <span className="material-icons">close</span>
                          </div>
                        </form>
                      </div>
                      {/* /Chat Search */}
                    </div>
                  </div>
                  {/* /Left Chat Title */}
                  {/* Top Online Contacts */}
                  <div className="top-online-contacts">
                    <div className="fav-title">
                      <h6>Online Now</h6>
                    </div>
                    <div className="swiper-container">

                      <Slider {...settings} className="swiper-wrapper ">


                        <div className="swiper-slide">

                          <div className="top-contacts-box">
                            <div className="profile-img online">
                              <Link to={routes.index}>
                                <ImageWithBasePath
                                  src={AVATAR2}
                                  alt="Image"
                                />
                              </Link>
                            </div>
                          </div>
                        </div>

                        <div className="swiper-slide">
                          <div className="top-contacts-box">
                            <div className="profile-img online">
                              <Link to={routes.index}>
                                <ImageWithBasePath
                                  src={AVATAR1}
                                  alt="Image"
                                />
                              </Link>
                            </div>
                          </div>
                        </div>
                        <div className="swiper-slide">
                          <div className="top-contacts-box">
                            <div className="profile-img online">
                              <Link to={routes.index}>
                                <ImageWithBasePath
                                  src={AVATAR7}
                                  alt="Image"
                                />
                              </Link>
                            </div>
                          </div>
                        </div>
                        <div className="swiper-slide">
                          <div className="top-contacts-box">
                            <div className="profile-img online">
                              <Link to={routes.index}>
                                <ImageWithBasePath
                                  src={AVATAR5}
                                  alt="Image"
                                />
                              </Link>
                            </div>
                          </div>
                        </div>
                        <div className="swiper-slide">
                          <div className="top-contacts-box">
                            <div className="profile-img online">
                              <Link to={routes.index}>
                                <ImageWithBasePath
                                  src={AVATAR3}
                                  alt="Image"
                                />
                              </Link>
                            </div>
                          </div>
                        </div>
                        <div className="swiper-slide">
                          <div className="top-contacts-box">
                            <div className="profile-img online">
                              <Link to={routes.index}>
                                <ImageWithBasePath
                                  src={AVATAR2}
                                  alt="Image"
                                />
                              </Link>
                            </div>
                          </div>
                        </div>
                      </Slider>

                    </div>
                  </div>
                </div>
                {/* /Top Online Contacts */}
                <div className="sidebar-body chat-body" id="chatsidebar">
                  {/* Left Chat Title */}
                  <div className="d-flex justify-content-between align-items-center ps-0 pe-0">
                    <div className="fav-title pin-chat">
                      <h6>
                        <i className="bx bx-pin me-1" />
                        Pinned Chat
                      </h6>
                    </div>
                  </div>
                  {/* /Left Chat Title */}
                  <ul className="user-list space-chat">
                    <li className="user-list-item chat-user-list">
                      <Link to={routes.allChat}>
                        <div className="avatar avatar-online">
                          <ImageWithBasePath
                            src={AVATAR2}
                            className="rounded-circle"
                            alt="image"
                          />
                        </div>
                        <div className="users-list-body">
                          <div>
                            <h5>Muhammad Faisal Ijaz</h5>
                            {/* <p>Have you called them?</p> */}
                          </div>
                          <div className="last-chat-time">
                            <small className="text-muted">10:20 PM</small>
                            <div className="chat-pin">
                              <i className="bx bx-pin me-2" />
                              <i className="bx bx-check-double" />
                            </div>
                          </div>
                        </div>
                      </Link>
                      {/* <div className="chat-hover ms-1">
                        <div className="chat-action-col">
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
                            <span
                              className="dropdown-item"
                              data-bs-toggle="modal"
                              data-bs-target="#change-chat"
                            >
                              <span>
                                <i className="bx bx-log-out" />
                              </span>
                              Delete Chat
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
                      </div> */}
                    </li>
                    <li className="user-list-item chat-user-list">
                      <Link to={routes.allChat}>
                        <div>
                          <div className="avatar ">
                            <ImageWithBasePath
                              src={AVATAR13}
                              className="rounded-circle"
                              alt="image"
                            />
                          </div>
                        </div>
                        <div className="users-list-body">
                          <div>
                            <h5>Elizabeth Sosa</h5>
                            <p>
                              <span className="animate-typing-col">
                                Typing
                                <span className="dot" />
                                <span className="dot" />
                                <span className="dot" />
                              </span>
                            </p>
                          </div>
                          <div className="last-chat-time">
                            <small className="text-muted">Yesterday</small>
                            <div className="chat-pin">
                              <i className="bx bx-pin me-2" />
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
                            <span
                              className="dropdown-item"
                              data-bs-toggle="modal"
                              data-bs-target="#change-chat"
                            >
                              <span>
                                <i className="bx bx-log-out" />
                              </span>
                              Delete Chat
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
                    <li className="user-list-item chat-user-list">
                      <Link to={routes.allChat}>
                        <div className="avatar avatar-online">
                          <ImageWithBasePath
                            src={AVATAR5}
                            className="rounded-circle"
                            alt="image"
                          />
                        </div>
                        <div className="users-list-body">
                          <div>
                            <h5>Michael Howard</h5>
                            <p>Thank you</p>
                          </div>
                          <div className="last-chat-time">
                            <small className="text-muted">10:20 PM</small>
                            <div className="chat-pin">
                              <i className="bx bx-pin me-2" />
                              <i className="bx bx-check-double check" />
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
                            <span
                              className="dropdown-item"
                              data-bs-toggle="modal"
                              data-bs-target="#change-chat"
                            >
                              <span>
                                <i className="bx bx-log-out" />
                              </span>
                              Delete Chat
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
                  {/* Left Chat Title */}
                  <div className="d-flex justify-content-between align-items-center ps-0 pe-0">
                    <div className="fav-title pin-chat">
                      <h6>
                        <i className="bx bx-message-square-dots me-1" />
                        Recent Chat
                      </h6>
                    </div>
                  </div>
                  {/* /Left Chat Title */}
                  <ul className="user-list">
                    <li className="user-list-item chat-user-list">
                      <Link to={routes.allChat}>
                        <div className="avatar avatar-online">
                          <ImageWithBasePath
                            src={AVATAR1}
                            className="rounded-circle"
                            alt="image"
                          />
                        </div>
                        <div className="users-list-body">
                          <div>
                            <h5>Horace Keene</h5>
                            <p>Have you called them?</p>
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
                            <span
                              className="dropdown-item"
                              data-bs-toggle="modal"
                              data-bs-target="#change-chat"
                            >
                              <span>
                                <i className="bx bx-trash" />
                              </span>
                              Delete Chat
                            </span>
                            <span className="dropdown-item">
                              <span>
                                <i className="bx bx-pin" />
                              </span>
                              Pin Chat
                            </span>
                            <span className="dropdown-item">
                              <span>
                                <i className="bx bx-check-square" />
                              </span>
                              Mark as Read
                            </span>
                            <span
                              className="dropdown-item"
                              data-bs-toggle="modal"
                              data-bs-target="#block-user"
                            >
                              <span>
                                <i className="bx bx-block" />
                              </span>
                              Block
                            </span>
                          </div>
                        </div>
                      </div>
                    </li>
                    <li className="user-list-item chat-user-list">
                      <Link to={routes.allChat}>
                        <div>
                          <div className="avatar avatar-online">
                            <ImageWithBasePath
                              src={AVATAR3}
                              className="rounded-circle"
                              alt="image"
                            />
                          </div>
                        </div>
                        <div className="users-list-body">
                          <div>
                            <h5>Hollis Tran</h5>
                            <p>
                              <i className="bx bx-video me-1" />
                              Video
                            </p>
                          </div>
                          <div className="last-chat-time">
                            <small className="text-muted">Yesterday</small>
                            <div className="chat-pin">
                              <i className="bx bx-check" />
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
                            <span
                              className="dropdown-item"
                              data-bs-toggle="modal"
                              data-bs-target="#change-chat"
                            >
                              <span>
                                <i className="bx bx-trash" />
                              </span>
                              Delete Chat
                            </span>
                            <span className="dropdown-item">
                              <span>
                                <i className="bx bx-pin" />
                              </span>
                              Pin Chat
                            </span>
                            <span className="dropdown-item">
                              <span>
                                <i className="bx bx-check-square" />
                              </span>
                              Mark as Unread
                            </span>
                            <span
                              className="dropdown-item"
                              data-bs-toggle="modal"
                              data-bs-target="#block-user"
                            >
                              <span>
                                <i className="bx bx-block" />
                              </span>
                              Block
                            </span>
                          </div>
                        </div>
                      </div>
                    </li>
                    <li className="user-list-item chat-user-list">
                      <Link to={routes.allChat}>
                        <div className="avatar">
                          <ImageWithBasePath
                            src={AVATAR4}
                            className="rounded-circle"
                            alt="image"
                          />
                        </div>
                        <div className="users-list-body">
                          <div>
                            <h5>James Albert</h5>
                            <p>
                              <i className="bx bx-file me-1" />
                              Project Tools.doc
                            </p>
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
                            <span
                              className="dropdown-item"
                              data-bs-toggle="modal"
                              data-bs-target="#change-chat"
                            >
                              <span>
                                <i className="bx bx-trash" />
                              </span>
                              Delete Chat
                            </span>
                            <span className="dropdown-item">
                              <span>
                                <i className="bx bx-pin" />
                              </span>
                              Pin Chat
                            </span>
                            <span className="dropdown-item">
                              <span>
                                <i className="bx bx-check-square" />
                              </span>
                              Mark as Unread
                            </span>
                            <span
                              className="dropdown-item"
                              data-bs-toggle="modal"
                              data-bs-target="#block-user"
                            >
                              <span>
                                <i className="bx bx-block" />
                              </span>
                              Block
                            </span>
                          </div>
                        </div>
                      </div>
                    </li>
                    <li className="user-list-item chat-user-list">
                      <Link to={routes.allChat}>
                        <div>
                          <div className="avatar avatar-online">
                            <ImageWithBasePath
                              src={AVATAR9}
                              className="rounded-circle"
                              alt="image"
                            />
                          </div>
                        </div>
                        <div className="users-list-body">
                          <div>
                            <h5>Debra Jones</h5>
                            <p>
                              <i className="bx bx-microphone me-1" />
                              Audio
                            </p>
                          </div>
                          <div className="last-chat-time">
                            <small className="text-muted">12:30 PM</small>
                            <div className="chat-pin">
                              <i className="bx bx-check-double check" />
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
                            <span
                              className="dropdown-item"
                              data-bs-toggle="modal"
                              data-bs-target="#change-chat"
                            >
                              <span>
                                <i className="bx bx-trash" />
                              </span>
                              Delete Chat
                            </span>
                            <span className="dropdown-item">
                              <span>
                                <i className="bx bx-pin" />
                              </span>
                              Pin Chat
                            </span>
                            <span className="dropdown-item">
                              <span>
                                <i className="bx bx-check-square" />
                              </span>
                              Mark as Unread
                            </span>
                            <span
                              className="dropdown-item"
                              data-bs-toggle="modal"
                              data-bs-target="#block-user"
                            >
                              <span>
                                <i className="bx bx-block" />
                              </span>
                              Block
                            </span>
                          </div>
                        </div>
                      </div>
                    </li>
                    <li className="user-list-item chat-user-list">
                      <Link to={routes.allChat}>
                        <div>
                          <div className="avatar ">
                            <ImageWithBasePath
                              src={AVATAR7}
                              className="rounded-circle"
                              alt="image"
                            />
                          </div>
                        </div>
                        <div className="users-list-body">
                          <div>
                            <h5>Dina Brown</h5>
                            <p>Have you called them?</p>
                          </div>
                          <div className="last-chat-time">
                            <small className="text-muted">Yesterday</small>
                            <div className="chat-pin">
                              <i className="bx bx-microphone-off" />
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
                            <span
                              className="dropdown-item"
                              data-bs-toggle="modal"
                              data-bs-target="#change-chat"
                            >
                              <span>
                                <i className="bx bx-trash" />
                              </span>
                              Delete Chat
                            </span>
                            <span className="dropdown-item">
                              <span>
                                <i className="bx bx-pin" />
                              </span>
                              Pin Chat
                            </span>
                            <span className="dropdown-item">
                              <span>
                                <i className="bx bx-check-square" />
                              </span>
                              Mark as Unread
                            </span>
                            <span
                              className="dropdown-item"
                              data-bs-toggle="modal"
                              data-bs-target="#block-user"
                            >
                              <span>
                                <i className="bx bx-block" />
                              </span>
                              Block
                            </span>
                          </div>
                        </div>
                      </div>
                    </li>
                    <li className="user-list-item chat-user-list">
                      <Link to={routes.allChat}>
                        <div>
                          <div className="avatar avatar-online">
                            <ImageWithBasePath
                              src={AVATAR8}
                              className="rounded-circle"
                              alt="image"
                            />
                          </div>
                        </div>
                        <div className="users-list-body">
                          <div>
                            <h5>Judy Mercer</h5>
                            <p className="missed-call-col">
                              <i className="bx bx-phone-incoming me-1" />
                              Missed Call
                            </p>
                          </div>
                          <div className="last-chat-time">
                            <small className="text-muted">25/July/23</small>
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
                            <span
                              className="dropdown-item"
                              data-bs-toggle="modal"
                              data-bs-target="#change-chat"
                            >
                              <span>
                                <i className="bx bx-trash" />
                              </span>
                              Delete Chat
                            </span>
                            <span className="dropdown-item">
                              <span>
                                <i className="bx bx-pin" />
                              </span>
                              Pin Chat
                            </span>
                            <span className="dropdown-item">
                              <span>
                                <i className="bx bx-check-square" />
                              </span>
                              Mark as Unread
                            </span>
                            <span
                              className="dropdown-item"
                              data-bs-toggle="modal"
                              data-bs-target="#block-user"
                            >
                              <span>
                                <i className="bx bx-block" />
                              </span>
                              Block
                            </span>
                          </div>
                        </div>
                      </div>
                    </li>
                    <li className="user-list-item chat-user-list">
                      <Link to={routes.allChat}>
                        <div>
                          <div className="avatar">
                            <ImageWithBasePath
                              src={AVATAR5}
                              className="rounded-circle"
                              alt="image"
                            />
                          </div>
                        </div>
                        <div className="users-list-body">
                          <div>
                            <h5>Richard Ohare</h5>
                            <p>
                              <i className="bx bx-image-alt me-1" />
                              Photo
                            </p>
                          </div>
                          <div className="last-chat-time">
                            <small className="text-muted">27/July/23</small>
                            <div className="chat-pin">
                              <i className="bx bx-check-double" />
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
                            <span
                              className="dropdown-item"
                              data-bs-toggle="modal"
                              data-bs-target="#change-chat"
                            >
                              <span>
                                <i className="bx bx-trash" />
                              </span>
                              Delete Chat
                            </span>
                            <span className="dropdown-item">
                              <span>
                                <i className="bx bx-pin" />
                              </span>
                              Pin Chat
                            </span>
                            <span className="dropdown-item">
                              <span>
                                <i className="bx bx-check-square" />
                              </span>
                              Mark as Unread
                            </span>
                            <span
                              className="dropdown-item"
                              data-bs-toggle="modal"
                              data-bs-target="#block-user"
                            >
                              <span>
                                <i className="bx bx-block" />
                              </span>
                              Block
                            </span>
                          </div>
                        </div>
                      </div>
                    </li>
                    <li className="user-list-item chat-user-list">
                      <Link to={routes.allChat}>
                        <div>
                          <div className="avatar avatar-online">
                            <ImageWithBasePath
                              src={AVATAR6}
                              className="rounded-circle"
                              alt="image"
                            />
                          </div>
                        </div>
                        <div className="users-list-body">
                          <div>
                            <h5>Charles Sellars</h5>
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
                            <span
                              className="dropdown-item"
                              data-bs-toggle="modal"
                              data-bs-target="#change-chat"
                            >
                              <span>
                                <i className="bx bx-trash" />
                              </span>
                              Delete Chat
                            </span>
                            <span className="dropdown-item">
                              <span>
                                <i className="bx bx-pin" />
                              </span>
                              Pin Chat
                            </span>
                            <span className="dropdown-item">
                              <span>
                                <i className="bx bx-check-square" />
                              </span>
                              Mark as Unread
                            </span>
                            <span
                              className="dropdown-item"
                              data-bs-toggle="modal"
                              data-bs-target="#block-user"
                            >
                              <span>
                                <i className="bx bx-block" />
                              </span>
                              Block
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
        <div className="chat status-middle-bar d-flex align-items-center justify-content-center">
          <div className="status-right">
            <div className="empty-chat-img">
              <ImageWithBasePath
                src={IMG01}
                alt="Image"
              />
            </div>
            <div className="empty-dark-img">
              <ImageWithBasePath
                src={IMG02}
                alt="Image"
              />
            </div>
            <div className="select-message-box">
              <h4>Select Message</h4>
              <p>
                To see your existing conversation or share a link below to start
                new
              </p>
              <Link
                to="#"
                className="btn btn-primary"
                data-bs-toggle="modal"
                data-bs-target="#new-chat"
              >
                <i className="bx bx-plus me-1" />
                Add New Message
              </Link>
            </div>
          </div>
        </div>
        {/* /Chat */}

        <HomeModals />
      </div>
      {/* /Content */}
    </>
  );
};

export default WebIndex;
