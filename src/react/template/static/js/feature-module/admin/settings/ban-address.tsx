import React, { useState } from 'react'
import { Link } from 'react-router-dom'

import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { banaddressdata } from '../../../core/json/ban_address.tsx';
import Select, { StylesConfig } from "react-select";
import DefaultEditor from 'react-simple-wysiwyg';
import "bootstrap-daterangepicker/daterangepicker.css";
import DateRangePicker from "react-bootstrap-daterangepicker";
        

const BanAddress = () => {
  const [values, setValue] = React.useState();
  function onChange(e: any) {
    setValue(e.target.value);
  }
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
  const font = [
    { value: "Select IP", label: "Select IP" },
    { value: "211.11.0.25", label: "211.11.0.25" },
    { value: "211.03.0.11", label: "211.03.0.11" },
    
  ];
  const [searchInput, setSearchInput] = useState("");
  const courtNameRender = () => {
    return (
      <label className="checkboxs">
                        <input type="checkbox" id="select-all" />
                        <span className="checkmarks" />
                      </label>
    );
  };
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
  const action = () => {
    return (
      <div className="actions">
      <Link to="#" className="btn btn-sm bg-gray-light me-2" data-bs-toggle="modal" data-bs-target="#edit-ban-address">
        <i className="bx bx-pencil"></i> 
      </Link>
      <Link to="#" className="btn btn-sm bg-danger-light" data-bs-toggle="modal" data-bs-target="#delete-user">
        <i className="bx bx-x"></i> 
      </Link>
    </div>
    );
  };
  const filteredData = banaddressdata.filter((datas) => {
    const values = Object.values(datas).map((value) =>
      value.toString().toLowerCase()
    );
    return values.some((value) => value.includes(searchInput.toLowerCase()));
  });
  return (
    <div>
       
       <div className="page-wrapper">
  <div className="content container-fluid">
    <div className="page-header">
      <div className="page-title">
        <h4>Ban IP Address</h4>
      </div>
      <div className="page-btn">
        <ul>
          <li>
            <Link
              to="#"
              className="btn btn-added center-flex "
              data-bs-toggle="modal"
              data-bs-target="#ban-address"
            >
              <i className="bx bx-plus-circle me-1" />
              Add New Ban IP
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
                        className="select otpselect"
                        options={font}
                        placeholder="Select IP"
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
                                  onChange={(e) =>
                                    setSearchInput(e.target.value)
                                  }
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
                          <Column
                              sortable
                             
                              body={courtNameRender}
                              
                            ></Column><Column
                          sortable
                          field="id"
                          header="IP Address"
                        ></Column>
                         <Column
                              sortable
                              field="repoteDate"
                              header="Report Date"
                            ></Column>
                             <Column
                              sortable
                              field="date"
                              header="Date"
                            ></Column>
                            <Column
                              sortable
                              body={action}
                              header="Action"
                            ></Column>
                            </DataTable>
            </div>
          </div>
        </div>
        {/* /Recent Orders */}
      </div>
    </div>
  </div>
</div>
<>
  {/* Add Ban */}
  <div className="modal fade " id="ban-address">
    <div className="modal-dialog modal-dialog-centered">
      <div className="modal-content">
        <div className="modal-header">
          <h5 className="modal-title">Add New Ban IP Address</h5>
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
                    <label className="form-label">IP Address</label>
                    <input type="text" className="form-control" />
                  </div>
                </div>
                <div className="col-md-12">
                  <div className="pass-login">
                    <label className="form-label">Reason For Ban</label>
                    <DefaultEditor value={values} onChange={onChange} />
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
  {/* /Add Ban */}
  {/* Add Ban */}
  <div className="modal fade " id="edit-ban-address">
    <div className="modal-dialog modal-dialog-centered">
      <div className="modal-content">
        <div className="modal-header">
          <h5 className="modal-title">Edit New Ban IP Address</h5>
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
            <form action="#">
              <div className="row">
                <div className="col-md-12">
                  <div className="pass-login">
                    <label className="form-label">IP Address</label>
                    <input
                      type="text"
                      className="form-control"
                      defaultValue="211.11.0.25"
                    />
                  </div>
                </div>
                <div className="col-md-12">
                  <div className="pass-login">
                    <label className="form-label">Reason For Ban</label>
                    <DefaultEditor value={values} onChange={onChange} />
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
            <button
              type="submit"
              className="btn btn-primary"
              data-bs-dismiss="modal"
              aria-label="Close"
            >
              Submit
            </button>
            <button
              type="submit"
              className="btn btn-secondary"
              data-bs-dismiss="modal"
              aria-label="Close"
            >
              Cancel
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* /Add Ban */}
  {/* Delete User */}
  <div className="modal fade" id="delete-user">
    <div className="modal-dialog modal-dialog-centered">
      <div className="modal-content">
        <div className="modal-header">
          <h5 className="modal-title">Delete IP Address</h5>
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
            <p>Deleting entire IP Address from this device</p>
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


    </div>
  )
}

export default BanAddress