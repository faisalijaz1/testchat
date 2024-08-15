import React, { useState } from 'react'
import Sidebar from '../../core/common/sidebar.tsx'
import ImageWithBasePath from '../../core/data/img/ImageWithBasePath.tsx'
import { Link } from 'react-router-dom'
import { all_routes } from '../router/all_routes.tsx'

const AudioCall = () => {

    const routes =all_routes;

    const [mute, setMute] = useState(true);
    const [videoCall, setVideoCall] = useState(true);

    console.log(mute,"mute")
    console.log(videoCall,"videoCall")

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
            +91 9988776655
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
    </div>
    <div className="chat-body pt-4 pb-0">
      <div className="video-screen-inner audio-screen-inner">
        <div className="more-icon">
          <Link to="#" className="mic-off">
            <i className="feather-mic-off" />
          </Link>
        </div>
        <div className="audio-call-group">
          <div>
            <figure className="avatar">
              <ImageWithBasePath src="assets/img/avatar/avatar-2.jpg" className="rounded-circle" alt="image" />
            </figure>
            <h6>Mark Villiams</h6>
            <span>00:25</span>
          </div>
        </div>
        <div className="video-call-action action-calls">
          <ul className="center-action">
            <li>
              <Link onClick={()=>setMute(!mute)} className={mute ? "mute-bt stop" : "mute-bt "} to="#">
                <i className={mute ? "feather-mic-off" : "feather-mic"} />
              </Link>
            </li>
            <li><Link to="#" className="call-end"><i className="feather-phone-off" /></Link></li>
            <li onClick={()=>setVideoCall(!videoCall)}>
              <Link  to="#" className={videoCall ? "mute-video stop" : "mute-video"} >
                <i className={videoCall ? "feather-video-off" : "feather-video"} />
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
  {/* /Chat */}
</div>



  )
}

export default AudioCall