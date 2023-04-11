import React, { useState, useContext } from 'react';
import logo from '../assets/logo.svg';
import '../styles/SignIn.css';
import { useNavigate, useLocation } from "react-router-dom";
import { UserContext } from "../routing/index.jsx";

function SignIn() {
  const navigate = useNavigate();
  const location = useLocation();
  const fromPage = location.state?.from?.pathname || "/";
  const [ID, setID] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const { store } = useContext(UserContext);

  const handleLogin = async (event) => {
    event.preventDefault();
    console.log("hello");
    const response = await store.login(ID, password);
    console.log(response);

    if (response.status === 200) {
      console.log(response.status);
      navigate(fromPage);
    } else {
      setError("Invalid id or password!");
    }
  };

  return (
    <div className="signIn">
      <div className="container">
        <img src={logo} alt="Logo" />
        <form onSubmit={handleLogin}>
          {error && <div style={{ color: 'red' }}>{error}</div>}
          <input type="text" placeholder='ID' value={ID} onChange={(e) => setID(e.target.value)} />
          <input type="password" placeholder='PASSWORD' value={password} onChange={(e) => setPassword(e.target.value)} />
          <button type="submit" >LOG IN</button>
        </form>
      </div>
    </div>

  );
}

export default SignIn;