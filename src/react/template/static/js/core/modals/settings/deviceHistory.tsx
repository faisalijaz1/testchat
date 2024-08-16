import React from 'react'
import ImageWithBasePath from '../../data/img/ImageWithBasePath.tsx'
import { Link } from 'react-router-dom'

const DeviceHistory = () => {
  return (
 <>
  {/* Device History */}
  <div className="modal fade device-modal" id="setting-device">
    <div className="modal-dialog modal-dialog-centered">
      <div className="modal-content">
        <div className="modal-body pt-4">
          <div className="device-group mb-4">
            <div className="manage-device-detail setting-device-details">
              <div className="manage-histry manage-wrapper-histry flkex-grow-1">
                <h6>Device History</h6>
                <p>
                  If you see a device here that you believe wasn’t you, please
                  contact our account fraud department immediately.
                </p>
              </div>
              <Link
                to="#"
                className="btn btn-primary set-manage-pri flex-shrink-0 d-flex align-items-center"
              >
                <ImageWithBasePath
                  src="/assets/img/icon/logout.svg"
                  className="me-1"
                  alt="Icon"
                />
                Log out all Devices
              </Link>
            </div>
            <div className="connectetapps setting-connect">
              <div className="connectetappsimg setting-connect-img">
                <div className="connectet-img">
                  <i className="fa-solid fa-laptop" />
                </div>
                <div className="connectet-content">
                  <p>16 Feb 2023 at 06:25 PM</p>
                  <h6>Mac OS Safari 15.1</h6>
                </div>
              </div>
              <div className="connectetappscontent">
                <Link to="#" className="btn btn-primary">
                  Current Session
                </Link>
                <span className="device-remove">
                  <Link to="#">
                    <i className="feather-trash-2" />
                  </Link>
                </span>
              </div>
            </div>
            <div className="connectetapps">
              <div className="connectetappsimg">
                <div className="connectet-img">
                  <i className="fa-solid fa-laptop" />
                </div>
                <div className="connectet-content">
                  <p>22 Jan 2023 at 04:32 AM</p>
                  <h6>Windows 11 Mozilla Firefox</h6>
                </div>
              </div>
              <div className="connectetappscontent">
                <span className="device-remove">
                  <Link to="#">
                    <i className="feather-trash-2" />
                  </Link>
                </span>
              </div>
            </div>
            <div className="connectetapps">
              <div className="connectetappsimg">
                <div className="connectet-img">
                  <i className="feather-tablet" />
                </div>
                <div className="connectet-content">
                  <p>06 Dec 2023 at 06:30 AM</p>
                  <h6>iOS Safari 15.1</h6>
                </div>
              </div>
              <div className="connectetappscontent">
                <span className="device-remove">
                  <Link to="#">
                    <i className="feather-trash-2" />
                  </Link>
                </span>
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
            <Link
              className="btn btn-primary"
              data-bs-dismiss="modal"
              aria-label="Close"
            >
              <i className="feather-check me-1" />
              Save Changes
            </Link>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* /Device History */}
</>

  )
}

export default DeviceHistory
