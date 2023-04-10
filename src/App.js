import React from "react";
import { Routes, Route } from 'react-router-dom';
import Main from "./pages/Main";
import Login from "./pages/SignIn";
import Absence from './components/student/absence'
import Statistics from './components/student/statistics'
import Specialreason from "./components/student/specialreason";
import Messages from './components/student/messages'
import Settings from './components/student/settings'
import AdminStatistics from './components/admin/adminStatistics'
import AdminReason from './components/admin/SpecialReason'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/student" element={<Main role={"student"}/>}>
        <Route index element={<Absence />} />
        <Route path="statistics" element={<Statistics />} />
        <Route path="reason" element={<Specialreason />} />
        <Route path="settings" element={<Settings />} />
        <Route path="messages" element={<Messages />} />
      </Route>
      <Route path="/admin" element={<Main role={"admin"}/>}>
        <Route index element={<AdminStatistics />} />
        <Route path="reason" element={<AdminReason />} />
      </Route>
    </Routes>
  );
}

export default App;
