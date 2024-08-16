import { DataTable } from "primereact/datatable";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { languagedata } from "../../../core/json/language.tsx";
import { Column } from "primereact/column";
import Select, { StylesConfig } from "react-select";
import DateRangePicker from "react-bootstrap-daterangepicker";
import { all_routes } from "../../router/all_routes.tsx";
import PropTypes from 'prop-types';

const Language = () => {
  const [searchInput, setSearchInput] = useState("");
  const courtNameRender = () => {
    return (
      <label className="checkboxs">
        <input type="checkbox" id="select-all" />
        <span className="checkmarks" />
      </label>
    );
  };
  const routes = all_routes;
  const initialSettings = {
    endDate: new Date("2020-08-11T12:30:00.000Z"),
    ranges: {
      "Last 30 Days": [
        new Date("2020-07-12T04:57:17.076Z"),
        new Date("2020-08-10T04:57:17.076Z"),
      ],
      "Last 7 Days": [
        new Date("2020-08-04T04:57:17.076Z"),
        new Date("2020-08-10T04:57:17.076Z"),
      ],
      "Last Month": [
        new Date("2020-06-30T18:30:00.000Z"),
        new Date("2020-07-31T18:29:59.999Z"),
      ],
      "This Month": [
        new Date("2020-07-31T18:30:00.000Z"),
        new Date("2020-08-31T18:29:59.999Z"),
      ],
      Today: [
        new Date("2020-08-10T04:57:17.076Z"),
        new Date("2020-08-10T04:57:17.076Z"),
      ],
      Yesterday: [
        new Date("2020-08-09T04:57:17.076Z"),
        new Date("2020-08-09T04:57:17.076Z"),
      ],
    },
    startDate: new Date("2020-08-04T04:57:17.076Z"), // Set "Last 7 Days" as default
    timePicker: false,
  };
  
  const rtl = () => {
    return (
      <div className="active-switch">
        <label className="switch">
          <input type="checkbox" checked />
          <span className="sliders round"></span>
        </label>
      </div>
    );
  };
  const status = () => {
    return (
      <Link className="table-active bg-success" to="#" > 
      <span>Active</span>
    </Link>
    );
  };
  const action = () => {
    return (
      <div className="action-web-list">
      <ul>
        <li><Link to="#" className="action-download"><i className="bx bx-download"></i></Link></li>
        <li><Link to={routes.languageTranslate}>Web</Link></li>
        <li><Link to={routes.languageApp}>App</Link></li>
        <li><Link to={routes.languageAdmin}>Admin</Link></li>
        <li><Link to="#" className="action-trash" data-bs-toggle="modal" data-bs-target="#delete-user"><i className="bx bx-trash"></i></Link></li>
      </ul>
    </div>
    );
  };
  const Progress = ({ progress }) => {
   
    const getProgressBarClass = (progress) => {
      
      const progressPercentage = parseInt(progress);
  
      
      if (progressPercentage >= 80) {
        return "bg-info"; 
      } else if (progressPercentage <= 50) {
        return "bg-success"; 
      } else {
        return "bg-warning"; 
      }
    };
  
    
    const progressBarClass = getProgressBarClass(progress);
  
    return (
      <div className="track-statistics mb-0">
        <div className="progress mb-0">
          <div
            className={`progress-bar ${progressBarClass}`}
            role="progressbar"
            style={{ width: progress }}
            aria-valuenow={progress.replace("%", "")}
            aria-valuemin="0"
            aria-valuemax="100"
          ></div>
        </div>
        <div className="statistic-head">
          <p>{progress}</p>
        </div>
      </div>
    );
  };
  Progress.propTypes = {
    progress: PropTypes.string.isRequired,
  };

  const filteredData = languagedata.filter((datas) => {
    const values = Object.values(datas).map((value) =>
      value.toString().toLowerCase()
    );
    return values.some((value) => value.includes(searchInput.toLowerCase()));
  });
  const font = [
    { value: "Select Language", label: "Select Language" },
    { value: "English", label: "English" },
    { value: "Arabic", label: "Arabic" },
  ];
  const customStyles: StylesConfig = {
    option: (provided, state) => ({
      ...provided,
      backgroundColor: state.isFocused ? "#680A83" : "#fff",
      color: state.isFocused ? "#fff" : "#000",
      "&:hover": {
        backgroundColor: "#680A83",
      },
    }),
  };
  return (
    <div>
      <>
        {/* Page Wrapper */}
        <div className="page-wrapper">
          <div className="content container-fluid">
            <div className="page-header">
              <div className="page-title">
                <h4>Language</h4>
              </div>
              <div className="page-btn">
                <ul>
                  <li>
                    <Link
                      to="#"
                      className="btn btn-added center-flex "
                      data-bs-toggle="modal"
                      data-bs-target="#add-transaction"
                    >
                      <i className="bx bx-plus-circle me-1" />
                      Add Translation
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="row">
              <div className="col-md-12 d-flex">
                {/* Recent Orders */}
                <div className="card card-table flex-fill">
                  <div className="card-body">
                    <div className="table-top">
                      <div className="wordset">
                        <ul>
                          <li>
                            <div className="pass-login">
                              <span className="select-users-blk">
                                <i className="bx bx-globe" />
                              </span>
                              <Select
                                className="select languageselect"
                                options={font}
                                placeholder="Select Language"
                                styles={customStyles}
                              />
                            </div>
                          </li>
                          <li>
                            <div className="pass-login">
                              <div className="cal-icon">
                                <span>
                                  <i className="bx bx-calendar" />
                                </span>
                                <DateRangePicker initialSettings={initialSettings}>
                                <input
                      className="form-control col-4 input-range"
                      type="text"
                      // style={{ border: "none" }}
                    />
                                </DateRangePicker>
                               
                              </div>
                            </div>
                          </li>
                          <li>
                            <Link to="#" className="refine-filter">
                              <span>
                                <i className="bx bx-sort-down me-1" />
                              </span>
                              Refine Filter
                            </Link>
                          </li>
                        </ul>
                      </div>
                      <div className="search-set">
                        <div className="search-input">
                          <div className="dataTables_filter">
                            <label>
                              <input
                                type="text"
                                value={searchInput}
                                onChange={(e) => setSearchInput(e.target.value)}
                                placeholder="Search"
                                className="form-control"
                              />
                            </label>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="table-responsive">
                      <DataTable
                        className="table datatable"
                        value={filteredData}
                        paginator
                        rows={10}
                        rowsPerPageOptions={[10, 25, 50]}
                        currentPageReportTemplate="{first}"
                      >
                        <Column body={courtNameRender}></Column>
                        <Column
                          sortable
                          field="name"
                          header="Language"
                          body={(rowData) => (
                            
														<h2 className="table-avatar language-avatar">
															<Link to="#" className="avatar me-2"><img className="avatar-img rounded-circle"  src="/admin/assets/img/flag/flag-04.png" alt="User Image"/></Link>
															<Link to="#">{rowData.name} </Link>
														</h2>
													
                          )}
                        ></Column>
                        <Column sortable field="code" header="Code"></Column>
                        <Column
                          sortable
                          field="rtl"
                          header="RTL"
                          body={rtl}
                        ></Column>
                        <Column sortable field="total" header="Total"></Column>
                        <Column sortable field="done" header="Done"></Column>
                        <Column
                          sortable
                          field="progress"
                          header="Progress"
                          
                        ></Column>
                        <Column sortable header="Status" body={status}></Column>
                        <Column sortable header="Action" body={action}></Column>
                      </DataTable>
                    </div>
                  </div>
                </div>
                {/* /Recent Orders */}
              </div>
            </div>
          </div>
        </div>
        {/* /Page Wrapper */}
        <>
  <div className="modal fade " id="add-transaction">
    <div className="modal-dialog modal-dialog-centered">
      <div className="modal-content">
        <div className="modal-header">
          <h5 className="modal-title">Add Transalation</h5>
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
          <div className="user-profiles-group mb-4">
            <form>
              <div className="row">
                <div className="col-md-12">
                  <div className="pass-login">
                    <label className="form-label">
                      Languages <span className="dark-red">*</span>
                    </label>
                    <input
                      type="password"
                      className="form-control pass-input"
                    />
                  </div>
                </div>
                <div className="col-md-12">
                  <div className="pass-login">
                    <label className="form-label">
                      Code <span className="dark-red">*</span>
                    </label>
                    <input
                      type="password"
                      className="form-control pass-input"
                    />
                  </div>
                </div>
                <div className="col-md-12">
                  <div className="status-logs">
                    <h6>Status</h6>
                    <div className="active-switch">
                      <label className="switch">
                        <input type="checkbox" defaultChecked="" />
                        <span className="sliders round" />
                      </label>
                    </div>
                  </div>
                </div>
              </div>
            </form>
          </div>
          <div className="mute-chat-btn">
            <Link
              className="btn btn-primary"
              data-bs-dismiss="modal"
              aria-label="Close"
            >
              Submit
           </Link>
            <Link
              className="btn btn-secondary"
              data-bs-dismiss="modal"
              aria-label="Close"
            >
              Cancel
           </Link>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* /Transaction */}
  {/* Delete User */}
  <div className="modal fade" id="delete-user">
    <div className="modal-dialog modal-dialog-centered">
      <div className="modal-content">
        <div className="modal-header">
          <h5 className="modal-title">Delete Language</h5>
          <button
            type="button"
            className="close"
            data-bs-dismiss="modal"
            aria-label="Close"
          >
            <span className="material-icons">close</span>
          </button>
        </div>
        <div className="modal-body text-center">
          <div className="block-user-blk ">
            <p>Deleting entire Language from this device</p>
          </div>
          <div className="mute-chat-btn justify-content-center">
            <Link
              className="btn btn-primary"
              data-bs-dismiss="modal"
              aria-label="Close"
            >
              Continue
           </Link>
            <Link
              className="btn btn-secondary"
              data-bs-dismiss="modal"
              aria-label="Close"
            >
              Cancel
           </Link>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* /Delete User */}
</>

      </>
    </div>
  );
};

export default Language;
