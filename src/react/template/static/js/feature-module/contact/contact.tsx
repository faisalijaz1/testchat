import React, {useState,useEffect} from 'react'
// import  useState  from 'react'
// import  useEffect  from 'react'
import Scrollbars from 'react-custom-scrollbars-2'
import ContactModal from '../../core/data/modals/contactModal.tsx';
import Sidebar from '../../core/common/sidebar.tsx';
import { all_routes } from '../router/all_routes.tsx';
import { Link } from 'react-router-dom';
import ImageWithBasePath from '../../core/data/img/ImageWithBasePath.tsx';

const Contact = () => {
  
  const routes=all_routes;

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

    <Sidebar/>
  {/* sidebar group */}
  <div className="sidebar-group left-sidebar chat_sidebar">
    {/* Chats sidebar */}
    <div id="chats" className="left-sidebar-wrap sidebar active slimscroll">
    <Scrollbars className={ isSmallScreen ? "mob-scrn" : ""} >
      <div className="slimscroll">
        {/* Left Chat Title */}
        <div className="left-chat-title all-chats d-flex justify-content-between align-items-center">
          <div className="setting-title-head">
            <h4> Contacts</h4>
          </div>
          <div className="add-section">
            <ul>
              <li><Link to="#" className="user-chat-search-btn"  onClick={() => setVisible(!visible)}><i className="bx bx-search" /></Link></li>
              <li><Link to="#" className="contact-added" data-bs-toggle="modal" data-bs-target="#add-contact"><i className="bx bx-plus" /></Link></li>
            </ul>
            {/* Chat Search */}
            <div className={visible ? "user-chat-search visible-chat" : "user-chat-search"}>
              <form>
                <span className="form-control-feedback"><i className="bx bx-search" /></span>
                <input type="text" name="chat-search" placeholder="Search" className="form-control" />
                <div className="user-close-btn-chat" onClick={() => setVisible(!visible)}><span className="material-icons">close</span></div>
              </form>
            </div>
            {/* /Chat Search */}
          </div>
        </div>
        {/* /Left Chat Title */}
        <div className="sidebar-body chat-body" id="chatsidebar">
          {/* Left Chat Title */}
          <div className="d-flex justify-content-between align-items-center ps-0 pe-0">
            <div className="fav-title contact-title">
              <h6>A</h6>
            </div>
          </div>
          {/* /Left Chat Title */}
          <ul className="user-list space-chat">
            <li className="user-list-item">
              <Link to="#" className="status-active">
                <div className="avatar">
                  <ImageWithBasePath src="/assets/img/avatar/avatar-4.jpg" className="rounded-circle" alt="image" />
                </div>
                <div className="users-list-body">
                  <div>
                    <h5>Alexander Manuel</h5>
                    <p><i className="bx bx-map me-1" />San Fransisco, CA</p>
                  </div>    
                </div>
              </Link>
            </li>
            <li className="user-list-item">
              <Link to="#">
                <div className="avatar">
                  <ImageWithBasePath src="/assets/img/avatar/avatar-5.jpg" className="rounded-circle" alt="image" />
                </div>
                <div className="users-list-body">
                  <div>
                    <h5>Annette Theriot</h5>
                    <p><i className="bx bx-map me-1" />Brentwood, NY</p>
                  </div>    
                </div>
              </Link>
            </li>
          </ul>
          {/* Left Chat Title */}
          <div className="d-flex justify-content-between align-items-center ps-0 pe-0">
            <div className="fav-title contact-title">
              <h6>B</h6>
            </div>
          </div>
          {/* /Left Chat Title */}
          <ul className="user-list space-chat">
            <li className="user-list-item">
              <Link to="#">
                <div className="avatar">
                  <ImageWithBasePath src="/assets/img/avatar/avatar-6.jpg" className="rounded-circle" alt="image" />
                </div>
                <div className="users-list-body">
                  <div>
                    <h5>Bacon Mark</h5>
                    <p><i className="bx bx-map me-1" />Brentwood, NY</p>
                  </div>    
                </div>
              </Link>
            </li>
            <li className="user-list-item">
              <Link to="#">
                <div className="avatar">
                  <ImageWithBasePath src="/assets/img/avatar/avatar-10.jpg" className="rounded-circle" alt="image" />
                </div>
                <div className="users-list-body">
                  <div>
                    <h5>Bennett Gerard</h5>
                    <p><i className="bx bx-map me-1" />Riverside, CA</p>
                  </div>    
                </div>
              </Link>
            </li>
          </ul>
          {/* Left Chat Title */}
          <div className="d-flex justify-content-between align-items-center ps-0 pe-0">
            <div className="fav-title contact-title">
              <h6>C</h6>
            </div>
          </div>
          {/* /Left Chat Title */}
          <ul className="user-list space-chat">
            <li className="user-list-item">
              <Link to="#">
                <div className="avatar">
                  <ImageWithBasePath src="/assets/img/avatar/avatar-1.jpg" className="rounded-circle" alt="image" />
                </div>
                <div className="users-list-body">
                  <div>
                    <h5>Charles Sellars</h5>
                    <p><i className="bx bx-map me-1" />Frederick, MD</p>
                  </div>    
                </div>
              </Link>
            </li>
          </ul>
          {/* Left Chat Title */}
          <div className="d-flex justify-content-between align-items-center ps-0 pe-0">
            <div className="fav-title contact-title">
              <h6>D</h6>
            </div>
          </div>
          {/* /Left Chat Title */}
          <ul className="user-list space-chat">
            <li className="user-list-item">
              <Link to="#">
                <div className="avatar">
                  <ImageWithBasePath src="/assets/img/avatar/avatar-7.jpg" className="rounded-circle" alt="image" />
                </div>
                <div className="users-list-body">
                  <div>
                    <h5>Dina Brown</h5>
                    <p><i className="bx bx-map me-1" />Zephyr, NC</p>
                  </div>    
                </div>
              </Link>
            </li>
            <li className="user-list-item">
              <Link to="#">
                <div className="avatar">
                  <ImageWithBasePath src="/assets/img/avatar/avatar-8.jpg" className="rounded-circle" alt="image" />
                </div>
                <div className="users-list-body">
                  <div>
                    <h5>Debra Jones</h5>
                    <p><i className="bx bx-map me-1" />Jackson, TN</p>
                  </div>    
                </div>
              </Link>
            </li>
          </ul>
          {/* Left Chat Title */}
          <div className="d-flex justify-content-between align-items-center ps-0 pe-0">
            <div className="fav-title contact-title">
              <h6>E</h6>
            </div>
          </div>
          {/* /Left Chat Title */}
          <ul className="user-list space-chat">
            <li className="user-list-item">
              <Link to="#">
                <div className="avatar">
                  <ImageWithBasePath src="/assets/img/avatar/avatar-3.jpg" className="rounded-circle" alt="image" />
                </div>
                <div className="users-list-body">
                  <div>
                    <h5>Elaine Vaillancourt</h5>
                    <p><i className="bx bx-map me-1" />Zephyr, NC</p>
                  </div>    
                </div>
              </Link>
            </li>
            <li className="user-list-item">
              <Link to="#">
                <div className="avatar">
                  <ImageWithBasePath src="/assets/img/avatar/avatar-12.jpg" className="rounded-circle" alt="image" />
                </div>
                <div className="users-list-body">
                  <div>
                    <h5>Edward Sanchez</h5>
                    <p><i className="bx bx-map me-1" />Jackson, TN</p>
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
  <div className="chat chat-contact" id="middle">
    <div className="slimscroll">
      <div className="chat-header mb-4">
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
          <figure className="avatar">
            <ImageWithBasePath src="/assets/img/avatar/avatar-2.jpg" className="rounded-circle" alt="image" />
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
            <li className="list-inline-item" data-bs-toggle="tooltip" data-bs-placement="bottom" title="Voice Call">
              <Link to="#" className="btn btn-outline-light" data-bs-toggle="modal" data-bs-target="#voice_call">
                <i className="bx bx-phone" />
              </Link>
            </li>
            <li className="list-inline-item" data-bs-toggle="tooltip" data-bs-placement="bottom" title="Video Call">
              <Link to="#" className="btn btn-outline-light" data-bs-toggle="modal" data-bs-target="#video_call">
                <i className="bx bx-video" />
              </Link>
            </li>
            <li className="list-inline-item">
              <Link to={routes.index} className="btn btn-outline-light not-chat-user" data-bs-toggle="tooltip" data-bs-placement="bottom" title="Chat">
                <i className="bx bx-message-square-dots" />
              </Link>
            </li>
            <li className="list-inline-item">
              <Link className="btn btn-outline-light no-bg" to="#" data-bs-toggle="dropdown">
                <i className="bx bx-dots-vertical-rounded" />
              </Link>
              <div className="dropdown-menu dropdown-menu-end contact-menus">
                <Link to={routes.index} className="dropdown-item "><span><i className="bx bx-share-alt" /></span>Share</Link>
                <Link to="#" className="dropdown-item" data-bs-toggle="modal" data-bs-target="#edit-contact"><span><i className="bx bx-pencil" /></span>Edit</Link>
                <Link to="#" className="dropdown-item" data-bs-toggle="modal" data-bs-target="#block-user"><span><i className="bx bx-block" /></span>Block</Link>
                <Link to="#" className="dropdown-item" data-bs-toggle="modal" data-bs-target="#change-chat"><span><i className="bx bx-trash" /></span>Delete</Link>
              </div>
            </li>
          </ul>
        </div>
      </div>
      <div className="row">
        <div className="col-xl-6">
          <div className="personal-info card">
            <h5>Personal Informations</h5>
            <ul>
              <li>
                <h6><i className="bx bx-time" />Local Time</h6>
                <span>10:25 PM</span>
              </li>
              <li>
                <h6><i className="bx bx-calendar-alt" />Date of Birth</h6>
                <span>10 April 1997</span>
              </li>
              <li>
                <h6><i className="bx bx-phone" />Phone Number</h6>
                <span>+91 9988776655</span>
              </li>
              <li>
                <h6><i className="bx bx-envelope" />Email</h6>
                <span>info@example.com</span>
              </li>
              <li>
                <h6><i className="bx bx-globe" />Website Addres</h6>
                <span>www.examplewebsite.com</span>
              </li>
            </ul>
          </div>
        </div>
        <div className="col-xl-6">
          <div className="personal-info card">
            <h5>Social Informations</h5>
            <ul>
              <li>
                <h6><i className="bx bxl-facebook" />Facebook</h6>
                <span><Link to="#">@example.facebook</Link></span>
              </li>
              <li>
                <h6><i className="bx bxl-twitter" />Twitter</h6>
                <span><Link to="#">@example.twitter</Link></span>
              </li>
              <li>
                <h6><i className="bx bxl-instagram-alt" />Instagram</h6>
                <span><Link to="#">@example.instagram</Link></span>
              </li>
              <li>
                <h6><i className="bx bxl-linkedin-square" />LinkedIn</h6>
                <span><Link to="#">@example.linkedin</Link></span>
              </li>
              <li>
                <h6><i className="bx bxl-youtube" />YouTube</h6>
                <span><Link to="#">@example.youtube</Link></span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* /Chat */}

<ContactModal/>

  
</div>



  )
}

export default Contact