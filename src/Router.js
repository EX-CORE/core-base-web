import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./component/App";
import Login from './component/Login';

function Router() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<App/>}></Route>
                <Route path="/login" element={<Login/>}></Route>
            </Routes>
        </BrowserRouter>
    )
}

export default Router;