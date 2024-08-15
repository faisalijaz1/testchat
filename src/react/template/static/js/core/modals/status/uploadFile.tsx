import React from 'react'
import { Link } from 'react-router-dom'
import ImageWithBasePath from '../../data/img/ImageWithBasePath.tsx'

const UploadFile = () => {
    return (
        <>
            {/* Drag and Drop */}
            <div className="modal fade" id="upload-file">
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title">Drag and Drop or Upload Files</h5>
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
                            <div className="file-drop mb-4">
                                <form action="#" className="dropzone dz-clickable">
                                    <ImageWithBasePath
                                        src="/assets/img/icon/drag-file.svg"
                                        className="img-fluid"
                                        alt="upload"
                                    />
                                    <p>Drag &amp; drop your files here or choose file</p>
                                    <span>Maximum size: 50MB</span>
                                    <div className="dz-default dz-message">
                                        <span>Drop files here to upload</span>
                                    </div>
                                </form>
                            </div>
                            <div className="mute-chat-btn ">
                                <Link to="#"
                                    className="btn btn-secondary"
                                    data-bs-dismiss="modal"
                                    aria-label="Close"
                                >
                                    <i className="feather-x me-1" />
                                    Cancel
                                </Link>
                                <Link to="#"
                                    className="btn btn-primary"
                                    data-bs-toggle="modal"
                                    data-bs-target="#upload-file-image"
                                >
                                    <i className="feather-arrow-right me-1" />
                                    Next
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* /Drag and Drop */}

            {/* Upload File */}
            <div className="modal fade upload-img-file" id="upload-file-image">
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content">
                        <div className="modal-header">
                            <ul className="upload-image-list">
                                <li>
                                    <Link to="#">
                                        <ImageWithBasePath src="/assets/img/icon/crop_rotate.svg" alt="icon" />
                                    </Link>
                                </li>
                                <li>
                                    <Link to="#">
                                        <ImageWithBasePath src="/assets/img/icon/sticky_note.svg" alt="icon" />
                                    </Link>
                                </li>
                                <li>
                                    <Link to="#">
                                        <ImageWithBasePath src="/assets/img/icon/text-01.svg" alt="icon" />
                                    </Link>
                                </li>
                                <li>
                                    <Link to="#">
                                        <ImageWithBasePath src="/assets/img/icon/edit-02.svg" alt="icon" />
                                    </Link>
                                </li>
                            </ul>
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
                            <div className="uplaod-image">
                                <ImageWithBasePath
                                    src="/assets/img/status.jpg"
                                    className="img-fluid"
                                    alt="upload"
                                />
                                <div className="chat status-chat-footer">
                                    <div className="chat-footer">
                                        <form>
                                            <div className="smile-foot">
                                                <div className="chat-action-btns">
                                                    <div className="chat-action-col">
                                                        <Link
                                                            className="action-circle"
                                                            to="#"
                                                            data-bs-toggle="dropdown"
                                                        >
                                                            <i className="bx bx-dots-vertical-rounded" />
                                                        </Link>
                                                        <div className="dropdown-menu dropdown-menu-end">
                                                            <Link to="#" className="dropdown-item ">
                                                                <span>
                                                                    <i className="bx bx-file" />
                                                                </span>
                                                                Document
                                                            </Link>
                                                            <Link to="#" className="dropdown-item">
                                                                <span>
                                                                    <i className="bx bx-camera" />
                                                                </span>
                                                                Camera
                                                            </Link>
                                                            <Link to="#" className="dropdown-item">
                                                                <span>
                                                                    <i className="bx bx-image" />
                                                                </span>
                                                                Gallery
                                                            </Link>
                                                            <Link to="#" className="dropdown-item">
                                                                <span>
                                                                    <i className="bx bx-volume-full" />
                                                                </span>
                                                                Audio
                                                            </Link>
                                                            <Link to="#" className="dropdown-item">
                                                                <span>
                                                                    <i className="bx bx-map" />
                                                                </span>
                                                                Location
                                                            </Link>
                                                            <Link to="#" className="dropdown-item">
                                                                <span>
                                                                    <i className="bx bx-user-pin" />
                                                                </span>
                                                                Contact
                                                            </Link>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="smile-foot emoj-action-foot">
                                                <Link to="#" className="action-circle">
                                                    <i className="bx bx-smile" />
                                                </Link>
                                                <div className="emoj-group-list-foot down-emoji-circle">
                                                    <ul>
                                                        <li>
                                                            <Link to="#">
                                                                <ImageWithBasePath
                                                                    src="/assets/img/icon/emoj-icon-01.svg"
                                                                    alt="Icon"
                                                                />
                                                            </Link>
                                                        </li>
                                                        <li>
                                                            <Link to="#">
                                                                <ImageWithBasePath
                                                                    src="/assets/img/icon/emoj-icon-02.svg"
                                                                    alt="Icon"
                                                                />
                                                            </Link>
                                                        </li>
                                                        <li>
                                                            <Link to="#">
                                                                <ImageWithBasePath
                                                                    src="/assets/img/icon/emoj-icon-03.svg"
                                                                    alt="Icon"
                                                                />
                                                            </Link>
                                                        </li>
                                                        <li>
                                                            <Link to="#">
                                                                <ImageWithBasePath
                                                                    src="/assets/img/icon/emoj-icon-04.svg"
                                                                    alt="Icon"
                                                                />
                                                            </Link>
                                                        </li>
                                                        <li>
                                                            <Link to="#">
                                                                <ImageWithBasePath
                                                                    src="/assets/img/icon/emoj-icon-05.svg"
                                                                    alt="Icon"
                                                                />
                                                            </Link>
                                                        </li>
                                                        <li className="add-emoj">
                                                            <Link to="#">
                                                                <i className="feather-plus" />
                                                            </Link>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <div className="smile-foot">
                                                <Link to="#" className="action-circle">
                                                    <i className="bx bx-microphone-off" />
                                                </Link>
                                            </div>
                                            <input
                                                type="text"
                                                className="form-control chat_form"
                                                placeholder="Type your message here..."
                                            />
                                            <div className="form-buttons">
                                                <Link className="btn send-btn" to="#">
                                                    <i className="bx bx-paper-plane" />
                                                </Link>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* /Upload File */}
        </>
    )
}

export default UploadFile
