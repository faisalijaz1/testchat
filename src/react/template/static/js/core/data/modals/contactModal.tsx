import React,{useState} from 'react'
// import  useState  from 'react'
import 'react-phone-number-input/style.css'
import PhoneInput from 'react-phone-number-input'
import { DatePicker } from 'antd';
import { Link } from 'react-router-dom';
import ImageWithBasePath from '../img/ImageWithBasePath.tsx';
import { all_routes } from '../../../feature-module/router/all_routes.tsx';

const ContactModal = () => {

    const routes = all_routes;

    const [value, setValue] = useState();

  return (


    <div>
  {/* Add Contact */}
  <div className="modal fade" id="add-contact">
    <div className="modal-dialog modal-dialog-centered">
      <div className="modal-content">
        <div className="modal-header">
          <h5 className="modal-title">
            Add Contact
          </h5>
          <button type="button" className="close" data-bs-dismiss="modal" aria-label="Close">
            <span className="material-icons">close</span>
          </button>
        </div>
        <div className="modal-body contact-group">
          <form action="#">
            <div className="row">
              <div className="col-sm-6">
                <div className="pass-login ">
                  <label className="form-label">First Name <span>*</span></label>
                  <input type="text" className="form-control" />
                </div>
              </div>
              <div className="col-sm-6">
                <div className="pass-login">
                  <label className="form-label">Last Name <span>*</span></label>
                  <input type="text" className="form-control" />
                </div>
              </div>
              <div className="col-sm-12">
                <div className="pass-login">
                  <label className="form-label">Email Address  <span>*</span></label>
                  <input type="email" className="form-control" />
                </div>
              </div>
              <div className="col-sm-12">
                <div className="pass-login">
                  <label className="form-label">Phone Number <span>*</span></label>
                  {/* <input className="form-control form-control-lg group_formcontrol" id="phone1" name="phone" type="text" /> */}
                  <PhoneInput
      placeholder="Enter phone number"
      value={value}
      onChange={setValue}
      className="form-control form-control-lg group_formcontrol"
      />
      
                </div>
              </div>
              <div className="col-sm-12">
                <div className="form-group">
                  <label className="form-control-label">Date of Birth <span>*</span></label>
                  <div className="cal-icon">
                    <span><ImageWithBasePath src="/assets/img/icon/calendar.svg" alt="Icon" /></span>
                    {/* <input type="text" className="form-control datetimepicker" placeholder="Select Date" /> */}
                    <DatePicker className="form-control datetimepicker"/>
                  </div>
                </div>
              </div>
              <div className="col-sm-12">
                <div className="pass-login">
                  <label className="form-label">Website Address  <span>*</span></label>
                  <input type="email" className="form-control" />
                </div>
              </div>
            </div>
            <div className="mute-chat-btn">
              <button type="submit" className="btn btn-secondary" data-bs-dismiss="modal" aria-label="Close">
                <i className="feather-x me-1" />Cancel
              </button>
              <button type="submit" className="btn btn-primary" data-bs-dismiss="modal" aria-label="Close">
                <i className="feather-plus me-1" />Add Contact
              </button>
            </div>
          </form>
          {/* Card */}
        </div>
      </div>
    </div>
  </div>
  {/* /Add Contact */}
  {/* Password Authentication */}
  <div className="modal fade" id="edit-contact">
    <div className="modal-dialog modal-dialog-centered">
      <div className="modal-content">
        <div className="modal-header">
          <h5 className="modal-title">
            Edit Contact
          </h5>
          <button type="button" className="close" data-bs-dismiss="modal" aria-label="Close">
            <span className="material-icons">close</span>
          </button>
        </div>
        <div className="modal-body contact-group">
          <form action="#">
            <div className="row">
              <div className="col-sm-6">
                <div className="pass-login ">
                  <label className="form-label">First Name <span>*</span></label>
                  <input type="text" className="form-control" defaultValue="Mark" />
                </div>
              </div>
              <div className="col-sm-6">
                <div className="pass-login">
                  <label className="form-label">Last Name <span>*</span></label>
                  <input type="text" className="form-control" defaultValue="Villiams" />
                </div>
              </div>
              <div className="col-sm-12">
                <div className="pass-login">
                  <label className="form-label">Email Address  <span>*</span></label>
                  <input type="email" className="form-control" defaultValue="admin@example.com" />
                </div>
              </div>
              <div className="col-sm-12">
                <div className="pass-login">
                  <label className="form-label">Phone Number <span>*</span></label>
                  {/* <input className="form-control form-control-lg group_formcontrol" id="phone" name="phone" type="text" /> */}

                  <PhoneInput
      placeholder="Enter phone number"
      value={value}
      onChange={setValue}
      className="form-control form-control-lg group_formcontrol"
      />
                </div>
              </div>
              <div className="col-sm-12">
                <div className="form-group">
                  <label className="form-control-label">Date of Birth <span>*</span></label>
                  <div className="cal-icon">
                    <span><ImageWithBasePath src="/assets/img/icon/calendar.svg" alt="Icon" /></span>
                    {/* <input type="text" className="form-control datetimepicker" placeholder="19-09-2023" /> */}
                    <DatePicker />
                  </div>
                </div>
              </div>
              <div className="col-sm-12">
                <div className="pass-login">
                  <label className="form-label">Website Address  <span>*</span></label>
                  <input type="email" className="form-control" />
                </div>
              </div>
            </div>
          </form>
          {/* Card */}
          <div className="mute-chat-btn">
            <Link className="btn btn-secondary" data-bs-dismiss="modal" aria-label="Close">
              Cancel
            </Link>
            <Link className="btn btn-primary" data-bs-dismiss="modal" aria-label="Close">
              Save
            </Link>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* /Password Authentication */}
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
                        <ImageWithBasePath src="/assets/img/avatar/avatar-4.jpg" className="rounded-circle" alt="image" />
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
              <button type="submit" className="btn btn-secondary" data-bs-dismiss="modal" aria-label="Close">
                <i className="feather-x me-1" />Cancel
              </button>
              <button type="submit" className="btn btn-primary" data-bs-dismiss="modal" aria-label="Close">
                <ImageWithBasePath src="/assets/img/icon/send.svg" className="me-1" alt="image" />Chat
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
                    <ImageWithBasePath className="avatar-img" src="/assets/img/avatar/avatar-2.jpg" alt="Profile Image" />
                    <input type="file" id="avatar_upload" />
                    <span className="avatar-edit">
                      <ImageWithBasePath src="/assets/img/icon/camera.svg" alt="Image" />
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
                <Link className="btn btn-secondary" data-bs-dismiss="modal" aria-label="Close">
                  <i className="feather-x me-1" />Cancel
                </Link>
                <Link className="btn btn-primary" id="next-parti">
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
                          <ImageWithBasePath src="/assets/img/avatar/avatar-4.jpg" className="rounded-circle" alt="image" />
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
                          <ImageWithBasePath src="/assets/img/avatar/avatar-5.jpg" className="rounded-circle" alt="image" />
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
                          <ImageWithBasePath src="/assets/img/avatar/avatar-4.jpg" className="rounded-circle" alt="image" />
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
                          <ImageWithBasePath src="/assets/img/avatar/avatar-5.jpg" className="rounded-circle" alt="image" />
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
                <Link className="btn btn-secondary" id="previous-group">
                  <i className="bx bx-left-arrow-alt me-1" />Previous
                </Link>
                <Link className="btn btn-primary" data-bs-dismiss="modal" aria-label="Close" data-bs-toggle="modal" data-bs-target="#Success-group">
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
  {/* New Chat */}
  <div className="modal fade " id="group-parti">
    <div className="modal-dialog modal-dialog-centered">
      <div className="modal-content">
        <div className="modal-header">
          <h5 className="modal-title">
            Add Group Participants
          </h5>
          <button type="button" className="close" data-bs-dismiss="modal" aria-label="Close">
            <span className="material-icons">close</span>
          </button>
        </div>
        <div className="modal-body">
          <div className="user-block-group mb-4">
            <div className="search_chat has-search group-name-search">
              <span className="fas fa-search form-control-feedback" />
              <input className="form-control chat_input" id="search-contacts" type="text" placeholder="Search" />
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
                      <ImageWithBasePath src="/assets/img/avatar/avatar-4.jpg" className="rounded-circle" alt="image" />
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
                      <ImageWithBasePath src="/assets/img/avatar/avatar-5.jpg" className="rounded-circle" alt="image" />
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
                      <ImageWithBasePath src="/assets/img/avatar/avatar-4.jpg" className="rounded-circle" alt="image" />
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
                      <ImageWithBasePath src="/assets/img/avatar/avatar-5.jpg" className="rounded-circle" alt="image" />
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
            <Link className="btn btn-secondary" data-bs-dismiss="modal" aria-label="Close">
              <i className="feather-x me-1" />Cancel
            </Link>
            <Link className="btn btn-primary" data-bs-dismiss="modal" aria-label="Close" data-bs-toggle="modal" data-bs-target="#Success-group">
              <ImageWithBasePath src="/assets/img/icon/send.svg" className="me-1" alt="image" />Create 
            </Link>
          </div>
        </div>       
      </div>
    </div>
  </div>
  {/* /New Chat */}
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
          <Link className="btn btn-primary" data-bs-dismiss="modal" aria-label="Close">
            Ok
          </Link>
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
            <ImageWithBasePath src="/assets/img/icon/block.svg" alt="icon" />
            <p>Blocked contacts will no longer be able to call you or send you messages.</p>
          </div>
          <div className="mute-chat-btn justify-content-center">
            <Link className="btn btn-secondary" data-bs-dismiss="modal" aria-label="Close">
              Cancel
            </Link>
            <Link className="btn btn-primary" data-bs-dismiss="modal" aria-label="Close">
              Block
            </Link>
          </div>
        </div>       
      </div>
    </div>
  </div>
  {/* /Block */}
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
            <Link className="btn btn-secondary" data-bs-dismiss="modal" aria-label="Close">
              Cancel
            </Link>
            <Link className="btn btn-primary" data-bs-dismiss="modal" aria-label="Close">
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
                  <ImageWithBasePath alt="User Image" src="/assets/img/avatar/avatar-2.jpg" className="call-avatar" />
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
                  <ImageWithBasePath alt="User Image" src="/assets/img/avatar/avatar-2.jpg" className="call-avatar" />
                  <h4>Mark Villiams <span>Voice Calling</span>
                  </h4>
                </div>
                <div className="call-items">
                  <Link to="#" className="btn call-item call-end" data-bs-dismiss="modal">
                    <i className="bx bx-x" />
                  </Link>
                  <Link to={routes.audioCall} className="btn call-item call-start">
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

export default ContactModal