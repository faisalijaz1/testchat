import React from 'react'
import ImageWithBasePath from '../../core/data/img/ImageWithBasePath.tsx'
import { Link } from 'react-router-dom'
import Sidebar from '../../core/common/sidebar.tsx'
import Scrollbars from 'react-custom-scrollbars-2'
import UploadFile from '../../core/modals/status/uploadFile.tsx'
import { all_routes } from '../router/all_routes.tsx'

const StatusOther = () => {
    const routes= all_routes
    return (
        <>
            {/* content */}
            <div className="content main_content">
                {/* Left Sidebar Menu */}
                <Sidebar />
                {/* /Left Sidebar Menu */}
                {/* sidebar group */}
                <div className="sidebar-group left-sidebar chat_sidebar flex-shrink-0">
                    {/* Chats sidebar */}
                    <div id="chats" className="left-sidebar-wrap sidebar active slimscroll">
                        <Scrollbars>
                            <div className="slimscroll">
                                {/* Left Chat Title */}
                                <div className="left-chat-title all-chats d-flex justify-content-between align-items-center">
                                    <div className="setting-title-head">
                                        <h4> Status</h4>
                                    </div>
                                    <div className="add-section">
                                        <ul>
                                            <li>
                                                <Link to="#" className="user-chat-search-btn">
                                                    <i className="bx bx-search" />
                                                </Link>
                                            </li>
                                            <li>
                                                <Link
                                                    to="#"
                                                    className="contact-added"
                                                    data-bs-toggle="modal"
                                                    data-bs-target="#upload-file"
                                                >
                                                    <i className="bx bx-plus" />
                                                </Link>
                                            </li>
                                        </ul>
                                        {/* Chat Search */}
                                        <div className="user-chat-search">
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
                                                <div className="user-close-btn-chat">
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
                                            <h6>My Status</h6>
                                        </div>
                                    </div>

                                    {/* /Left Chat Title */}
                                    <ul className="user-list space-chat">
                                        <li className="user-list-item status-list-item">
                                            <Link to={routes.status}>
                                                <div className="avatar avatar-online">
                                                    <ImageWithBasePath
                                                        src="/assets/img/avatar/avatar-2.jpg"
                                                        className="rounded-circle"
                                                        alt="image"
                                                    />
                                                </div>
                                                <div className="users-list-body">
                                                    <div>
                                                        <h5>Alex Smith</h5>
                                                        <p>Today at 7:15 AM</p>
                                                    </div>
                                                </div>
                                            </Link>
                                            <div className="list-inline-item">
                                                <Link
                                                    className="btn btn-outline-light no-bg"
                                                    to="#"
                                                    data-bs-toggle="dropdown"
                                                >
                                                    <i className="bx bx-dots-vertical-rounded" />
                                                </Link>
                                                <div className="dropdown-menu dropdown-menu-end contact-menus">
                                                    <Link to="#" className="dropdown-item">
                                                        <span>
                                                            <i className="bx bx-share" />
                                                        </span>
                                                        Forward
                                                    </Link>
                                                    <Link to="#" className="dropdown-item">
                                                        <span>
                                                            <i className="bx bx-share-alt" />
                                                        </span>
                                                        Share
                                                    </Link>
                                                    <Link to="#" className="dropdown-item">
                                                        <span>
                                                            <i className="bx bx-trash" />
                                                        </span>
                                                        Delete
                                                    </Link>
                                                </div>
                                            </div>
                                        </li>
                                    </ul>
                                    <div className="d-flex justify-content-between align-items-center ps-0 pe-0">
                                        <div className="fav-title pin-chat">
                                            <h6>Recent Updates</h6>
                                        </div>
                                    </div>
                                    <ul className="user-list">
                                        <li className="user-list-item status-list-item">
                                            <Link to="#" className="status-active">
                                                <div className="avatar">
                                                    <ImageWithBasePath
                                                        src="/assets/img/avatar/avatar-10.jpg"
                                                        className="rounded-circle"
                                                        alt="image"
                                                    />
                                                </div>
                                                <div className="users-list-body">
                                                    <div>
                                                        <h5>Michael</h5>
                                                        <p>Today at 9:06 PM</p>
                                                    </div>
                                                </div>
                                            </Link>
                                            <div className="list-inline-item">
                                                <Link
                                                    className="btn btn-outline-light no-bg"
                                                    to="#"
                                                    data-bs-toggle="dropdown"
                                                >
                                                    <i className="bx bx-dots-vertical-rounded" />
                                                </Link>
                                                <div className="dropdown-menu dropdown-menu-end contact-menus">
                                                    <Link to="#" className="dropdown-item">
                                                        <span>
                                                            <i className="bx bx-volume-mute" />
                                                        </span>
                                                        Mute
                                                    </Link>
                                                </div>
                                            </div>
                                        </li>
                                        <li className="user-list-item status-list-item">
                                            <Link to="#">
                                                <div className="avatar">
                                                    <ImageWithBasePath
                                                        src="/assets/img/avatar/avatar-1.jpg"
                                                        className="rounded-circle"
                                                        alt="image"
                                                    />
                                                </div>
                                                <div className="users-list-body">
                                                    <div>
                                                        <h5>Elizabeth Sosa</h5>
                                                        <p>Today at 8:45 PM</p>
                                                    </div>
                                                </div>
                                            </Link>
                                            <div className="list-inline-item">
                                                <Link
                                                    className="btn btn-outline-light no-bg"
                                                    to="#"
                                                    data-bs-toggle="dropdown"
                                                >
                                                    <i className="bx bx-dots-vertical-rounded" />
                                                </Link>
                                                <div className="dropdown-menu dropdown-menu-end contact-menus">
                                                    <Link to="#" className="dropdown-item">
                                                        <span>
                                                            <i className="bx bx-volume-mute" />
                                                        </span>
                                                        Mute
                                                    </Link>
                                                </div>
                                            </div>
                                        </li>
                                        <li className="user-list-item status-list-item">
                                            <Link to="#">
                                                <div className="avatar">
                                                    <ImageWithBasePath
                                                        src="/assets/img/avatar/avatar-4.jpg"
                                                        className="rounded-circle"
                                                        alt="image"
                                                    />
                                                </div>
                                                <div className="users-list-body">
                                                    <div>
                                                        <h5>Michael Howard</h5>
                                                        <p>Today at 8:13 PM</p>
                                                    </div>
                                                </div>
                                            </Link>
                                            <div className="list-inline-item">
                                                <Link
                                                    className="btn btn-outline-light no-bg"
                                                    to="#"
                                                    data-bs-toggle="dropdown"
                                                >
                                                    <i className="bx bx-dots-vertical-rounded" />
                                                </Link>
                                                <div className="dropdown-menu dropdown-menu-end contact-menus">
                                                    <Link to="#" className="dropdown-item">
                                                        <span>
                                                            <i className="bx bx-volume-mute" />
                                                        </span>
                                                        Mute
                                                    </Link>
                                                </div>
                                            </div>
                                        </li>
                                        <li className="user-list-item status-list-item">
                                            <Link to="#">
                                                <div className="avatar">
                                                    <ImageWithBasePath
                                                        src="/assets/img/avatar/avatar-3.jpg"
                                                        className="rounded-circle"
                                                        alt="image"
                                                    />
                                                </div>
                                                <div className="users-list-body">
                                                    <div>
                                                        <h5>Horace Keene</h5>
                                                        <p>Today at 7:50 PM</p>
                                                    </div>
                                                </div>
                                            </Link>
                                            <div className="list-inline-item">
                                                <Link
                                                    className="btn btn-outline-light no-bg"
                                                    to="#"
                                                    data-bs-toggle="dropdown"
                                                >
                                                    <i className="bx bx-dots-vertical-rounded" />
                                                </Link>
                                                <div className="dropdown-menu dropdown-menu-end contact-menus">
                                                    <Link to="#" className="dropdown-item">
                                                        <span>
                                                            <i className="bx bx-volume-mute" />
                                                        </span>
                                                        Mute
                                                    </Link>
                                                </div>
                                            </div>
                                        </li>
                                        <li className="user-list-item status-list-item">
                                            <Link to="#">
                                                <div className="avatar">
                                                    <ImageWithBasePath
                                                        src="/assets/img/avatar/avatar-7.jpg"
                                                        className="rounded-circle"
                                                        alt="image"
                                                    />
                                                </div>
                                                <div className="users-list-body">
                                                    <div>
                                                        <h5>Hollis Tran</h5>
                                                        <p>Yesterday at 11:37 PM</p>
                                                    </div>
                                                </div>
                                            </Link>
                                            <div className="list-inline-item">
                                                <Link
                                                    className="btn btn-outline-light no-bg"
                                                    to="#"
                                                    data-bs-toggle="dropdown"
                                                >
                                                    <i className="bx bx-dots-vertical-rounded" />
                                                </Link>
                                                <div className="dropdown-menu dropdown-menu-end contact-menus">
                                                    <Link to="#" className="dropdown-item">
                                                        <span>
                                                            <i className="bx bx-volume-mute" />
                                                        </span>
                                                        Mute
                                                    </Link>
                                                </div>
                                            </div>
                                        </li>
                                    </ul>
                                    <div className="d-flex justify-content-between align-items-center ps-0 pe-0">
                                        <div className="fav-title pin-chat">
                                            <h6>Viewed Updates</h6>
                                        </div>
                                    </div>
                                    <ul className="user-list">
                                        <li className="user-list-item status-list-item">
                                            <Link to="#">
                                                <div className="avatar">
                                                    <ImageWithBasePath
                                                        src="/assets/img/avatar/avatar-8.jpg"
                                                        className="rounded-circle"
                                                        alt="image"
                                                    />
                                                </div>
                                                <div className="users-list-body">
                                                    <div>
                                                        <h5>Dina Brown</h5>
                                                        <p>Today at 10:35 PM</p>
                                                    </div>
                                                </div>
                                            </Link>
                                            <div className="list-inline-item">
                                                <Link
                                                    className="btn btn-outline-light no-bg"
                                                    to="#"
                                                    data-bs-toggle="dropdown"
                                                >
                                                    <i className="bx bx-dots-vertical-rounded" />
                                                </Link>
                                                <div className="dropdown-menu dropdown-menu-end contact-menus">
                                                    <Link to="#" className="dropdown-item">
                                                        <span>
                                                            <i className="bx bx-volume-mute" />
                                                        </span>
                                                        Mute
                                                    </Link>
                                                </div>
                                            </div>
                                        </li>
                                        <li className="user-list-item status-list-item">
                                            <Link to="#">
                                                <div className="avatar avatar-online">
                                                    <ImageWithBasePath
                                                        src="/assets/img/avatar/avatar-9.jpg"
                                                        className="rounded-circle"
                                                        alt="image"
                                                    />
                                                </div>
                                                <div className="users-list-body">
                                                    <div>
                                                        <h5>Judy Mercer</h5>
                                                        <p>Yesterday at 11:35 PM</p>
                                                    </div>
                                                </div>
                                            </Link>
                                            <div className="list-inline-item">
                                                <Link
                                                    className="btn btn-outline-light no-bg"
                                                    to="#"
                                                    data-bs-toggle="dropdown"
                                                >
                                                    <i className="bx bx-dots-vertical-rounded" />
                                                </Link>
                                                <div className="dropdown-menu dropdown-menu-end contact-menus">
                                                    <Link to="#" className="dropdown-item">
                                                        <span>
                                                            <i className="bx bx-volume-mute" />
                                                        </span>
                                                        Mute
                                                    </Link>
                                                </div>
                                            </div>
                                        </li>
                                        <li className="user-list-item status-list-item">
                                            <Link to="#">
                                                <div className="avatar">
                                                    <ImageWithBasePath
                                                        src="/assets/img/avatar/avatar-5.jpg"
                                                        className="rounded-circle"
                                                        alt="image"
                                                    />
                                                </div>
                                                <div className="users-list-body">
                                                    <div>
                                                        <h5>Richard Ohare</h5>
                                                        <p>Today at 10:43 AM</p>
                                                    </div>
                                                </div>
                                            </Link>
                                            <div className="list-inline-item">
                                                <Link
                                                    className="btn btn-outline-light no-bg"
                                                    to="#"
                                                    data-bs-toggle="dropdown"
                                                >
                                                    <i className="bx bx-dots-vertical-rounded" />
                                                </Link>
                                                <div className="dropdown-menu dropdown-menu-end contact-menus">
                                                    <Link to="#" className="dropdown-item">
                                                        <span>
                                                            <i className="bx bx-volume-mute" />
                                                        </span>
                                                        Mute
                                                    </Link>
                                                </div>
                                            </div>
                                        </li>
                                    </ul>
                                    <div className="d-flex justify-content-between align-items-center ps-0 pe-0">
                                        <div className="fav-title pin-chat">
                                            <h6>Muted Updates</h6>
                                        </div>
                                    </div>
                                    <ul className="user-list">
                                        <li className="user-list-item status-list-item">
                                            <Link to="#">
                                                <div className="avatar avatar-online">
                                                    <ImageWithBasePath
                                                        src="/assets/img/avatar/avatar-6.jpg"
                                                        className="rounded-circle"
                                                        alt="image"
                                                    />
                                                </div>
                                                <div className="users-list-body">
                                                    <div>
                                                        <h5>Charles Sellars</h5>
                                                        <p>Have you called them?</p>
                                                    </div>
                                                </div>
                                            </Link>
                                            <div className="list-inline-item">
                                                <Link
                                                    className="btn btn-outline-light no-bg"
                                                    to="#"
                                                    data-bs-toggle="dropdown"
                                                >
                                                    <i className="bx bx-dots-vertical-rounded" />
                                                </Link>
                                                <div className="dropdown-menu dropdown-menu-end contact-menus">
                                                    <Link to="#" className="dropdown-item">
                                                        <span>
                                                            <i className="bx bx-volume-full" />
                                                        </span>
                                                        Unmute
                                                    </Link>
                                                </div>
                                            </div>
                                        </li>
                                        <li className="user-list-item status-list-item">
                                            <Link to="#">
                                                <div className="avatar ">
                                                    <ImageWithBasePath
                                                        src="/assets/img/avatar/avatar-12.jpg"
                                                        className="rounded-circle"
                                                        alt="image"
                                                    />
                                                </div>
                                                <div className="users-list-body">
                                                    <div>
                                                        <h5>James Albert</h5>
                                                        <p>Today at 5:17 PM</p>
                                                    </div>
                                                </div>
                                            </Link>
                                            <div className="list-inline-item">
                                                <Link
                                                    className="btn btn-outline-light no-bg"
                                                    to="#"
                                                    data-bs-toggle="dropdown"
                                                >
                                                    <i className="bx bx-dots-vertical-rounded" />
                                                </Link>
                                                <div className="dropdown-menu dropdown-menu-end contact-menus">
                                                    <Link to="#" className="dropdown-item">
                                                        <span>
                                                            <i className="bx bx-volume-full" />
                                                        </span>
                                                        Unmute
                                                    </Link>
                                                </div>
                                            </div>
                                        </li>
                                        <li className="user-list-item status-list-item">
                                            <Link to="#">
                                                <div className="avatar">
                                                    <ImageWithBasePath
                                                        src="/assets/img/avatar/avatar-13.jpg"
                                                        className="rounded-circle"
                                                        alt="image"
                                                    />
                                                </div>
                                                <div className="users-list-body">
                                                    <div>
                                                        <h5>Debra Jones</h5>
                                                        <p>Today at 3:28 PM</p>
                                                    </div>
                                                </div>
                                            </Link>
                                            <div className="list-inline-item">
                                                <Link
                                                    className="btn btn-outline-light no-bg"
                                                    to="#"
                                                    data-bs-toggle="dropdown"
                                                >
                                                    <i className="bx bx-dots-vertical-rounded" />
                                                </Link>
                                                <div className="dropdown-menu dropdown-menu-end contact-menus">
                                                    <Link to="#" className="dropdown-item">
                                                        <span>
                                                            <i className="bx bx-volume-full" />
                                                        </span>
                                                        Unmute
                                                    </Link>
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
                <div className="user-status-group">
                    {/* Status*/}
                    <div className="user-stories-box">
                        <div className="inner-popup">
                            <div
                                id="carouselIndicators"
                                className="carousel slide slider"
                                data-bs-ride="carousel"
                            >
                                <div className="chat status-chat-footer">
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
                                            <div className="smile-foot">
                                                <Link to="#" className="action-circle">
                                                    <i className="bx bx-smile" />
                                                </Link>
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
                                                <Link className="btn send-btn" to="#">
                                                    <i className="bx bx-paper-plane" />
                                                </Link>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                                <div className="status-user-blk">
                                    <div className="user-details">
                                        <figure className="avatar ms-1">
                                            <ImageWithBasePath
                                                src="/assets/img/avatar/avatar-10.jpg"
                                                className="rounded-circle"
                                                alt="image"
                                            />
                                        </figure>
                                        <div className="user-online">
                                            <h5>Michael</h5>
                                            <span>Today at 7:15 AM</span>
                                        </div>
                                    </div>
                                    <div className="status-voice-group">
                                        <ul>
                                            <li>
                                                <Link to="#">
                                                    <i className="feather-pause" />
                                                </Link>
                                            </li>
                                            <li>
                                                <Link to="#">
                                                    <i className="feather-volume-2" />
                                                </Link>
                                            </li>
                                            <li className="chat-user-time no-bg">
                                                <span className="chats-dot" data-bs-toggle="dropdown">
                                                    <Link to="#">
                                                        <i className="bx bx-dots-vertical-rounded" />
                                                    </Link>
                                                </span>
                                                <div className="dropdown-menu dropdown-menu-end status-drop-list">
                                                    <span className="dropdown-item">
                                                        <Link
                                                            to="#"
                                                            className="d-flex align-items-center"
                                                            data-bs-toggle="modal"
                                                            data-bs-target="#status-mute"
                                                        >
                                                            <i className="bx bx-volume-mute" />
                                                            Mute
                                                        </Link>{" "}
                                                    </span>
                                                    <span className="dropdown-item ">
                                                        <Link
                                                            to={routes.allChat}
                                                            className="d-flex align-items-center"
                                                        >
                                                            <i className="bx bx-message-square-dots" />
                                                            Message{" "}
                                                        </Link>
                                                    </span>
                                                    <span className="dropdown-item">
                                                        <Link
                                                            to={routes.audioCall}
                                                            className="d-flex align-items-center"
                                                        >
                                                            <i className="bx bx-phone" />
                                                            Voice Call{" "}
                                                        </Link>
                                                    </span>
                                                    <span className="dropdown-item">
                                                        <Link
                                                            to={routes.videoCall}
                                                            className="d-flex align-items-center"
                                                        >
                                                            <i className="bx bx-video" />
                                                            Video Call
                                                        </Link>{" "}
                                                    </span>
                                                    <span className="dropdown-item">
                                                        <Link
                                                            to={routes.contact}
                                                            className="d-flex align-items-center"
                                                        >
                                                            <i className="bx bx-user-pin" />
                                                            View Contact
                                                        </Link>{" "}
                                                    </span>
                                                    <span className="dropdown-item">
                                                        <Link
                                                            to="#"
                                                            className="d-flex align-items-center"
                                                            data-bs-toggle="modal"
                                                            data-bs-target="#report-user"
                                                        >
                                                            <i className="bx bx-dislike" />
                                                            Report
                                                        </Link>{" "}
                                                    </span>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <ol className="carousel-indicators">
                                    <li
                                        data-bs-target="#carouselIndicators"
                                        data-bs-slide-to={0}
                                        className="active"
                                    />
                                    <li data-bs-target="#carouselIndicators" data-bs-slide-to={1} />
                                    <li data-bs-target="#carouselIndicators" data-bs-slide-to={2} />
                                    <li data-bs-target="#carouselIndicators" data-bs-slide-to={3} />
                                    <li data-bs-target="#carouselIndicators" data-bs-slide-to={4} />
                                </ol>
                                <div className="carousel-inner status_slider" role="listbox">
                                    <div className="carousel-item active">
                                        <ImageWithBasePath src="/assets/img/status.jpg" alt="Image" />
                                    </div>
                                    <div id="target" className="carousel-item">
                                        <ImageWithBasePath src="/assets/img/status-01.jpg" alt="Image" />
                                    </div>
                                    <div className="carousel-item">
                                        <ImageWithBasePath src="/assets/img/status-02.jpg" alt="Image" />
                                    </div>
                                    <div className="carousel-item">
                                        <ImageWithBasePath src="/assets/img/status-03.jpg" alt="Image" />
                                    </div>
                                    <div className="carousel-item">
                                        <ImageWithBasePath src="/assets/img/status-04.jpg" alt="Image" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* /Status */}
                    <UploadFile />
                </div>
            </div>
            {/* /Content */}
        </>

    )
}

export default StatusOther
