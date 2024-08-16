import React from 'react'
import DateRangePicker from 'react-bootstrap-daterangepicker';
import { Link } from 'react-router-dom';
import Select, { StylesConfig } from 'react-select';

const AdminCall = () => {
  
 const callList = [
  { value: "Select User", label: "Select User" },
  { value: "Alexander Manuel", label: "Alexander Manuel" },
  { value: "Elizabeth Sosa", label: "Elizabeth Sosa" },
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
  return (
    <>
    {/* Page Wrapper */}
    <div className="page-wrapper">
      <div className="content container-fluid">
        <div className="page-header">
          <div className="page-title">
            <h4>
              Call Logs <span className="count-details">38</span>
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
                              options={callList}
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
                      <Link className="btn btn-searchset">
                        <i className="bx bx-search" />
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="table-responsive">
                  <table className="table datanew table-hover table-center mb-0">
                    <thead>
                      <tr>
                        <th className="no-sort">
                          <label className="checkboxs">
                            <input type="checkbox" id="select-all" />
                            <span className="checkmarks" />
                          </label>
                        </th>
                        <th>Name</th>
                        <th>Total Incoming all</th>
                        <th>Total Outgoing Call</th>
                        <th>Total Missed Call</th>
                        <th className="text-end no-sort">Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>
                          <label className="checkboxs">
                            <input type="checkbox" />
                            <span className="checkmarks" />
                          </label>
                        </td>
                        <td>
                          <h2 className="table-avatar">
                            <Link
                              to="#"
                              className="avatar avatar-sm me-2"
                            >
                              <img
                                className="avatar-img rounded-circle"
                                src="/admin/assets/img/profiles/avatar-4.jpg"
                                alt="User Image"
                              />
                            </Link>
                            <Link to="#">Alexander Manuel </Link>
                          </h2>
                        </td>
                        <td>40</td>
                        <td>60</td>
                        <td>30</td>
                        <td className="text-end">
                          <div className="actions">
                            <Link
                              to="#"
                              className="btn btn-sm bg-danger-light"
                              data-bs-toggle="modal"
                              data-bs-target="#delete-user"
                            >
                              <i className="bx bx-trash" />
                            </Link>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <label className="checkboxs">
                            <input type="checkbox" />
                            <span className="checkmarks" />
                          </label>
                        </td>
                        <td>
                          <h2 className="table-avatar">
                            <Link
                              to="#"
                              className="avatar avatar-sm me-2"
                            >
                              <img
                                className="avatar-img rounded-circle"
                                src="/admin/assets/img/profiles/avatar-1.jpg"
                                alt="User Image"
                              />
                            </Link>
                            <Link to="#">Elizabeth Sosa </Link>
                          </h2>
                        </td>
                        <td>30</td>
                        <td>20</td>
                        <td>40</td>
                        <td className="text-end">
                          <div className="actions">
                            <Link
                              to="#"
                              className="btn btn-sm bg-danger-light"
                              data-bs-toggle="modal"
                              data-bs-target="#delete-user"
                            >
                              <i className="bx bx-trash" />
                            </Link>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <label className="checkboxs">
                            <input type="checkbox" />
                            <span className="checkmarks" />
                          </label>
                        </td>
                        <td>
                          <h2 className="table-avatar">
                            <Link
                              to="#"
                              className="avatar avatar-sm me-2"
                            >
                              <img
                                className="avatar-img rounded-circle"
                                src="/admin/assets/img/profiles/avatar-2.jpg"
                                alt="User Image"
                              />
                            </Link>
                            <Link to="#">Mark Villiams</Link>
                          </h2>
                        </td>
                        <td>15</td>
                        <td>65</td>
                        <td>35</td>
                        <td className="text-end">
                          <div className="actions">
                            <Link
                              to="#"
                              className="btn btn-sm bg-danger-light"
                              data-bs-toggle="modal"
                              data-bs-target="#delete-user"
                            >
                              <i className="bx bx-trash" />
                            </Link>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <label className="checkboxs">
                            <input type="checkbox" />
                            <span className="checkmarks" />
                          </label>
                        </td>
                        <td>
                          <h2 className="table-avatar">
                            <Link
                              to="#"
                              className="avatar avatar-sm me-2"
                            >
                              <img
                                className="avatar-img rounded-circle"
                                src="/admin/assets/img/profiles/avatar-4.jpg"
                                alt="User Image"
                              />
                            </Link>
                            <Link to="#">Michael Howard </Link>
                          </h2>
                        </td>
                        <td>10</td>
                        <td>60</td>
                        <td>20</td>
                        <td className="text-end">
                          <div className="actions">
                            <Link
                              to="#"
                              className="btn btn-sm bg-danger-light"
                              data-bs-toggle="modal"
                              data-bs-target="#delete-user"
                            >
                              <i className="bx bx-trash" />
                            </Link>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <label className="checkboxs">
                            <input type="checkbox" />
                            <span className="checkmarks" />
                          </label>
                        </td>
                        <td>
                          <h2 className="table-avatar">
                            <Link
                              to="#"
                              className="avatar avatar-sm me-2"
                            >
                              <img
                                className="avatar-img rounded-circle"
                                src="/admin/assets/img/profiles/avatar-05.jpg"
                                alt="User Image"
                              />
                            </Link>
                            <Link to="#">Horace Keene </Link>
                          </h2>
                        </td>
                        <td>40</td>
                        <td>10</td>
                        <td>30</td>
                        <td className="text-end">
                          <div className="actions">
                            <Link
                              to="#"
                              className="btn btn-sm bg-danger-light"
                              data-bs-toggle="modal"
                              data-bs-target="#delete-user"
                            >
                              <i className="bx bx-trash" />
                            </Link>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <label className="checkboxs">
                            <input type="checkbox" />
                            <span className="checkmarks" />
                          </label>
                        </td>
                        <td>
                          <h2 className="table-avatar">
                            <Link
                              to="#"
                              className="avatar avatar-sm me-2"
                            >
                              <img
                                className="avatar-img rounded-circle"
                                src="/admin/assets/img/profiles/avatar-3.jpg"
                                alt="User Image"
                              />
                            </Link>
                            <Link to="#">Hollis Tran</Link>
                          </h2>
                        </td>
                        <td>20</td>
                        <td>30</td>
                        <td>35</td>
                        <td className="text-end">
                          <div className="actions">
                            <Link
                              to="#"
                              className="btn btn-sm bg-danger-light"
                              data-bs-toggle="modal"
                              data-bs-target="#delete-user"
                            >
                              <i className="bx bx-trash" />
                            </Link>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <label className="checkboxs">
                            <input type="checkbox" />
                            <span className="checkmarks" />
                          </label>
                        </td>
                        <td>
                          <h2 className="table-avatar">
                            <Link
                              to="#"
                              className="avatar avatar-sm me-2"
                            >
                              <img
                                className="avatar-img rounded-circle"
                                src="/admin/assets/img/profiles/avatar-5.jpg"
                                alt="User Image"
                              />
                            </Link>
                            <Link to="#">James Albert</Link>
                          </h2>
                        </td>
                        <td>50</td>
                        <td>30</td>
                        <td>25</td>
                        <td className="text-end">
                          <div className="actions">
                            <Link
                              to="#"
                              className="btn btn-sm bg-danger-light"
                              data-bs-toggle="modal"
                              data-bs-target="#delete-user"
                            >
                              <i className="bx bx-trash" />
                            </Link>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <label className="checkboxs">
                            <input type="checkbox" />
                            <span className="checkmarks" />
                          </label>
                        </td>
                        <td>
                          <h2 className="table-avatar">
                            <Link
                              to="#"
                              className="avatar avatar-sm me-2"
                            >
                              <img
                                className="avatar-img rounded-circle"
                                src="/admin/assets/img/profiles/avatar-7.jpg"
                                alt="User Image"
                              />
                            </Link>
                            <Link to="#">Debra Jones</Link>
                          </h2>
                        </td>
                        <td>40</td>
                        <td>60</td>
                        <td>30</td>
                        <td className="text-end">
                          <div className="actions">
                            <Link
                              to="#"
                              className="btn btn-sm bg-danger-light"
                              data-bs-toggle="modal"
                              data-bs-target="#delete-user"
                            >
                              <i className="bx bx-trash" />
                            </Link>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <label className="checkboxs">
                            <input type="checkbox" />
                            <span className="checkmarks" />
                          </label>
                        </td>
                        <td>
                          <h2 className="table-avatar">
                            <Link
                              to="#"
                              className="avatar avatar-sm me-2"
                            >
                              <img
                                className="avatar-img rounded-circle"
                                src="/admin/assets/img/profiles/avatar-8.jpg"
                                alt="User Image"
                              />
                            </Link>
                            <Link to="#">Dina Brown</Link>
                          </h2>
                        </td>
                        <td>15</td>
                        <td>55</td>
                        <td>75</td>
                        <td className="text-end">
                          <div className="actions">
                            <Link
                              to="#"
                              className="btn btn-sm bg-danger-light"
                              data-bs-toggle="modal"
                              data-bs-target="#delete-user"
                            >
                              <i className="bx bx-trash" />
                            </Link>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <label className="checkboxs">
                            <input type="checkbox" />
                            <span className="checkmarks" />
                          </label>
                        </td>
                        <td>
                          <h2 className="table-avatar">
                            <Link
                              to="#"
                              className="avatar avatar-sm me-2"
                            >
                              <img
                                className="avatar-img rounded-circle"
                                src="/admin/assets/img/profiles/avatar-08.jpg"
                                alt="User Image"
                              />
                            </Link>
                            <Link to="#">Richard Ohare</Link>
                          </h2>
                        </td>
                        <td>40</td>
                        <td>60</td>
                        <td>30</td>
                        <td className="text-end">
                          <div className="actions">
                            <Link
                              to="#"
                              className="btn btn-sm bg-danger-light"
                              data-bs-toggle="modal"
                              data-bs-target="#delete-user"
                            >
                              <i className="bx bx-trash" />
                            </Link>
                          </div>
                        </td>
                      </tr>
                    </tbody>
                  </table>
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
    {/* /Page Wrapper */}
  </>
  
  )
}

export default AdminCall
