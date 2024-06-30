import React from 'react';
import '../Menu/Menu.css';
import { HiMenuAlt1 } from "react-icons/hi";
import { HashRouter, Navigate, Route, Routes } from 'react-router-dom';
import { Register } from '../Register/Register';
import Button from 'react-bootstrap/Button';

export const Menu = () => {
    return (
        <div>
            <div className="main">
                <div className="nav">
                    <div className="nav-left">
                        <h1>Job<span>Box</span></h1>
                    </div>
                    <div className="nav-center">
                        <h4>Home</h4>
                        <h4>Find a Job</h4>
                        <h4>Contact Us</h4>
                    </div>
                    <div className="nav-right">
                        <button href="#/login" type='submit' className='login'>Login</button>
                        <Button href="#/register" type='submit' className='register'>Register</Button>
                        <i><HiMenuAlt1 /></i>
                    </div>
                </div>
            </div>

            <HashRouter>
                <Routes>
                    {/* <Route path="/login" element={<Login />} /> */}
                    <Route path="/register" element={<Register />} />
                    {/* <Route path="/" element={<Home />} /> */}
                    <Route path="*" element={<Navigate to="/menu" />} />
                </Routes>
            </HashRouter>
        </div>
    );
}
