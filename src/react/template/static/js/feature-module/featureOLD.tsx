// import React, { useEffect } from "react";
// import AllRoutes from "./router/router";
// import { useDispatch, useSelector } from "react-redux";
// import { setMobileView } from "../core/data/redux/commonSlice";
// import { useLocation } from "react-router";

// const Feature = () => {
//   // const location = useLocation().pathname;
//   // const exclusionArray = ["/register","/phone-login"];
//   const location = window.location.pathname;
// console.log(location,"sakthi");




//   const dispatch = useDispatch();

//   const { darkMode } = useSelector((state) => state);
//   const { sidebarStyle } = useSelector((state) => state);
//   const { expandMenu } = useSelector((state) => state);
//   const { mobileView } = useSelector((state) => state);

//   console.log("propslocation",sidebarStyle,expandMenu,mobileView);


//   useEffect(() => {
//     console.count("sakthi")
    
//     if (location.includes("/phone-login") || 
//         location.includes("/email-login") ||
//         location.includes("/mobile-otp") ||
//         location.includes("/lock-screen") ||
//         location.includes("/forgot-password") ||
//         location.includes("/register") ||
//         location.includes("/reset-password") ||
//         location.includes("/reset-password-success") ||
//         location.includes("/status") ||
//         location.includes("/status-other") ||
//         location.includes("/view-status")     
//     ) {
//       console.log("sakthi");
      
//       document.body.classList.add('login-form');
//     } else {
//       console.log("sakthi hema");
      
//       document.body.classList.remove("login-form");
//     }
//     console.log(location,"locationnn");
    
//   }, [location.pathname]);


//   return (
//     <>
//     <div className={mobileView ? "menu-opened" : ""}>
//       <div 
//       className={expandMenu ? "mini-sidebar expand-menu" : 
//                       sidebarStyle ? "mini-sidebar " : ""}
//                       >

//       <div className={darkMode ? "darkmode" : ""}>
//         <div
//           className={location.includes("/phone-login") || location.includes("/email-login") ||
//           location.includes("/mobile-otp") ||
//           location.includes("/lock-screen") ||
//           location.includes("/forgot-password") ||
//           location.includes("/register") ||
//           location.includes("/reset-password") ||
//           location.includes("/reset-password-success") ||
//           location.includes("/status") ||
//           location.includes("/status-other") ||
//           location.includes("/view-status")  ? "main-wrapper register-surv" :
//           mobileView ? "main-wrapper slide-nav" : "main-wrapper"}
        
//         >
//           <AllRoutes />
//         </div>
//         <div className={mobileView ? "sidebar-overlay opened" : "sidebar-overlay"}  onClick={()=> dispatch(setMobileView(false))}></div>
//       </div>
//       </div>
//       </div>
//     </>
//   );
// };

// export default Feature;

// // import React, { useEffect } from "react";
// // import { useLocation } from "react-router-dom"; // Import useLocation
// // import AllRoutes from "./router/router";
// // import { useDispatch, useSelector } from "react-redux";
// // import { setMobileView } from "../core/data/redux/commonSlice";

// // const Feature = () => {
// //   const location = useLocation().pathname; // Get the current location

// //   const dispatch = useDispatch();

// //   const { darkMode, sidebarStyle, expandMenu, mobileView } = useSelector((state) => state);

// //   useEffect(() => {
// //     console.count("sakthi")
// //     console.log(location,"location");
    
// //     const excludedRoutes = [
// //       "/phone-login",
// //       "/email-login",
// //       "/mobile-otp",
// //       "/lock-screen",
// //       "/forgot-password",
// //       "/register",
// //       "/reset-password",
// //       "/reset-password-success",
// //       "/status",
// //       "/status-other",
// //       "/view-status"
// //     ];

// //     const isExcluded = excludedRoutes.some(route => location.includes(route));

// //     if (isExcluded) {
// //       document.body.classList.add("login-form");
// //     } else {
// //       document.body.classList.remove("login-form");
// //     }
// //   }, [location]);

// //   return (
// //     <div className={mobileView ? "menu-opened" : ""}>
// //       <div className={expandMenu ? "mini-sidebar expand-menu" : sidebarStyle ? "mini-sidebar" : ""}>
// //         <div className={darkMode ? "darkmode" : ""}>
// //           <div className={mobileView ? "main-wrapper slide-nav" : "main-wrapper"}>
// //             <AllRoutes />
// //           </div>
// //           <div className={mobileView ? "sidebar-overlay opened" : "sidebar-overlay"} onClick={() => dispatch(setMobileView(false))}></div>
// //         </div>
// //       </div>
// //     </div>
// //   );
// // };

// // export default Feature;


//.tsx

// import React, { useEffect } from "react";
// import AllRoutes from "./router/router.tsx";
// import { useDispatch, useSelector } from "react-redux";
// import { setMobileView } from "../core/data/redux/commonSlice.tsx";

// const Feature = () => {
//   const dispatch = useDispatch();
//   const { darkMode, sidebarStyle, expandMenu, mobileView } = useSelector((state) => state);

//   useEffect(() => {
//     console.count("sakthi");

//     const pathname = window.location.pathname;

//     if (
//       pathname.includes("/phone-login") ||
//       pathname.includes("/email-login") ||
//       pathname.includes("/mobile-otp") ||
//       pathname.includes("/lock-screen") ||
//       pathname.includes("/forgot-password") ||
//       pathname.includes("/register") ||
//       pathname.includes("/reset-password") ||
//       pathname.includes("/reset-password-success") ||
//       pathname.includes("/status") ||
//       pathname.includes("/status-other") ||
//       pathname.includes("/view-status")
//     ) {
//       console.log("sakthi");
//       document.body.classList.add('login-form');
//     } else {
//       console.log("sakthi hema");
//       document.body.classList.remove("login-form");
//     }
//     console.log(pathname, "locationnn");

//   }, []);

//   return (
//     <>
//       <div className={mobileView ? "menu-opened" : ""}>
//         <div
//           className={expandMenu ? "mini-sidebar expand-menu" : sidebarStyle ? "mini-sidebar " : ""}
//         >
//           <div className={darkMode ? "darkmode" : ""}>
//             <div
//               className={
//                 window.location.pathname.includes("/phone-login") ||
//                 window.location.pathname.includes("/email-login") ||
//                 window.location.pathname.includes("/mobile-otp") ||
//                 window.location.pathname.includes("/lock-screen") ||
//                 window.location.pathname.includes("/forgot-password") ||
//                 window.location.pathname.includes("/register") ||
//                 window.location.pathname.includes("/reset-password") ||
//                 window.location.pathname.includes("/reset-password-success") ||
//                 window.location.pathname.includes("/status") ||
//                 window.location.pathname.includes("/status-other") ||
//                 window.location.pathname.includes("/view-status")
//                   ? "main-wrapper register-surv"
//                   : mobileView
//                   ? "main-wrapper slide-nav"
//                   : "main-wrapper"
//               }
//             >
//               <AllRoutes />
//             </div>
//             <div
//               className={mobileView ? "sidebar-overlay opened" : "sidebar-overlay"}
//               onClick={() => dispatch(setMobileView(false))}
//             ></div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default Feature;
