import React from 'react'
import ImageWithBasePath from '../img/ImageWithBasePath.tsx'
import { Link } from 'react-router-dom'
import AVATAR4 from '../../../../../../react/template/assets/img/avatar/avatar-4.jpg'
// import ContactSelection from '../../../feature-module/chat/ContactSelection.jsx';
const HomeModals = () => {
    
  return (
   
<div>
  {/* New Chat */}
  <div className="modal fade " id="new-chat">
    <div className="modal-dialog modal-dialog-centered">
      <div className="modal-content">
        <div className="modal-header">
          <h5 className="modal-title">
            New Chat 
          </h5>
          <button type="button" className="close" data-bs-dismiss="modal" aria-label="Close">
            <span className="material-icons">close</span>
          </button>
        </div>
        <div className="modal-body">
          <form action="#">
            <div className="user-block-group mb-4">
              <div className="search_chat has-search">
                <span className="fas fa-search form-control-feedback" />
                <input className="form-control chat_input" id="search-contacted" type="text" placeholder="Search" />
              </div>
              <h5>Contacts</h5>
              <div className="sidebar sroll-side-view">
                <div className="d-flex justify-content-between align-items-center ps-0 pe-0">
                  <div className="fav-title contact-title">
                    <h6>A</h6>
                  </div>
                </div>
                <ul className="user-list">
                  <li className="user-list-item">
                    <div className="list-user-blk">
                      <div className="avatar">
                        <ImageWithBasePath src="/assets/img/avatar/avatar-4.jpg" className="rounded-circle" alt="image12" />
                      </div>
                      <div className="users-list-body">
                        <div>
                          <h5>Alexander Manuel</h5>
                          <p>Active 4Min Ago</p>
                        </div>    
                      </div>
                      <div className="notify-check parti-notify-radio">
                        <div className="form-check d-flex align-items-center justify-content-start ps-0">
                          <label className="group-type-radio">
                            <input type="radio" name="radio" />
                            <span className="checkmark" />
                          </label>                                
                        </div>
                      </div>                                          
                    </div>                                        
                  </li>
                  <li className="user-list-item">
                    <div className="list-user-blk">
                      <div className="avatar">
                        <ImageWithBasePath src="/assets/img/avatar/avatar-5.jpg" className="rounded-circle" alt="image" />
                      </div>
                      <div className="users-list-body">
                        <div>
                          <h5>Annette Theriot</h5>
                          <p>Online</p>
                        </div>    
                      </div>
                      <div className="notify-check parti-notify-radio">
                        <div className="form-check d-flex align-items-center justify-content-start ps-0">
                          <label className="group-type-radio">
                            <input type="radio" name="radio" />
                            <span className="checkmark" />
                          </label>                                
                        </div>
                      </div>                                          
                    </div>                                        
                  </li>
                </ul>
                <div className="d-flex justify-content-between align-items-center ps-0 pe-0">
                  <div className="fav-title contact-title">
                    <h6>B</h6>
                  </div>
                </div>
                <ul className="user-list">
                  <li className="user-list-item">
                    <div className="list-user-blk">
                      <div className="avatar">
                        <ImageWithBasePath src="/assets/img/avatar/avatar-10.jpg" className="rounded-circle" alt="image" />
                      </div>
                      <div className="users-list-body">
                        <div>
                          <h5>Bacon Mark</h5>
                          <p>Active 8Min Ago</p>
                        </div>    
                      </div>
                      <div className="notify-check parti-notify-radio">
                        <div className="form-check d-flex align-items-center justify-content-start ps-0">
                          <label className="group-type-radio">
                            <input type="radio" name="radio" />
                            <span className="checkmark" />
                          </label>                                
                        </div>
                      </div>                                          
                    </div>                                        
                  </li>
                  <li className="user-list-item">
                    <div className="list-user-blk">
                      <div className="avatar">
                        <ImageWithBasePath src="/assets/img/avatar/avatar-12.jpg" className="rounded-circle" alt="image" />
                      </div>
                      <div className="users-list-body">
                        <div>
                          <h5>Bennett Gerard</h5>
                          <p>Last Seen Today at 12:35 AM</p>
                        </div>    
                      </div>
                      <div className="notify-check parti-notify-radio">
                        <div className="form-check d-flex align-items-center justify-content-start ps-0">
                          <label className="group-type-radio">
                            <input type="radio" name="radio" />
                            <span className="checkmark" />
                          </label>                                
                        </div>
                      </div>                                          
                    </div>                                        
                  </li>
                </ul>
              </div>
            </div>
            <div className="mute-chat-btn">                            
              <Link to="#" className="btn btn-secondary" data-bs-dismiss="modal" aria-label="Close">
                <i className="feather-x me-1" />Cancel
              </Link>
              <Link to="#" className="btn btn-primary" data-bs-dismiss="modal" aria-label="Close">
                <ImageWithBasePath src="/assets/img/icon/send.svg" className="me-1" alt="image" />Chat
              </Link>
            </div>
          </form>
        </div>       
      </div>
    </div>
  </div>
  {/* /New Chat */}
  {/* New Group */}

  {/* /New Group */}
  {/* New Chat */}
  <div className="modal fade " id="Success-group">
    <div className="modal-dialog modal-dialog-centered">
      <div className="modal-content success-group-wrap-list">
        <div className="modal-header">
          <div className="success-pass mx-auto">
            <ImageWithBasePath src="/assets/img/avatar/avatar-16.png" alt="Success" className="img-fluid" />
          </div>
        </div>
        <div className="modal-body">
          <div className="success-header">
            <h4>Success</h4>
            <p>Group Created Successfully</p>
          </div>
          <a className="btn btn-primary" data-bs-dismiss="modal" aria-label="Close">
            Ok
          </a>
        </div>       
      </div>
    </div>
  </div>
  {/* /New Chat */}
  {/* Invite */}
  <div className="modal fade " id="invite-other">
    <div className="modal-dialog modal-dialog-centered">
      <div className="modal-content">
        <div className="modal-header">
          <h5 className="modal-title">
            Invite Friends
          </h5>
          <button type="button" className="close" data-bs-dismiss="modal" aria-label="Close">
            <span className="material-icons">close</span>
          </button>
        </div>
        <div className="modal-body">
          <form action="#">
            <div className="user-profiles-group mb-4">
              <div className="pass-login">
                <label className="form-label">Email Address or Phone Number</label>
                <input type="password" className="form-control pass-input" />
              </div>
              <div className="pass-login">
                <label className="form-label">Invitation Message </label>
                <textarea className="form-control " defaultValue={""} />
              </div>
            </div>
            <div className="mute-chat-btn">                            
              <Link to="#" className="btn btn-secondary" data-bs-dismiss="modal" aria-label="Close">
                <i className="feather-x me-1" />Cancel
              </Link>
              <Link to="#" className="btn btn-primary" data-bs-dismiss="modal" aria-label="Close">
                <i className="bx bx-send me-1" />Send Invitation
              </Link>
            </div>
          </form>
        </div>       
      </div>
    </div>
  </div>
  {/* /Invite */}
  {/* Mute */}
  <div className="modal fade mute-notify" id="mute-notification">
    <div className="modal-dialog modal-dialog-centered">
      <div className="modal-content">
        <div className="modal-header">
          <h5 className="modal-title">
            Mute Notifications
          </h5>
          <button type="button" className="close" data-bs-dismiss="modal" aria-label="Close">
            <span className="material-icons">close</span>
          </button>
        </div>
        <div className="modal-body">
          <form action="#">
            <div className="notify-check">
              <div className="form-check d-flex align-items-center justify-content-start ps-0">
                <label className="group-type-radio">30 Minutes
                  <input type="radio" name="radio" />
                  <span className="checkmark" />
                </label>                                
              </div>
              <div className="form-check d-flex align-items-center justify-content-start ps-0">
                <label className="group-type-radio">1 Hour
                  <input type="radio" name="radio" />
                  <span className="checkmark" />
                </label> 
              </div>
              <div className="form-check d-flex align-items-center justify-content-start ps-0">
                <label className="group-type-radio">1 Day
                  <input type="radio" name="radio" />
                  <span className="checkmark" />
                </label> 
              </div>
              <div className="form-check d-flex align-items-center justify-content-start ps-0">
                <label className="group-type-radio">1 Week
                  <input type="radio" name="radio" />
                  <span className="checkmark" />
                </label> 
              </div>
              <div className="form-check d-flex align-items-center justify-content-start ps-0">
                <label className="group-type-radio">1 Month
                  <input type="radio" name="radio" />
                  <span className="checkmark" />
                </label> 
              </div>
              <div className="form-check d-flex align-items-center justify-content-start ps-0">
                <label className="group-type-radio">1 Year
                  <input type="radio" name="radio" />
                  <span className="checkmark" />
                </label> 
              </div>
              <div className="form-check d-flex align-items-center justify-content-start ps-0">
                <label className="group-type-radio">Always
                  <input type="radio" name="radio" />
                  <span className="checkmark" />
                </label> 
              </div>
            </div>
            <div className="mute-chat-btn">                            
              <Link to="#" className="btn btn-secondary" data-bs-dismiss="modal" aria-label="Close">
                Cancel
              </Link>
              <Link to="#" className="btn btn-primary" data-bs-dismiss="modal" aria-label="Close">
                Mute
              </Link>
            </div>
          </form>
        </div>       
      </div>
    </div>
  </div>
  {/* /Mute */}
  {/* Deleting a Chat */}
  <div className="modal fade" id="change-chat">
    <div className="modal-dialog modal-dialog-centered">
      <div className="modal-content">
        <div className="modal-header">
          <h5 className="modal-title">
            Delete Chat
          </h5>
          <button type="button" className="close" data-bs-dismiss="modal" aria-label="Close">
            <span className="material-icons">close</span>
          </button>
        </div>
        <div className="modal-body">
          <div className="block-user-blk text-center">
            <i className="bx bx-trash change-color " />
            <p>Clearing or deleting entire chats will only remove messages from this device and your devices on the newer versions of DreamsChat.</p>
          </div>
          <div className="mute-chat-btn justify-content-center">                            
            <a className="btn btn-secondary" data-bs-dismiss="modal" aria-label="Close">
              Cancel
            </a>
            <a className="btn btn-primary" data-bs-dismiss="modal" aria-label="Close">
              Delete
            </a>
          </div>
        </div>       
      </div>
    </div>
  </div>
  {/* /Deleting a Chat */}
</div>

  )
}

export default HomeModals