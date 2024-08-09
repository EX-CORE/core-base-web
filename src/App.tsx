import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home, Login } from "./pages";
import {
  OrganizationInfo,
  OrganizationMember,
  OrganizationStructure,
} from "./pages/organization";
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
          <Route
            path="/organization/information"
            element={
              <Layout>
                <OrganizationInfo />
              </Layout>
            }
          ></Route>
          <Route
            path="/organization/structure"
            element={
              <Layout>
                <OrganizationStructure />
              </Layout>
            }
          />
          <Route
            path="/organization/member"
            element={
              <Layout>
                <OrganizationMember />
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
