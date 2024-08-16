import React from 'react'
import { StylesConfig } from 'react-select';
import Select from 'react-select';

const SettingsLanguage = () => {
    const language = [
        { value: "Choose Language", label: "Choose Language" },
        { value: "English", label: "English" },
        { value: "French", label: "French" }, 
        { value: "German", label: "German" }, 
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
            {/* Languages */}
            <div className="modal fade " id="setting-languages">
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title">Languages</h5>
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
                            <div className="languages-group mb-4">
                                <div>
                                   
                                    <Select
                            className="selectn"
                            options={language}
                            placeholder="Choose Language"
                            styles={customStyles}
                          />
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
            {/* /Languages */}
        </>

    )
}

export default SettingsLanguage
