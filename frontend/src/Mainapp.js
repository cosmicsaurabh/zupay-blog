import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import "./styles.css";
import Register from "./components/Register";
import Login from "./components/Login";
// import Logout from "./components/utils/Logout";
import App from "./App";
// import ErrorPage from "./components/pages/ErrorPage";
import { NewBlog } from "./components/NewBlog";
function Mainapp() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/newBlog" element={<NewBlog/>} />
        {/* <Route path="/logout" element={<Logout />} /> */}
        {/* <Route path="/*" element={<ErrorPage />} /> */}
      </Routes>
    </Router>
  );
}

export default Mainapp;
