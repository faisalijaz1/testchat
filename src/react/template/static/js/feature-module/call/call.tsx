import React, { useEffect, useState } from 'react'
import Sidebar from '../../core/common/sidebar.tsx'
import { Link } from 'react-router-dom'
import ImageWithBasePath from '../../core/data/img/ImageWithBasePath.tsx'
import Scrollbars from 'react-custom-scrollbars-2'
import CallModal from '../../core/modals/callModal.tsx'

const Call = () => {

    const [visible, setVisible]=useState(false);

  const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth < 992);

  console.log(isSmallScreen,"isSmallScreen")

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
    <Scrollbars className={ isSmallScreen ? "mob-scrn" : ""} >

      <div className="slimscroll">
        {/* Left Chat Title */}
        <div className="left-chat-title all-chats d-flex justify-content-between align-items-center">
          <div className="select-group-chat">
            <div className="dropdown">
              <Link to="#" className="dropdown-toggle" data-bs-toggle="dropdown">
                All Calls<i className="bx bx-chevron-down" />
              </Link>
              <ul className="dropdown-menu">
                <li><Link className="dropdown-item" to="#">Archive Call</Link></li>
              </ul>
            </div>
          </div>
          <div className="add-section">
            <ul>
              <li><Link to="#" className="user-chat-search-btn" onClick={() => setVisible(!visible)}><i className="bx bx-search" /></Link></li>
              <li><Link to="#" className="contact-added" data-bs-toggle="modal" data-bs-target="#add-call"><i className="bx bx-plus" /></Link></li>
              <li>
                <div className="chat-action-btns">
                  <div className="chat-action-col">
                    <Link className="#" to="#" data-bs-toggle="dropdown" aria-expanded="false">
                      <i className="bx bx-dots-vertical-rounded" />
                    </Link>
                    <div className="dropdown-menu dropdown-menu-end">
                      <Link to="#" className="dropdown-item" data-bs-toggle="modal" data-bs-target="#clear-call"><span><i className="bx bx-trash" /></span>Clear Call Log</Link>
                    </div>
                  </div>
                </div>
              </li>
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
              <h6>Recently Contacted</h6>
            </div>
          </div>
          {/* /Left Chat Title */}
          <ul className="user-list">
            <li className="user-list-item">
              <Link to="#" className="status-active">
                <div className="avatar ">
                  <ImageWithBasePath src="assets/img/avatar/avatar-2.jpg" className="rounded-circle" alt="image" />
                </div>
                <div className="users-list-body">
                  <div>
                    <h5>Mark Villiams</h5>
                    <p className="phone-income"><i className="bx bx-phone-incoming" />Just Now</p>
                  </div>
                  <div className="last-chat-time">
                    <small className="text-muted">15m 54s</small>
                    <div className="chat-pin">
                      <span data-bs-toggle="modal" data-bs-target="#voice_call"><i className="bx bx-phone" /></span>
                    </div>
                  </div>    
                </div>
              </Link>
            </li>
            <li className="user-list-item">
              <Link to="#">
                <div>
                  <div className="avatar ">
                    <ImageWithBasePath src="assets/img/avatar/avatar-1.jpg" className="rounded-circle" alt="image" />
                  </div>
                </div>
                <div className="users-list-body">
                  <div>
                    <h5>Elizabeth Sosa</h5>
                    <p className="phone-missed"><i className="bx bx-phone-off" />5 Mins Ago</p>
                  </div>
                  <div className="last-chat-time">
                    <small className="text-muted">8m 34s</small>
                    <div className="chat-pin">
                      <span data-bs-toggle="modal" data-bs-target="#voice_call"><i className="bx bx-phone" /></span>
                    </div>
                  </div>
                </div>
              </Link>
            </li>
            <li className="user-list-item">
              <Link to="#">
                <div className="avatar ">
                  <ImageWithBasePath src="assets/img/avatar/avatar-5.jpg" className="rounded-circle" alt="image" />
                </div>
                <div className="users-list-body">
                  <div>
                    <h5>Michael Howard</h5>
                    <p className="phone-outgoing"><i className="bx bx-phone-outgoing" />1 Hour Ago</p>
                  </div>
                  <div className="last-chat-time">
                    <small className="text-muted">13m 10s</small>
                    <div className="chat-pin">
                      <span data-bs-toggle="modal" data-bs-target="#voice_call"><i className="bx bx-phone" /></span>
                    </div>
                  </div>    
                </div>
              </Link>
            </li>
            <li className="user-list-item">
              <Link to="#">
                <div className="avatar">
                  <ImageWithBasePath src="assets/img/avatar/avatar-1.jpg" className="rounded-circle" alt="image" />
                </div>
                <div className="users-list-body">
                  <div>
                    <h5>Horace Keene</h5>
                    <p className="phone-income"><i className="bx bx-phone-incoming" />2 Hour Ago</p>
                  </div>
                  <div className="last-chat-time">
                    <small className="text-muted">2m 28s</small>
                    <div className="chat-pin">
                      <span data-bs-toggle="modal" data-bs-target="#voice_call"><i className="bx bx-phone" /></span>
                    </div>
                  </div>     
                </div>
              </Link>
            </li>
            <li className="user-list-item">
              <Link to="#">
                <div>
                  <div className="avatar ">
                    <ImageWithBasePath src="assets/img/avatar/avatar-3.jpg" className="rounded-circle" alt="image" />
                  </div>
                </div>
                <div className="users-list-body">
                  <div>
                    <h5>Hollis Tran</h5>
                    <p className="phone-missed"><i className="bx bx-phone-off" />1 Day Ago</p>
                  </div>
                  <div className="last-chat-time">
                    <small className="text-muted">8m 34s</small>
                    <div className="chat-pin">
                      <span data-bs-toggle="modal" data-bs-target="#voice_call"><i className="bx bx-phone" /></span>
                    </div>
                  </div>  
                </div>
              </Link>
            </li>
            <li className="user-list-item">
              <Link to="#">
                <div className="avatar">
                  <ImageWithBasePath src="assets/img/avatar/avatar-4.jpg" className="rounded-circle" alt="image" />
                </div>
                <div className="users-list-body">
                  <div>
                    <h5>James Albert</h5>
                    <p className="phone-outgoing"><i className="bx bx-phone-outgoing" />4 Days Ago</p>
                  </div>
                  <div className="last-chat-time">
                    <small className="text-muted">13m 10s</small>
                    <div className="chat-pin">
                      <span data-bs-toggle="modal" data-bs-target="#voice_call"><i className="bx bx-phone" /></span>
                    </div>
                  </div>    
                </div>
              </Link>
            </li>
            <li className="user-list-item">
              <Link to="#">
                <div>
                  <div className="avatar">
                    <ImageWithBasePath src="assets/img/avatar/avatar-9.jpg" className="rounded-circle" alt="image" />
                  </div>
                </div>
                <div className="users-list-body">
                  <div>
                    <h5>Debra Jones</h5>
                    <p className="phone-income"><i className="bx bx-phone-incoming" />24 Jun 2023</p>
                  </div>
                  <div className="last-chat-time">
                    <small className="text-muted">2m 28s</small>
                    <div className="chat-pin">
                      <span data-bs-toggle="modal" data-bs-target="#voice_call"><i className="bx bx-phone" /></span>
                    </div>
                  </div>  
                </div>
              </Link>
            </li>
            <li className="user-list-item">
              <Link to="#">
                <div>
                  <div className="avatar ">
                    <ImageWithBasePath src="assets/img/avatar/avatar-7.jpg" className="rounded-circle" alt="image" />
                  </div>
                </div>
                <div className="users-list-body">
                  <div>
                    <h5>Dina Brown</h5>
                    <p className="phone-missed"><i className="bx bx-phone-off" />20 Jun 2023</p>
                  </div>
                  <div className="last-chat-time">
                    <small className="text-muted">8m 34s</small>
                    <div className="chat-pin">
                      <span data-bs-toggle="modal" data-bs-target="#voice_call"><i className="bx bx-phone" /></span>
                    </div>
                  </div>  
                </div>
              </Link>
            </li>
            <li className="user-list-item">
              <Link to="#">
                <div>
                  <div className="avatar">
                    <ImageWithBasePath src="assets/img/avatar/avatar-8.jpg" className="rounded-circle" alt="image" />
                  </div>
                </div>
                <div className="users-list-body">
                  <div>
                    <h5>Judy Mercer</h5>
                    <p className="phone-outgoing"><i className="bx bx-phone-outgoing" />15 Jun 2023</p>
                  </div>
                  <div className="last-chat-time">
                    <small className="text-muted">13m 10s</small>
                    <div className="chat-pin">
                      <span data-bs-toggle="modal" data-bs-target="#voice_call"><i className="bx bx-phone" /></span>
                    </div>
                  </div>  
                </div>
              </Link>
            </li>
            <li className="user-list-item">
              <Link to="#">
                <div>
                  <div className="avatar">
                    <ImageWithBasePath src="assets/img/avatar/avatar-5.jpg" className="rounded-circle" alt="image" />
                  </div>
                </div>
                <div className="users-list-body">
                  <div>
                    <h5>Richard Ohare</h5>
                    <p className="phone-income"><i className="bx bx-phone-incoming" />13 Jun 2023</p>
                  </div>
                  <div className="last-chat-time">
                    <small className="text-muted">2m 28s</small>
                    <div className="chat-pin">
                      <span data-bs-toggle="modal" data-bs-target="#voice_call"><i className="bx bx-phone" /></span>
                    </div>
                  </div>  
                </div>
              </Link>
            </li>
            <li className="user-list-item">
              <Link to="#">
                <div>
                  <div className="avatar ">
                    <ImageWithBasePath src="assets/img/avatar/avatar-6.jpg" className="rounded-circle" alt="image" />
                  </div>
                </div>
                <div className="users-list-body">
                  <div>
                    <h5>Charles Sellars</h5>
                    <p className="phone-missed"><i className="bx bx-phone-off" />08 Jun 2023</p>
                  </div>
                  <div className="last-chat-time">
                    <small className="text-muted">8m 34s</small>
                    <div className="chat-pin">
                      <span data-bs-toggle="modal" data-bs-target="#voice_call"><i className="bx bx-phone" /></span>
                    </div>
                  </div>  
                </div>
              </Link>
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
  <div className="chat call-log-group" id="middle">
    <div>
      <div className="chat-header">
        <div className="user-details">
          <div className="d-lg-none">
            <ul className="list-inline mt-2 me-2">
              <li className="list-inline-item">
                <Link className="text-muted px-0 left_side" to="#" data-chat="open">
                  <i className="fas fa-arrow-left" />
                </Link>
              </li>
            </ul>
          </div>
          <figure className="avatar ms-1">
            <ImageWithBasePath src="assets/img/avatar/avatar-2.jpg" className="rounded-circle" alt="image" />
          </figure>
          <div className="mt-1">
            <h5>Mark Villiams</h5>
            <small className="last-seen">
              22-555-345-11
            </small>
          </div>
        </div>
        <div className="chat-options chat-contact-list">
          <ul className="list-inline">
            <li className="list-inline-item" data-bs-toggle="tooltip" data-bs-placement="bottom" title="Video Call">
              <Link to="#" className="btn btn-outline-light" data-bs-toggle="modal" data-bs-target="#video_call">
                <i className="bx bx-video" />
              </Link>
            </li>
            <li className="list-inline-item" data-bs-toggle="tooltip" data-bs-placement="bottom" title="Voice Call">
              <Link to="#" className="btn btn-outline-light" data-bs-toggle="modal" data-bs-target="#voice_call">
                <i className="bx bx-phone" />
              </Link>
            </li>
            <li className="list-inline-item">
              <Link className="btn btn-outline-light no-bg" to="#" data-bs-toggle="dropdown">
                <i className="bx bx-dots-vertical-rounded" />
              </Link>
              <div className="dropdown-menu dropdown-menu-end">
                <Link to="#" className="dropdown-item "><span><i className="bx bx-copy" /></span>Copy Number </Link>
                <Link to="#" className="dropdown-item" data-bs-toggle="modal" data-bs-target="#block-user"><span><i className="bx bx-block" /></span>Block</Link>
                <Link to="#" className="dropdown-item"><span><i className="bx bx-trash" /></span>Clear History</Link>
              </div>
            </li>
          </ul>
        </div>
      </div>
      <div className="chat-body slimscroll">
        <div className="messages">
          <div className="chat-line">
            <span className="chat-date">Today</span>
          </div>
          <div className="chats">
            <div className="chat-avatar">
              <ImageWithBasePath src="assets/img/avatar/avatar-2.jpg" className="rounded-circle dreams_chat" alt="image" />
            </div>
            <div className="chat-content">
              <div className="chat-profile-name">
                <h6>Mark Villiams<span>8:16 PM</span></h6>
                <div className="chat-action-btns ms-3">
                  <div className="chat-action-col">
                    <Link className="#" to="#" data-bs-toggle="dropdown">
                      <i className="bx bx-dots-horizontal-rounded" />
                    </Link>
                    <div className="dropdown-menu chat-drop-menu dropdown-menu-end">
                      <Link to="#" className="dropdown-item" data-bs-toggle="modal" data-bs-target="#clear-call"><span><i className="bx bx-trash" /></span>Delete</Link>
                    </div>
                  </div>
                </div>
              </div>
              <div className="message-content">
                <span className="missed-call-chat"><i className="bx bx-phone-off me-1" />Missed Call</span> 10 mins 25 secs
              </div>
            </div>
          </div>
          <div className="chats chats-right">
            <div className="chat-content">
              <div className="chat-profile-name text-end">
                <h6>Alex Smith<span>8:16 PM</span></h6>
                <div className="chat-action-btns ms-3">
                  <div className="chat-action-col">
                    <Link className="#" to="#" data-bs-toggle="dropdown">
                      <i className="bx bx-dots-horizontal-rounded" />
                    </Link>
                    <div className="dropdown-menu chat-drop-menu dropdown-menu-end">
                      <Link to="#" className="dropdown-item" data-bs-toggle="modal" data-bs-target="#clear-call"><span><i className="bx bx-trash" /></span>Delete</Link>
                    </div>
                  </div>
                </div>
              </div>
              <div className="message-content ">
                <span className="outgoing-call"><i className="bx bx-phone-outgoing me-1" />Outgoing Call</span> 10 mins 25 secs
              </div>
            </div>
            <div className="chat-avatar">
              <ImageWithBasePath src="assets/img/avatar/avatar-10.jpg" className="rounded-circle dreams_chat" alt="image" />
            </div>
          </div>
          <div className="chats">
            <div className="chat-avatar">
              <ImageWithBasePath src="assets/img/avatar/avatar-2.jpg" className="rounded-circle dreams_chat" alt="image" />
            </div>
            <div className="chat-content">
              <div className="chat-profile-name">
                <h6>Mark Villiams<span>8:16 PM</span></h6>
                <div className="chat-action-btns ms-3">
                  <div className="chat-action-col">
                    <Link className="#" to="#" data-bs-toggle="dropdown">
                      <i className="bx bx-dots-horizontal-rounded" />
                    </Link>
                    <div className="dropdown-menu chat-drop-menu dropdown-menu-end">
                      <Link to="#" className="dropdown-item" data-bs-toggle="modal" data-bs-target="#clear-call"><span><i className="bx bx-trash" /></span>Delete</Link>
                    </div>
                  </div>
                </div>
              </div>
              <div className="message-content">
                <span className="incoming-call"><i className="bx bx-phone-incoming me-1" />Incoming Call</span> 12 mins 30 secs
              </div>
            </div>
          </div>
          <div className="chats">
            <div className="chat-avatar">
              <ImageWithBasePath src="assets/img/avatar/avatar-2.jpg" className="rounded-circle dreams_chat" alt="image" />
            </div>
            <div className="chat-content">
              <div className="chat-profile-name">
                <h6>Mark Villiams<span>8:16 PM</span></h6>
                <div className="chat-action-btns ms-3">
                  <div className="chat-action-col">
                    <Link className="#" to="#" data-bs-toggle="dropdown">
                      <i className="bx bx-dots-horizontal-rounded" />
                    </Link>
                    <div className="dropdown-menu chat-drop-menu dropdown-menu-end">
                      <Link to="#" className="dropdown-item" data-bs-toggle="modal" data-bs-target="#clear-call"><span><i className="bx bx-trash" /></span>Delete</Link>
                    </div>
                  </div>
                </div>
              </div>
              <div className="message-content">
                <span className="missed-call-chat"><i className="bx bx-phone-off me-1" />Missed Call</span> 10 mins 25 secs
              </div>
            </div>
          </div>
          <div className="chats chats-right">
            <div className="chat-content">
              <div className="chat-profile-name text-end">
                <h6>Alex Smith<span>8:16 PM</span></h6>
                <div className="chat-action-btns ms-3">
                  <div className="chat-action-col">
                    <Link className="#" to="#" data-bs-toggle="dropdown">
                      <i className="bx bx-dots-horizontal-rounded" />
                    </Link>
                    <div className="dropdown-menu chat-drop-menu dropdown-menu-end">
                      <Link to="#" className="dropdown-item" data-bs-toggle="modal" data-bs-target="#clear-call"><span><i className="bx bx-trash" /></span>Delete</Link>
                    </div>
                  </div>
                </div>
              </div>
              <div className="message-content ">
                <span className="outgoing-call"><i className="bx bx-phone-outgoing me-1" />Outgoing Call</span> 10 mins 25 secs
              </div>
            </div>
            <div className="chat-avatar">
              <ImageWithBasePath src="assets/img/avatar/avatar-10.jpg" className="rounded-circle dreams_chat" alt="image" />
            </div>
          </div>
          <div className="chat-line">
            <span className="chat-date">Yesterday</span>
          </div>
          <div className="chats">
            <div className="chat-avatar">
              <ImageWithBasePath src="assets/img/avatar/avatar-2.jpg" className="rounded-circle dreams_chat" alt="image" />
            </div>
            <div className="chat-content">
              <div className="chat-profile-name">
                <h6>Mark Villiams<span>8:16 PM</span></h6>
                <div className="chat-action-btns ms-3">
                  <div className="chat-action-col">
                    <Link className="#" to="#" data-bs-toggle="dropdown">
                      <i className="bx bx-dots-horizontal-rounded" />
                    </Link>
                    <div className="dropdown-menu chat-drop-menu dropdown-menu-end">
                      <Link to="#" className="dropdown-item" data-bs-toggle="modal" data-bs-target="#clear-call"><span><i className="bx bx-trash" /></span>Delete</Link>
                    </div>
                  </div>
                </div>
              </div>
              <div className="message-content">
                <span className="missed-call-chat"><i className="bx bx-phone-off me-1" />Missed Call</span> 10 mins 25 secs
              </div>
            </div>
          </div>
          <div className="chats chats-right">
            <div className="chat-content">
              <div className="chat-profile-name text-end">
                <h6>Alex Smith<span>8:16 PM</span></h6>
                <div className="chat-action-btns ms-3">
                  <div className="chat-action-col">
                    <Link className="#" to="#" data-bs-toggle="dropdown">
                      <i className="bx bx-dots-horizontal-rounded" />
                    </Link>
                    <div className="dropdown-menu chat-drop-menu dropdown-menu-end">
                      <Link to="#" className="dropdown-item" data-bs-toggle="modal" data-bs-target="#clear-call"><span><i className="bx bx-trash" /></span>Delete</Link>
                    </div>
                  </div>
                </div>
              </div>
              <div className="message-content ">
                <span className="outgoing-call"><i className="bx bx-phone-outgoing me-1" />Outgoing Call</span> 10 mins 25 secs
              </div>
            </div>
            <div className="chat-avatar">
              <ImageWithBasePath src="assets/img/avatar/avatar-10.jpg" className="rounded-circle dreams_chat" alt="image" />
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
              <Link className="action-circle" to="#" data-bs-toggle="dropdown">
                <i className="bx bx-dots-horizontal-rounded" />
              </Link>
              <div className="dropdown-menu dropdown-menu-end">
                <Link to="#" className="dropdown-item "><span><i className="bx bx-file" /></span>Document</Link>
                <Link to="#" className="dropdown-item"><span><i className="bx bx-camera" /></span>Camera</Link>
                <Link to="#" className="dropdown-item"><span><i className="bx bx-image" /></span>Gallery</Link>
                <Link to="#" className="dropdown-item"><span><i className="bx bx-volume-full" /></span>Audio</Link>
                <Link to="#" className="dropdown-item"><span><i className="bx bx-map" /></span>Location</Link>
                <Link to="#" className="dropdown-item"><span><i className="bx bx-user-pin" /></span>Contact</Link>
              </div>
            </div>
          </div>
        </div>
        <div className="smile-foot emoj-action-foot">
          <Link to="#" className="action-circle"><i className="bx bx-smile" /></Link>
          <div className="emoj-group-list-foot down-emoji-circle">
            <ul>
              <li><Link to="#"><ImageWithBasePath src="assets/img/icon/emoj-icon-01.svg" alt="Icon" /></Link></li>
              <li><Link to="#"><ImageWithBasePath src="assets/img/icon/emoj-icon-02.svg" alt="Icon" /></Link></li>
              <li><Link to="#"><ImageWithBasePath src="assets/img/icon/emoj-icon-03.svg" alt="Icon" /></Link></li>
              <li><Link to="#"><ImageWithBasePath src="assets/img/icon/emoj-icon-04.svg" alt="Icon" /></Link></li>
              <li><Link to="#"><ImageWithBasePath src="assets/img/icon/emoj-icon-05.svg" alt="Icon" /></Link></li>
              <li className="add-emoj"><Link to="#"><i className="feather-plus" /></Link></li>
            </ul>
          </div>
        </div>
        <div className="smile-foot">
          <Link to="#" className="action-circle"><i className="bx bx-microphone-off" /></Link>
        </div>
        <input type="text" className="form-control chat_form" placeholder="Type your message here..." />
        <div className="form-buttons">
          <button className="btn send-btn" type="submit">
            <i className="bx bx-paper-plane" />
          </button>
        </div>
      </form>
    </div>
  </div>
  {/* /Chat */}

  <CallModal/>
  
</div> 

   
  )
}

export default Call