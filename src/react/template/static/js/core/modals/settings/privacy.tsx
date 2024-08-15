import React from 'react'
import Select, { StylesConfig } from 'react-select';

const Privacy = () => {
    const privacy = [
        { value: "Everyone", label: "Everyone" },
        { value: "Friends", label: "Friends" },
        { value: "Selected Friends", label: "Selected Friends" },
    ];
    const lastseen = [
        { value: "My Contacts", label: "My Contacts" },
        { value: "Friends", label: "Friends" },
        { value: "Selected Friends", label: "Selected Friends" },
    ];
    const groups = [
        { value: "Everyone", label: "Everyone" },
        { value: "Friends", label: "Friends" },
        { value: "Selected Friends", label: "Selected Friends" },
    ];
    const status = [
        { value: "Only Share With", label: "Only Share With" },
        { value: "Friends", label: "Friends" },
        { value: "Selected Friends", label: "Selected Friends" },
    ];  
    
    
    const customStyles: StylesConfig = {
        option: (provided, state) => ({
            ...provided,
            backgroundColor: state.isFocused ? "#680A83" : "#fff",
            color: state.isFocused ? "#fff" : "#000",
            "&:hover": {
                backgroundColor: "#680A83",
            },
        }),
    };
    return (
        <>
            {/* Privacy */}
            <div className="modal fade " id="privacy">
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title">Privacy</h5>
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
                                    <div className="privacy-content">
                                        <h6>Profile Picture</h6>
                                        <p>Select who can see my profile picture</p>
                                    </div>
                                    <div>
                                        <Select
                                            className="select w-100"
                                            options={privacy}
                                            placeholder="Select"
                                            styles={customStyles}
                                        />
                                    </div>
                                </div>
                                <div className="privacy-detail-blk">
                                    <div className="privacy-content">
                                        <h6>Last Seen</h6>
                                        <p>Select who can see my last seen</p>
                                    </div>
                                    <div>
                                       
                                        <Select
                                            className="select w-100"
                                            options={lastseen}
                                            placeholder="Select"
                                            styles={customStyles}
                                        />
                                    </div>
                                </div>
                                <div className="privacy-detail-blk">
                                    <div className="privacy-content">
                                        <h6>Groups</h6>
                                        <p>Select who can add you in groups</p>
                                    </div>
                                    <div>
                                        
                                        <Select
                                            className="select w-100"
                                            options={groups}
                                            placeholder="Select"
                                            styles={customStyles}
                                        />
                                    </div>
                                </div>
                                <div className="privacy-detail-blk">
                                    <div className="privacy-content">
                                        <h6>Status</h6>
                                        <p>Select who can see my status updates</p>
                                    </div>
                                    <div>
                                      
                                        <Select
                                            className="select w-100"
                                            options={status}
                                            placeholder="Select"
                                            styles={customStyles}
                                        />
                                    </div>
                                </div>
                                <div className="privacy-detail-blk">
                                    <div className="privacy-content">
                                        <h6>Read receipts</h6>
                                        <p>
                                            If turn off this option you won&apos;t be able to see read recipts
                                        </p>
                                    </div>
                                    <div className="settings-switch d-flex align-items-center">
                                        <label className="switch ms-auto">
                                            <input type="checkbox" />
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
            {/* /Privacy */}
        </>

    )
}

export default Privacy
