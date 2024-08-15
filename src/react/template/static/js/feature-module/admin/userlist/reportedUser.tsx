import React from 'react'
import DateRangePicker from "react-bootstrap-daterangepicker";
import { Link } from 'react-router-dom';
import Select, { StylesConfig } from 'react-select';
import ImageWithBasePath from '../../../core/data/img/ImageWithBasePath.tsx';
import AdminReportModal from '../../../core/data/modals/adminReportModal.tsx';


const ReportedUser = () => {


    const options = [
        { value: "Select User", label: "Select User" },
        { value: "Alexander Manuel", label: "Alexander Manuel" },
        { value: "Elizabeth Sosa", label: "Elizabeth Sosa" },
      ];

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
    <div>

<div className="page-wrapper">
			
         <div className="content container-fluid">
  <div className="page-header">
    <div className="page-title">
      <h4>Report Users <span className="count-details">45</span></h4>
    </div>
    <div className="page-btn">
      <ul>
        <li>
          <Link to="#" className="btn btn-white comman-file file-pdf ">
            <i className="bx bxs-file-pdf " /></Link>
        </li>
        <li>
          <Link to="#" className="btn btn-white comman-file file-text">
            <i className="bx bxs-file " /></Link>
        </li>
        <li>
          <Link to="#" className="btn btn-white center-flex ">
            <i className="bx bx-import me-1" />Import</Link>
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
                    <div className="pass-login ">
                      <span className="select-users-blk"><i className="bx bx-user" /></span>
                      <Select
                              className="select w-100"
                              options={options}
                              placeholder="Select User"
                              styles={customStyles}
                            />
                    </div>
                  </li>
                  <li>
                    <div className="pass-login">
                      <div className="cal-icon ">
                        <span><i className="bx bx-calendar" /></span>
                        <DateRangePicker initialSettings={initialSettings}>

                        <input type="text" className="form-control date-range bookingrange " />
                         </DateRangePicker>
                      </div>
                    </div>
                  </li>
                  <li>
                    <Link to="#" className="refine-filter"><span><i className="bx bx-sort-down me-1" /></span> Refine Filter</Link>
                  </li>
                </ul>
              </div>
              <div className="search-set">
                <div className="search-input">
                
                  <Link to="#" className="btn btn-searchset"><i className="bx bx-search me-4" /></Link>
                  <div id="DataTables_Table_0_filter" className="dataTables_filter">
                    <label>

                    <input
                    type="search"
                    placeholder="Search..."
                    className="form-control form-control-sm"
                  />

                    </label>
                  </div>
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
                  <th>Phone Number</th>
                  <th>Email Address</th>
                  <th>Report Date</th>
                  <th>Reported By </th>
                  <th>Report Details</th>
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
                      <Link to="#" className="avatar avatar-sm me-2"><ImageWithBasePath className="avatar-img rounded-circle" src="/admin/assets/img/profiles/avatar-4.jpg" alt="User Image" /></Link>
                      <Link to="#">Alexander Manuel </Link>
                    </h2>
                  </td>
                  <td>+91 9988776655</td>
                  <td>alexander@example.com</td>
                  <td>25 Jul 2023, 01.00 PM</td>
                  <td>
                    <h2 className="table-avatar">
                      <Link to="#" className="avatar avatar-sm me-2"><ImageWithBasePath className="avatar-img rounded-circle" src="/admin/assets/img/profiles/avatar-02.jpg" alt="User Image" /></Link>
                      <Link to="#">Charles Sellars </Link>
                    </h2>
                  </td>
                  <td>
                    <div className="actions">
                      <Link to="#" className="btn btn-sm bg-gray-light" data-bs-toggle="modal" data-bs-target="#report-reason">
                        <i className="bx bx-file" /> 
                      </Link>
                    </div>
                  </td>
                  <td className="text-end">
                    <div className="actions">
                      <Link to="#" className="btn btn-sm bg-success-light me-2">
                        <i className="bx bx-check" /> 
                      </Link>
                      <Link to="#" className="btn btn-sm bg-danger-light" data-bs-toggle="modal" data-bs-target="#delete-user">
                        <i className="bx bx-x" /> 
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
                      <Link to="#" className="avatar avatar-sm me-2"><ImageWithBasePath className="avatar-img rounded-circle" src="/admin/assets/img/profiles/avatar-1.jpg" alt="User Image" /></Link>
                      <Link to="#">Elizabeth Sosa </Link>
                    </h2>
                  </td>
                  <td>+1-518-555-0119</td>
                  <td>elizabeth@example.com</td>
                  <td>22 Jul 2023, 04.00 PM</td>
                  <td>
                    <h2 className="table-avatar">
                      <Link to="#" className="avatar avatar-sm me-2"><ImageWithBasePath className="avatar-img rounded-circle" src="/admin/assets/img/profiles/avatar-08.jpg" alt="User Image" /></Link>
                      <Link to="#">Richard Ohare </Link>
                    </h2>
                  </td>
                  <td>
                    <div className="actions">
                      <Link to="#" className="btn btn-sm bg-gray-light" data-bs-toggle="modal" data-bs-target="#report-reason">
                        <i className="bx bx-file" /> 
                      </Link>
                    </div>
                  </td>
                  <td className="text-end">
                    <div className="actions">
                      <Link to="#" className="btn btn-sm bg-success-light me-2">
                        <i className="bx bx-check" /> 
                      </Link>
                      <Link to="#" className="btn btn-sm bg-danger-light" data-bs-toggle="modal" data-bs-target="#delete-user">
                        <i className="bx bx-x" /> 
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
                      <Link to="#" className="avatar avatar-sm me-2"><ImageWithBasePath className="avatar-img rounded-circle" src="/admin/assets/img/profiles/avatar-2.jpg" alt="User Image" /></Link>
                      <Link to="#">Mark Villiams</Link>
                    </h2>
                  </td>
                  <td>+1-518-555-0160</td>
                  <td>mark@example.com</td>
                  <td>18 Jul 2023, 07.00 PM</td>
                  <td>
                    <h2 className="table-avatar">
                      <Link to="#" className="avatar avatar-sm me-2"><ImageWithBasePath className="avatar-img rounded-circle" src="/admin/assets/img/profiles/avatar-1.jpg" alt="User Image" /></Link>
                      <Link to="#">Judy Mercer </Link>
                    </h2>
                  </td>
                  <td>
                    <div className="actions">
                      <Link to="#" className="btn btn-sm bg-gray-light" data-bs-toggle="modal" data-bs-target="#report-reason">
                        <i className="bx bx-file" /> 
                      </Link>
                    </div>
                  </td>
                  <td className="text-end">
                    <div className="actions">
                      <Link to="#" className="btn btn-sm bg-success-light me-2">
                        <i className="bx bx-check" /> 
                      </Link>
                      <Link to="#" className="btn btn-sm bg-danger-light" data-bs-toggle="modal" data-bs-target="#delete-user">
                        <i className="bx bx-x" /> 
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
                      <Link to="#" className="avatar avatar-sm me-2"><ImageWithBasePath className="avatar-img rounded-circle" src="/admin/assets/img/profiles/avatar-4.jpg" alt="User Image" /></Link>
                      <Link to="#">Michael Howard </Link>
                    </h2>
                  </td>
                  <td>+1-602-555-0171</td>
                  <td>michael@example.com</td>
                  <td>25 Jul 2023, 01.00 PM</td>
                  <td>
                    <h2 className="table-avatar">
                      <Link to="#" className="avatar avatar-sm me-2"><ImageWithBasePath className="avatar-img rounded-circle" src="/admin/assets/img/profiles/avatar-04.jpg" alt="User Image" /></Link>
                      <Link to="#">Anthony Garcia </Link>
                    </h2>
                  </td>
                  <td>
                    <div className="actions">
                      <Link to="#" className="btn btn-sm bg-gray-light" data-bs-toggle="modal" data-bs-target="#report-reason">
                        <i className="bx bx-file" /> 
                      </Link>
                    </div>
                  </td>
                  <td className="text-end">
                    <div className="actions">
                      <Link to="#" className="btn btn-sm bg-success-light me-2">
                        <i className="bx bx-check" /> 
                      </Link>
                      <Link to="#" className="btn btn-sm bg-danger-light" data-bs-toggle="modal" data-bs-target="#delete-user">
                        <i className="bx bx-x" /> 
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
                      <Link to="#" className="avatar avatar-sm me-2"><ImageWithBasePath className="avatar-img rounded-circle" src="/admin/assets/img/profiles/avatar-05.jpg" alt="User Image" /></Link>
                      <Link to="#">Horace Keene </Link>
                    </h2>
                  </td>
                  <td>+1-518-555-0119</td>
                  <td>horace@example.com</td>
                  <td>13 Jul 2023, 02.00 PM</td>
                  <td>
                    <h2 className="table-avatar">
                      <Link to="#" className="avatar avatar-sm me-2"><ImageWithBasePath className="avatar-img rounded-circle" src="/admin/assets/img/profiles/avatar-9.jpg" alt="User Image" /></Link>
                      <Link to="#">Gilbert Humphrey </Link>
                    </h2>
                  </td>
                  <td>
                    <div className="actions">
                      <Link to="#" className="btn btn-sm bg-gray-light" data-bs-toggle="modal" data-bs-target="#report-reason">
                        <i className="bx bx-file" /> 
                      </Link>
                    </div>
                  </td>
                  <td className="text-end">
                    <div className="actions">
                      <Link to="#" className="btn btn-sm bg-success-light me-2">
                        <i className="bx bx-check" /> 
                      </Link>
                      <Link to="#" className="btn btn-sm bg-danger-light" data-bs-toggle="modal" data-bs-target="#delete-user">
                        <i className="bx bx-x" /> 
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
                      <Link to="#" className="avatar avatar-sm me-2"><ImageWithBasePath className="avatar-img rounded-circle" src="/admin/assets/img/profiles/avatar-3.jpg" alt="User Image" /></Link>
                      <Link to="#">Hollis Tran</Link>
                    </h2>
                  </td>
                  <td>+1-518-555-0161</td>
                  <td>hollis@example.com</td>
                  <td>10 Jul 2023, 09.00 PM</td>
                  <td>
                    <h2 className="table-avatar">
                      <Link to="#" className="avatar avatar-sm me-2"><ImageWithBasePath className="avatar-img rounded-circle" src="/admin/assets/img/profiles/avatar-5.jpg" alt="User Image" /></Link>
                      <Link to="#">Chasity Williams</Link>
                    </h2>
                  </td>
                  <td>
                    <div className="actions">
                      <Link to="#" className="btn btn-sm bg-gray-light" data-bs-toggle="modal" data-bs-target="#report-reason">
                        <i className="bx bx-file" /> 
                      </Link>
                    </div>
                  </td>
                  <td className="text-end">
                    <div className="actions">
                      <Link to="#" className="btn btn-sm bg-success-light me-2">
                        <i className="bx bx-check" /> 
                      </Link>
                      <Link to="#" className="btn btn-sm bg-danger-light" data-bs-toggle="modal" data-bs-target="#delete-user">
                        <i className="bx bx-x" /> 
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
                      <Link to="#" className="avatar avatar-sm me-2"><ImageWithBasePath className="avatar-img rounded-circle" src="/admin/assets/img/profiles/avatar-5.jpg" alt="User Image" /></Link>
                      <Link to="#">James Albert</Link>
                    </h2>
                  </td>
                  <td>+1-518-555-0167</td>
                  <td>james@example.com</td>
                  <td>08 Jul 2023, 11.00 PM</td>
                  <td>
                    <h2 className="table-avatar">
                      <Link to="#" className="avatar avatar-sm me-2"><ImageWithBasePath className="avatar-img rounded-circle" src="/admin/assets/img/profiles/avatar-4.jpg" alt="User Image" /></Link>
                      <Link to="#">Harry Newton </Link>
                    </h2>
                  </td>
                  <td>
                    <div className="actions">
                      <Link to="#" className="btn btn-sm bg-gray-light" data-bs-toggle="modal" data-bs-target="#report-reason">
                        <i className="bx bx-file" /> 
                      </Link>
                    </div>
                  </td>
                  <td className="text-end">
                    <div className="actions">
                      <Link to="#" className="btn btn-sm bg-success-light me-2">
                        <i className="bx bx-check" /> 
                      </Link>
                      <Link to="#" className="btn btn-sm bg-danger-light" data-bs-toggle="modal" data-bs-target="#delete-user">
                        <i className="bx bx-x" /> 
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
                      <Link to="#" className="avatar avatar-sm me-2"><ImageWithBasePath className="avatar-img rounded-circle" src="/admin/assets/img/profiles/avatar-7.jpg" alt="User Image" /></Link>
                      <Link to="#">Debra Jones</Link>
                    </h2>
                  </td>
                  <td>+1-602-555-0158</td>
                  <td>debra@example.com</td>
                  <td>05 Jul 2023, 12.00 AM</td>
                  <td>
                    <h2 className="table-avatar">
                      <Link to="#" className="avatar avatar-sm me-2"><ImageWithBasePath className="avatar-img rounded-circle" src="/admin/assets/img/profiles/avatar-03.jpg" alt="User Image" /></Link>
                      <Link to="#">John Gonzalez </Link>
                    </h2>
                  </td>
                  <td>
                    <div className="actions">
                      <Link to="#" className="btn btn-sm bg-gray-light" data-bs-toggle="modal" data-bs-target="#report-reason">
                        <i className="bx bx-file" /> 
                      </Link>
                    </div>
                  </td>
                  <td className="text-end">
                    <div className="actions">
                      <Link to="#" className="btn btn-sm bg-success-light me-2">
                        <i className="bx bx-check" /> 
                      </Link>
                      <Link to="#" className="btn btn-sm bg-danger-light" data-bs-toggle="modal" data-bs-target="#delete-user">
                        <i className="bx bx-x" /> 
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
                      <Link to="#" className="avatar avatar-sm me-2"><ImageWithBasePath className="avatar-img rounded-circle" src="/admin/assets/img/profiles/avatar-8.jpg" alt="User Image" /></Link>
                      <Link to="#">Dina Brown</Link>
                    </h2>
                  </td>
                  <td>+1-602-555-0149</td>
                  <td>dina@example.com</td>
                  <td>02 Jul 2023, 10.30 AM</td>
                  <td>
                    <h2 className="table-avatar">
                      <Link to="#" className="avatar avatar-sm me-2"><ImageWithBasePath className="avatar-img rounded-circle" src="/admin/assets/img/profiles/avatar-11.jpg" alt="User Image" /></Link>
                      <Link to="#">Pearl Dewitt </Link>
                    </h2>
                  </td>
                  <td>
                    <div className="actions">
                      <Link to="#" className="btn btn-sm bg-gray-light" data-bs-toggle="modal" data-bs-target="#report-reason">
                        <i className="bx bx-file" /> 
                      </Link>
                    </div>
                  </td>
                  <td className="text-end">
                    <div className="actions">
                      <Link to="#" className="btn btn-sm bg-success-light me-2">
                        <i className="bx bx-check" /> 
                      </Link>
                      <Link to="#" className="btn btn-sm bg-danger-light" data-bs-toggle="modal" data-bs-target="#delete-user">
                        <i className="bx bx-x" /> 
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
                      <Link to="#" className="avatar avatar-sm me-2"><ImageWithBasePath className="avatar-img rounded-circle" src="/admin/assets/img/profiles/avatar-08.jpg" alt="User Image" /></Link>
                      <Link to="#">Richard Ohare</Link>
                    </h2>
                  </td>
                  <td>+1-602-555-0149</td>
                  <td>richard@example.com</td>
                  <td>30 Jun 2023, 09.37 AM</td>
                  <td>
                    <h2 className="table-avatar">
                      <Link to="#" className="avatar avatar-sm me-2"><ImageWithBasePath className="avatar-img rounded-circle" src="/admin/assets/img/profiles/avatar-14.jpg" alt="User Image" /></Link>
                      <Link to="#">Christopher Hurt </Link>
                    </h2>
                  </td>
                  <td>
                    <div className="actions">
                      <Link to="#" className="btn btn-sm bg-gray-light" data-bs-toggle="modal" data-bs-target="#report-reason">
                        <i className="bx bx-file" /> 
                      </Link>
                    </div>
                  </td>
                  <td className="text-end">
                    <div className="actions">
                      <Link to="#" className="btn btn-sm bg-success-light me-2">
                        <i className="bx bx-check" /> 
                      </Link>
                      <Link to="#" className="btn btn-sm bg-danger-light" data-bs-toggle="modal" data-bs-target="#delete-user">
                        <i className="bx bx-x" /> 
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
		<AdminReportModal/>
        </div>

    </div>
  )
}

export default ReportedUser