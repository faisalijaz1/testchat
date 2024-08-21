import React from 'react'
import ImageWithBasePath from '../../core/data/img/ImageWithBasePath.tsx'
import Sidebar from '../../core/common/sidebar.tsx'
import { Link } from 'react-router-dom'
import Scrollbars from 'react-custom-scrollbars-2'
import StatusViewedBy from '../../core/modals/status/statusViewedBy.tsx'
import UploadFile from '../../core/modals/status/uploadFile.tsx'
import DeleteStatus from '../../core/modals/status/deleteStatus.tsx'
import { all_routes } from '../router/all_routes.tsx'

const Status = () => {
    const routes = all_routes
    return (
        <>
            {/* content */}
            <div className="content main_content">
                {/* Left Sidebar Menu */}
                <Sidebar />
                {/* /Left Sidebar Menu */}
                {/* sidebar group */}
                <div className="sidebar-group left-sidebar chat_sidebar solo-sidebar flex-shrink-0">
                    {/* Chats sidebar */}
                    <div id="chat" className="left-sidebar-wrap sidebar active slimscroll">
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
                                                    <i className="feather-plus" />
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
                                        <li className="user-list-item status-list-item ">
                                            <Link to="#" className="status-active status-show">
                                                <div className="avatar avatar-online">
                                                    <ImageWithBasePath
                                                        src="/assets/img/avatar/avatar-17.png"
                                                        className="rounded-circle"
                                                        alt="image"
                                                    />
                                                </div>
                                                <div className="users-list-body">
                                                    <div>
                                                        <h5>Test Skm Account</h5>
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
                                                    <Link
                                                        to="#"
                                                        className="dropdown-item"
                                                        data-bs-toggle="modal"
                                                        data-bs-target="#forward-message"
                                                    >
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
                                                    <Link
                                                        to="#"
                                                        className="dropdown-item"
                                                        data-bs-toggle="modal"
                                                        data-bs-target="#change-status"
                                                    >
                                                        <span>
                                                            <i className="bx bx-trash" />
                                                        </span>
                                                        Delete
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
                {/* sidebar group */}
                <div className="sidebar-group left-sidebar chat_sidebar status-solo-sidebar flex-shrink-0 d-none">
                    {/* Chats sidebar */}
                    <div id="chats" className="left-sidebar-wrap sidebar active slimscroll">
                        <div className="slimscroll">
                            {/* Left Chat Title */}
                            <div className="left-chat-title all-chats d-flex justify-content-between align-items-center">
                                <div className="setting-title-head">
                                    <h4> My Status</h4>
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
                                                <i className="feather-plus" />
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
                            <div className="sidebar-body chat-body" id="chatsidebars">
                                <ul className="user-list">
                                    <li className="user-list-item status-list-item">
                                        <Link to={routes.statusOther}>
                                            <div className="avatar">
                                                <ImageWithBasePath
                                                    src="/assets/img/avatar/avatar-17.png"
                                                    className="rounded-circle"
                                                    alt="image"
                                                />
                                            </div>
                                            <div className="users-list-body">
                                                <div>
                                                    <h5>20 Views</h5>
                                                    <p>Today at 7.15 AM</p>
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
                                                <Link
                                                    to="#"
                                                    className="dropdown-item"
                                                    data-bs-toggle="modal"
                                                    data-bs-target="#forward-message"
                                                >
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
                                                <Link
                                                    to="#"
                                                    className="dropdown-item"
                                                    data-bs-toggle="modal"
                                                    data-bs-target="#change-status"
                                                >
                                                    <span>
                                                        <i className="bx bx-trash" />
                                                    </span>
                                                    Delete
                                                </Link>
                                            </div>
                                        </div>
                                    </li>
                                    <li className="user-list-item status-list-item">
                                        <Link to={routes.statusOther}>
                                            <div className="avatar">
                                                <ImageWithBasePath
                                                    src="/assets/img/avatar/avatar-2.jpg"
                                                    className="rounded-circle"
                                                    alt="image"
                                                />
                                            </div>
                                            <div className="users-list-body">
                                                <div>
                                                    <h5>30 Views</h5>
                                                    <p>Today at 7.15 AM</p>
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
                                                <Link
                                                    to="#"
                                                    className="dropdown-item"
                                                    data-bs-toggle="modal"
                                                    data-bs-target="#forward-message"
                                                >
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
                                                <Link
                                                    to="#"
                                                    className="dropdown-item"
                                                    data-bs-toggle="modal"
                                                    data-bs-target="#change-status"
                                                >
                                                    <span>
                                                        <i className="bx bx-trash" />
                                                    </span>
                                                    Delete
                                                </Link>
                                            </div>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>



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
                                <div className="view-status-list">
                                    <Link
                                        to="#"
                                        data-bs-toggle="modal"
                                        data-bs-target="#view-user-status"
                                    >
                                        <i className="feather-eye" />
                                        25
                                    </Link>
                                </div>
                                <div className="status-user-blk">
                                    <div className="user-details">
                                        <figure className="avatar ms-1">
                                            <ImageWithBasePath
                                                src="/assets/img/avatar/avatar-17.png"
                                                className="rounded-circle"
                                                alt="image"
                                            />
                                        </figure>
                                        <div className="user-online">
                                            <h5>My Status</h5>
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
                </div>
                <StatusViewedBy />
                <UploadFile />
                <DeleteStatus />
            </div>
            {/* /Content */}
        </>

    )
}

export default Status
