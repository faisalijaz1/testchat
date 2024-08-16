import React from 'react'

const DeleteStatus = () => {
  return (
    <>
    {/* Deleting a Chat */}
    <div className="modal fade" id="change-status">
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">Delete Status</h5>
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
            <div className="block-user-blk text-center">
              <i className="bx bx-trash change-color " />
              <p>
                Clearing or deleting entire status will only remove status from
                this device and your devices on the newer versions of DreamsChat.
              </p>
            </div>
            <div className="mute-chat-btn justify-content-center">
              <a
                className="btn btn-secondary"
                data-bs-dismiss="modal"
                aria-label="Close"
              >
                Cancel
              </a>
              <a
                className="btn btn-primary"
                data-bs-dismiss="modal"
                aria-label="Close"
              >
                Delete
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
    {/* /Deleting a Chat */}
  </>
  
  )
}

export default DeleteStatus
