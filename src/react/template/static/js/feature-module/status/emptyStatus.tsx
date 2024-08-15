import React, { useEffect, useState } from 'react'
import Sidebar from '../../core/common/sidebar.tsx'
import EmptyStatusModal from '../../core/data/modals/emptyStatusModal.tsx'
import Scrollbars from 'react-custom-scrollbars-2';
import { Link } from 'react-router-dom';
import { all_routes } from '../router/all_routes.tsx';

const EmptyStatus = () => {

  const routes = all_routes;

    const [visible, setVisible]=useState(false);
    const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth < 992);

  console.log(visible,"empty-status")

  const handleResize = () => {
    setIsSmallScreen(window.innerWidth < 992);
  };


  useEffect(() => {
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);


  return (

 <div className="content main_content">
  {/* Left Sidebar Menu */}
  <Sidebar/>
  {/* /Left Sidebar Menu */}
  {/* sidebar group */}
  <div className="sidebar-group left-sidebar chat_sidebar">
    {/* Chats sidebar */}
    <div id="chats" className="left-sidebar-wrap sidebar active slimscroll">

    <Scrollbars className={ isSmallScreen ? "mob-scrn" : ""}>
      <div className="slimscroll">
        {/* Left Chat Title */}
        <div className="left-chat-title all-chats d-flex justify-content-between align-items-center">
          <div className="setting-title-head">
            <h4> Status</h4>
          </div>
          <div className="add-section">
            <ul>
              <li><Link to="#" className="user-chat-search-btn" onClick={() => setVisible(!visible)}><i className="bx bx-search" /></Link></li>
              <li><Link to="#" className="contact-added" data-bs-toggle="modal" data-bs-target="#upload-file"><i className="bx bx-plus" /></Link></li>
            </ul>
            {/* Chat Search */}
            <div className={visible ? "user-chat-search visible-chat" : "user-chat-search"}>
              <form>
                <span className="form-control-feedback"><i className="bx bx-search" /></span>
                <input type="text" name="chat-search" placeholder="Search" className="form-control" />
                <div className="user-close-btn-chat"  onClick={() => setVisible(!visible)}><span className="material-icons">close</span></div>
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
                  <img src="/assets/img/avatar/avatar-2.jpg" className="rounded-circle" alt="image" />
                </div>
                <div className="users-list-body">
                  <div>
                    <h5>Alex Smith</h5>
                    <p>Today at 7:15 AM</p>
                  </div>  
                </div>
              </Link>
              <div className="list-inline-item">
                <Link className="btn btn-outline-light no-bg" to="#" data-bs-toggle="dropdown">
                  <i className="bx bx-dots-vertical-rounded" />
                </Link>
                <div className="dropdown-menu dropdown-menu-end contact-menus">
                  <Link to="#" className="dropdown-item"><span><i className="bx bx-share" /></span>Forward</Link>
                  <Link to="#" className="dropdown-item"><span><i className="bx bx-share-alt" /></span>Share</Link>
                  <Link to="#" className="dropdown-item"><span><i className="bx bx-trash" /></span>Delete</Link>
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
                <div className="avatar multi-load">
                  <img src="/assets/img/avatar/avatar-10.jpg" className="rounded-circle" alt="image" />
                </div>
                <div className="users-list-body">
                  <div>
                    <h5>Michael</h5>
                    <p>Today at 9:06 PM</p>
                  </div>  
                </div>
              </Link>
              <div className="list-inline-item">
                <Link className="btn btn-outline-light no-bg" to="#" data-bs-toggle="dropdown">
                  <i className="bx bx-dots-vertical-rounded" />
                </Link>
                <div className="dropdown-menu dropdown-menu-end contact-menus">
                  <Link to="#" className="dropdown-item"><span><i className="bx bx-volume-mute" /></span>Mute</Link>
                </div>
              </div>  
            </li>
            <li className="user-list-item status-list-item">
              <Link to={routes.status}>
                <div className="avatar">
                  <img src="/assets/img/avatar/avatar-1.jpg" className="rounded-circle" alt="image" />
                </div>
                <div className="users-list-body">
                  <div>
                    <h5>Elizabeth Sosa</h5>
                    <p>Today at 8:45 PM</p>
                  </div>  
                </div>
              </Link>
              <div className="list-inline-item">
                <Link className="btn btn-outline-light no-bg" to="#" data-bs-toggle="dropdown">
                  <i className="bx bx-dots-vertical-rounded" />
                </Link>
                <div className="dropdown-menu dropdown-menu-end contact-menus">
                  <Link to="#" className="dropdown-item"><span><i className="bx bx-volume-mute" /></span>Mute</Link>
                </div>
              </div>  
            </li>
            <li className="user-list-item status-list-item">
              <Link to={routes.status}>
                <div className="avatar">
                  <img src="/assets/img/avatar/avatar-4.jpg" className="rounded-circle" alt="image" />
                </div>
                <div className="users-list-body">
                  <div>
                    <h5>Michael Howard</h5>
                    <p>Today at 8:13 PM</p>
                  </div>  
                </div>
              </Link>
              <div className="list-inline-item">
                <Link className="btn btn-outline-light no-bg" to="#" data-bs-toggle="dropdown">
                  <i className="bx bx-dots-vertical-rounded" />
                </Link>
                <div className="dropdown-menu dropdown-menu-end contact-menus">
                  <Link to="#" className="dropdown-item"><span><i className="bx bx-volume-mute" /></span>Mute</Link>
                </div>
              </div>  
            </li>
            <li className="user-list-item status-list-item">
              <Link to={routes.status}>
                <div className="avatar">
                  <img src="/assets/img/avatar/avatar-3.jpg" className="rounded-circle" alt="image" />
                </div>
                <div className="users-list-body">
                  <div>
                    <h5>Horace Keene</h5>
                    <p>Today at 7:50 PM</p>
                  </div>  
                </div>
              </Link>
              <div className="list-inline-item">
                <Link className="btn btn-outline-light no-bg" to="#" data-bs-toggle="dropdown">
                  <i className="bx bx-dots-vertical-rounded" />
                </Link>
                <div className="dropdown-menu dropdown-menu-end contact-menus">
                  <Link to="#" className="dropdown-item"><span><i className="bx bx-volume-mute" /></span>Mute</Link>
                </div>
              </div>  
            </li>
            <li className="user-list-item status-list-item">
              <Link to={routes.status}>
                <div className="avatar">
                  <img src="/assets/img/avatar/avatar-7.jpg" className="rounded-circle" alt="image" />
                </div>
                <div className="users-list-body">
                  <div>
                    <h5>Hollis Tran</h5>
                    <p>Yesterday at 11:37 PM</p>
                  </div>  
                </div>
              </Link>
              <div className="list-inline-item">
                <Link className="btn btn-outline-light no-bg" to="#" data-bs-toggle="dropdown">
                  <i className="bx bx-dots-vertical-rounded" />
                </Link>
                <div className="dropdown-menu dropdown-menu-end contact-menus">
                  <Link to="#" className="dropdown-item"><span><i className="bx bx-volume-mute" /></span>Mute</Link>
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
                  <img src="/assets/img/avatar/avatar-8.jpg" className="rounded-circle" alt="image" />
                </div>
                <div className="users-list-body">
                  <div>
                    <h5>Dina Brown</h5>
                    <p>Today at 10:35 PM</p>
                  </div>  
                </div>
              </Link>
              <div className="list-inline-item">
                <Link className="btn btn-outline-light no-bg" to="#" data-bs-toggle="dropdown">
                  <i className="bx bx-dots-vertical-rounded" />
                </Link>
                <div className="dropdown-menu dropdown-menu-end contact-menus">
                  <Link to="#" className="dropdown-item"><span><i className="bx bx-volume-mute" /></span>Mute</Link>
                </div>
              </div>  
            </li>
            <li className="user-list-item status-list-item">
              <Link to={routes.status}>
                <div className="avatar avatar-online">
                  <img src="/assets/img/avatar/avatar-9.jpg" className="rounded-circle" alt="image" />
                </div>
                <div className="users-list-body">
                  <div>
                    <h5>Judy Mercer</h5>
                    <p>Yesterday at 11:35 PM</p>
                  </div>  
                </div>
              </Link>
              <div className="list-inline-item">
                <Link className="btn btn-outline-light no-bg" to="#" data-bs-toggle="dropdown">
                  <i className="bx bx-dots-vertical-rounded" />
                </Link>
                <div className="dropdown-menu dropdown-menu-end contact-menus">
                  <Link to="#" className="dropdown-item"><span><i className="bx bx-volume-mute" /></span>Mute</Link>
                </div>
              </div>  
            </li>
            <li className="user-list-item status-list-item">
              <Link to={routes.status}>
                <div className="avatar">
                  <img src="/assets/img/avatar/avatar-5.jpg" className="rounded-circle" alt="image" />
                </div>
                <div className="users-list-body">
                  <div>
                    <h5>Richard Ohare</h5>
                    <p>Today at 10:43 AM</p>
                  </div>  
                </div>
              </Link>
              <div className="list-inline-item">
                <Link className="btn btn-outline-light no-bg" to="#" data-bs-toggle="dropdown">
                  <i className="bx bx-dots-vertical-rounded" />
                </Link>
                <div className="dropdown-menu dropdown-menu-end contact-menus">
                  <Link to="#" className="dropdown-item"><span><i className="bx bx-volume-mute" /></span>Mute</Link>
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
                  <img src="/assets/img/avatar/avatar-6.jpg" className="rounded-circle" alt="image" />
                </div>
                <div className="users-list-body">
                  <div>
                    <h5>Charles Sellars</h5>
                    <p>Have you called them?</p>
                  </div>  
                </div>
              </Link>
              <div className="list-inline-item">
                <Link className="btn btn-outline-light no-bg" to="#" data-bs-toggle="dropdown">
                  <i className="bx bx-dots-vertical-rounded" />
                </Link>
                <div className="dropdown-menu dropdown-menu-end contact-menus">
                  <Link to="#" className="dropdown-item"><span><i className="bx bx-volume-full" /></span>Unmute</Link>
                </div>
              </div>  
            </li>
            <li className="user-list-item status-list-item">
              <Link to={routes.status}>
                <div className="avatar ">
                  <img src="/assets/img/avatar/avatar-12.jpg" className="rounded-circle" alt="image" />
                </div>
                <div className="users-list-body">
                  <div>
                    <h5>James Albert</h5>
                    <p>Today at 5:17 PM</p>
                  </div>  
                </div>
              </Link>
              <div className="list-inline-item">
                <Link className="btn btn-outline-light no-bg" to="#" data-bs-toggle="dropdown">
                  <i className="bx bx-dots-vertical-rounded" />
                </Link>
                <div className="dropdown-menu dropdown-menu-end contact-menus">
                  <Link to="#" className="dropdown-item"><span><i className="bx bx-volume-full" /></span>Unmute</Link>
                </div>
              </div>  
            </li>
            <li className="user-list-item status-list-item">
              <Link to={routes.status}>
                <div className="avatar">
                  <img src="/assets/img/avatar/avatar-13.jpg" className="rounded-circle" alt="image" />
                </div>
                <div className="users-list-body">
                  <div>
                    <h5>Debra Jones</h5>
                    <p>Today at 3:28 PM</p>
                  </div>  
                </div>
              </Link>
              <div className="list-inline-item">
                <Link className="btn btn-outline-light no-bg" to="#" data-bs-toggle="dropdown">
                  <i className="bx bx-dots-vertical-rounded" />
                </Link>
                <div className="dropdown-menu dropdown-menu-end contact-menus">
                  <Link to="#" className="dropdown-item"><span><i className="bx bx-volume-full" /></span>Unmute</Link>
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
      <img src="/assets/img/icon/load-status.svg" alt="Icon" />
      <p>Click on a contact to view their status updates</p>
    </div>
  </div>
  {/* /Chat */}

  <EmptyStatusModal/>
</div>


  )
}

export default EmptyStatus