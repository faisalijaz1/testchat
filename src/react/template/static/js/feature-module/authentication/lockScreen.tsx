import React from 'react'
import ImageWithBasePath from '../../core/data/img/ImageWithBasePath.tsx'

const LockScreen = () => {
  return (
   
   <div className="container-fluid">
  <div className="login-wrapper lock-screen d-block">
    <div className="profile-cover text-center">
      <label className="profile-cover-avatar mb-3" htmlFor="avatar_upload">
        <ImageWithBasePath className="avatar-img" src="assets/img/avatar/avatar-2.jpg" alt="Profile Image" />
        <input type="file" id="avatar_upload" />
        <span className="avatar-edit">
          <ImageWithBasePath src="assets/img/icon/camera.svg" alt="Image" />
        </span>
      </label>
      <div className="lock-screen-user">
        <h6>Alex Smith</h6>
        <span>info@example.com</span>
      </div>
    </div>
    <div className="login-inbox">
      <div className="log-auth">
        <form>
          <div className="form-group reset-group">
            <label className="form-label">Enter Password <span>*</span></label>
            <div className="pass-group">
              <input type="password" className="form-control pass-inputs" />
              <span className="toggle-passwords fa-solid fa-eye" />
            </div>
          </div>                             
        </form>
      </div>
    </div>                
  </div>            
</div>


  )
}

export default LockScreen