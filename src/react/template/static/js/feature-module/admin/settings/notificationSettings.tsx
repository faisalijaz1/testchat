import React from 'react'
import { Link } from 'react-router-dom'

const NotificationSettings = () => {
  return (
    <div>
      <>
  {/* Page Wrapper */}
  <div className="page-wrapper profile-set-wrapper">
    <div className="content container-fluid profile-set-content">
      <div className="page-header">
        <div className="page-title">
          <h4>Notification Setting</h4>
        </div>
      </div>
      <div className="row">
        <div className="col-12">
          <div className="card noti-header">
            <div className="noti-wrapper d-flex align-items-center justify-content-between">
              <h6>Mobile Push Notifications</h6>
              <div className="active-switch">
                <label className="switch">
                  <input type="checkbox" defaultChecked="" />
                  <span className="sliders round" />
                </label>
              </div>
            </div>
            <div className="noti-wrapper d-flex align-items-center justify-content-between">
              <h6>Desktop Notifications</h6>
              <div className="active-switch">
                <label className="switch">
                  <input type="checkbox" defaultChecked="" />
                  <span className="sliders round" />
                </label>
              </div>
            </div>
            <div className="noti-wrapper d-flex align-items-center justify-content-between">
              <h6>Email Notifications</h6>
              <div className="active-switch">
                <label className="switch">
                  <input type="checkbox" defaultChecked="" />
                  <span className="sliders round" />
                </label>
              </div>
            </div>
            <div className="noti-wrapper d-flex align-items-center justify-content-between mb-0">
              <h6>SMS Notification</h6>
              <div className="active-switch">
                <label className="switch">
                  <input type="checkbox" defaultChecked="" />
                  <span className="sliders round" />
                </label>
              </div>
            </div>
          </div>
          <div className="card">
            <div className="table-resposnive general-noti">
              <table className="table">
                <thead>
                  <tr>
                    <th>General Notification</th>
                    <th>Push</th>
                    <th>SMS</th>
                    <th>Email</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      <div className="table-content">
                        <h6>Payment</h6>
                      </div>
                    </td>
                    <td>
                      <div className="active-switch">
                        <label className="switch">
                          <input type="checkbox" defaultChecked="" />
                          <span className="sliders round" />
                        </label>
                      </div>
                    </td>
                    <td>
                      <div className="active-switch">
                        <label className="switch">
                          <input type="checkbox" defaultChecked="" />
                          <span className="sliders round" />
                        </label>
                      </div>
                    </td>
                    <td>
                      <div className="active-switch">
                        <label className="switch">
                          <input type="checkbox" defaultChecked="" />
                          <span className="sliders round" />
                        </label>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <div className="table-content">
                        <h6>Transaction</h6>
                      </div>
                    </td>
                    <td>
                      <div className="active-switch">
                        <label className="switch">
                          <input type="checkbox" />
                          <span className="sliders round" />
                        </label>
                      </div>
                    </td>
                    <td>
                      <div className="active-switch">
                        <label className="switch">
                          <input type="checkbox" defaultChecked="" />
                          <span className="sliders round" />
                        </label>
                      </div>
                    </td>
                    <td>
                      <div className="active-switch">
                        <label className="switch">
                          <input type="checkbox" />
                          <span className="sliders round" />
                        </label>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <div className="table-content">
                        <h6>Email Verification</h6>
                      </div>
                    </td>
                    <td>
                      <div className="active-switch">
                        <label className="switch">
                          <input type="checkbox" defaultChecked="" />
                          <span className="sliders round" />
                        </label>
                      </div>
                    </td>
                    <td>
                      <div className="active-switch">
                        <label className="switch">
                          <input type="checkbox" />
                          <span className="sliders round" />
                        </label>
                      </div>
                    </td>
                    <td>
                      <div className="active-switch">
                        <label className="switch">
                          <input type="checkbox" defaultChecked="" />
                          <span className="sliders round" />
                        </label>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <div className="table-content">
                        <h6>OTP</h6>
                      </div>
                    </td>
                    <td>
                      <div className="active-switch">
                        <label className="switch">
                          <input type="checkbox" defaultChecked="" />
                          <span className="sliders round" />
                        </label>
                      </div>
                    </td>
                    <td>
                      <div className="active-switch">
                        <label className="switch">
                          <input type="checkbox" />
                          <span className="sliders round" />
                        </label>
                      </div>
                    </td>
                    <td>
                      <div className="active-switch">
                        <label className="switch">
                          <input type="checkbox" defaultChecked="" />
                          <span className="sliders round" />
                        </label>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <div className="table-content">
                        <h6>Activity</h6>
                      </div>
                    </td>
                    <td>
                      <div className="active-switch">
                        <label className="switch">
                          <input type="checkbox" />
                          <span className="sliders round" />
                        </label>
                      </div>
                    </td>
                    <td>
                      <div className="active-switch">
                        <label className="switch">
                          <input type="checkbox" defaultChecked="" />
                          <span className="sliders round" />
                        </label>
                      </div>
                    </td>
                    <td>
                      <div className="active-switch">
                        <label className="switch">
                          <input type="checkbox" defaultChecked="" />
                          <span className="sliders round" />
                        </label>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <div className="table-content">
                        <h6>Account</h6>
                      </div>
                    </td>
                    <td>
                      <div className="active-switch">
                        <label className="switch">
                          <input type="checkbox" defaultChecked="" />
                          <span className="sliders round" />
                        </label>
                      </div>
                    </td>
                    <td>
                      <div className="active-switch">
                        <label className="switch">
                          <input type="checkbox" />
                          <span className="sliders round" />
                        </label>
                      </div>
                    </td>
                    <td>
                      <div className="active-switch">
                        <label className="switch">
                          <input type="checkbox" defaultChecked="" />
                          <span className="sliders round" />
                        </label>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <div className="acc-submit">
            <Link to="#" className="btn btn-secondary">
              Cancel
            </Link>
            <Link to="#" className="btn btn-primary">
              Save Changes
            </Link>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* /Page Wrapper */}
</>

    </div>
  )
}

export default NotificationSettings