import React from 'react'

const FormMask = () => {
  return (
    <>
  {/* Page Wrapper */}
  <div className="page-wrapper profile-set-wrapper">
    <div className="content container-fluid profile-set-content">
      <div className="page-header">
        <div className="page-title">
          <h4>Form Mask</h4>
        </div>
      </div>
      <div className="row">
        <div className="col-sm-12">
          <div className="card">
            <div className="card-header">
              <h5 className="card-title">Form Mask</h5>
              <p className="card-text">
                Input masks can be used to force the user to enter data conform
                a specific format. Unlike validation, the user can&apos;t enter any
                other key than the ones specified by the mask.
              </p>
            </div>
            <div className="card-body">
              <form action="#">
                <div className="form-group">
                  <label>Phone</label>
                  <input type="text" id="phone" className="form-control" />
                  <span className="form-text text-muted">(999) 999-9999</span>
                </div>
                <div className="form-group">
                  <label>Date</label>
                  <input type="text" id="date" className="form-control" />
                  <span className="form-text text-muted">dd/mm/yyyy</span>
                </div>
                <div className="form-group">
                  <label>SSN field 1</label>
                  <input type="text" id="ssn" className="form-control" />
                  <span className="form-text text-muted">
                    e.g &quot;999-99-9999&quot;
                  </span>
                </div>
                <div className="form-group">
                  <label>Phone field + ext.</label>
                  <input type="text" id="phoneExt" className="form-control" />
                  <span className="form-text text-muted">+40 999 999 999</span>
                </div>
                <div className="form-group">
                  <label>Product Key</label>
                  <input type="text" id="product" className="form-control" />
                  <span className="form-text text-muted">e.g a*-999-a999</span>
                </div>
                <div className="form-group">
                  <label>Currency</label>
                  <input type="text" id="currency" className="form-control" />
                  <span className="form-text text-muted">$ 999,999,999.99</span>
                </div>
                <div className="form-group">
                  <label>Eye Script</label>
                  <input type="text" id="eyescript" className="form-control" />
                  <span className="form-text text-muted">~9.99 ~9.99 999</span>
                </div>
                <div className="form-group">
                  <label>Percent</label>
                  <input type="text" id="pct" className="form-control" />
                  <span className="form-text text-muted">e.g &quot;99%&quot;</span>
                </div>
                <div className="form-group mb-0">
                  <label>Credit Card Number</label>
                  <input type="text" className="form-control" id="ccn" />
                  <span className="form-text text-muted">
                    e.g &quot;999.999.999.9999&quot;
                  </span>
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

export default FormMask
