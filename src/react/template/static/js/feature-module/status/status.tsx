import React, { useState } from 'react';
 
import ImageWithBasePath from '../../core/data/img/ImageWithBasePath.tsx'
import Sidebar from '../../core/common/sidebar.tsx'
import { Link } from 'react-router-dom'
import Scrollbars from 'react-custom-scrollbars-2'
import StatusViewedBy from '../../core/modals/status/statusViewedBy.tsx'
import UploadFile from '../../core/modals/status/uploadFile.tsx'
import DeleteStatus from '../../core/modals/status/deleteStatus.tsx'
import { all_routes } from '../router/all_routes.tsx'
 
const Status = () => {
    const routes = all_routes;
    const [selectedUser, setSelectedUser] = useState(null);
    const users = [
        {
          id: 1,
          name: 'Alex Smith1',
          time: 'Today at 7:15 AM',
          avatarSrc: '/assets/img/avatar/avatar-16.png',
          status: [
            '/assets/img/status.jpg',
            '/assets/img/status-01.jpg',
            '/assets/img/status-02.jpg',
            '/assets/img/status-03.jpg',
            '/assets/img/status-04.jpg'
          ]
        },
        {
          id: 2,
          name: 'Jamie Doe',
          time: 'Yesterday at 3:20 PM',
          avatarSrc: '/assets/img/avatar/avatar-16.png',
          status: [
            '/assets/img/status-04.jpg',
            '/assets/img/status-03.jpg'
          ]
        },
        {
          id: 3,
          name: 'Chris Johnson',
          time: 'August 16, 2024 at 12:45 PM',
          avatarSrc: '/assets/img/avatar/avatar-16.png',
          status: [
            '/assets/img/status-01.jpg',
            '/assets/img/status-02.jpg'
          ]
        }
        // Add more users as needed
      ];
      const recentUpdates = [
        {
          id: 1,
          name: 'Michael',
          time: 'Today at 9:06 PM',
          avatarSrc: '/assets/img/avatar/avatar-16.png',
        },
        {
          id: 2,
          name: 'Elizabeth Sosa',
          time: 'Today at 8:45 PM',
          avatarSrc: '/assets/img/avatar/avatar-16.png',
        },
        {
          id: 3,
          name: 'Michael Howard',
          time: 'Today at 8:13 PM',
          avatarSrc: '/assets/img/avatar/avatar-16.png',
        },
        {
          id: 4,
          name: 'Horace Keene',
          time: 'Today at 7:50 PM',
          avatarSrc: '/assets/img/avatar/avatar-16.png',
        },
        {
          id: 5,
          name: 'Hollis Tran',
          time: 'Yesterday at 11:37 PM',
          avatarSrc: '/assets/img/avatar/avatar-16.png',
        }
      ];
   
      const handleUserClick = (user) => {
        setSelectedUser(user);
      };
    const myStatus = [
        {
            id: 2,
            name: 'Jamie Doe',
            time: 'Yesterday at 3:20 PM',
            avatarSrc: '/assets/img/avatar/avatar-3.jpg'
          },
        {
          id: 1,
          name: 'Alex Smith1',
          time: 'Today at 7:15 AM',
          avatarSrc: '/assets/img/avatar/avatar-2.jpg'
        },
       
        {
          id: 3,
          name: 'Chris Johnson',
          time: 'August 16, 2024 at 12:45 PM',
          avatarSrc: '/assets/img/avatar/avatar-4.jpg'
        }
        // Add more users as needed
      ];
   
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
                                   
     
<ul className="user-list space-chat">
        {users.map(user => (
          <li key={user.id} className="user-list-item status-list-item">
            <Link to="#" className="status-active status-show" onClick={() => handleUserClick(user)}>
              <div className="avatar avatar-online">
                <ImageWithBasePath
                  src={user.avatarSrc}
                  className="rounded-circle"
                  alt="image"
                />
              </div>
              <div className="users-list-body">
                <div>
                  <h5>{user.name}</h5>
                  <p>{user.time}</p>
                </div>
              </div>
            </Link>
            <div className="list-inline-item">
              <Link className="btn btn-outline-light no-bg" to="#" data-bs-toggle="dropdown">
                <i className="bx bx-dots-vertical-rounded" />
              </Link>
              <div className="dropdown-menu dropdown-menu-end contact-menus">
                <Link to="#" className="dropdown-item" data-bs-toggle="modal" data-bs-target="#forward-message">
                  <span><i className="bx bx-share" /></span> Forward
                </Link>
                <Link to="#" className="dropdown-item">
                  <span><i className="bx bx-share-alt" /></span> Share
                </Link>
                <Link to="#" className="dropdown-item" data-bs-toggle="modal" data-bs-target="#change-status">
                  <span><i className="bx bx-trash" /></span> Delete
                </Link>
              </div>
            </div>
          </li>
        ))}
      </ul>
 
      <div className="d-flex justify-content-between align-items-center ps-0 pe-0">
        <div className="fav-title pin-chat">
          <h6>Recent Updates</h6>
        </div>
      </div>
      <ul className="user-list">
        {recentUpdates.map(user => (
          <li key={user.id} className="user-list-item status-list-item">
            <Link to={routes.statusOther}>
              <div className="avatar">
                <ImageWithBasePath
                  src={user.avatarSrc}
                  className="rounded-circle"
                  alt="image"
                />
              </div>
              <div className="users-list-body">
                <div>
                  <h5>{user.name}</h5>
                  <p>{user.time}</p>
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
        ))}
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
                                                                src="/assets/img/avatar/avatar-2.jpg"
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
                            {selectedUser && (
                    <div className="user-status-group">
                    {/* Status */}
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
                                {selectedUser.status.length}
                            </Link>
                            </div>
                            <div className="status-user-blk">
                            <div className="user-details">
                                <figure className="avatar ms-1">
                                <ImageWithBasePath
                                    src={selectedUser.avatarSrc}
                                    className="rounded-circle"
                                    alt="image"
                                />
                                </figure>
                                <div className="user-online">
                                <h5>My Status</h5>
                                <span>{selectedUser.time}</span>
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
                            {selectedUser.status.map((_, index) => (
                                <li
                                key={index}
                                data-bs-target="#carouselIndicators"
                                data-bs-slide-to={index}
                                className={index === 0 ? 'active' : ''}
                                />
                            ))}
                            </ol>
                            <div className="carousel-inner status_slider" role="listbox">
                            {selectedUser.status.map((src, index) => (
                                <div
                                key={index}
                                className={`carousel-item ${index === 0 ? 'active' : ''}`}
                                >
                                <ImageWithBasePath src={src} alt={`Status ${index + 1}`} />
                                </div>
                            ))}
                            </div>
                        </div>
                        </div>
                    </div>
                    {/* /Status */}
                    </div>
                )}
                <StatusViewedBy/>
                <UploadFile />
                <DeleteStatus />
            </div>
            {/* /Content */}
        </>
 
    )
}
 

export default Status
