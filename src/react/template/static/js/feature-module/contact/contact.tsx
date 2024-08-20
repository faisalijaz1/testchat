import React, { useState, useEffect } from 'react';
import Scrollbars from 'react-custom-scrollbars-2';
import Sidebar from '../../core/common/sidebar.tsx';
import { all_routes } from '../router/all_routes.tsx';
import { Link } from 'react-router-dom';
import ImageWithBasePath from '../../core/data/img/ImageWithBasePath.tsx';
import ContactModal from '../../core/data/modals/contactModal.tsx';
import { useNavigate } from 'react-router-dom';
const Contact = () => {
  const routes = all_routes;

  const [contacts, setContacts] = useState([
    {
      id: 1,
      name: 'Muhammad Nadeem',
      location: 'MIS-SIC',
      image: '/assets/img/avatar/avatar-17.png',
      email: 'nadeem@skm.org.pk',
      phone: '923234877174',
      address: 'skm.org.pk'
    },
    {
      id: 2,
      name: 'Faisal Ijaz',
      location: 'MIS-SIC',
      image: '/assets/img/avatar/avatar-17.png',
      email: 'faiaalijaz@skm.org.pk',
      phone: '923008881409',
     address: 'skm.org.pk'
    },
    {
      id: 3,
      name: 'Ghulam Mehmood',
      location: 'MIS-SIC',
      image: '/assets/img/avatar/avatar-17.png',
      email: 'gmehmood@skm.org.pk',
      phone: '923025748598',
      address: 'skm.org.pk'
    },
    {
      id: 4,
      name: 'Waqas Ali',
      location: 'MIS-QE',
      image: '/assets/img/avatar/avatar-17.png',
      email: 'waqasali@skm.org.pk',
      phone: '923214872551',
      address: 'skm.org.pk'
    },
    // Add more contacts as needed
    // your contacts data...
  ]);

  const [selectedContact, setSelectedContact] = useState(null);
  const [visible, setVisible] = useState(false);
  const [selectedContactId, setSelectedContactId] = useState(null);
  const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth < 992);
  const navigate = useNavigate();
  const handleResize = () => {
    setIsSmallScreen(window.innerWidth < 992);
  };

  useEffect(() => {
    if (contacts.length > 0) {
      setSelectedContact(contacts[0]);
      setSelectedContactId(contacts[0].id); // Auto-select the first contact on page load
    }
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  const handleSelectContact1 = (contact) => {
    
    navigate(routes.index, { state: contact });
  };
  const handleSelectContact = (contact) => {
    setSelectedContact(contact);
    setSelectedContactId(contact.id);
    if (isSmallScreen) {
      // Scroll to the contact details section on mobile
      document.getElementById('middle').scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="content main_content">
      <Sidebar />
      <div className={`sidebar-group left-sidebar chat_sidebar ${isSmallScreen && selectedContact ? 'd-none' : ''}`}>
        <div id="chats" className="left-sidebar-wrap sidebar active slimscroll">
          <Scrollbars className={isSmallScreen ? "mob-scrn" : ""}>
            <div className="slimscroll">
              <div className="left-chat-title all-chats d-flex justify-content-between align-items-center">
                <div className="setting-title-head">
                  <h4>Contacts</h4>
                </div>
                <div className="add-section">

                  <ul>
                    <li><Link to="#" className="user-chat-search-btn" onClick={() => setVisible(!visible)}><i className="bx bx-search" /></Link></li>
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
              {contacts.map(contact => (
                <div key={contact.id}>
                  <div className="d-flex justify-content-between align-items-center ps-0 pe-0">
                    <div className="fav-title contact-title">
                      {/* Initial Letter of Contact */}
                    </div>
                  </div>
                  <ul className="user-list space-chat">
                    <li className="user-list-item ">
                      <Link to="#"   className={`${selectedContactId === contact.id ? 'status-active' : ''}`}
             onClick={() => handleSelectContact(contact)}>
                        <div className="avatar">
                          <ImageWithBasePath src={contact.image} className="rounded-circle" alt={contact.name} />
                        </div>
                        <div className="users-list-body ">
                          <div>
                            <h5>{contact.name}</h5>
                            <p><i className="bx bx-map me-1" />{contact.location}</p>
                          </div>
                        </div>
                      </Link>
                    </li>
                  </ul>
                </div>
              ))}
            </div>
          </Scrollbars>
        </div>
      </div>

      {/* Contact Details */}
      <div className={`chat chat-contact ${isSmallScreen && !selectedContact ? 'd-none' : ''}`} id="middle">
        <div className="slimscroll">
          {selectedContact ? (
            <div>
              <div className="chat-header mb-4">
                <div className="user-details">
                  <figure className="avatar">
                    <ImageWithBasePath src={selectedContact.image} className="rounded-circle" alt={selectedContact.name} />
                  </figure>
                  <div className="mt-1">
                    <h5>{selectedContact.name}</h5>
                    <small className="last-seen">Last Seen at 07:15 PM</small>
                  </div>
                </div>
                {/* ---------------------------------------------------------------- */}


                <div className="chat-options chat-contact-list">
                  <ul className="list-inline">
                    {/* <li className="list-inline-item" data-bs-toggle="tooltip" data-bs-placement="bottom" title="Voice Call">
                      <Link to="#" className="btn btn-outline-light" data-bs-toggle="modal" data-bs-target="#voice_call">
                        <i className="bx bx-phone" />
                      </Link>
                    </li>
                    <li className="list-inline-item" data-bs-toggle="tooltip" data-bs-placement="bottom" title="Video Call">
                      <Link to="#" className="btn btn-outline-light" data-bs-toggle="modal" data-bs-target="#video_call">
                        <i className="bx bx-video" />
                      </Link>
                    </li> */}
                    <li className="list-inline-item ">
                      <Link onClick={() => handleSelectContact1(selectedContact)}    className="btn btn-outline-light not-chat-user" data-bs-toggle="tooltip" data-bs-placement="bottom" title="Chat">
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
                {/* </div> */}
                {/* ----------------------------------------------------------------- */}

               
              </div>
              <div className="row ">
                <div className="col-xl-6 contactdetail">
                  <div className="personal-info card">
                    <h5 style={{fontFamily:'monospace',fontSize:'24px',fontWeight:'600'}}>Personal Information</h5>
                    <p><strong>Email:</strong> {selectedContact.email}</p>
                    <p><strong>Phone:</strong> {selectedContact.phone}</p>
                    <p><strong>Address:</strong> {selectedContact.address}</p>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <div className="empty-chat">
              <div className="no-message-container">
                <div className="text-center">
                  <figure className="mb-4">
                    <ImageWithBasePath src="/assets/img/contact.png" className="img-fluid" alt="No Contact" />
                  </figure>
                  <h4>No Contact Selected</h4>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Contact Modal */}
      <ContactModal />
    </div>
  );
};

export default Contact;