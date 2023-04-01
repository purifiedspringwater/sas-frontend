import React from "react";
import { useState } from 'react';
import {NavLink, Outlet} from 'react-router-dom'
import Navbar from "../components/navbar";
import Absence from '../components/absence'
import OnlineTime from '../components/OnlineTime'
import Statistics from '../components/statistics';
import '../styles/Main.css'

function Main() {

    const [activeLink, setActiveLink] = useState('SignIn');

    const handleLinkClick = (name) => {
        setActiveLink(name);
    };

    return (
        <div className="Main">
            <Navbar />
            <Outlet/>
            <OnlineTime />
        </div>
    );
}

export default Main;
