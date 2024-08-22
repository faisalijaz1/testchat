import React, { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { adminSidebar } from "../../../core/admin/common/adminSidebar.tsx";
import Scrollbars from 'react-custom-scrollbars-2';
import ImageWithBasePath from '../../../core/data/img/ImageWithBasePath.tsx';
import { all_routes } from '../../router/all_routes.tsx';
import { useDispatch, useSelector } from 'react-redux';
import { setExpandMenu, setSidebarStyle } from '../../../core/data/redux/commonSlice.tsx';

const AdminSidebar = () => {
    const routes = all_routes
    


    const location = useLocation();
    // const pathname = location.pathname.split("/")[1];
    const pathname = location.pathname;
    console.log("pageurl", pathname);
  
    const [sidebarData, setSidebarData] = useState(adminSidebar); 
    const [isMouseOverSidebar, setMouseOverSidebar] = useState(false);
    const [submenuDrop ,setSubmenudrop,] = useState(false);
  
   
  
    
  
    useEffect(() => {
      if (
        isMouseOverSidebar &&
        document.body.classList.contains("mini-sidebar")
      ) {
        document.body.classList.add("expand-menu");
        return;
      }
      document.body.classList.remove("expand-menu");
    }, [isMouseOverSidebar]);
  
  
    
  
   
  
    const expandSubMenus = (menu) => {
      sessionStorage.setItem('menuValue', menu.menuValue);
      const updatedAdminSidebar = sidebarData.map((section) => {
        const updatedSection = { ...section };
        updatedSection.menu = section.menu.map((menuItem) =>
          menu.menuValue != menuItem.menuValue
            ? {
                ...menuItem,
                showSubRoute: false,
              }
            : {
                ...menuItem,
                showSubRoute: !menu.showSubRoute,
              },
        );
        return updatedSection;
      });
      setSidebarData(updatedAdminSidebar);
    };
  
  
  
   
    
    const arrowDrop=()=>{
      setSubmenudrop(!submenuDrop);
    }
  
  
   
    const dispatch = useDispatch();
    const expandMenu = useSelector(state => state.expandMenu);
    const sidebarStyle = useSelector(state => state.sidebarStyle);


    const handleHover =()=>{
        if(sidebarStyle == true){
      
            dispatch(setExpandMenu(true));
        }
        
    }
    const handleLeave =()=>{
       if(sidebarStyle == true){
            dispatch(setExpandMenu(false));
       }
    }
  
   
    return (
        <>
            {/* Sidebar */}
            <div className="sidebar" id="sidebar">
                <Scrollbars>
                    <div className="sidebar-inner slimscroll">
                        {/* Logo */}
                        <div className="header-left logo-light">
                            <Link to={routes.adminDashboard} className="logo">
                                {/* <ImageWithBasePath src="/admin/assets/img/skm-transparent1.png" alt="Logo" /> */}
                            <h6 style={{color:'white'}}>SKM ChatConnect </h6>
                            </Link>
                            <Link to={routes.adminDashboard} className="logo logo-small">
                                <ImageWithBasePath
                                    src="/admin/assets/img/skm-transparent1.png"
                                    alt="Logo"
                                    width={30}
                                    height={30}
                                />
                            </Link>
                        </div>
                        {/* /Logo */}
                        {/* Logo */}
                        <div className="header-left logo-dark">
                            <Link to={routes.adminDashboard} className="logo">
                                <ImageWithBasePath src="/admin/assets/img/logo-dark.png" alt="Logo" />
                            </Link>
                            <Link to={routes.adminDashboard} className="logo logo-small">
                                <ImageWithBasePath
                                    src="/admin/assets/img/logo-small-dark.png"
                                    alt="Logo"
                                    width={30}
                                    height={30}
                                />
                            </Link>
                        </div>
                        {/* /Logo */}
                        <div id="sidebar-menu" className="sidebar-menu">
                           <ul  onMouseEnter={handleHover} onMouseLeave={handleLeave}>


                           {sidebarData.map((mainTittle, index) => {
                return (
                  <>
                    <li className="menu-title" key={index + 1}>

                      <span>{mainTittle.tittle}</span>
                      {mainTittle?.tittle === "CRM" ? (
                        <small className="newly-added-features">New</small>):("")
                      }
                    </li>
                    {mainTittle.menu.map(
                      (menu, menuIndex) => {
                        return (
                          <>
                            {menu.hasSubRoute === false ? (
                              <li key={menuIndex + 1}  className={pathname === menu?.route || pathname === menu?.routeOne || pathname === menu?.routeTwo ? "active" : ""}>
                                <Link
                                  to={menu.route}
                                 
                                >
                                  {/* {menu.icon} */}
                                  <i className={menu?.boxIcon}/>
                                   <span>{menu.menuValue}</span>
                                </Link>
                              </li>
                            ) : (
                              <li className={pathname == menu?.routeOne || 
                                pathname == menu?.routeTwo || 
                                pathname == menu?.routeThree || 
                                pathname == menu?.routeFive || 
                                pathname == menu?.routeSix || 
                                pathname == menu?.routeFour ||
                                pathname == menu?.routeSeven ||
                                pathname == menu?.routeEight ||
                                pathname == menu?.routeNine ||
                                pathname == menu?.routeTen ||
                                pathname == menu?.routeEleven ||
                                pathname == menu?.routeTwelve ||
                                pathname == menu?.routeThirteen ||
                                pathname == menu?.routeFourteen 

                                ? "submenu active" : "submenu"}>
                                <Link
                                  to="#"
                                  onClick={() => expandSubMenus(menu)}
                                  
                                  className={
                                    menu.showSubRoute  ? 'subdrop' : ''
                                  } 
                                >
                                 
                                  <i className={menu?.boxIcon}/>
                                  <span className={menu?.menuValue == "Employees" ? "noti-dot" : ""}>{menu.menuValue} </span>
                                  <span className="menu-arrow">
                                  
                                  </span>
                                </Link>
                                <ul
                                  style={{
                                    display: menu.showSubRoute
                                      ? 'block'
                                      : 'none',
                                  }}
                                >
                                  {menu.subMenus.map(
                                    (
                                      subMenus,
                                      subMenu,
                                    ) => {
                                      return (
                                        <>
                                      
                                      {/* {console.log(subMenus?.showMenuRoute)} */}
                                      {subMenus?.showMenuRoute === true ? (
                                          <li key={subMenu + 1}>
                                            <Link
                                              to={subMenus.route}
                                            

                                              className={submenuDrop ? "subdrop":""}
                                              onClick={arrowDrop}
                                              
                                            >
                                              {subMenus.menuValue}
                                              <span className="menu-arrow" ></span>
                                            </Link>

                                            <ul style={{display: submenuDrop ? "block":"none"}}>
                                              {subMenus?.subMenusValues?.map((value,index)=>{
                                                return(
                                            <li key={index} >
                                              <span>
                                               
                                            <Link to={value.route}><span> {value.menuValue} </span></Link>
                                            </span>
                                            </li>)})
                                      }
                                      </ul>
                                               </li>) :(
                                                                                      
                                              <li key={subMenu + 1}>
                                              <Link
                                                to={subMenus.route}
                                                
                                                className={pathname== subMenus?.route ? "active" : ""}
                                              >
                                                 <i className='bx bxs-circle me-1' />
                                                {subMenus.menuValue}
                                              </Link>
                                              
                                              <ul>
                                              {subMenus?.subMenusValues?.map((value,index)=>{
                                                return(
                                            <li key={index}>

                                            <Link to={value.route} className={pathname== value?.route ? "active" : ""}
                                                >{value.menuValue}</Link>
                                            </li>)})
                                            }
                                            </ul>
                                            </li>
                                          )

                                    }

                                          
                                        </>
                                      );
                                    },
                                  )}
                                </ul>
                              </li>
                            )}
                          </>
                        );
                      },
                    )}
                  </>
                );
              })}

                           </ul>
                            <div className="flags-group">
                                <div className="dropdown has-arrow flag-nav">
                                    <Link
                                        className="nav-link dropdown-toggle "
                                        data-bs-toggle="dropdown"
                                        to="#"
                                        role="button"
                                        aria-expanded="false"
                                    >
                                        <ImageWithBasePath
                                            src="/admin/assets/img/flag/flag-01.png"
                                            className="me-2"
                                            alt="flag"
                                        />
                                        <span>English</span>
                                    </Link>
                                    <div className="dropdown-menu dropdown-menu-right">
                                        <Link to="#" className="dropdown-item">
                                            <ImageWithBasePath src="/admin/assets/img/flag/flag-01.png" alt="flag" />
                                            <span>English</span>
                                        </Link>
                                        <Link to="#" className="dropdown-item">
                                            <ImageWithBasePath src="/admin/assets/img/flag/flag-02.png" alt="flag" />
                                            <span>French</span>
                                        </Link>
                                        <Link to="#" className="dropdown-item">
                                            <ImageWithBasePath src="/admin/assets/img/flag/flag-03.png" alt="flag" />
                                            <span>Spanish</span>
                                        </Link>
                                        <Link to="#" className="dropdown-item">
                                            <ImageWithBasePath src="/admin/assets/img/flag/flag-04.png" alt="flag" />
                                            <span>German</span>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </Scrollbars>
            </div>
            {/* /Sidebar */}
        </>

    )
}

export default AdminSidebar
