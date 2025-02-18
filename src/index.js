import React from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Mylandingpage from './modules/dashboard/Mylandingpage.js';
import { FilterProvider } from './modules/shares/Filter.js';
import Mycartpage from './modules/components/Mycartpage.js';
import "../src/assests/Mysidebar.css";
import "../src/assests/Mynavbar.css";
import "../src/assests/Viewdetails.css";
import ErrorPage from './modules/shares/Myerrorpage.js';
import { Provider } from 'react-redux';
import store from './modules/redux/Reduxstore.js';
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from 'react-toastify';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ToastContainer/>
    <BrowserRouter>
    <Provider store={store}>
    <FilterProvider>
    <Routes>
      <Route path="/" element={<Mylandingpage/>} />
      <Route path='*'  element={<ErrorPage/>}/>
      <Route path='/mycart' element={<Mycartpage/>}/>
    </Routes>
    </FilterProvider>
    </Provider>
    </BrowserRouter>
  </React.StrictMode>
);

reportWebVitals();
