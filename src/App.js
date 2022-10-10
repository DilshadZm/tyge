import React, { useContext, useState } from "react";
import Layout from "./components/NavBar";
import Login from "./components/Login";
import "./input.css";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import AppContext from "./AppContext";
import Dashboard from "./components/Dashboard";
import Bookmarks from "./components/Bookmarks";
import Invoices from "./components/Invoices";
import Contracts from "./components/Contracts";
import People from "./components/People";
import Masters from "./components/masters";
import Companies from "./components/masters/companies";
import Suppliers from "./components/masters/suppliers";
import Currencies from "./components/masters/currencies";
import Users from "./components/masters/users";
import Projects from "./components/masters/projects";
import Countries from "./components/masters/countries";


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
              <Route path="masters" element={<Masters />} />
              <Route path="bookmarks" element={<Bookmarks />} />
              <Route path="invoices" element={<Invoices />} />
              <Route path="contracts" element={<Contracts />} />
              <Route path="people" element={<People/>} />
              <Route path="masters/companies" element={<Companies/>} />
              <Route path="masters/suppliers" element={<Suppliers/>} />
              <Route path="masters/currencies" element={<Currencies/>} />
              <Route path="masters/users" element={<Users/>} />
              <Route path="masters/projects" element={<Projects/>} />
              <Route path="masters/countries" element={<Countries/>} />


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
