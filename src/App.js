import React from "react";
import { Routes, Route } from "react-router-dom";
import Main from "./pages/Main";
import Login from "./pages/SignIn";
import Absence from "./components/absence";
import Statistics from "./components/statistics";
import Specialreason from "./components/specialreason";
import Messages from "./components/messages";
import Settings from "./components/settings";

function App() {
  return <Login />;
}

export default App;
