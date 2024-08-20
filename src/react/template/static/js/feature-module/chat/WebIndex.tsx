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

import AVATAR2 from '../../../../../../react/template/assets/img/avatar/avatar-17.png'
import AVATAR1 from '../../../../../../react/template/assets/img/avatar/avatar-17.png'

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
  fromClient: boolean; // New property to indicate if the message is from the client
}
const WebIndex = (props) => {

  const [showContent, setShowContent] = useState(false);
  const buttonRef = useRef(null); // Create a ref for the button
  // const [messages, setMessages] = useState<string[]>([]);
  const [inputText, setInputText] = useState("");
  const [messageId, setMessageId] = useState(''); // Unique ID for the message
  const [messages, setMessages] = useState<Message[]>([]);

  const [deliveryStatus, setDeliveryStatus] = useState<string | null>(null);
  const [socketClient, setSocketClient] = useState<any>(null);
  // const recipientPhoneNumber = ''; // Set the actual recipient's phone number
  const [recipientPhoneNumber, setrecipientPhoneNumber] = useState(''); // Unique ID for the message
  

  const [selectedChatId, setSelectedChatId] = useState(null);







  const routes = all_routes;
  const [chats, setChats] = useState([
    {
      id: 1,
      name: 'Faisal Ijaz',
      lastText: 'Have you called them?',
      lastTextTime: '10:20 PM',
      image: '/assets/img/avatar/avatar-17.png',
      email: 'faiaalijaz@skm.org.pk',
      phone: '923008881409',
      address: 'skm.org.pk'
    },

    {
      id: 2,
      name: 'Muhammad Nadeem',
      lastText: '',
      lastTextTime: '',
      image: '/assets/img/avatar/avatar-17.png',
      email: 'faisalijaz@skm.org.pk',
      phone: '923234877174',
      address: 'skm.org.pk'
    },
    {
      id: 3,
      name: 'Ghulam Mehmood',
      lastText: '',
      lastTextTime: '',
      image: '/assets/img/avatar/avatar-17.png',
      email: 'gmehmood@skm.org.pk',
      phone: '923025748598',
      address: 'skm.org.pk'
    },
    {
      id: 4,
      name: 'Waqas Ali',
      lastText: '',
      lastTextTime: '',
      image: '/assets/img/avatar/avatar-17.png',
      email: 'waqasali@skm.org.pk',
      phone: '923214872551',
      address: 'skm.org.pk'
    },
    // Add more contacts as needed
    // your contacts data...
  ]);

  const [pinchats, setpinChats] = useState([
    {
      id: 1,
      name: 'Faisal Ijaz',
      lastText: 'Have you called them?',
      lastTextTime: '10:20 PM',
      image: '/assets/img/avatar/avatar-17.png',
      email: 'nadeem@skm.org.pk',
      phone: '+923234877174',
      address: 'skm.org.pk'
    }
  ]);
  const [selectedChat, setselectedChat] = useState(null);

  const [selectedpinChat, setselectedpinChat] = useState(null);

  const [visible, setVisible] = useState(false);

  const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth < 992);


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
        const url = `https://testchat-production.up.railway.app/api/whatsapp/send-template-message?templateName=message_test&recipientPhoneNumber=${recipientPhoneNumber}&parameter=${encodeURIComponent(inputText.trim())}`;

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
            fromClient: false
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
    window.addEventListener('resize', handleResize);
    if(props.contactinfo){
      setrecipientPhoneNumber(props.contactinfo.phone)
setselectedpinChat(props.contactinfo)    }

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

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
  const handleSelectpinChat = (pinchat) => {
    setrecipientPhoneNumber(pinchat.phone)
    setselectedpinChat(pinchat);
    setSelectedChatId(pinchat.id);
    // if (isSmallScreen) {
    //   // Scroll to the contact details section on mobile
    //   document.getElementById('middle').scrollIntoView({ behavior: 'smooth' });
    // }
  };
  const handleSelectChat = (chat) => {
    setselectedChat(chat);
    // if (isSmallScreen) {
    //   // Scroll to the contact details section on mobile
    //   document.getElementById('middle').scrollIntoView({ behavior: 'smooth' });
    // }
  };

  return (
    <>
      {/* content */}
      <div className="content main_content">
        {/* Left Sidebar Menu */}
        <Sidebar />
        {/* /Left Sidebar Menu */}
        {/* sidebar group */}
        <div className="sidebar-group left-sidebar chat_sidebar">
          {/* Chats sidebar */}
          <div id="chats" className="left-sidebar-wrap sidebar active slimscroll">
            <Scrollbars className={isSmallScreen ? "mob-scrn" : ""} >
              <div >
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
                  {/* <div className="top-online-contacts">
                    <div className="fav-title">
                      <h6>Online Now</h6>
                    </div>
                    <div className="swiper-container">

                      <Slider {...settings} className="swiper-wrapper ">


                        <div className="swiper-slide">

                          <div className="top-contacts-box">
                            <div className="profile-img online">
                              <Link to={routes.index}>
                                <ImageWithBasePath
                                  src={AVATAR2}
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
                                  src={AVATAR1}
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
                                  src={AVATAR7}
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
                                  src={AVATAR5}
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
                                  src={AVATAR3}
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
                                  src={AVATAR2}
                                  alt="Image"
                                />
                              </Link>
                            </div>
                          </div>
                        </div>
                      </Slider>

                    </div>
                  </div> */}




                </div>



                {/* /Top Online Contacts */}
                <div className="sidebar-body chat-body" id="chatsidebar">
                  {/* Left Chat Title */}
                  <div className="d-flex justify-content-between align-items-center ps-0 pe-0">
                    {/* <div className="fav-title pin-chat">
                      <h6>
                        <i className="bx bx-pin me-1" />
                        Pinned Chat
                      </h6>
                    </div> */}
                  </div>
                  {/* /Left Chat Title hardcoded pinned chat*/}

                  {/* <ul className="user-list space-chat">
                    <li className="user-list-item chat-user-list">
                      <Link to={routes.allChat}>
                        <div className="avatar avatar-online">
                          <ImageWithBasePath
                            src={AVATAR2}
                            className="rounded-circle"
                            alt="image"
                          />
                        </div>
                        <div className="users-list-body">
                          <div>
                            <h5>Muhammad Faisal Ijaz</h5>
                            {/* <p>Have you called them?</p> */}
                  {/* </div>
                          <div className="last-chat-time">
                            <small className="text-muted">10:20 PM</small>
                            <div className="chat-pin">
                              <i className="bx bx-pin me-2" />
                              <i className="bx bx-check-double" />
                            </div>
                          </div>
                        </div>
                      </Link>

                    </li> */}

                  {/* </ul> */}




                  {/* /Left Chat dynamic pinned chat start*/}

                  {chats.map(pinchat => (
                    <div key={pinchat.id}>

                      <ul className="user-list space-chat">
                        <li className="user-list-item chat-user-list">
                          <Link to="#" className={`${selectedChatId === pinchat.id ? 'status-active' : ''}`} onClick={() => handleSelectpinChat(pinchat)}>
                            <div className="avatar">
                              <ImageWithBasePath src={pinchat.image} className="rounded-circle" alt={pinchat.name} />
                            </div>
                            <div className="users-list-body">
                              <div>
                                <h5>{pinchat.name}</h5>
                                <p>{pinchat.lastText}</p>
                                {/* <p><i className="bx bx-map me-1" />{contact.location}</p> */}
                              </div>
                              <div className="last-chat-time">
                                <small className="text-muted">{pinchat.lastTextTime}</small>
                                <div className="chat-pin">
                                  <i className="bx bx-pin me-2" />
                                  {/* <i className="bx bx-check-double" /> */}
                                </div>
                              </div>
                            </div>
                          </Link>
                        </li>
                      </ul>
                    </div>
                  ))}


                  {/* /Left Chat dynamic pinned chat end*/}


                  {/* <li className="user-list-item chat-user-list">
                      <Link to={routes.allChat}>
                        <div>
                          <div className="avatar ">
                            <ImageWithBasePath
                              src={AVATAR13}
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
                      <Link to={routes.allChat}>
                        <div className="avatar avatar-online">
                          <ImageWithBasePath
                            src={AVATAR5}
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

                  {/* Left Chat Title */}
                  {/* <div className="d-flex justify-content-between align-items-center ps-0 pe-0">
                    <div className="fav-title pin-chat">
                      <h6>
                        <i className="bx bx-message-square-dots me-1" />
                        All Chats
                      </h6>
                    </div>
                  </div> */}
                  {/* /Left Chat Title */}
                  {/* <ul className="user-list">
                    <li className="user-list-item chat-user-list">
                      <Link to={routes.allChat}>
                        <div className="avatar avatar-online">
                          <ImageWithBasePath
                            src={AVATAR1}
                            className="rounded-circle"
                            alt="image"
                          />
                        </div>
                        <div className="users-list-body">
                          <div>
                            <h5>Muhammad Nadeem</h5>
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


                  </ul> */}


                  {/* {chats.map(chats => (
                    <div key={chats.id}>

                      <ul className="user-list space-chat">
                        <li className="user-list-item chat-user-list">
                          <Link to="#" onClick={() => handleSelectChat(chats)}>
                            <div className="avatar">
                              <ImageWithBasePath src={chats.image} className="rounded-circle" alt={chats.name} />
                            </div>
                            <div className="users-list-body">
                              <div>
                                <h5>{chats.name}</h5>
                                <p>{chats.lastText}</p>
                                {/* <p><i className="bx bx-map me-1" />{contact.location}</p> */}
                              {/* </div>
                              <div className="last-chat-time">
                                <small className="text-muted">{chats.lastTextTime}</small>
                                <div className="chat-pin">
                                  <i className="bx bx-pin me-2" />
                                  {/* <i className="bx bx-check-double" /> */}
                                {/* </div>
                              </div>
                            </div>
                          </Link>
                        </li>
                      </ul>
                    </div> */}

                  {/* )
                ) */} 
                  
                  {/* } */}
                </div>
              </div>
            </Scrollbars>
          </div>
          {/* / Chats sidebar */}
        </div>
        {/* /Sidebar group */}
        {/* Chat */}
        { selectedpinChat ? (

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
          src="/assets/img/avatar/avatar-17.png"
          className="rounded-circle"
          alt="image"
        />
      </figure>
      <div className="mt-1">
        <h5>{selectedpinChat.name}</h5>
        {/* <small className="last-seen">Last Seen at 07:15 PM</small> */}
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
        {/* <li
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
        </li> */}
        {/* <li
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
        </li> */}
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
      {/* <div className="chats">
        <div className="chat-avatar">
          <ImageWithBasePath
            src="/assets/img/avatar/avatar-13.jpg"
            className="rounded-circle dreams_chat"
            alt="image"
          />
        </div>
        <div className="chat-content"> */}


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
        <div
          key={index}
          className={`chats ${message.fromClient ? 'chats-right' : ''}`}
        >
          <div
            className="chat-content"
            style={message.fromClient ? {
              backgroundColor: '#f8ecff',
              borderRadius: '15px 0 15px 15px',
              color: '#232323',
              padding: '15px',
              textAlign: 'right',
            } : {
              backgroundColor: '#fff',
              borderRadius: '20px 20px 20px 0',
              border:'2px solid whitesmoke',
              color: '#424242',
              padding: '15px',
            }}
          >
            {message.text}
          </div>

          {/* Only show the check icon if the message is not from the client */}
          {!message.fromClient && (
            <div className="check-icon">
              <i
                className={`bx ${message.isRead
                  ? "bx-check-double check read"
                  : message.isDelivered
                    ? "bx-check-double check"
                    : "bx-check"
                  }`}
                style={{
                  fontSize: 'large',marginTop:'27px',
                  color: message.isRead ? "blue" : "inherit",
                }}
              />
            </div>
          )}
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



      {/* </div>
      </div> */}


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

        ): (
          <div className="chat status-middle-bar d-flex align-items-center justify-content-center">
          <div className="status-right">
            <div className="empty-chat-img">
              <ImageWithBasePath
                src={IMG01}
                alt="Image"
              />
            </div>
            <div className="empty-dark-img">
              <ImageWithBasePath
                src={IMG02}
                alt="Image"
              />
            </div>
            <div className="select-message-box">
              <h4>Select Message</h4>
              <p>
                To see your existing conversation or share a link below to start
                new
              </p>
              <Link
                to="#"
                className="btn btn-primary"
                data-bs-toggle="modal"
                data-bs-target="#new-chat"
              >
                <i className="bx bx-plus me-1" />
                Add New Message
              </Link>
            </div>
          </div>
        </div>

          )}
       
        {/* /Chat */}

        <HomeModals />
      </div>
      {/* /Content */}
    </>
  );
};

export default WebIndex;
