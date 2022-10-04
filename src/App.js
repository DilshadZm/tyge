import React, { useContext, useState } from "react";
import Layout from "./components/NavBar";
import Login from "./components/Login";
import "./input.css";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import AppContext from "./AppContext";
import Dashboard from "./components/Dashboard";
import Charts from "./components/Charts";
import Bookmarks from "./components/Bookmarks";
import Invoices from "./components/Invoices";
import Contracts from "./components/Contracts";
import People from "./components/People";

function App() {
  // const authCtx = useContext(AppContext);
  // const isLoggedIn = authCtx.isLoggedIn;
  const [isLoggedIn]=useState(true)
  return (
    <>
      {isLoggedIn ? (
        <BrowserRouter>
          <Layout>
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="dashboard" element={<Dashboard />} />
              <Route path="charts" element={<Charts />} />
              <Route path="bookmarks" element={<Bookmarks />} />
              <Route path="invoices" element={<Invoices />} />
              <Route path="contracts" element={<Contracts />} />
              <Route path="people" element={<People />} />
            </Routes>
          </Layout>
        </BrowserRouter>
      ) : (
        <Login />
      )}
    </>
  );
}

export default App;
