import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import ImageWithBasePath from '../data/img/ImageWithBasePath.tsx'
import { useDispatch, useSelector } from 'react-redux'
import { setMobileView, setSidebarStyle } from '../data/redux/commonSlice.tsx'
import { all_routes } from '../../feature-module/router/all_routes.tsx'

const AdminHeader = () => {

    const routes = all_routes;
    const [themeSetting , setThemeSetting] = useState(false)
    console.log(themeSetting,"themeSetting");

    const [layoutBs, setLayoutBs]= useState(localStorage.getItem("layoutThemeColors"));
    const LayoutDark = () => {
        localStorage.setItem("layoutThemeColors", "dark");
        setThemeSetting(true);
        setLayoutBs("dark");
        document.documentElement.setAttribute("data-bs-theme","dark");
      };
      const LayoutLight = () => {
        localStorage.setItem("layoutThemeColors", "light");
        // setLayoutTheme("light");
        setLayoutBs("light");

        setThemeSetting(false)
        
        document.documentElement.setAttribute("data-bs-theme", "light");
      };

      useEffect(() => {
        document.documentElement.setAttribute("data-bs-theme", layoutBs);  
      },[])
    

    // const dispatch = useDispatch();
    // const darkMode = useSelector(state => state.darkMode);

    const dispatch = useDispatch();
    const sidebarStyle = useSelector(state => state.sidebarStyle);
    const mobileView = useSelector(state => state.mobileView);

    return (
        <>
            {/* Header */}
            <div className="header">
                {/* Logo */}
                <div className="header-left-mobile">
                    <Link to={routes.index} className="logo">
                        <ImageWithBasePath src="/admin/assets/img/logo-dark.png" alt="Logo" />
                    </Link>
                    <Link to={routes.index} className="logo logo-small">
                        <ImageWithBasePath
                            src="/admin/assets/img/logo-small-dark.png"
                            alt="Logo"
                            width={30}
                            height={30}
                        />
                    </Link>
                </div>
                {/* /Logo */}
                <div className="toggle-group">
                    <Link to="#" id="toggle_btn" onClick={()=> dispatch(setSidebarStyle(!sidebarStyle))}
>
                        <i className="bx bx-arrow-from-right" />
                    </Link>
                </div>
                <div className="top-nav-search">
                    <form>
                        <input type="text" className="form-control" placeholder="Search" />
                        <button className="btn" type="submit">
                            <i className="bx bx-search" />
                        </button>
                    </form>
                </div>
                {/* Mobile Menu Toggle */}
                <Link to="#" className="mobile_btn" id="mobile_btn" onClick={()=> dispatch(setMobileView(!mobileView))}>
                    <i className="fa fa-bars" />
                </Link>
                {/* /Mobile Menu Toggle */}
                {/* Header Right Menu */}
                <ul className="nav user-menu">
                    <li className="nav-item dark-group">
                        <div className="dark-option">
                            <Link
                                to="#"
                                className={themeSetting ? "" : "active"}
                                id="light-mode-toggle"
                                data-bs-theme-value="light"
                                onClick={LayoutLight}
                               
                            >
                                <i className="bx bx-brightness" />
                            </Link>
                            <Link to="#" id="dark-mode-toggle" data-bs-theme-value="dark" onClick={LayoutDark}                                
                             className={themeSetting ? "active" : ""}
>                               
                                <i className="bx bx-moon" />
                            </Link>
                        </div>
                    </li>
                    <li className="nav-item chat-user-icon">
                        <Link to="#">
                            <i className="bx bx-message-square-detail" />
                        </Link>
                    </li>
                    {/* Notifications */}
                    <li className="nav-item dropdown noti-dropdown chat-user-icon">
                        <Link
                            to="#"
                            className="dropdown-toggle nav-link"
                            data-bs-toggle="dropdown"
                        >
                            <i className="bx bx-bell" />
                        </Link>
                        <div className="dropdown-menu notifications">
                            <div className="topnav-dropdown-header">
                                <span className="notification-title">Notifications</span>
                                <Link to="#" className="clear-noti">
                                    {" "}
                                    Clear All{" "}
                                </Link>
                            </div>
                            <div className="noti-content">
                                <ul className="notification-list">
                                    <li className="notification-message">
                                        <Link to={routes.notificationSettings}>
                                            <div className="media d-flex">
                                                <span className="avatar avatar-sm flex-shrink-0">
                                                    <ImageWithBasePath
                                                        className="avatar-img rounded-circle"
                                                        alt="User Image"
                                                        src="/admin/assets/img/profiles/avatar-2.jpg"
                                                    />
                                                </span>
                                                <div className="media-body flex-grow-1">
                                                    <p className="noti-details">
                                                        <span className="noti-title">Alexander Manuel</span>{" "}
                                                        invited you to attend to his event goo in gotham bar
                                                    </p>
                                                    <p className="noti-time">
                                                        <span className="notification-time">4 mins ago</span>
                                                    </p>
                                                </div>
                                            </div>
                                        </Link>
                                    </li>
                                    <li className="notification-message">
                                        <Link to={routes.notificationSettings}>
                                            <div className="media d-flex">
                                                <span className="avatar avatar-sm flex-shrink-0">
                                                    <ImageWithBasePath
                                                        className="avatar-img rounded-circle"
                                                        alt="User Image"
                                                        src="/admin/assets/img/profiles/avatar-1.jpg"
                                                    />
                                                </span>
                                                <div className="media-body flex-grow-1">
                                                    <p className="noti-details">
                                                        <span className="noti-title">Elizabeth Sosa</span>{" "}
                                                        posted a comment on your status
                                                    </p>
                                                    <p className="noti-time">
                                                        <span className="notification-time">6 mins ago</span>
                                                    </p>
                                                </div>
                                            </div>
                                        </Link>
                                    </li>
                                    <li className="notification-message">
                                        <Link to={routes.notificationSettings}>
                                            <div className="media d-flex">
                                                <span className="avatar avatar-sm flex-shrink-0">
                                                    <ImageWithBasePath
                                                        className="avatar-img rounded-circle"
                                                        alt="User Image"
                                                        src="/admin/assets/img/profiles/avatar-4.jpg"
                                                    />
                                                </span>
                                                <div className="media-body flex-grow-1">
                                                    <p className="noti-details">
                                                        <span className="noti-title">Mark Villiams</span> shared
                                                        your status update
                                                    </p>
                                                    <p className="noti-time">
                                                        <span className="notification-time">8 mins ago</span>
                                                    </p>
                                                </div>
                                            </div>
                                        </Link>
                                    </li>
                                    <li className="notification-message">
                                        <Link to={routes.notificationSettings}>
                                            <div className="media d-flex">
                                                <span className="avatar avatar-sm flex-shrink-0">
                                                    <ImageWithBasePath
                                                        className="avatar-img rounded-circle"
                                                        alt="User Image"
                                                        src="/admin/assets/img/profiles/avatar-8.jpg"
                                                    />
                                                </span>
                                                <div className="media-body flex-grow-1">
                                                    <p className="noti-details">
                                                        <span className="noti-title">Horace Keene</span> posted
                                                        a comment on your photo
                                                    </p>
                                                    <p className="noti-time">
                                                        <span className="notification-time">12 mins ago</span>
                                                    </p>
                                                </div>
                                            </div>
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                            <div className="topnav-dropdown-footer">
                                <Link to={routes.notificationSettings}>View all Notifications</Link>
                            </div>
                        </div>
                    </li>
                    {/* /Notifications */}
                    {/* User Menu */}
                    <li className="nav-item dropdown has-arrow drop-user-profile">
                        <Link
                            to="#"
                            className="dropdown-toggle nav-link name-profile"
                            data-bs-toggle="dropdown"
                        >
                            <span className="user-profile-grp">
                                <span className="user-img">
                                    <ImageWithBasePath
                                        className="rounded-circle"
                                        src="/admin/assets/img/profiles/avatar-2.jpg"
                                        alt="Seema Sisty"
                                    />
                                </span>
                                <span className="user-detail">
                                    <span className="drop-user-name">Anderson</span>
                                    <span className="drop-user-role">Administrator</span>
                                </span>
                            </span>
                        </Link>
                        <div className="dropdown-menu">
                            <div className="user-header">
                                <div className="avatar avatar-sm">
                                    <ImageWithBasePath
                                        src="/admin/assets/img/profiles/avatar-2.jpg"
                                        alt="User Image"
                                        className="avatar-img rounded-circle"
                                    />
                                </div>
                                <div className="user-text">
                                    <h6>Anderson</h6>
                                    <p className="text-muted mb-0">Administrator</p>
                                </div>
                            </div>
                            <Link className="dropdown-item" to={routes.profileSettings}>
                                My Profile
                            </Link>
                            <Link className="dropdown-item" to={routes.profileSettings}>
                                Account Settings
                            </Link>
                            <Link className="dropdown-item" to={routes.emailLogin}>
                                Logout
                            </Link>
                        </div>
                    </li>
                    {/* /User Menu */}
                </ul>
                {/* /Header Right Menu */}
            </div>
            {/* /Header */}
        </>

    )
}

export default AdminHeader
