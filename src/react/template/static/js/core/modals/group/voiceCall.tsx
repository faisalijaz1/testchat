import React from "react";
import { Link } from "react-router-dom";
import { all_routes } from "../../../feature-module/router/all_routes.tsx";
import ImageWithBasePath from "../../data/img/ImageWithBasePath.tsx";

const VoiceCall = () => {
    const routes = all_routes
  return (
    <>
      {/* Voice Call */}
      <div className="modal fade" id="voice_call" role="document">
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content voice_content">
            <div className="modal-body voice_body">
              <div className="call-box incoming-box">
                <div className="call-wrapper">
                  <div className="call-inner">
                    <div className="call-user">
                      <ImageWithBasePath
                        alt="User Image"
                        src="assets/img/avatar/avatar-2.jpg"
                        className="call-avatar"
                      />
                      <h4>
                        Mark Villiams <span>Voice Calling</span>
                      </h4>
                    </div>
                    <div className="call-items">
                      <Link
                        to="#"
                        className="btn call-item call-end"
                        data-bs-dismiss="modal"
                      >
                        <i className="bx bx-x" />
                      </Link>
                      <Link
                        to={routes.audioCall}
                        className="btn call-item call-start"
                      >
                        <i className="bx bx-phone-call" />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* /Voice Call */}
    </>
  );
};

export default VoiceCall;
