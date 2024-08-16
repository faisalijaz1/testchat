import React from 'react'
import { Link } from 'react-router-dom'
import ImageWithBasePath from '../img/ImageWithBasePath.tsx'
import { all_routes } from '../../../feature-module/router/all_routes.tsx'

const EmptyStatusModal = () => {
  const routes = all_routes;
  return (

<div>
  {/* Drag and Drop */}
  <div className="modal fade" id="upload-file">
    <div className="modal-dialog modal-dialog-centered">
      <div className="modal-content">
        <div className="modal-header">
          <h5 className="modal-title">
            Drag and Drop or Upload Files
          </h5>
          <button type="button" className="close" data-bs-dismiss="modal" aria-label="Close">
            <span className="material-icons">close</span>
          </button>
        </div>
        <div className="modal-body">
          <div className="file-drop mb-4">
            <form action="#" className="dropzone dz-clickable">
              <ImageWithBasePath src="/assets/img/icon/drag-file.svg" className="img-fluid" alt="upload" />
              <p>Drag &amp; drop your files here or choose file</p>
              <span>Maximum size: 50MB</span>
              <div className="dz-default dz-message"><span>Drop files here to upload</span></div></form>
          </div>
          <div className="mute-chat-btn ">
            <Link className="btn btn-secondary" data-bs-dismiss="modal" aria-label="Close">
              <i className="feather-x me-1" />Cancel
            </Link>
            <Link className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#upload-file-image">
              <i className="feather-arrow-right me-1" />Next
            </Link>
          </div>
        </div>       
      </div>
    </div>
  </div>
  {/* /Drag and Drop */}
  {/* Upload File */}
  <div className="modal fade upload-img-file" id="upload-file-image">
    <div className="modal-dialog modal-dialog-centered">
      <div className="modal-content">
        <div className="modal-header">
          <ul className="upload-image-list">
            <li><Link to="#"><ImageWithBasePath src="assets/img/icon/crop_rotate.svg" alt="icon" /></Link></li>
            <li><Link to="#"><ImageWithBasePath src="assets/img/icon/sticky_note.svg" alt="icon" /></Link></li>
            <li><Link to="#"><ImageWithBasePath src="assets/img/icon/text-01.svg" alt="icon" /></Link></li>
            <li><Link to="#"><ImageWithBasePath src="assets/img/icon/edit-02.svg" alt="icon" /></Link></li>
          </ul>
          <button type="button" className="close" data-bs-dismiss="modal" aria-label="Close">
            <span className="material-icons">close</span>
          </button>
        </div>
        <div className="modal-body">
          <div className="uplaod-image">
            <ImageWithBasePath src="assets/img/status.jpg" className="img-fluid" alt="upload" />
            <div className="chat status-chat-footer">
              <div className="chat-footer">
                <form >
                  <div className="smile-foot">
                    <div className="chat-action-btns">
                      <div className="chat-action-col">
                        <Link className="action-circle" to="#" data-bs-toggle="dropdown">
                          <i className="bx bx-dots-vertical-rounded" />
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
                    <Link className="btn send-btn" to={routes.statusOther}>
                      <i className="bx bx-paper-plane" />
                    </Link>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>       
      </div>
    </div>
  </div>
  {/* /Upload File */}
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
                      <input type="radio" defaultChecked="checked" name="radio" />
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
                <div className=" parti-wrapper">
                  <ImageWithBasePath src="./assets/img/avatar/group-01.png" alt="Img" className="img-fluid me-2" />
                  <ImageWithBasePath src="./assets/img/avatar/group-02.png" alt="Img" className="img-fluid" />
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
            <div className=" parti-wrapper">
              <ImageWithBasePath src="./assets/img/avatar/group-01.png" alt="Img" className="img-fluid me-2" />
              <ImageWithBasePath src="./assets/img/avatar/group-02.png" alt="Img" className="img-fluid" />
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
            <Link to="#" className="btn btn-secondary" data-bs-dismiss="modal" aria-label="Close">
              <i className="feather-x me-1" />Cancel
            </Link>
            <Link to="#" className="btn btn-primary" data-bs-dismiss="modal" aria-label="Close" data-bs-toggle="modal" data-bs-target="#Success-group">
              <ImageWithBasePath src="assets/img/icon/send.svg" className="me-1" alt="image" />Create 
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
            <ImageWithBasePath src="./assets/img/avatar/avatar-16.png" alt="Success" className="img-fluid" />
          </div>
        </div>
        <div className="modal-body">
          <div className="success-header">
            <h4>Success</h4>
            <p>Group Created Successfully</p>
          </div>
          <Link to="#" className="btn btn-primary" data-bs-dismiss="modal" aria-label="Close">
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
</div>


  )
}

export default EmptyStatusModal