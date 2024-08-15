import React from 'react'
import ImageWithBasePath from '../data/img/ImageWithBasePath.tsx'
import { Link } from 'react-router-dom'
import { all_routes } from '../../feature-module/router/all_routes.tsx'

const CallModal = () => {
  const routes = all_routes;
  return (
    
  <div>
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
              <button type="submit" className="btn btn-secondary" data-bs-dismiss="modal" aria-label="Close">
                Cancel
              </button>
              <button type="submit" className="btn btn-primary" data-bs-dismiss="modal" aria-label="Close">
                Mute
              </button>
            </div>
          </form>
        </div>       
      </div>
    </div>
  </div>
  {/* /Mute */}
  {/* Report */}
  <div className="modal fade" id="report-user">
    <div className="modal-dialog modal-dialog-centered">
      <div className="modal-content">
        <div className="modal-header">
          <h5 className="modal-title">
            Report Mark Villiams
          </h5>
          <button type="button" className="close" data-bs-dismiss="modal" aria-label="Close">
            <span className="material-icons">close</span>
          </button>
        </div>
        <div className="modal-body">
          <div className="block-user-blk text-center">
            <ImageWithBasePath src="assets/img/icon/report-01.svg" alt="icon" />
            <p>If you block this contact and clear the chat, messages will only be removed from this device and your devices on the newer versions of DreamsChat</p>
            <div className="notify-check">
              <div className="form-check d-flex align-items-center justify-content-center ps-0">
                <label className="custom-check mt-0 mb-0">
                  <span className="remember-me">Block contact and clear chat</span>
                  <input type="checkbox" name="remeber" />                                        
                  <span className="checkmark" />
                </label>
              </div>
            </div>
          </div>
          <div className="mute-chat-btn justify-content-center">                           
            <Link to="#" className="btn btn-secondary" data-bs-dismiss="modal" aria-label="Close">
              Cancel
            </Link>
            <Link to="#" className="btn btn-primary" data-bs-dismiss="modal" aria-label="Close">
              Report
            </Link>
          </div>
        </div>       
      </div>
    </div>
  </div>
  {/* /Report */}
  {/* Delete */}
  <div className="modal fade" id="delete-user">
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
            <ImageWithBasePath src="assets/img/icon/delete-chat-01.svg" alt="icon" />
            <p>Clearing or deleting entire chats will only remove messages from this device and your devices on the newer versions of DreamsChat.</p>
          </div>
          <div className="mute-chat-btn justify-content-center">
            <Link to="#"className="btn btn-secondary" data-bs-dismiss="modal" aria-label="Close">
              Cancel
            </Link>
            <Link to="#" className="btn btn-primary" data-bs-dismiss="modal" aria-label="Close">
              Continue
            </Link>
          </div>
        </div>       
      </div>
    </div>
  </div>
  {/* /Delete */}
  {/* Add Call */}
  <div className="modal fade " id="add-call">
    <div className="modal-dialog modal-dialog-centered">
      <div className="modal-content">
        <div className="modal-header">
          <h5 className="modal-title">
            Add Call
          </h5>
          <button type="button" className="close" data-bs-dismiss="modal" aria-label="Close">
            <span className="material-icons">close</span>
          </button>
        </div>
        <div className="modal-body">
          <div className="user-block-group mb-4">
            <div className="search_chat has-search">
              <span className="fas fa-search form-control-feedback" />
              <input className="form-control chat_input" id="search-contact" type="text" placeholder="Search" />
            </div>
            <h5>Contacts</h5>
            <div className="sidebar">
              <div className="d-flex justify-content-between align-items-center ps-0 pe-0">
                <div className="fav-title contact-title">
                  <h6>A</h6>
                </div>
              </div>
              <ul className="user-list">
                <li className="user-list-item">
                  <Link to="#">
                    <div className="avatar">
                      <ImageWithBasePath src="assets/img/avatar/avatar-4.jpg" className="rounded-circle" alt="image" />
                    </div>
                    <div className="users-list-body">
                      <div>
                        <h5>Alexander Manuel</h5>
                        <p>Active 4 mins ago</p>
                      </div>    
                    </div>
                    <div className="call-video d-flex align-items-center">
                      <span data-bs-toggle="modal" data-bs-target="#voice_call"><i className="bx bx-phone" /></span>
                      <span data-bs-toggle="modal" data-bs-target="#video_call"><i className="bx bx-video" /></span>
                    </div>
                  </Link>
                </li>
                <li className="user-list-item">
                  <Link to="#">
                    <div className="avatar">
                      <ImageWithBasePath src="assets/img/avatar/avatar-5.jpg" className="rounded-circle" alt="image" />
                    </div>
                    <div className="users-list-body">
                      <div>
                        <h5>Annette Theriot</h5>
                        <p>Online</p>
                      </div>    
                    </div>
                    <div className="call-video d-flex align-items-center">
                      <span data-bs-toggle="modal" data-bs-target="#voice_call"><i className="bx bx-phone" /></span>
                      <span data-bs-toggle="modal" data-bs-target="#video_call"><i className="bx bx-video" /></span>
                    </div>
                  </Link>
                </li>
              </ul>
              <div className="d-flex justify-content-between align-items-center ps-0 pe-0">
                <div className="fav-title contact-title">
                  <h6>B</h6>
                </div>
              </div>
              <ul className="user-list">
                <li className="user-list-item">
                  <Link to="#">
                    <div className="avatar">
                      <ImageWithBasePath src="assets/img/avatar/avatar-4.jpg" className="rounded-circle" alt="image" />
                    </div>
                    <div className="users-list-body">
                      <div>
                        <h5>Bacon Mark</h5>
                        <p>Active 8 min ago</p>
                      </div>    
                    </div>
                    <div className="call-video d-flex align-items-center">
                      <span data-bs-toggle="modal" data-bs-target="#voice_call"><i className="bx bx-phone" /></span>
                      <span data-bs-toggle="modal" data-bs-target="#video_call"><i className="bx bx-video" /></span>
                    </div>
                  </Link>
                </li>
                <li className="user-list-item ">
                  <Link to="#" className="mb-0">
                    <div className="avatar">
                      <ImageWithBasePath src="assets/img/avatar/avatar-5.jpg" className="rounded-circle" alt="image" />
                    </div>
                    <div className="users-list-body">
                      <div>
                        <h5>Bennett Gerard</h5>
                        <p>Last Seen Today at 12:35 AM</p>
                      </div>    
                    </div>
                    <div className="call-video d-flex align-items-center">
                      <span data-bs-toggle="modal" data-bs-target="#voice_call"><i className="bx bx-phone" /></span>
                      <span data-bs-toggle="modal" data-bs-target="#video_call"><i className="bx bx-video" /></span>
                    </div>
                  </Link>
                </li>
              </ul>
            </div>
          </div>                       
        </div>       
      </div>
    </div>
  </div>
  {/* /ADD Call */}
  {/* Disappearing Messages */}
  <div className="modal fade" id="disappearing-messages">
    <div className="modal-dialog modal-dialog-centered">
      <div className="modal-content">
        <div className="modal-header">
          <h5 className="modal-title">
            Disappearing messages
          </h5>
          <button type="button" className="close" data-bs-dismiss="modal" aria-label="Close">
            <span className="material-icons">close</span>
          </button>
        </div>
        <div className="modal-body">
          <form action="#">
            <div className="block-user-blk">
              <p>For more privacy and storage, all new messages will disappear from this chat for everyone after the selected duration, except when kept. Anyone in the chat can change this setting.</p>
              <div className="notify-check">
                <div className="form-check d-flex align-items-center justify-content-start ps-0">
                  <label className="custom-check mt-0 mb-0">
                    <span className="remember-me">24 Hours</span>
                    <input type="checkbox" name="remeber" />                                        
                    <span className="checkmark" />
                  </label>
                </div>
                <div className="form-check d-flex align-items-center justify-content-start ps-0">
                  <label className="custom-check mt-0 mb-0">
                    <span className="remember-me">7 Days</span>
                    <input type="checkbox" name="remeber" />                                        
                    <span className="checkmark" />
                  </label>
                </div>
                <div className="form-check d-flex align-items-center justify-content-start ps-0">
                  <label className="custom-check mt-0 mb-0">
                    <span className="remember-me">90 Days</span>
                    <input type="checkbox" name="remeber" />                                        
                    <span className="checkmark" />
                  </label>
                </div>
                <div className="form-check d-flex align-items-center justify-content-start ps-0">
                  <label className="custom-check mt-0 mb-0">
                    <span className="remember-me">Off</span>
                    <input type="checkbox" name="remeber" />                                        
                    <span className="checkmark" />
                  </label>
                </div>
              </div>
            </div>
            <div className="mute-chat-btn">                            
              <button type="submit" className="btn btn-secondary" data-bs-dismiss="modal" aria-label="Close">
                Cancel
              </button>
              <button type="submit" className="btn btn-primary" data-bs-dismiss="modal" aria-label="Close">
                Save
              </button>
            </div>
          </form>
        </div>       
      </div>
    </div>
  </div>
  {/* /Disappearing Messages */}
  {/* Deleting a Chat */}
  <div className="modal fade" id="change-chat">
    <div className="modal-dialog modal-dialog-centered">
      <div className="modal-content">
        <div className="modal-header">
          <h5 className="modal-title">
            Changes to Clearing or Deleting a Chat
          </h5>
          <button type="button" className="close" data-bs-dismiss="modal" aria-label="Close">
            <span className="material-icons">close</span>
          </button>
        </div>
        <div className="modal-body">
          <div className="block-user-blk text-center">
            <ImageWithBasePath src="assets/img/icon/delete-chat-01.svg" alt="icon" />
            <p>Clearing or deleting entire chats will only remove messages from this device and your devices on the newer versions of DreamsChat.</p>
          </div>
          <div className="mute-chat-btn justify-content-center">
            <Link to="#" className="btn btn-secondary" data-bs-dismiss="modal" aria-label="Close">
              Cancel
            </Link>
            <Link to="#" className="btn btn-primary" data-bs-dismiss="modal" aria-label="Close">
              Continue
            </Link>
          </div>
        </div>       
      </div>
    </div>
  </div>
  {/* /Deleting a Chat */}
  {/* Forward Message To */}
  <div className="modal fade " id="forward-message">
    <div className="modal-dialog modal-dialog-centered">
      <div className="modal-content">
        <div className="modal-header">
          <h5 className="modal-title">
            Forward Message To
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
                <input className="form-control chat_input" id="search-contact" type="text" placeholder="Search" />
              </div>
              <h5>Recent Chats</h5>
              <div className="recent-block-group">
                <div className="user-block-profile">
                  <div className="avatar">
                    <ImageWithBasePath src="assets/img/avatar/avatar-1.jpg" className="rounded-circle" alt="image" />
                  </div>
                  <div className="block-user-name">
                    <h6>Horace Keene</h6>
                    <span>Sleeping</span>
                  </div>
                </div>
                <div className="notify-check mb-0">
                  <div className="form-check d-flex align-items-center justify-content-start ps-0">
                    <label className="custom-check mt-0 mb-0">
                      <input type="checkbox" name="remeber" />                                        
                      <span className="checkmark" />
                    </label>
                  </div>
                </div>
              </div>
              <div className="recent-block-group">
                <div className="user-block-profile">
                  <div className="avatar">
                    <ImageWithBasePath src="assets/img/avatar/avatar-2.jpg" className="rounded-circle" alt="image" />
                  </div>
                  <div className="block-user-name">
                    <h6>Bacon Mark</h6>
                    <span>Available</span>
                  </div>
                </div>
                <div className="notify-check mb-0">
                  <div className="form-check d-flex align-items-center justify-content-start ps-0">
                    <label className="custom-check mt-0 mb-0">
                      <input type="checkbox" name="remeber" />                                        
                      <span className="checkmark" />
                    </label>
                  </div>
                </div>
              </div>
              <div className="recent-block-group">
                <div className="user-block-profile">
                  <div className="avatar">
                    <ImageWithBasePath src="assets/img/avatar/avatar-3.jpg" className="rounded-circle" alt="image" />
                  </div>
                  <div className="block-user-name">
                    <h6>Debra Jones</h6>
                    <span>At Work</span>
                  </div>
                </div>
                <div className="notify-check mb-0">
                  <div className="form-check d-flex align-items-center justify-content-start ps-0">
                    <label className="custom-check mt-0 mb-0">
                      <input type="checkbox" name="remeber" />                                        
                      <span className="checkmark" />
                    </label>
                  </div>
                </div>
              </div>
              <div className="recent-block-group mb-0">
                <div className="user-block-profile">
                  <div className="avatar">
                    <ImageWithBasePath src="assets/img/avatar/avatar-4.jpg" className="rounded-circle" alt="image" />
                  </div>
                  <div className="block-user-name">
                    <h6>Dina Brown</h6>
                    <span>Can’t Talk, WhatsApp only</span>
                  </div>
                </div>
                <div className="notify-check">
                  <div className="form-check d-flex align-items-center justify-content-start ps-0">
                    <label className="custom-check mt-0 mb-0">
                      <input type="checkbox" name="remeber" />                                        
                      <span className="checkmark" />
                    </label>
                  </div>
                </div>
              </div>
            </div>
            <div className="mute-chat-btn">                            
              <button type="submit" className="btn btn-secondary" data-bs-dismiss="modal" aria-label="Close">
                <i className="feather-x me-1" />Cancel
              </button>
              <button type="submit" className="btn btn-primary" data-bs-dismiss="modal" aria-label="Close">
                <ImageWithBasePath src="assets/img/icon/send.svg" className="me-1" alt="image" />Send
              </button>
            </div>
          </form>
        </div>       
      </div>
    </div>
  </div>
  {/* /Forward Message To */}
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
                        <ImageWithBasePath src="assets/img/avatar/avatar-4.jpg" className="rounded-circle" alt="image" />
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
                        <ImageWithBasePath src="assets/img/avatar/avatar-5.jpg" className="rounded-circle" alt="image" />
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
                        <ImageWithBasePath src="assets/img/avatar/avatar-10.jpg" className="rounded-circle" alt="image" />
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
                        <ImageWithBasePath src="assets/img/avatar/avatar-12.jpg" className="rounded-circle" alt="image" />
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
              <button type="submit" className="btn btn-secondary" data-bs-dismiss="modal" aria-label="Close">
                <i className="feather-x me-1" />Cancel
              </button>
              <button type="submit" className="btn btn-primary" data-bs-dismiss="modal" aria-label="Close">
                <ImageWithBasePath src="assets/img/icon/send.svg" className="me-1" alt="image" />Chat
              </button>
            </div>
          </form>
        </div>       
      </div>
    </div>
  </div>
  {/* /New Chat */}
  {/* New Group */}
  <div className="modal fade " id="new-group">
    <div className="modal-dialog modal-dialog-centered">
      <div className="modal-content">
        <div className="modal-header">
          <h5 className="modal-title">
            New Group
          </h5>
          <button type="button" className="close" data-bs-dismiss="modal" aria-label="Close">
            <span className="material-icons">close</span>
          </button>
        </div>
        <div className="modal-body">
          <form>
            <div className="new-group-add show-group-add">
              <div className="user-profiles-group mb-4">
                <div className="profile-cover text-center">
                  <label className="profile-cover-avatar" htmlFor="avatar_upload">
                    <ImageWithBasePath className="avatar-img" src="assets/img/avatar/avatar-2.jpg" alt="Profile Image" />
                    <input type="file" id="avatar_upload" />
                    <span className="avatar-edit">
                      <ImageWithBasePath src="assets/img/icon/camera.svg" alt="Image" />
                    </span>
                  </label>
                </div>
                <div className="pass-login">
                  <label className="form-label">Group Name </label>
                  <input type="password" className="form-control pass-input" />
                </div>
                <div className="pass-login">
                  <label className="form-label">Description </label>
                  <textarea className="form-control " defaultValue={""} />
                </div>
                <div className="pass-login">
                  <h4>Group Type</h4>
                  <div className="d-flex align-items-center">
                    <label className="group-type-radio">Public
                      <input type="radio" defaultChecked={true} name="radio" />
                      <span className="checkmark" />
                    </label>
                    <label className="group-type-radio">Private
                      <input type="radio" name="radio" />
                      <span className="checkmark" />
                    </label>
                  </div>                                    
                </div>
              </div>
              <div className="mute-chat-btn">
                <Link to="#" className="btn btn-secondary" data-bs-dismiss="modal" aria-label="Close">
                  <i className="feather-x me-1" />Cancel
                </Link>
                <Link to="#" className="btn btn-primary" id="next-parti">
                  <i className="feather-arrow-right me-1" />Next
                </Link>
              </div>
            </div>
            <div className="parti-group hash-participant">
              <div className="user-block-group mb-4">
                <div className="search_chat has-search group-name-search">
                  <span className="fas fa-search form-control-feedback" />
                  <input className="form-control chat_input" id="search-contact-one" type="text" placeholder="Search" />
                </div>
                <h5>Contacts</h5>
                <div className="sidebar">
                  <div className="d-flex justify-content-between align-items-center ps-0 pe-0">
                    <div className="fav-title contact-title">
                      <h6>A</h6>
                    </div>
                  </div>
                  <ul className="user-list">
                    <li className="user-list-item">
                      <div className="list-user-blk">
                        <div className="avatar">
                          <ImageWithBasePath src="assets/img/avatar/avatar-4.jpg" className="rounded-circle" alt="image" />
                        </div>
                        <div className="users-list-body">
                          <div>
                            <h5>Alexander Manuel</h5>
                            <p>Active 4Min Ago</p>
                          </div>    
                        </div>
                        <div className="notify-check parti-notify-check">
                          <div className="form-check d-flex align-items-center justify-content-start ps-0">
                            <label className="custom-check mt-0 mb-0">
                              <input type="checkbox" name="remeber" />                                        
                              <span className="checkmark" />
                            </label>
                          </div>
                        </div>                                          
                      </div>                                        
                    </li>
                    <li className="user-list-item">
                      <div className="list-user-blk">
                        <div className="avatar">
                          <ImageWithBasePath src="assets/img/avatar/avatar-5.jpg" className="rounded-circle" alt="image" />
                        </div>
                        <div className="users-list-body">
                          <div>
                            <h5>Annette Theriot</h5>
                            <p>Online</p>
                          </div>    
                        </div>
                        <div className="notify-check parti-notify-check">
                          <div className="form-check d-flex align-items-center justify-content-start ps-0">
                            <label className="custom-check mt-0 mb-0">
                              <input type="checkbox" name="remeber" />                                        
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
                          <ImageWithBasePath src="assets/img/avatar/avatar-4.jpg" className="rounded-circle" alt="image" />
                        </div>
                        <div className="users-list-body">
                          <div>
                            <h5>Bacon Mark</h5>
                            <p>Active 8Min Ago</p>
                          </div>    
                        </div>
                        <div className="notify-check parti-notify-check">
                          <div className="form-check d-flex align-items-center justify-content-start ps-0">
                            <label className="custom-check mt-0 mb-0">
                              <input type="checkbox" name="remeber" />                                        
                              <span className="checkmark" />
                            </label>
                          </div>
                        </div> 
                      </div>
                    </li>
                    <li className="user-list-item ">
                      <div className="list-user-blk mb-0">
                        <div className="avatar">
                          <ImageWithBasePath src="assets/img/avatar/avatar-5.jpg" className="rounded-circle" alt="image" />
                        </div>
                        <div className="users-list-body">
                          <div>
                            <h5>Bennett Gerard</h5>
                            <p>Last Seen Today at 12:35 AM</p>
                          </div>    
                        </div>
                        <div className="notify-check parti-notify-check">
                          <div className="form-check d-flex align-items-center justify-content-start ps-0">
                            <label className="custom-check mt-0 mb-0">
                              <input type="checkbox" name="remeber" defaultChecked />                                        
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
                <Link to="#" className="btn btn-secondary" id="previous-group" >
                  <i className="bx bx-left-arrow-alt me-1" />Previous
                </Link>
                <Link to="#" className="btn btn-primary" data-bs-dismiss="modal" aria-label="Close" data-bs-toggle="modal" data-bs-target="#Success-group">
                  <i className="bx bx-send me-1" />Create 
                </Link>
              </div>
            </div>
          </form>
        </div>  
      </div>
    </div>
  </div>
  {/* /New Group */}
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
              <button type="submit" className="btn btn-secondary" data-bs-dismiss="modal" aria-label="Close">
                <i className="feather-x me-1" />Cancel
              </button>
              <button type="submit" className="btn btn-primary" data-bs-dismiss="modal" aria-label="Close">
                <i className="bx bx-send me-1" />Send Invitation
              </button>
            </div>
          </form>
        </div>       
      </div>
    </div>
  </div>
  {/* /Invite */}
  {/* Block */}
  <div className="modal fade" id="block-user">
    <div className="modal-dialog modal-dialog-centered">
      <div className="modal-content">
        <div className="modal-header">
          <h5 className="modal-title">
            Block Mark Villiams
          </h5>
          <button type="button" className="close" data-bs-dismiss="modal" aria-label="Close">
            <span className="material-icons">close</span>
          </button>
        </div>
        <div className="modal-body">
          <div className="block-user-blk text-center">
            <i className="bx bx-block change-color " />
            <p>Blocked contacts will no longer be able to call you or send you messages.</p>
          </div>
          <div className="mute-chat-btn justify-content-center">
            <Link to="#" className="btn btn-secondary" data-bs-dismiss="modal" aria-label="Close">
              Cancel
            </Link>
            <Link to="#" className="btn btn-primary" data-bs-dismiss="modal" aria-label="Close">
              Block
            </Link>
          </div>
        </div>       
      </div>
    </div>
  </div>
  {/* /Block */}
  {/* Deleting a Chat */}
  <div className="modal fade" id="clear-call">
    <div className="modal-dialog modal-dialog-centered">
      <div className="modal-content">
        <div className="modal-header">
          <h5 className="modal-title">
            Delete Call Log
          </h5>
          <button type="button" className="close" data-bs-dismiss="modal" aria-label="Close">
            <span className="material-icons">close</span>
          </button>
        </div>
        <div className="modal-body">
          <div className="block-user-blk text-center">
            <i className="bx bx-trash change-color " />
            <p>Clearing or deleting entire call will only remove call log from this device and your devices on the newer versions of DreamsChat.</p>
          </div>
          <div className="mute-chat-btn justify-content-center">                            
            <Link to="#" className="btn btn-secondary" data-bs-dismiss="modal" aria-label="Close">
              Cancel
            </Link>
            <Link to="#" className="btn btn-primary" data-bs-dismiss="modal" aria-label="Close">
              Delete
            </Link>
          </div>
        </div>       
      </div>
    </div>
  </div>
  {/* /Deleting a Chat */}



 
  {/* Video Call */}
  <div className="modal fade" id="video_call" role="document">
    <div className="modal-dialog modal-dialog-centered">
      <div className="modal-content voice_content">
        <div className="modal-body voice_body">
          <div className="call-box incoming-box">
            <div className="call-wrapper">
              <div className="call-inner">
                <div className="call-user">
                  <ImageWithBasePath alt="User Image" src="assets/img/avatar/avatar-2.jpg" className="call-avatar" />
                  <h4>Mark Villiams <span>Video Calling</span>
                  </h4>
                </div>
                <div className="call-items">
                  <Link to="#" className="btn call-item call-end" data-bs-dismiss="modal">
                    <i className="bx bx-x" />
                  </Link>
                  <Link to={routes.videoCall} className="btn call-item call-start">
                    <i className="feather-video" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* /Video Call */}
  {/* Voice Call */}
  <div className="modal fade" id="voice_call" role="document">
    <div className="modal-dialog modal-dialog-centered">
      <div className="modal-content voice_content">
        <div className="modal-body voice_body">
          <div className="call-box incoming-box">
            <div className="call-wrapper">
              <div className="call-inner">
                <div className="call-user">
                  <ImageWithBasePath alt="User Image" src="assets/img/avatar/avatar-2.jpg" className="call-avatar" />
                  <h4>Mark Villiams <span>Voice Calling</span>
                  </h4>
                </div>
                <div className="call-items">
                  <Link to="#" className="btn call-item call-end" data-bs-dismiss="modal">
                    <i className="bx bx-x" />
                  </Link>
                  <Link to={routes.videoCall} className="btn call-item call-start">
                    <i className="bx bx-phone-call" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* /Voice Call */}



</div>




  )
}

export default CallModal