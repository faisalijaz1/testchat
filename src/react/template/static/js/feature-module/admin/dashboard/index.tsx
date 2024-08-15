import React,{useEffect,useRef} from 'react'
// import useEffect from 'react'
// import useRef  from 'react'
import ApexCharts from 'apexcharts';
import Select, { StylesConfig } from "react-select";
import CountUp from 'react-countup';
const AdminDashboard = () => {
  const chartRef = useRef(null);

  useEffect(() => {
    if (chartRef.current) {
      const options = {
        chart: {
          height: 250,
          type: "area",
          toolbar: {
            show: false
          },
        },
        dataLabels: {
          enabled: false
        },
        stroke: {
          curve: "smooth"
        },
        series: [{
          color: '#680A83',
          data: [20, 60, 40, 51, 42, 42, 30, 25, 20, 40, 30, 40]
        }],
        xaxis: {
          categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
        }
      };

      const chart = new ApexCharts(chartRef.current, options);
      chart.render();

      return () => {
        chart.destroy(); // Cleanup the chart when the component unmounts
      };
    }
  }, []);




  const settings = [
    { value: "Year", label: "Year" },
    { value: "Month", label: "Month" },

  ];
  const customStyles: StylesConfig = {
    control: (provided, state) => ({
      ...provided,
      borderColor: state.isFocused ? '#680A83' : provided.borderColor, // Adjust border color as needed
      boxShadow: state.isFocused ? '0 0 0 1px #680A83' : provided.boxShadow, // Adjust box shadow as needed
    }),
    dropdownIndicator: (provided, state) => ({
      ...provided,
      display: 'none' // Hide the default dropdown indicator arrow
    }),
  };
  return (
    <div className="page-wrapper">
      <div className="content container-fluid">
        <div className="page-header">
          <div className="page-title">
            <h6>Monday, 21 August 2023 </h6>
            <h4>Good Morning, Anderson</h4>
          </div>
        </div>
        <div className="dash-widget-group">
          <ul>
            <li>
              <div className="card">
                <div className="card-body">
                  <div className="dash-widget-header">
                    <span className="dash-widget-icon">
                      <img src="/admin/assets/img/icon/widget-icon-01.svg" alt="icon" />
                    </span>
                    <div className="dash-count">
                      <h6 className="count-title">User</h6>
                      <h5 className="count">
                        {" "}

                        <span className="counter-up"> <CountUp start={0} end={2563} duration={2.5} /></span>
                      </h5>
                    </div>
                  </div>
                </div>
              </div>
            </li>
            <li>
              <div className="card">
                <div className="card-body">
                  <div className="dash-widget-header">
                    <span className="dash-widget-icon">
                      <img src="/admin/assets/img/icon/widget-icon-02.svg" alt="icon" />
                    </span>
                    <div className="dash-count">
                      <h6 className="count-title">Video Calls</h6>
                      <h5 className="count">
                        <span className="counter-up"><CountUp start={0} end={6568} duration={2.5} /></span>
                      </h5>
                    </div>
                  </div>
                </div>
              </div>
            </li>
            <li>
              <div className="card">
                <div className="card-body">
                  <div className="dash-widget-header">
                    <span className="dash-widget-icon">
                      <img src="/admin/assets/img/icon/widget-icon-03.svg" alt="icon" />
                    </span>
                    <div className="dash-count">
                      <h6 className="count-title">Public Groups</h6>
                      <h5 className="count">
                        {" "}
                        <span className="counter-up"><CountUp start={0} end={487} duration={2.5} /> </span>
                      </h5>
                    </div>
                  </div>
                </div>
              </div>
            </li>
            <li>
              <div className="card">
                <div className="card-body">
                  <div className="dash-widget-header">
                    <span className="dash-widget-icon">
                      <img src="/admin/assets/img/icon/widget-icon-04.svg" alt="icon" />
                    </span>
                    <div className="dash-count">
                      <h6 className="count-title">Chats</h6>
                      <h5 className="count">
                        {" "}
                        <span className="counter-up"><CountUp start={0} end={2456} duration={2.5} /></span>
                      </h5>
                    </div>
                  </div>
                </div>
              </div>
            </li>
            <li>
              <div className="card">
                <div className="card-body">
                  <div className="dash-widget-header">
                    <span className="dash-widget-icon">
                      <img src="/admin/assets/img/icon/widget-icon-05.svg" alt="icon" />
                    </span>
                    <div className="dash-count">
                      <h6 className="count-title">Status</h6>
                      <h5 className="count">
                        {" "}
                        <span className="counter-up"><CountUp start={0} end={1953} duration={2.5} /> </span>
                      </h5>
                    </div>
                  </div>
                </div>
              </div>
            </li>
          </ul>
        </div>
        <div className="row">
          <div className="col-md-6 col-sm-6">
            <div className="card">
              <div className="card-header">
                <div className="row align-items-center">
                  <div className="col">
                    <h5 className="card-title">Recent Joined Members</h5>
                  </div>
                </div>
              </div>
              <div className="card-body">
                <div className="table-responsive">
                  <table className="table table-stripped table-hover">
                    <thead className="thead-light">
                      <tr>
                        <th>Name</th>
                        <th>Reg Date</th>
                        <th>Login Time</th>
                        <th>Country</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>
                          <h2 className="table-avatar">
                            <a href="#">
                              <img
                                className="avatar avatar-sm me-2 avatar-img rounded-circle"
                                src="/admin/assets/img/profiles/avatar-04.jpg"
                                alt="User Image"
                              />
                              Alexander Manuel
                            </a>
                          </h2>
                        </td>
                        <td>25 Jul 2023</td>
                        <td>01.00 PM</td>
                        <td>USA</td>
                      </tr>
                      <tr>
                        <td>
                          <h2 className="table-avatar">
                            <a href="#">
                              <img
                                className="avatar avatar-sm me-2 avatar-img rounded-circle"
                                src="/admin/assets/img/profiles/avatar-06.jpg"
                                alt="User Image"
                              />
                              Elizabeth Sosa
                            </a>
                          </h2>
                        </td>
                        <td>22 Jul 2023</td>
                        <td>04.00 PM</td>
                        <td>IND</td>
                      </tr>
                      <tr>
                        <td>
                          <h2 className="table-avatar">
                            <a href="#">
                              <img
                                className="avatar avatar-sm me-2 avatar-img rounded-circle"
                                src="/admin/assets/img/profiles/avatar-08.jpg"
                                alt="User Image"
                              />
                              Mark Villiams
                            </a>
                          </h2>
                        </td>
                        <td>18 Jul 2023</td>
                        <td>07.00 PM</td>
                        <td>USA</td>
                      </tr>
                      <tr>
                        <td>
                          <h2 className="table-avatar">
                            <a href="#">
                              <img
                                className="avatar avatar-sm me-2 avatar-img rounded-circle"
                                src="/admin/assets/img/profiles/avatar-10.jpg"
                                alt="User Image"
                              />
                              Michael Howard
                            </a>
                          </h2>
                        </td>
                        <td>13 Jul 2023</td>
                        <td>02.00 PM</td>
                        <td>IND</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-sm-6">
            <div className="card">
              <div className="card-header">
                <div className="row align-items-center">
                  <div className="col">
                    <h5 className="card-title">Recent Created Groups</h5>
                  </div>
                </div>
              </div>
              <div className="card-body">
                <div className="table-responsive">
                  <table className="table table-stripped table-hover">
                    <thead className="thead-light">
                      <tr>
                        <th>Name</th>
                        <th>Reg Date</th>
                        <th>Login Time</th>
                        <th>Members</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>
                          <h2 className="table-avatar">
                            <a href="#">
                              <img
                                className="avatar avatar-sm me-2 avatar-img rounded-circle"
                                src="/admin/assets/img/group-01.jpg"
                                alt="User Image"
                              />
                              Themeforest
                            </a>
                          </h2>
                        </td>
                        <td>25 Jul 2023</td>
                        <td>01.00 PM</td>
                        <td>158</td>
                      </tr>
                      <tr>
                        <td>
                          <h2 className="table-avatar">
                            <a href="#">
                              <img
                                className="avatar avatar-sm me-2 avatar-img rounded-circle"
                                src="/admin/assets/img/group-02.jpg"
                                alt="User Image"
                              />
                              UI UX Designer
                            </a>
                          </h2>
                        </td>
                        <td>22 Jul 2023</td>
                        <td>04.00 PM</td>
                        <td>355</td>
                      </tr>
                      <tr>
                        <td>
                          <h2 className="table-avatar">
                            <a href="#">
                              <img
                                className="avatar avatar-sm me-2 avatar-img rounded-circle"
                                src="/admin/assets/img/group-03.jpg"
                                alt="User Image"
                              />
                              Graphics Team
                            </a>
                          </h2>
                        </td>
                        <td>18 Jul 2023</td>
                        <td>07.00 PM</td>
                        <td>268</td>
                      </tr>
                      <tr>
                        <td>
                          <h2 className="table-avatar">
                            <a href="#">
                              <img
                                className="avatar avatar-sm me-2 avatar-img rounded-circle"
                                src="/admin/assets/img/group-04.jpg"
                                alt="User Image"
                              />
                              Columbus Studios
                            </a>
                          </h2>
                        </td>
                        <td>13 Jul 2023</td>
                        <td>02.00 PM</td>
                        <td>453</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-xl-8 col-lg-6  d-flex">
            <div className="card">
              <div className="card-header">
                <div className="row align-items-center">
                  <div className="col-6">
                    <h5 className="card-title">Report</h5>
                  </div>
                  <div className="col-6 ">
                    <div className="year-report d-flex justify-content-end">
                      <div className="calendar-report">
                        <span className="select-clendear-icon">
                          <i className="bx bx-calendar-alt" />
                        </span>
                        <Select
                          className="admin-select"
                          options={settings}
                          placeholder="Year"
                          styles={customStyles}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="card-body">
                <div id="school-area" ref={chartRef}></div>
              </div>
            </div>
          </div>
          <div className="col-xl-4 col-lg-6  d-flex">
            <div className="card">
              <div className="card-header mb-4">
                <div className="row align-items-center">
                  <div className="col-6">
                    <h5 className="card-title">Invited User</h5>
                  </div>
                </div>
              </div>
              <div className="card-body">
                <div className="invite-user-list">
                  <ul>
                    <li>
                      <div className="table-avatar">
                        <a href="#">
                          <img
                            className="avatar avatar-sm me-2 avatar-img rounded-circle"
                            src="/admin/assets/img/profiles/avatar-04.jpg"
                            alt="User Image"
                          />
                          Alexander Manuel
                        </a>
                      </div>
                      <div className="invite-check-user">
                        <span className="check-user">
                          <a href="#">
                            <i className="bx bx-check" />
                          </a>
                        </span>
                        <span className="uncheck-user">
                          <a href="#">
                            <i className="bx bx-x" />
                          </a>
                        </span>
                      </div>
                    </li>
                    <li>
                      <div className="table-avatar">
                        <a href="#">
                          <img
                            className="avatar avatar-sm me-2 avatar-img rounded-circle"
                            src="/admin/assets/img/profiles/avatar-02.jpg"
                            alt="User Image"
                          />
                          James Albert
                        </a>
                      </div>
                      <div className="invite-check-user">
                        <span className="check-user">
                          <a href="#">
                            <i className="bx bx-check" />
                          </a>
                        </span>
                        <span className="uncheck-user">
                          <a href="#">
                            <i className="bx bx-x" />
                          </a>
                        </span>
                      </div>
                    </li>
                    <li>
                      <div className="table-avatar">
                        <a href="#">
                          <img
                            className="avatar avatar-sm me-2 avatar-img rounded-circle"
                            src="/admin/assets/img/profiles/avatar-03.jpg"
                            alt="User Image"
                          />
                          Debra Jones
                        </a>
                      </div>
                      <div className="invite-check-user">
                        <span className="check-user">
                          <a href="#">
                            <i className="bx bx-check" />
                          </a>
                        </span>
                        <span className="uncheck-user">
                          <a href="#">
                            <i className="bx bx-x" />
                          </a>
                        </span>
                      </div>
                    </li>
                    <li>
                      <div className="table-avatar">
                        <a href="#">
                          <img
                            className="avatar avatar-sm me-2 avatar-img rounded-circle"
                            src="/admin/assets/img/profiles/avatar-04.jpg"
                            alt="User Image"
                          />
                          Richard Ohare
                        </a>
                      </div>
                      <div className="invite-check-user">
                        <span className="check-user">
                          <a href="#">
                            <i className="bx bx-check" />
                          </a>
                        </span>
                        <span className="uncheck-user">
                          <a href="#">
                            <i className="bx bx-x" />
                          </a>
                        </span>
                      </div>
                    </li>
                    <li>
                      <div className="table-avatar">
                        <a href="#">
                          <img
                            className="avatar avatar-sm me-2 avatar-img rounded-circle"
                            src="/admin/assets/img/profiles/avatar-05.jpg"
                            alt="User Image"
                          />
                          Horace Keene
                        </a>
                      </div>
                      <div className="invite-check-user">
                        <span className="check-user">
                          <a href="#">
                            <i className="bx bx-check" />
                          </a>
                        </span>
                        <span className="uncheck-user">
                          <a href="#">
                            <i className="bx bx-x" />
                          </a>
                        </span>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

  )
}

export default AdminDashboard