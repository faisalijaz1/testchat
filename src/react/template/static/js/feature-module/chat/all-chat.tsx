import React, { useState, useEffect, useRef } from "react";
import ImageWithBasePath from "../../core/data/img/ImageWithBasePath.tsx";
import Slider from "react-slick";
import { Link } from "react-router-dom";
import Scrollbars from "react-custom-scrollbars-2";
import { all_routes } from "../router/all_routes.tsx";

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

const AllChat = () => {
  const routes = all_routes
  const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth < 992);
  const [showContent, setShowContent] = useState(false);
  const buttonRef = useRef(null); // Create a ref for the button
  // const [messages, setMessages] = useState<string[]>([]);
  const [inputText, setInputText] = useState("");
  const [messageId, setMessageId] = useState(''); // Unique ID for the message
  const [messages, setMessages] = useState<Message[]>([]);

  const [deliveryStatus, setDeliveryStatus] = useState<string | null>(null);
  const [socketClient, setSocketClient] = useState<any>(null);
  const recipientPhoneNumber = '923008881409'; // Set the actual recipient's phone number


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
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 776,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 567,
        settings: {
          slidesToShow: 2,
        },
      },
    ],
  };
  return (
    <>
      {/* content */}
      <div className="content main_content">
        {/* Left Sidebar Menu */}
        <div className="sidebar-menu">
          <div className="logo-col">
            <Link to={routes.index}>
              <ImageWithBasePath src="/assets/img/logo.png" alt="Logo" />
            </Link>
          </div>
          <div className="menus-col">
            <div className="chat-menus">
              <ul>
                <li>
                  <Link
                    to={routes.index}
                    className="chat-unread active"
                    data-bs-toggle="tooltip"
                    data-bs-placement="right"
                    title
                    data-bs-original-title="Chat"
                  >
                    <i className="bx bx-message-square-dots" />
                  </Link>
                </li>
                <li>
                  <Link
                    to={routes.group}
                    className="chat-unread"
                    data-bs-toggle="tooltip"
                    data-bs-placement="right"
                    title
                    data-bs-original-title="Group"
                  >
                    <i className="bx bx-group" />
                  </Link>
                </li>
                <li>
                  <Link
                    to={routes.emptyStatus}
                    className="chat-unread"
                    data-bs-toggle="tooltip"
                    data-bs-placement="right"
                    title
                    data-bs-original-title="Status"
                  >
                    <i className="bx bx-stop-circle" />
                  </Link>
                </li>
                <li>
                  <Link
                    to={routes.call}
                    className="chat-unread"
                    data-bs-toggle="tooltip"
                    data-bs-placement="right"
                    title
                    data-bs-original-title="Call"
                  >
                    <i className="bx bx-phone" />
                  </Link>
                </li>
                <li>
                  <Link
                    to={routes.contact}
                    className="chat-unread"
                    data-bs-toggle="tooltip"
                    data-bs-placement="right"
                    title
                    data-bs-original-title="Contact"
                  >
                    <i className="bx bx-user-pin" />
                  </Link>
                </li>
                <li>
                  <Link
                    to={routes.settings}
                    className="chat-unread"
                    data-bs-toggle="tooltip"
                    data-bs-placement="right"
                    title
                    data-bs-original-title="Settings"
                  >
                    <i className="bx bx-cog" />
                  </Link>
                </li>
              </ul>
            </div>
            <div className="bottom-menus">
              <ul>
                <li>
                  <Link
                    to="#"
                    id="dark-mode-toggle"
                    className="dark-mode-toggle active"
                  >
                    <i className="bx bx-moon" />
                  </Link>
                  <Link
                    to="#"
                    id="light-mode-toggle"
                    className="dark-mode-toggle"
                  >
                    <i className="bx bx-sun" />
                  </Link>
                </li>
                <li>
                  <div className="avatar avatar-online">
                    <Link
                      to="#"
                      className="chat-profile-icon"
                      data-bs-toggle="dropdown"
                    >
                      <ImageWithBasePath
                        src="/assets/img/avatar/avatar-2.jpg"
                        alt=""
                      />
                    </Link>
                    <div className="dropdown-menu dropdown-menu-end">
                      <Link to={routes.settings} className="dropdown-item">
                        <span>
                          <i className="bx bx-cog" />
                        </span>
                        Settings
                      </Link>
                      <Link to={routes.emailLogin} className="dropdown-item">
                        <span>
                          <i className="bx bx-log-out" />
                        </span>
                        Logout{" "}
                      </Link>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
        {/* /Left Sidebar Menu */}
        {/* sidebar group */}
        <div className="sidebar-group left-sidebar chat_sidebar">
          {/* Chats sidebar */}
          <div
            id="chats"
            className="left-sidebar-wrap sidebar active slimscroll"
          >
            <Scrollbars className={isSmallScreen ? "mob-scrn" : ""}>
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
                        <Link
                          to="#"
                          className="user-chat-search-btn"
                        >
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
                    <div className="user-chat-search">
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
                        <div className="user-close-btn-chat">
                          <span className="material-icons">close</span>
                        </div>
                      </form>
                    </div>
                    {/* /Chat Search */}
                  </div>
                </div>
                {/* /Left Chat Title */}
                {/* Top Online Contacts */}
                <div className="top-online-contacts">
                  <div className="fav-title">
                    <h6>Online Now</h6>
                  </div>
                  <div className="swiper-container">
                    <div className="swiper-wrapper">
                      <Slider {...settings} className="swiper-wrapper ">
                        <div className="swiper-slide">
                          <div className="top-contacts-box">
                            <div className="profile-img online">
                              <Link to={routes.index}>
                                <ImageWithBasePath
                                  src="/assets/img/avatar/avatar-2.jpg"
                                  alt="Image"
                                />
                              </Link>
                            </div>
                          </div>
                        </div>
                        <div className="swiper-slide">
                          <div className="top-contacts-box">
                            <div className="profile-img online">
                              <Link to={routes.index}>
                                <ImageWithBasePath
                                  src="/assets/img/avatar/avatar-1.jpg"
                                  alt="Image"
                                />
                              </Link>
                            </div>
                          </div>
                        </div>
                        <div className="swiper-slide">
                          <div className="top-contacts-box">
                            <div className="profile-img online">
                              <Link to={routes.index}>
                                <ImageWithBasePath
                                  src="/assets/img/avatar/avatar-7.jpg"
                                  alt="Image"
                                />
                              </Link>
                            </div>
                          </div>
                        </div>
                        <div className="swiper-slide">
                          <div className="top-contacts-box">
                            <div className="profile-img online">
                              <Link to={routes.index}>
                                <ImageWithBasePath
                                  src="/assets/img/avatar/avatar-5.jpg"
                                  alt="Image"
                                />
                              </Link>
                            </div>
                          </div>
                        </div>
                        <div className="swiper-slide">
                          <div className="top-contacts-box">
                            <div className="profile-img online">
                              <Link to={routes.index}>
                                <ImageWithBasePath
                                  src="/assets/img/avatar/avatar-3.jpg"
                                  alt="Image"
                                />
                              </Link>
                            </div>
                          </div>
                        </div>
                        <div className="swiper-slide">
                          <div className="top-contacts-box">
                            <div className="profile-img online">
                              <Link to={routes.index}>
                                <ImageWithBasePath
                                  src="/assets/img/avatar/avatar-2.jpg"
                                  alt="Image"
                                />
                              </Link>
                            </div>
                          </div>
                        </div>
                      </Slider>
                    </div>
                  </div>
                </div>
                {/* /Top Online Contacts */}
                <div className="sidebar-body chat-body" id="chatsidebar">
                  {/* Left Chat Title */}
                  <div className="d-flex justify-content-between align-items-center ps-0 pe-0">
                    <div className="fav-title pin-chat">
                      <h6>
                        <i className="bx bx-pin me-1" />
                        Pinned Chat
                      </h6>
                    </div>
                  </div>
                  {/* /Left Chat Title */}
                  <ul className="user-list space-chat">
                    <li className="user-list-item chat-user-list">
                      <Link to="#" className="status-active">
                        <div className="avatar avatar-online">
                          <ImageWithBasePath
                            src="/assets/img/avatar/avatar-2.jpg"
                            className="rounded-circle"
                            alt="image"
                          />
                        </div>
                        <div className="users-list-body">
                          <div>
                            <h5>Muhammad Faisal Ijaz</h5>
                            {/* <p>Have you called them?</p> */}
                          </div>
                          <div className="last-chat-time">
                            <small className="text-muted">10:20 PM</small>
                            {/* <div className="chat-pin">
                              <i className="bx bx-pin me-2" />
                              <i className="bx bx-check-double" />
                            </div> */}
                          </div>
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











                    {/* 
                    <li className="user-list-item chat-user-list">
                      <Link to="#">
                        <div>
                          <div className="avatar ">
                            <ImageWithBasePath
                              src="/assets/img/avatar/avatar-13.jpg"
                              className="rounded-circle"
                              alt="image"
                            />
                          </div>
                        </div>
                        <div className="users-list-body">
                          <div>
                            <h5>Elizabeth Sosa</h5>
                            <p>
                              <span className="animate-typing-col">
                                Typing
                                <span className="dot" />
                                <span className="dot" />
                                <span className="dot" />
                              </span>
                            </p>
                          </div>
                          <div className="last-chat-time">
                            <small className="text-muted">Yesterday</small>
                            <div className="chat-pin">
                              <i className="bx bx-pin me-2" />
                            </div>
                          </div>
                        </div>
                      </Link>
                      <div className="chat-hover">
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
                      </div>
                    </li>


                    <li className="user-list-item chat-user-list">
                      <Link to="#">
                        <div className="avatar avatar-online">
                          <ImageWithBasePath
                            src="/assets/img/avatar/avatar-5.jpg"
                            className="rounded-circle"
                            alt="image"
                          />
                        </div>
                        <div className="users-list-body">
                          <div>
                            <h5>Michael Howard</h5>
                            <p>Thank you</p>
                          </div>
                          <div className="last-chat-time">
                            <small className="text-muted">10:20 PM</small>
                            <div className="chat-pin">
                              <i className="bx bx-pin me-2" />
                              <i className="bx bx-check-double check" />
                            </div>
                          </div>
                        </div>
                      </Link>
                      <div className="chat-hover ms-1">
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
                      </div>
                    </li> */}




                  </ul>


                  {/* Left Chat Title */}
                  <div className="d-flex justify-content-between align-items-center ps-0 pe-0">
                    <div className="fav-title pin-chat">
                      <h6>
                        <i className="bx bx-message-square-dots me-1" />
                        Recent Chat
                      </h6>
                    </div>
                  </div>
                  {/* /Left Chat Title */}
                  {/* <ul className="user-list">
                    <li className="user-list-item chat-user-list">
                      <Link to="#">
                        <div className="avatar avatar-online">
                          <ImageWithBasePath
                            src="/assets/img/avatar/avatar-1.jpg"
                            className="rounded-circle"
                            alt="image"
                          />
                        </div>
                        <div className="users-list-body">
                          <div>
                            <h5>Horace Keene</h5>
                            <p>Have you called them?</p>
                          </div>
                          <div className="last-chat-time">
                            <small className="text-muted">Just Now</small>
                            <div className="chat-pin">
                              <span className="count-message">5</span>
                            </div>
                          </div>
                        </div>
                      </Link>
                      <div className="chat-hover ms-1">
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
                                <i className="bx bx-trash" />
                              </span>
                              Delete Chat
                            </span>
                            <span className="dropdown-item">
                              <span>
                                <i className="bx bx-pin" />
                              </span>
                              Pin Chat
                            </span>
                            <span className="dropdown-item">
                              <span>
                                <i className="bx bx-check-square" />
                              </span>
                              Mark as Read
                            </span>
                            <span
                              className="dropdown-item"
                              data-bs-toggle="modal"
                              data-bs-target="#block-user"
                            >
                              <span>
                                <i className="bx bx-block" />
                              </span>
                              Block
                            </span>
                          </div>
                        </div>
                      </div>
                    </li>
                    <li className="user-list-item chat-user-list">
                      <Link to="#">
                        <div>
                          <div className="avatar avatar-online">
                            <ImageWithBasePath
                              src="/assets/img/avatar/avatar-3.jpg"
                              className="rounded-circle"
                              alt="image"
                            />
                          </div>
                        </div>
                        <div className="users-list-body">
                          <div>
                            <h5>Hollis Tran</h5>
                            <p>
                              <i className="bx bx-video me-1" />
                              Video
                            </p>
                          </div>
                          <div className="last-chat-time">
                            <small className="text-muted">Yesterday</small>
                            <div className="chat-pin">
                              <i className="bx bx-check" />
                            </div>
                          </div>
                        </div>
                      </Link>
                      <div className="chat-hover ms-1">
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
                                <i className="bx bx-trash" />
                              </span>
                              Delete Chat
                            </span>
                            <span className="dropdown-item">
                              <span>
                                <i className="bx bx-pin" />
                              </span>
                              Pin Chat
                            </span>
                            <span className="dropdown-item">
                              <span>
                                <i className="bx bx-check-square" />
                              </span>
                              Mark as Unread
                            </span>
                            <span
                              className="dropdown-item"
                              data-bs-toggle="modal"
                              data-bs-target="#block-user"
                            >
                              <span>
                                <i className="bx bx-block" />
                              </span>
                              Block
                            </span>
                          </div>
                        </div>
                      </div>
                    </li>
                    <li className="user-list-item chat-user-list">
                      <Link to="#">
                        <div className="avatar">
                          <ImageWithBasePath
                            src="/assets/img/avatar/avatar-4.jpg"
                            className="rounded-circle"
                            alt="image"
                          />
                        </div>
                        <div className="users-list-body">
                          <div>
                            <h5>James Albert</h5>
                            <p>
                              <i className="bx bx-file me-1" />
                              Project Tools.doc
                            </p>
                          </div>
                          <div className="last-chat-time">
                            <small className="text-muted">10:20 PM</small>
                          </div>
                        </div>
                      </Link>
                      <div className="chat-hover ms-1">
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
                                <i className="bx bx-trash" />
                              </span>
                              Delete Chat
                            </span>
                            <span className="dropdown-item">
                              <span>
                                <i className="bx bx-pin" />
                              </span>
                              Pin Chat
                            </span>
                            <span className="dropdown-item">
                              <span>
                                <i className="bx bx-check-square" />
                              </span>
                              Mark as Unread
                            </span>
                            <span
                              className="dropdown-item"
                              data-bs-toggle="modal"
                              data-bs-target="#block-user"
                            >
                              <span>
                                <i className="bx bx-block" />
                              </span>
                              Block
                            </span>
                          </div>
                        </div>
                      </div>
                    </li>
                    <li className="user-list-item chat-user-list">
                      <Link to="#">
                        <div>
                          <div className="avatar avatar-online">
                            <ImageWithBasePath
                              src="/assets/img/avatar/avatar-9.jpg"
                              className="rounded-circle"
                              alt="image"
                            />
                          </div>
                        </div>
                        <div className="users-list-body">
                          <div>
                            <h5>Debra Jones</h5>
                            <p>
                              <i className="bx bx-microphone me-1" />
                              Audio
                            </p>
                          </div>
                          <div className="last-chat-time">
                            <small className="text-muted">12:30 PM</small>
                            <div className="chat-pin">
                              <i className="bx bx-check-double check" />
                            </div>
                          </div>
                        </div>
                      </Link>
                      <div className="chat-hover ms-1">
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
                                <i className="bx bx-trash" />
                              </span>
                              Delete Chat
                            </span>
                            <span className="dropdown-item">
                              <span>
                                <i className="bx bx-pin" />
                              </span>
                              Pin Chat
                            </span>
                            <span className="dropdown-item">
                              <span>
                                <i className="bx bx-check-square" />
                              </span>
                              Mark as Unread
                            </span>
                            <span
                              className="dropdown-item"
                              data-bs-toggle="modal"
                              data-bs-target="#block-user"
                            >
                              <span>
                                <i className="bx bx-block" />
                              </span>
                              Block
                            </span>
                          </div>
                        </div>
                      </div>
                    </li>
                    <li className="user-list-item chat-user-list">
                      <Link to="#">
                        <div>
                          <div className="avatar ">
                            <ImageWithBasePath
                              src="/assets/img/avatar/avatar-7.jpg"
                              className="rounded-circle"
                              alt="image"
                            />
                          </div>
                        </div>
                        <div className="users-list-body">
                          <div>
                            <h5>Dina Brown</h5>
                            <p>Have you called them?</p>
                          </div>
                          <div className="last-chat-time">
                            <small className="text-muted">Yesterday</small>
                            <div className="chat-pin">
                              <i className="bx bx-microphone-off" />
                            </div>
                          </div>
                        </div>
                      </Link>
                      <div className="chat-hover ms-1">
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
                                <i className="bx bx-trash" />
                              </span>
                              Delete Chat
                            </span>
                            <span className="dropdown-item">
                              <span>
                                <i className="bx bx-pin" />
                              </span>
                              Pin Chat
                            </span>
                            <span className="dropdown-item">
                              <span>
                                <i className="bx bx-check-square" />
                              </span>
                              Mark as Unread
                            </span>
                            <span
                              className="dropdown-item"
                              data-bs-toggle="modal"
                              data-bs-target="#block-user"
                            >
                              <span>
                                <i className="bx bx-block" />
                              </span>
                              Block
                            </span>
                          </div>
                        </div>
                      </div>
                    </li>
                    <li className="user-list-item chat-user-list">
                      <Link to="#">
                        <div>
                          <div className="avatar avatar-online">
                            <ImageWithBasePath
                              src="/assets/img/avatar/avatar-8.jpg"
                              className="rounded-circle"
                              alt="image"
                            />
                          </div>
                        </div>
                        <div className="users-list-body">
                          <div>
                            <h5>Judy Mercer</h5>
                            <p className="missed-call-col">
                              <i className="bx bx-phone-incoming me-1" />
                              Missed Call
                            </p>
                          </div>
                          <div className="last-chat-time">
                            <small className="text-muted">25/July/23</small>
                          </div>
                        </div>
                      </Link>
                      <div className="chat-hover ms-1">
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
                                <i className="bx bx-trash" />
                              </span>
                              Delete Chat
                            </span>
                            <span className="dropdown-item">
                              <span>
                                <i className="bx bx-pin" />
                              </span>
                              Pin Chat
                            </span>
                            <span className="dropdown-item">
                              <span>
                                <i className="bx bx-check-square" />
                              </span>
                              Mark as Unread
                            </span>
                            <span
                              className="dropdown-item"
                              data-bs-toggle="modal"
                              data-bs-target="#block-user"
                            >
                              <span>
                                <i className="bx bx-block" />
                              </span>
                              Block
                            </span>
                          </div>
                        </div>
                      </div>
                    </li>
                    <li className="user-list-item chat-user-list">
                      <Link to="#">
                        <div>
                          <div className="avatar">
                            <ImageWithBasePath
                              src="/assets/img/avatar/avatar-5.jpg"
                              className="rounded-circle"
                              alt="image"
                            />
                          </div>
                        </div>
                        <div className="users-list-body">
                          <div>
                            <h5>Richard Ohare</h5>
                            <p>
                              <i className="bx bx-image-alt me-1" />
                              Photo
                            </p>
                          </div>
                          <div className="last-chat-time">
                            <small className="text-muted">27/July/23</small>
                            <div className="chat-pin">
                              <i className="bx bx-check-double" />
                            </div>
                          </div>
                        </div>
                      </Link>
                      <div className="chat-hover ms-1">
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
                                <i className="bx bx-trash" />
                              </span>
                              Delete Chat
                            </span>
                            <span className="dropdown-item">
                              <span>
                                <i className="bx bx-pin" />
                              </span>
                              Pin Chat
                            </span>
                            <span className="dropdown-item">
                              <span>
                                <i className="bx bx-check-square" />
                              </span>
                              Mark as Unread
                            </span>
                            <span
                              className="dropdown-item"
                              data-bs-toggle="modal"
                              data-bs-target="#block-user"
                            >
                              <span>
                                <i className="bx bx-block" />
                              </span>
                              Block
                            </span>
                          </div>
                        </div>
                      </div>
                    </li>
                    <li className="user-list-item chat-user-list">
                      <Link to="#">
                        <div>
                          <div className="avatar avatar-online">
                            <ImageWithBasePath
                              src="/assets/img/avatar/avatar-6.jpg"
                              className="rounded-circle"
                              alt="image"
                            />
                          </div>
                        </div>
                        <div className="users-list-body">
                          <div>
                            <h5>Charles Sellars</h5>
                            <p>Have you called them?</p>
                          </div>
                          <div className="last-chat-time">
                            <small className="text-muted">10:20 PM</small>
                          </div>
                        </div>
                      </Link>
                      <div className="chat-hover ms-1">
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
                                <i className="bx bx-trash" />
                              </span>
                              Delete Chat
                            </span>
                            <span className="dropdown-item">
                              <span>
                                <i className="bx bx-pin" />
                              </span>
                              Pin Chat
                            </span>
                            <span className="dropdown-item">
                              <span>
                                <i className="bx bx-check-square" />
                              </span>
                              Mark as Unread
                            </span>
                            <span
                              className="dropdown-item"
                              data-bs-toggle="modal"
                              data-bs-target="#block-user"
                            >
                              <span>
                                <i className="bx bx-block" />
                              </span>
                              Block
                            </span>
                          </div>
                        </div>
                      </div>
                    </li>
                  </ul> */}



                </div>
              </div>
            </Scrollbars>
          </div>
          {/* / Chats sidebar */}
        </div>



        {/* /Sidebar group */}
        {/* Chat */}




        <div className="chat chat-messages" id="middle">
          <div>
            <div className="chat-header">
              <div className="user-details">
                <div className="d-lg-none">
                  <ul className="list-inline mt-2 me-2">
                    <li className="list-inline-item">
                      <Link
                        className="text-muted px-0 left_sides"
                        to="#"
                        data-chat="open"
                      >
                        <i className="fas fa-arrow-left" />
                      </Link>
                    </li>
                  </ul>
                </div>
                <figure className="avatar ms-1">
                  <ImageWithBasePath
                    src="/assets/img/avatar/avatar-2.jpg"
                    className="rounded-circle"
                    alt="image"
                  />
                </figure>
                <div className="mt-1">
                  <h5>Muhammad Faisal Ijaz</h5>
                  <small className="last-seen">Last Seen at 07:15 PM</small>
                </div>
              </div>
              <div className="chat-options ">
                <ul className="list-inline">
                  <li className="list-inline-item">
                    <Link
                      to="#"
                      className="btn btn-outline-light chat-search-btn"
                      data-bs-toggle="tooltip"
                      data-bs-placement="bottom"
                      title="Search"
                    >
                      <i className="bx bx-search" />
                    </Link>
                  </li>
                  <li
                    className="list-inline-item"
                    data-bs-toggle="tooltip"
                    data-bs-placement="bottom"
                    title="Video Call"
                  >
                    <Link
                      to="#"
                      className="btn btn-outline-light"
                      data-bs-toggle="modal"
                      data-bs-target="#video_call"
                    >
                      <i className="bx bx-video" />
                    </Link>
                  </li>
                  <li
                    className="list-inline-item"
                    data-bs-toggle="tooltip"
                    data-bs-placement="bottom"
                    title="Voice Call"
                  >
                    <Link
                      to="#"
                      className="btn btn-outline-light"
                      data-bs-toggle="modal"
                      data-bs-target="#voice_call"
                    >
                      <i className="bx bx-phone" />
                    </Link>
                  </li>
                  <li className="list-inline-item dream_profile_menu">
                    <Link
                      to="#"
                      className="btn btn-outline-light not-chat-user"
                      data-bs-toggle="tooltip"
                      data-bs-placement="bottom"
                      title="Contact Info"
                    >
                      <i className="bx bx-info-circle" />
                    </Link>
                  </li>
                  <li className="list-inline-item">
                    <Link
                      className="btn btn-outline-light no-bg"
                      to="#"
                      data-bs-toggle="dropdown"
                    >
                      <i className="bx bx-dots-vertical-rounded" />
                    </Link>
                    <div className="dropdown-menu dropdown-menu-end">
                      <Link to={routes.index} className="dropdown-item ">
                        <span>
                          <i className="bx bx-x" />
                        </span>
                        Close Chat{" "}
                      </Link>
                      <Link
                        to="#"
                        className="dropdown-item"
                        data-bs-toggle="modal"
                        data-bs-target="#mute-notification"
                      >
                        <span>
                          <i className="bx bx-volume-mute" />
                        </span>
                        Mute Notification
                      </Link>
                      <Link
                        to="#"
                        className="dropdown-item"
                        data-bs-toggle="modal"
                        data-bs-target="#disappearing-messages"
                      >
                        <span>
                          <i className="bx bx-time-five" />
                        </span>
                        Disappearing Message
                      </Link>
                      <Link
                        to="#"
                        className="dropdown-item"
                        data-bs-toggle="modal"
                        data-bs-target="#clear-chat"
                      >
                        <span>
                          <i className="bx bx-brush-alt" />
                        </span>
                        Clear Message
                      </Link>
                      <Link
                        to="#"
                        className="dropdown-item"
                        data-bs-toggle="modal"
                        data-bs-target="#change-chat"
                      >
                        <span>
                          <i className="bx bx-trash" />
                        </span>
                        Delete Chat
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
                        data-bs-target="#block-user"
                      >
                        <span>
                          <i className="bx bx-block" />
                        </span>
                        Block
                      </Link>
                    </div>
                  </li>
                </ul>
              </div>

              {/* Chat Search */}
              <div className="chat-search">
                <form>
                  <span className="form-control-feedback">
                    <i className="bx bx-search" />
                  </span>
                  <input
                    type="text"
                    name="chat-search"
                    placeholder="Search Chats"
                    className="form-control"
                  />
                  <div className="close-btn-chat">
                    <span className="material-icons">close</span>
                  </div>
                </form>
              </div>
              {/* /Chat Search */}
            </div>
            <div className="chat-body chat-page-group slimscroll">
              <div className="messages">
                <div className="chats">
                  {/* <div className="chat-avatar">
                    <ImageWithBasePath
                      src="/assets/img/avatar/avatar-13.jpg"
                      className="rounded-circle dreams_chat"
                      alt="image"
                    />
                  </div> */}
                  <div className="chat-content">


                    {/* <div className="chat-profile-name">
                      <h6>
                        Test Account<span>8:16 PM</span>
                        <span className="check-star msg-star d-none">
                          <i className="bx bxs-star" />
                        </span>
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
                            <Link to="#" className="dropdown-item click-star">
                              <span>
                                <i className="bx bx-star" />
                              </span>
                              <span className="star-msg">Star Message</span>
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
                              fontSize:'large',color: message.isRead ? "blue" : "inherit",
                            }}
                          />
                        </div>
                      </div>
                    ))}




                    {/* <div className="message-content">
                      Hello <Link to="#">@Alex</Link> Thank you for
                      the beautiful web design ahead schedule.
                      <div className="emoj-group">
                        <ul>
                          <li className="emoj-action">
                            <Link to="#">
                              <i className="bx bx-smile" />
                            </Link>
                            <div className="emoj-group-list">
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
                                      src="/assets/img/icon/emoj-icon-02.svg"
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
                          </li>
                          <li>
                            <Link
                              to="#"
                              data-bs-toggle="modal"
                              data-bs-target="#forward-message"
                            >
                              <i className="bx bx-share" />
                            </Link>
                          </li>
                        </ul>
                      </div>
                    </div> */}



                  </div>
                </div>


                {/* <div className="chat-line">
                  <span className="chat-date">Today, July 24</span>
                </div> */}


                {/* <div className="chats chats-right">
                  <div className="chat-content">
                    <div className="chat-profile-name text-end">
                      <h6>
                        <i className="bx bx-check-double me-1 inactive-check" />
                        Alex Smith<span>8:16 PM</span>
                        <span className="check-star msg-star-one d-none">
                          <i className="bx bxs-star" />
                        </span>
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
                            <Link
                              to="#"
                              className="dropdown-item click-star-one"
                            >
                              <span>
                                <i className="bx bx-star" />
                              </span>
                              <span className="star-msg-one">Star Message</span>
                            </Link>
                            <Link
                              to="#"
                              className="dropdown-item"
                              data-bs-toggle="modal"
                              data-bs-target="#edit-message"
                            >
                              <span>
                                <i className="bx bx-edit-alt" />
                              </span>
                              Edit
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
                    <div className="message-content ">
                      <div className="emoj-group rig-emoji-group">
                        <ul>
                          <li className="emoj-action">
                            <Link to="#">
                              <i className="bx bx-smile" />
                            </Link>
                            <div className="emoj-group-list">
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
                                      src="/assets/img/icon/emoj-icon-02.svg"
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
                          </li>
                          <li>
                            <Link
                              to="#"
                              data-bs-toggle="modal"
                              data-bs-target="#forward-message"
                            >
                              <i className="bx bx-share" />
                            </Link>
                          </li>
                        </ul>
                      </div>
                      <div className="chat-voice-group">
                        <ul>
                          <li>
                            <Link to="#">
                              <span>
                                <ImageWithBasePath
                                  src="/assets/img/icon/play-01.svg"
                                  alt="image"
                                />
                              </span>
                            </Link>
                          </li>
                          <li>
                            <ImageWithBasePath
                              src="/assets/img/voice.svg"
                              alt="image"
                            />
                          </li>
                          <li>0:05</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="chat-avatar">
                    <ImageWithBasePath
                      src="/assets/img/avatar/avatar-10.jpg"
                      className="rounded-circle dreams_chat"
                      alt="image"
                    />
                  </div>
                </div> */}



                {/* <div className="chats">
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
                        <span className="check-star msg-star-three d-none">
                          <i className="bx bxs-star" />
                        </span>
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
                            <Link
                              to="#"
                              className="dropdown-item click-star-three"
                            >
                              <span>
                                <i className="bx bx-star" />
                              </span>
                              <span className="star-msg-three">
                                Star Message
                              </span>
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
                    <div className="message-content award-link chat-award-link">
                      <Link to="#">
                        https://www.youtube.com/watch?v=GCmL3mS0Psk
                      </Link>
                      <ImageWithBasePath src="/assets/img/award.jpg" alt="img" />
                      <div className="emoj-group">
                        <ul>
                          <li className="emoj-action">
                            <Link to="#">
                              <i className="bx bx-smile" />
                            </Link>
                            <div className="emoj-group-list">
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
                                      src="/assets/img/icon/emoj-icon-02.svg"
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
                          </li>
                          <li>
                            <Link
                              to="#"
                              data-bs-toggle="modal"
                              data-bs-target="#forward-message"
                            >
                              <i className="bx bx-share" />
                            </Link>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div> */}


                {/* <div className="chats chats-right">
                  <div className="chat-content">
                    <div className="chat-profile-name justify-content-end">
                      <h6>
                        <i className="bx bx-check-double me-1 active-check" />
                        Alex Smith<span>8:16 PM</span>
                        <span className="check-star msg-star-four d-none">
                          <i className="bx bxs-star" />
                        </span>
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
                            <Link
                              to="#"
                              className="dropdown-item click-star-four"
                            >
                              <span>
                                <i className="bx bx-star" />
                              </span>
                              <span className="star-msg-four">
                                Star Message
                              </span>
                            </Link>
                            <Link
                              to="#"
                              className="dropdown-item"
                              data-bs-toggle="modal"
                              data-bs-target="#edit-message"
                            >
                              <span>
                                <i className="bx bx-edit-alt" />
                              </span>
                              Edit
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
                    <div className="message-content fancy-msg-box">
                      <div className="emoj-group wrap-emoji-group ">
                        <ul>
                          <li className="emoj-action">
                            <Link to="#">
                              <i className="bx bx-smile" />
                            </Link>
                            <div className="emoj-group-list">
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
                                      src="/assets/img/icon/emoj-icon-02.svg"
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
                          </li>
                          <li>
                            <Link
                              to="#;"
                              data-bs-toggle="modal"
                              data-bs-target="#forward-message"
                            >
                              <i className="bx bx-share" />
                            </Link>
                          </li>
                        </ul>
                      </div>
                      <div className="download-col">
                        <ul className="nav mb-0">
                          <li>
                            <div className="image-download-col">
                              <Link
                                to="assets/img/media/media-big-02.jpg"
                                data-fancybox="gallery"
                                className="fancybox"
                              >
                                <ImageWithBasePath
                                  src="/assets/img/media/media-02.jpg"
                                  alt=""
                                />
                              </Link>
                            </div>
                          </li>
                          <li>
                            <div className="image-download-col ">
                              <Link
                                to="assets/img/media/media-big-03.jpg"
                                data-fancybox="gallery"
                                className="fancybox"
                              >
                                <ImageWithBasePath
                                  src="/assets/img/media/media-03.jpg"
                                  alt=""
                                />
                              </Link>
                            </div>
                          </li>
                          <li>
                            <div className="image-download-col image-not-download">
                              <Link
                                to="assets/img/media/media-big-01.jpg"
                                data-fancybox="gallery"
                                className="fancybox"
                              >
                                <ImageWithBasePath
                                  src="/assets/img/media/media-01.jpg"
                                  alt=""
                                />
                                <span>10+</span>
                              </Link>
                            </div>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="chat-avatar">
                    <ImageWithBasePath
                      src="/assets/img/avatar/avatar-10.jpg"
                      className="rounded-circle dreams_chat"
                      alt="image"
                    />
                  </div>
                </div> */}

                {/* 
                <div className="chats">
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
                        <span className="check-star msg-star-five d-none">
                          <i className="bx bxs-star" />
                        </span>
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
                            <Link
                              to="#"
                              className="dropdown-item click-star-five"
                            >
                              <span>
                                <i className="bx bx-star" />
                              </span>
                              <span className="star-msg-five">
                                Star Message
                              </span>
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
                    <div className="message-content review-files">
                      <p>
                        Please check and review the files
                        <span className="ms-1">
                          <ImageWithBasePath
                            src="/assets/img/icon/smile-chat.svg"
                            alt="Icon"
                          />
                        </span>
                      </p>
                      <div className="file-download d-flex align-items-center mb-0">
                        <div className="file-type d-flex align-items-center justify-content-center me-2">
                          <i className="bx bxs-file-doc" />
                        </div>
                        <div className="file-details">
                          <span className="file-name">Landing_page_V1.doc</span>
                          <ul>
                            <li>80 Bytes</li>
                            <li>
                              <Link to="#">Download</Link>
                            </li>
                          </ul>
                        </div>
                      </div>
                      <div className="emoj-group">
                        <ul>
                          <li className="emoj-action">
                            <Link to="#">
                              <i className="bx bx-smile" />
                            </Link>
                            <div className="emoj-group-list">
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
                                      src="/assets/img/icon/emoj-icon-02.svg"
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
                          </li>
                          <li>
                            <Link
                              to="#"
                              data-bs-toggle="modal"
                              data-bs-target="#forward-message"
                            >
                              <i className="bx bx-share" />
                            </Link>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="like-chat-grp">
                      <ul>
                        <li className="like-chat">
                          <Link to="#">
                            2
                            <ImageWithBasePath
                              src="/assets/img/icon/like.svg"
                              alt="Icon"
                            />
                          </Link>
                        </li>
                        <li className="comment-chat">
                          <Link to="#">
                            2
                            <ImageWithBasePath
                              src="/assets/img/icon/heart.svg"
                              alt="Icon"
                            />
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div> */}



                {/* <div className="chats">
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
                        <span className="check-star msg-star d-none">
                          <i className="bx bxs-star" />
                        </span>
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
                            <Link to="#" className="dropdown-item click-star">
                              <span>
                                <i className="bx bx-star" />
                              </span>
                              <span className="star-msg">Star Message</span>
                            </Link>
                            <Link
                              to="#"
                              className="dropdown-item"
                              data-bs-toggle="modal"
                              data-bs-target="#report-user"
                            >
                              <span>
                                <i className="bx bx-edit-alt" />
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
                    <div className="message-content reply-getcontent">
                      Thank you for your support
                      <div className="emoj-group">
                        <ul>
                          <li className="emoj-action">
                            <Link to="#">
                              <i className="bx bx-smile" />
                            </Link>
                            <div className="emoj-group-list">
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
                                      src="/assets/img/icon/emoj-icon-02.svg"
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
                          </li>
                          <li>
                            <Link
                              to="#;"
                              data-bs-toggle="modal"
                              data-bs-target="#forward-message"
                            >
                              <i className="bx bx-share" />
                            </Link>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div> */}


                {/* <div className="chats">
                  <div className="chat-avatar">
                    <ImageWithBasePath
                      src="/assets/img/avatar/avatar-2.jpg"
                      className="rounded-circle dreams_chat"
                      alt="image"
                    />
                  </div>
                  <div className="chat-content chat-cont-type">
                    <div className="chat-profile-name chat-type-wrapper">
                      <p>Mark Villiams Typing...</p>
                    </div>
                  </div>
                </div> */}



              </div>
            </div>
          </div>
          <div className="chat-footer">
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
        </div>
        {/* /Chat */}
        {/* Right sidebar */}
        {/* <div
          className="right-sidebar right_sidebar_profile right-side-contact hide-right-sidebar"
          id="middle1"
        >
          <div className="right-sidebar-wrap active">
            <div className="slimscroll">
              <div className="left-chat-title d-flex justify-content-between align-items-center border-bottom-0">
                <div className="fav-title mb-0">
                  <h6>Contact Info</h6>
                </div>
                <div className="contact-close_call text-end">
                  <Link to="#" className="close_profile close_profile4">
                    <span className="material-icons">close</span>
                  </Link>
                </div>
              </div>
              <div className="sidebar-body">
                <div className="mt-0 right_sidebar_logo">
                  <div className="text-center right-sidebar-profile">
                    <figure className="avatar avatar-xl mb-3">
                      <ImageWithBasePath
                        src="assets/img/avatar/avatar-2.jpg"
                        className="rounded-circle"
                        alt="image"
                      />
                    </figure>
                    <h5 className="profile-name">Mark Villiams</h5>
                    <div className="last-seen-profile">
                      <span>last seen at 07:15 PM</span>
                    </div>
                    <div className="chat-options chat-option-profile">
                      <ul className="list-inline">
                        <li
                          className="list-inline-item"
                          data-bs-toggle="tooltip"
                          data-bs-placement="bottom"
                          title="Voice Call"
                        >
                          <Link
                            to={routes.audioCall}
                            className="btn btn-outline-light "
                            data-bs-toggle="modal"
                            data-bs-target="#voice_call"
                          >
                            <i className="bx bx-phone" />
                          </Link>
                        </li>
                        <li
                          className="list-inline-item "
                          data-bs-toggle="tooltip"
                          data-bs-placement="bottom"
                          title="Video Call"
                        >
                          <Link
                            to={routes.videoCall}
                            className="btn btn-outline-light profile-open"
                            data-bs-toggle="modal"
                            data-bs-target="#voice_call"
                          >
                            <i className="bx bx-video" />
                          </Link>
                        </li>
                        <li className="list-inline-item">
                          <Link
                            to={routes.index}
                            className="btn btn-outline-light"
                            data-bs-toggle="tooltip"
                            data-bs-placement="bottom"
                            title="Chat"
                          >
                            <i className="bx bx-message-square-dots" />
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="chat-member-details">
                    <div className="member-details">
                      <ul>
                        <li>
                          <h5>Info</h5>
                        </li>
                        <li>
                          <h6>Bio</h6>
                          <span>Hello, I am using DreamsChat</span>
                        </li>
                        <li>
                          <h6>Phone</h6>
                          <span>555-555-21541</span>
                        </li>
                        <li>
                          <h6>Email Address</h6>
                          <span>info@example.com</span>
                        </li>
                        <li>
                          <h6>Social Media</h6>
                          <div className="social-icons ">
                            <Link
                              to="https://www.facebook.com/"
                              rel="noreferrer"
                              target="_blank"
                            >
                              <i className="bx bxl-facebook" />
                            </Link>
                            <Link
                              to="https://twitter.com/"
                              rel="noreferrer"
                              target="_blank"
                            >
                              <i className="bx bxl-twitter" />
                            </Link>
                            <Link
                              to="#"
                              rel="noreferrer"
                              target="_blank"
                            >
                              <i className="bx bxl-youtube" />
                            </Link>
                            <Link
                              to="https://in.linkedin.com/"
                              rel="noreferrer"
                              target="_blank"
                            >
                              <i className="bx bxl-linkedin" />
                            </Link>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div className="right-sidebar-head share-media">
                <div className="share-media-blk">
                  <h5>Shared Media</h5>
                  <Link to="#">View All</Link>
                </div>
                <div className="about-media-tabs">
                  <nav>
                    <div className="nav nav-tabs " id="nav-tab">
                      <Link
                        className="nav-item nav-link active"
                        id="nav-home-tab"
                        data-bs-toggle="tab"
                        to="#info"
                      >
                        Photos
                      </Link>
                      <Link
                        className="nav-item nav-link"
                        id="nav-profile-tab1"
                        data-bs-toggle="tab"
                        to="#Participants"
                      >
                        Videos
                      </Link>
                      <Link
                        className="nav-item nav-link"
                        id="nav-profile-tab2"
                        data-bs-toggle="tab"
                        to="#media"
                      >
                        File
                      </Link>
                      <Link
                        className="nav-item nav-link"
                        id="nav-profile-tab3"
                        data-bs-toggle="tab"
                        to="#link"
                      >
                        Link
                      </Link>
                    </div>
                  </nav>
                  <div className="tab-content pt-0" id="nav-tabContent">
                    <div className="tab-pane fade show active" id="info">
                      <ul className="nav share-media-img mb-0">
                        <li>
                          <Link
                            to="assets/img/media/media-big-01.jpg"
                            data-fancybox="gallery"
                            className="fancybox"
                          >
                            <ImageWithBasePath
                              src="assets/img/media/media-01.jpg"
                              alt=""
                            />
                          </Link>
                        </li>
                        <li>
                          <Link
                            to="assets/img/media/media-big-02.jpg"
                            data-fancybox="gallery"
                            className="fancybox"
                          >
                            <ImageWithBasePath
                              src="assets/img/media/media-02.jpg"
                              alt=""
                            />
                          </Link>
                        </li>
                        <li>
                          <Link
                            to="assets/img/media/media-big-03.jpg"
                            data-fancybox="gallery"
                            className="fancybox"
                          >
                            <ImageWithBasePath
                              src="assets/img/media/media-03.jpg"
                              alt=""
                            />
                          </Link>
                        </li>
                        <li>
                          <Link
                            to="assets/img/media/media-big-04.jpg"
                            data-fancybox="gallery"
                            className="fancybox"
                          >
                            <ImageWithBasePath
                              src="assets/img/media/media-04.jpg"
                              alt=""
                            />
                          </Link>
                        </li>
                        <li>
                          <Link
                            to="assets/img/media/media-05.jpg"
                            data-fancybox="gallery"
                            className="fancybox"
                          >
                            <ImageWithBasePath
                              src="assets/img/media/media-05.jpg"
                              alt=""
                            />
                          </Link>
                        </li>
                        <li className="blur-media">
                          <Link
                            to="assets/img/media/media-02.jpg"
                            data-fancybox="gallery"
                            className="fancybox"
                          >
                            <ImageWithBasePath
                              src="assets/img/media/media-02.jpg"
                              alt=""
                            />
                          </Link>
                          <span>+10</span>
                        </li>
                      </ul>
                    </div>
                    <div className="tab-pane fade" id="Participants">
                      <ul className="nav share-media-img mb-0">
                        <li>
                          <Link
                            to="https://www.youtube.com/embed/Mj9WJJNp5wA"
                            data-fancybox
                            className="fancybox"
                          >
                            <ImageWithBasePath
                              src="assets/img/media/media-01.jpg"
                              alt="img"
                            />
                            <span>
                              <i className="bx bx-play-circle" />
                            </span>
                          </Link>
                        </li>
                        <li>
                          <Link
                            to="https://www.youtube.com/embed/Mj9WJJNp5wA"
                            data-fancybox
                            className="fancybox"
                          >
                            <ImageWithBasePath
                              src="assets/img/media/media-02.jpg"
                              alt="img"
                            />
                            <span>
                              <i className="bx bx-play-circle" />
                            </span>
                          </Link>
                        </li>
                        <li>
                          <Link
                            to="https://www.youtube.com/embed/Mj9WJJNp5wA"
                            data-fancybox
                            className="fancybox"
                          >
                            <ImageWithBasePath
                              src="assets/img/media/media-03.jpg"
                              alt="img"
                            />
                            <span>
                              <i className="bx bx-play-circle" />
                            </span>
                          </Link>
                        </li>
                        <li>
                          <Link
                            to="https://www.youtube.com/embed/Mj9WJJNp5wA"
                            data-fancybox
                            className="fancybox"
                          >
                            <ImageWithBasePath
                              src="assets/img/media/media-04.jpg"
                              alt="img"
                            />
                            <span>
                              <i className="bx bx-play-circle" />
                            </span>
                          </Link>
                        </li>
                        <li>
                          <Link
                            to="https://www.youtube.com/embed/Mj9WJJNp5wA"
                            data-fancybox
                            className="fancybox"
                          >
                            <ImageWithBasePath
                              src="assets/img/media/media-05.jpg"
                              alt="img"
                            />
                            <span>
                              <i className="bx bx-play-circle" />
                            </span>
                          </Link>
                        </li>
                        <li className="blur-media">
                          <Link
                            to="https://www.youtube.com/embed/Mj9WJJNp5wA"
                            data-fancybox
                            className="fancybox"
                          >
                            <ImageWithBasePath
                              src="assets/img/media/media-03.jpg"
                              alt="img"
                            />
                          </Link>
                          <span>+10</span>
                        </li>
                      </ul>
                    </div>
                    <div className="tab-pane fade" id="media">
                      <div className="media-file">
                        <div className="media-doc-blk">
                          <span>
                            <i className="bx bxs-file-doc" />
                          </span>
                          <div className="document-detail">
                            <h6>Landing_page_V1.doc</h6>
                            <ul>
                              <li>12 Mar 2023</li>
                              <li>246.3 KB</li>
                            </ul>
                          </div>
                        </div>
                        <div className="media-download">
                          <Link to="#">
                            <i className="bx bx-download" />
                          </Link>
                        </div>
                      </div>
                      <div className="media-file">
                        <div className="media-doc-blk">
                          <span>
                            <i className="bx bxs-file-pdf" />
                          </span>
                          <div className="document-detail">
                            <h6>Design Guideless.pdf</h6>
                            <ul>
                              <li>12 Mar 2023</li>
                              <li>246.3 KB</li>
                            </ul>
                          </div>
                        </div>
                        <div className="media-download">
                          <Link to="#">
                            <i className="bx bx-download" />
                          </Link>
                        </div>
                      </div>
                      <div className="media-file">
                        <div className="media-doc-blk">
                          <span>
                            <i className="bx bxs-file" />
                          </span>
                          <div className="document-detail">
                            <h6>sample site.txt</h6>
                            <ul>
                              <li>12 Mar 2023</li>
                              <li>246.3 KB</li>
                            </ul>
                          </div>
                        </div>
                        <div className="media-download">
                          <Link to="#">
                            <i className="bx bx-download" />
                          </Link>
                        </div>
                      </div>
                    </div>
                    <div className="tab-pane fade" id="link">
                      <div className="media-link-grp">
                        <div className="link-img">
                          <Link to="#">
                            <ImageWithBasePath
                              src="assets/img/media-link-01.jpg"
                              alt="Img"
                            />
                          </Link>
                        </div>
                        <div className="media-link-detail">
                          <h6>
                            <Link to="#">
                              Digital Marketing Guide
                            </Link>
                          </h6>
                          <span>
                            <Link to="#">
                              https://elements.envato.com/all-items/blog
                            </Link>
                          </span>
                        </div>
                      </div>
                      <div className="media-link-grp mb-0">
                        <div className="link-img">
                          <Link to="#">
                            <ImageWithBasePath
                              src="assets/img/media-link-02.jpg"
                              alt="Img"
                            />
                          </Link>
                        </div>
                        <div className="media-link-detail">
                          <h6>
                            <Link to="#">Blog Post</Link>
                          </h6>
                          <span>
                            <Link to="#">
                              https://elements.envato.com/blog-post-TXQ5FB8
                            </Link>
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="group-comman-theme">
                <h6>2 Group in Common</h6>
                <ul>
                  <li>
                    <div className="avatar">
                      <ImageWithBasePath
                        src="assets/img/avatar/avatar-14.png"
                        className="rounded-circle"
                        alt="image"
                      />
                    </div>
                    <div className="theme-content">
                      <h6>Themeforest Group</h6>
                      <p>Mark Villiams, Elizabeth, Michael....</p>
                    </div>
                  </li>
                  <li>
                    <div className="avatar">
                      <ImageWithBasePath
                        src="assets/img/avatar/avatar-15.png"
                        className="rounded-circle"
                        alt="image"
                      />
                    </div>
                    <div className="theme-content">
                      <h6>Graphic Designers</h6>
                      <p>Mark Villiams, Elizabeth, Michael....</p>
                    </div>
                  </li>
                </ul>
              </div>
              <div className="chat-message-grp">
                <ul>
                  <li>
                    <Link to="#" className="star-message-left">
                      <div className="stared-group">
                        <span className="star-message">
                          {" "}
                          <i className="bx bxs-star" />
                        </span>
                        <h6>Starred Messages</h6>
                      </div>
                      <div className="count-group">
                        <span>10</span>
                        <i className="feather-chevron-right" />
                      </div>
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="#"
                      data-bs-toggle="modal"
                      data-bs-target="#mute-notification"
                    >
                      <div className="stared-group">
                        <span className="mute-message">
                          {" "}
                          <i className="bx bxs-microphone-off" />
                        </span>
                        <h6>Mute Notifications</h6>
                      </div>
                      <div className="count-group">
                        <i className="feather-chevron-right" />
                      </div>
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="#"
                      data-bs-toggle="modal"
                      data-bs-target="#block-user"
                    >
                      <div className="stared-group">
                        <span className="block-message">
                          {" "}
                          <i className="bx bx-block" />
                        </span>
                        <h6>Block User</h6>
                      </div>
                      <div className="count-group">
                        <i className="feather-chevron-right" />
                      </div>
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="#"
                      data-bs-toggle="modal"
                      data-bs-target="#report-user"
                    >
                      <div className="stared-group">
                        <span className="report-message">
                          {" "}
                          <i className="bx bx-dislike" />
                        </span>
                        <h6>Report User</h6>
                      </div>
                      <div className="count-group">
                        <i className="feather-chevron-right" />
                      </div>
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="#"
                      data-bs-toggle="modal"
                      data-bs-target="#delete-user"
                    >
                      <div className="stared-group">
                        <span className="delete-message">
                          {" "}
                          <i className="bx bx-trash" />
                        </span>
                        <h6>Delete Chat</h6>
                      </div>
                      <div className="count-group">
                        <i className="feather-chevron-right" />
                      </div>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div> */}
        {/* Right sidebar */}
        {/* Star Message Right sidebar */}
        {/* <div
          className="right-sidebar right_side_star hide-right-sidebar"
          id="middle2"
        >
          <div className="right-sidebar-wrap active">
            <div className="slimscroll">
              <div className="left-chat-title d-flex justify-content-between align-items-center border-bottom-0">
                <div className="fav-title mb-0">
                  <h6>
                    <Link to="#" className="remove-star-message d-flex">
                      <i className="bx bx-arrow-back me-2" />
                    </Link>
                    Starred Messages
                  </h6>
                </div>
                <div className="star-drop">
                  <Link
                    className="btn btn-outline-light"
                    to="#"
                    data-bs-toggle="dropdown"
                  >
                    <i className="bx bx-dots-vertical-rounded" />
                  </Link>
                  <div className="dropdown-menu dropdown-menu-end">
                    <Link to="#" className="dropdown-item ">
                      <span>
                        <i className="feather-star" />
                      </span>
                      Unstar All{" "}
                    </Link>
                  </div>
                </div>
              </div>
              <div className="sidebar-body chat star-chat-group">
                <div className="chat-body">
                  <div className="messages">
                    <div className="chats">
                      <div className="chat-avatar">
                        <ImageWithBasePath
                          src="assets/img/avatar/avatar-2.jpg"
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
                              <Link
                                className="#"
                                to="#"
                                data-bs-toggle="dropdown"
                              >
                                <i className="bx bx-dots-horizontal-rounded" />
                              </Link>
                              <div className="dropdown-menu chat-drop-menu dropdown-menu-end">
                                <Link to="#" className="dropdown-item ">
                                  <span>
                                    <i className="bx bx-info-circle" />
                                  </span>
                                  Message Info{" "}
                                </Link>
                                <Link
                                  to="#"
                                  className="dropdown-item reply-button"
                                >
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
                                  Unstar Message
                                </Link>
                                <Link to="#" className="dropdown-item">
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
                        <div className="message-content mb-2">
                          Hello <Link to="#">@Alex</Link> Thank you
                          for the beautiful web design ahead schedule.
                        </div>
                        <div className="message-star">
                          <div className="avatar">
                            <ImageWithBasePath
                              src="assets/img/avatar/avatar-4.jpg"
                              className="rounded-circle"
                              alt="Icon"
                            />
                          </div>
                          <h6>
                            Alex Smith
                            <span className="ms-1">
                              <i className="fa-solid fa-star" />
                            </span>
                          </h6>
                        </div>
                      </div>
                    </div>
                    <div className="chats">
                      <div className="chat-avatar">
                        <ImageWithBasePath
                          src="assets/img/avatar/avatar-2.jpg"
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
                              <Link
                                className="#"
                                to="#"
                                data-bs-toggle="dropdown"
                              >
                                <i className="bx bx-dots-horizontal-rounded" />
                              </Link>
                              <div className="dropdown-menu chat-drop-menu dropdown-menu-end">
                                <Link to="#" className="dropdown-item ">
                                  <span>
                                    <i className="bx bx-info-circle" />
                                  </span>
                                  Message Info{" "}
                                </Link>
                                <Link
                                  to="#"
                                  className="dropdown-item reply-button"
                                >
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
                                  Unstar Message
                                </Link>
                                <Link to="#" className="dropdown-item">
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
                        <div className="message-content mb-2 award-link">
                          <Link to="#">
                            https://www.youtube.com/watch?v=GCmL3mS0Psk
                          </Link>
                          <ImageWithBasePath
                            src="assets/img/award.jpg"
                            alt="img"
                          />
                        </div>
                        <div className="message-star">
                          <div className="avatar">
                            <ImageWithBasePath
                              src="assets/img/avatar/avatar-4.jpg"
                              className="rounded-circle"
                              alt="Icon"
                            />
                          </div>
                          <h6>
                            Alex Smith
                            <span className="ms-1">
                              <i className="fa-solid fa-star" />
                            </span>
                          </h6>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div> */}
        {/* Star Message Right sidebar */}
        {/* Message Info Right sidebar */}
        {/* <div
          className="right-sidebar right_sidebar_info hide-right-sidebar"
          id="middle3"
        >
          <div className="right-sidebar-wrap active">
            <div className="slimscroll">
              <div className="left-chat-title d-flex justify-content-between align-items-center border-bottom-0">
                <div className="fav-title mb-0">
                  <h6>
                    <Link to="#" className="remove-message-info">
                      <i className="bx bx-arrow-back me-2" />
                    </Link>
                    Messages Info
                  </h6>
                </div>
                <div className="star-drop">
                  <Link
                    className="btn btn-outline-light"
                    to="#"
                    data-bs-toggle="dropdown"
                  >
                    <i className="bx bx-dots-vertical-rounded" />
                  </Link>
                  <div className="dropdown-menu dropdown-menu-end">
                    <Link to="#" className="dropdown-item ">
                      <span>
                        <i className="bx bx-x" />
                      </span>
                      Close Chat{" "}
                    </Link>
                    <Link
                      to="#"
                      className="dropdown-item"
                      data-bs-toggle="modal"
                      data-bs-target="#mute-notification"
                    >
                      <span>
                        <i className="bx bx-volume-mute" />
                      </span>
                      Mute Notification
                    </Link>
                    <Link
                      to="#"
                      className="dropdown-item"
                      data-bs-toggle="modal"
                      data-bs-target="#disappearing-messages"
                    >
                      <span>
                        <i className="bx bx-time-five" />
                      </span>
                      Disappearing Message
                    </Link>
                    <Link
                      to="#"
                      className="dropdown-item"
                      data-bs-toggle="modal"
                      data-bs-target="#clear-chat"
                    >
                      <span>
                        <i className="bx bx-brush-alt" />
                      </span>
                      Clear Message
                    </Link>
                    <Link
                      to="#"
                      className="dropdown-item"
                      data-bs-toggle="modal"
                      data-bs-target="#change-chat"
                    >
                      <span>
                        <i className="bx bx-trash" />
                      </span>
                      Delete Chat
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
                      data-bs-target="#block-user"
                    >
                      <span>
                        <i className="bx bx-block" />
                      </span>
                      Block
                    </Link>
                  </div>
                </div>
              </div>
              <div className="sidebar-body chat star-chat-group">
                <div className="chat-body">
                  <div className="messages">
                    <div className="chats">
                      <div className="chat-avatar ps-0">
                        <ImageWithBasePath
                          src="assets/img/avatar/avatar-2.jpg"
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
                              <Link
                                className="#"
                                to="#"
                                data-bs-toggle="dropdown"
                              >
                                <i className="bx bx-dots-horizontal-rounded" />
                              </Link>
                              <div className="dropdown-menu chat-drop-menu dropdown-menu-end">
                                <Link to="#" className="dropdown-item ">
                                  <span>
                                    <i className="bx bx-info-circle" />
                                  </span>
                                  Message Info{" "}
                                </Link>
                                <Link
                                  to="#"
                                  className="dropdown-item reply-button"
                                >
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
                                <Link to="#" className="dropdown-item">
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
                          <Link
                            to="#"
                            className="ms-1 d-flex chev-icon"
                          >
                            <i className="bx bx-chevron-right" />
                          </Link>
                        </div>
                        <div className="message-content fancy-msg-box">
                          <div className="download-col">
                            <ul className="nav mb-0">
                              <li>
                                <div className="image-download-col">
                                  <Link
                                    to="assets/img/media/media-01.jpg"
                                    data-fancybox="gallery"
                                    className="fancybox"
                                  >
                                    <ImageWithBasePath
                                      src="assets/img/media/media-01.jpg"
                                      alt=""
                                    />
                                  </Link>
                                </div>
                              </li>
                              <li>
                                <div className="image-download-col ">
                                  <Link
                                    to="assets/img/media/media-02.jpg"
                                    data-fancybox="gallery"
                                    className="fancybox"
                                  >
                                    <ImageWithBasePath
                                      src="assets/img/media/media-02.jpg"
                                      alt=""
                                    />
                                  </Link>
                                </div>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="message-info-box">
                      <h6>
                        <span className="material-icons check-active">
                          done_all
                        </span>
                        Read
                      </h6>
                      <span>Today at 7:12 AM</span>
                    </div>
                    <div className="message-info-box">
                      <h6>
                        <span className="material-icons check">done_all</span>
                        Delivered
                      </h6>
                      <span>Today at 7:09 AM</span>
                    </div>
                    <div className="message-info-box">
                      <h6>
                        <i className="feather-check sent" />
                        Sent
                      </h6>
                      <span>Today at 7:09 AM</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div> */}
        {/* Message Right sidebar */}
      </div>
      {/* /Content */}
      {/* Mute */}
      <div className="modal fade mute-notify" id="mute-notification">
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Mute Notifications</h5>
              <button
                type="button"
                className="close"
                data-bs-dismiss="modal"
                aria-label="Close"
              >
                <span className="material-icons">close</span>
              </button>
            </div>
            <div className="modal-body">
              <form action="#">
                <div className="notify-check">
                  <div className="form-check d-flex align-items-center justify-content-start ps-0">
                    <label className="group-type-radio">
                      30 Minutes
                      <input type="radio" name="radio" />
                      <span className="checkmark" />
                    </label>
                  </div>
                  <div className="form-check d-flex align-items-center justify-content-start ps-0">
                    <label className="group-type-radio">
                      1 Hour
                      <input type="radio" name="radio" />
                      <span className="checkmark" />
                    </label>
                  </div>
                  <div className="form-check d-flex align-items-center justify-content-start ps-0">
                    <label className="group-type-radio">
                      1 Day
                      <input type="radio" name="radio" />
                      <span className="checkmark" />
                    </label>
                  </div>
                  <div className="form-check d-flex align-items-center justify-content-start ps-0">
                    <label className="group-type-radio">
                      1 Week
                      <input type="radio" name="radio" />
                      <span className="checkmark" />
                    </label>
                  </div>
                  <div className="form-check d-flex align-items-center justify-content-start ps-0">
                    <label className="group-type-radio">
                      1 Month
                      <input type="radio" name="radio" />
                      <span className="checkmark" />
                    </label>
                  </div>
                  <div className="form-check d-flex align-items-center justify-content-start ps-0">
                    <label className="group-type-radio">
                      1 Year
                      <input type="radio" name="radio" />
                      <span className="checkmark" />
                    </label>
                  </div>
                  <div className="form-check d-flex align-items-center justify-content-start ps-0">
                    <label className="group-type-radio">
                      Always
                      <input type="radio" name="radio" />
                      <span className="checkmark" />
                    </label>
                  </div>
                </div>
                <div className="mute-chat-btn">
                  <button
                    type="submit"
                    className="btn btn-secondary"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="btn btn-primary"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                  >
                    Mute
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      {/* /Mute */}
      {/* Block */}
      <div className="modal fade" id="block-user">
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Block Mark Villiams</h5>
              <button
                type="button"
                className="close"
                data-bs-dismiss="modal"
                aria-label="Close"
              >
                <span className="material-icons">close</span>
              </button>
            </div>
            <div className="modal-body">
              <div className="block-user-blk text-center">
                <i className="bx bx-block change-color " />
                <p>
                  Blocked contacts will no longer be able to call you or send
                  you messages.
                </p>
              </div>
              <div className="mute-chat-btn justify-content-center">
                <Link
                  className="btn btn-secondary"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                >
                  Cancel
                </Link>
                <Link
                  className="btn btn-primary"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                >
                  Block
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* /Block */}
      {/* Report */}
      <div className="modal fade" id="report-user">
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Report Mark Villiams</h5>
              <button
                type="button"
                className="close"
                data-bs-dismiss="modal"
                aria-label="Close"
              >
                <span className="material-icons">close</span>
              </button>
            </div>
            <div className="modal-body">
              <div className="block-user-blk text-center">
                <ImageWithBasePath
                  src="assets/img/icon/report-01.svg"
                  alt="icon"
                />
                <p>
                  If you block this contact and clear the chat, messages will
                  only be removed from this device and your devices on the newer
                  versions of DreamsChat
                </p>
                <div className="notify-check">
                  <div className="form-check d-flex align-items-center justify-content-center ps-0">
                    <label className="custom-check mt-0 mb-0">
                      <span className="remember-me">Report Contact</span>
                      <input type="checkbox" name="remeber" />
                      <span className="checkmark" />
                    </label>
                  </div>
                </div>
              </div>
              <div className="mute-chat-btn justify-content-center">
                <Link
                  className="btn btn-secondary"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                >
                  Cancel
                </Link>
                <Link
                  className="btn btn-primary"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                >
                  Report
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* /Report */}
      {/* Edit */}
      <div className="modal fade" id="edit-message">
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Edit Message</h5>
              <button
                type="button"
                className="close"
                data-bs-dismiss="modal"
                aria-label="Close"
              >
                <span className="material-icons">close</span>
              </button>
            </div>
            <div className="modal-body">
              <div className="edit-msg-blk text-center mb-3">
                <form action="#">
                  <div className="msg-input">
                    <input
                      type="text"
                      className="form-control"
                      defaultValue="How Are You?"
                    />
                  </div>
                  <button className="btn send-btn ms-2" type="submit">
                    <i className="bx bx-paper-plane" />
                  </button>
                </form>
              </div>
              <div className="mute-chat-btn">
                <Link
                  className="btn btn-secondary"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                >
                  <i className="bx bx-x" /> Cancel
                </Link>
                <Link
                  className="btn btn-primary"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                >
                  <i className="bx bx-pencil me-1" />
                  Edit
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* /Edit */}
      {/* Delete */}
      <div className="modal fade" id="delete-user">
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Delete Chat</h5>
              <button
                type="button"
                className="close"
                data-bs-dismiss="modal"
                aria-label="Close"
              >
                <span className="material-icons">close</span>
              </button>
            </div>
            <div className="modal-body">
              <div className="block-user-blk text-center">
                <i className="bx bx-trash change-color " />
                <p>
                  Clearing or deleting entire chats will only remove messages
                  from this device and your devices on the newer versions of
                  DreamsChat.
                </p>
              </div>
              <div className="mute-chat-btn justify-content-center">
                <Link
                  className="btn btn-secondary"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                >
                  Cancel
                </Link>
                <Link
                  className="btn btn-primary"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                >
                  Delete
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* /Delete */}
      {/* Disappearing Messages */}
      <div className="modal fade" id="disappearing-messages">
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Disappearing messages</h5>
              <button
                type="button"
                className="close"
                data-bs-dismiss="modal"
                aria-label="Close"
              >
                <span className="material-icons">close</span>
              </button>
            </div>
            <div className="modal-body">
              <form action="#">
                <div className="block-user-blk">
                  <p>
                    For more privacy and storage, all new messages will
                    disappear from this chat for everyone after the selected
                    duration, except when kept. Anyone in the chat can change
                    this setting.
                  </p>
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
                  <button
                    type="submit"
                    className="btn btn-secondary"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="btn btn-primary"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                  >
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
              <h5 className="modal-title">Delete Chat</h5>
              <button
                type="button"
                className="close"
                data-bs-dismiss="modal"
                aria-label="Close"
              >
                <span className="material-icons">close</span>
              </button>
            </div>
            <div className="modal-body">
              <div className="block-user-blk text-center">
                <i className="bx bx-trash change-color " />
                <p>
                  Clearing or deleting entire chats will only remove messages
                  from this device and your devices on the newer versions of
                  DreamsChat.
                </p>
              </div>
              <div className="mute-chat-btn justify-content-center">
                <Link
                  className="btn btn-secondary"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                >
                  Cancel
                </Link>
                <Link
                  className="btn btn-primary"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                >
                  Delete
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* /Deleting a Chat */}
      {/*Clear Chat */}
      <div className="modal fade" id="clear-chat">
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Clear Chat</h5>
              <button
                type="button"
                className="close"
                data-bs-dismiss="modal"
                aria-label="Close"
              >
                <span className="material-icons">close</span>
              </button>
            </div>
            <div className="modal-body">
              <div className="block-user-blk text-center">
                <i className="bx bx-trash change-color " />
                <p>
                  Clearing or deleting entire chats will only remove messages
                  from this device and your devices on the newer versions of
                  DreamsChat.
                </p>
              </div>
              <div className="mute-chat-btn justify-content-center">
                <Link
                  className="btn btn-secondary"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                >
                  Cancel
                </Link>
                <Link
                  className="btn btn-primary"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                >
                  Clear
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* /Clear a Chat */}
      {/* Forward Message To */}
      <div className="modal fade " id="forward-message">
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Forward Message To</h5>
              <button
                type="button"
                className="close"
                data-bs-dismiss="modal"
                aria-label="Close"
              >
                <span className="material-icons">close</span>
              </button>
            </div>
            <div className="modal-body">
              <form action="#">
                <div className="user-block-group mb-4">
                  <div className="search_chat has-search">
                    <span className="fas fa-search form-control-feedback" />
                    <input
                      className="form-control chat_input"
                      id="search-contact"
                      type="text"
                      placeholder="Search"
                    />
                  </div>
                  <h5>Recent Chats</h5>
                  <div className="recent-block-group">
                    <div className="user-block-profile">
                      <div className="avatar">
                        <ImageWithBasePath
                          src="assets/img/avatar/avatar-1.jpg"
                          className="rounded-circle"
                          alt="image"
                        />
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
                        <ImageWithBasePath
                          src="assets/img/avatar/avatar-2.jpg"
                          className="rounded-circle"
                          alt="image"
                        />
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
                        <ImageWithBasePath
                          src="assets/img/avatar/avatar-3.jpg"
                          className="rounded-circle"
                          alt="image"
                        />
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
                        <ImageWithBasePath
                          src="assets/img/avatar/avatar-4.jpg"
                          className="rounded-circle"
                          alt="image"
                        />
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
                  <button
                    type="submit"
                    className="btn btn-secondary"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                  >
                    <i className="feather-x me-1" />
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="btn btn-primary"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                  >
                    <ImageWithBasePath
                      src="assets/img/icon/send.svg"
                      className="me-1"
                      alt="image"
                    />
                    Send
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      {/* /Forward Message To */}
      {/* Delete Message To */}
      <div className="modal fade " id="delete-message">
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content delete-model-head">
            <div className="modal-header">
              <h5 className="modal-title">Delete Message</h5>
              <button
                type="button"
                className="close"
                data-bs-dismiss="modal"
                aria-label="Close"
              >
                <span className="material-icons">close</span>
              </button>
            </div>
            <div className="modal-body">
              <div className="notify-check delete-chat-notify">
                <div className="form-check d-flex align-items-center justify-content-start ps-0">
                  <label className="custom-check mt-0 mb-0">
                    <span className="remember-me">Delete for Me</span>
                    <input type="checkbox" name="remeber" defaultChecked />
                    <span className="checkmark" />
                  </label>
                </div>
                <div className="form-check d-flex align-items-center justify-content-start ps-0">
                  <label className="custom-check mt-0 mb-0">
                    <span className="remember-me">Delete for Everyone</span>
                    <input type="checkbox" name="remeber" />
                    <span className="checkmark" />
                  </label>
                </div>
              </div>
              <div className="mute-chat-btn delete-pop-btn justify-content-end">
                <Link
                  className="btn btn-secondary"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                >
                  <i className="feather-x me-1" />
                  Cancel
                </Link>
                <Link
                  className="btn btn-primary"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                >
                  <i className="bx bx-trash me-1" />
                  Delete
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* /Delete Message To */}
      {/* New Chat */}
      <div className="modal fade " id="new-chat">
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">New Chat</h5>
              <button
                type="button"
                className="close"
                data-bs-dismiss="modal"
                aria-label="Close"
              >
                <span className="material-icons">close</span>
              </button>
            </div>
            <div className="modal-body">
              <form action="#">
                <div className="user-block-group mb-4">
                  <div className="search_chat has-search">
                    <span className="fas fa-search form-control-feedback" />
                    <input
                      className="form-control chat_input"
                      id="search-contacted"
                      type="text"
                      placeholder="Search"
                    />
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
                            <ImageWithBasePath
                              src="/assets/img/avatar/avatar-4.jpg"
                              className="rounded-circle"
                              alt="image"
                            />
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
                            <ImageWithBasePath
                              src="/assets/img/avatar/avatar-5.jpg"
                              className="rounded-circle"
                              alt="image"
                            />
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
                            <ImageWithBasePath
                              src="/assets/img/avatar/avatar-10.jpg"
                              className="rounded-circle"
                              alt="image"
                            />
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
                            <ImageWithBasePath
                              src="/assets/img/avatar/avatar-12.jpg"
                              className="rounded-circle"
                              alt="image"
                            />
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
                  <button
                    type="submit"
                    className="btn btn-secondary"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                  >
                    <i className="feather-x me-1" />
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="btn btn-primary"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                  >
                    <ImageWithBasePath
                      src="/assets/img/icon/send.svg"
                      className="me-1"
                      alt="image"
                    />
                    Chat
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
              <h5 className="modal-title">New Group</h5>
              <button
                type="button"
                className="close"
                data-bs-dismiss="modal"
                aria-label="Close"
              >
                <span className="material-icons">close</span>
              </button>
            </div>
            <div className="modal-body">
              <form>
                <div className="new-group-add show-group-add">
                  <div className="user-profiles-group mb-4">
                    <div className="profile-cover text-center">
                      <label
                        className="profile-cover-avatar"
                        htmlFor="avatar_upload"
                      >
                        <ImageWithBasePath
                          className="avatar-img"
                          src="/assets/img/avatar/avatar-2.jpg"
                          alt="Profile Image"
                        />
                        <input type="file" id="avatar_upload" />
                        <span className="avatar-edit">
                          <ImageWithBasePath
                            src="/assets/img/icon/camera.svg"
                            alt="Image"
                          />
                        </span>
                      </label>
                    </div>
                    <div className="pass-login">
                      <label className="form-label">Group Name </label>
                      <input
                        type="password"
                        className="form-control pass-input"
                      />
                    </div>
                    <div className="pass-login">
                      <label className="form-label">Description </label>
                      <textarea className="form-control " defaultValue={""} />
                    </div>
                    <div className="pass-login">
                      <h4>Group Type</h4>
                      <div className="d-flex align-items-center">
                        <label className="group-type-radio">
                          Public
                          <input
                            type="radio"
                            defaultChecked="checked"
                            name="radio"
                          />
                          <span className="checkmark" />
                        </label>
                        <label className="group-type-radio">
                          Private
                          <input type="radio" name="radio" />
                          <span className="checkmark" />
                        </label>
                      </div>
                    </div>
                  </div>
                  <div className="mute-chat-btn">
                    <Link
                      className="btn btn-secondary"
                      data-bs-dismiss="modal"
                      aria-label="Close"
                    >
                      <i className="feather-x me-1" />
                      Cancel
                    </Link>
                    <Link className="btn btn-primary" id="next-parti">
                      <i className="feather-arrow-right me-1" />
                      Next
                    </Link>
                  </div>
                </div>
                <div className="parti-group hash-participant">
                  <div className="user-block-group mb-4">
                    <div className="search_chat has-search group-name-search">
                      <span className="fas fa-search form-control-feedback" />
                      <input
                        className="form-control chat_input"
                        id="search-contact-one"
                        type="text"
                        placeholder="Search"
                      />
                    </div>
                    {/* <div class=" parti-wrapper">
                                          <ImageWithBasePath src="./assets/img/avatar/group-01.png" alt="Img" class="img-fluid me-2">
                                          <ImageWithBasePath src="./assets/img/avatar/group-02.png" alt="Img" class="img-fluid">
                                      </div> */}
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
                              <ImageWithBasePath
                                src="/assets/img/avatar/avatar-4.jpg"
                                className="rounded-circle"
                                alt="image"
                              />
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
                              <ImageWithBasePath
                                src="/assets/img/avatar/avatar-5.jpg"
                                className="rounded-circle"
                                alt="image"
                              />
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
                              <ImageWithBasePath
                                src="/assets/img/avatar/avatar-10.jpg"
                                className="rounded-circle"
                                alt="image"
                              />
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
                              <ImageWithBasePath
                                src="/assets/img/avatar/avatar-12.jpg"
                                className="rounded-circle"
                                alt="image"
                              />
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
                                  <input
                                    type="checkbox"
                                    name="remeber"
                                    defaultChecked
                                  />
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
                      <i className="bx bx-left-arrow-alt me-1" />
                      Previous
                    </Link>
                    <Link
                      className="btn btn-primary"
                      data-bs-dismiss="modal"
                      aria-label="Close"
                      data-bs-toggle="modal"
                      data-bs-target="#Success-group"
                    >
                      <i className="bx bx-send me-1" />
                      Create
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
      <div className="modal fade " id="Success-group">
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content success-group-wrap-list">
            <div className="modal-header">
              <div className="success-pass mx-auto">
                <ImageWithBasePath
                  src="/assets/img/avatar/avatar-16.png"
                  alt="Success"
                  className="img-fluid"
                />
              </div>
            </div>
            <div className="modal-body">
              <div className="success-header">
                <h4>Success</h4>
                <p>Group Created Successfully</p>
              </div>
              <Link
                className="btn btn-primary"
                data-bs-dismiss="modal"
                aria-label="Close"
              >
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
              <h5 className="modal-title">Invite Friends</h5>
              <button
                type="button"
                className="close"
                data-bs-dismiss="modal"
                aria-label="Close"
              >
                <span className="material-icons">close</span>
              </button>
            </div>
            <div className="modal-body">
              <form action="#">
                <div className="user-profiles-group mb-4">
                  <div className="pass-login">
                    <label className="form-label">
                      Email Address or Phone Number
                    </label>
                    <input
                      type="password"
                      className="form-control pass-input"
                    />
                  </div>
                  <div className="pass-login">
                    <label className="form-label">Invitation Message </label>
                    <textarea className="form-control " defaultValue={""} />
                  </div>
                </div>
                <div className="mute-chat-btn">
                  <button
                    type="submit"
                    className="btn btn-secondary"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                  >
                    <i className="feather-x me-1" />
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="btn btn-primary"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                  >
                    <i className="bx bx-send me-1" />
                    Send Invitation
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      {/* /Invite */}
      {/* Video Call */}
      <div className="modal fade" id="video_call" role="document">
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content voice_content">
            <div className="modal-body voice_body">
              <div className="call-box incoming-box">
                <div className="call-wrapper">
                  <div className="call-inner">
                    <div className="call-user">
                      <ImageWithBasePath
                        alt="User Image"
                        src="/assets/img/avatar/avatar-2.jpg"
                        className="call-avatar"
                      />
                      <h4>
                        Mark Villiams <span>Video Calling</span>
                      </h4>
                    </div>
                    <div className="call-items">
                      <Link
                        to="#"
                        className="btn call-item call-end"
                        data-bs-dismiss="modal"
                      >
                        <i className="bx bx-x" />
                      </Link>
                      <Link
                        to={routes.videoCall}
                        className="btn call-item call-start"
                      >
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
                      <ImageWithBasePath
                        alt="User Image"
                        src="/assets/img/avatar/avatar-2.jpg"
                        className="call-avatar"
                      />
                      <h4>
                        Mark Villiams <span>Voice Calling</span>
                      </h4>
                    </div>
                    <div className="call-items">
                      <Link
                        to="#"
                        className="btn call-item call-end"
                        data-bs-dismiss="modal"
                      >
                        <i className="bx bx-x" />
                      </Link>
                      <Link
                        to={routes.audioCall}
                        className="btn call-item call-start"
                      >
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
    </>
  );
};

export default AllChat;
