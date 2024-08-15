import React, { useState } from 'react'

import Sidebar from '../../core/common/sidebar.tsx'
import Scrollbars from 'react-custom-scrollbars-2'
import { Link } from 'react-router-dom';

const CallGrid = () => {

    const [mute, setMute] = useState(false);
    const [videoCall, setVideoCall] = useState(false);

  return (
   <div className="content main_content">
  {/* Left Sidebar Menu */}
   <Sidebar/>
  {/* /Left Sidebar Menu */}
  {/* Chat */}
  <Scrollbars>
  <div className="join-grid">
    
    <div className="slimscroll">
      <div className="meeting-list">
        <div className="recession-meet-blk">
          <div className="reccession-head">
            <h5>UI UX Designer</h5>
            <ul className="nav">
              <li>April 12th, 2023 | 11:00 AM </li>
              <li className="recording-time">Recording 26:32</li>
            </ul>
          </div>
          <div className="partispant-blk">
            <Link to="#" className="btn btn-primary "><i className="feather-plus me-1" />Add Participant</Link>
          </div>
        </div>
        {/* Grid View */}
        <div className="join-contents grid-view fade-whiteboard ">						
          <div className="join-video user-active single-user grid-join">
            <img src="assets/img/users/user-01.jpg" className="img-fluid" alt="Logo" />
            <div className={videoCall ? "video-avatar active" : "video-avatar"}>
              <div className="text-avatar">
                <div className="text-box">
                  S
                </div>
              </div>
            </div>
            <div className="part-name">								
              <h4><i className="feather-user me-1" />Jessie</h4>
            </div>									
            <div className={mute ? "more-icon mic-view" : "more-icon"}>	
              <Link to="#" className="handraise-on">
                <i className="fas fa-hand-paper" />
              </Link>
              <Link to="#" className="mic-off">
                <i className="feather-mic-off" />
              </Link>
            </div>
          </div>
          <div className="join-video single-user">
            <img src="assets/img/users/user-02.jpg" className="img-fluid" alt="Logo" />
            <div className="part-name">								
              <h4><i className="feather-user me-1" />Barbara Moore</h4>
            </div>									
            <div className="more-icon">	
              <Link to="#">
                <i className="feather-mic-off" />
              </Link>
            </div>
          </div>
          <div className="join-video single-user">
            <img src="assets/img/users/user-04.jpg" className="img-fluid" alt="Logo" />
            <div className="part-name">								
              <h4><i className="feather-user me-1" />Crystal Sprague</h4>
            </div>									
            <div className="more-icon">	
              <Link to="#">
                <i className="feather-mic-off" />
              </Link>
            </div>
          </div>
          <div className="join-video single-user">
            <img src="assets/img/users/user-05.jpg" className="img-fluid" alt="Logo" />
            <div className="part-name">								
              <h4><i className="feather-user me-1" />Charlene</h4>
            </div>									
            <div className="more-icon">	
              <Link to="#">
                <i className="feather-mic-off" />
              </Link>
            </div>
          </div>
          <div className="join-video single-user">
            <img src="assets/img/users/user-06.jpg" className="img-fluid" alt="Logo" />
            <div className="part-name">								
              <h4><i className="feather-user me-1" />Richard</h4>
            </div>
            <div className="more-icon">	
              <Link to="#">
                <i className="feather-mic-off" />
              </Link>
            </div>
          </div>
          <div className="join-video single-user">
            <img src="assets/img/users/user-01.jpg" className="img-fluid" alt="Logo" />
            <div className="part-name">								
              <h4><i className="feather-user me-1" />Deanna Faust</h4>
            </div>									
            <div className="more-icon">	
              <Link to="#">
                <i className="feather-mic-off" />
              </Link>
            </div>
          </div>
        </div>
        <div className="video-call-action video-grid action-calls">
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
          <ul>
            <li><Link to="#" id="call-chat"><i className="feather-message-square" data-feather="message-square" /></Link></li>
          </ul>
        </div>
        {/* /Grid View */}
      </div>
    </div>
   
  </div>
  </Scrollbars>
</div>

  )
}

export default CallGrid