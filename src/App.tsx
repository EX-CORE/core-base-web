import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home, Login } from "./pages";
import ReactQueryProvider from "./providers/ReactQueryProvider";
import Layout from "./components/layouts";

function App() {
  return (
    <ReactQueryProvider>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <Layout>
                <Home />
              </Layout>
            }
          ></Route>
          <Route
            path="/home"
            element={
              <Layout>
                <Home />
              </Layout>
            }
          ></Route>
          <Route path="/login" element={<Login />}></Route>
        </Routes>
      </BrowserRouter>
    </ReactQueryProvider>
  );
}

export default App;
