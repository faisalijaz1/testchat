import React from 'react'
import ImageWithBasePath from '../../data/img/ImageWithBasePath.tsx'

const StatusViewedBy = () => {
  return (
    <>
  {/* Viewed By */}
  <div className="modal fade " id="view-user-status">
    <div className="modal-dialog modal-dialog-centered">
      <div className="modal-content">
        <div className="modal-header">
          <h5 className="modal-title">Viewed By</h5>
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
          <div className="user-block-group mb-0">
            <div className="search_chat has-search">
              <span className="fas fa-search form-control-feedback" />
              <input
                className="form-control chat_input"
                id="search-contacts-one"
                type="text"
                placeholder="Search"
              />
            </div>
            <h5>Recent View</h5>
            <div className="recent-block-group">
              <div className="user-block-profile">
                <div className="avatar">
                  <ImageWithBasePath
                    src="/assets/img/avatar/avatar-1.jpg"
                    className="rounded-circle"
                    alt="image"
                  />
                </div>
                <div className="block-user-name">
                  <h6>Horace Keene</h6>
                  <span>Sleeping</span>
                </div>
              </div>
            </div>
            <div className="recent-block-group">
              <div className="user-block-profile">
                <div className="avatar">
                  <ImageWithBasePath
                    src="/assets/img/avatar/avatar-2.jpg"
                    className="rounded-circle"
                    alt="image"
                  />
                </div>
                <div className="block-user-name">
                  <h6>Bacon Mark</h6>
                  <span>Available</span>
                </div>
              </div>
            </div>
            <div className="recent-block-group">
              <div className="user-block-profile">
                <div className="avatar">
                  <ImageWithBasePath
                    src="/assets/img/avatar/avatar-3.jpg"
                    className="rounded-circle"
                    alt="image"
                  />
                </div>
                <div className="block-user-name">
                  <h6>Debra Jones</h6>
                  <span>At Work</span>
                </div>
              </div>
            </div>
            <div className="recent-block-group mb-0">
              <div className="user-block-profile">
                <div className="avatar">
                  <ImageWithBasePath
                    src="/assets/img/avatar/avatar-4.jpg"
                    className="rounded-circle"
                    alt="image"
                  />
                </div>
                <div className="block-user-name">
                  <h6>Dina Brown</h6>
                  <span>Can’t Talk, WhatsApp only</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* /Viewed By */}
</>

  )
}

export default StatusViewedBy