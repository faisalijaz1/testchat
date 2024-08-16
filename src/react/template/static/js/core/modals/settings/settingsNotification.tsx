import React from 'react'

const SettingsNotification = () => {
    return (
        <div>
            <>
                {/* Notifications */}
                <div className="modal fade " id="setting-notification">
                    <div className="modal-dialog modal-dialog-centered">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title">Notifications</h5>
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
                                <div className="notification-group">
                                    <div className="privacy-detail-blk">
                                        <div className="privacy-content notify-content">
                                            <h6>Message Notifications</h6>
                                            <p>Show notifications for new messages</p>
                                        </div>
                                        <div className="notify-check mb-0">
                                            <div className="form-check d-flex align-items-center justify-content-start ps-0">
                                                <label className="custom-check mt-0 mb-0">
                                                    <input type="checkbox" name="remeber" />
                                                    <span className="checkmark" />
                                                </label>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="privacy-detail-blk ">
                                        <div className="privacy-content notify-content">
                                            <h6>Show Previews</h6>
                                        </div>
                                        <div className="notify-check mb-0">
                                            <div className="form-check d-flex align-items-center justify-content-start ps-0">
                                                <label className="custom-check mt-0 mb-0">
                                                    <input type="checkbox" name="remeber" />
                                                    <span className="checkmark" />
                                                </label>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="privacy-detail-blk border-group">
                                        <div className="privacy-content notify-content">
                                            <h6>Show Reaction Notifications</h6>
                                        </div>
                                        <div className="notify-check mb-0">
                                            <div className="form-check d-flex align-items-center justify-content-start ps-0">
                                                <label className="custom-check mt-0 mb-0">
                                                    <input type="checkbox" name="remeber" />
                                                    <span className="checkmark" />
                                                </label>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="privacy-detail-blk">
                                        <div className="privacy-content notify-content">
                                            <h6>Sounds</h6>
                                            <p>Play sounds for incoming messages</p>
                                        </div>
                                        <div className="notify-check mb-0">
                                            <div className="form-check d-flex align-items-center justify-content-start ps-0">
                                                <label className="custom-check mt-0 mb-0">
                                                    <input type="checkbox" name="remeber" />
                                                    <span className="checkmark" />
                                                </label>
                                            </div>
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
                {/* /Notifications */}
            </>

        </div>
    )
}

export default SettingsNotification
