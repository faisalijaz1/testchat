import React, { useState } from 'react'
import ImageWithBasePath from '../../core/data/img/ImageWithBasePath'
import { Link } from 'react-router-dom'
import Sidebar from '../../core/common/sidebar';
import Scrollbars from 'react-custom-scrollbars-2';
import { all_routes } from '../router/all_routes';

const VideoCall = () => {

    const routes = all_routes;

    const [mute, setMute] = useState(false);
    const [videoCall, setVideoCall] = useState(false);
    const [message, setMessage] = useState(false);


    

  return (
    

  <div className="content main_content">
  {/* Left Sidebar Menu */}
        <Sidebar/>
  {/* /Left Sidebar Menu */}
  {/* Chat */}
  <div className="chat video-screen" id="middle">
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
            Last Seen at 07:15 PM
          </small>
        </div>
      </div>
      <div className="chat-options chat-contact-list">
        <ul className="list-inline">
          <li className="list-inline-item">
            <Link className="btn btn-outline-light" to="#" data-bs-toggle="dropdown">
              <i className="bx bx-dots-vertical-rounded" />
            </Link>
            <div className="dropdown-menu dropdown-menu-end">
              <Link to={routes.contact} className="dropdown-item "><span><i className="bx bx-user-pin" /></span>View Contact </Link>
            </div>
          </li>
        </ul>
      </div>
      {/* Chat Search */}
      <div className="chat-search">
        <form>
          <span className="form-control-feedback"><i className="bx bx-search" /></span>
          <input type="text" name="chat-search" placeholder="Search Chats" className="form-control" />
          <div className="close-btn-chat"><span className="material-icons">close</span></div>
        </form>
      </div>
      {/* /Chat Search */}
    </div>
    <div className="chat-body pt-4 pb-0">
      <div className="video-screen-inner">
        <div className="call-user-avatar">
          <div className="avatar-col">
            <ImageWithBasePath src="assets/img/avatar/avatar-8.jpg"  alt="img" />
          </div>
        </div>
        <div className="record-time">
          <span>40:12</span>
        </div>
        <div className="added-call-chat">
          <ul className="nav">
            <li>
              <div className="chat-user-time">
                <span className="chats-dot" data-bs-toggle="dropdown">
                  <Link to="#" className="added-call-front"><i className="bx bx-dots-vertical-rounded" /></Link>
                </span>
                <div className="dropdown-menu dropdown-menu-end">
                  <Link className="dropdown-item" to={routes.settings}><i className="feather-settings me-2" /> Settings</Link>
                  <Link className="dropdown-item d-flex align-items-center" to="#" data-bs-toggle="modal" data-bs-target="#setting-logout"><i className="feather-lock me-2" /> Logout </Link>
                </div>
              </div>
            </li>
          </ul>
        </div>
        <div className="added-call-chat fullscreen">
          <ul className="nav">
            <li><Link to="#" className="win-maximize added-call-front"><i className="feather-maximize" /></Link></li>
          </ul>
        </div>
        <div className="video-call-action action-calls">
          <ul>
            <li onClick={()=>setMessage(!message)}><Link to="#" id="call-chat" className="dream_profile_menu"><i className="bx bx-message-square-dots" data-feather="message-square" /></Link></li>
          </ul>
          <ul className="center-action">
            <li  onClick={()=>setMute(!mute)}>
              <Link  to="#"  className={mute ? "mute-bt stop" : "mute-bt "}>
              <i className={mute ? "feather-mic-off" : "feather-mic"} />

              </Link>
            </li>
          

            <li onClick={()=>setVideoCall(!videoCall)}>
              <Link  to="#" className={videoCall ? "mute-video stop" : "mute-video"} >
                <i className={videoCall ? "feather-video-off" : "feather-video"} />
              </Link>
            </li>
            <li><Link to="#" className="call-end"><i className="feather-phone-off" /></Link></li>
            <li><Link to="#"><i className="far fa-smile" /></Link></li>
            <li><Link to="#"><i className="feather-disc" /></Link></li>
          </ul>
        </div>
        <div className={videoCall ? "video-avatar active" : "video-avatar " }><h4>Camera is off</h4></div>
      </div>
    </div>
  </div>
  {/* /Chat */}
  {/* Right sidebar */}
  <div className={message ? "right-sidebar right_sidebar_profile video-right-sidebar show-right-sidebar" :"right-sidebar right_sidebar_profile video-right-sidebar hide-right-sidebar" } id="middle1">
    <div className="chat video-call-chat p-0">
      <div className="right-sidebar-wrap active">
      <Scrollbars>
        <div className="slimscroll">
          <div className="left-chat-title d-flex justify-content-between align-items-center p-3 with-bg">
            <div className="chat-title">
              <h4>Chat</h4>
              <span>Mark Villliams Typing</span>
            </div>
            <div className="contact-close_call text-end">
              <Link to="#" className="close_profile close_profile4" onClick={()=>setMessage(!message)}>
                <span className="material-icons">close</span>
              </Link>
            </div>
          </div>
          <div className="chat-body pt-3">
            <div className="messages">
              <div className="chats">
                <div className="chat-avatar">
                  <ImageWithBasePath src="assets/img/avatar/avatar-2.jpg" className="rounded-circle dreams_chat" alt="image" />
                </div>
                <div className="chat-content">
                  <div className="chat-profile-name">
                    <h6>Mark Villiams<span>8:16 PM</span></h6>
                    <div className="chat-action-btns ms-1">
                      <div className="chat-action-col">
                        <Link className="#" to="#" data-bs-toggle="dropdown">
                          <i className="bx bx-dots-horizontal-rounded" />
                        </Link>
                        <div className="dropdown-menu chat-drop-menu dropdown-menu-end">
                          <Link to="#" className="dropdown-item "><span><i className="bx bx-info-circle" /></span>Message Info </Link>
                          <Link to="#" className="dropdown-item"><span><i className="bx bx-share" /></span>Reply</Link>
                          <Link to="#" className="dropdown-item"><span><i className="bx bx-smile" /></span>React</Link>
                          <Link to="#" className="dropdown-item" data-bs-toggle="modal" data-bs-target="#forward-message"><span><i className="bx bx-reply" /></span>Forward</Link>
                          <Link to="#" className="dropdown-item"><span><i className="bx bx-star" /></span>Star Message</Link>
                          <Link to="#" className="dropdown-item"><span><i className="bx bx-dislike" /></span>Report</Link>
                          <Link to="#" className="dropdown-item"><span><i className="bx bx-trash" /></span>Delete</Link>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="message-content">
                    Hi Good Morning
                  </div>
                </div>
              </div>
              <div className="chats chats-right">
                <div className="chat-content">
                  <div className="chat-profile-name text-end">
                    <h6>Alex Smith<span>8:16 PM</span></h6>
                    <div className="chat-action-btns ms-1">
                      <div className="chat-action-col">
                        <Link className="#" to="#" data-bs-toggle="dropdown">
                          <i className="bx bx-dots-horizontal-rounded" />
                        </Link>
                        <div className="dropdown-menu chat-drop-menu dropdown-menu-end">
                          <Link to="#" className="dropdown-item "><span><i className="bx bx-info-circle" /></span>Message Info </Link>
                          <Link to="#" className="dropdown-item"><span><i className="bx bx-share" /></span>Reply</Link>
                          <Link to="#" className="dropdown-item"><span><i className="bx bx-smile" /></span>React</Link>
                          <Link to="#" className="dropdown-item" data-bs-toggle="modal" data-bs-target="#forward-message"><span><i className="bx bx-reply" /></span>Forward</Link>
                          <Link to="#" className="dropdown-item"><span><i className="bx bx-star" /></span>Star Message</Link>
                          <Link to="#" className="dropdown-item"><span><i className="bx bx-dislike" /></span>Report</Link>
                          <Link to="#" className="dropdown-item"><span><i className="bx bx-trash" /></span>Delete</Link>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="message-content ">
                    Good Morning
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
                    <div className="chat-action-btns ms-1">
                      <div className="chat-action-col">
                        <Link className="#" to="#" data-bs-toggle="dropdown">
                          <i className="bx bx-dots-horizontal-rounded" />
                        </Link>
                        <div className="dropdown-menu chat-drop-menu dropdown-menu-end">
                          <Link to="#" className="dropdown-item "><span><i className="bx bx-info-circle" /></span>Message Info </Link>
                          <Link to="#" className="dropdown-item"><span><i className="bx bx-share" /></span>Reply</Link>
                          <Link to="#" className="dropdown-item"><span><i className="bx bx-smile" /></span>React</Link>
                          <Link to="#" className="dropdown-item" data-bs-toggle="modal" data-bs-target="#forward-message"><span><i className="bx bx-reply" /></span>Forward</Link>
                          <Link to="#" className="dropdown-item"><span><i className="bx bx-star" /></span>Star Message</Link>
                          <Link to="#" className="dropdown-item"><span><i className="bx bx-dislike" /></span>Report</Link>
                          <Link to="#" className="dropdown-item"><span><i className="bx bx-trash" /></span>Delete</Link>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="message-content">
                    How are you? 
                  </div>
                </div>
              </div>
              <div className="chats chats-right">
                <div className="chat-content">
                  <div className="chat-profile-name text-end">
                    <h6>Alex Smith<span>8:16 PM</span></h6>
                    <div className="chat-action-btns ms-1">
                      <div className="chat-action-col">
                        <Link className="#" to="#" data-bs-toggle="dropdown">
                          <i className="bx bx-dots-horizontal-rounded" />
                        </Link>
                        <div className="dropdown-menu chat-drop-menu dropdown-menu-end">
                          <Link to="#" className="dropdown-item "><span><i className="bx bx-info-circle" /></span>Message Info </Link>
                          <Link to="#" className="dropdown-item"><span><i className="bx bx-share" /></span>Reply</Link>
                          <Link to="#" className="dropdown-item"><span><i className="bx bx-smile" /></span>React</Link>
                          <Link to="#" className="dropdown-item" data-bs-toggle="modal" data-bs-target="#forward-message"><span><i className="bx bx-reply" /></span>Forward</Link>
                          <Link to="#" className="dropdown-item"><span><i className="bx bx-star" /></span>Star Message</Link>
                          <Link to="#" className="dropdown-item"><span><i className="bx bx-dislike" /></span>Report</Link>
                          <Link to="#" className="dropdown-item"><span><i className="bx bx-trash" /></span>Delete</Link>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="message-content ">
                    Yeah Fine
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
                    <div className="chat-action-btns ms-1">
                      <div className="chat-action-col">
                        <Link className="#" to="#" data-bs-toggle="dropdown">
                          <i className="bx bx-dots-horizontal-rounded" />
                        </Link>
                        <div className="dropdown-menu chat-drop-menu dropdown-menu-end">
                          <Link to="#" className="dropdown-item "><span><i className="bx bx-info-circle" /></span>Message Info </Link>
                          <Link to="#" className="dropdown-item"><span><i className="bx bx-share" /></span>Reply</Link>
                          <Link to="#" className="dropdown-item"><span><i className="bx bx-smile" /></span>React</Link>
                          <Link to="#" className="dropdown-item" data-bs-toggle="modal" data-bs-target="#forward-message"><span><i className="bx bx-reply" /></span>Forward</Link>
                          <Link to="#" className="dropdown-item"><span><i className="bx bx-star" /></span>Star Message</Link>
                          <Link to="#" className="dropdown-item"><span><i className="bx bx-dislike" /></span>Report</Link>
                          <Link to="#" className="dropdown-item"><span><i className="bx bx-trash" /></span>Delete</Link>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="message-content">
                    What about our next meeting?
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        </Scrollbars>
      </div>
    </div>
  </div>
  {/* Right sidebar */}
</div>



  )
}

export default VideoCall