import React, { useState, useEffect, useRef } from "react";
// import useEffect from "react";
// import  useState  from "react";
import { Link } from "react-router-dom";
import ImageWithBasePath from "../../core/data/img/ImageWithBasePath.tsx";
import Scrollbars from "react-custom-scrollbars-2";
import Slider from "react-slick";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import HomeModals from "../../core/data/modals/homeModals.tsx";
import Sidebar from "../../core/common/sidebar.tsx";
import { all_routes } from "../router/all_routes.tsx";
import AVATAR2 from '../../../../../../react/template/assets/img/avatar/avatar-2.jpg'
import AVATAR1 from '../../../../../../react/template/assets/img/avatar/avatar-1.jpg'
import AVATAR7 from '../../../../../../react/template/assets/img/avatar/avatar-7.jpg'
import AVATAR5 from '../../../../../../react/template/assets/img/avatar/avatar-5.jpg'
import AVATAR3 from '../../../../../../react/template/assets/img/avatar/avatar-3.jpg'
import AVATAR13 from '../../../../../../react/template/assets/img/avatar/avatar-13.jpg'
import AVATAR4 from '../../../../../../react/template/assets/img/avatar/avatar-4.jpg'
import AVATAR9 from '../../../../../../react/template/assets/img/avatar/avatar-9.jpg'
import AVATAR8 from '../../../../../../react/template/assets/img/avatar/avatar-8.jpg'
import AVATAR6 from '../../../../../../react/template/assets/img/avatar/avatar-6.jpg'
import IMG01 from '../../../../../../react/template/assets/img/empty-img-01.png'
import IMG02 from '../../../../../../react/template/assets/img/empty-img-dark.png'
import axios from 'axios';
// import Stomp from 'stompjs';
import SockJS from 'sockjs-client';
import { Client } from '@stomp/stompjs';
interface Message {
  id: string;
  text: string;
  isDelivered: boolean;
  isRead: boolean;
}
const MobileIndex = () => {
  const [selectedUser, setSelectedUser] = useState(null);
  const routes = all_routes;
  const [visible, setVisible] = useState(false);
  const [showContent, setShowContent] = useState(false);
  const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth < 992);
  const [messages, setMessages] = useState<Message[]>([]);
  const buttonRef = useRef(null); // Create a ref for the button
  // const [messages, setMessages] = useState<string[]>([]);
  const [inputText, setInputText] = useState("");
  const [deliveryStatus, setDeliveryStatus] = useState<string | null>(null);
  const recipientPhoneNumber = '923008881409'; // Set the actual recipient's phone number
  const handleResize = () => {
    setIsSmallScreen(window.innerWidth < 992);
  };
  useEffect(() => {
    window.addEventListener("resize", handleResize);
    const socket = new SockJS('https://testchat-production.up.railway.app/ws');
    const stompClient = new Client({
      webSocketFactory: () => socket,
      debug: (str) => {
        console.log(str);
      },
      reconnectDelay: 5000,
      heartbeatIncoming: 4000,
      heartbeatOutgoing: 4000,
      onConnect: () => {
        console.log('Connected to WebSocket');
        // Replace '+recipientPhoneNumber' with the actual phone number or variable
        stompClient.subscribe(`/topic/delivery-status/${recipientPhoneNumber}`, (message) => {
          const status = JSON.parse(message.body); // Assuming status is a JSON string
          setDeliveryStatus(status);
          console.log('Received status:', status);
          // Update message status based on the delivery status
          setMessages(prevMessages =>
            prevMessages.map(msg =>
              msg.id === status.messageId // Assuming status contains messageId
                ? { ...msg, isDelivered: status.isDelivered, isRead: status.isRead }
                : msg
            )
          );
        });
         // Subscribe to incoming messages
         stompClient.subscribe(`/topic/message-received/${recipientPhoneNumber}`, (message) => {
          const incomingMessage = JSON.parse(message.body);
          const newMessage = {
            id: incomingMessage.messageId,
            text: incomingMessage.text,
            isDelivered: false,
            isRead: false,
          };
          setMessages(prevMessages => [...prevMessages, newMessage]);
        });
      },
      onDisconnect: () => {
        console.log('Disconnected');
      },
      onStompError: (error) => {
        console.error('STOMP Error:', error);
      }
    });

    stompClient.activate();
    // setSocketClient(stompClient);

    // Cleanup function to disconnect the WebSocket
    return () => {
      window.removeEventListener("resize", handleResize);
      if (stompClient) {
        stompClient.deactivate();
      }
    };

    // return () => {
    //   window.removeEventListener("resize", handleResize);
    // };
  }, [recipientPhoneNumber]);
  const settings = {
    dots: false,
    autoplay: false,
    slidesToShow: 5,
    margin: 12,
    speed: 500,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 5,
        },
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 5,
        },
      },
      {
        breakpoint: 776,
        settings: {
          slidesToShow: 5,
        },
      },
      {
        breakpoint: 567,
        settings: {
          slidesToShow: 5,
        },
      },
    ],
  };
  const handleUserClick = (user) => {
    setSelectedUser(user);
  };

  const handleBackClick = () => {
    setSelectedUser(null);
  };
  const handleEnterPress = (event) => {
    if (event.key === 'Enter') {
      event.preventDefault(); // Prevent default form submission behavior
      if (buttonRef.current) {
        buttonRef.current.click(); // Trigger button click event
      }
    }
  };
  const handleSendMessage = async (event) => {
    event.preventDefault();
    if (inputText.trim()) {
      try {
        // const response = await axios.post('https://testchat-production.up.railway.app/api/whatsapp/send-template-message', {
        //   templateName: 'statement_available_2',
        //   recipientPhoneNumber: '+923008881409',
        //   parameter: inputText.trim(), // Single string parameter
        // });

        // Construct the URL with query parameters
        const url = `https://testchat-production.up.railway.app/api/whatsapp/send-template-message?templateName=message_test&recipientPhoneNumber=+923008881409&parameter=${encodeURIComponent(inputText.trim())}`;

        // Send the request with an empty body
        const response = await axios.post(url, {});

        if (response.status === 200) {
          // Assuming response contains a unique messageId
          // const { data } = response;
          const messageId = response.data; // Get message ID from response

          const newMessage: Message = {
            id: messageId, // Set messageId from response
            text: inputText.trim(),
            isDelivered: false,
            isRead: false,
          };
          setMessages(prevMessages => [...prevMessages, newMessage]);
          setInputText(""); // Clear input field
          // alert('Template message sent!');



          // Simulate message delivery
          // setTimeout(() => {
          //   setMessages(prevMessages =>
          //     prevMessages.map(msg =>
          //       msg.id === newMessage.id
          //         ? { ...msg, isDelivered: true }
          //         : msg
          //     )
          //   );
          // }, 2000); // Simulate delivery after 2 seconds

          // // Simulate message read
          // setTimeout(() => {
          //   setMessages(prevMessages =>
          //     prevMessages.map(msg =>
          //       msg.id === newMessage.id
          //         ? { ...msg, isRead: true }
          //         : msg
          //     )
          //   );
          // }, 5000); // Simulate read after 5 seconds
        }
      } catch (error) {
        console.error('Error sending message:', error);
        alert('Failed to send message.');
      }
    }

  };
  return (
    <>
      <div className="content main_content">
        <Sidebar />
        <div className="row no-gutters">
          {/* Sidebar group */}
          <div className={`sidebar-group left-sidebar chat_sidebar ${selectedUser ? 'd-none d-md-block' : ''}`}>
            {/* Chats sidebar */}
            <div id="chats" className="left-sidebar-wrap sidebar active slimscroll">
              <Scrollbars className={isSmallScreen ? "mob-scrn" : ""} >
                <div className="sidebar active">
                  <div className="slimscroll">
                    {/* Left Chat Title */}
                    <div className="left-chat-title all-chats d-flex justify-content-between align-items-center">
                      <div className="select-group-chat">
                        <div className="dropdown">
                          <Link
                            to="#"
                            className="dropdown-toggle"
                            data-bs-toggle="dropdown"
                          >
                            All Chats
                            <i className="bx bx-chevron-down" />
                          </Link>
                          <ul className="dropdown-menu">
                            <li>
                              <Link className="dropdown-item" to={routes.allChat}>
                                All Chat
                              </Link>
                            </li>
                            <li>
                              <Link
                                className="dropdown-item"
                                to={routes.archiveChat}
                              >
                                Archive Chat
                              </Link>
                            </li>
                            <li>
                              <Link className="dropdown-item" to={routes.pinnedChat}>
                                Pinned Chat
                              </Link>
                            </li>
                          </ul>
                        </div>
                      </div>
                      <div className="add-section">
                        <ul>
                          <li>
                            <Link to="#" className="user-chat-search-btn" onClick={() => setVisible(!visible)}>
                              <i className="bx bx-search" />
                            </Link>
                          </li>
                          <li>
                            <div className="chat-action-btns">
                              <div className="chat-action-col">
                                <Link
                                  className="#"
                                  to="#"
                                  data-bs-toggle="dropdown"
                                  aria-expanded="false"
                                >
                                  <i className="bx bx-dots-vertical-rounded" />
                                </Link>
                                <div className="dropdown-menu dropdown-menu-end">
                                  <Link
                                    to="#"
                                    className="dropdown-item "
                                    data-bs-toggle="modal"
                                    data-bs-target="#new-chat"
                                  >
                                    <span>
                                      <i className="bx bx-message-rounded-add" />
                                    </span>
                                    New Chat{" "}
                                  </Link>
                                  <Link
                                    to="#"
                                    className="dropdown-item"
                                    data-bs-toggle="modal"
                                    data-bs-target="#new-group"
                                  >
                                    <span>
                                      <i className="bx bx-user-circle" />
                                    </span>
                                    Create Group
                                  </Link>
                                  <Link
                                    to="#"
                                    className="dropdown-item"
                                    data-bs-toggle="modal"
                                    data-bs-target="#invite-other"
                                  >
                                    <span>
                                      <i className="bx bx-user-plus" />
                                    </span>
                                    Invite Others
                                  </Link>
                                </div>
                              </div>
                            </div>
                          </li>
                        </ul>
                        {/* Chat Search */}
                        <div className={visible ? "user-chat-search visible-chat" : "user-chat-search"}>
                          <form>
                            <span className="form-control-feedback">
                              <i className="bx bx-search" />
                            </span>
                            <input
                              type="text"
                              name="chat-search"
                              placeholder="Search"
                              className="form-control"
                            />
                            <div className="user-close-btn-chat" onClick={() => setVisible(!visible)}>
                              <span className="material-icons">close</span>
                            </div>
                          </form>
                        </div>
                        {/* /Chat Search */}
                      </div>
                    </div>
                    {/* /Left Chat Title */}
                    {/* Top Online Contacts */}

                  </div>





                  <ul className="user-list space-chat">
                    <li className="user-list-item chat-user-list" onClick={() => handleUserClick('Muhammad Faisal Ijaz')}>
                      <Link >
                        <div className="avatar ">
                          <ImageWithBasePath
                            src={AVATAR2}
                            className="rounded-circle"
                            alt="image"
                          />
                        </div>
                        <div className="users-list-body">
                          <div>
                            <h5>Muhammad Faisal Ijaz</h5>
                            <div style={{ display: 'flex' }}>
                              <span style={{ width: '70%', textAlign: 'left' }}>Have you called them?</span>
                              <small style={{ width: '30%', textAlign: 'right', marginRight: '10px' }} className="text-muted">10:20 PM</small>
                            </div>
                          </div>
                          {/* <div className="last-chat-time">
                            <small className="text-muted">10:20 PM</small>
                            <div className="chat-pin">
                              <i className="bx bx-pin me-2" />
                              <i className="bx bx-check-double" />
                            </div>
                          </div> */}
                        </div>
                      </Link>
                      {/* <div className="chat-hover ms-1">
                        <div className="chat-action-col">
                          <span className="d-flex" data-bs-toggle="dropdown">
                            <i className="bx bx-dots-vertical-rounded" />
                          </span>
                          <div className="dropdown-menu chat-drop-menu dropdown-menu-end">
                            <span className="dropdown-item ">
                              <span>
                                <i className="bx bx-archive-in" />
                              </span>
                              Archive Chat{" "}
                            </span>
                            <span
                              className="dropdown-item"
                              data-bs-toggle="modal"
                              data-bs-target="#mute-notification"
                            >
                              <span>
                                <i className="bx bx-volume-mute" />
                              </span>
                              Mute Notification
                            </span>
                            <span
                              className="dropdown-item"
                              data-bs-toggle="modal"
                              data-bs-target="#change-chat"
                            >
                              <span>
                                <i className="bx bx-log-out" />
                              </span>
                              Delete Chat
                            </span>
                            <span className="dropdown-item">
                              <span>
                                <i className="bx bx-pin" />
                              </span>
                              Unpin Chat
                            </span>
                            <span className="dropdown-item">
                              <span>
                                <i className="bx bx-check-square" />
                              </span>
                              Mark as Unread
                            </span>
                          </div>
                        </div>
                      </div> */}
                    </li>
                  </ul>

                </div>
                {/* / Chats sidebar */}
              </Scrollbars>
            </div>
          </div>
          {/* /Sidebar group */}

          {/* Chat */}
          <div className={`chat ${selectedUser ? '' : 'status-middle-bar d-flex align-items-center justify-content-center'}`}>
            {selectedUser ? (
              <div className="chat-screen">
                <div style={{ display: 'flex' }}>
                  <button className="back-button d-md-none" onClick={handleBackClick} style={{ marginLeft: '10px',border:'none',color:'darkslategray',background:'transparent' }}>
                    <i className="bx bx-arrow-back"></i>
                  </button>

                  <div className="avatar " style={{ marginLeft: '10px' }}>
                    <ImageWithBasePath
                      src={AVATAR2}
                      className="rounded-circle"
                      alt="image"
                    />
                  </div>
                  {/* <div > */}

                  <h5 style={{ marginLeft: '10px', marginTop: '10px' }}>{selectedUser}</h5>

                  {/* </div> */}


                  {/* <div className="chat-header-details">
                    <div className="avatar avatar-online">
                      <ImageWithBasePath src={AVATAR2} className="rounded-circle" alt="image" />
                    </div>
                    <h5>{selectedUser}</h5>
                  </div> */}


                </div>
                <div className="chat-body">
                  {/* Chat messages */}
                  {/* <div className="chat-message">
                    <p>This is a message</p>
                  </div> */}
                    {messages.map((message, index) => (
                      <div key={index} className="chat-message">
                        <div className="message-content">{message.text}</div>
                        <div className="check-icon">
                          {/* Check icon: you can use an image or icon library */}
                          {/* <img src="/path-to-check-icon.png" alt="Delivered" /> */}
                          {/* <i className="bx bx-check-double check" /> */}
                          <i
                            className={`bx ${message.isRead
                                ? "bx-check-double check read"
                                : message.isDelivered
                                  ? "bx-check-double check"
                                  : "bx-check"
                              }`}
                            style={{
                              color: message.isRead ? "blue" : "inherit",
                            }}
                          />
                        </div>
                      </div>
                    ))}
                </div>


                <div className="chat-footer" style={{marginBottom:'50px',position:'fixed'}}>
            <form>
              <div className="smile-foot">
                <div className="chat-action-btns">
                  <div className="chat-action-col">
                    <Link
                      className="action-circle"
                      to="#"
                      data-bs-toggle="dropdown"
                    >
                      <i className="bx bx-dots-vertical-rounded" />
                    </Link>
                    <div className="dropdown-menu dropdown-menu-end">
                      <Link to="#" className="dropdown-item ">
                        <span>
                          <i className="bx bx-file" />
                        </span>
                        Document
                      </Link>
                      <Link to="#" className="dropdown-item">
                        <span>
                          <i className="bx bx-camera" />
                        </span>
                        Camera
                      </Link>
                      <Link to="#" className="dropdown-item">
                        <span>
                          <i className="bx bx-image" />
                        </span>
                        Gallery
                      </Link>
                      <Link to="#" className="dropdown-item">
                        <span>
                          <i className="bx bx-volume-full" />
                        </span>
                        Audio
                      </Link>
                      <Link to="#" className="dropdown-item">
                        <span>
                          <i className="bx bx-map" />
                        </span>
                        Location
                      </Link>
                      <Link to="#" className="dropdown-item">
                        <span>
                          <i className="bx bx-user-pin" />
                        </span>
                        Contact
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              <div className="smile-foot emoj-action-foot">
                <Link to="#" className="action-circle">
                  <i className="bx bx-smile" onClick={() => setShowContent(!showContent)} />
                </Link>
                <div className="emoj-group-list-foot down-emoji-circle" style={{ display: showContent ? 'block' : 'none' }}>
                  <ul>
                    <li>
                      <Link to="#">
                        <ImageWithBasePath
                          src="/assets/img/icon/emoj-icon-01.svg"
                          alt="Icon"
                        />
                      </Link>
                    </li>
                    <li>
                      <Link to="#">
                        <ImageWithBasePath
                          src="assets/img/icon/emoj-icon-02.svg"
                          alt="Icon"
                        />
                      </Link>
                    </li>
                    <li>
                      <Link to="#">
                        <ImageWithBasePath
                          src="/assets/img/icon/emoj-icon-03.svg"
                          alt="Icon"
                        />
                      </Link>
                    </li>
                    <li>
                      <Link to="#">
                        <ImageWithBasePath
                          src="/assets/img/icon/emoj-icon-04.svg"
                          alt="Icon"
                        />
                      </Link>
                    </li>
                    <li>
                      <Link to="#">
                        <ImageWithBasePath
                          src="/assets/img/icon/emoj-icon-05.svg"
                          alt="Icon"
                        />
                      </Link>
                    </li>
                    <li className="add-emoj">
                      <Link to="#">
                        <i className="feather-plus" />
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="smile-foot">
                <Link to="#" className="action-circle">
                  <i className="bx bx-microphone-off" />
                </Link>
              </div>
              <div className="replay-forms">
                <div className="chats forward-chat-msg reply-div d-none">
                  <div className="contact-close_call text-end">
                    <Link to="#" className="close-replay">
                      <i className="bx bx-x" />
                    </Link>
                  </div>
                  <div className="chat-avatar">
                    <ImageWithBasePath
                      src="/assets/img/avatar/avatar-2.jpg"
                      className="rounded-circle dreams_chat"
                      alt="image"
                    />
                  </div>
                  <div className="chat-content">
                    <div className="chat-profile-name">
                      <h6>
                        Mark Villiams<span>8:16 PM</span>
                      </h6>
                      <div className="chat-action-btns ms-2">
                        <div className="chat-action-col">
                          <Link className="#" to="#" data-bs-toggle="dropdown">
                            <i className="bx bx-dots-horizontal-rounded" />
                          </Link>
                          <div className="dropdown-menu chat-drop-menu dropdown-menu-end">
                            <Link
                              to="#"
                              className="dropdown-item message-info-left"
                            >
                              <span>
                                <i className="bx bx-info-circle" />
                              </span>
                              Message Info{" "}
                            </Link>
                            <Link to="#" className="dropdown-item reply-button">
                              <span>
                                <i className="bx bx-share" />
                              </span>
                              Reply
                            </Link>
                            <Link to="#" className="dropdown-item">
                              <span>
                                <i className="bx bx-smile" />
                              </span>
                              React
                            </Link>
                            <Link
                              to="#"
                              className="dropdown-item"
                              data-bs-toggle="modal"
                              data-bs-target="#forward-message"
                            >
                              <span>
                                <i className="bx bx-reply" />
                              </span>
                              Forward
                            </Link>
                            <Link to="#" className="dropdown-item">
                              <span>
                                <i className="bx bx-star" />
                              </span>
                              Star Message
                            </Link>
                            <Link
                              to="#"
                              className="dropdown-item"
                              data-bs-toggle="modal"
                              data-bs-target="#report-user"
                            >
                              <span>
                                <i className="bx bx-dislike" />
                              </span>
                              Report
                            </Link>
                            <Link
                              to="#"
                              className="dropdown-item"
                              data-bs-toggle="modal"
                              data-bs-target="#delete-message"
                            >
                              <span>
                                <i className="bx bx-trash" />
                              </span>
                              Delete
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="message-content reply-content"></div>
                  </div>
                </div>
                {/* <input
                  type="text" 
                  className="form-control chat_form"
                  placeholder="Type your message here..."
                /> */}
             <input
                  type="text" className="form-control chat_form"
                  value={inputText}
                  onChange={(e) => setInputText(e.target.value)}
                  onKeyDown={handleEnterPress}
                  placeholder="Type a message"
                />
              </div>
              <div className="form-buttons">
              <button type="button" ref={buttonRef} className="btn send-btn" onClick={handleSendMessage}>
                  <i className="bx bx-paper-plane" />
                </button>
              </div>
            </form>
          </div>



                {/* <div className="replay-forms ">
                  <input
                    type="text"
                    className="form-control chat_form"
                    placeholder="Type a message"
                    onKeyDown={(e) => {
                      if (e.key === 'Enter') {

                      }
                    }}
                  />
                </div>
                <div className="form-buttons">
                  <button type="button" className="btn send-btn" >
                    <i className="bx bx-paper-plane" />
                  </button>
                </div> */}




              </div>



            ) : (
              <div className="status-right">
                <Sidebar />
                <div className="empty-chat-img">
                  {/* <ImageWithBasePath src={IMG01} alt="Image" /> */}
                </div>
                <div className="empty-dark-img">
                  {/* <ImageWithBasePath src={IMG02} alt="Image" /> */}
                </div>
                <div className="select-message-box">
                  <h4>Select Message</h4>
                  <p>
                    To see your existing conversation or  start new Chat
                  </p>
                  <Link
                    to="#"
                    className="btn btn-primary"
                    data-bs-toggle="modal"
                    data-bs-target="#new-chat"
                  >
                    <i className="bx bx-plus me-1" />
                    Add New Chat
                  </Link>
                </div>
              </div>
            )}
          </div>
          {/* /Chat */}

        </div>
        <HomeModals />
      </div>
    </>
  );
};

export default MobileIndex;