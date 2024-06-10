import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home, Login } from './pages';
import ReactQueryProvider from './providers/ReactQueryProvider';

function App() {
    return (
        <ReactQueryProvider>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Home/>}></Route>
                    <Route path="/login" element={<Login/>}></Route>
                </Routes>
            </BrowserRouter>
        </ReactQueryProvider>
    )
}

export default App;