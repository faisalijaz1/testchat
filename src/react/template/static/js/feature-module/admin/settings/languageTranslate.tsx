import React, { useState } from "react";
import { Link } from "react-router-dom";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";

import PropTypes from 'prop-types';
import { languagetranslatedata } from "../../../core/json/language_translate.tsx";
import { all_routes } from "../../router/all_routes.tsx";

const LanguageTranslate = () => {
  const routes = all_routes;
  const [isActive, setIsActive] = useState(false);

  const handleClick = () => {
    setIsActive(!isActive);
  };
  const [searchInput] = useState("");
  const filteredData = languagetranslatedata.filter((datas) => {
    const values = Object.values(datas).map((value) =>
      value.toString().toLowerCase()
    );
    return values.some((value) => value.includes(searchInput.toLowerCase()));
  });
  const courtNameRender = () => {
    return (
      <label className="checkboxs">
        <input type="checkbox" id="select-all" />
        <span className="checkmarks" />
      </label>
    );
  };
  const action = () => {
    return (
      <div className="actions">
        <Link
          to="#"
          className="btn btn-sm bg-gray-light me-2"
          data-bs-toggle="modal"
          data-bs-target="#edit-transaction"
        >
          <i className="bx bx-pencil"></i>
        </Link>
        <Link
          to="#"
          className="btn btn-sm bg-danger-light"
          data-bs-toggle="modal"
          data-bs-target="#delete-user"
        >
          <i className="bx bx-x"></i>
        </Link>
      </div>
    );
  };
  const Progress = ({ progress }) => {
    // Function to determine the class based on progress
    const getProgressBarClass = (progress) => {
      // Parse the progress percentage as a number
      const progressPercentage = parseInt(progress);
  
      // Determine the class based on progress
      if (progressPercentage >= 80) {
        return "bg-info"; // Green color for progress >= 80%
      } else if (progressPercentage <= 50) {
        return "bg-success"; 
      } else {
        return "bg-warning"; 
      }
    };
  
    // Get the class for the progress bar
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

  return (
    <div>
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
              <div className="card card-table translate-table  flex-fill">
                <div className="card-body">
                  <div className="table-top">
                    <div className="wordset">
                      <ul>
                        <li>
                          <Link
                            to={routes.language}
                            className="refine-filter back-transaction"
                          >
                            <span>
                              <i className="bx bx-arrow-back me-1" />
                            </span>
                            Back to Translations{" "}
                          </Link>
                        </li>
                        <li>
                          <div className="language-blk">
                            <h2 className="table-avatar language-avatar">
                              <Link
                                to={routes.languageTranslate}
                                data-bs-toggle="modal"
                                data-bs-target="#translate-language"
                              >
                                <img
                                  className="avatar-img rounded-circle me-2"
                                  src="assets/img/flag/flag-01.png"
                                  alt="User Image"
                                />
                                English
                              </Link>
                            </h2>
                          </div>
                        </li>
                      </ul>
                    </div>
                    <div className="layout-blk">
                      <ul>
                        <li>
                          <Link className="active layout-ltr" to="#">
                            LTR
                          </Link>
                        </li>
                        <li>
                        <Link
          className={isActive ? "layout-rtl active" : "layout-rtl"}
          to="#"
          onClick={handleClick}
        >
          RTL
        </Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className={isActive ? "table-responsive table-ltr-rtl table-direction" : "table-responsive table-ltr-rtl"}>
                    <DataTable
                      className="table datatable"
                      value={filteredData}
                      paginator
                      rows={10}
                      rowsPerPageOptions={[10, 25, 50]}
                      currentPageReportTemplate="{first}"
                    >
                      <Column body={courtNameRender}></Column>
                      <Column sortable field="medium" header="Medium"></Column>
                      <Column sortable field="file" header="File"></Column>
                      <Column sortable field="total" header="Total"></Column>
                      <Column
                        sortable
                        field="complete"
                        header="Complete"
                      ></Column>
                      <Column
                        field="progress"
                        header="Progress"
                        body={(rowData) => (
                          <Progress progress={rowData.progress} />
                        )}
                      ></Column>
                      <Column
                        sortable
                        field="action"
                        header="Action"
                        body={action}
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
        {/* Transaction */}
        <div className="modal fade language-translate" id="translate-language">
          <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content">
              <div className="modal-header">
                <div className="progress-language ">
                  <div className="percentage-progress">
                    <div className="language-blk">
                      <h2 className="table-avatar language-avatar">
                        <Link
                          to="#"
                          data-bs-toggle="modal"
                          data-bs-target="#translate-language"
                        >
                          <img
                            className="avatar-img rounded-circle me-2"
                            src="assets/img/flag/flag-02.png"
                            alt="User Image"
                          />
                          Arabic
                        </Link>
                      </h2>
                    </div>
                    <div className="track-statistics mb-0">
                      <span>Progress</span>
                      <div className="d-flex align-items-center">
                        <div className="progress mb-0">
                          <div
                            className="progress-bar bg-info progress-bar"
                            role="progressbar"
                            style={{ width: "90%" }}
                            aria-valuenow={90}
                            aria-valuemin={0}
                            aria-valuemax={100}
                          />
                        </div>
                        <div className="statistic-head ">
                          <p>90%</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div>
                    <Link
                      to={routes.language}
                      className="refine-filter back-transaction"
                    >
                      <span>
                        <i className="bx bx-arrow-back me-1" />
                      </span>
                      Back to Translations{" "}
                    </Link>
                  </div>
                </div>
              </div>
              <div className="modal-body">
                <div className="user-profiles-group mb-4">
                  <div className="table-responsive">
                    <table className="table table-hover table-center mb-0">
                      <thead>
                        <tr>
                          <th>English</th>
                          <th>Arabic</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>Bugs</td>
                          <td>
                            <div className="pass-login mb-0">
                              <input
                                type="text"
                                className="form-control"
                                defaultValue="البق"
                              />
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td>Bugs Email</td>
                          <td>
                            <div className="pass-login mb-0">
                              <input
                                type="text"
                                className="form-control"
                                defaultValue="لبق البريد الإلكتروني"
                              />
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td>Bug Assigned</td>
                          <td>
                            <div className="pass-login mb-0">
                              <input
                                type="text"
                                className="form-control"
                                defaultValue="علة المخصصة"
                              />
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td>Bug Comments</td>
                          <td>
                            <div className="pass-login mb-0">
                              <input
                                type="text"
                                className="form-control"
                                defaultValue="علة تعليقات"
                              />
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td>Bug Attachment</td>
                          <td>
                            <div className="pass-login mb-0">
                              <input
                                type="text"
                                className="form-control"
                                defaultValue="البقعلة مرفق"
                              />
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td>Bug Updated</td>
                          <td>
                            <div className="pass-login mb-0">
                              <input
                                type="text"
                                className="form-control"
                                defaultValue="البق بمجلس تم الحفظ بنجاح"
                              />
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td>Bug Reported</td>
                          <td>
                            <div className="pass-login mb-0">
                              <input
                                type="text"
                                className="form-control"
                                defaultValue="توقيت بمجلس المحذوفة بنجاح													"
                              />
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td>Bugs information successfully updated</td>
                          <td>
                            <div className="pass-login mb-0">
                              <input
                                type="text"
                                className="form-control"
                                defaultValue="البق بمجلس المحذوفة بنجاح													"
                              />
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td> Bugs information successfully Saved</td>
                          <td>
                            <div className="pass-login mb-0">
                              <input
                                type="text"
                                className="form-control"
                                defaultValue="علة التحديث"
                              />
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td>Timer information successfully Deleted</td>
                          <td>
                            <div className="pass-login mb-0">
                              <input
                                type="text"
                                className="form-control"
                                defaultValue="آخر البق الجديدة التي تمت إضافتها"
                              />
                            </div>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
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
        {/* Transaction */}
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
                          <input type="text" className="form-control " />
                        </div>
                      </div>
                      <div className="col-md-12">
                        <div className="pass-login">
                          <label className="form-label">
                            Code <span className="dark-red">*</span>
                          </label>
                          <input type="text" className="form-control" />
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
        {/* Transaction */}
        <div className="modal fade " id="edit-transaction">
          <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Edit Transalation</h5>
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
                            type="text"
                            className="form-control "
                            defaultValue="Arabic"
                          />
                        </div>
                      </div>
                      <div className="col-md-12">
                        <div className="pass-login">
                          <label className="form-label">
                            Code <span className="dark-red">*</span>
                          </label>
                          <input
                            type="text"
                            className="form-control "
                            defaultValue={435}
                          />
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
    </div>
  );
};

export default LanguageTranslate;
