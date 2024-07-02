import React from "react";
import "../Menu/Menu.css";
import { HiMenuAlt1 } from "react-icons/hi";
import { HashRouter, Navigate, Route, Routes } from "react-router-dom";
import { Register } from "../Register/Register";
import Button from "react-bootstrap/Button";
import { Login } from "../Login/Login";

export const Menu = () => {
  return (
    <div>
      <div className="main">
        <div className="nav">
          <div className="nav-left">
            <img
              src="https://jobbox-html.netlify.app/frontend/assets/imgs/template/jobhub-logo.svg"
              alt=""
            ></img>
          </div>
          <div className="nav-center">
            <h4>Home</h4>
            <h4>Find a Job</h4>
            <h4>Contact Us</h4>
          </div>
          <div className="nav-right">
            <button className="login">Login</button>
            <Button className="register">Register</Button>
            <i>
              <HiMenuAlt1 />
            </i>
          </div>
        </div>
      </div>

      <HashRouter>
        <Routes>
          {/* <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} /> */}
          {/* <Route path="/" element={<Home />} /> */}
          {/* <Route path="*" element={<Navigate to="/menu" />} /> */}
        </Routes>
      </HashRouter>
    </div>
  );
};
