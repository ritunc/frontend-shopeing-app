import React from 'react';
import ReactDOM from 'react-dom/client';
// import './index.css';
import App from './App';
// import reportWebVitals from './reportWebVitals';
import { Provider } from "react-redux"
import { store } from "./redux/store"


// import Home from "./Home/Home";
// import Upload from "./Upload/Upload";
// import Product from './Product/Product';
// import Admin from './Admin/Admin'
// import { BrowserRouter, Routes, Route } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <App />
  </Provider>

  // <BrowserRouter>
  //   <Routes>
  //     <Route path='/' element={<Home/>} />
  //     <Route path='/upload' element={<Upload/>}/>
  //     <Route path='/product' element={<Product/>}/>
  //     <Route path='/admin'element={<Admin/>}/>
  //   </Routes>
  // </BrowserRouter>

);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
