import React from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Main from "./pages/Main";
import SignIn from "./pages/SignIn";
import Absence from './components/absence'
import Statistics from './components/statistics'

function App() {
  return (
    <Routes>
      <Route path="/login"element = {<SignIn/>}/>
      <Route path="/" element = {<Main/>}>
        <Route index  element = {<Absence/>}/>
        <Route path="statistics"  element = {<Statistics/>}/>
      </Route>
    </Routes>
  );
}

export default App;
