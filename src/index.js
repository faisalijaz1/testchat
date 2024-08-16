import React from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.js';
import { BrowserRouter } from 'react-router-dom';
// import Feature from '../src/react/template/static/js/feature-module/feature'; // This import might not be used, you can remove if unnecessary
import { base_path } from '../src/react/template/static/js/environment.tsx'; // This import might not be used, you can remove if unnecessary
import '../src/react/template/static/css/style/css/feather.css';
import '../src/react/template/static/css/style/icons/fontawesome/css/all.min.css';
import '../src/react/template/static/css/style/icons/fontawesome/css/fontawesome.min.css';
import '../src/react/template/static/css/style/icons/boxicons/css/boxicons.min.css';
import '../src/react/template/static/css/index.css'; // Customised style
import { Provider } from 'react-redux';
import store from '../src/react/template/static/js/core/data/redux/store.tsx';
import AppSection from '../src/react/template/static/js/feature-module/appSection.js';
import App from './App';
const rootElement = document.getElementById('root');

// Conditional import for styles based on pathname
if (window.location.pathname.includes('/admin')) {
  import('../src/react/template/admin/style/admin/css/style.css');
} else {
  import('../src/react/template/static/css/style/css/app.css');
}
// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );

if (rootElement) {
  const root = ReactDOM.createRoot(rootElement);
  root.render(
    <React.StrictMode>
      <Provider store={store}>
        <BrowserRouter basename={base_path}>
          <AppSection />
          {/* <App /> */}
        </BrowserRouter>
      </Provider>
    </React.StrictMode>
  );
} else {
  console.error("Element with id 'root' not found.");
}
