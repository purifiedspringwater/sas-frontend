import React from "react";
import { useState, useEffect } from 'react';
import Navbar from "./components/navbar";
import Absence from './components/absence'
import OnlineTime from "./components/OnlineTime";
import './styles/Main.css'

function Main() {
    return (
        <div className="Main">
            <Navbar />
            <Absence />
            <div>
                <OnlineTime/>
            </div>
        </div>
    );
}

export default Main;
