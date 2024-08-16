import React from 'react'
import ImageWithBasePath from '../../data/img/ImageWithBasePath.tsx'

const Chat = () => {
  return (
    <>
    {/* Chat */}
    <div className="modal fade " id="setting-chat">
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">Chat</h5>
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
            <div className="privacy-group">
              <div className="privacy-detail-blk">
                <div className="privacy-content chat-content">
                  <h6>
                    <a
                      href="#"
                      data-bs-toggle="modal"
                      data-bs-target="#gallery-image"
                    >
                      Background Images
                      <span>
                        <i className="feather-chevron-right" />
                      </span>
                    </a>
                  </h6>
                </div>
              </div>
              <div className="privacy-detail-blk">
                <div className="privacy-content chat-content">
                  <h6>Clear All Chat</h6>
                </div>
                <div className="settings-switch d-flex align-items-center">
                  <label className="switch ms-auto">
                    <input type="checkbox" />
                    <span className="slider round" />
                  </label>
                </div>
              </div>
              <div className="privacy-detail-blk">
                <div className="privacy-content chat-content">
                  <h6>Delete All Chat</h6>
                </div>
                <div className="settings-switch d-flex align-items-center">
                  <label className="switch ms-auto">
                    <input type="checkbox" defaultChecked={true} />
                    <span className="slider round" />
                  </label>
                </div>
              </div>
              <div className="privacy-detail-blk">
                <div className="privacy-content chat-content">
                  <h6>Chat Backup</h6>
                </div>
                <div className="settings-switch d-flex align-items-center">
                  <label className="switch ms-auto">
                    <input type="checkbox" defaultChecked={true} />
                    <span className="slider round" />
                  </label>
                </div>
              </div>
            </div>
            <div className="mute-chat-btn">
              <a
                className="btn btn-secondary"
                data-bs-dismiss="modal"
                aria-label="Close"
              >
                <i className="feather-x me-1" />
                Cancel
              </a>
              <a
                className="btn btn-primary"
                data-bs-dismiss="modal"
                aria-label="Close"
              >
                <i className="feather-check me-1" />
                Save Changes
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
    <>
  {/* Gallery */}
  <div className="modal fade " id="gallery-image">
    <div className="modal-dialog modal-dialog-centered">
      <div className="modal-content setting-wall">
        <div className="modal-header set-wall-header">
          <h5 className="modal-title">Select Wallpaper</h5>
          <button
            type="button"
            className="close"
            data-bs-dismiss="modal"
            aria-label="Close"
          >
            <span className="material-icons">close</span>
          </button>
        </div>
        <div className="row">
          <div className="col-4 wallper-card-wrapper">
            <div className="wall-img active">
              <ImageWithBasePath
                src="/assets/img/wallpaper/wallpaper-07.png"
                alt="Img"
                className="img-fluid"
              />
              <div className="theme-image-content">
                <i className="fa fa-check-circle" aria-hidden="true" />
              </div>
            </div>
          </div>
          <div className="col-4 wallper-card-wrapper">
            <div className="wall-img">
              <ImageWithBasePath
                src="/assets/img/wallpaper/wallpaper-08.png"
                alt="Img"
                className="img-fluid"
              />
              <div className="theme-image-content">
                <i className="fa fa-check-circle" aria-hidden="true" />
              </div>
            </div>
          </div>
          <div className="col-4 wallper-card-wrapper">
            <div className="wall-img">
              <ImageWithBasePath
                src="/assets/img/wallpaper/wallpaper-09.png"
                alt="Img"
                className="img-fluid"
              />
              <div className="theme-image-content">
                <i className="fa fa-check-circle" aria-hidden="true" />
              </div>
            </div>
          </div>
          <div className="col-4 wallper-card-wrapper">
            <div className="wall-img">
              <ImageWithBasePath
                src="/assets/img/wallpaper/wallpaper-10.png"
                alt="Img"
                className="img-fluid"
              />
              <div className="theme-image-content">
                <i className="fa fa-check-circle" aria-hidden="true" />
              </div>
            </div>
          </div>
          <div className="col-4 wallper-card-wrapper">
            <div className="wall-img">
              <ImageWithBasePath
                src="/assets/img/wallpaper/wallpaper-11.png"
                alt="Img"
                className="img-fluid"
              />
              <div className="theme-image-content">
                <i className="fa fa-check-circle" aria-hidden="true" />
              </div>
            </div>
          </div>
          <div className="col-4 wallper-card-wrapper">
            <div className="wall-img">
              <ImageWithBasePath
                src="/assets/img/wallpaper/wallpaper-12.png"
                alt="Img"
                className="img-fluid"
              />
              <div className="theme-image-content">
                <i className="fa fa-check-circle" aria-hidden="true" />
              </div>
            </div>
          </div>
          <div className="col-4 wallper-card-wrapper">
            <div className="wall-img">
              <ImageWithBasePath
                src="/assets/img/wallpaper/wallpaper-06.png"
                alt="Img"
                className="img-fluid"
              />
              <div className="theme-image-content">
                <i className="fa fa-check-circle" aria-hidden="true" />
              </div>
            </div>
          </div>
          <div className="col-4 wallper-card-wrapper">
            <div className="wall-img">
              <ImageWithBasePath
                src="/assets/img/wallpaper/wallpaper-05.png"
                alt="Img"
                className="img-fluid"
              />
              <div className="theme-image-content">
                <i className="fa fa-check-circle" aria-hidden="true" />
              </div>
            </div>
          </div>
          <div className="col-4 wallper-card-wrapper">
            <div className="wall-img">
              <ImageWithBasePath
                src="/assets/img/wallpaper/wallpaper-04.png"
                alt="Img"
                className="img-fluid"
              />
              <div className="theme-image-content">
                <i className="fa fa-check-circle" aria-hidden="true" />
              </div>
            </div>
          </div>
          <div className="col-4 wallper-card-wrapper">
            <div className="wall-img">
              <ImageWithBasePath
                src="/assets/img/wallpaper/wallpaper-03.png"
                alt="Img"
                className="img-fluid"
              />
              <div className="theme-image-content">
                <i className="fa fa-check-circle" aria-hidden="true" />
              </div>
            </div>
          </div>
          <div className="col-4 wallper-card-wrapper">
            <div className="wall-img">
              <ImageWithBasePath
                src="/assets/img/wallpaper/wallpaper-02.png"
                alt="Img"
                className="img-fluid"
              />
              <div className="theme-image-content">
                <i className="fa fa-check-circle" aria-hidden="true" />
              </div>
            </div>
          </div>
          <div className="col-4 wallper-card-wrapper">
            <div className="wall-img">
              <ImageWithBasePath
                src="/assets/img/wallpaper/wallpaper-01.png"
                alt="Img"
                className="img-fluid"
              />
              <div className="theme-image-content">
                <i className="fa fa-check-circle" aria-hidden="true" />
              </div>
            </div>
          </div>
        </div>
        <div className="modal-body wall-set-body">
          <div className="mute-chat-btn wall-btn">
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
              Select
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* /Gallery */}
</>

    {/* /Chat */}
  </>
  
  )
}

export default Chat
