import React from 'react'

const BasicInputs = () => {
  return (
    <>
    {/* Page Wrapper */}
    <div className="page-wrapper profile-set-wrapper">
      <div className="content container-fluid profile-set-content">
        <div className="page-header">
          <div className="page-title">
            <h4>Basic Inputs</h4>
          </div>
        </div>
        <div className="row">
          <div className="col-sm-12">
            <div className="card">
              <div className="card-header">
                <h4 className="card-title">Basic Inputs</h4>
              </div>
              <div className="card-body">
                <form action="#">
                  <div className="form-group row">
                    <label className="col-form-label col-md-2">Text Input</label>
                    <div className="col-md-10">
                      <input type="text" className="form-control" />
                    </div>
                  </div>
                  <div className="form-group row">
                    <label className="col-form-label col-md-2">Password</label>
                    <div className="col-md-10">
                      <input type="password" className="form-control" />
                    </div>
                  </div>
                  <div className="form-group row">
                    <label className="col-form-label col-md-2">
                      Disabled Input
                    </label>
                    <div className="col-md-10">
                      <input
                        type="text"
                        className="form-control"
                        disabled={true}
                      />
                    </div>
                  </div>
                  <div className="form-group row">
                    <label className="col-form-label col-md-2">
                      Readonly Input
                    </label>
                    <div className="col-md-10">
                      <input
                        type="text"
                        className="form-control"
                        defaultValue="readonly"
                        readOnly={true}
                      />
                    </div>
                  </div>
                  <div className="form-group row">
                    <label className="col-form-label col-md-2">Placeholder</label>
                    <div className="col-md-10">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Placeholder"
                      />
                    </div>
                  </div>
                  <div className="form-group row">
                    <label className="col-form-label col-md-2">File Input</label>
                    <div className="col-md-10">
                      <input className="form-control" type="file" />
                    </div>
                  </div>
                  <div className="form-group row">
                    <label className="col-form-label col-md-2">
                      Default Select
                    </label>
                    <div className="col-md-10">
                      <select className="form-control form-select">
                        <option>-- Select --</option>
                        <option>Option 1</option>
                        <option>Option 2</option>
                        <option>Option 3</option>
                        <option>Option 4</option>
                        <option>Option 5</option>
                      </select>
                    </div>
                  </div>
                  <div className="form-group row">
                    <label className="col-form-label col-md-2">Radio</label>
                    <div className="col-md-10">
                      <div className="radio">
                        <label>
                          <input type="radio" name="radio" /> Option 1
                        </label>
                      </div>
                      <div className="radio">
                        <label>
                          <input type="radio" name="radio" /> Option 2
                        </label>
                      </div>
                      <div className="radio">
                        <label>
                          <input type="radio" name="radio" /> Option 3
                        </label>
                      </div>
                    </div>
                  </div>
                  <div className="form-group row">
                    <label className="col-form-label col-md-2">Checkbox</label>
                    <div className="col-md-10">
                      <div className="checkbox">
                        <label>
                          <input type="checkbox" name="checkbox" /> Option 1
                        </label>
                      </div>
                      <div className="checkbox">
                        <label>
                          <input type="checkbox" name="checkbox" /> Option 2
                        </label>
                      </div>
                      <div className="checkbox">
                        <label>
                          <input type="checkbox" name="checkbox" /> Option 3
                        </label>
                      </div>
                    </div>
                  </div>
                  <div className="form-group row">
                    <label className="col-form-label col-md-2">Textarea</label>
                    <div className="col-md-10">
                      <textarea
                        rows={5}
                        cols={5}
                        className="form-control"
                        placeholder="Enter text here"
                        defaultValue={""}
                      />
                    </div>
                  </div>
                  <div className="form-group mb-0 row">
                    <label className="col-form-label col-md-2">
                      Input Addons
                    </label>
                    <div className="col-md-10">
                      <div className="input-group">
                        <span className="input-group-text">$</span>
                        <input className="form-control" type="text" />
                        <div className="input-group-append">
                          <button className="btn btn-primary" type="button">
                            Button
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
            <div className="card">
              <div className="card-header">
                <h4 className="card-title">Input Sizes</h4>
              </div>
              <div className="card-body">
                <form action="#">
                  <div className="form-group row">
                    <label className="col-form-label col-md-2">Large Input</label>
                    <div className="col-md-10">
                      <input
                        type="text"
                        className="form-control form-control-lg"
                        placeholder=".form-control-lg"
                      />
                    </div>
                  </div>
                  <div className="form-group row">
                    <label className="col-form-label col-md-2">
                      Default Input
                    </label>
                    <div className="col-md-10">
                      <input
                        type="text"
                        className="form-control"
                        placeholder=".form-control"
                      />
                    </div>
                  </div>
                  <div className="form-group mb-0 row">
                    <label className="col-form-label col-md-2">Small Input</label>
                    <div className="col-md-10">
                      <input
                        type="text"
                        className="form-control form-control-sm"
                        placeholder=".form-control-sm"
                      />
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    {/* /Page Wrapper */}
  </>
  
  )
}

export default BasicInputs
