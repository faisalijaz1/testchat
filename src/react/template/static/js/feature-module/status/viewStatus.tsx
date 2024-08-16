import React from 'react'
import Scrollbars from 'react-custom-scrollbars-2'
import UploadFile from '../../core/modals/status/uploadFile.tsx'
import HomeModals from '../../core/data/modals/homeModals.tsx'
import ImageWithBasePath from '../../core/data/img/ImageWithBasePath.tsx'
import { Link } from 'react-router-dom'
import { all_routes } from '../router/all_routes.tsx'
import Sidebar from '../../core/common/sidebar.tsx'

const ViewStatus = () => {
    const routes = all_routes
    return (
        <>
            {/* content */}
            <div className="content main_content">
                {/* Left Sidebar Menu */}
                <Sidebar/>
                {/* /Left Sidebar Menu */}
                {/* sidebar group */}
                <div className="sidebar-group left-sidebar chat_sidebar">
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
                                                        <h5>Mark Villiams</h5>
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
                                            <Link to={routes.status}>
                                                <div className="avatar">
                                                    <ImageWithBasePath
                                                        src="/assets/img/avatar/avatar-2.jpg"
                                                        className="rounded-circle"
                                                        alt="image"
                                                    />
                                                </div>
                                                <div className="users-list-body">
                                                    <div>
                                                        <h5>Mark Villiams</h5>
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
                                        <li className="user-list-item status-list-item">
                                            <Link to={routes.status}>
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
                                        <li className="user-list-item status-list-item">
                                            <Link to={routes.status}>
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
                                        <li className="user-list-item status-list-item">
                                            <Link to={routes.status}>
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
                                        <li className="user-list-item status-list-item">
                                            <Link to={routes.status}>
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
                                            <h6>Viewed Updates</h6>
                                        </div>
                                    </div>
                                    <ul className="user-list">
                                        <li className="user-list-item status-list-item">
                                            <Link to={routes.status}>
                                                <div className="avatar">
                                                    <ImageWithBasePath
                                                        src="/assets/img/avatar/avatar-7.jpg"
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
                                        <li className="user-list-item status-list-item">
                                            <Link to={routes.status}>
                                                <div className="avatar avatar-online">
                                                    <ImageWithBasePath
                                                        src="/assets/img/avatar/avatar-1.jpg"
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
                                        <li className="user-list-item status-list-item">
                                            <Link to={routes.status}>
                                                <div className="avatar">
                                                    <ImageWithBasePath
                                                        src="/assets/img/avatar/avatar-4.jpg"
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
                                            <h6>Muted Updates</h6>
                                        </div>
                                    </div>
                                    <ul className="user-list">
                                        <li className="user-list-item status-list-item">
                                            <Link to={routes.status}>
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
                                        <li className="user-list-item status-list-item">
                                            <Link to={routes.status}>
                                                <div className="avatar ">
                                                    <ImageWithBasePath
                                                        src="/assets/img/avatar/avatar-5.jpg"
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
                                        <li className="user-list-item status-list-item">
                                            <Link to={routes.status}>
                                                <div className="avatar">
                                                    <ImageWithBasePath
                                                        src="/assets/img/avatar/avatar-3.jpg"
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
                                </div>
                            </div>
                        </Scrollbars>
                    </div>
                    {/* / Chats sidebar */}
                </div>
                {/* /Sidebar group */}
                {/* Chat */}
                <div className="chat status-empty-group d-flex align-items-center justify-content-center">
                    <div className="status-message-box text-center">
                        <h6>View Your Status</h6>
                        <div className="avatar">
                            <ImageWithBasePath
                                src="/assets/img/avatar/avatar-3.jpg"
                                className="rounded-circle"
                                alt="image"
                            />
                        </div>
                        <div className="view-link">
                            <Link to="#">
                                <i className="bx bx-show me-1" />
                                25
                            </Link>
                            <p>Today at 4:46 AM</p>
                        </div>
                    </div>
                </div>
                {/* /Chat */}
                <UploadFile />
                <HomeModals />
            </div>
            {/* /Content */}
        </>

    )
}

export default ViewStatus
