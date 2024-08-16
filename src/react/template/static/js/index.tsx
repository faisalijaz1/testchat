// // /* eslint-disable @typescript-eslint/no-explicit-any */
// // import React from "react";
// // import ReactDOM from "react-dom/client";
// // import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
// // import '../node_modules/bootstrap/dist/js/bootstrap.bundle.js';
// // import { BrowserRouter } from "react-router-dom";
// // import Feature from "./feature-module/feature";
// // import { base_path } from "./environment";
// // // import './style/css/app.css'
// // import '../src/style/css/feather.css'
// // import '../src/style/icons/fontawesome/css/all.min.css'
// // import '../src/style/icons/fontawesome/css/fontawesome.min.css'
// // import '../src/style/icons/boxicons/css/boxicons.min.css'
// // import '../src/index.css' // customised style
// // import { Provider } from "react-redux";
// // import store from "./core/data/redux/store";
// // import AppSection from "./feature-module/appSection";


// // const rootElement = document.getElementById("root");
// // // const location = window.location.pathname.split('/');

// // // if (location.includes('admin')) {
// // //   require("../src/style/admin/css/style.css");
// // // } else {
// // //   require("../src/style/css/app.css");
// // // }

// // // const location = window.location.pathname.split('/');

// // if (window.location.pathname.includes('/admin')) {
// //   require("../src/style/admin/css/style.css");
// // } else {
// //   require("../src/style/css/app.css");
// // }



// // if (rootElement) {
// //   const root = ReactDOM.createRoot(rootElement);
// //   root.render(
// //     <React.StrictMode>
// //       <Provider store={store}>
// //       <BrowserRouter basename={base_path}>
// //         <AppSection />
// //       </BrowserRouter>
// //       </Provider>
// //     </React.StrictMode>
// //   );
// // } else {
// //   console.error("Element with id 'root' not found.");
// // }
// /* eslint-disable @typescript-eslint/no-explicit-any */
// import React from "react";
// import ReactDOM from "react-dom";
// import "bootstrap/dist/css/bootstrap.min.css";
// import "bootstrap/dist/js/bootstrap.bundle.js";
// import { BrowserRouter } from "react-router-dom";
// import Feature from "./feature-module/feature";
// import { base_path } from "./environment";
// import "./style/css/feather.css";
// import "./style/icons/fontawesome/css/all.min.css";
// import "./style/icons/fontawesome/css/fontawesome.min.css";
// import "./style/icons/boxicons/css/boxicons.min.css";
// import "./index.css"; // customised style
// import { Provider } from "react-redux";
// import store from "./core/data/redux/store";
// import AppSection from "./feature-module/appSection";

// const rootElement = document.getElementById("root");

// if (window.location.pathname.includes("/admin")) {
//   import("./style/admin/css/style.css");
// } else {
//   import("./style/css/app.css");
// }

// if (rootElement) {
//   const root = ReactDOM.createRoot(rootElement);
//   root.render(
//     <React.StrictMode>
//       <Provider store={store}>
//         <BrowserRouter basename={base_path}>
//           <AppSection />
//         </BrowserRouter>
//       </Provider>
//     </React.StrictMode>
//   );
// } else {
//   console.error("Element with id 'root' not found.");
// }
