import React from 'react'

const SettingsLogout = () => {
    return (
        <>
            {/* Logout */}
            <div className="modal fade " id="setting-logout">
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title">Log Out</h5>
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
                            <div className="logout-group mb-4">
                                <p>Are you sure you want to log out?</p>
                            </div>
                            <div className="mute-chat-btn">
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
                                    Logout
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* /Logout */}
        </>

    )
}

export default SettingsLogout
