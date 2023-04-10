import React from "react";
import { Outlet } from 'react-router-dom';
import Navbar from "../components/navbar";
import OnlineTime from "../components/onlineTime";
import '../styles/Main.css';

function Main({role}) {
    return (
        <div className="Main">
            <Navbar role={role} name={"Aslan Abenov"}/>
            <Outlet />
            <OnlineTime/>
        </div>
    );
}

export default Main;
