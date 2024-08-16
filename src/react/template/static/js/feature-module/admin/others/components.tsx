import React from 'react'
import { Link } from 'react-router-dom'

const Components = () => {
  return (
    <>
    {/* Page Wrapper */}
    <div className="page-wrapper profile-set-wrapper">
      <div className="content container-fluid profile-set-content">
        <div className="page-header">
          <div className="page-title">
            <h4>Components</h4>
          </div>
        </div>
        <div className="row">
          <div className="col-sm-12">
            {/* Avatar */}
            <section className="comp-section">
              <div className="section-header">
                <h3 className="section-title">Avatar</h3>
                <div className="line" />
              </div>
              <div className="row">
                <div className="col-md-12">
                  <div className="card">
                    <div className="card-header">
                      <h4 className="card-title">Sizing</h4>
                    </div>
                    <div className="card-body">
                      <div className="avatar avatar-xxl me-1">
                        <img
                          className="avatar-img rounded-circle"
                          alt="User Image"
                          src="/admin/assets/img/profiles/avatar-02.jpg"
                        />
                      </div>
                      <div className="avatar avatar-xl me-1">
                        <img
                          className="avatar-img rounded-circle"
                          alt="User Image"
                          src="/admin/assets/img/profiles/avatar-02.jpg"
                        />
                      </div>
                      <div className="avatar avatar-lg me-1">
                        <img
                          className="avatar-img rounded-circle"
                          alt="User Image"
                          src="/admin/assets/img/profiles/avatar-02.jpg"
                        />
                      </div>
                      <div className="avatar">
                        <img
                          className="avatar-img rounded-circle"
                          alt="User Image"
                          src="/admin/assets/img/profiles/avatar-02.jpg"
                        />
                      </div>
                      <div className="avatar avatar-sm me-1">
                        <img
                          className="avatar-img rounded-circle"
                          alt="User Image"
                          src="/admin/assets/img/profiles/avatar-02.jpg"
                        />
                      </div>
                      <div className="avatar avatar-xs me-1">
                        <img
                          className="avatar-img rounded-circle"
                          alt="User Image"
                          src="/admin/assets/img/profiles/avatar-02.jpg"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-12">
                  <div className="card">
                    <div className="card-header">
                      <h4 className="card-title">Avatar With Status</h4>
                    </div>
                    <div className="card-body">
                      <div className="avatar avatar-online me-1">
                        <img
                          className="avatar-img rounded-circle"
                          alt="User Image"
                          src="/admin/assets/img/profiles/avatar-02.jpg"
                        />
                      </div>
                      <div className="avatar avatar-offline me-1">
                        <img
                          className="avatar-img rounded-circle"
                          alt="User Image"
                          src="/admin/assets/img/profiles/avatar-02.jpg"
                        />
                      </div>
                      <div className="avatar avatar-away me-1">
                        <img
                          className="avatar-img rounded-circle"
                          alt="User Image"
                          src="/admin/assets/img/profiles/avatar-02.jpg"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-12">
                  <div className="card">
                    <div className="card-header">
                      <h4 className="card-title">Shape</h4>
                    </div>
                    <div className="card-body">
                      <div className="avatar">
                        <img
                          className="avatar-img rounded me-1"
                          alt="User Image"
                          src="/admin/assets/img/profiles/avatar-02.jpg"
                        />
                      </div>
                      <div className="avatar me-1">
                        <img
                          className="avatar-img rounded-circle"
                          alt="User Image"
                          src="/admin/assets/img/profiles/avatar-02.jpg"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-12">
                  <div className="card">
                    <div className="card-header">
                      <h4 className="card-title">Group</h4>
                    </div>
                    <div className="card-body">
                      <div className="avatar-group">
                        <div className="avatar">
                          <img
                            className="avatar-img rounded-circle border border-white"
                            alt="User Image"
                            src="/admin/assets/img/profiles/avatar-02.jpg"
                          />
                        </div>
                        <div className="avatar">
                          <img
                            className="avatar-img rounded-circle border border-white"
                            alt="User Image"
                            src="/admin/assets/img/profiles/avatar-03.jpg"
                          />
                        </div>
                        <div className="avatar">
                          <img
                            className="avatar-img rounded-circle border border-white"
                            alt="User Image"
                            src="/admin/assets/img/profiles/avatar-04.jpg"
                          />
                        </div>
                        <div className="avatar">
                          <span className="avatar-title rounded-circle border border-white">
                            CF
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            {/* /Avatar */}
            {/* Alerts */}
            <section className="comp-section">
              <div className="section-header">
                <h3 className="section-title">Alerts</h3>
                <div className="line" />
              </div>
              <div className="card">
                <div className="card-body">
                  <div
                    className="alert alert-primary alert-dismissible fade show"
                    role="alert"
                  >
                    <strong>Holy guacamole!</strong> You should check in on some
                    of those fields below.
                    <button
                      type="button"
                      className="close"
                      data-bs-dismiss="alert"
                      aria-label="Close"
                    >
                      <span aria-hidden="true">×</span>
                    </button>
                  </div>
                  <div
                    className="alert alert-secondary alert-dismissible fade show"
                    role="alert"
                  >
                    <strong>Holy guacamole!</strong> You should check in on some
                    of those fields below.
                    <button
                      type="button"
                      className="close"
                      data-bs-dismiss="alert"
                      aria-label="Close"
                    >
                      <span aria-hidden="true">×</span>
                    </button>
                  </div>
                  <div
                    className="alert alert-warning alert-dismissible fade show"
                    role="alert"
                  >
                    <strong>Warning!</strong> There was a problem with your{" "}
                    <a href="#" className="alert-link">
                      network connection
                    </a>
                    .
                    <button
                      type="button"
                      className="close"
                      data-bs-dismiss="alert"
                      aria-label="Close"
                    >
                      <span aria-hidden="true">×</span>
                    </button>
                  </div>
                  <div
                    className="alert alert-danger alert-dismissible fade show"
                    role="alert"
                  >
                    <strong>Error!</strong> A{" "}
                    <a href="#" className="alert-link">
                      problem
                    </a>{" "}
                    has been occurred while submitting your data.
                    <button
                      type="button"
                      className="close"
                      data-bs-dismiss="alert"
                      aria-label="Close"
                    >
                      <span aria-hidden="true">×</span>
                    </button>
                  </div>
                  <div
                    className="alert alert-success alert-dismissible fade show"
                    role="alert"
                  >
                    <strong>Success!</strong> Your{" "}
                    <a href="#" className="alert-link">
                      message
                    </a>{" "}
                    has been sent successfully.
                    <button
                      type="button"
                      className="close"
                      data-bs-dismiss="alert"
                      aria-label="Close"
                    >
                      <span aria-hidden="true">×</span>
                    </button>
                  </div>
                  <div
                    className="alert alert-info alert-dismissible fade show"
                    role="alert"
                  >
                    <strong>Note!</strong> Please read the{" "}
                    <a href="#" className="alert-link">
                      comments
                    </a>{" "}
                    carefully.
                    <button
                      type="button"
                      className="close"
                      data-bs-dismiss="alert"
                      aria-label="Close"
                    >
                      <span aria-hidden="true">×</span>
                    </button>
                  </div>
                  <div
                    className="alert alert-light alert-dismissible fade show"
                    role="alert"
                  >
                    <strong>Holy guacamole!</strong> You should check in on some
                    of those fields below.
                    <button
                      type="button"
                      className="close"
                      data-bs-dismiss="alert"
                      aria-label="Close"
                    >
                      <span aria-hidden="true">×</span>
                    </button>
                  </div>
                  <div
                    className="alert alert-dark alert-dismissible fade show mb-0"
                    role="alert"
                  >
                    <strong>Holy guacamole!</strong> You should check in on some
                    of those fields below.
                    <button
                      type="button"
                      className="close"
                      data-bs-dismiss="alert"
                      aria-label="Close"
                    >
                      <span aria-hidden="true">×</span>
                    </button>
                  </div>
                </div>
              </div>
            </section>
            {/* /Alerts */}
            {/* Breadcrumbs */}
            <section className="comp-section">
              <div className="section-header">
                <h3 className="section-title">Breadcrumbs</h3>
                <div className="line" />
              </div>
              <div className="card">
                <div className="card-body">
                  <nav aria-label="breadcrumb">
                    <ol className="breadcrumb">
                      <li className="breadcrumb-item active" aria-current="page">
                        Home
                      </li>
                    </ol>
                  </nav>
                  <nav aria-label="breadcrumb">
                    <ol className="breadcrumb">
                      <li className="breadcrumb-item">
                        <a href="#">Home</a>
                      </li>
                      <li className="breadcrumb-item active" aria-current="page">
                        Products
                      </li>
                    </ol>
                  </nav>
                  <nav aria-label="breadcrumb">
                    <ol className="breadcrumb mb-0">
                      <li className="breadcrumb-item">
                        <a href="#">Home</a>
                      </li>
                      <li className="breadcrumb-item">
                        <a href="#">Products</a>
                      </li>
                      <li className="breadcrumb-item active" aria-current="page">
                        Accessories
                      </li>
                    </ol>
                  </nav>
                </div>
              </div>
            </section>
            {/* /Breadcrumbs */}
            {/* Buttons */}
            <section className="comp-section comp-buttons">
              <div className="section-header">
                <h3 className="section-title">Buttons</h3>
                <div className="line" />
              </div>
              <div className="card">
                <div className="card-body">
                  <h4 className="card-title">Default Button</h4>
                  <button type="button" className="btn btn-primary me-1">
                    Primary
                  </button>
                  <button type="button" className="btn btn-secondary me-1">
                    Secondary
                  </button>
                  <button type="button" className="btn btn-success me-1">
                    Success
                  </button>
                  <button type="button" className="btn btn-danger me-1 ">
                    Danger
                  </button>
                  <button type="button" className="btn btn-warning me-1">
                    Warning
                  </button>
                  <button type="button" className="btn btn-info me-1">
                    Info
                  </button>
                  <button type="button" className="btn btn-light me-1">
                    Light
                  </button>
                  <button type="button" className="btn btn-dark me-1">
                    Dark
                  </button>
                  <button type="button" className="btn btn-link me-1">
                    Link
                  </button>
                  <hr />
                  <h4 className="card-title">Button Sizes</h4>
                  <p>
                    <button type="button" className="btn btn-primary btn-lg me-1">
                      Primary
                    </button>
                    <button type="button" className="btn btn-secondary btn-lg me-1">
                      Secondary
                    </button>
                    <button type="button" className="btn btn-success btn-lg me-1">
                      Success
                    </button>
                    <button type="button" className="btn btn-danger btn-lg me-1">
                      Danger
                    </button>
                    <button type="button" className="btn btn-warning btn-lg me-1">
                      Warning
                    </button>
                    <button type="button" className="btn btn-info btn-lg me-1">
                      Info
                    </button>
                    <button type="button" className="btn btn-light btn-lg me-1">
                      Light
                    </button>
                    <button type="button" className="btn btn-dark btn-lg me-1">
                      Dark
                    </button>
                  </p>
                  <p>
                    <button type="button" className="btn btn-primary me-1">
                      Primary
                    </button>
                    <button type="button" className="btn btn-secondary me-1">
                      Secondary
                    </button>
                    <button type="button" className="btn btn-success me-1">
                      Success
                    </button>
                    <button type="button" className="btn btn-danger me-1">
                      Danger
                    </button>
                    <button type="button" className="btn btn-warning me-1">
                      Warning
                    </button>
                    <button type="button" className="btn btn-info me-1">
                      Info
                    </button>
                    <button type="button" className="btn btn-light me-1">
                      Light
                    </button>
                    <button type="button" className="btn btn-dark me-1">
                      Dark
                    </button>
                  </p>
                  <p>
                    <button type="button" className="btn btn-primary btn-sm me-1">
                      Primary
                    </button>
                    <button type="button" className="btn btn-secondary btn-sm me-1">
                      Secondary
                    </button>
                    <button type="button" className="btn btn-success btn-sm me-1">
                      Success
                    </button>
                    <button type="button" className="btn btn-danger btn-sm me-1">
                      Danger
                    </button>
                    <button type="button" className="btn btn-warning btn-sm me-1">
                      Warning
                    </button>
                    <button type="button" className="btn btn-info btn-sm me-1">
                      Info
                    </button>
                    <button type="button" className="btn btn-light btn-sm me-1">
                      Light
                    </button>
                    <button type="button" className="btn btn-dark btn-sm me-1">
                      Dark
                    </button>
                  </p>
                  <hr />
                  <h4 className="card-title">Button Groups</h4>
                  <div className="btn-toolbar">
                    <div className="btn-group btn-group-lg">
                      <button type="button" className="btn btn-primary">
                        Left
                      </button>
                      <button type="button" className="btn btn-primary">
                        Middle
                      </button>
                      <button type="button" className="btn btn-primary">
                        Right
                      </button>
                    </div>
                  </div>
                  <br />
                  <div className="btn-toolbar">
                    <div className="btn-group">
                      <button type="button" className="btn btn-primary">
                        Left
                      </button>
                      <button type="button" className="btn btn-primary">
                        Middle
                      </button>
                      <button type="button" className="btn btn-primary">
                        Right
                      </button>
                    </div>
                  </div>
                  <br />
                  <div className="btn-toolbar">
                    <div className="btn-group btn-group-sm">
                      <button type="button" className="btn btn-primary">
                        Left
                      </button>
                      <button type="button" className="btn btn-primary">
                        Middle
                      </button>
                      <button type="button" className="btn btn-primary">
                        Right
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              {/* Rounded Button */}
              <div className="card">
                <div className="card-header">
                  <h4 className="card-title">Rounded Button</h4>
                  <p className="card-text">
                    use <code>.btn-rounded</code> in class <code>.btn</code> class
                    to get Rounded button
                  </p>
                </div>
                <div className="card-body">
                  <button type="button" className="btn btn-rounded btn-primary me-1">
                    Primary
                  </button>
                  <button type="button" className="btn btn-rounded btn-secondary me-1">
                    Secondary
                  </button>
                  <button type="button" className="btn btn-rounded btn-success me-1">
                    Success
                  </button>
                  <button type="button" className="btn btn-rounded btn-danger me-1">
                    Danger
                  </button>
                  <button type="button" className="btn btn-rounded btn-warning me-1">
                    Warning
                  </button>
                  <button type="button" className="btn btn-rounded btn-info me-1">
                    Info
                  </button>
                  <button type="button" className="btn btn-rounded btn-light me-1">
                    Light
                  </button>
                  <button type="button" className="btn btn-rounded btn-dark me-1">
                    Dark
                  </button>
                  <hr />
                  <p>
                    use <code>.btn-rounded</code> in class{" "}
                    <code>.btn-outline-*</code> class to get Rounded Outline
                    button
                  </p>
                  <button
                    type="button"
                    className="btn btn-rounded btn-outline-primary me-1"
                  >
                    Primary
                  </button>
                  <button
                    type="button"
                    className="btn btn-rounded btn-outline-secondary me-1"
                  >
                    Secondary
                  </button>
                  <button
                    type="button"
                    className="btn btn-rounded btn-outline-success me-1"
                  >
                    Success
                  </button>
                  <button
                    type="button"
                    className="btn btn-rounded btn-outline-danger me-1"
                  >
                    Danger
                  </button>
                  <button
                    type="button"
                    className="btn btn-rounded btn-outline-warning me-1"
                  >
                    Warning
                  </button>
                  <button
                    type="button"
                    className="btn btn-rounded btn-outline-info me-1"
                  >
                    Info
                  </button>
                  <button
                    type="button"
                    className="btn btn-rounded btn-outline-light me-1"
                  >
                    Light
                  </button>
                  <button
                    type="button"
                    className="btn btn-rounded btn-outline-dark me-1"
                  >
                    Dark
                  </button>
                </div>
              </div>
              {/* /Rounded Button */}
              {/* Outline Buttons */}
              <div className="card">
                <div className="card-header">
                  <h4 className="card-title">Outline Buttons</h4>
                  <p className="card-text">
                    Use <code>.btn-outline-*</code> class for outline buttons.
                  </p>
                </div>
                <div className="card-body">
                  <div className="row row-sm align-items-center">
                    <div className="col-12 col-xl mb-3 mb-xl-0">Normal</div>
                    <div className="col-6 col-sm-4 col-md-2 col-xl mb-3 mb-xl-0">
                      <button
                        type="button"
                        className="btn btn-block btn-outline-primary me-1"
                      >
                        Primary
                      </button>
                    </div>
                    <div className="col-6 col-sm-4 col-md-2 col-xl mb-3 mb-xl-0">
                      <button
                        type="button"
                        className="btn btn-block btn-outline-secondary me-1"
                      >
                        Secondary
                      </button>
                    </div>
                    <div className="col-6 col-sm-4 col-md-2 col-xl mb-3 mb-xl-0">
                      <button
                        type="button"
                        className="btn btn-block btn-outline-success me-1"
                      >
                        Success
                      </button>
                    </div>
                    <div className="col-6 col-sm-4 col-md-2 col-xl mb-3 mb-xl-0">
                      <button
                        type="button"
                        className="btn btn-block btn-outline-warning"
                      >
                        Warning
                      </button>
                    </div>
                    <div className="col-6 col-sm-4 col-md-2 col-xl mb-3 mb-xl-0">
                      <button
                        type="button"
                        className="btn btn-block btn-outline-danger"
                      >
                        Danger
                      </button>
                    </div>
                    <div className="col-6 col-sm-4 col-md-2 col-xl mb-3 mb-xl-0">
                      <button
                        type="button"
                        className="btn btn-block btn-outline-info"
                      >
                        Info
                      </button>
                    </div>
                    <div className="col-6 col-sm-4 col-md-2 col-xl mb-3 mb-xl-0">
                      <button
                        type="button"
                        className="btn btn-block btn-outline-light"
                      >
                        Light
                      </button>
                    </div>
                    <div className="col-6 col-sm-4 col-md-2 col-xl mb-3 mb-xl-0">
                      <button
                        type="button"
                        className="btn btn-block btn-outline-dark"
                      >
                        Dark
                      </button>
                    </div>
                  </div>
                  <div className="row row-sm align-items-center mt-3">
                    <div className="col-12 col-xl mb-3 mb-xl-0">Active</div>
                    <div className="col-6 col-sm-4 col-md-2 col-xl mb-3 mb-xl-0">
                      <button
                        type="button"
                        className="btn btn-block btn-outline-primary active"
                      >
                        Primary
                      </button>
                    </div>
                    <div className="col-6 col-sm-4 col-md-2 col-xl mb-3 mb-xl-0">
                      <button
                        type="button"
                        className="btn btn-block btn-outline-secondary active"
                      >
                        Secondary
                      </button>
                    </div>
                    <div className="col-6 col-sm-4 col-md-2 col-xl mb-3 mb-xl-0">
                      <button
                        type="button"
                        className="btn btn-block btn-outline-success active"
                      >
                        Success
                      </button>
                    </div>
                    <div className="col-6 col-sm-4 col-md-2 col-xl mb-3 mb-xl-0">
                      <button
                        type="button"
                        className="btn btn-block btn-outline-warning active"
                      >
                        Warning
                      </button>
                    </div>
                    <div className="col-6 col-sm-4 col-md-2 col-xl mb-3 mb-xl-0">
                      <button
                        type="button"
                        className="btn btn-block btn-outline-danger active"
                      >
                        Danger
                      </button>
                    </div>
                    <div className="col-6 col-sm-4 col-md-2 col-xl mb-3 mb-xl-0">
                      <button
                        type="button"
                        className="btn btn-block btn-outline-info active"
                      >
                        Info
                      </button>
                    </div>
                    <div className="col-6 col-sm-4 col-md-2 col-xl mb-3 mb-xl-0">
                      <button
                        type="button"
                        className="btn btn-block btn-outline-light active"
                      >
                        Light
                      </button>
                    </div>
                    <div className="col-6 col-sm-4 col-md-2 col-xl mb-3 mb-xl-0">
                      <button
                        type="button"
                        className="btn btn-block btn-outline-dark active"
                      >
                        Dark
                      </button>
                    </div>
                  </div>
                  <div className="row row-sm align-items-center mt-3">
                    <div className="col-12 col-xl mb-3 mb-xl-0">Disabled</div>
                    <div className="col-6 col-sm-4 col-md-2 col-xl mb-3 mb-xl-0">
                      <button
                        disabled={false}
                        type="button"
                        className="btn btn-block btn-outline-primary"
                      >
                        Primary
                      </button>
                    </div>
                    <div className="col-6 col-sm-4 col-md-2 col-xl mb-3 mb-xl-0">
                      <button
                        disabled={false}
                        type="button"
                        className="btn btn-block btn-outline-secondary"
                      >
                        Secondary
                      </button>
                    </div>
                    <div className="col-6 col-sm-4 col-md-2 col-xl mb-3 mb-xl-0">
                      <button
                        disabled={false}
                        type="button"
                        className="btn btn-block btn-outline-success"
                      >
                        Success
                      </button>
                    </div>
                    <div className="col-6 col-sm-4 col-md-2 col-xl mb-3 mb-xl-0">
                      <button
                        disabled={false}
                        type="button"
                        className="btn btn-block btn-outline-warning"
                      >
                        Warning
                      </button>
                    </div>
                    <div className="col-6 col-sm-4 col-md-2 col-xl mb-3 mb-xl-0">
                      <button
                        disabled={false}
                        type="button"
                        className="btn btn-block btn-outline-danger"
                      >
                        Danger
                      </button>
                    </div>
                    <div className="col-6 col-sm-4 col-md-2 col-xl mb-3 mb-xl-0">
                      <button
                        disabled={false}
                        type="button"
                        className="btn btn-block btn-outline-info"
                      >
                        Info
                      </button>
                    </div>
                    <div className="col-6 col-sm-4 col-md-2 col-xl mb-3 mb-xl-0">
                      <button
                        disabled={false}
                        type="button"
                        className="btn btn-block btn-outline-light"
                      >
                        Light
                      </button>
                    </div>
                    <div className="col-6 col-sm-4 col-md-2 col-xl mb-3 mb-xl-0">
                      <button
                        disabled={false}
                        type="button"
                        className="btn btn-block btn-outline-dark"
                      >
                        Dark
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              {/* /Outline Buttons */}
              {/* Progress Button */}
              <div className="card mb-4">
                <div className="card-header">
                  <h4 className="card-title">Progress Button</h4>
                </div>
                <div className="card-body">
                  <button type="button" className="btn btn-primary me-1">
                    <span
                      className="spinner-border spinner-border-sm me-2"
                      role="status"
                    />
                    Primary
                  </button>
                  <button type="button" className="btn btn-secondary me-1">
                    <span
                      className="spinner-border spinner-border-sm me-2"
                      role="status"
                    />
                    Secondary
                  </button>
                  <button type="button" className="btn btn-success me-1">
                    <span
                      className="spinner-border spinner-border-sm me-2"
                      role="status"
                    />
                    Success
                  </button>
                  <button type="button" className="btn btn-danger  me-1">
                    <span
                      className="spinner-border spinner-border-sm me-2"
                      role="status"
                    />
                    Danger
                  </button>
                  <button type="button" className="btn btn-warning  me-1">
                    <span
                      className="spinner-border spinner-border-sm me-2"
                      role="status"
                    />
                    Warning
                  </button>
                  <button type="button" className="btn btn-info  me-1">
                    <span
                      className="spinner-border spinner-border-sm me-2"
                      role="status"
                    />
                    Info
                  </button>
                  <button type="button" className="btn btn-dark  me-1">
                    <span
                      className="spinner-border spinner-border-sm me-2"
                      role="status"
                    />
                    Dark
                  </button>
                </div>
              </div>
              {/* /Progress Button */}
            </section>
            {/* Buttons */}
            {/* Cards */}
            <section className="comp-section comp-cards">
              <div className="section-header">
                <h3 className="section-title">Cards</h3>
                <div className="line" />
              </div>
              <div className="row">
                <div className="col-12 col-md-6 col-lg-4 d-flex">
                  <div className="card flex-fill">
                    <img
                      alt="Card Image"
                      src="/admin/assets/img/profiles/avatar-02.jpg"
                      className="card-img-top"
                    />
                    <div className="card-header">
                      <h5 className="card-title mb-0">
                        Card with image and links
                      </h5>
                    </div>
                    <div className="card-body">
                      <p className="card-text">
                        Some quick example text to build on the card title and
                        make up the bulk of the card&apos;s content.
                      </p>
                      <a className="card-link" href="#">
                        Card link
                      </a>
                      <a className="card-link" href="#">
                        Another link
                      </a>
                    </div>
                  </div>
                </div>
                <div className="col-12 col-md-6 col-lg-4 d-flex">
                  <div className="card flex-fill">
                    <img
                      alt="Card Image"
                      src="/admin/assets/img/profiles/avatar-02.jpg"
                      className="card-img-top"
                    />
                    <div className="card-header">
                      <h5 className="card-title mb-0">
                        Card with image and button
                      </h5>
                    </div>
                    <div className="card-body">
                      <p className="card-text">
                        Some quick example text to build on the card title and
                        make up the bulk of the card&apos;s content.
                      </p>
                      <a className="btn btn-primary" href="#">
                        Go somewhere
                      </a>
                    </div>
                  </div>
                </div>
                <div className="col-12 col-md-6 col-lg-4 d-flex">
                  <div className="card flex-fill">
                    <img
                      alt="Card Image"
                      src="/admin/assets/img/profiles/avatar-02.jpg"
                      className="card-img-top"
                    />
                    <div className="card-header">
                      <h5 className="card-title mb-0">
                        Card with image and list
                      </h5>
                    </div>
                    <ul className="list-group list-group-flush">
                      <li className="list-group-item">Cras justo odio</li>
                      <li className="list-group-item">Dapibus ac facilisis in</li>
                      <li className="list-group-item">Vestibulum at eros</li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-12 col-md-6 col-lg-4 d-flex">
                  <div className="card flex-fill">
                    <div className="card-header">
                      <h5 className="card-title mb-0">Card with links</h5>
                    </div>
                    <div className="card-body">
                      <p className="card-text">
                        Some quick example text to build on the card title and
                        make up the bulk of the card&apos;s content.
                      </p>
                      <a className="card-link" href="#">
                        Card link
                      </a>
                      <a className="card-link" href="#">
                        Another link
                      </a>
                    </div>
                  </div>
                </div>
                <div className="col-12 col-md-6 col-lg-4 d-flex">
                  <div className="card flex-fill">
                    <div className="card-header">
                      <h5 className="card-title mb-0">Card with button</h5>
                    </div>
                    <div className="card-body">
                      <p className="card-text">
                        Some quick example text to build on the card title and
                        make up the bulk of the card&apos;s content.
                      </p>
                      <a className="btn btn-primary" href="#">
                        Go somewhere
                      </a>
                    </div>
                  </div>
                </div>
                <div className="col-12 col-md-6 col-lg-4 d-flex">
                  <div className="card flex-fill">
                    <div className="card-header">
                      <h5 className="card-title mb-0">Card with list</h5>
                    </div>
                    <ul className="list-group list-group-flush">
                      <li className="list-group-item">Cras justo odio</li>
                      <li className="list-group-item">Dapibus ac facilisis in</li>
                      <li className="list-group-item">Vestibulum at eros</li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-12 col-md-6 col-lg-4 d-flex">
                  <div className="card flex-fill">
                    <div className="card-header">This is my header</div>
                    <div className="card-body">
                      <h5 className="card-title">Special title treatment</h5>
                      <p className="card-text">
                        Some quick example text to build on the card title and
                        make up the bulk of the card`&apos;s content.
                      </p>
                    </div>
                    <div className="card-footer text-muted">
                      This is my footer
                    </div>
                  </div>
                </div>
                <div className="col-12 col-md-6 col-lg-4 d-flex">
                  <div className="card flex-fill">
                    <div className="card-header">
                      <ul
                        role="tablist"
                        className="nav nav-tabs card-header-tabs float-right"
                      >
                        <li className="nav-item">
                          <a
                            href="#tab-1"
                            data-bs-toggle="tab"
                            className="nav-link active"
                          >
                            Active
                          </a>
                        </li>
                        <li className="nav-item">
                          <a
                            href="#tab-2"
                            data-bs-toggle="tab"
                            className="nav-link"
                          >
                            Link
                          </a>
                        </li>
                        <li className="nav-item">
                          <a
                            href="#tab-3"
                            data-bs-toggle="tab"
                            className="nav-link disabled"
                          >
                            Disabled
                          </a>
                        </li>
                      </ul>
                    </div>
                    <div className="card-body">
                      <div className="tab-content pt-0">
                        <div
                          role="tabpanel"
                          id="tab-1"
                          className="tab-pane fade show active"
                        >
                          <h5 className="card-title">Card with tabs</h5>
                          <p className="card-text">
                            Some quick example text to build on the card title and
                            make up the bulk of the card`&apos;s content.
                          </p>
                          <a className="btn btn-primary" href="#">
                            Go somewhere
                          </a>
                        </div>
                        <div
                          role="tabpanel"
                          id="tab-2"
                          className="tab-pane fade text-center"
                        >
                          <h5 className="card-title">Card with tabs</h5>
                          <p className="card-text">
                            Some quick example text to build on the card title and
                            make up the bulk of the card`&apos;s content.
                          </p>
                          <a className="btn btn-primary" href="#">
                            Go somewhere
                          </a>
                        </div>
                        <div role="tabpanel" id="tab-3" className="tab-pane fade">
                          <h5 className="card-title">Card with tabs</h5>
                          <p className="card-text">
                            Some quick example text to build on the card title and
                            make up the bulk of the card&apos;s content.
                          </p>
                          <a className="btn btn-primary" href="#">
                            Go somewhere
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-12 col-md-6 col-lg-4 d-flex">
                  <div className="card flex-fill">
                    <div className="card-header">
                      <ul
                        role="tablist"
                        className="nav nav-pills card-header-pills float-right"
                      >
                        <li className="nav-item">
                          <a
                            href="#tab-4"
                            data-bs-toggle="tab"
                            className="nav-link active"
                          >
                            Active
                          </a>
                        </li>
                        <li className="nav-item">
                          <a
                            href="#tab-5"
                            data-bs-toggle="tab"
                            className="nav-link"
                          >
                            Link
                          </a>
                        </li>
                        <li className="nav-item">
                          <a
                            href="#tab-6"
                            data-bs-toggle="tab"
                            className="nav-link disabled"
                          >
                            Disabled
                          </a>
                        </li>
                      </ul>
                    </div>
                    <div className="card-body">
                      <div className="tab-content pt-0">
                        <div
                          role="tabpanel"
                          id="tab-4"
                          className="tab-pane fade show active"
                        >
                          <h5 className="card-title">Card with pills</h5>
                          <p className="card-text">
                            Some quick example text to build on the card title and
                            make up the bulk of the card&apos;s content.
                          </p>
                          <a className="btn btn-primary" href="#">
                            Go somewhere
                          </a>
                        </div>
                        <div
                          role="tabpanel"
                          id="tab-5"
                          className="tab-pane fade text-center"
                        >
                          <h5 className="card-title">Card with pills</h5>
                          <p className="card-text">
                            Some quick example text to build on the card title and
                            make up the bulk of the card&apos;s content.
                          </p>
                          <a className="btn btn-primary" href="#">
                            Go somewhere
                          </a>
                        </div>
                        <div role="tabpanel" id="tab-6" className="tab-pane fade">
                          <h5 className="card-title">Card with pills</h5>
                          <p className="card-text">
                            Some quick example text to build on the card title and
                            make up the bulk of the card&apos;s content.
                          </p>
                          <a className="btn btn-primary" href="#">
                            Go somewhere
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            {/* /Cards */}
            {/* Dropdowns */}
            <section className="comp-section comp-dropdowns">
              <div className="section-header">
                <h3 className="section-title">Dropdowns</h3>
                <div className="line" />
              </div>
              <div className="card">
                <div className="card-body">
                  <h4 className="card-title">Dropdowns within Text</h4>
                  <div className="dropdown">
                    <a
                      className="dropdown-toggle"
                      href="#"
                      role="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      {" "}
                      Dropdown{" "}
                    </a>
                    <div className="dropdown-menu">
                      <a className="dropdown-item" href="#">
                        Action
                      </a>
                      <a className="dropdown-item" href="#">
                        Another action
                      </a>
                    </div>
                  </div>
                  <hr />
                  <h4 className="card-title">Dropdowns within Buttons</h4>
                  <div className="btn-group">
                    <button
                      type="button"
                      className="btn btn-primary dropdown-toggle me-1"
                      data-bs-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="false"
                    >
                      Action
                    </button>
                    <div className="dropdown-menu">
                      <a className="dropdown-item" href="#">
                        Action
                      </a>
                      <a className="dropdown-item" href="#">
                        Another action
                      </a>
                      <div className="dropdown-divider" />
                      <a className="dropdown-item" href="#">
                        Separated link
                      </a>
                    </div>
                  </div>
                  <div className="btn-group">
                    <button
                      type="button"
                      className="btn btn-secondary dropdown-toggle me-1"
                      data-bs-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="false"
                    >
                      Action
                    </button>
                    <div className="dropdown-menu">
                      <a className="dropdown-item" href="#">
                        Action
                      </a>
                      <a className="dropdown-item" href="#">
                        Another action
                      </a>
                      <div className="dropdown-divider" />
                      <a className="dropdown-item" href="#">
                        Separated link
                      </a>
                    </div>
                  </div>
                  <div className="btn-group">
                    <button
                      type="button"
                      className="btn btn-info dropdown-toggle me-1"
                      data-bs-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="false"
                    >
                      Action
                    </button>
                    <div className="dropdown-menu">
                      <a className="dropdown-item" href="#">
                        Action
                      </a>
                      <a className="dropdown-item" href="#">
                        Another action
                      </a>
                      <div className="dropdown-divider" />
                      <a className="dropdown-item" href="#">
                        Separated link
                      </a>
                    </div>
                  </div>
                  <div className="btn-group">
                    <button
                      type="button"
                      className="btn btn-success dropdown-toggle me-1"
                      data-bs-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="false"
                    >
                      Action
                    </button>
                    <div className="dropdown-menu">
                      <a className="dropdown-item" href="#">
                        Action
                      </a>
                      <a className="dropdown-item" href="#">
                        Another action
                      </a>
                      <div className="dropdown-divider" />
                      <a className="dropdown-item" href="#">
                        Separated link
                      </a>
                    </div>
                  </div>
                  <div className="btn-group">
                    <button
                      type="button"
                      className="btn btn-warning dropdown-toggle me-1"
                      data-bs-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="false"
                    >
                      Action
                    </button>
                    <div className="dropdown-menu">
                      <a className="dropdown-item" href="#">
                        Action
                      </a>
                      <a className="dropdown-item" href="#">
                        Another action
                      </a>
                      <div className="dropdown-divider" />
                      <a className="dropdown-item" href="#">
                        Separated link
                      </a>
                    </div>
                  </div>
                  <div className="btn-group">
                    <button
                      type="button"
                      className="btn btn-danger dropdown-toggle me-1"
                      data-bs-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="false"
                    >
                      Action
                    </button>
                    <div className="dropdown-menu">
                      <a className="dropdown-item" href="#">
                        Action
                      </a>
                      <a className="dropdown-item" href="#">
                        Another action
                      </a>
                      <div className="dropdown-divider" />
                      <a className="dropdown-item" href="#">
                        Separated link
                      </a>
                    </div>
                  </div>
                  <hr />
                  <h4 className="card-title">Split button dropdowns</h4>
                  <div className="btn-group me-1">
                    <button type="button" className="btn btn-primary ">
                      Action
                    </button>
                    <button
                      type="button"
                      className="btn btn-primary dropdown-toggle dropdown-toggle-split"
                      data-bs-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="false"
                    >
                      <span className="sr-only">Toggle Dropdown</span>
                    </button>
                    <div className="dropdown-menu">
                      <a className="dropdown-item" href="#">
                        Action
                      </a>
                      <a className="dropdown-item" href="#">
                        Another action
                      </a>
                      <div className="dropdown-divider" />
                      <a className="dropdown-item" href="#">
                        Separated link
                      </a>
                    </div>
                  </div>
                  <div className="btn-group  me-1">
                    <button type="button" className="btn btn-secondary">
                      Action
                    </button>
                    <button
                      type="button"
                      className="btn btn-secondary dropdown-toggle dropdown-toggle-split"
                      data-bs-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="false"
                    >
                      <span className="sr-only">Toggle Dropdown</span>
                    </button>
                    <div className="dropdown-menu">
                      <a className="dropdown-item" href="#">
                        Action
                      </a>
                      <a className="dropdown-item" href="#">
                        Another action
                      </a>
                      <div className="dropdown-divider" />
                      <a className="dropdown-item" href="#">
                        Separated link
                      </a>
                    </div>
                  </div>
                  <div className="btn-group  me-1">
                    <button type="button" className="btn btn-info">
                      Action
                    </button>
                    <button
                      type="button"
                      className="btn btn-info dropdown-toggle dropdown-toggle-split"
                      data-bs-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="false"
                    >
                      <span className="sr-only">Toggle Dropdown</span>
                    </button>
                    <div className="dropdown-menu">
                      <a className="dropdown-item" href="#">
                        Action
                      </a>
                      <a className="dropdown-item" href="#">
                        Another action
                      </a>
                      <div className="dropdown-divider" />
                      <a className="dropdown-item" href="#">
                        Separated link
                      </a>
                    </div>
                  </div>
                  <div className="btn-group  me-1">
                    <button type="button" className="btn btn-success">
                      Action
                    </button>
                    <button
                      type="button"
                      className="btn btn-success dropdown-toggle dropdown-toggle-split"
                      data-bs-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="false"
                    >
                      <span className="sr-only">Toggle Dropdown</span>
                    </button>
                    <div className="dropdown-menu">
                      <a className="dropdown-item" href="#">
                        Action
                      </a>
                      <a className="dropdown-item" href="#">
                        Another action
                      </a>
                      <div className="dropdown-divider" />
                      <a className="dropdown-item" href="#">
                        Separated link
                      </a>
                    </div>
                  </div>
                  <div className="btn-group  me-1">
                    <button type="button" className="btn btn-warning">
                      Action
                    </button>
                    <button
                      type="button"
                      className="btn btn-warning dropdown-toggle dropdown-toggle-split"
                      data-bs-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="false"
                    >
                      <span className="sr-only">Toggle Dropdown</span>
                    </button>
                    <div className="dropdown-menu">
                      <a className="dropdown-item" href="#">
                        Action
                      </a>
                      <a className="dropdown-item" href="#">
                        Another action
                      </a>
                      <div className="dropdown-divider" />
                      <a className="dropdown-item" href="#">
                        Separated link
                      </a>
                    </div>
                  </div>
                  <div className="btn-group  me-1">
                    <button type="button" className="btn btn-danger">
                      Action
                    </button>
                    <button
                      type="button"
                      className="btn btn-danger dropdown-toggle dropdown-toggle-split"
                      data-bs-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="false"
                    >
                      <span className="sr-only">Toggle Dropdown</span>
                    </button>
                    <div className="dropdown-menu">
                      <a className="dropdown-item" href="#">
                        Action
                      </a>
                      <a className="dropdown-item" href="#">
                        Another action
                      </a>
                      <div className="dropdown-divider" />
                      <a className="dropdown-item" href="#">
                        Separated link
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            {/* /Dropdowns */}
            {/* Modals */}
            <section className="comp-section">
              <div className="section-header">
                <h3 className="section-title">Modals</h3>
                <div className="line" />
              </div>
              <div className="card">
                <div className="card-header">
                  <h4 className="card-title">Modal components</h4>
                </div>
                <div className="card-body">
                  <p>
                    Below is a static modal example (meaning its position and
                    display have been overridden). Included are the modal header,
                    modal body (required for padding), and modal footer
                    (optional). We ask that you include modal headers with dismiss
                    actions whenever possible, or provide another explicit dismiss
                    action.
                  </p>
                  <div
                    className="modal-1 static-modal"
                    tabIndex={-1}
                    role="dialog"
                  >
                    <div className="modal-dialog mb-2" role="document">
                      <div className="modal-content">
                        <div className="modal-header">
                          <h5 className="modal-title mt-0">Modal title</h5>
                          <button
                            type="button"
                            className="close"
                            aria-label="Close"
                          >
                            <span aria-hidden="true">×</span>
                          </button>
                        </div>
                        <div className="modal-body">
                          <p>Modal body text goes here.</p>
                        </div>
                        <div className="modal-footer">
                          <Link
                            to="#"
                            className="btn btn-secondary me-2"
                            data-bs-dismiss="close"
                          >
                            Close
                          </Link>
                          <Link to="#" className="btn btn-primary">
                            Save changes
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="card">
                <div className="card-header">
                  <h4 className="card-title">Basic Modal</h4>
                </div>
                <div className="card-body">
                  {/* Simple demo*/}
                  <button
                    className="btn btn-primary me-1"
                    type="button"
                    data-bs-toggle="modal"
                    data-original-title="test"
                    data-bs-target="#exampleModal"
                  >
                    Simple
                  </button>
                  <div
                    className="modal fade"
                    id="exampleModal"
                    tabIndex={-1}
                    role="dialog"
                    aria-labelledby="exampleModalLabel"
                    aria-hidden="true"
                  >
                    <div className="modal-dialog" role="document">
                      <div className="modal-content">
                        <div className="modal-header">
                          <h5 className="modal-title" id="exampleModalLabel">
                            Modal title
                          </h5>
                          <button
                            className="close"
                            type="button"
                            data-bs-dismiss="modal"
                            aria-label="Close"
                            data-original-title=""
                            title=""
                          >
                            <span aria-hidden="true">×</span>
                          </button>
                        </div>
                        <div className="modal-body">...</div>
                        <div className="modal-footer">
                          <button
                            className="btn btn-primary me-1"
                            type="button"
                            data-bs-dismiss="modal"
                            data-original-title=""
                            title=""
                          >
                            Close
                          </button>
                          <button
                            className="btn btn-secondary"
                            type="button"
                            data-original-title=""
                            title=""
                          >
                            Save changes
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* Scrolling long content*/}
                  <button
                    className="btn btn-primary me-1"
                    type="button"
                    data-bs-toggle="modal"
                    data-bs-target="#exampleModalLong"
                    data-original-title=""
                    title=""
                  >
                    Scrolling long content
                  </button>
                  <div
                    className="modal fade"
                    id="exampleModalLong"
                    tabIndex={-1}
                    role="dialog"
                    aria-labelledby="exampleModalLongTitle"
                    aria-hidden="true"
                  >
                    <div className="modal-dialog" role="document">
                      <div className="modal-content">
                        <div className="modal-header">
                          <h5 className="modal-title" id="exampleModalLongTitle">
                            Modal title
                          </h5>
                          <button
                            className="close"
                            type="button"
                            data-bs-dismiss="modal"
                            aria-label="Close"
                            data-original-title=""
                            title=""
                          >
                            <span aria-hidden="true">×</span>
                          </button>
                        </div>
                        <div className="modal-body">
                          <p>
                            Lorem Ipsum is simply dummy text of the printing and
                            typesetting industry. Lorem Ipsum has been the
                            industry`&apos;s standard dummy text ever since the 1500s,
                            when an unknown printer took a galley of type and
                            scrambled it to make a type specimen book. It has
                            survived not only five centuries,
                          </p>
                          <p>
                            but also the leap into electronic typesetting,
                            remaining essentially unchanged. It was popularised in
                            the 1960s with the release of Letraset sheets
                            containing Lorem Ipsum passages, and more recently
                            with desktop publishing
                          </p>
                          <p>
                            Lorem Ipsum is simply dummy text of the printing and
                            typesetting industry. Lorem Ipsum has been the
                            industry&apos;s standard dummy text ever since the 1500s,
                            when an unknown printer took a galley of type and
                            scrambled it to make a type specimen book. It has
                            survived not only five centuries,
                          </p>
                          <p>
                            but also the leap into electronic typesetting,
                            remaining essentially unchanged. It was popularised in
                            the 1960s with the release of Letraset sheets
                            containing Lorem Ipsum passages, and more recently
                            with desktop publishing
                          </p>
                          <p>
                            Lorem Ipsum is simply dummy text of the printing and
                            typesetting industry. Lorem Ipsum has been the
                            industry&apos;s standard dummy text ever since the 1500s,
                            when an unknown printer took a galley of type and
                            scrambled it to make a type specimen book. It has
                            survived not only five centuries,
                          </p>
                          <p>
                            but also the leap into electronic typesetting,
                            remaining essentially unchanged. It was popularised in
                            the 1960s with the release of Letraset sheets
                            containing Lorem Ipsum passages, and more recently
                            with desktop publishing
                          </p>
                          <p>
                            Lorem Ipsum is simply dummy text of the printing and
                            typesetting industry. Lorem Ipsum has been the
                            industry&apos;s standard dummy text ever since the 1500s,
                            when an unknown printer took a galley of type and
                            scrambled it to make a type specimen book. It has
                            survived not only five centuries,
                          </p>
                          <p>
                            but also the leap into electronic typesetting,
                            remaining essentially unchanged. It was popularised in
                            the 1960s with the release of Letraset sheets
                            containing Lorem Ipsum passages, and more recently
                            with desktop publishing
                          </p>
                          <p>
                            Lorem Ipsum is simply dummy text of the printing and
                            typesetting industry. Lorem Ipsum has been the
                            industry&apos;s standard dummy text ever since the 1500s,
                            when an unknown printer took a galley of type and
                            scrambled it to make a type specimen book. It has
                            survived not only five centuries,
                          </p>
                          <p>
                            but also the leap into electronic typesetting,
                            remaining essentially unchanged. It was popularised in
                            the 1960s with the release of Letraset sheets
                            containing Lorem Ipsum passages, and more recently
                            with desktop publishing
                          </p>
                          <p>
                            Lorem Ipsum is simply dummy text of the printing and
                            typesetting industry. Lorem Ipsum has been the
                            industry&apos;s standard dummy text ever since the 1500s,
                            when an unknown printer took a galley of type and
                            scrambled it to make a type specimen book. It has
                            survived not only five centuries,
                          </p>
                          <p>
                            but also the leap into electronic typesetting,
                            remaining essentially unchanged. It was popularised in
                            the 1960s with the release of Letraset sheets
                            containing Lorem Ipsum passages, and more recently
                            with desktop publishing
                          </p>
                        </div>
                        <div className="modal-footer">
                          <button
                            className="btn btn-secondary"
                            type="button"
                            data-bs-dismiss="modal"
                            data-original-title=""
                            title=""
                          >
                            Close
                          </button>
                          <button
                            className="btn btn-primary"
                            type="button"
                            data-original-title=""
                            title=""
                          >
                            Save changes
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* Vertically centered modal*/}
                  <button
                    className="btn btn-primary me-1"
                    type="button"
                    data-bs-toggle="modal"
                    data-bs-target="#exampleModalCenter"
                    data-original-title=""
                    title=""
                  >
                    Vertically centered
                  </button>
                  <div
                    className="modal fade"
                    id="exampleModalCenter"
                    tabIndex={-1}
                    role="dialog"
                    aria-labelledby="exampleModalCenter"
                    aria-hidden="true"
                  >
                    <div
                      className="modal-dialog modal-dialog-centered"
                      role="document"
                    >
                      <div className="modal-content">
                        <div className="modal-header">
                          <h5 className="modal-title">Modal title</h5>
                          <button
                            className="close"
                            type="button"
                            data-bs-dismiss="modal"
                            aria-label="Close"
                            data-original-title=""
                            title=""
                          >
                            <span aria-hidden="true">×</span>
                          </button>
                        </div>
                        <div className="modal-body">
                          <p>
                            Lorem Ipsum is simply dummy text of the printing and
                            typesetting industry. Lorem Ipsum has been the
                            industry`&apos;s standard dummy text ever since the 1500s,
                          </p>
                        </div>
                        <div className="modal-footer">
                          <button
                            className="btn btn-secondary"
                            type="button"
                            data-bs-dismiss="modal"
                            data-original-title=""
                            title=""
                          >
                            Close
                          </button>
                          <button
                            className="btn btn-primary"
                            type="button"
                            data-original-title=""
                            title=""
                          >
                            Save changes
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* Tooltips and popovers modal*/}
                  <button
                    className="btn btn-primary me-1"
                    type="button"
                    data-bs-toggle="modal"
                    data-bs-target="#tooltipmodal"
                    data-original-title=""
                    title=""
                  >
                    Tooltips and popovers
                  </button>
                  <div
                    className="modal fade"
                    id="tooltipmodal"
                    tabIndex={-1}
                    role="dialog"
                    aria-labelledby="tooltipmodal"
                    aria-hidden="true"
                  >
                    <div
                      className="modal-dialog modal-dialog-centered"
                      role="document"
                    >
                      <div className="modal-content">
                        <div className="modal-header">
                          <h5 className="modal-title">Modal title</h5>
                          <button
                            className="close"
                            type="button"
                            data-bs-dismiss="modal"
                            aria-label="Close"
                            data-original-title=""
                            title=""
                          >
                            <span aria-hidden="true">×</span>
                          </button>
                        </div>
                        <div className="modal-body">
                          <h5>Popover in a modal</h5>
                          <p>
                            This{" "}
                            <a
                              className="btn btn-primary popover-test"
                              href="#"
                              role="button"
                              title=""
                              data-content="Popover body content is set in this attribute."
                              data-container="#exampleModalPopovers"
                              data-original-title="Popover title"
                            >
                              button
                            </a>{" "}
                            triggers a popover on click.
                          </p>
                          <hr />
                          <h5>Tooltips in a modal</h5>
                          <p>
                            <a
                              className="tooltip-test"
                              href="#"
                              title=""
                              data-container="#exampleModalPopovers"
                              data-original-title="Tooltip"
                            >
                              This link
                            </a>{" "}
                            and{" "}
                            <a
                              className="tooltip-test"
                              href="#"
                              title=""
                              data-container="#exampleModalPopovers"
                              data-original-title="Tooltip"
                            >
                              that link
                            </a>{" "}
                            have tooltips on hover.
                          </p>
                        </div>
                        <div className="modal-footer">
                          <button
                            className="btn btn-secondary"
                            type="button"
                            data-bs-dismiss="modal"
                            data-original-title=""
                            title=""
                          >
                            Close
                          </button>
                          <button
                            className="btn btn-primary"
                            type="button"
                            data-original-title=""
                            title=""
                          >
                            Save changes
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* Using the grid modal*/}
                  <button
                    className="btn btn-primary me-1"
                    type="button"
                    data-bs-toggle="modal"
                    data-bs-target="#grid-modal"
                    data-original-title=""
                    title=""
                  >
                    Using the grid
                  </button>
                  <div
                    className="modal fade"
                    id="grid-modal"
                    tabIndex={-1}
                    role="dialog"
                    aria-labelledby="grid-modal"
                    aria-hidden="true"
                  >
                    <div
                      className="modal-dialog modal-dialog-centered"
                      role="document"
                    >
                      <div className="modal-content">
                        <div className="modal-header">
                          <h5 className="modal-title">Modal title</h5>
                          <button
                            className="close"
                            type="button"
                            data-bs-dismiss="modal"
                            aria-label="Close"
                            data-original-title=""
                            title=""
                          >
                            <span aria-hidden="true">×</span>
                          </button>
                        </div>
                        <div className="modal-body grid-showcase">
                          <div className="container-fluid bd-example-row">
                            <div className="row">
                              <div className="col-md-4">
                                <span>.col-md-4</span>
                              </div>
                              <div className="col-md-4 ml-auto">
                                <span>.col-md-4 .ml-auto</span>
                              </div>
                            </div>
                            <div className="row">
                              <div className="col-md-3 ml-auto">
                                <span>.col-md-3 .ml-auto</span>
                              </div>
                              <div className="col-md-2 ml-auto">
                                <span>.col-md-2 .ml-auto</span>
                              </div>
                            </div>
                            <div className="row">
                              <div className="col-md-6 ml-auto">
                                <span>.col-md-6 .ml-auto</span>
                              </div>
                            </div>
                            <div className="row">
                              <div className="col-sm-9">
                                <span>Level 1: .col-sm-9</span>
                                <div className="row">
                                  <div className="col-8 col-sm-6">
                                    <span>Level 2: .col-8 .col-sm-6</span>
                                  </div>
                                  <div className="col-4 col-sm-6">
                                    <span>Level 2: .col-4 .col-sm-6</span>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="modal-footer">
                          <button
                            className="btn btn-secondary"
                            type="button"
                            data-bs-dismiss="modal"
                            data-original-title=""
                            title=""
                          >
                            Close
                          </button>
                          <button
                            className="btn btn-primary"
                            type="button"
                            data-original-title=""
                            title=""
                          >
                            Save changes
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="card">
                <div className="card-header">
                  <h4 className="card-title">Varying modal content</h4>
                </div>
                <div className="card-body btn-showcase">
                  <button
                    className="btn btn-primary me-1"
                    type="button"
                    data-bs-toggle="modal"
                    data-bs-target="#exampleModalfat"
                    data-whatever="@mdo"
                    data-original-title=""
                    title=""
                  >
                    Open modal for @mdo
                  </button>
                  <button
                    className="btn btn-primary me-1"
                    type="button"
                    data-bs-toggle="modal"
                    data-bs-target="#exampleModalmdo"
                    data-whatever="@fat"
                    data-original-title=""
                    title=""
                  >
                    Open modal for @fat
                  </button>
                  <button
                    className="btn btn-primary me-1"
                    type="button"
                    data-bs-toggle="modal"
                    data-bs-target="#exampleModalgetbootstrap"
                    data-whatever="@getbootstrap"
                    data-original-title=""
                    title=""
                  >
                    Open modal for @getbootstrap
                  </button>
                  <div
                    className="modal fade"
                    id="exampleModalfat"
                    tabIndex={-1}
                    role="dialog"
                    aria-labelledby="exampleModalLabel"
                    aria-hidden="true"
                  >
                    <div className="modal-dialog" role="document">
                      <div className="modal-content">
                        <div className="modal-header">
                          <h5 className="modal-title" id="exampleModalLabel2">
                            New message
                          </h5>
                          <button
                            className="close"
                            type="button"
                            data-bs-dismiss="modal"
                            aria-label="Close"
                            data-original-title=""
                            title=""
                          >
                            <span aria-hidden="true">×</span>
                          </button>
                        </div>
                        <div className="modal-body">
                          <form>
                            <div className="form-group">
                              <label
                                className="col-form-label"
                                htmlFor="recipient-name"
                              >
                                Recipient:
                              </label>
                              <input
                                className="form-control"
                                type="text"
                                defaultValue="@fat"
                                data-original-title=""
                                title=""
                              />
                            </div>
                            <div className="form-group">
                              <label
                                className="col-form-label"
                                htmlFor="message-text"
                              >
                                Message:
                              </label>
                              <textarea
                                className="form-control"
                                id="message-text"
                                defaultValue={""}
                              />
                            </div>
                          </form>
                        </div>
                        <div className="modal-footer">
                          <button
                            className="btn btn-secondary"
                            type="button"
                            data-bs-dismiss="modal"
                            data-original-title=""
                            title=""
                          >
                            Close
                          </button>
                          <button
                            className="btn btn-primary"
                            type="button"
                            data-original-title=""
                            title=""
                          >
                            Send message
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    className="modal fade"
                    id="exampleModalmdo"
                    tabIndex={-1}
                    role="dialog"
                    aria-labelledby="exampleModalLabel"
                    aria-hidden="true"
                  >
                    <div className="modal-dialog" role="document">
                      <div className="modal-content">
                        <div className="modal-header">
                          <h5 className="modal-title">New message</h5>
                          <button
                            className="close"
                            type="button"
                            data-bs-dismiss="modal"
                            aria-label="Close"
                            data-original-title=""
                            title=""
                          >
                            <span aria-hidden="true">×</span>
                          </button>
                        </div>
                        <div className="modal-body">
                          <form>
                            <div className="form-group">
                              <label
                                className="col-form-label"
                                htmlFor="recipient-name"
                              >
                                Recipient:
                              </label>
                              <input
                                className="form-control"
                                id="recipient-name"
                                type="text"
                                defaultValue="@Mat"
                                data-original-title=""
                                title=""
                              />
                            </div>
                            <div className="form-group">
                              <label
                                className="col-form-label"
                                htmlFor="message-text"
                              >
                                Message:
                              </label>
                              <textarea
                                className="form-control"
                                defaultValue={""}
                              />
                            </div>
                          </form>
                        </div>
                        <div className="modal-footer">
                          <button
                            className="btn btn-secondary"
                            type="button"
                            data-bs-dismiss="modal"
                            data-original-title=""
                            title=""
                          >
                            Close
                          </button>
                          <button
                            className="btn btn-primary"
                            type="button"
                            data-original-title=""
                            title=""
                          >
                            Send message
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    className="modal fade"
                    id="exampleModalgetbootstrap"
                    tabIndex={-1}
                    role="dialog"
                    aria-labelledby="exampleModalLabel"
                    aria-hidden="true"
                  >
                    <div className="modal-dialog" role="document">
                      <div className="modal-content">
                        <div className="modal-header">
                          <h5 className="modal-title">New message</h5>
                          <button
                            className="close"
                            type="button"
                            data-bs-dismiss="modal"
                            aria-label="Close"
                            data-original-title=""
                            title=""
                          >
                            <span aria-hidden="true">×</span>
                          </button>
                        </div>
                        <div className="modal-body">
                          <form>
                            <div className="form-group">
                              <label
                                className="col-form-label"
                                htmlFor="recipient-name"
                              >
                                Recipient:
                              </label>
                              <input
                                className="form-control"
                                type="text"
                                defaultValue="@getbootstrap"
                                data-original-title=""
                                title=""
                              />
                            </div>
                            <div className="form-group">
                              <label
                                className="col-form-label"
                                htmlFor="message-text"
                              >
                                Message:
                              </label>
                              <textarea
                                className="form-control"
                                defaultValue={""}
                              />
                            </div>
                          </form>
                        </div>
                        <div className="modal-footer">
                          <button
                            className="btn btn-secondary"
                            type="button"
                            data-bs-dismiss="modal"
                            data-original-title=""
                            title=""
                          >
                            Close
                          </button>
                          <button
                            className="btn btn-primary"
                            type="button"
                            data-original-title=""
                            title=""
                          >
                            Send message
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="card">
                <div className="card-header">
                  <h4 className="card-title">Sizes modal</h4>
                </div>
                <div className="card-body">
                  {/* Extra Large modal */}
                  <button
                    type="button"
                    className="btn btn-primary me-1"
                    data-bs-toggle="modal"
                    data-bs-target=".bd-example-modal-xl"
                  >
                    Extra large modal
                  </button>
                  <div
                    className="modal fade bd-example-modal-xl"
                    tabIndex={-1}
                    role="dialog"
                    aria-labelledby="myLargeModalLabel"
                    aria-hidden="true"
                  >
                    <div className="modal-dialog modal-xl">
                      <div className="modal-content">
                        <div className="modal-header">
                          <h4 className="modal-title" id="myLargeModalLabel">
                            Large modal
                          </h4>
                          <button
                            className="close"
                            type="button"
                            data-bs-dismiss="modal"
                            aria-label="Close"
                            data-original-title=""
                            title=""
                          >
                            <span aria-hidden="true">×</span>
                          </button>
                        </div>
                        <div className="modal-body">...</div>
                      </div>
                    </div>
                  </div>
                  {/* Large modal*/}
                  <button
                    className="btn btn-primary me-1"
                    type="button"
                    data-bs-toggle="modal"
                    data-bs-target=".bd-example-modal-lg"
                    data-original-title=""
                    title=""
                  >
                    Large modal
                  </button>
                  <div
                    className="modal fade bd-example-modal-lg"
                    tabIndex={-1}
                    role="dialog"
                    aria-labelledby="myLargeModalLabel1"
                    aria-hidden="true"
                  >
                    <div className="modal-dialog modal-lg">
                      <div className="modal-content">
                        <div className="modal-header">
                          <h4 className="modal-title" id="myLargeModalLabel1">
                            Large modal
                          </h4>
                          <button
                            className="close"
                            type="button"
                            data-bs-dismiss="modal"
                            aria-label="Close"
                            data-original-title=""
                            title=""
                          >
                            <span aria-hidden="true">×</span>
                          </button>
                        </div>
                        <div className="modal-body">...</div>
                      </div>
                    </div>
                  </div>
                  {/* Small modal*/}
                  <button
                    className="btn btn-primary"
                    type="button"
                    data-bs-toggle="modal"
                    data-bs-target=".bd-example-modal-sm"
                    data-original-title=""
                    title=""
                  >
                    Small modal
                  </button>
                  <div
                    className="modal fade bd-example-modal-sm"
                    tabIndex={-1}
                    role="dialog"
                    aria-labelledby="mySmallModalLabel"
                    aria-hidden="true"
                  >
                    <div className="modal-dialog modal-sm">
                      <div className="modal-content">
                        <div className="modal-header">
                          <h4 className="modal-title" id="mySmallModalLabel">
                            Small modal
                          </h4>
                          <button
                            className="close"
                            type="button"
                            data-bs-dismiss="modal"
                            aria-label="Close"
                            data-original-title=""
                            title=""
                          >
                            <span aria-hidden="true">×</span>
                          </button>
                        </div>
                        <div className="modal-body">...</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            {/* /Modals */}
            {/* Pagination */}
            <section className="comp-section">
              <div className="section-header">
                <h3 className="section-title">Pagination</h3>
                <div className="line" />
              </div>
              <div className="card">
                <div className="card-body">
                  <div>
                    <ul className="pagination">
                      <li className="page-item disabled">
                        <a className="page-link" href="#" tabIndex={-1}>
                          Previous
                        </a>
                      </li>
                      <li className="page-item">
                        <a className="page-link" href="#">
                          1
                        </a>
                      </li>
                      <li className="page-item active">
                        <a className="page-link" href="#">
                          2 <span className="sr-only">(current)</span>
                        </a>
                      </li>
                      <li className="page-item">
                        <a className="page-link" href="#">
                          3
                        </a>
                      </li>
                      <li className="page-item">
                        <a className="page-link" href="#">
                          Next
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <ul className="pagination">
                      <li className="page-item">
                        <a className="page-link" href="#" aria-label="Previous">
                          <span aria-hidden="true">«</span>
                          <span className="sr-only">Previous</span>
                        </a>
                      </li>
                      <li className="page-item">
                        <a className="page-link" href="#">
                          1
                        </a>
                      </li>
                      <li className="page-item">
                        <a className="page-link" href="#">
                          2
                        </a>
                      </li>
                      <li className="page-item">
                        <a className="page-link" href="#">
                          3
                        </a>
                      </li>
                      <li className="page-item">
                        <a className="page-link" href="#" aria-label="Next">
                          <span aria-hidden="true">»</span>
                          <span className="sr-only">Next</span>
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <ul className="pagination pagination-lg">
                      <li className="page-item disabled">
                        <a className="page-link" href="#" tabIndex={-1}>
                          Previous
                        </a>
                      </li>
                      <li className="page-item">
                        <a className="page-link" href="#">
                          1
                        </a>
                      </li>
                      <li className="page-item active">
                        <a className="page-link" href="#">
                          2 <span className="sr-only">(current)</span>
                        </a>
                      </li>
                      <li className="page-item">
                        <a className="page-link" href="#">
                          3
                        </a>
                      </li>
                      <li className="page-item">
                        <a className="page-link" href="#">
                          Next
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <ul className="pagination pagination-sm mb-0">
                      <li className="page-item disabled">
                        <a className="page-link" href="#" tabIndex={-1}>
                          Previous
                        </a>
                      </li>
                      <li className="page-item">
                        <a className="page-link" href="#">
                          1
                        </a>
                      </li>
                      <li className="page-item active">
                        <a className="page-link" href="#">
                          2 <span className="sr-only">(current)</span>
                        </a>
                      </li>
                      <li className="page-item">
                        <a className="page-link" href="#">
                          3
                        </a>
                      </li>
                      <li className="page-item">
                        <a className="page-link" href="#">
                          Next
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>
            {/* /Pagination */}
            {/* Progress */}
            <section className="comp-section">
              <div className="section-header">
                <h3 className="section-title">Progress</h3>
                <div className="line" />
              </div>
              <div className="progress-example card">
                <div className="card-header">
                  <h4 className="card-title">Large Progress Bars</h4>
                </div>
                <div className="card-body pb-0">
                  <div className="row">
                    <div className="col-md-6">
                      <div>
                        <div className="progress progress-lg">
                          <div
                            className="progress-bar"
                            role="progressbar"
                            style={{ width: "10%" }}
                            aria-valuenow={75}
                            aria-valuemin={0}
                            aria-valuemax={100}
                          />
                        </div>
                        <div className="progress progress-lg">
                          <div
                            className="progress-bar bg-success"
                            role="progressbar"
                            style={{ width: "25%" }}
                            aria-valuenow={25}
                            aria-valuemin={0}
                            aria-valuemax={100}
                          />
                        </div>
                        <div className="progress progress-lg">
                          <div
                            className="progress-bar bg-info"
                            role="progressbar"
                            style={{ width: "50%" }}
                            aria-valuenow={50}
                            aria-valuemin={0}
                            aria-valuemax={100}
                          />
                        </div>
                        <div className="progress progress-lg">
                          <div
                            className="progress-bar bg-warning"
                            role="progressbar"
                            style={{ width: "75%" }}
                            aria-valuenow={75}
                            aria-valuemin={0}
                            aria-valuemax={100}
                          />
                        </div>
                        <div className="progress progress-lg">
                          <div
                            className="progress-bar bg-danger"
                            role="progressbar"
                            style={{ width: "100%" }}
                            aria-valuenow={100}
                            aria-valuemin={0}
                            aria-valuemax={100}
                          />
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="progress progress-lg">
                        <div
                          className="progress-bar progress-bar-striped"
                          role="progressbar"
                          style={{ width: "10%" }}
                          aria-valuenow={10}
                          aria-valuemin={0}
                          aria-valuemax={100}
                        />
                      </div>
                      <div className="progress progress-lg">
                        <div
                          className="progress-bar progress-bar-striped bg-success"
                          role="progressbar"
                          style={{ width: "25%" }}
                          aria-valuenow={25}
                          aria-valuemin={0}
                          aria-valuemax={100}
                        />
                      </div>
                      <div className="progress progress-lg">
                        <div
                          className="progress-bar progress-bar-striped bg-info"
                          role="progressbar"
                          style={{ width: "50%" }}
                          aria-valuenow={50}
                          aria-valuemin={0}
                          aria-valuemax={100}
                        />
                      </div>
                      <div className="progress progress-lg">
                        <div
                          className="progress-bar progress-bar-striped bg-warning"
                          role="progressbar"
                          style={{ width: "75%" }}
                          aria-valuenow={75}
                          aria-valuemin={0}
                          aria-valuemax={100}
                        />
                      </div>
                      <div className="progress progress-lg">
                        <div
                          className="progress-bar progress-bar-striped bg-danger"
                          role="progressbar"
                          style={{ width: "100%" }}
                          aria-valuenow={100}
                          aria-valuemin={0}
                          aria-valuemax={100}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="progress-example card">
                <div className="card-header">
                  <h4 className="card-title">Default Progress Bars</h4>
                </div>
                <div className="card-body pb-0">
                  <div className="row">
                    <div className="col-md-6">
                      <div className="progress">
                        <div
                          className="progress-bar"
                          role="progressbar"
                          style={{ width: "10%" }}
                          aria-valuenow={75}
                          aria-valuemin={0}
                          aria-valuemax={100}
                        />
                      </div>
                      <div className="progress">
                        <div
                          className="progress-bar bg-success"
                          role="progressbar"
                          style={{ width: "25%" }}
                          aria-valuenow={25}
                          aria-valuemin={0}
                          aria-valuemax={100}
                        />
                      </div>
                      <div className="progress">
                        <div
                          className="progress-bar bg-info"
                          role="progressbar"
                          style={{ width: "50%" }}
                          aria-valuenow={50}
                          aria-valuemin={0}
                          aria-valuemax={100}
                        />
                      </div>
                      <div className="progress">
                        <div
                          className="progress-bar bg-warning"
                          role="progressbar"
                          style={{ width: "75%" }}
                          aria-valuenow={75}
                          aria-valuemin={0}
                          aria-valuemax={100}
                        />
                      </div>
                      <div className="progress">
                        <div
                          className="progress-bar bg-danger"
                          role="progressbar"
                          style={{ width: "100%" }}
                          aria-valuenow={100}
                          aria-valuemin={0}
                          aria-valuemax={100}
                        />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="progress">
                        <div
                          className="progress-bar progress-bar-striped"
                          role="progressbar"
                          style={{ width: "10%" }}
                          aria-valuenow={10}
                          aria-valuemin={0}
                          aria-valuemax={100}
                        />
                      </div>
                      <div className="progress">
                        <div
                          className="progress-bar progress-bar-striped bg-success"
                          role="progressbar"
                          style={{ width: "25%" }}
                          aria-valuenow={25}
                          aria-valuemin={0}
                          aria-valuemax={100}
                        />
                      </div>
                      <div className="progress">
                        <div
                          className="progress-bar progress-bar-striped bg-info"
                          role="progressbar"
                          style={{ width: "50%" }}
                          aria-valuenow={50}
                          aria-valuemin={0}
                          aria-valuemax={100}
                        />
                      </div>
                      <div className="progress">
                        <div
                          className="progress-bar progress-bar-striped bg-warning"
                          role="progressbar"
                          style={{ width: "75%" }}
                          aria-valuenow={75}
                          aria-valuemin={0}
                          aria-valuemax={100}
                        />
                      </div>
                      <div className="progress">
                        <div
                          className="progress-bar progress-bar-striped bg-danger"
                          role="progressbar"
                          style={{ width: "100%" }}
                          aria-valuenow={100}
                          aria-valuemin={0}
                          aria-valuemax={100}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="progress-example card">
                <div className="card-header">
                  <h4 className="card-title">Medium Progress Bars</h4>
                </div>
                <div className="card-body pb-0">
                  <div className="row">
                    <div className="col-md-6">
                      <div>
                        <div className="progress progress-md">
                          <div
                            className="progress-bar"
                            role="progressbar"
                            style={{ width: "10%" }}
                            aria-valuenow={75}
                            aria-valuemin={0}
                            aria-valuemax={100}
                          />
                        </div>
                        <div className="progress progress-md">
                          <div
                            className="progress-bar bg-success"
                            role="progressbar"
                            style={{ width: "25%" }}
                            aria-valuenow={25}
                            aria-valuemin={0}
                            aria-valuemax={100}
                          />
                        </div>
                        <div className="progress progress-md">
                          <div
                            className="progress-bar bg-info"
                            role="progressbar"
                            style={{ width: "50%" }}
                            aria-valuenow={50}
                            aria-valuemin={0}
                            aria-valuemax={100}
                          />
                        </div>
                        <div className="progress progress-md">
                          <div
                            className="progress-bar bg-warning"
                            role="progressbar"
                            style={{ width: "75%" }}
                            aria-valuenow={75}
                            aria-valuemin={0}
                            aria-valuemax={100}
                          />
                        </div>
                        <div className="progress progress-md">
                          <div
                            className="progress-bar bg-danger"
                            role="progressbar"
                            style={{ width: "100%" }}
                            aria-valuenow={100}
                            aria-valuemin={0}
                            aria-valuemax={100}
                          />
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="progress progress-md">
                        <div
                          className="progress-bar progress-bar-striped"
                          role="progressbar"
                          style={{ width: "10%" }}
                          aria-valuenow={10}
                          aria-valuemin={0}
                          aria-valuemax={100}
                        />
                      </div>
                      <div className="progress progress-md">
                        <div
                          className="progress-bar progress-bar-striped bg-success"
                          role="progressbar"
                          style={{ width: "25%" }}
                          aria-valuenow={25}
                          aria-valuemin={0}
                          aria-valuemax={100}
                        />
                      </div>
                      <div className="progress progress-md">
                        <div
                          className="progress-bar progress-bar-striped bg-info"
                          role="progressbar"
                          style={{ width: "50%" }}
                          aria-valuenow={50}
                          aria-valuemin={0}
                          aria-valuemax={100}
                        />
                      </div>
                      <div className="progress progress-md">
                        <div
                          className="progress-bar progress-bar-striped bg-warning"
                          role="progressbar"
                          style={{ width: "75%" }}
                          aria-valuenow={75}
                          aria-valuemin={0}
                          aria-valuemax={100}
                        />
                      </div>
                      <div className="progress progress-md">
                        <div
                          className="progress-bar progress-bar-striped bg-danger"
                          role="progressbar"
                          style={{ width: "100%" }}
                          aria-valuenow={100}
                          aria-valuemin={0}
                          aria-valuemax={100}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="progress-example card">
                <div className="card-header">
                  <h4 className="card-title">Small Progress Bars</h4>
                </div>
                <div className="card-body pb-0">
                  <div className="row">
                    <div className="col-md-6">
                      <div>
                        <div className="progress progress-sm">
                          <div
                            className="progress-bar"
                            role="progressbar"
                            style={{ width: "10%" }}
                            aria-valuenow={75}
                            aria-valuemin={0}
                            aria-valuemax={100}
                          />
                        </div>
                        <div className="progress progress-sm">
                          <div
                            className="progress-bar bg-success"
                            role="progressbar"
                            style={{ width: "25%" }}
                            aria-valuenow={25}
                            aria-valuemin={0}
                            aria-valuemax={100}
                          />
                        </div>
                        <div className="progress progress-sm">
                          <div
                            className="progress-bar bg-info"
                            role="progressbar"
                            style={{ width: "50%" }}
                            aria-valuenow={50}
                            aria-valuemin={0}
                            aria-valuemax={100}
                          />
                        </div>
                        <div className="progress progress-sm">
                          <div
                            className="progress-bar bg-warning"
                            role="progressbar"
                            style={{ width: "75%" }}
                            aria-valuenow={75}
                            aria-valuemin={0}
                            aria-valuemax={100}
                          />
                        </div>
                        <div className="progress progress-sm">
                          <div
                            className="progress-bar bg-danger"
                            role="progressbar"
                            style={{ width: "100%" }}
                            aria-valuenow={100}
                            aria-valuemin={0}
                            aria-valuemax={100}
                          />
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="progress progress-sm">
                        <div
                          className="progress-bar progress-bar-striped"
                          role="progressbar"
                          style={{ width: "10%" }}
                          aria-valuenow={10}
                          aria-valuemin={0}
                          aria-valuemax={100}
                        />
                      </div>
                      <div className="progress progress-sm">
                        <div
                          className="progress-bar progress-bar-striped bg-success"
                          role="progressbar"
                          style={{ width: "25%" }}
                          aria-valuenow={25}
                          aria-valuemin={0}
                          aria-valuemax={100}
                        />
                      </div>
                      <div className="progress progress-sm">
                        <div
                          className="progress-bar progress-bar-striped bg-info"
                          role="progressbar"
                          style={{ width: "50%" }}
                          aria-valuenow={50}
                          aria-valuemin={0}
                          aria-valuemax={100}
                        />
                      </div>
                      <div className="progress progress-sm">
                        <div
                          className="progress-bar progress-bar-striped bg-warning"
                          role="progressbar"
                          style={{ width: "75%" }}
                          aria-valuenow={75}
                          aria-valuemin={0}
                          aria-valuemax={100}
                        />
                      </div>
                      <div className="progress progress-sm">
                        <div
                          className="progress-bar progress-bar-striped bg-danger"
                          role="progressbar"
                          style={{ width: "100%" }}
                          aria-valuenow={100}
                          aria-valuemin={0}
                          aria-valuemax={100}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="progress-example card">
                <div className="card-header">
                  <h4 className="card-title">Extra Small Progress Bars</h4>
                </div>
                <div className="card-body pb-0">
                  <div className="row">
                    <div className="col-md-6">
                      <div>
                        <div className="progress progress-xs">
                          <div
                            className="progress-bar w-75"
                            role="progressbar"
                            style={{ width: "10%" }}
                            aria-valuenow={75}
                            aria-valuemin={0}
                            aria-valuemax={100}
                          />
                        </div>
                        <div className="progress progress-xs">
                          <div
                            className="progress-bar bg-success"
                            role="progressbar"
                            style={{ width: "25%" }}
                            aria-valuenow={25}
                            aria-valuemin={0}
                            aria-valuemax={100}
                          />
                        </div>
                        <div className="progress progress-xs">
                          <div
                            className="progress-bar bg-info"
                            role="progressbar"
                            style={{ width: "50%" }}
                            aria-valuenow={50}
                            aria-valuemin={0}
                            aria-valuemax={100}
                          />
                        </div>
                        <div className="progress progress-xs">
                          <div
                            className="progress-bar bg-warning"
                            role="progressbar"
                            style={{ width: "75%" }}
                            aria-valuenow={75}
                            aria-valuemin={0}
                            aria-valuemax={100}
                          />
                        </div>
                        <div className="progress progress-xs">
                          <div
                            className="progress-bar bg-danger"
                            role="progressbar"
                            style={{ width: "100%" }}
                            aria-valuenow={100}
                            aria-valuemin={0}
                            aria-valuemax={100}
                          />
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="progress progress-xs">
                        <div
                          className="progress-bar progress-bar-striped"
                          role="progressbar"
                          style={{ width: "10%" }}
                          aria-valuenow={10}
                          aria-valuemin={0}
                          aria-valuemax={100}
                        />
                      </div>
                      <div className="progress progress-xs">
                        <div
                          className="progress-bar progress-bar-striped bg-success"
                          role="progressbar"
                          style={{ width: "25%" }}
                          aria-valuenow={25}
                          aria-valuemin={0}
                          aria-valuemax={100}
                        />
                      </div>
                      <div className="progress progress-xs">
                        <div
                          className="progress-bar progress-bar-striped bg-info"
                          role="progressbar"
                          style={{ width: "50%" }}
                          aria-valuenow={50}
                          aria-valuemin={0}
                          aria-valuemax={100}
                        />
                      </div>
                      <div className="progress progress-xs">
                        <div
                          className="progress-bar progress-bar-striped bg-warning"
                          role="progressbar"
                          style={{ width: "75%" }}
                          aria-valuenow={75}
                          aria-valuemin={0}
                          aria-valuemax={100}
                        />
                      </div>
                      <div className="progress progress-xs">
                        <div
                          className="progress-bar progress-bar-striped bg-danger"
                          role="progressbar"
                          style={{ width: "100%" }}
                          aria-valuenow={100}
                          aria-valuemin={0}
                          aria-valuemax={100}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            {/* /Progress */}
            {/* Tabs */}
            <section className="comp-section">
              <div className="section-header">
                <h3 className="section-title">Tabs</h3>
                <div className="line" />
              </div>
              <div className="row">
                <div className="col-md-6">
                  <div className="card">
                    <div className="card-header">
                      <h4 className="card-title">Basic tabs</h4>
                    </div>
                    <div className="card-body">
                      <ul className="nav nav-tabs">
                        <li className="nav-item">
                          <a
                            className="nav-link active"
                            href="#basictab1"
                            data-bs-toggle="tab"
                          >
                            Home
                          </a>
                        </li>
                        <li className="nav-item">
                          <a
                            className="nav-link"
                            href="#basictab2"
                            data-bs-toggle="tab"
                          >
                            Profile
                          </a>
                        </li>
                        <li className="nav-item">
                          <a
                            className="nav-link"
                            href="#basictab3"
                            data-bs-toggle="tab"
                          >
                            Messages
                          </a>
                        </li>
                      </ul>
                      <div className="tab-content">
                        <div className="tab-pane show active" id="basictab1">
                          Tab content 1
                        </div>
                        <div className="tab-pane" id="basictab2">
                          Tab content 2
                        </div>
                        <div className="tab-pane" id="basictab3">
                          Tab content 3
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="card">
                    <div className="card-header">
                      <h4 className="card-title">Basic justified tabs</h4>
                    </div>
                    <div className="card-body">
                      <ul className="nav nav-tabs nav-justified">
                        <li className="nav-item">
                          <a
                            className="nav-link active"
                            href="#basic-justified-tab1"
                            data-bs-toggle="tab"
                          >
                            Home
                          </a>
                        </li>
                        <li className="nav-item">
                          <a
                            className="nav-link"
                            href="#basic-justified-tab2"
                            data-bs-toggle="tab"
                          >
                            Profile
                          </a>
                        </li>
                        <li className="nav-item dropdown">
                          <a
                            href="#"
                            className="dropdown-toggle nav-link"
                            data-bs-toggle="dropdown"
                          >
                            Dropdown
                          </a>
                          <div className="dropdown-menu dropdown-menu-right">
                            <a
                              className="dropdown-item"
                              href="#basic-justified-tab3"
                              data-bs-toggle="tab"
                            >
                              Dropdown 1
                            </a>
                            <a
                              className="dropdown-item"
                              href="#basic-justified-tab4"
                              data-bs-toggle="tab"
                            >
                              Dropdown 2
                            </a>
                          </div>
                        </li>
                      </ul>
                      <div className="tab-content">
                        <div
                          className="tab-pane show active"
                          id="basic-justified-tab1"
                        >
                          Tab content 1
                        </div>
                        <div className="tab-pane" id="basic-justified-tab2">
                          Tab content 2
                        </div>
                        <div className="tab-pane" id="basic-justified-tab3">
                          Tab content 3
                        </div>
                        <div className="tab-pane" id="basic-justified-tab4">
                          Tab content 4
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-md-6">
                  <div className="card">
                    <div className="card-header">
                      <h4 className="card-title">Top line tabs</h4>
                    </div>
                    <div className="card-body">
                      <ul className="nav nav-tabs nav-tabs-top">
                        <li className="nav-item">
                          <a
                            className="nav-link active"
                            href="#top-tab1"
                            data-bs-toggle="tab"
                          >
                            Home
                          </a>
                        </li>
                        <li className="nav-item">
                          <a
                            className="nav-link"
                            href="#top-tab2"
                            data-bs-toggle="tab"
                          >
                            Profile
                          </a>
                        </li>
                        <li className="nav-item">
                          <a
                            className="nav-link"
                            href="#top-tab3"
                            data-bs-toggle="tab"
                          >
                            Messages
                          </a>
                        </li>
                      </ul>
                      <div className="tab-content">
                        <div className="tab-pane show active" id="top-tab1">
                          Tab content 1
                        </div>
                        <div className="tab-pane" id="top-tab2">
                          Tab content 2
                        </div>
                        <div className="tab-pane" id="top-tab3">
                          Tab content 3
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="card">
                    <div className="card-header">
                      <h4 className="card-title">Top line justified</h4>
                    </div>
                    <div className="card-body">
                      <ul className="nav nav-tabs nav-tabs-top nav-justified">
                        <li className="nav-item">
                          <a
                            className="nav-link active"
                            href="#top-justified-tab1"
                            data-bs-toggle="tab"
                          >
                            Home
                          </a>
                        </li>
                        <li className="nav-item">
                          <a
                            className="nav-link"
                            href="#top-justified-tab2"
                            data-bs-toggle="tab"
                          >
                            Profile
                          </a>
                        </li>
                        <li className="nav-item">
                          <a
                            className="nav-link"
                            href="#top-justified-tab3"
                            data-bs-toggle="tab"
                          >
                            Messages
                          </a>
                        </li>
                      </ul>
                      <div className="tab-content">
                        <div
                          className="tab-pane show active"
                          id="top-justified-tab1"
                        >
                          Tab content 1
                        </div>
                        <div className="tab-pane" id="top-justified-tab2">
                          Tab content 2
                        </div>
                        <div className="tab-pane" id="top-justified-tab3">
                          Tab content 3
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-md-6">
                  <div className="card">
                    <div className="card-header">
                      <h4 className="card-title">Bottom line tabs</h4>
                    </div>
                    <div className="card-body">
                      <ul className="nav nav-tabs nav-tabs-bottom">
                        <li className="nav-item">
                          <a
                            className="nav-link active"
                            href="#bottom-tab1"
                            data-bs-toggle="tab"
                          >
                            Home
                          </a>
                        </li>
                        <li className="nav-item">
                          <a
                            className="nav-link"
                            href="#bottom-tab2"
                            data-bs-toggle="tab"
                          >
                            Profile
                          </a>
                        </li>
                        <li className="nav-item">
                          <a
                            className="nav-link"
                            href="#bottom-tab3"
                            data-bs-toggle="tab"
                          >
                            Messages
                          </a>
                        </li>
                      </ul>
                      <div className="tab-content">
                        <div className="tab-pane show active" id="bottom-tab1">
                          Tab content 1
                        </div>
                        <div className="tab-pane" id="bottom-tab2">
                          Tab content 2
                        </div>
                        <div className="tab-pane" id="bottom-tab3">
                          Tab content 3
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="card">
                    <div className="card-header">
                      <h4 className="card-title">Bottom line justified</h4>
                    </div>
                    <div className="card-body">
                      <ul className="nav nav-tabs nav-tabs-bottom nav-justified">
                        <li className="nav-item">
                          <a
                            className="nav-link active"
                            href="#bottom-justified-tab1"
                            data-bs-toggle="tab"
                          >
                            Home
                          </a>
                        </li>
                        <li className="nav-item">
                          <a
                            className="nav-link"
                            href="#bottom-justified-tab2"
                            data-bs-toggle="tab"
                          >
                            Profile
                          </a>
                        </li>
                        <li className="nav-item">
                          <a
                            className="nav-link"
                            href="#bottom-justified-tab3"
                            data-bs-toggle="tab"
                          >
                            Messages
                          </a>
                        </li>
                      </ul>
                      <div className="tab-content">
                        <div
                          className="tab-pane show active"
                          id="bottom-justified-tab1"
                        >
                          Tab content 1
                        </div>
                        <div className="tab-pane" id="bottom-justified-tab2">
                          Tab content 2
                        </div>
                        <div className="tab-pane" id="bottom-justified-tab3">
                          Tab content 3
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-md-6">
                  <div className="card">
                    <div className="card-header">
                      <h4 className="card-title">Solid tabs</h4>
                    </div>
                    <div className="card-body">
                      <ul className="nav nav-tabs nav-tabs-solid">
                        <li className="nav-item">
                          <a
                            className="nav-link active"
                            href="#solid-tab1"
                            data-bs-toggle="tab"
                          >
                            Home
                          </a>
                        </li>
                        <li className="nav-item">
                          <a
                            className="nav-link"
                            href="#solid-tab2"
                            data-bs-toggle="tab"
                          >
                            Profile
                          </a>
                        </li>
                        <li className="nav-item">
                          <a
                            className="nav-link"
                            href="#solid-tab3"
                            data-bs-toggle="tab"
                          >
                            Messages
                          </a>
                        </li>
                      </ul>
                      <div className="tab-content">
                        <div className="tab-pane show active" id="solid-tab1">
                          Tab content 1
                        </div>
                        <div className="tab-pane" id="solid-tab2">
                          Tab content 2
                        </div>
                        <div className="tab-pane" id="solid-tab3">
                          Tab content 3
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="card">
                    <div className="card-header">
                      <h4 className="card-title">Solid justified</h4>
                    </div>
                    <div className="card-body">
                      <ul className="nav nav-tabs nav-tabs-solid nav-justified">
                        <li className="nav-item">
                          <a
                            className="nav-link active"
                            href="#solid-justified-tab1"
                            data-bs-toggle="tab"
                          >
                            Home
                          </a>
                        </li>
                        <li className="nav-item">
                          <a
                            className="nav-link"
                            href="#solid-justified-tab2"
                            data-bs-toggle="tab"
                          >
                            Profile
                          </a>
                        </li>
                        <li className="nav-item">
                          <a
                            className="nav-link"
                            href="#solid-justified-tab3"
                            data-bs-toggle="tab"
                          >
                            Messages
                          </a>
                        </li>
                      </ul>
                      <div className="tab-content">
                        <div
                          className="tab-pane show active"
                          id="solid-justified-tab1"
                        >
                          Tab content 1
                        </div>
                        <div className="tab-pane" id="solid-justified-tab2">
                          Tab content 2
                        </div>
                        <div className="tab-pane" id="solid-justified-tab3">
                          Tab content 3
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-md-6">
                  <div className="card">
                    <div className="card-header">
                      <h4 className="card-title">Solid Rounded</h4>
                    </div>
                    <div className="card-body">
                      <ul className="nav nav-tabs nav-tabs-solid nav-tabs-rounded">
                        <li className="nav-item">
                          <a
                            className="nav-link active"
                            href="#solid-rounded-tab1"
                            data-bs-toggle="tab"
                          >
                            Home
                          </a>
                        </li>
                        <li className="nav-item">
                          <a
                            className="nav-link"
                            href="#solid-rounded-tab2"
                            data-bs-toggle="tab"
                          >
                            Profile
                          </a>
                        </li>
                        <li className="nav-item">
                          <a
                            className="nav-link"
                            href="#solid-rounded-tab3"
                            data-bs-toggle="tab"
                          >
                            Messages
                          </a>
                        </li>
                      </ul>
                      <div className="tab-content">
                        <div
                          className="tab-pane show active"
                          id="solid-rounded-tab1"
                        >
                          Tab content 1
                        </div>
                        <div className="tab-pane" id="solid-rounded-tab2">
                          Tab content 2
                        </div>
                        <div className="tab-pane" id="solid-rounded-tab3">
                          Tab content 3
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="card">
                    <div className="card-header">
                      <h4 className="card-title">Rounded justified</h4>
                    </div>
                    <div className="card-body">
                      <ul className="nav nav-tabs nav-tabs-solid nav-tabs-rounded nav-justified">
                        <li className="nav-item">
                          <a
                            className="nav-link active"
                            href="#solid-rounded-justified-tab1"
                            data-bs-toggle="tab"
                          >
                            Home
                          </a>
                        </li>
                        <li className="nav-item">
                          <a
                            className="nav-link"
                            href="#solid-rounded-justified-tab2"
                            data-bs-toggle="tab"
                          >
                            Profile
                          </a>
                        </li>
                        <li className="nav-item">
                          <a
                            className="nav-link"
                            href="#solid-rounded-justified-tab3"
                            data-bs-toggle="tab"
                          >
                            Messages
                          </a>
                        </li>
                      </ul>
                      <div className="tab-content">
                        <div
                          className="tab-pane show active"
                          id="solid-rounded-justified-tab1"
                        >
                          Tab content 1
                        </div>
                        <div
                          className="tab-pane"
                          id="solid-rounded-justified-tab2"
                        >
                          Tab content 2
                        </div>
                        <div
                          className="tab-pane"
                          id="solid-rounded-justified-tab3"
                        >
                          Tab content 3
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            {/* /Tabs */}
            {/* Typography */}
            <section className="comp-section">
              <div className="section-header">
                <h3 className="section-title">Typography</h3>
                <div className="line" />
              </div>
              <div className="row">
                <div className="col-md-12">
                  <div className="card">
                    <div className="card-header">
                      <h4 className="card-title">Headings</h4>
                    </div>
                    <div className="card-body">
                      <h1>h1. Bootstrap heading</h1>
                      <h2>h2. Bootstrap heading</h2>
                      <h3>h3. Bootstrap heading</h3>
                      <h4>h4. Bootstrap heading</h4>
                      <h5>h5. Bootstrap heading</h5>
                      <h6>h6. Bootstrap heading</h6>
                    </div>
                  </div>
                  <div className="card">
                    <div className="card-header">
                      <h4 className="card-title">Blockquotes</h4>
                    </div>
                    <div className="card-body">
                      <blockquote>
                        <p className="mb-0">
                          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                          Integer posuere erat a ante.
                        </p>
                      </blockquote>
                      <blockquote className="blockquote mb-0">
                        <p className="mb-0">
                          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                          Integer posuere erat a ante.
                        </p>
                      </blockquote>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-md-4 d-flex">
                  <div className="card flex-fill">
                    <div className="card-header">
                      <h4 className="card-title">Text element</h4>
                    </div>
                    <div className="card-body">
                      <p>
                        You can use the mark tag to <mark>highlight</mark> text.
                      </p>
                      <p>
                        <del>
                          This line of text is meant to be treated as deleted
                          text.
                        </del>
                      </p>
                      <p>
                        <s>
                          This line of text is meant to be treated as no longer
                          accurate.
                        </s>
                      </p>
                      <p>
                        <ins>
                          This line of text is meant to be treated as an addition
                          to the document.
                        </ins>
                      </p>
                      <p>
                        <u>This line of text will render as underlined</u>
                      </p>
                      <p>
                        <small>
                          This line of text is meant to be treated as fine print.
                        </small>
                      </p>
                      <p>
                        <strong>This line rendered as bold text.</strong>
                      </p>
                      <p>
                        <em>This line rendered as italicized text.</em>
                      </p>
                      <p className="text-monospace mb-0">This is in monospace</p>
                    </div>
                  </div>
                </div>
                <div className="col-md-4 d-flex">
                  <div className="card flex-fill">
                    <div className="card-header">
                      <h4 className="card-title">Coloured Link</h4>
                    </div>
                    <div className="card-body">
                      <p className="text-primary">.text-primary</p>
                      <p className="text-secondary">.text-secondary</p>
                      <p className="text-success">.text-success</p>
                      <p className="text-danger">.text-danger</p>
                      <p className="text-warning">.text-warning</p>
                      <p className="text-info">.text-info</p>
                      <p className="text-light bg-dark">.text-light</p>
                      <p className="text-dark">.text-dark</p>
                      <p className="text-muted">.text-muted</p>
                      <p className="text-white bg-dark mb-0">.text-white</p>
                    </div>
                  </div>
                </div>
                <div className="col-md-4 d-flex">
                  <div className="card flex-fill">
                    <div className="card-header">
                      <h4 className="card-title">Coloured text</h4>
                    </div>
                    <div className="card-body">
                      <p>
                        <a href="#" className="text-primary">
                          Primary link
                        </a>
                      </p>
                      <p>
                        <a href="#" className="text-secondary">
                          Secondary link
                        </a>
                      </p>
                      <p>
                        <a href="#" className="text-success">
                          Success link
                        </a>
                      </p>
                      <p>
                        <a href="#" className="text-danger">
                          Danger link
                        </a>
                      </p>
                      <p>
                        <a href="#" className="text-warning">
                          Warning link
                        </a>
                      </p>
                      <p>
                        <a href="#" className="text-info">
                          Info link
                        </a>
                      </p>
                      <p>
                        <a href="#" className="text-light bg-dark">
                          Light link
                        </a>
                      </p>
                      <p>
                        <a href="#" className="text-dark">
                          Dark link
                        </a>
                      </p>
                      <p>
                        <a href="#" className="text-muted">
                          Muted link
                        </a>
                      </p>
                      <p>
                        <a href="#" className="text-white bg-dark mb-0">
                          White link
                        </a>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-md-4 d-flex">
                  <div className="card flex-fill">
                    <div className="card-header">
                      <h4 className="card-title">Bullet Lists</h4>
                    </div>
                    <div className="card-body">
                      <ul className="mb-0">
                        <li>Lorem ipsum dolor sit amet</li>
                        <li>Consectetur adipiscing elit</li>
                        <li>Integer molestie lorem at massa</li>
                        <li>Facilisis in pretium nisl aliquet</li>
                        <li>
                          Nulla volutpat aliquam velit
                          <ul>
                            <li>Phasellus iaculis neque</li>
                            <li>Purus sodales ultricies</li>
                            <li>Vestibulum laoreet porttitor sem</li>
                            <li>Ac tristique libero volutpat at</li>
                          </ul>
                        </li>
                        <li>Faucibus porta lacus fringilla vel</li>
                        <li>Aenean sit amet erat nunc</li>
                        <li>Eget porttitor lorem</li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="col-md-4 d-flex">
                  <div className="card flex-fill">
                    <div className="card-header">
                      <h4 className="card-title">Bullet Lists</h4>
                    </div>
                    <div className="card-body">
                      <ol className="mb-0">
                        <li>Lorem ipsum dolor sit amet</li>
                        <li>Consectetur adipiscing elit</li>
                        <li>Integer molestie lorem at massa</li>
                        <li>Facilisis in pretium nisl aliquet</li>
                        <li>
                          Nulla volutpat aliquam velit
                          <ul>
                            <li>Phasellus iaculis neque</li>
                            <li>Purus sodales ultricies</li>
                            <li>Vestibulum laoreet porttitor sem</li>
                            <li>Ac tristique libero volutpat at</li>
                          </ul>
                        </li>
                        <li>Faucibus porta lacus fringilla vel</li>
                        <li>Aenean sit amet erat nunc</li>
                        <li>Eget porttitor lorem</li>
                      </ol>
                    </div>
                  </div>
                </div>
                <div className="col-md-4 d-flex">
                  <div className="card flex-fill">
                    <div className="card-header">
                      <h4 className="card-title">Unstyled Lists</h4>
                    </div>
                    <div className="card-body">
                      <ul className="list-unstyled mb-0">
                        <li>Lorem ipsum dolor sit amet</li>
                        <li>Consectetur adipiscing elit</li>
                        <li>Integer molestie lorem at massa</li>
                        <li>Facilisis in pretium nisl aliquet</li>
                        <li>
                          Nulla volutpat aliquam velit
                          <ul>
                            <li>Phasellus iaculis neque</li>
                            <li>Purus sodales ultricies</li>
                            <li>Vestibulum laoreet porttitor sem</li>
                            <li>Ac tristique libero volutpat at</li>
                          </ul>
                        </li>
                        <li>Faucibus porta lacus fringilla vel</li>
                        <li>Aenean sit amet erat nunc</li>
                        <li>Eget porttitor lorem</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            {/* /Typography */}
          </div>
        </div>
      </div>
    </div>
    {/* /Page Wrapper */}
  </>
  
  )
}

export default Components
