import React ,{ useState }from 'react';
import { Link } from "react-router-dom";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { languageadmindata } from '../../../core/json/language_admin.tsx';
import PropTypes from 'prop-types';
import { all_routes } from '../../router/all_routes.tsx';

const LanguageAdmin = () => {
  const [isActive, setIsActive] = useState(false);

  const handleClick = () => {
    setIsActive(!isActive);
  };
  
  const routes = all_routes;
  const [searchInput] = useState("");
  const filteredData = languageadmindata.filter((datas) => {
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
                            src="/admin/assets/img/flag/flag-01.png"
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
  
</>

    </div>
  )
}

export default LanguageAdmin