import { Column } from 'primereact/column';
import { DataTable } from 'primereact/datatable';
import React,{useState} from 'react'
// import useState from 'react'
import DateRangePicker from 'react-bootstrap-daterangepicker';
import { Link } from 'react-router-dom';
import Select, { StylesConfig } from 'react-select';
import { chatdata } from '../../../core/admin/jsons/chat.tsx';

const AdminChat = () => {

  interface TableData {
    img: string;
    from: string;
    toImg: string;
  }
  const fromimg = (res : TableData) => {
    return (
      <div>
        <div className="table-avatar">
          <Link to="#" className="avatar avatar-sm me-2"><img className="avatar-img rounded-circle" src={res.img} /></Link>
          <Link to="#" className="text-black"> {res.from} </Link>
        </div>
      </div>

    );
  };
  const toImages = (data :TableData) => {
    return (
      <div>
        <div className="table-avatar">
          <Link to="#" className="avatar avatar-sm me-2"><img className="avatar-img rounded-circle" src={data.toImg} /></Link>
          <Link to="#" className="text-black"> {data.to} </Link>
        </div>
      </div>

    );
  };
  const privacy = [
    { value: "Select User", label: "Select User" },
    { value: "Alexander Manuel", label: "Alexander Manuel" },
    { value: "Elizabeth Sosa", label: "Elizabeth Sosa" },
  ];
  const [searchInput] = useState("");

  const filteredData = chatdata.filter((datas) => {
    const values = Object.values(datas).map((value) =>
      value.toString().toLowerCase()
    );
    return values.some((value) => value.includes(searchInput.toLowerCase()));
  });

  const action = () => {
    return (
      <div className="text-end no-sort">
        <Link to="#" className="btn btn-sm bg-danger-light" data-bs-toggle="modal" data-bs-target="#delete-user">
          <i className="bx bx-x"></i>
        </Link>
      </div>
    );
  };
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
    <>
      {/* Page Wrapper */}
      <div className="page-wrapper">
        <div className="content container-fluid">
          <div className="page-header">
            <div className="page-title">
              <h4>
                Chat <span className="count-details">120</span>
              </h4>
            </div>
            <div className="page-btn">
              <ul>
                <li>
                  <Link
                    to="#"
                    className="btn btn-white comman-file file-pdf "
                  >
                    <i className="bx bxs-file-pdf " />
                  </Link>
                </li>
                <li>
                  <Link
                    to="#"
                    className="btn btn-white comman-file file-text"
                  >
                    <i className="bx bxs-file " />
                  </Link>
                </li>
                <li>
                  <Link to="#" className="btn btn-white center-flex ">
                    <i className="bx bx-import me-1" />
                    Import
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
                              <i className="bx bx-user" />
                            </span>

                            <Select
                              className="select w-100"
                              options={privacy}
                              placeholder="Select User"
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
                        <Link to="#"className="btn btn-searchset">
                          <i className="bx bx-search" />
                        </Link>
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
                        field="from"
                        header="From"
                        body={fromimg}
                      ></Column>
                      <Column
                        sortable
                        field="to"
                        header="To"
                        body={toImages}
                      ></Column>
                      <Column
                        sortable
                        field="totalChatCount"
                        header="Total Chat Count"
                      ></Column>

                      <Column
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
        <>
  {/* Delete User */}
  <div className="modal fade" id="delete-user">
    <div className="modal-dialog modal-dialog-centered">
      <div className="modal-content">
        <div className="modal-header">
          <h5 className="modal-title">Delete User</h5>
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
            <p>
              Clearing or deleting entire users will only remove messages from
              this device
            </p>
          </div>
          <div className="mute-chat-btn justify-content-center">
            <a
              className="btn btn-primary"
              data-bs-dismiss="modal"
              aria-label="Close"
            >
              Continue
            </a>
            <a
              className="btn btn-secondary"
              data-bs-dismiss="modal"
              aria-label="Close"
            >
              Cancel
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* /Delete User */}
</>

      </div>
      {/* /Page Wrapper */}
    </>

  )
}

export default AdminChat
