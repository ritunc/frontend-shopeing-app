// import logo from './logo.svg';
// import './App.css';

import Home from "./Home/Home";
import Upload from "./Upload/Upload";
import Product from './Product/Product';
import Admin from './Admin/Admin'
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
        return (
                <BrowserRouter>
                        <Routes>
                                <Route path='/' element={<Home />} />
                                <Route path='/upload' element={<Upload />} />
                                <Route path='/product' element={<Product />} />
                                <Route path='/admin' element={<Admin />} />
                        </Routes>
                </BrowserRouter>
        );
}

export default App;
