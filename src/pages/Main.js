import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../components/navbar";
import OnlineTime from "../components/OnlineTime";
import "../styles/Main.css";

function Main() {
  return (
    <div className="Main">
      <Navbar />
      <Outlet />
      <OnlineTime />
    </div>
  );
}

export default Main;
