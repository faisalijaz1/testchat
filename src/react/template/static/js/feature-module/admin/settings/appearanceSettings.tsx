import React,{useState} from 'react'
// import useState  from 'react'
import { Link } from 'react-router-dom'
import Select, { StylesConfig } from "react-select";

const AppearanceSettings = () => {
  const settings = [
    { value: "Small - 250 Px", label: "Small - 250 Px" },
    { value: "Large - 370 Px", label: "Large - 370 Px" },
    
  ];
  const font = [
    { value: "Inter", label: "Inter" },
    { value: "Avenir", label: "Avenir" },
    { value: "Lato", label: "Lato" },
    
  ];
  const [activeColor, setActiveColor] = useState('defaultcolor');

  const handleColorClick = (color: React.SetStateAction<string>) => {
    setActiveColor(color);
  };
  const [activeTheme, setActiveTheme] = useState('light');

  const handleThemeClick = (theme: React.SetStateAction<string>) => {
    setActiveTheme(theme);
  };

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
    <div>
<>
  {/* Page Wrapper */}
  <div className="page-wrapper profile-set-wrapper">
    <div className="content container-fluid profile-set-content">
      <div className="page-header">
        <div className="page-title">
          <h4>Appearance Setting</h4>
        </div>
      </div>
      <div className="appearance-settings-wrapper">
        <div className="row">
          <div className="col-12">
            <div className="appear-set">
              <div className="row">
                <div className="col-md-3 col-sm-6 col-12">
                  <h6>Interface Theme</h6>
                  <p>Select or customize your UI theme</p>
                </div>
                <div className="col-md-3 col-sm-6 col-12">
        <div className={`theme-image ${activeTheme === 'light' ? 'active' : ''}`} onClick={() => handleThemeClick('light')}>
          <div className="theme-image-set">
            <img src="/admin/assets/img/light-theme.jpg" alt="img" />
            <h6>Light</h6>
          </div>
        </div>
      </div>
      <div className="col-md-3 col-sm-6 col-12">
        <div className={`theme-image ${activeTheme === 'dark' ? 'active' : ''}`} onClick={() => handleThemeClick('dark')}>
          <div className="theme-image-set">
            <img src="/admin/assets/img/dark-theme.jpg" alt="img" />
            <h6>Dark</h6>
          </div>
        </div>
      </div>
      <div className="col-md-3 col-sm-6 col-12">
        <div className={`theme-image ${activeTheme === 'automatic' ? 'active' : ''}`} onClick={() => handleThemeClick('automatic')}>
          <div className="theme-image-set">
            <img src="/admin/assets/img/automatic-theme.jpg" alt="img" />
            <h6>Automatic</h6>
          </div>
        </div>
      </div>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-12">
                <div className="form-group-set">
                  <div className="row">
                    <div className="col-lg-4 col-sm-6">
                      <h6>Accent Color</h6>
                      <p>Choose accent colour of website</p>
                    </div>
                    <div className="col-lg-8 col-sm-12">
                      <div className="themecolor">
                      <ul>
      <li>
        <span className={`themecolorset defaultcolor ${activeColor === 'defaultcolor' ? 'active' : ''}`} onClick={() => handleColorClick('defaultcolor')} />
      </li>
      <li>
        <span className={`themecolorset theme-greens ${activeColor === 'theme-greens' ? 'active' : ''}`} onClick={() => handleColorClick('theme-greens')} />
      </li>
      <li>
        <span className={`themecolorset theme-yellow ${activeColor === 'theme-yellow' ? 'active' : ''}`} onClick={() => handleColorClick('theme-yellow')} />
      </li>
      <li>
        <span className={`themecolorset theme-pink ${activeColor === 'theme-pink' ? 'active' : ''}`} onClick={() => handleColorClick('theme-pink')} />
      </li>
      <li>
        <span className={`themecolorset theme-viloets ${activeColor === 'theme-viloets' ? 'active' : ''}`} onClick={() => handleColorClick('theme-viloets')} />
      </li>
      <li>
        <span className={`themecolorset theme-orange ${activeColor === 'theme-orange' ? 'active' : ''}`} onClick={() => handleColorClick('theme-orange')} />
      </li>
      <li>
        <span className={`themecolorset theme-blue ${activeColor === 'theme-blue' ? 'active' : ''}`} onClick={() => handleColorClick('theme-blue')} />
      </li>
      <li>
        <span className={`themecolorset theme-dark-green ${activeColor === 'theme-dark-green' ? 'active' : ''}`} onClick={() => handleColorClick('theme-dark-green')} />
      </li>
      <li>
        <span className={`themecolorset theme-skyblue ${activeColor === 'theme-skyblue' ? 'active' : ''}`} onClick={() => handleColorClick('theme-skyblue')} />
      </li>
      <li>
        <span className={`themecolorset theme-gradient ${activeColor === 'theme-gradient' ? 'active' : ''}`} onClick={() => handleColorClick('theme-gradient')} />
      </li>
      <li>
        <span className={`themecolorset theme-purple ${activeColor === 'theme-purple' ? 'active' : ''}`} onClick={() => handleColorClick('theme-purple')} />
      </li>
      <li>
        <span className={`themecolorset theme-light-blue ${activeColor === 'theme-light-blue' ? 'active' : ''}`} onClick={() => handleColorClick('theme-light-blue')} />
      </li>
    </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-12">
                <div className="form-group-set">
                  <div className="row align-items-center">
                    <div className="col-lg-4 col-sm-6">
                      <h6>Sidebar Size</h6>
                      <p>Select size of the sidebar to display</p>
                    </div>
                    <div className="col-lg-8 col-sm-12">
                      <div className="drop-eng customize-select">
                        
                        <Select
                        className="select otpselect"
                        options={settings}
                        placeholder="Small - 250 Px"
                        styles={customStyles}
                      />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-12">
                <div className="form-group-set mb-0">
                  <div className="row">
                    <div className="col-lg-4 col-sm-6">
                      <h6> Font Family </h6>
                      <p>Select font family of website</p>
                    </div>
                    <div className="col-lg-8 col-sm-12">
                      <div className="drop-eng customize-select">
                        
                        <Select
                        className="select otpselect"
                        options={font}
                        placeholder="Inter"
                        styles={customStyles}
                      />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="acc-submit wrapp-set-system appearance-settings w-100">
        <Link to="#" className="btn btn-secondary">
          Cancel
        </Link>
        <Link to="#" className="btn btn-primary">
          Save Changes
        </Link>
      </div>
    </div>
  </div>
  {/* /Page Wrapper */}
</>

    </div>
  )
}

export default AppearanceSettings