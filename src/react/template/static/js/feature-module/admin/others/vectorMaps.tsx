import React from 'react'

const VectorMaps = () => {
    return (
        <>
            {/* Page Wrapper */}
            <div className="page-wrapper profile-set-wrapper">
                <div className="content container-fluid profile-set-content">
                    <div className="page-header">
                        <div className="page-title">
                            <h4>Vector Maps</h4>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-sm-6">
                            <div className="card">
                                <div className="card-header">
                                    <h5 className="card-title">World Map</h5>
                                </div>
                                <div className="card-body">

                                    <iframe
                                        src="https://www.google.com/maps/embed"
                                        style={{ border: "0", height: "265px", width: "408px" }}
                                        allowFullScreen={true}
                                        loading="lazy"
                                        referrerPolicy="no-referrer-when-downgrade"
                                        className="contact-map"
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-6">
                            <div className="card">
                                <div className="card-header">
                                    <h5 className="card-title">USA</h5>
                                </div>
                                <div className="card-body">
                                    <div id="vmapusa" />
                                    <iframe
                                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d10224864.973993133!2d-109.04522367048143!3d39.47904596695314!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x876e17e63ed7de11%3A0x41c1cd2a7c52edf1!2sUnited%20States!5e0!3m2!1sen!2sus!4v1647651537357!5m2!1sen!2sus"
                                        style={{ border: "0", height: "265px", width: "408px" }}
                                        allowFullScreen={true}
                                        loading="lazy"
                                        referrerPolicy="no-referrer-when-downgrade"
                                        className="contact-map"
                                    />

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

export default VectorMaps
