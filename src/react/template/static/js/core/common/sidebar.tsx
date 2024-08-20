import React from 'react'
import { Link, useLocation } from 'react-router-dom';
import OverlayTrigger, { OverlayInjectedProps } from "react-bootstrap/OverlayTrigger";
import Tooltip from "react-bootstrap/Tooltip";
import ImageWithBasePath from '../data/img/ImageWithBasePath.tsx';
import { all_routes } from '../../feature-module/router/all_routes.tsx';
import {useDispatch, useSelector} from 'react-redux';
import { setDarkMode } from '../data/redux/commonSlice.tsx';
import loginlogo from '../../../../../../react/template/assets/img/logo.png'
import AVATAR2 from '../../../../../../react/template/assets/img/avatar/avatar-17.png'
const Sidebar = () => {

  const location =useLocation();
  // console.log(location.pathname,"pathname")
  
    const renderTooltip: React.FC<OverlayInjectedProps> = (props) => (
        <Tooltip id="button-tooltip" {...props}>
          Chat
        </Tooltip>
      );

      const routes = all_routes;

      const dispatch = useDispatch();
      const darkMode = useSelector(state => state.darkMode);


  return (
    <div className="sidebar-menu">
          <div className="logo-col">
            <Link to={routes.index}>
              <ImageWithBasePath   src="/assets/img/skm-transparent1.png" alt="Logo12" />
            </Link>
          </div>
          <div className="menus-col">
            <div className="chat-menus">
              <ul>
                <li>
                 
                  <OverlayTrigger
                    placement="right"
                    delay={{ show: 250, hide: 400 }}
                    overlay={renderTooltip}
                  >
                    <Link to={routes.index} className={`chat-unread ${location.pathname==routes.index ? " active":" "}`}>
 
                      <i className="bx bx-message-square-dots" />
                    </Link>
                  </OverlayTrigger>
                </li>
                <li>
                  <Link
                    to={routes.group}
                    className={`chat-unread ${location.pathname==routes.group ? " active":" "}`}
                    data-bs-toggle="tooltip"
                    data-bs-placement="right"
                    title=""
                    data-bs-original-title="Group"
                  >
                    <i className="bx bx-group" />
                  </Link>
                </li>
                <li>
                  <Link
                    to={routes.emptyStatus}
                    className={`chat-unread ${location.pathname==routes.emptyStatus ? " active":" "}`}
                    data-bs-toggle="tooltip"
                    data-bs-placement="right"
                    title=""
                    data-bs-original-title="Status"
                  >
                    <i className="bx bx-stop-circle" />
                  </Link>
                </li>
                {/* <li>
                  <Link
                    to={routes.call}
                    className={`chat-unread ${location.pathname==routes.call ? " active":" "}`}                    data-bs-toggle="tooltip"
                    data-bs-placement="right"
                    title=""
                    data-bs-original-title="Call"
                  >
                    <i className="bx bx-phone" />
                  </Link>
                </li> */}
                <li>
                  <Link
                    to={routes.contact}
                    className={`chat-unread ${location.pathname==routes.contact ? " active":" "}`}
                    data-bs-toggle="tooltip"
                    data-bs-placement="right"
                    title=""
                    data-bs-original-title="Contact"
                  >
                    <i className="bx bx-user-pin" />
                  </Link>
                </li>
                <li>
                  <Link
                    to={routes.settings}
                    className={`chat-unread ${location.pathname==routes.settings ? " active":" "}`}                    data-bs-toggle="tooltip"
                    data-bs-placement="right"
                    title=""
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
                    onClick={()=> dispatch(setDarkMode(!darkMode))}
                  >
                    <i className={darkMode ? "bx bx-sun" : "bx bx-moon"} />
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
                        src={AVATAR2}
                        alt="logo3"
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
  )
}

export default Sidebar;